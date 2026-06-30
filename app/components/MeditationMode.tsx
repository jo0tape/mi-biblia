"use client";
import { useState, useEffect } from "react";
import type { Verse } from "../lib/types";

type Props = { verses: Verse[]; startIdx?: number; onClose: () => void };

export function MeditationMode({ verses, startIdx = 0, onClose }: Props) {
  const [idx, setIdx] = useState(startIdx);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [label, setLabel] = useState("Inhala");

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(p => {
        const next = p === "in" ? "out" : "in";
        setLabel(next === "in" ? "Inhala" : "Exhala");
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = verses[idx];
  const advance = () => {
    if (idx < verses.length - 1) setIdx(i => i + 1);
    else onClose();
  };

  if (!current) return null;

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(13,11,9,.97)", zIndex: 500, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 28px" }}>
      <button onClick={onClose}
        style={{ position: "absolute", top: 52, right: 20, background: "rgba(255,255,255,.1)", border: "none", borderRadius: "50%", width: 36, height: 36, color: "rgba(255,255,255,.6)", fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
        ✕
      </button>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,.35)", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", marginBottom: 32 }}>
        {idx + 1} / {verses.length}
      </p>
      <button onClick={advance} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "center" }}>
        <p style={{ fontSize: 22, lineHeight: 1.7, color: "rgba(255,255,255,.9)", fontStyle: "italic", fontWeight: 400, animation: "fadeIn .6s ease" }}>
          "{current.t}"
        </p>
      </button>
      <div style={{ marginTop: 52, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          border: "2px solid rgba(196,135,62,.5)",
          background: "rgba(196,135,62,.08)",
          animation: `${phase === "in" ? "breatheIn" : "breatheOut"} 4s ease-in-out infinite`,
        }} />
        <p style={{ fontSize: 11, color: "rgba(255,255,255,.3)", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase" }}>{label}</p>
      </div>
      <p style={{ position: "absolute", bottom: 40, fontSize: 11, color: "rgba(255,255,255,.2)", textAlign: "center" }}>
        Toca el versículo para avanzar
      </p>
    </div>
  );
}
