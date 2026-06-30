"use client";
import { C } from "../lib/tokens";
import { getBook } from "../data/books";
import { getCtx } from "../data/context";
import { THEMES } from "../data/guided";
import type { Progress } from "../lib/types";

type Props = {
  bookId: string;
  chapter: number;
  progress: Progress;
  onRead: (book: string, chapter: number) => void;
  onMark: () => void;
};

export function NextSuggestion({ bookId, chapter, progress, onRead, onMark }: Props) {
  const theme = THEMES.find(t => t.id === (progress.themeId ?? "guided-40")) ?? THEMES[0];
  const book = getBook(bookId);

  // ¿Es este el capítulo del plan de hoy?
  const todayStep = theme.plan[progress.day];
  const isTodayChapter = todayStep?.book === bookId && todayStep?.ch === chapter;

  // Siguiente en el plan
  const nextPlanStep = theme.plan[progress.day + 1];
  const nextPlanBook = nextPlanStep ? getBook(nextPlanStep.book) : null;

  // Capítulos relacionados desde CTX (mismo libro, adyacentes con contexto)
  const prevCtx = chapter > 1 ? getCtx(bookId, chapter - 1) : null;
  const nextCtx = getCtx(bookId, chapter + 1);
  const hasNextChapter = chapter < (book?.chapters ?? 1);
  const nextChapterCtx = hasNextChapter ? nextCtx : null;

  const hasAnySuggestion = isTodayChapter || nextPlanStep || hasNextChapter;
  if (!hasAnySuggestion) return null;

  return (
    <div style={{ marginTop: 32, borderTop: `1px solid ${C.border}`, paddingTop: 24 }}>
      <p style={{ fontSize: 10, color: C.faint, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 16 }}>
        ¿Qué sigue?
      </p>

      {/* Si es el capítulo de hoy en el plan */}
      {isTodayChapter && (
        <div style={{ background: C.amberBg, border: `1px solid ${C.amberB}`, borderRadius: 14, padding: "14px 16px", marginBottom: 12 }}>
          <p style={{ fontSize: 12, color: C.amber, fontWeight: 700, marginBottom: 6 }}>
            📅 Este es el capítulo de hoy · {theme.name} Día {progress.day + 1}
          </p>
          <button onClick={onMark}
            style={{ background: C.amber, color: "#fff", border: "none", borderRadius: 10, padding: "10px 16px", fontSize: 13, fontWeight: 800, cursor: "pointer", width: "100%" }}>
            Marcar como leído ✓
          </button>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {/* Siguiente capítulo del libro actual */}
        {hasNextChapter && (
          <button onClick={() => onRead(bookId, chapter + 1)}
            style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "12px 14px", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 10, color: C.faint, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 3 }}>Siguiente capítulo</p>
              <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>
                {book?.name} {chapter + 1}
                {nextChapterCtx && <span style={{ fontSize: 13, color: C.dim, fontWeight: 400 }}> · {nextChapterCtx.title}</span>}
              </p>
            </div>
            <span style={{ color: C.amber, fontSize: 18, fontWeight: 700 }}>→</span>
          </button>
        )}

        {/* Siguiente en el plan de lectura */}
        {nextPlanStep && !(nextPlanStep.book === bookId && nextPlanStep.ch === chapter + 1) && (
          <button onClick={() => onRead(nextPlanStep.book, nextPlanStep.ch)}
            style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "12px 14px", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 10, color: C.faint, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 3 }}>
                {theme.name} · Día {progress.day + 2}
              </p>
              <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>
                {nextPlanBook?.name} {nextPlanStep.ch}
                {(() => { const c = getCtx(nextPlanStep.book, nextPlanStep.ch); return c ? <span style={{ fontSize: 13, color: C.dim, fontWeight: 400 }}> · {c.title}</span> : null; })()}
              </p>
            </div>
            <span style={{ color: C.amber, fontSize: 18, fontWeight: 700 }}>→</span>
          </button>
        )}
      </div>
    </div>
  );
}
