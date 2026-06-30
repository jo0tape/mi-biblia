"use client";
import { C } from "../lib/tokens";

type Props = { children: React.ReactNode; color?: string };

export function Chip({ children, color = C.amber }: Props) {
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" as const,
      color, background: C.amberA, padding: "3px 9px", borderRadius: 4, display: "inline-block",
    }}>
      {children}
    </span>
  );
}
