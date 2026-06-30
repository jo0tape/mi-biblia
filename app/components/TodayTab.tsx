"use client";
import { useState, useEffect, useRef } from "react";
import { C } from "../lib/tokens";
import { getBook } from "../data/books";
import { getCtx } from "../data/context";
import { THEMES } from "../data/guided";
import { getDailyVerseRef } from "../data/dailyVerses";
import { fetchVerse } from "../lib/api";
import { useStreak } from "../hooks/useStreak";
import type { Progress, Cover } from "../lib/types";
import { StreakBadge } from "./StreakBadge";
import { MoodSelector } from "./MoodSelector";
import { COVERS } from "../data/covers";

type Props = {
  progress: Progress;
  onMark: () => void;
  onThemeChange: (themeId: string) => void;
  onRead: (book: string, chapter: number) => void;
  cover: Cover;
  onChangeCover: () => void;
};

export function TodayTab({ progress, onMark, onThemeChange, onRead, cover, onChangeCover }: Props) {
  const [dvText, setDvText] = useState<string | null>(null);
  const [dvLoading, setDvLoading] = useState(true);
  const [showMood, setShowMood] = useState(false);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeChipRef = useRef<HTMLButtonElement>(null);
  const { count: streakCount, markToday } = useStreak();

  const dvRef = getDailyVerseRef();
  const activeThemeId = progress.themeId ?? "guided-40";
  const theme = THEMES.find(t => t.id === activeThemeId) ?? THEMES[0];
  const step = theme.plan[Math.min(progress.day, theme.plan.length - 1)];
  const pct = Math.round((progress.day / theme.plan.length) * 100);
  const ctx = step ? getCtx(step.book, step.ch) : null;

  // Auto-scroll al chip activo cuando cambia el tema
  useEffect(() => {
    if (activeChipRef.current && scrollRef.current) {
      activeChipRef.current.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
    // Actualizar visibilidad de fades
    const el = scrollRef.current;
    if (el) {
      setShowLeftFade(el.scrollLeft > 4);
      setShowRightFade(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    }
  }, [progress.themeId]);

  useEffect(() => {
    const cacheKey = `bs_dv_${dvRef.ref}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) { setDvText(cached); setDvLoading(false); return; }
    fetchVerse(dvRef.book, dvRef.chapter, dvRef.verse)
      .then(v => {
        if (v?.t) { setDvText(v.t); sessionStorage.setItem(cacheKey, v.t); }
        setDvLoading(false);
      })
      .catch(() => setDvLoading(false));
  }, []);

  const handleMarkRead = () => { onMark(); markToday(); };

  // Próximos días: desde el día siguiente al actual
  const upcomingDays = theme.plan.slice(progress.day + 1, progress.day + 5);

  return (
    <div>
      {/* Hero */}
      <div style={{ position: "relative", height: 220, borderRadius: 16, overflow: "hidden", marginBottom: 16, background: `url(${cover?.url ?? COVERS[0].url}) center/cover` }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.55))" }} />
        <div style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,.8)", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 4 }}>Versículo del día · {dvRef.ref}</p>
          {dvLoading
            ? <div style={{ height: 48, background: "rgba(255,255,255,.1)", borderRadius: 6 }} />
            : <p style={{ fontSize: 15, color: "#fff", fontStyle: "italic", lineHeight: 1.55 }}>"{dvText ?? dvRef.ref}"</p>
          }
        </div>
        <button onClick={onChangeCover}
          style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,.2)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,.3)", borderRadius: 20, padding: "5px 12px", fontSize: 11, color: "#fff", fontWeight: 700, cursor: "pointer" }}>
          🖼 Portada
        </button>
      </div>

      {/* Streak */}
      {streakCount > 0 && <div style={{ marginBottom: 14 }}><StreakBadge count={streakCount} /></div>}

      {/* Mood toggle */}
      <button onClick={() => setShowMood(v => !v)}
        style={{ width: "100%", background: showMood ? C.amberBg : C.card, border: `1px solid ${showMood ? C.amber : C.border}`, borderRadius: 12, padding: "12px 16px", cursor: "pointer", textAlign: "left", marginBottom: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: showMood ? C.amber : C.text }}>¿Cómo te sientes hoy?</span>
        <span style={{ fontSize: 14, color: C.dim }}>{showMood ? "▲" : "▼"}</span>
      </button>
      {showMood && <div style={{ marginBottom: 16 }}><MoodSelector onReadChapter={onRead} /></div>}

      {/* Theme selector — cambia progress.themeId vía onThemeChange */}
      <div style={{ marginBottom: 14 }}>
        <p style={{ fontSize: 10, color: C.faint, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 8 }}>Ruta de lectura</p>
        <div style={{ position: "relative" }}>
          <div
            ref={scrollRef}
            onScroll={e => {
              const el = e.currentTarget;
              setShowLeftFade(el.scrollLeft > 4);
              setShowRightFade(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
            }}
            style={{
              display: "flex", gap: 8,
              overflowX: "scroll",
              WebkitOverflowScrolling: "touch" as const,
              scrollbarWidth: "none" as const,
              paddingBottom: 4,
              paddingLeft: showLeftFade ? 2 : 0,
              paddingRight: showRightFade ? 32 : 8,
            }}>
            {THEMES.map(t => {
              const isActive = activeThemeId === t.id;
              return (
                <button
                  key={t.id}
                  ref={isActive ? activeChipRef : null}
                  onClick={() => onThemeChange(t.id)}
                  style={{ flexShrink: 0, background: isActive ? C.amber : C.card, color: isActive ? "#fff" : C.dim, border: `1px solid ${isActive ? C.amber : C.border}`, borderRadius: 20, padding: "7px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
                  {t.name}
                </button>
              );
            })}
          </div>
          {/* Fade izquierda — visible cuando hay contenido a la izquierda */}
          {showLeftFade && (
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 4, width: 36, background: `linear-gradient(to left, transparent, ${C.bg})`, pointerEvents: "none" }} />
          )}
          {/* Fade derecha — visible cuando hay contenido a la derecha */}
          {showRightFade && (
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 4, width: 36, background: `linear-gradient(to right, transparent, ${C.bg})`, pointerEvents: "none" }} />
          )}
        </div>
      </div>

      {/* Current step */}
      {step && (
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, marginBottom: 14, boxShadow: "0 2px 8px rgba(0,0,0,.06)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <p style={{ fontSize: 11, color: C.dim, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em" }}>
              {theme.name} · Día {progress.day + 1}/{theme.plan.length}
            </p>
            <p style={{ fontSize: 11, color: C.amber, fontWeight: 700 }}>{pct}%</p>
          </div>
          <div style={{ background: C.card, borderRadius: 99, height: 4, marginBottom: 14 }}>
            <div style={{ background: C.amber, borderRadius: 99, height: 4, width: `${Math.max(pct, 2)}%`, transition: "width .4s" }} />
          </div>
          <p style={{ fontSize: 20, fontWeight: 900, color: C.text, marginBottom: 4 }}>{getBook(step.book)?.name} {step.ch}</p>
          {ctx && <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.6, marginBottom: 14 }}>{ctx.stake?.slice(0, 110)}…</p>}
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => onRead(step.book, step.ch)} style={{ flex: 2, background: C.amber, color: "#fff", border: "none", borderRadius: 10, padding: 13, fontSize: 14, fontWeight: 900, cursor: "pointer" }}>
              Leer ahora →
            </button>
            <button onClick={handleMarkRead} style={{ flex: 1, background: C.card, color: C.dim, border: `1px solid ${C.border}`, borderRadius: 10, padding: 13, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
              Ya leí ✓
            </button>
          </div>
        </div>
      )}

      {/* Próximos días: empieza DESPUÉS del día actual */}
      {upcomingDays.length > 0 && (
        <>
          <p style={{ fontSize: 10, color: C.faint, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 10 }}>Próximos días</p>
          {upcomingDays.map((s, i) => (
            <button key={s.day} onClick={() => onRead(s.book, s.ch)}
              style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, width: "100%", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.card, border: `2px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: C.faint, flexShrink: 0 }}>
                {progress.day + i + 2}
              </div>
              <p style={{ fontSize: 13, color: C.dim }}>
                {getBook(s.book)?.name} {s.ch}
              </p>
            </button>
          ))}
        </>
      )}
    </div>
  );
}
