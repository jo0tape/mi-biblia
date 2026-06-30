"use client";
import { useState, useEffect } from "react";
import { C } from "../lib/tokens";
import { getBook } from "../data/books";
import { getCtx } from "../data/context";
import { getDictEntry } from "../data/dictionary";
import { GENEALOGIES } from "../data/genealogies";
import { fetchChapter } from "../lib/api";
import { tok } from "../lib/highlight";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTTS } from "../hooks/useTTS";
import { useNotes } from "../hooks/useNotes";
import type { Verse, DictEntry } from "../lib/types";
import { Chip } from "./Chip";
import { VideoCard } from "./VideoCard";
import { GenealogyBlock } from "./GenealogyBlock";
import { VerseActions } from "./VerseActions";
import { MeditationMode } from "./MeditationMode";
import { NextSuggestion } from "./NextSuggestion";
import type { Progress } from "../lib/types";

type Props = {
  bookId: string;
  chapter: number;
  onBack: (action: "back" | "prev" | "next") => void;
  onWord: (entry: DictEntry) => void;
  onRead: (book: string, chapter: number) => void;
  progress?: Progress;
  onMark?: () => void;
};

export function Reader({ bookId, chapter, onBack, onWord, onRead, progress, onMark }: Props) {
  const book = getBook(bookId);
  const ctx = getCtx(bookId, chapter);
  const [verses, setVerses] = useState<Verse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [ctxOpen, setCtxOpen] = useState(false);
  const [activeVerse, setActiveVerse] = useState<number | null>(null);
  const [meditating, setMeditating] = useState(false);
  const [meditationStart, setMeditationStart] = useState(0);
  const [fontSize] = useLocalStorage<number>("bs_fontsize", 17);
  const { speaking, activeVerse: ttsVerse, toggle: toggleTTS } = useTTS();
  const { hasNote } = useNotes();

  useEffect(() => {
    setLoading(true); setError(null); setVerses([]); setActiveVerse(null);
    fetchChapter(bookId, chapter)
      .then(v => { setVerses(v); setLoading(false); })
      .catch(e => { setError(e.message); setLoading(false); });
  }, [bookId, chapter, book?.api]);

  const hl = ctx?.highlights ?? [];
  const verseRef = (v: number) => `${book?.name} ${chapter}:${v}`;

  const handleVerseClick = (verseNum: number) => {
    setActiveVerse(prev => prev === verseNum ? null : verseNum);
  };

  const enterMeditation = (verseNum?: number) => {
    const idx = verseNum ? Math.max(0, verses.findIndex(v => v.v === verseNum)) : 0;
    setMeditationStart(idx);
    setMeditating(true);
  };

  const genealogy = ctx?.genealogy ? GENEALOGIES[ctx.genealogy] : null;

  return (
    <div>
      {meditating && (
        <MeditationMode verses={verses} startIdx={meditationStart} onClose={() => setMeditating(false)} />
      )}

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
        <button onClick={() => onBack("back")} style={{ background: "none", border: "none", color: C.amber, fontSize: 15, fontWeight: 700, cursor: "pointer", padding: 0 }}>←</button>
        <Chip>{book?.name} {chapter}</Chip>
        <span style={{ fontSize: 11, color: C.faint, background: C.card, border: `1px solid ${C.border}`, borderRadius: 20, padding: "3px 9px", fontWeight: 600 }}>RVR1960</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          <button onClick={() => toggleTTS(verses)}
            style={{ background: speaking ? C.amberBg : C.card, border: `1px solid ${speaking ? C.amber : C.border}`, borderRadius: 8, padding: "5px 10px", fontSize: 13, color: speaking ? C.amber : C.dim, cursor: "pointer" }}
            title={speaking ? "Detener lectura" : "Leer en voz alta"}>
            {speaking ? "⏹️" : "🔊"}
          </button>
          <button onClick={() => enterMeditation()}
            style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "5px 10px", fontSize: 13, color: C.dim, cursor: "pointer" }}
            title="Modo meditación">
            🌙
          </button>
        </div>
      </div>

      {/* Context toggle */}
      {ctx && (
        <button onClick={() => setCtxOpen(o => !o)}
          style={{ background: ctxOpen ? C.amberBg : C.card, border: `1px solid ${ctxOpen ? C.amberC : C.border}`, borderRadius: 10, padding: "10px 14px", color: ctxOpen ? C.amber : C.dim, fontSize: 12, fontWeight: 700, cursor: "pointer", width: "100%", textAlign: "left", marginBottom: 14, display: "flex", justifyContent: "space-between" }}>
          <span>{ctxOpen ? "Ocultar contexto histórico" : "Ver contexto histórico"}</span>
          <span>{ctxOpen ? "▲" : "▼"}</span>
        </button>
      )}
      {ctxOpen && ctx && (
        <div style={{ background: C.amberBg, border: `1px solid ${C.amberB}`, borderRadius: 12, padding: 16, marginBottom: 16 }}>
          <p style={{ fontSize: 14, color: "#7B4A1A", lineHeight: 1.9, whiteSpace: "pre-line" }}>{ctx.context}</p>
        </div>
      )}

      {/* Genealogy */}
      {genealogy && (
        <div style={{ marginBottom: 16 }}>
          <GenealogyBlock genealogy={genealogy} onRead={onRead} />
        </div>
      )}

      {/* Highlight hint */}
      {hl.length > 0 && (
        <div style={{ background: C.blueBg, border: `1px solid ${C.blueA}`, borderRadius: 8, padding: "8px 12px", marginBottom: 16, display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ color: C.blue }}>◈</span>
          <p style={{ fontSize: 12, color: C.blue }}>Las <span style={{ color: C.amber, textDecoration: "underline dotted", textUnderlineOffset: 3, fontWeight: 600 }}>palabras subrayadas</span> tienen explicación</p>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div style={{ padding: "40px 0", textAlign: "center" }}>
          <div style={{ width: 28, height: 28, border: `3px solid ${C.border}`, borderTopColor: C.amber, borderRadius: "50%", animation: "spin .8s linear infinite", margin: "0 auto 12px" }} />
          <p style={{ fontSize: 13, color: C.dim }}>Cargando {book?.name} {chapter}…</p>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div style={{ background: "#FEF2F2", border: `1px solid ${C.redA}`, borderRadius: 12, padding: 16, marginBottom: 16 }}>
          <p style={{ fontSize: 13, color: C.red, marginBottom: 4, fontWeight: 600 }}>No se pudo cargar el texto</p>
          <p style={{ fontSize: 12, color: "#991B1B" }}>Verifica tu conexión a internet. La app intenta cargar RVR1960 en línea; si no hay red, usa la versión local incluida.</p>
        </div>
      )}

      {/* Verses */}
      {verses.length > 0 && (
        <div style={{ marginBottom: 24 }}>
          {verses.map(v => {
            const parts = tok(v.t, hl);
            const isActive = activeVerse === v.v;
            const isTTSActive = ttsVerse === v.v;
            const noteExists = hasNote(bookId, chapter, v.v);
            return (
              <div key={v.v} style={{ marginBottom: isActive ? 6 : 18 }}>
                <div onClick={() => handleVerseClick(v.v)}
                  style={{ display: "flex", gap: 12, cursor: "pointer", background: isTTSActive ? C.amberBg : "transparent", borderRadius: 8, padding: isTTSActive ? "4px 8px" : "4px 0", transition: "background .3s" }}>
                  <span style={{ fontSize: 10, fontWeight: 800, color: C.amberL, minWidth: 18, marginTop: 5, flexShrink: 0, opacity: .7 }}>{v.v}</span>
                  <p style={{ fontSize, lineHeight: 1.85, color: C.text, flex: 1 }}>
                    {parts.map((p, i) => p.h
                      ? <span key={i} onClick={e => { e.stopPropagation(); const entry = getDictEntry(p.w ?? ""); if (entry) onWord(entry); }}
                          style={{ color: C.amber, textDecoration: "underline", textDecorationStyle: "dotted", textUnderlineOffset: 4, cursor: "pointer", fontWeight: 600 }}>{p.text}</span>
                      : <span key={i}>{p.text}</span>
                    )}
                    {noteExists && <span style={{ display: "inline-block", width: 6, height: 6, background: C.blue, borderRadius: "50%", marginLeft: 4, verticalAlign: "middle" }} />}
                  </p>
                </div>
                {isActive && (
                  <div style={{ paddingLeft: 30 }}>
                    <VerseActions book={bookId} chapter={chapter} verse={v.v} text={v.t} verseRef={verseRef(v.v)}
                      onMeditate={() => enterMeditation(v.v)} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Key verse + stake + video */}
      {ctx && (
        <>
          <div style={{ borderLeft: `3px solid ${C.amber}`, paddingLeft: 16, marginBottom: 18 }}>
            <p style={{ fontSize: 10, color: C.amber, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 8 }}>Versículo central</p>
            <p style={{ fontSize: 17, fontStyle: "italic", color: C.text, lineHeight: 1.65, marginBottom: 6 }}>"{ctx.keyText}"</p>
            <p style={{ fontSize: 11, color: C.amber, fontWeight: 700 }}>{ctx.keyVerse}</p>
          </div>
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px", marginBottom: 18 }}>
            <p style={{ fontSize: 10, color: C.dim, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 6 }}>Lo que está en juego</p>
            <p style={{ fontSize: 14, color: C.dim, lineHeight: 1.8, whiteSpace: "pre-line" }}>{ctx.stake}</p>
          </div>
          {ctx.video && <VideoCard v={ctx.video} />}
        </>
      )}

      {/* Navigation */}
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        {chapter > 1 && (
          <button onClick={() => onBack("prev")} style={{ flex: 1, background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: 12, color: C.dim, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
            ← Cap. {chapter - 1}
          </button>
        )}
        {chapter < (book?.chapters ?? 50) && (
          <button onClick={() => onBack("next")} style={{ flex: 1, background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: 12, color: C.dim, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
            Cap. {chapter + 1} →
          </button>
        )}
      </div>

      {/* ¿Qué sigue? */}
      {progress && onMark && (
        <NextSuggestion
          bookId={bookId}
          chapter={chapter}
          progress={progress}
          onRead={onRead}
          onMark={onMark}
        />
      )}
    </div>
  );
}
