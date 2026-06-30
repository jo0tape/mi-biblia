"use client";
import { C } from "../lib/tokens";
import type { Genealogy } from "../lib/types";

type Props = {
  genealogy: Genealogy;
  onRead?: (book: string, chapter: number) => void;
};

export function GenealogyBlock({ genealogy: g, onRead }: Props) {
  return (
    <div style={{ background: C.amberBg, border: `1px solid ${C.amberB}`, borderRadius: 12, padding: 16 }}>
      <p style={{ fontSize: 10, color: C.amber, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 10 }}>
        Árbol narrativo · {g.ref}
      </p>
      <p style={{ fontSize: 13, color: "#7B4A1A", lineHeight: 1.85, whiteSpace: "pre-line", marginBottom: 16 }}>{g.narrative}</p>
      {g.nodes.map((node, i) => {
        const isLast = i === g.nodes.length - 1;
        const isDots = node.m === "dots";
        const isSpecial = node.m === "special" || node.m === "end";
        const col = isSpecial ? C.amber : C.faint;

        return (
          <div key={i} style={{ display: "flex", gap: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              {isDots
                ? <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.faint, margin: "11px 11px" }} />
                : <div style={{ width: 28, height: 28, borderRadius: 4, border: `2px solid ${col}`, background: isSpecial ? C.amberA : C.surface, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800, color: col }}>{i + 1}</div>
              }
              {!isLast && <div style={{ width: 2, flex: 1, minHeight: 8, background: C.border, marginTop: 2, marginBottom: 2 }} />}
            </div>
            <div style={{ flex: 1, paddingBottom: 10 }}>
              {isDots
                ? <p style={{ fontSize: 12, color: C.faint, fontStyle: "italic", paddingTop: 8 }}>{node.n}</p>
                : (
                  <div style={{ background: C.surface, border: `1px solid ${isSpecial ? C.amberB : C.border}`, borderRadius: 8, padding: "9px 12px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: node.note ? 3 : 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 13, fontWeight: 800, color: isSpecial ? C.amber : C.text }}>{node.n}</span>
                        {node.y != null && <span style={{ fontSize: 11, color: C.dim }}>{node.y.toLocaleString("es-ES")} {g.yLabel ?? "años"}</span>}
                      </div>
                      {onRead && node.book && node.chapter && (
                        <button onClick={() => onRead(node.book!, node.chapter!)}
                          style={{ fontSize: 11, color: C.amber, background: "none", border: "none", cursor: "pointer", fontWeight: 700, padding: "2px 6px", flexShrink: 0 }}>
                          Leer →
                        </button>
                      )}
                    </div>
                    {node.note && <p style={{ fontSize: 12, color: isSpecial ? C.amber : C.dim, lineHeight: 1.6 }}>{node.note}</p>}
                  </div>
                )
              }
            </div>
          </div>
        );
      })}
    </div>
  );
}
