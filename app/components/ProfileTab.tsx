"use client";
import { useState } from "react";
import { C } from "../lib/tokens";
import { getBook } from "../data/books";
import { useBookmarks } from "../hooks/useBookmarks";
import { useNotes } from "../hooks/useNotes";
import { useTheme } from "../hooks/useTheme";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useStreak } from "../hooks/useStreak";
import { useAuth } from "../hooks/useAuth";
import { THEMES } from "../data/guided";
import type { Progress } from "../lib/types";

type Section = "bookmarks" | "notes" | "settings";

type Props = {
  onRead: (book: string, chapter: number) => void;
  progress: Progress;
  onThemeChange: (themeId: string) => void;
};

export function ProfileTab({ onRead, progress, onThemeChange }: Props) {
  const [section, setSection] = useState<Section>("bookmarks");
  const { bookmarks, remove } = useBookmarks();
  const { allNotes, save } = useNotes();
  const { isDark, toggle: toggleTheme } = useTheme();
  const { user, loading: authLoading, signInWithGoogle, signOut } = useAuth();
  const [fontSize, setFontSize] = useLocalStorage<number>("bs_fontsize", 17);
  const { count: streakCount } = useStreak();

  const SECTIONS: { id: Section; label: string; icon: string }[] = [
    { id: "bookmarks", label: "Marcadores", icon: "🔖" },
    { id: "notes", label: "Notas", icon: "✏️" },
    { id: "settings", label: "Ajustes", icon: "⚙️" },
  ];

  return (
    <div>
      {/* Section switcher */}
      <div style={{ display: "flex", background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, overflow: "hidden", marginBottom: 20 }}>
        {SECTIONS.map(s => (
          <button key={s.id} onClick={() => setSection(s.id)}
            style={{ flex: 1, background: section === s.id ? C.amber : "none", color: section === s.id ? "#fff" : C.dim, border: "none", padding: "11px 4px", fontSize: 12, fontWeight: 800, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <span style={{ fontSize: 14 }}>{s.icon}</span>
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      {/* Bookmarks */}
      {section === "bookmarks" && (
        <>
          {bookmarks.length === 0
            ? <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <p style={{ fontSize: 32, marginBottom: 12 }}>🔖</p>
                <p style={{ fontSize: 15, color: C.dim, lineHeight: 1.6 }}>Guarda versículos tocándolos en el lector.</p>
              </div>
            : bookmarks.map(b => {
              const book = getBook(b.book);
              return (
                <div key={b.id} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "13px 15px", marginBottom: 10 }}>
                  <p style={{ fontSize: 11, color: C.amber, fontWeight: 700, marginBottom: 6 }}>{b.ref}</p>
                  <p style={{ fontSize: 14, color: C.text, lineHeight: 1.65, fontStyle: "italic", marginBottom: 10 }}>"{b.text}"</p>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => onRead(b.book, b.chapter)}
                      style={{ flex: 1, background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "7px", fontSize: 12, color: C.dim, cursor: "pointer", fontWeight: 700 }}>
                      Ir al capítulo
                    </button>
                    <button onClick={() => remove(b.id)}
                      style={{ background: "#FEF2F2", border: `1px solid ${C.redA}`, borderRadius: 8, padding: "7px 12px", fontSize: 12, color: C.red, cursor: "pointer" }}>
                      Eliminar
                    </button>
                  </div>
                </div>
              );
            })
          }
        </>
      )}

      {/* Notes */}
      {section === "notes" && (
        <>
          {allNotes.length === 0
            ? <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <p style={{ fontSize: 32, marginBottom: 12 }}>✏️</p>
                <p style={{ fontSize: 15, color: C.dim, lineHeight: 1.6 }}>Agrega notas a los versículos desde el lector.</p>
              </div>
            : allNotes.map(n => {
              const book = getBook(n.book);
              const ref = `${book?.name ?? n.book} ${n.chapter}:${n.verse}`;
              return (
                <div key={n.key} style={{ background: C.surface, border: `1px solid ${C.blue}22`, borderRadius: 12, padding: "13px 15px", marginBottom: 10 }}>
                  <p style={{ fontSize: 11, color: C.blue, fontWeight: 700, marginBottom: 6 }}>{ref}</p>
                  <p style={{ fontSize: 14, color: C.text, lineHeight: 1.65, marginBottom: 10 }}>{n.text}</p>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => onRead(n.book, n.chapter)}
                      style={{ flex: 1, background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "7px", fontSize: 12, color: C.dim, cursor: "pointer", fontWeight: 700 }}>
                      Ir al capítulo
                    </button>
                    <button onClick={() => save(n.book, n.chapter, n.verse, "")}
                      style={{ background: "#FEF2F2", border: `1px solid ${C.redA}`, borderRadius: 8, padding: "7px 12px", fontSize: 12, color: C.red, cursor: "pointer" }}>
                      Borrar
                    </button>
                  </div>
                </div>
              );
            })
          }
        </>
      )}

      {/* Settings */}
      {section === "settings" && (
        <div>

          {/* Google account */}
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px", marginBottom: 16 }}>
            {authLoading ? (
              <p style={{ fontSize: 13, color: C.faint }}>Cargando…</p>
            ) : user ? (
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {user.user_metadata?.avatar_url && (
                  <img src={user.user_metadata.avatar_url} alt="" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                )}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: C.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user.user_metadata?.full_name ?? user.email}</p>
                  <p style={{ fontSize: 11, color: C.dim }}>Datos sincronizados en la nube ✓</p>
                </div>
                <button onClick={() => signOut()} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "6px 12px", fontSize: 12, color: C.dim, cursor: "pointer", fontWeight: 700, flexShrink: 0 }}>
                  Salir
                </button>
              </div>
            ) : (
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 4 }}>Guardar en la nube</p>
                <p style={{ fontSize: 12, color: C.dim, lineHeight: 1.5, marginBottom: 12 }}>
                  Inicia sesión para que tus marcadores, notas y progreso se guarden aunque cambies de dispositivo.
                </p>
                <button onClick={() => signInWithGoogle()} style={{ width: "100%", background: C.text, color: C.bg, border: "none", borderRadius: 10, padding: "12px 16px", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                  <span style={{ fontSize: 18 }}>G</span>
                  Continuar con Google
                </button>
              </div>
            )}
          </div>

          {/* Streak */}
          {streakCount > 0 && (
            <div style={{ background: C.amberBg, border: `1px solid ${C.amberB}`, borderRadius: 12, padding: "14px 16px", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 28 }}>🔥</span>
              <div>
                <p style={{ fontSize: 15, fontWeight: 900, color: C.amber }}>{streakCount} {streakCount === 1 ? "día" : "días"} de racha</p>
                <p style={{ fontSize: 12, color: C.dim }}>¡Sigue así!</p>
              </div>
            </div>
          )}

          {/* Dark mode */}
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px", marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Modo noche</p>
                <p style={{ fontSize: 12, color: C.dim }}>Fondo oscuro para leer de noche</p>
              </div>
              <button onClick={toggleTheme}
                style={{ width: 48, height: 28, borderRadius: 14, background: isDark ? C.amber : C.fainter, border: "none", cursor: "pointer", position: "relative", transition: "background .2s" }}>
                <div style={{ position: "absolute", top: 3, left: isDark ? 23 : 3, width: 22, height: 22, borderRadius: "50%", background: "#fff", transition: "left .2s", boxShadow: "0 1px 3px rgba(0,0,0,.2)" }} />
              </button>
            </div>
          </div>

          {/* Font size */}
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px", marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Tamaño de texto</p>
              <p style={{ fontSize: 14, color: C.amber, fontWeight: 700 }}>{fontSize}px</p>
            </div>
            <input type="range" min={14} max={22} step={1} value={fontSize} onChange={e => setFontSize(Number(e.target.value))}
              style={{ width: "100%", accentColor: C.amber }} />
            <p style={{ fontSize: fontSize, color: C.dim, lineHeight: 1.6, marginTop: 10 }}>Vista previa: "Y creyó a Jehová, y le fue contado por justicia."</p>
          </div>

          {/* Theme / reading plan */}
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px", marginBottom: 12 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 12 }}>Plan de lectura activo</p>
            {THEMES.map(t => (
              <button key={t.id} onClick={() => onThemeChange(t.id)}
                style={{ width: "100%", background: progress.themeId === t.id ? C.amberBg : C.card, border: `1px solid ${progress.themeId === t.id ? C.amber : C.border}`, borderRadius: 10, padding: "11px 14px", cursor: "pointer", textAlign: "left", marginBottom: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: progress.themeId === t.id ? C.amber : C.text }}>{t.name}</p>
                  <p style={{ fontSize: 11, color: C.dim }}>{t.desc}</p>
                </div>
                <span style={{ fontSize: 11, color: C.faint }}>{t.days} días</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
