"use client";
import { useState, useMemo } from "react";
import { C } from "../lib/tokens";
import { CTX } from "../data/context";
import { DICT } from "../data/dictionary";
import { CHARACTERS } from "../data/characters";
import { getBook } from "../data/books";
import { useBookmarks } from "../hooks/useBookmarks";
import type { DictEntry } from "../lib/types";
import { Chip } from "./Chip";

type Props = {
  onRead: (book: string, chapter: number) => void;
  onWord: (entry: DictEntry) => void;
};

export function SearchTab({ onRead, onWord }: Props) {
  const [q, setQ] = useState("");
  const { bookmarks } = useBookmarks();

  const results = useMemo(() => {
    if (q.trim().length < 2) return [];
    const lo = q.toLowerCase();
    const found: { type: string; label: string; sub: string; action: () => void }[] = [];

    // CTX chapters
    Object.entries(CTX).forEach(([key, ctx]) => {
      const [bookId, chStr] = key.split("-");
      const ch = parseInt(chStr);
      const book = getBook(bookId);
      if (ctx.title.toLowerCase().includes(lo) || ctx.stake.toLowerCase().includes(lo) || ctx.context.toLowerCase().includes(lo)) {
        found.push({ type: "Capítulo", label: `${book?.name} ${ch} — ${ctx.title}`, sub: ctx.stake.slice(0, 80) + "…", action: () => onRead(bookId, ch) });
      }
    });

    // Dictionary
    Object.values(DICT).forEach(e => {
      if (e.term.toLowerCase().includes(lo) || e.short.toLowerCase().includes(lo) || e.body.toLowerCase().includes(lo)) {
        found.push({ type: "Diccionario", label: e.term, sub: e.short, action: () => onWord(e) });
      }
    });

    // Characters
    CHARACTERS.forEach(ch => {
      if (ch.name.toLowerCase().includes(lo) || ch.bio.toLowerCase().includes(lo)) {
        found.push({ type: "Personaje", label: ch.name, sub: ch.bio.slice(0, 80) + "…", action: () => {} });
      }
      // Search character's chapter notes
      ch.chapters.forEach(c => {
        if (c.note.toLowerCase().includes(lo)) {
          const book = getBook(c.book);
          found.push({ type: "Personaje", label: `${ch.name} — ${book?.name} ${c.ch}`, sub: c.note, action: () => onRead(c.book, c.ch) });
        }
      });
    });

    // Bookmarks
    bookmarks.forEach(b => {
      const book = getBook(b.book);
      if (b.text.toLowerCase().includes(lo) || b.ref.toLowerCase().includes(lo)) {
        found.push({ type: "Marcador", label: b.ref, sub: b.text.slice(0, 80) + "…", action: () => onRead(b.book, b.chapter) });
      }
    });

    return found.slice(0, 20);
  }, [q, bookmarks]);

  const typeColors: Record<string, string> = { Capítulo: C.amber, Diccionario: C.blue, Personaje: C.green, Marcador: C.dim };

  return (
    <div>
      <div style={{ position: "relative", marginBottom: 16 }}>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar en contextos, diccionario, personajes..."
          autoFocus
          style={{ width: "100%", background: C.surface, border: `2px solid ${q ? C.amber : C.border}`, borderRadius: 12, padding: "12px 16px 12px 42px", fontSize: 15, color: C.text, outline: "none", boxSizing: "border-box", transition: "border .2s" }} />
        <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: C.faint, fontSize: 16 }}>🔍</span>
        {q && (
          <button onClick={() => setQ("")}
            style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: C.faint, fontSize: 18, cursor: "pointer" }}>✕</button>
        )}
      </div>

      {q.length < 2 && (
        <div style={{ textAlign: "center", padding: "40px 20px" }}>
          <p style={{ fontSize: 32, marginBottom: 12 }}>🔍</p>
          <p style={{ fontSize: 15, color: C.dim, lineHeight: 1.6 }}>Busca en los contextos históricos, el diccionario teológico, los personajes y tus marcadores.</p>
        </div>
      )}

      {q.length >= 2 && results.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px 20px" }}>
          <p style={{ fontSize: 32, marginBottom: 12 }}>📭</p>
          <p style={{ fontSize: 15, color: C.dim }}>Sin resultados para "{q}"</p>
        </div>
      )}

      {results.map((r, i) => (
        <button key={i} onClick={r.action}
          style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "13px 15px", cursor: "pointer", width: "100%", textAlign: "left", marginBottom: 8, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ flex: 1, paddingRight: 10 }}>
              <div style={{ marginBottom: 4 }}>
                <Chip color={typeColors[r.type] ?? C.amber}>{r.type}</Chip>
              </div>
              <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 2 }}>{r.label}</p>
              <p style={{ fontSize: 12, color: C.dim, lineHeight: 1.5 }}>{r.sub}</p>
            </div>
            <span style={{ color: C.faint, fontSize: 18 }}>›</span>
          </div>
        </button>
      ))}
    </div>
  );
}
