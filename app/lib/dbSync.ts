import { supabase } from "./supabase";

function ls<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}
function lsSet(key: string, val: unknown) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

export async function syncOnLogin(userId: string): Promise<boolean> {
  const [
    { data: prog },
    { data: bmarks },
    { data: nts },
    { data: prefs },
    { data: streak },
  ] = await Promise.all([
    supabase.from("progress").select("*").eq("user_id", userId).maybeSingle(),
    supabase.from("bookmarks").select("*").eq("user_id", userId),
    supabase.from("notes").select("*").eq("user_id", userId),
    supabase.from("preferences").select("*").eq("user_id", userId).maybeSingle(),
    supabase.from("streaks").select("*").eq("user_id", userId).maybeSingle(),
  ]);

  let changed = false;

  // Progress
  if (prog) {
    lsSet("bs_progress", { day: prog.day, themeId: prog.theme_id }); changed = true;
  } else {
    const local = ls<{ day?: number; themeId?: string }>("bs_progress", {});
    await supabase.from("progress").upsert({ user_id: userId, day: local.day ?? 0, theme_id: local.themeId ?? "guided-40" });
  }

  // Bookmarks
  if (bmarks && bmarks.length > 0) {
    lsSet("bs_bookmarks", bmarks.map(b => ({ id: b.id, book: b.book, chapter: b.chapter, verse: b.verse, text: b.text, ref: b.ref, date: b.created_at })));
    changed = true;
  } else {
    const local = ls<{ id: string; book: string; chapter: number; verse: number; text: string; ref: string }[]>("bs_bookmarks", []);
    if (local.length) await supabase.from("bookmarks").upsert(local.map(b => ({ ...b, user_id: userId })));
  }

  // Notes
  if (nts && nts.length > 0) {
    const map: Record<string, string> = {};
    nts.forEach(n => { map[n.note_key] = n.text; });
    lsSet("bs_notes", map); changed = true;
  } else {
    const local = ls<Record<string, string>>("bs_notes", {});
    const rows = Object.entries(local).map(([key, text]) => {
      const parts = key.split("-");
      const verse = Number(parts.pop()); const chapter = Number(parts.pop()); const book = parts.join("-");
      return { user_id: userId, note_key: key, book, chapter, verse, text };
    });
    if (rows.length) await supabase.from("notes").upsert(rows);
  }

  // Preferences
  if (prefs) {
    lsSet("bs_cover", { id: prefs.cover_id, url: "", label: "" });
    lsSet("bs_fontsize", prefs.font_size);
    lsSet("bs_theme", prefs.is_dark);
    lsSet("bs_onboarded", prefs.onboarded);
    changed = true;
  } else {
    const cover = ls<{ id?: string }>("bs_cover", { id: "mountains" });
    await supabase.from("preferences").upsert({
      user_id: userId,
      cover_id: cover?.id ?? "mountains",
      font_size: ls<number>("bs_fontsize", 17),
      is_dark: ls<boolean>("bs_theme", false),
      onboarded: ls<boolean>("bs_onboarded", false),
    });
  }

  // Streak
  if (streak) {
    lsSet("bs_streak", { lastDate: streak.last_date, count: streak.count }); changed = true;
  } else {
    const local = ls<{ lastDate?: string; count?: number }>("bs_streak", {});
    if (local.lastDate) await supabase.from("streaks").upsert({ user_id: userId, last_date: local.lastDate, count: local.count ?? 0 });
  }

  return changed;
}

// Background push helpers — llamar después de cada acción del usuario

export async function pushProgress(userId: string, day: number, themeId: string) {
  await supabase.from("progress").upsert({ user_id: userId, day, theme_id: themeId, updated_at: new Date().toISOString() });
}

export async function pushBookmark(userId: string, b: { id: string; book: string; chapter: number; verse: number; text: string; ref: string }) {
  await supabase.from("bookmarks").upsert({ ...b, user_id: userId });
}

export async function deleteBookmark(userId: string, id: string) {
  await supabase.from("bookmarks").delete().eq("user_id", userId).eq("id", id);
}

export async function pushNote(userId: string, book: string, chapter: number, verse: number, text: string) {
  const key = `${book}-${chapter}-${verse}`;
  if (!text) {
    await supabase.from("notes").delete().eq("user_id", userId).eq("note_key", key);
  } else {
    await supabase.from("notes").upsert({ user_id: userId, note_key: key, book, chapter, verse, text, updated_at: new Date().toISOString() });
  }
}

export async function pushPreferences(userId: string, prefs: { cover_id?: string; font_size?: number; is_dark?: boolean; onboarded?: boolean }) {
  await supabase.from("preferences").upsert({ user_id: userId, ...prefs, updated_at: new Date().toISOString() });
}

export async function pushStreak(userId: string, lastDate: string, count: number) {
  await supabase.from("streaks").upsert({ user_id: userId, last_date: lastDate, count, updated_at: new Date().toISOString() });
}
