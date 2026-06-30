"use client";
import { useState } from "react";
import { C } from "../lib/tokens";
import { TIMELINE, ERAS } from "../data/timeline";
import { getBook } from "../data/books";

export function TimelineView({ onRead }: { onRead: (book: string, chapter: number) => void }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const eventsByEra = ERAS.map(era => ({
    era,
    events: TIMELINE.filter(e => e.eraId === era.id),
  })).filter(g => g.events.length > 0);

  return (
    <div>
      <div style={{ background: C.amberBg, border: `1px solid ${C.amberB}`, borderRadius: 12, padding: "12px 14px", marginBottom: 20 }}>
        <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.7 }}>
          Las fechas del Antiguo Testamento son aproximadas — los historiadores debaten muchas de ellas. Esta línea de tiempo muestra el orden de los eventos y su relación, no fechas exactas.
        </p>
      </div>

      {eventsByEra.map(({ era, events }) => (
        <div key={era.id} style={{ marginBottom: 8 }}>
          {/* Era header */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, marginTop: 8 }}>
            <div style={{ flex: 1, height: 1, background: C.border }} />
            <div style={{ background: era.color + "22", border: `1px solid ${era.color}44`, borderRadius: 20, padding: "4px 12px", flexShrink: 0 }}>
              <span style={{ fontSize: 10, fontWeight: 800, color: era.color, textTransform: "uppercase", letterSpacing: ".1em" }}>{era.name}</span>
              <span style={{ fontSize: 10, color: era.color + "99", marginLeft: 6 }}>{era.yearRange}</span>
            </div>
            <div style={{ flex: 1, height: 1, background: C.border }} />
          </div>

          {/* Events */}
          {events.map((event, i) => {
            const isExpanded = expandedId === event.id;
            const book = event.book ? getBook(event.book) : null;
            const isLast = i === events.length - 1;

            return (
              <div key={event.id} style={{ display: "flex", gap: 12, marginBottom: isLast ? 0 : 2 }}>
                {/* Timeline line + dot */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 24 }}>
                  <div style={{
                    width: event.isKey ? 14 : 10,
                    height: event.isKey ? 14 : 10,
                    borderRadius: "50%",
                    background: event.isKey ? era.color : C.fainter,
                    border: `2px solid ${event.isKey ? era.color : C.border}`,
                    flexShrink: 0,
                    marginTop: 14,
                  }} />
                  {!isLast && <div style={{ width: 2, flex: 1, minHeight: 12, background: C.border, marginTop: 2 }} />}
                </div>

                {/* Event card */}
                <div style={{ flex: 1, paddingBottom: 6 }}>
                  <button onClick={() => setExpandedId(isExpanded ? null : event.id)}
                    style={{ width: "100%", background: isExpanded ? (era.color + "0F") : C.surface, border: `1px solid ${isExpanded ? era.color + "40" : C.border}`, borderRadius: 10, padding: "10px 12px", cursor: "pointer", textAlign: "left", transition: "all .15s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3, flexWrap: "wrap" }}>
                          <span style={{ fontSize: 9, color: era.color, fontWeight: 700, background: era.color + "18", padding: "2px 6px", borderRadius: 4 }}>{event.yearLabel}</span>
                          {event.isKey && <span style={{ fontSize: 9, color: era.color, fontWeight: 700 }}>★</span>}
                        </div>
                        <p style={{ fontSize: 13, fontWeight: 700, color: C.text, lineHeight: 1.4 }}>{event.title}</p>
                      </div>
                      <span style={{ color: C.faint, fontSize: 14, flexShrink: 0, marginTop: 2 }}>{isExpanded ? "▲" : "▼"}</span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div style={{ background: era.color + "08", border: `1px solid ${era.color}25`, borderTop: "none", borderRadius: "0 0 10px 10px", padding: "10px 12px", animation: "fadeIn .15s ease" }}>
                      <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.75, marginBottom: event.book ? 10 : 0 }}>{event.desc}</p>
                      {event.book && event.chapter && (
                        <button onClick={() => { onRead(event.book!, event.chapter!); setExpandedId(null); }}
                          style={{ background: era.color, color: "#fff", border: "none", borderRadius: 8, padding: "7px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                          Leer {book?.name} {event.chapter} →
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
