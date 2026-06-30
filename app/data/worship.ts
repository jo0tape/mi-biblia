export type SongMood = "adoracion" | "paz" | "fe" | "lamento" | "renovacion" | "gratitud";

export type Song = {
  id: string;
  title: string;
  artist: string;
  moods: SongMood[];
  chapters: string[];
};

export const MOOD_LABELS: Record<SongMood, string> = {
  adoracion:  "Adoración",
  paz:        "Paz",
  fe:         "Fe",
  lamento:    "Lamento",
  renovacion: "Renovación",
  gratitud:   "Gratitud",
};

export const MOOD_EMOJI: Record<SongMood, string> = {
  adoracion:  "🙌",
  paz:        "🕊",
  fe:         "⚓",
  lamento:    "💧",
  renovacion: "🌱",
  gratitud:   "🙏",
};

export const SONGS: Song[] = [

  // ─── ADORACIÓN ───────────────────────────────────────────────────────────────
  {
    id: "0P5pu_Xqf6o",
    title: "Esa Es La Razón",
    artist: "Christine D'Clario · Gateway Worship",
    moods: ["adoracion", "gratitud"],
    chapters: ["romanos-8", "marcos-16", "hechos-2"],
  },
  {
    id: "M2d58mf3Pzg",
    title: "Alaba",
    artist: "Elevation Worship · Español",
    moods: ["adoracion"],
    chapters: ["salmos-1", "salmos-100", "hechos-1"],
  },
  {
    id: "XciWnJ0-j_c",
    title: "Hermoso Nombre",
    artist: "Hillsong Worship",
    moods: ["adoracion"],
    chapters: ["juan-1", "marcos-16", "mateo-1"],
  },
  {
    id: "ZoKsBeoEW18",
    title: "Hermoso Nombre (en Español)",
    artist: "Hillsong en Español",
    moods: ["adoracion"],
    chapters: ["juan-1", "marcos-16"],
  },
  {
    id: "3uUJCvdbH3k",
    title: "Como Dijiste",
    artist: "Christine D'Clario",
    moods: ["adoracion", "paz"],
    chapters: ["marcos-1", "juan-3", "genesis-15"],
  },
  {
    id: "8FNTUOSi-YE",
    title: "Bienvenido Espíritu Santo",
    artist: "Miel San Marcos · Marco Barrientos",
    moods: ["adoracion", "renovacion"],
    chapters: ["hechos-1", "hechos-2", "juan-14"],
  },
  {
    id: "4cHCCwZAzFQ",
    title: "Cuán Bello Es El Señor",
    artist: "Marcos Witt · Sarai Rivera",
    moods: ["adoracion", "gratitud"],
    chapters: ["genesis-1", "salmos-1", "salmos-139"],
  },

  // ─── PAZ / DESCANSO ──────────────────────────────────────────────────────────
  {
    id: "N1zF5TJ27D0",
    title: "Rindo Mis Coronas",
    artist: "Christine D'Clario · Gateway Worship",
    moods: ["paz", "adoracion"],
    chapters: ["salmos-23", "filipenses-4", "marcos-10"],
  },
  {
    id: "J6HjvG9Q6_8",
    title: "Agua Viva",
    artist: "Christine D'Clario · Gateway Worship",
    moods: ["paz"],
    chapters: ["salmos-46", "juan-1", "juan-3"],
  },
  {
    id: "6c90U4-HMUE",
    title: "Esperaré en Ti",
    artist: "Elevation Worship · Español",
    moods: ["paz", "fe"],
    chapters: ["salmos-27", "isaias-40", "romanos-8"],
  },
  {
    id: "SHEGijhWbTw",
    title: "Tu Amistad Me Hace Bien",
    artist: "Alex Campos",
    moods: ["paz", "gratitud"],
    chapters: ["juan-15", "juan-20", "salmos-23"],
  },

  // ─── FE / ESPERANZA ──────────────────────────────────────────────────────────
  {
    id: "2BJ0OA0nXPY",
    title: "Océanos",
    artist: "Hillsong UNITED",
    moods: ["fe", "lamento"],
    chapters: ["salmos-22", "juan-11", "marcos-8"],
  },
  {
    id: "4dB5PIdHoVY",
    title: "Tu Fidelidad",
    artist: "Marcos Witt",
    moods: ["gratitud", "fe"],
    chapters: ["salmos-100", "hebreos-11", "romanos-8"],
  },
  {
    id: "zUTHgUQthaA",
    title: "Otra Vez",
    artist: "Un Corazón",
    moods: ["fe", "renovacion"],
    chapters: ["romanos-8", "juan-11", "isaias-40"],
  },
  {
    id: "AujdgmwCriU",
    title: "La Bondad de Dios",
    artist: "Gateway Worship · Becky Collazos",
    moods: ["gratitud", "fe"],
    chapters: ["salmos-27", "salmos-34", "lamentaciones-3"],
  },

  // ─── LAMENTO / CUANDO DUELE ──────────────────────────────────────────────────
  {
    id: "SNHtwDiRI50",
    title: "Renuévame",
    artist: "Marcos Witt",
    moods: ["renovacion", "lamento"],
    chapters: ["salmos-51", "lucas-1", "juan-3"],
  },
  {
    id: "kbNUsg8yzpY",
    title: "Vasijas Rotas",
    artist: "Hillsong Worship",
    moods: ["renovacion", "lamento", "gratitud"],
    chapters: ["lucas-15", "salmos-34", "efesios-2", "marcos-2"],
  },
  {
    id: "vuEB7uwqLYE",
    title: "El Sonido del Silencio",
    artist: "Alex Campos",
    moods: ["lamento", "paz"],
    chapters: ["salmos-22", "salmos-46", "job-38"],
  },

  // ─── GRATITUD / RENOVACIÓN ───────────────────────────────────────────────────
  {
    id: "qBq0Xjf0UYQ",
    title: "Simplemente Gracias",
    artist: "Marcos Witt",
    moods: ["gratitud"],
    chapters: ["salmos-100", "lucas-15", "hebreos-11"],
  },
  {
    id: "n_FWbhV0OIc",
    title: "Gracia Sublime Es",
    artist: "Evan Craft",
    moods: ["gratitud", "adoracion"],
    chapters: ["efesios-2", "romanos-3", "lucas-15"],
  },

];

export function getSongsForChapter(bookId: string, chapter: number): Song[] {
  const key = `${bookId}-${chapter}`;
  return SONGS.filter(s => s.chapters.includes(key));
}
