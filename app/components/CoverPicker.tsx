"use client";
import { C } from "../lib/tokens";
import type { Cover } from "../lib/types";
import { COVERS } from "../data/covers";

type Props = { current: Cover | null; onSelect: (c: Cover) => void; onClose: () => void };

export function CoverPicker({ current, onSelect, onClose }: Props) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.6)", zIndex: 400, display: "flex", alignItems: "flex-end" }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()}
        style={{ background: C.surface, borderRadius: "20px 20px 0 0", width: "100%", maxWidth: 430, margin: "0 auto", maxHeight: "80vh", overflowY: "auto", boxShadow: "0 -8px 32px rgba(0,0,0,.15)", animation: "slideUp .22s ease" }}>
        <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 0" }}>
          <div style={{ width: 32, height: 3, borderRadius: 2, background: C.border }} />
        </div>
        <div style={{ padding: "14px 20px 40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h3 style={{ fontSize: 18, fontWeight: 900, color: C.text }}>Elige tu portada</h3>
            <button onClick={onClose} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: "50%", width: 32, height: 32, cursor: "pointer", color: C.dim, fontSize: 16 }}>✕</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {COVERS.map(cover => (
              <button key={cover.id} onClick={() => { onSelect(cover); onClose(); }}
                style={{ position: "relative", aspectRatio: "3/2", borderRadius: 10, overflow: "hidden", border: `3px solid ${current?.id === cover.id ? C.amber : C.border}`, cursor: "pointer", padding: 0 }}>
                <img src={cover.url} alt={cover.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.2)", display: "flex", alignItems: "flex-end", padding: 6 }}>
                  <p style={{ fontSize: 10, color: "#fff", fontWeight: 700, textShadow: "0 1px 3px rgba(0,0,0,.6)" }}>{cover.label}</p>
                </div>
                {current?.id === cover.id && (
                  <div style={{ position: "absolute", top: 4, right: 4, width: 18, height: 18, borderRadius: "50%", background: C.amber, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff" }}>✓</div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
