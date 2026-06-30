import type { Verse } from "./types";
import { getAbbrev } from "../data/bibleAbbrevs";

const REMOTE = "https://bible-api.deno.dev/api/read/rv1960";

// Cache de capítulos (ambas fuentes comparten el mismo cache)
const chapterCache = new Map<string, Verse[]>();
// Cache de libros locales (evita re-descargar el archivo completo)
const localBookCache = new Map<string, string[][]>();

async function fromRemote(bookId: string, chapter: number): Promise<Verse[]> {
  const r = await fetch(`${REMOTE}/${bookId}/${chapter}`, { signal: AbortSignal.timeout(6000) });
  if (!r.ok) throw new Error(`API ${r.status}`);
  const d = await r.json();
  if (!Array.isArray(d.vers) || d.vers.length === 0) throw new Error("Sin versos");
  return d.vers.map((v: { verse: string; number: number }) => ({
    v: v.number,
    t: v.verse.trim(),
  }));
}

async function fromLocal(bookId: string, chapter: number): Promise<Verse[]> {
  const abbrev = getAbbrev(bookId);
  if (!localBookCache.has(abbrev)) {
    const r = await fetch(`/bible/${abbrev}.json`);
    if (!r.ok) throw new Error("Sin conexión");
    localBookCache.set(abbrev, await r.json());
  }
  const chapters = localBookCache.get(abbrev)!;
  const verses = chapters[chapter - 1];
  if (!verses?.length) throw new Error(`Capítulo ${chapter} no encontrado`);
  return verses.map((t, i) => ({ v: i + 1, t: t.trim() })).filter(v => v.t);
}

export async function fetchChapter(bookId: string, chapter: number): Promise<Verse[]> {
  const key = `${bookId}-${chapter}`;
  if (chapterCache.has(key)) return chapterCache.get(key)!;

  let verses: Verse[];
  try {
    verses = await fromRemote(bookId, chapter);
  } catch {
    verses = await fromLocal(bookId, chapter);
  }

  chapterCache.set(key, verses);
  return verses;
}

export async function fetchVerse(bookId: string, chapter: number, verseNum: number): Promise<Verse | null> {
  const verses = await fetchChapter(bookId, chapter);
  return verses.find(v => v.v === verseNum) ?? null;
}
