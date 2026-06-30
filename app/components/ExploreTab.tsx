"use client";
import { useState } from "react";
import { C } from "../lib/tokens";
import { DICT } from "../data/dictionary";
import { GENEALOGIES } from "../data/genealogies";
import type { DictEntry } from "../lib/types";
import { Chip } from "./Chip";
import { GenealogyBlock } from "./GenealogyBlock";
import { ProphecyView } from "./ProphecyView";
import { CharacterView } from "./CharacterView";
import { TimelineView } from "./TimelineView";

type View = "dict" | "gen" | "prophecy" | "characters" | "timeline";

type Props = {
  onWord: (entry: DictEntry) => void;
  onRead: (book: string, chapter: number) => void;
};

const GLIST = [
  { id:"adan-noe",        ref:"Génesis 5",         title:"De Adán a Noé",          sub:"10 generaciones. El redoble de la muerte y dos excepciones." },
  { id:"sem-abraham",     ref:"Génesis 11:10-26",   title:"De Sem a Abraham",        sub:"El puente entre el diluvio y la promesa." },
  { id:"abraham-jesus",   ref:"Mateo 1:1-17",       title:"De Abraham a Jesús",      sub:"42 generaciones. La historia de Israel en una lista." },
  { id:"tabla-naciones",  ref:"Génesis 10",         title:"La tabla de las naciones",sub:"El mapa del mundo antiguo después del diluvio." },
  { id:"censo-israel",    ref:"Números 1-2",        title:"El censo de Israel",      sub:"12 tribus, 603.550 hombres — personas con nombre." },
];

export function ExploreTab({ onWord, onRead }: Props) {
  const [view, setView] = useState<View>("dict");
  const [q, setQ] = useState("");
  const [gId, setGId] = useState<string | null>(null);

  const TABS: { id: View; label: string; icon: string }[] = [
    { id:"dict",       label:"Diccionario", icon:"◈"  },
    { id:"gen",        label:"Genealogías", icon:"🌳" },
    { id:"prophecy",   label:"Profecías",   icon:"⚡" },
    { id:"characters", label:"Personajes",  icon:"👤" },
    { id:"timeline",   label:"Cronología",  icon:"📅" },
  ];

  const entries = Object.values(DICT).filter(e =>
    !q || e.term.toLowerCase().includes(q.toLowerCase()) || e.short.toLowerCase().includes(q.toLowerCase())
  );

  if (view === "gen" && gId) {
    const g = GENEALOGIES[gId];
    const meta = GLIST.find(g => g.id === gId);
    if (g) return (
      <div>
        <button onClick={() => setGId(null)} style={{ background: "none", border: "none", color: C.amber, fontSize: 14, fontWeight: 700, cursor: "pointer", padding: "0 0 16px", display: "block" }}>← Genealogías</button>
        <Chip>{meta?.ref}</Chip>
        <h3 style={{ fontSize: 20, fontWeight: 900, color: C.text, marginTop: 10, marginBottom: 18 }}>{g.title}</h3>
        <GenealogyBlock genealogy={g} onRead={(b, c) => { setGId(null); onRead(b, c); }} />
      </div>
    );
  }

  return (
    <div>
      {/* Tab switcher */}
      <div style={{ display: "flex", background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 16, overflowX: "auto" }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => { setView(t.id); setQ(""); setGId(null); }}
            style={{ flexShrink: 0, background: view === t.id ? C.amber : "none", color: view === t.id ? "#fff" : C.dim, border: "none", padding: "10px 12px", fontSize: 11, fontWeight: 800, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 2, minWidth: 72 }}>
            <span style={{ fontSize: 14 }}>{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      {/* Dictionary */}
      {view === "dict" && (
        <>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar término..."
            style={{ width: "100%", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10, padding: "10px 14px", fontSize: 15, color: C.text, outline: "none", boxSizing: "border-box", marginBottom: 12 }} />
          {entries.map(e => (
            <button key={e.term} onClick={() => onWord(e)}
              style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "13px 15px", cursor: "pointer", width: "100%", textAlign: "left", marginBottom: 8, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1, paddingRight: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 15, fontWeight: 800, color: C.text }}>{e.term}</span>
                    <Chip>{e.type}</Chip>
                  </div>
                  <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.5 }}>{e.short}</p>
                </div>
                <span style={{ color: C.faint, fontSize: 18 }}>›</span>
              </div>
            </button>
          ))}
        </>
      )}

      {/* Genealogies */}
      {view === "gen" && (
        <>
          <div style={{ background: C.amberBg, border: `1px solid ${C.amberB}`, borderRadius: 12, padding: "12px 14px", marginBottom: 14 }}>
            <p style={{ fontSize: 13, color: "#7B4A1A", lineHeight: 1.7 }}>Las genealogías bíblicas no son listas de nombres. Son argumentos teológicos — cada una dice algo que no podría decirse de otra manera. Toca "Leer" en cada persona para ir directamente a ese capítulo.</p>
          </div>
          {GLIST.map(g => (
            <button key={g.id} onClick={() => setGId(g.id)}
              style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: 15, cursor: "pointer", width: "100%", textAlign: "left", marginBottom: 8, boxShadow: "0 1px 4px rgba(0,0,0,.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <Chip>{g.ref}</Chip>
                  <p style={{ fontSize: 16, fontWeight: 800, color: C.text, marginTop: 8, marginBottom: 4 }}>{g.title}</p>
                  <p style={{ fontSize: 13, color: C.dim }}>{g.sub}</p>
                </div>
                <span style={{ color: C.faint, fontSize: 18, marginTop: 4 }}>›</span>
              </div>
            </button>
          ))}
        </>
      )}

      {/* Prophecies */}
      {view === "prophecy" && <ProphecyView onRead={onRead} />}

      {/* Characters */}
      {view === "characters" && <CharacterView onRead={onRead} />}

      {/* Timeline */}
      {view === "timeline" && <TimelineView onRead={onRead} />}
    </div>
  );
}
