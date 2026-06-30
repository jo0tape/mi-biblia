"use client";
import { C } from "../lib/tokens";

export function StreakBadge({ count }: { count: number }) {
  if (count === 0) return null;
  const milestone = count >= 40 ? "40" : count >= 30 ? "30" : count >= 14 ? "14" : count >= 7 ? "7" : count >= 3 ? "3" : null;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, background: C.amberBg, border: `1px solid ${C.amberB}`, borderRadius: 10, padding: "8px 14px" }}>
      <span style={{ fontSize: 20 }}>🔥</span>
      <div>
        <p style={{ fontSize: 14, fontWeight: 900, color: C.amber }}>{count} {count === 1 ? "día" : "días"} seguidos</p>
        {milestone && <p style={{ fontSize: 11, color: C.dim }}>¡Logro desbloqueado: {milestone} días!</p>}
      </div>
    </div>
  );
}
