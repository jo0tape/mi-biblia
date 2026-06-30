"use client";
import { useState } from "react";
import { C } from "../lib/tokens";
import { EMOTIONS } from "../data/emotions";
import { getBook } from "../data/books";
import { fetchVerse } from "../lib/api";
import type { Emotion, EmotionRef } from "../lib/types";

type VerseResult = { ref: EmotionRef; text: string | null; loading: boolean };

type Props = { onReadChapter: (book: string, chapter: number) => void };

export function MoodSelector({ onReadChapter }: Props) {
  const [selected, setSelected] = useState<Emotion | null>(null);
  const [results, setResults] = useState<VerseResult[]>([]);
  const [fetching, setFetching] = useState(false);

  const selectEmotion = async (emotion: Emotion) => {
    if (selected?.id === emotion.id) { setSelected(null); setResults([]); return; }
    setSelected(emotion);
    setFetching(true);
    setResults(emotion.refs.map(r => ({ ref: r, text: null, loading: true })));
    const fetched = await Promise.all(emotion.refs.map(async ref => {
      try {
        const v = await fetchVerse(ref.book, ref.chapter, ref.verse);
        return { ref, text: v?.t ?? null, loading: false };
      } catch {
        return { ref, text: null, loading: false };
      }
    }));
    setResults(fetched);
    setFetching(false);
  };

  return (
    <div>
      <p style={{ fontSize: 11, color: C.dim, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>¿Cómo te sientes hoy?</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: selected ? 16 : 0 }}>
        {EMOTIONS.map(e => (
          <button key={e.id} onClick={() => selectEmotion(e)}
            style={{ background: selected?.id === e.id ? C.amberBg : C.card, border: `1px solid ${selected?.id === e.id ? C.amber : C.border}`, borderRadius: 10, padding: "10px 4px", cursor: "pointer", textAlign: "center", transition: "all .15s" }}>
            <div style={{ fontSize: 22, marginBottom: 3 }}>{e.emoji}</div>
            <div style={{ fontSize: 10, color: selected?.id === e.id ? C.amber : C.dim, fontWeight: 700, lineHeight: 1.2 }}>{e.label}</div>
          </button>
        ))}
      </div>

      {selected && (
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, animation: "fadeIn .2s ease" }}>
          <p style={{ fontSize: 13, color: C.amber, fontWeight: 800, marginBottom: 14 }}>{selected.emoji} {selected.label}</p>
          {fetching
            ? <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
                <div style={{ width: 24, height: 24, border: `3px solid ${C.border}`, borderTopColor: C.amber, borderRadius: "50%", animation: "spin .8s linear infinite" }} />
              </div>
            : results.map((r, i) => {
              const book = getBook(r.ref.book);
              const refStr = `${book?.name ?? r.ref.book} ${r.ref.chapter}:${r.ref.verse}`;
              return (
                <div key={i} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: i < results.length - 1 ? `1px solid ${C.border}` : "none" }}>
                  {r.loading
                    ? <div style={{ height: 40, background: C.card, borderRadius: 8, animation: "fadeIn 1s ease infinite alternate" }} />
                    : r.text
                      ? <>
                          <p style={{ fontSize: 15, color: C.text, lineHeight: 1.7, fontStyle: "italic", marginBottom: 8 }}>"{r.text}"</p>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ fontSize: 11, color: C.amber, fontWeight: 700 }}>{refStr}</span>
                            <button onClick={() => onReadChapter(r.ref.book, r.ref.chapter)}
                              style={{ fontSize: 11, color: C.blue, background: "none", border: "none", cursor: "pointer", fontWeight: 700 }}>
                              Leer capítulo →
                            </button>
                          </div>
                        </>
                      : <p style={{ fontSize: 13, color: C.faint, fontStyle: "italic" }}>{refStr} — no disponible</p>
                  }
                </div>
              );
            })
          }
        </div>
      )}
    </div>
  );
}
