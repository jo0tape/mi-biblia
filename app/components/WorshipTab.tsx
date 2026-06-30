"use client";
import { useState } from "react";
import { C } from "../lib/tokens";
import { SONGS, MOOD_LABELS, MOOD_EMOJI, type SongMood, type Song } from "../data/worship";

export function SongCard({ song }: { song: Song }) {
  return (
    <a href={`https://www.youtube.com/watch?v=${song.id}`} target="_blank" rel="noopener noreferrer"
      style={{ display: "flex", background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden", textDecoration: "none" }}>
      <div style={{ position: "relative", width: 90, flexShrink: 0 }}>
        <img src={`https://img.youtube.com/vi/${song.id}/mqdefault.jpg`} alt={song.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.28)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,.95)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#000" }}>▶</div>
        </div>
      </div>
      <div style={{ padding: "10px 14px", flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 5 }}>
          {song.moods.slice(0, 2).map(m => (
            <span key={m} style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: C.amber, background: C.amberBg, padding: "2px 7px", borderRadius: 4 }}>
              {MOOD_EMOJI[m]} {MOOD_LABELS[m]}
            </span>
          ))}
        </div>
        <p style={{ fontSize: 13, color: C.text, fontWeight: 700, lineHeight: 1.3, marginBottom: 3 }}>{song.title}</p>
        <p style={{ fontSize: 11, color: C.dim }}>{song.artist}</p>
      </div>
    </a>
  );
}

const PAGE_SIZE = 10;

export function WorshipTab() {
  const [mood, setMood] = useState<SongMood | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = mood ? SONGS.filter(s => s.moods.includes(mood)) : SONGS;
  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleMoodChange = (m: SongMood | null) => {
    setMood(m);
    setVisible(PAGE_SIZE);
  };

  return (
    <div>
      <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.6, marginBottom: 18 }}>
        Canciones para acompañar tu lectura. Filtra por lo que sientes hoy.
      </p>

      {/* Mood chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        <button onClick={() => handleMoodChange(null)}
          style={{ flexShrink: 0, background: mood === null ? C.amber : C.card, color: mood === null ? "#fff" : C.dim, border: `1px solid ${mood === null ? C.amber : C.border}`, borderRadius: 20, padding: "7px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
          Todas
        </button>
        {(Object.entries(MOOD_LABELS) as [SongMood, string][]).map(([id, label]) => (
          <button key={id} onClick={() => handleMoodChange(mood === id ? null : id as SongMood)}
            style={{ flexShrink: 0, background: mood === id ? C.amber : C.card, color: mood === id ? "#fff" : C.dim, border: `1px solid ${mood === id ? C.amber : C.border}`, borderRadius: 20, padding: "7px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
            {MOOD_EMOJI[id as SongMood]} {label}
          </button>
        ))}
      </div>

      {/* Songs */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {filtered.length === 0
          ? <p style={{ fontSize: 14, color: C.faint, textAlign: "center", padding: "30px 0" }}>No hay canciones para ese filtro todavía.</p>
          : shown.map(s => <SongCard key={s.id} song={s} />)
        }
      </div>

      {hasMore && (
        <button onClick={() => setVisible(v => v + PAGE_SIZE)}
          style={{ width: "100%", background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px", fontSize: 13, fontWeight: 700, color: C.dim, cursor: "pointer", marginTop: 16 }}>
          Cargar más ({filtered.length - visible} restantes)
        </button>
      )}

      <p style={{ fontSize: 11, color: C.fainter, textAlign: "center", marginTop: 24, lineHeight: 1.6 }}>
        {filtered.length} canciones · Se abren en YouTube · Gratis
      </p>
    </div>
  );
}
