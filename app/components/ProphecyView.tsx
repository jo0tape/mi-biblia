"use client";
import { useState } from "react";
import { C } from "../lib/tokens";
import { PROPHECIES } from "../data/prophecies";
import { getBook } from "../data/books";
import { fetchVerse } from "../lib/api";
import type { ProphecyPair } from "../lib/types";
import { Chip } from "./Chip";

type PairResult = { atText: string | null; ntText: string | null; loading: boolean };

export function ProphecyView({ onRead }: { onRead: (book: string, chapter: number) => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [cache, setCache] = useState<Record<string, PairResult>>({});

  const expand = async (pair: ProphecyPair) => {
    if (expanded === pair.id) { setExpanded(null); return; }
    setExpanded(pair.id);
    if (cache[pair.id]) return;
    setCache(c => ({ ...c, [pair.id]: { atText: null, ntText: null, loading: true } }));
    const [atVerse, ntVerse] = await Promise.all([
      fetchVerse(pair.at.book, pair.at.chapter, pair.at.verse).catch(() => null),
      fetchVerse(pair.nt.book, pair.nt.chapter, pair.nt.verse).catch(() => null),
    ]);
    setCache(c => ({ ...c, [pair.id]: { atText: atVerse?.t ?? null, ntText: ntVerse?.t ?? null, loading: false } }));
  };

  return (
    <div>
      <div style={{ background: C.amberBg, border: `1px solid ${C.amberB}`, borderRadius: 12, padding: "12px 14px", marginBottom: 16 }}>
        <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.7 }}>
          Cada profecía en la columna izquierda fue escrita siglos antes de su cumplimiento. Toca un par para ver los dos textos en paralelo.
        </p>
      </div>
      {PROPHECIES.map(pair => {
        const isOpen = expanded === pair.id;
        const result = cache[pair.id];
        return (
          <div key={pair.id} style={{ marginBottom: 10 }}>
            <button onClick={() => expand(pair)}
              style={{ background: C.surface, border: `1px solid ${isOpen ? C.amber : C.border}`, borderRadius: 12, padding: 14, cursor: "pointer", width: "100%", textAlign: "left", boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ flex: 1, paddingRight: 10 }}>
                  <p style={{ fontSize: 11, color: C.amber, fontWeight: 700, marginBottom: 4 }}>{pair.theme}</p>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{pair.at.ref}</span>
                    <span style={{ color: C.amber, fontSize: 14 }}>→</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{pair.nt.ref}</span>
                  </div>
                </div>
                <span style={{ color: C.faint, fontSize: 16, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
              </div>
            </button>
            {isOpen && (
              <div style={{ border: `1px solid ${C.amberB}`, borderTop: "none", borderRadius: "0 0 12px 12px", background: C.amberBg, padding: 14, animation: "fadeIn .2s ease" }}>
                {result?.loading
                  ? <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
                      <div style={{ width: 24, height: 24, border: `3px solid ${C.amberB}`, borderTopColor: C.amber, borderRadius: "50%", animation: "spin .8s linear infinite" }} />
                    </div>
                  : <>
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                          <Chip>Profecía · {pair.at.ref}</Chip>
                          <button onClick={() => onRead(pair.at.book, pair.at.chapter)} style={{ fontSize: 11, color: C.blue, background: "none", border: "none", cursor: "pointer", fontWeight: 700 }}>Leer →</button>
                        </div>
                        <p style={{ fontSize: 14, color: C.text, lineHeight: 1.7, fontStyle: "italic", marginBottom: 6 }}>"{result?.atText ?? pair.at.note}"</p>
                        <p style={{ fontSize: 12, color: C.dim, lineHeight: 1.6 }}>{pair.at.note}</p>
                      </div>
                      <div style={{ borderTop: `1px solid ${C.amberB}`, paddingTop: 14 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                          <Chip color={C.green}>Cumplimiento · {pair.nt.ref}</Chip>
                          <button onClick={() => onRead(pair.nt.book, pair.nt.chapter)} style={{ fontSize: 11, color: C.blue, background: "none", border: "none", cursor: "pointer", fontWeight: 700 }}>Leer →</button>
                        </div>
                        <p style={{ fontSize: 14, color: C.text, lineHeight: 1.7, fontStyle: "italic", marginBottom: 6 }}>"{result?.ntText ?? pair.nt.note}"</p>
                        <p style={{ fontSize: 12, color: C.green, lineHeight: 1.6 }}>{pair.nt.note}</p>
                      </div>
                    </>
                }
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
