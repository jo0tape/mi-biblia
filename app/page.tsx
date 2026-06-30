"use client";
import { useState, useRef, useEffect } from "react";
import { C } from "./lib/tokens";
import { getBook } from "./data/books";
import { COVERS } from "./data/covers";
import { THEMES } from "./data/guided";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useTheme } from "./hooks/useTheme";
import type { DictEntry, Cover, Progress } from "./lib/types";
import { Reader } from "./components/Reader";
import { BookPicker } from "./components/BookPicker";
import { DictModal } from "./components/DictModal";
import { CoverPicker } from "./components/CoverPicker";
import { TodayTab } from "./components/TodayTab";
import { ExploreTab } from "./components/ExploreTab";
import { SearchTab } from "./components/SearchTab";
import { ProfileTab } from "./components/ProfileTab";
import { Onboarding } from "./components/Onboarding";
import { WorshipTab } from "./components/WorshipTab";

type Tab = "today" | "read" | "search" | "explore" | "worship" | "profile";
type Reading = { bookId: string; chapter: number } | null;

export default function Page() {
  const [tab, setTab] = useState<Tab>("today");
  const [progress, setProgress] = useLocalStorage<Progress>("bs_progress", { day: 0 });
  const [cover, setCover] = useLocalStorage<Cover>("bs_cover", COVERS[0]);
  const [onboarded, setOnboarded] = useLocalStorage<boolean>("bs_onboarded", false);
  const [dictEntry, setDictEntry] = useState<DictEntry | null>(null);
  const [reading, setReading] = useState<Reading>(null);
  const [showCoverPicker, setShowCoverPicker] = useState(false);
  const [mounted, setMounted] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  useTheme();

  // Marcar como montado (cliente listo, localStorage ya leído)
  useEffect(() => { setMounted(true); }, []);

  // Registrar Service Worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);

  const openReader = (bookId: string, chapter: number) => {
    setReading({ bookId, chapter });
    topRef.current?.scrollTo(0, 0);
  };

  const handleBack = (action: "back" | "prev" | "next") => {
    if (action === "next") setReading(r => r ? { ...r, chapter: r.chapter + 1 } : null);
    else if (action === "prev") setReading(r => r ? { ...r, chapter: r.chapter - 1 } : null);
    else setReading(null);
    topRef.current?.scrollTo(0, 0);
  };

  const markProgress = () => {
    const themeId = progress.themeId ?? "guided-40";
    const theme = THEMES.find(t => t.id === themeId) ?? THEMES[0];
    setProgress(p => ({ ...p, day: Math.min(p.day + 1, theme.plan.length) }));
  };

  const changeTheme = (themeId: string) => {
    setProgress({ day: 0, themeId });
  };

  const handleOnboardingFinish = (themeId: string) => {
    setProgress({ day: 0, themeId });
    setOnboarded(true);
  };

  const headerTitle = reading
    ? `${getBook(reading.bookId)?.name} ${reading.chapter}`
    : tab === "today"   ? "Hoy"
    : tab === "read"    ? "Leer"
    : tab === "search"  ? "Buscar"
    : tab === "explore" ? "Explorar"
    : tab === "worship" ? "Adoración"
    : "Yo";

  const TABS: { id: Tab; icon: string; label: string }[] = [
    { id: "today",   icon: "◉", label: "Hoy"      },
    { id: "read",    icon: "☰", label: "Leer"     },
    { id: "search",  icon: "🔍", label: "Buscar"   },
    { id: "explore", icon: "◈", label: "Explorar" },
    { id: "worship", icon: "♪", label: "Música"   },
    { id: "profile", icon: "♡", label: "Yo"       },
  ];

  // Splash mientras localStorage carga (evita flash del onboarding para usuarios ya registrados)
  if (!mounted) {
    return (
      <div style={{ background: C.bg, minHeight: "100vh", maxWidth: 430, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 11, color: C.amber, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", marginBottom: 16 }}>Biblia Simple</p>
          <div style={{ width: 28, height: 28, border: `3px solid ${C.border}`, borderTopColor: C.amber, borderRadius: "50%", animation: "spin .8s linear infinite", margin: "0 auto" }} />
        </div>
      </div>
    );
  }

  // Onboarding solo para usuarios nuevos (tras montar — localStorage ya leído)
  if (!onboarded) {
    return <Onboarding onFinish={handleOnboardingFinish} />;
  }

  return (
    <div style={{ background: C.bg, minHeight: "100vh", maxWidth: 430, margin: "0 auto", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif", display: "flex", flexDirection: "column" }}>

      {/* Header */}
      <div style={{ background: C.surface, borderBottom: `1px solid ${C.border}`, padding: "52px 20px 14px", flexShrink: 0, boxShadow: "0 1px 4px rgba(0,0,0,.06)" }}>
        <p style={{ fontSize: 10, color: C.amber, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", marginBottom: 3 }}>Biblia Simple</p>
        <h1 style={{ fontSize: 20, fontWeight: 900, color: C.text }}>{headerTitle}</h1>
      </div>

      {/* Content */}
      <div ref={topRef} style={{ flex: 1, overflowY: "auto", padding: "18px 18px 100px" }}>
        {reading
          ? <Reader
              bookId={reading.bookId}
              chapter={reading.chapter}
              onBack={handleBack}
              onWord={setDictEntry}
              onRead={openReader}
              progress={progress}
              onMark={markProgress}
            />
          : tab === "today"
          ? <TodayTab progress={progress} onMark={markProgress} onThemeChange={changeTheme} onRead={openReader} cover={cover} onChangeCover={() => setShowCoverPicker(true)} />
          : tab === "read"
          ? <BookPicker onSelect={openReader} />
          : tab === "search"
          ? <SearchTab onRead={openReader} onWord={setDictEntry} />
          : tab === "explore"
          ? <ExploreTab onWord={setDictEntry} onRead={openReader} />
          : tab === "worship"
          ? <WorshipTab />
          : <ProfileTab onRead={openReader} progress={progress} onThemeChange={changeTheme} />
        }
      </div>

      {/* Modals */}
      {dictEntry && <DictModal entry={dictEntry} onClose={() => setDictEntry(null)} onRead={openReader} />}
      {showCoverPicker && <CoverPicker current={cover} onSelect={setCover} onClose={() => setShowCoverPicker(false)} />}

      {/* Bottom nav */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: C.navBg, borderTop: `1px solid ${C.border}`, display: "flex", zIndex: 100, backdropFilter: "blur(20px)" }}>
        {TABS.map(t => {
          const active = !reading && tab === t.id;
          return (
            <button key={t.id} onClick={() => { setReading(null); setTab(t.id); }}
              style={{ flex: 1, background: "none", border: "none", padding: "10px 2px 16px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
              <span style={{ fontSize: 17, color: active ? C.amber : C.faint }}>{t.icon}</span>
              <span style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: active ? C.amber : C.faint }}>{t.label}</span>
              {active && <div style={{ width: 14, height: 2, background: C.amber, borderRadius: 1 }} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
