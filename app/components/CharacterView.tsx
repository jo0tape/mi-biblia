"use client";
import { useState } from "react";
import { C } from "../lib/tokens";
import { CHARACTERS } from "../data/characters";
import { getBook } from "../data/books";
import type { Character } from "../lib/types";

export function CharacterView({ onRead }: { onRead: (book: string, chapter: number) => void }) {
  const [selected, setSelected] = useState<Character | null>(null);

  if (selected) {
    return (
      <div>
        <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", color: C.amber, fontSize: 14, fontWeight: 700, cursor: "pointer", padding: "0 0 16px", display: "block" }}>
          ← Personajes
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <span style={{ fontSize: 36 }}>{selected.emoji}</span>
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 900, color: C.text }}>{selected.name}</h3>
          </div>
        </div>
        <p style={{ fontSize: 14, color: C.dim, lineHeight: 1.75, marginBottom: 20, background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "12px 14px" }}>
          {selected.bio}
        </p>
        <p style={{ fontSize: 10, color: C.faint, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 12 }}>Recorrido bíblico</p>
        {selected.chapters.map((ch, i) => {
          const book = getBook(ch.book);
          const isLast = i === selected.chapters.length - 1;
          return (
            <div key={i} style={{ display: "flex", gap: 12 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: C.amber, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#fff" }}>{i + 1}</div>
                {!isLast && <div style={{ width: 2, flex: 1, minHeight: 16, background: C.border, marginTop: 2, marginBottom: 2 }} />}
              </div>
              <div style={{ flex: 1, paddingBottom: 12 }}>
                <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{book?.name} {ch.ch}</p>
                    <p style={{ fontSize: 12, color: C.dim, lineHeight: 1.5 }}>{ch.note}</p>
                  </div>
                  <button onClick={() => onRead(ch.book, ch.ch)}
                    style={{ fontSize: 12, color: C.amber, background: C.amberBg, border: `1px solid ${C.amberB}`, borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontWeight: 700, flexShrink: 0, marginLeft: 8 }}>
                    Leer
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <div style={{ background: C.blueBg, border: `1px solid ${C.blueA}`, borderRadius: 12, padding: "12px 14px", marginBottom: 16 }}>
        <p style={{ fontSize: 13, color: C.blue, lineHeight: 1.7 }}>
          Sigue a los personajes principales de la Biblia a través de sus libros y capítulos. Cada parada es un momento crucial de su historia.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {CHARACTERS.map(ch => (
          <button key={ch.id} onClick={() => setSelected(ch)}
            style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: 14, cursor: "pointer", textAlign: "left", boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 28, flexShrink: 0 }}>{ch.emoji}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 16, fontWeight: 800, color: C.text, marginBottom: 3 }}>{ch.name}</p>
                <p style={{ fontSize: 12, color: C.dim, lineHeight: 1.5 }}>{ch.bio.slice(0, 80)}…</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <p style={{ fontSize: 11, color: C.faint }}>{ch.chapters.length} capítulos</p>
                <span style={{ color: C.faint, fontSize: 18 }}>›</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
