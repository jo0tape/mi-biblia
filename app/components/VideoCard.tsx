"use client";
import { C } from "../lib/tokens";
import type { VideoRef } from "../lib/types";

export function VideoCard({ v }: { v: VideoRef | null | undefined }) {
  if (!v) return null;
  return (
    <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer"
      style={{ display: "flex", background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, overflow: "hidden", textDecoration: "none" }}>
      <div style={{ position: "relative", width: 90, flexShrink: 0 }}>
        <img src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(255,255,255,.95)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#000" }}>▶</div>
        </div>
      </div>
      <div style={{ padding: "10px 14px", flex: 1 }}>
        <p style={{ fontSize: 10, color: "#C05621", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 4 }}>Proyecto Biblia · YouTube</p>
        <p style={{ fontSize: 13, color: C.text, fontWeight: 600, lineHeight: 1.4 }}>{v.title}</p>
        <p style={{ fontSize: 11, color: C.dim, marginTop: 4 }}>Gratis · Español</p>
      </div>
    </a>
  );
}
