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
  {
    id: "0P5pu_Xqf6o",
    title: "Esa Es La Razón",
    artist: "Christine D'Clario · Gateway Worship",
    moods: ["adoracion", "gratitud"],
    chapters: ["romanos-8", "marcos-16", "hechos-2"],
  },
  {
    id: "2BJ0OA0nXPY",
    title: "Océanos",
    artist: "Hillsong UNITED",
    moods: ["fe", "lamento"],
    chapters: ["salmos-22", "juan-11", "marcos-8"],
  },
  {
    id: "M2d58mf3Pzg",
    title: "Alaba",
    artist: "Elevation Worship · Español",
    moods: ["adoracion"],
    chapters: ["salmos-1", "salmos-100", "hechos-1"],
  },
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
];

export function getSongsForChapter(bookId: string, chapter: number): Song[] {
  const key = `${bookId}-${chapter}`;
  return SONGS.filter(s => s.chapters.includes(key));
}
