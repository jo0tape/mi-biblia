"use client";
import { useState } from "react";
import { C } from "../lib/tokens";
import { COVERS } from "../data/covers";
import type { Cover } from "../lib/types";

type Props = {
  text: string;
  verseRef: string;
  onClose: () => void;
};

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const w of words) {
    const test = current ? current + " " + w : w;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = w;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export function ShareModal({ text, verseRef, onClose }: Props) {
  const [cover, setCover] = useState<Cover>(COVERS[0]);
  const [generating, setGenerating] = useState(false);
  const [done, setDone] = useState(false);

  const generateAndShare = async () => {
    setGenerating(true);
    try {
      const size = 1080;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;

      // Load background
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = cover.url.replace("?w=800&q=80", "?w=1080&q=90");
      await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = () => rej(); });

      // Draw background (center-cover)
      const scale = Math.max(size / img.naturalWidth, size / img.naturalHeight);
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);

      // Dark gradient overlay
      const grad = ctx.createLinearGradient(0, 0, 0, size);
      grad.addColorStop(0, "rgba(0,0,0,0.25)");
      grad.addColorStop(0.45, "rgba(0,0,0,0.50)");
      grad.addColorStop(1, "rgba(0,0,0,0.80)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);

      const pad = 90;

      // Brand label
      ctx.fillStyle = "#C4873E";
      ctx.font = "700 32px system-ui, -apple-system, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("BIBLIA SIMPLE", size / 2, 110);

      // Verse text (wrapped)
      ctx.fillStyle = "#ffffff";
      ctx.font = `italic 56px Georgia, 'Times New Roman', serif`;
      ctx.textAlign = "center";
      const quote = `"${text}"`;
      const lines = wrapText(ctx, quote, size - pad * 2);
      const lineH = 78;
      const totalH = lines.length * lineH;
      const startY = size / 2 - totalH / 2 + lineH * 0.35;
      lines.forEach((line, i) => ctx.fillText(line, size / 2, startY + i * lineH));

      // Reference
      ctx.fillStyle = "rgba(255,255,255,0.80)";
      ctx.font = "600 38px system-ui, -apple-system, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`— ${verseRef}`, size / 2, size - 120);

      // Share or download
      canvas.toBlob(async (blob) => {
        if (!blob) { setGenerating(false); return; }
        const file = new File([blob], "versiculo-biblia-simple.png", { type: "image/png" });
        if ((navigator as any).canShare?.({ files: [file] })) {
          await (navigator as any).share({ files: [file], title: verseRef, text: `"${text}" — ${verseRef}` });
        } else {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url; a.download = "versiculo.png"; a.click();
          URL.revokeObjectURL(url);
        }
        setGenerating(false);
        setDone(true);
        setTimeout(onClose, 1200);
      }, "image/png");
    } catch {
      setGenerating(false);
    }
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.6)", zIndex: 410, display: "flex", alignItems: "flex-end" }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()}
        style={{ background: C.surface, borderRadius: "20px 20px 0 0", width: "100%", maxWidth: 430, margin: "0 auto", padding: "14px 20px 48px", boxShadow: "0 -8px 32px rgba(0,0,0,.15)" }}>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <div style={{ width: 32, height: 3, borderRadius: 2, background: C.border }} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <p style={{ fontSize: 16, fontWeight: 900, color: C.text }}>Compartir versículo</p>
          <button onClick={onClose} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: "50%", width: 32, height: 32, cursor: "pointer", color: C.dim, fontSize: 14 }}>✕</button>
        </div>

        {/* Live preview */}
        <div style={{ position: "relative", height: 210, borderRadius: 16, overflow: "hidden", marginBottom: 16, background: `url(${cover.url}) center/cover` }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,.25), rgba(0,0,0,.65))", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px 24px", gap: 10 }}>
            <p style={{ fontSize: 9, color: "#C4873E", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase" }}>Biblia Simple</p>
            <p style={{ fontSize: 14, color: "#fff", fontStyle: "italic", lineHeight: 1.6, textAlign: "center" }}>
              "{text.length > 120 ? text.slice(0, 120) + "…" : text}"
            </p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,.8)", fontWeight: 700 }}>— {verseRef}</p>
          </div>
        </div>

        {/* Cover picker */}
        <p style={{ fontSize: 10, color: C.faint, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 10 }}>Elige el fondo</p>
        <div style={{ display: "flex", gap: 8, overflowX: "auto", WebkitOverflowScrolling: "touch" as any, scrollbarWidth: "none" as any, paddingBottom: 6, marginBottom: 20 }}>
          {COVERS.map(c => (
            <button key={c.id} onClick={() => setCover(c)}
              style={{ flexShrink: 0, width: 60, height: 60, borderRadius: 10, overflow: "hidden", padding: 0, border: `3px solid ${cover.id === c.id ? C.amber : "transparent"}`, cursor: "pointer", position: "relative", boxShadow: cover.id === c.id ? `0 0 0 1px ${C.amber}` : "none" }}>
              <img src={c.url} alt={c.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              {cover.id === c.id && (
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: C.amber, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#fff" }}>✓</div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Share button */}
        <button onClick={generateAndShare} disabled={generating || done}
          style={{ width: "100%", background: done ? "#3D6B4A" : C.amber, color: "#fff", border: "none", borderRadius: 14, padding: "16px", fontSize: 15, fontWeight: 900, cursor: generating ? "wait" : "pointer", opacity: generating ? .8 : 1, transition: "background .3s" }}>
          {done ? "✓ Listo" : generating ? "Generando imagen…" : "📤 Compartir imagen"}
        </button>

        <p style={{ fontSize: 11, color: C.faint, textAlign: "center", marginTop: 10 }}>
          Se guardará o compartirá como imagen PNG
        </p>
      </div>
    </div>
  );
}
