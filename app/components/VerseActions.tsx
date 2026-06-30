"use client";
import { useState } from "react";
import { C } from "../lib/tokens";
import { useBookmarks } from "../hooks/useBookmarks";
import { useNotes } from "../hooks/useNotes";
import { ShareModal } from "./ShareModal";

type Props = {
  book: string; chapter: number; verse: number;
  text: string; verseRef: string;
  onMeditate?: () => void;
};

export function VerseActions({ book, chapter, verse, text, verseRef, onMeditate }: Props) {
  const { add, remove, has } = useBookmarks();
  const { get, save, hasNote } = useNotes();
  const [showNote, setShowNote] = useState(false);
  const [noteText, setNoteText] = useState(get(book, chapter, verse));
  const [showShare, setShowShare] = useState(false);

  const isBookmarked = has(book, chapter, verse);
  const noteExists = hasNote(book, chapter, verse);

  const handleBookmark = () => {
    if (isBookmarked) remove(`${book}-${chapter}-${verse}`);
    else add({ book, chapter, verse, text, ref: verseRef });
  };

  const handleSaveNote = () => {
    save(book, chapter, verse, noteText);
    setShowNote(false);
  };

  return (
    <div style={{ marginTop: 8, marginBottom: 8 }}>
      {showShare && <ShareModal text={text} verseRef={verseRef} onClose={() => setShowShare(false)} />}
      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <button onClick={() => setShowShare(true)}
          style={{ display: "flex", alignItems: "center", gap: 4, background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "6px 10px", fontSize: 12, color: C.dim, cursor: "pointer", fontWeight: 600 }}>
          📤 Compartir
        </button>
        <button onClick={handleBookmark}
          style={{ display: "flex", alignItems: "center", gap: 4, background: isBookmarked ? C.amberBg : C.card, border: `1px solid ${isBookmarked ? C.amber : C.border}`, borderRadius: 8, padding: "6px 10px", fontSize: 12, color: isBookmarked ? C.amber : C.dim, cursor: "pointer", fontWeight: 600 }}>
          {isBookmarked ? "🔖 Guardado" : "🔖 Guardar"}
        </button>
        <button onClick={() => { setNoteText(get(book, chapter, verse)); setShowNote(v => !v); }}
          style={{ display: "flex", alignItems: "center", gap: 4, background: noteExists ? C.blueBg : C.card, border: `1px solid ${noteExists ? C.blue : C.border}`, borderRadius: 8, padding: "6px 10px", fontSize: 12, color: noteExists ? C.blue : C.dim, cursor: "pointer", fontWeight: 600 }}>
          ✏️ Nota
        </button>
        {onMeditate && (
          <button onClick={onMeditate}
            style={{ display: "flex", alignItems: "center", gap: 4, background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "6px 10px", fontSize: 12, color: C.dim, cursor: "pointer", fontWeight: 600 }}>
            🌙
          </button>
        )}
      </div>
      {showNote && (
        <div style={{ marginTop: 8 }}>
          <textarea value={noteText} onChange={e => setNoteText(e.target.value)} placeholder="Escribe tu nota..."
            style={{ width: "100%", minHeight: 80, background: C.surface, border: `1px solid ${C.blue}`, borderRadius: 8, padding: "8px 12px", fontSize: 14, color: C.text, outline: "none", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit" }} />
          <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
            <button onClick={handleSaveNote}
              style={{ flex: 1, background: C.blue, color: "#fff", border: "none", borderRadius: 8, padding: "8px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
              Guardar nota
            </button>
            <button onClick={() => setShowNote(false)}
              style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "8px 14px", fontSize: 13, color: C.dim, cursor: "pointer" }}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
