"use client";
import { C } from "../lib/tokens";
import type { DictEntry } from "../lib/types";
import { parseVerseRef } from "../lib/verseRef";
import { Chip } from "./Chip";
import { VideoCard } from "./VideoCard";

type Props = {
  entry: DictEntry | null;
  onClose: () => void;
  onRead: (bookId: string, chapter: number) => void;
};

export function DictModal({ entry, onClose, onRead }: Props) {
  if (!entry) return null;

  const handleVerse = (ref: string) => {
    const parsed = parseVerseRef(ref);
    if (parsed) { onClose(); onRead(parsed.bookId, parsed.chapter); }
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", zIndex: 300, display: "flex", alignItems: "flex-end" }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()}
        style={{ background: C.surface, borderRadius: "20px 20px 0 0", width: "100%", maxWidth: 430, margin: "0 auto", maxHeight: "85vh", overflowY: "auto", boxShadow: "0 -8px 32px rgba(0,0,0,.12)", animation: "slideUp .22s ease" }}>
        <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 0" }}>
          <div style={{ width: 32, height: 3, borderRadius: 2, background: C.border }} />
        </div>
        <div style={{ padding: "14px 20px 44px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
            <div style={{ flex: 1, paddingRight: 12 }}>
              <Chip>{entry.type}</Chip>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: C.text, marginTop: 8 }}>{entry.term}</h3>
              <p style={{ fontSize: 14, color: C.dim, marginTop: 4, lineHeight: 1.5 }}>{entry.short}</p>
            </div>
            <button onClick={onClose} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: "50%", width: 32, height: 32, cursor: "pointer", color: C.dim, fontSize: 16, flexShrink: 0 }}>✕</button>
          </div>

          <div style={{ height: 1, background: C.border, margin: "0 0 16px" }} />
          <p style={{ fontSize: 14, color: C.dim, lineHeight: 1.85, whiteSpace: "pre-line", marginBottom: 20 }}>{entry.body}</p>

          {entry.verses?.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 10, color: C.faint, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 8 }}>
                Leer en contexto
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {entry.verses.map(v => {
                  const parsed = parseVerseRef(v);
                  return parsed
                    ? (
                      <button key={v} onClick={() => handleVerse(v)}
                        style={{ background: C.amberBg, border: `1px solid ${C.amberB}`, borderRadius: 6, padding: "5px 12px", fontSize: 12, color: C.amber, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: 4 }}>
                        {v} <span style={{ opacity: .7 }}>→</span>
                      </button>
                    )
                    : (
                      <span key={v} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 6, padding: "5px 10px", fontSize: 12, color: C.dim }}>
                        {v}
                      </span>
                    );
                })}
              </div>
            </div>
          )}

          {entry.video && <VideoCard v={entry.video} />}
        </div>
      </div>
    </div>
  );
}
