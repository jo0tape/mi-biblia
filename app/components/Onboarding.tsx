"use client";
import { useState } from "react";
import { C } from "../lib/tokens";
import { THEMES } from "../data/guided";
import { COVERS } from "../data/covers";

type Props = {
  onFinish: (themeId: string) => void;
};

const FEATURES = [
  { icon: "📖", title: "Contexto histórico", desc: "Cada capítulo tiene la historia de fondo que lo hace entendible." },
  { icon: "◈", title: "Diccionario interactivo", desc: "Toca cualquier palabra subrayada para ver qué significa." },
  { icon: "🗓", title: "Plan de lectura", desc: "Elige una ruta y lee a tu ritmo. La app lleva el seguimiento." },
];

export function Onboarding({ onFinish }: Props) {
  const [step, setStep] = useState(0);
  const [themeId, setThemeId] = useState("guided-40");
  const cover = COVERS[4]; // sunrise

  return (
    <div style={{ position: "fixed", inset: 0, background: C.bg, zIndex: 1000, display: "flex", flexDirection: "column", maxWidth: 430, margin: "0 auto" }}>

      {/* Step 0 — Bienvenida */}
      {step === 0 && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ position: "relative", height: 260, background: `url(${cover.url}) center/cover`, flexShrink: 0 }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.65))" }} />
            <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,.7)", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 8 }}>Biblia Simple</p>
              <h1 style={{ fontSize: 28, fontWeight: 900, color: "#fff", lineHeight: 1.2 }}>Lee la Biblia{"\n"}sin perderte.</h1>
            </div>
            {/* Saltar siempre visible */}
            <button onClick={() => onFinish("guided-40")}
              style={{ position: "absolute", top: 14, right: 14, background: "rgba(255,255,255,.2)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,.3)", borderRadius: 20, padding: "6px 14px", fontSize: 12, color: "#fff", fontWeight: 700, cursor: "pointer" }}>
              Solo quiero leer
            </button>
          </div>

          <div style={{ flex: 1, padding: "28px 24px 0", overflowY: "auto" }}>
            <p style={{ fontSize: 15, color: C.dim, lineHeight: 1.7, marginBottom: 28 }}>
              La Biblia es fascinante pero difícil de entender sola. Esta app te da el contexto histórico, el diccionario y la guía que necesitas para no abandonar en el primer capítulo.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {FEATURES.map(f => (
                <div key={f.icon} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: C.amberBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 800, color: C.text, marginBottom: 2 }}>{f.title}</p>
                    <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "24px 24px 40px" }}>
            <button onClick={() => setStep(1)}
              style={{ width: "100%", background: C.amber, color: "#fff", border: "none", borderRadius: 14, padding: "16px", fontSize: 16, fontWeight: 900, cursor: "pointer" }}>
              Empezar →
            </button>
          </div>
        </div>
      )}

      {/* Step 1 — Elige tu ruta */}
      {step === 1 && (
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "52px 24px 20px", flexShrink: 0 }}>
            <p style={{ fontSize: 11, color: C.amber, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", marginBottom: 6 }}>Paso 1 de 1</p>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: C.text, marginBottom: 8 }}>¿Por dónde empiezas?</h2>
            <p style={{ fontSize: 14, color: C.dim, lineHeight: 1.6 }}>Elige un punto de partida. Puedes cambiarlo después desde la sección "Yo".</p>
          </div>

          <div style={{ flex: 1, padding: "0 20px", overflowY: "auto" }}>
            {THEMES.map(t => (
              <button key={t.id} onClick={() => setThemeId(t.id)}
                style={{ width: "100%", background: themeId === t.id ? C.amberBg : C.surface, border: `2px solid ${themeId === t.id ? C.amber : C.border}`, borderRadius: 14, padding: "16px", cursor: "pointer", textAlign: "left", marginBottom: 12, transition: "all .15s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1, paddingRight: 12 }}>
                    <p style={{ fontSize: 15, fontWeight: 800, color: themeId === t.id ? C.amber : C.text, marginBottom: 4 }}>{t.name}</p>
                    <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.5 }}>{t.desc}</p>
                  </div>
                  <div style={{ flexShrink: 0, textAlign: "right" }}>
                    <p style={{ fontSize: 11, color: C.faint }}>{t.days} días</p>
                    {themeId === t.id && <p style={{ fontSize: 16, color: C.amber }}>✓</p>}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div style={{ padding: "20px 24px 40px" }}>
            <button onClick={() => onFinish(themeId)}
              style={{ width: "100%", background: C.amber, color: "#fff", border: "none", borderRadius: 14, padding: "16px", fontSize: 16, fontWeight: 900, cursor: "pointer" }}>
              Comenzar con "{THEMES.find(t => t.id === themeId)?.name}"
            </button>
            <button onClick={() => onFinish(themeId)}
              style={{ width: "100%", background: "none", border: "none", color: C.faint, fontSize: 13, cursor: "pointer", marginTop: 12, padding: "8px" }}>
              Decidir después
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
