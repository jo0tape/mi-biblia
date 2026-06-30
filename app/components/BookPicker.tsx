"use client";
import { useState } from "react";
import { C } from "../lib/tokens";
import { BOOKS } from "../data/books";
import type { Book } from "../lib/types";

type Props = { onSelect: (bookId: string, chapter: number) => void };

export function BookPicker({ onSelect }: Props) {
  const [testament, setTestament] = useState<"NT" | "AT">("NT");
  const [sel, setSel] = useState<Book | null>(null);
  const [query, setQuery] = useState("");

  if (sel) {
    const nums = Array.from({ length: sel.chapters }, (_, i) => i + 1);
    return (
      <div>
        <button onClick={() => setSel(null)} style={{ background: "none", border: "none", color: C.amber, fontSize: 14, fontWeight: 700, cursor: "pointer", padding: "0 0 14px", display: "block" }}>
          ← Libros
        </button>
        <h3 style={{ fontSize: 20, fontWeight: 900, color: C.text, marginBottom: 4 }}>{sel.name}</h3>
        <p style={{ fontSize: 12, color: C.dim, marginBottom: 18 }}>{sel.chapters} capítulos · {sel.section}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 8 }}>
          {nums.map(n => (
            <button key={n} onClick={() => onSelect(sel.id, n)}
              style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "13px 4px", fontSize: 15, fontWeight: 700, color: C.text, cursor: "pointer" }}>
              {n}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const books = BOOKS.filter(b => b.testament === testament && (!query || b.name.toLowerCase().includes(query.toLowerCase())));
  const sections = Array.from(new Set(books.map(b => b.section)));

  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar libro..."
        style={{ width: "100%", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "10px 14px", fontSize: 15, color: C.text, outline: "none", boxSizing: "border-box", marginBottom: 12 }} />
      <div style={{ display: "flex", background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
        {(["NT", "AT"] as const).map(t => (
          <button key={t} onClick={() => { setTestament(t); setQuery(""); }}
            style={{ flex: 1, background: testament === t ? C.amber : "none", color: testament === t ? "#fff" : C.dim, border: "none", padding: "12px 8px", fontSize: 13, fontWeight: 800, cursor: "pointer" }}>
            {t === "NT" ? "Nuevo Testamento" : "Antiguo Testamento"}
          </button>
        ))}
      </div>
      {sections.map(sec => (
        <div key={sec} style={{ marginBottom: 22 }}>
          <p style={{ fontSize: 10, color: C.faint, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 10 }}>{sec}</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {books.filter(b => b.section === sec).map(book => (
              <button key={book.id} onClick={() => setSel(book)}
                style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{book.name}</p>
                  <p style={{ fontSize: 11, color: C.dim }}>{book.chapters} cap.</p>
                </div>
                <span style={{ color: C.faint, fontSize: 16 }}>›</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
