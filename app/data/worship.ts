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

  // ─── BARAK ───────────────────────────────────────────────────────────────────
  {
    id: "LUvV5eoAGYQ",
    title: "Trae el Cielo Aquí",
    artist: "Barak",
    moods: ["adoracion", "renovacion"],
    chapters: ["hechos-2", "isaias-40", "salmos-100"],
  },
  {
    id: "Iyixun3RElQ",
    title: "Jesús",
    artist: "Barak",
    moods: ["adoracion", "fe"],
    chapters: ["juan-1", "marcos-16", "mateo-1"],
  },
  {
    id: "053BvHDfIdI",
    title: "Libre Soy",
    artist: "Barak · Alex Campos",
    moods: ["gratitud", "renovacion"],
    chapters: ["efesios-2", "juan-3", "romanos-8"],
  },
  {
    id: "w4Hm493D5L4",
    title: "Acepta",
    artist: "Barak",
    moods: ["lamento", "renovacion"],
    chapters: ["lucas-15", "salmos-51", "marcos-2"],
  },
  {
    id: "3sqDskpu0F0",
    title: "Perdóname",
    artist: "Barak",
    moods: ["lamento", "renovacion"],
    chapters: ["salmos-51", "lucas-15", "juan-3"],
  },

  // ─── UN CORAZÓN ───────────────────────────────────────────────────────────────
  {
    id: "MjMcj453CYQ",
    title: "Salmo 23",
    artist: "Un Corazón · Marco Barrientos",
    moods: ["paz", "fe"],
    chapters: ["salmos-23", "salmos-27", "juan-10"],
  },
  {
    id: "6q-eds5bbLo",
    title: "El Nombre",
    artist: "Un Corazón · Averly Morillo",
    moods: ["adoracion", "fe"],
    chapters: ["juan-1", "marcos-16", "filipenses-4"],
  },
  {
    id: "9khH4zemXL4",
    title: "1000 Pedazos",
    artist: "Un Corazón",
    moods: ["lamento", "renovacion"],
    chapters: ["lucas-15", "salmos-34", "efesios-2"],
  },
  {
    id: "zUTHgUQthaA",
    title: "Otra Vez",
    artist: "Un Corazón",
    moods: ["fe", "renovacion"],
    chapters: ["romanos-8", "juan-11", "isaias-40"],
  },

  // ─── AVERLY MORILLO ──────────────────────────────────────────────────────────
  {
    id: "Fal-ROykq-4",
    title: "Ante Tu Altar",
    artist: "Averly Morillo",
    moods: ["adoracion", "paz"],
    chapters: ["salmos-1", "salmos-27", "hebreos-11"],
  },
  {
    id: "S3Cn0aaV2sY",
    title: "¿Quién Podrá?",
    artist: "Averly Morillo",
    moods: ["fe", "lamento"],
    chapters: ["romanos-8", "salmos-22", "juan-11"],
  },
  {
    id: "6RZwH5xjn7w",
    title: "Estoy Convencido",
    artist: "Averly Morillo",
    moods: ["fe", "gratitud"],
    chapters: ["romanos-8", "hebreos-11", "filipenses-4"],
  },
  {
    id: "7b9z-YcDUrc",
    title: "Mesías",
    artist: "Averly Morillo",
    moods: ["adoracion", "fe"],
    chapters: ["mateo-1", "lucas-1", "isaias-53"],
  },

  // ─── LAILA OLIVEIRA ───────────────────────────────────────────────────────────
  {
    id: "AYTFUxfm97Y",
    title: "Me Rindo",
    artist: "Laila Oliveira",
    moods: ["lamento", "paz"],
    chapters: ["salmos-22", "job-38", "juan-11"],
  },
  {
    id: "-GgCNpZ2lQ0",
    title: "Esther",
    artist: "Laila Oliveira · Averly Morillo",
    moods: ["fe", "adoracion"],
    chapters: ["ester-4", "ester-7", "lucas-1"],
  },

  // ─── TOMA TU LUGAR / MARCOS BRUNET ───────────────────────────────────────────
  {
    id: "THTUEqjJS24",
    title: "Primer Amor",
    artist: "TOMATULUGAR · UPPERROOM",
    moods: ["adoracion", "renovacion"],
    chapters: ["marcos-1", "hechos-2", "lucas-1"],
  },
  {
    id: "8hY5fzjwzqU",
    title: "Espíritu Santo",
    artist: "Toma Tu Lugar · Marcos Brunet",
    moods: ["adoracion", "renovacion"],
    chapters: ["hechos-1", "hechos-2", "juan-14"],
  },

  // ─── GENERACIÓN 12 ───────────────────────────────────────────────────────────
  {
    id: "Pn-PqlB_K4M",
    title: "Quiero Conocer a Jesús",
    artist: "Generación 12 · Sofía Mancipe",
    moods: ["adoracion", "fe"],
    chapters: ["juan-14", "juan-3", "marcos-8"],
  },
  {
    id: "IA0T5w6nSH4",
    title: "Como En El Cielo",
    artist: "Generación 12 · Marcos Brunet",
    moods: ["adoracion", "renovacion"],
    chapters: ["mateo-5", "hechos-2", "lucas-1"],
  },

  // ─── SARAI RIVERA ────────────────────────────────────────────────────────────
  {
    id: "9YHtP1K3bMc",
    title: "Él Siempre Reina",
    artist: "Sarai Rivera",
    moods: ["adoracion", "fe"],
    chapters: ["salmos-1", "marcos-8", "romanos-8"],
  },
  {
    id: "HpKbr4SfLoM",
    title: "Cada Mañana",
    artist: "Sarai Rivera",
    moods: ["gratitud", "paz"],
    chapters: ["salmos-34", "mateo-5", "marcos-1"],
  },
  {
    id: "Td1flNSndVk",
    title: "Sé Fuerte",
    artist: "Sarai Rivera",
    moods: ["fe", "lamento"],
    chapters: ["josue-1", "salmos-27", "isaias-40"],
  },
  {
    id: "XAcIm0BtKhs",
    title: "Jesús (Live)",
    artist: "Sarai Rivera · Un Corazón",
    moods: ["adoracion", "fe"],
    chapters: ["juan-1", "marcos-16", "hechos-2"],
  },
  {
    id: "7wXxVkpb0i0",
    title: "Clamé",
    artist: "Sarai Rivera",
    moods: ["lamento", "fe"],
    chapters: ["salmos-22", "salmos-34", "salmos-46"],
  },

  // ─── ALEX MÁRQUEZ ────────────────────────────────────────────────────────────
  {
    id: "7MQ1SSnDc5g",
    title: "Tu Presencia Es Mejor",
    artist: "Alex Márquez",
    moods: ["adoracion", "paz"],
    chapters: ["salmos-1", "salmos-27", "marcos-1"],
  },
  {
    id: "JOqX6Y9ByC4",
    title: "Amado De Mi Alma",
    artist: "Alex Márquez",
    moods: ["adoracion", "paz"],
    chapters: ["juan-15", "juan-3", "salmos-23"],
  },
  {
    id: "ym4D8lyHvX8",
    title: "Padre Bueno",
    artist: "Alex Márquez",
    moods: ["gratitud", "paz"],
    chapters: ["mateo-5", "lucas-15", "juan-3"],
  },

  // ─── OASIS MINISTRY ──────────────────────────────────────────────────────────
  {
    id: "Qem0WSJXLCE",
    title: "Yahweh Se Manifestará",
    artist: "Oasis Ministry",
    moods: ["fe", "adoracion"],
    chapters: ["exodo-3", "numeros-13", "isaias-40"],
  },
  {
    id: "j2jA71Vorjk",
    title: "Si Tu Presencia Conmigo No Va",
    artist: "Oasis Ministry",
    moods: ["adoracion", "paz"],
    chapters: ["exodo-20", "marcos-14", "juan-14"],
  },

  // ─── CHRISTINE D'CLARIO ───────────────────────────────────────────────────────
  {
    id: "0P5pu_Xqf6o",
    title: "Esa Es La Razón",
    artist: "Christine D'Clario · Gateway Worship",
    moods: ["adoracion", "gratitud"],
    chapters: ["romanos-8", "marcos-16", "hechos-2"],
  },
  {
    id: "3uUJCvdbH3k",
    title: "Como Dijiste",
    artist: "Christine D'Clario",
    moods: ["adoracion", "paz"],
    chapters: ["marcos-1", "juan-3", "genesis-15"],
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

  // ─── MARCOS WITT ─────────────────────────────────────────────────────────────
  {
    id: "SNHtwDiRI50",
    title: "Renuévame",
    artist: "Marcos Witt",
    moods: ["renovacion", "lamento"],
    chapters: ["salmos-51", "lucas-1", "juan-3"],
  },
  {
    id: "4dB5PIdHoVY",
    title: "Tu Fidelidad",
    artist: "Marcos Witt",
    moods: ["gratitud", "fe"],
    chapters: ["salmos-100", "hebreos-11", "romanos-8"],
  },
  {
    id: "4cHCCwZAzFQ",
    title: "Cuán Bello Es El Señor",
    artist: "Marcos Witt · Sarai Rivera",
    moods: ["adoracion", "gratitud"],
    chapters: ["genesis-1", "salmos-1", "salmos-139"],
  },
  {
    id: "qBq0Xjf0UYQ",
    title: "Simplemente Gracias",
    artist: "Marcos Witt",
    moods: ["gratitud"],
    chapters: ["salmos-100", "lucas-15", "hebreos-11"],
  },

  // ─── MARCO BARRIENTOS ────────────────────────────────────────────────────────
  {
    id: "zkQQPY-vwDw",
    title: "Ven Espíritu Ven",
    artist: "Marco Barrientos",
    moods: ["adoracion", "renovacion"],
    chapters: ["hechos-1", "hechos-2", "juan-15"],
  },

  // ─── MAJO Y DAN ──────────────────────────────────────────────────────────────
  {
    id: "VPKKh9Aikbo",
    title: "Tú Proveerás",
    artist: "Majo y Dan · Christine D'Clario",
    moods: ["fe", "paz"],
    chapters: ["genesis-22", "exodo-3", "mateo-11"],
  },

  // ─── ALINE BARROS ────────────────────────────────────────────────────────────
  {
    id: "HRSf5w0CYJs",
    title: "Jehová Jireh",
    artist: "Aline Barros",
    moods: ["fe", "gratitud"],
    chapters: ["genesis-22", "exodo-3", "romanos-8"],
  },

  // ─── HILLSONG ────────────────────────────────────────────────────────────────
  {
    id: "2BJ0OA0nXPY",
    title: "Océanos",
    artist: "Hillsong UNITED",
    moods: ["fe", "lamento"],
    chapters: ["salmos-22", "juan-11", "marcos-8"],
  },
  {
    id: "kbNUsg8yzpY",
    title: "Vasijas Rotas",
    artist: "Hillsong Worship",
    moods: ["renovacion", "lamento", "gratitud"],
    chapters: ["lucas-15", "salmos-34", "efesios-2", "marcos-2"],
  },
  {
    id: "ZoKsBeoEW18",
    title: "Hermoso Nombre",
    artist: "Hillsong en Español",
    moods: ["adoracion"],
    chapters: ["juan-1", "marcos-16", "mateo-1"],
  },

  // ─── ELEVATION WORSHIP ───────────────────────────────────────────────────────
  {
    id: "es34Nr2JovU",
    title: "Lo Harás Otra Vez",
    artist: "Elevation Worship · Español",
    moods: ["fe", "lamento"],
    chapters: ["hechos-1", "salmos-22", "juan-11"],
  },
  {
    id: "M2d58mf3Pzg",
    title: "Alaba",
    artist: "Elevation Worship · Español",
    moods: ["adoracion"],
    chapters: ["salmos-1", "salmos-100", "hechos-1"],
  },
  {
    id: "6c90U4-HMUE",
    title: "Esperaré en Ti",
    artist: "Elevation Worship · Español",
    moods: ["paz", "fe"],
    chapters: ["salmos-27", "isaias-40", "romanos-8"],
  },

  // ─── MIEL SAN MARCOS ─────────────────────────────────────────────────────────
  {
    id: "8FNTUOSi-YE",
    title: "Bienvenido Espíritu Santo",
    artist: "Miel San Marcos · Marco Barrientos",
    moods: ["adoracion", "renovacion"],
    chapters: ["hechos-1", "hechos-2", "juan-14"],
  },

  // ─── ALEX CAMPOS ─────────────────────────────────────────────────────────────
  {
    id: "SHEGijhWbTw",
    title: "Tu Amistad Me Hace Bien",
    artist: "Alex Campos",
    moods: ["paz", "gratitud"],
    chapters: ["juan-15", "juan-20", "salmos-23"],
  },
  {
    id: "vuEB7uwqLYE",
    title: "El Sonido del Silencio",
    artist: "Alex Campos",
    moods: ["lamento", "paz"],
    chapters: ["salmos-22", "salmos-46", "job-38"],
  },

  // ─── OTROS ───────────────────────────────────────────────────────────────────
  {
    id: "AujdgmwCriU",
    title: "La Bondad de Dios",
    artist: "Gateway Worship · Becky Collazos",
    moods: ["gratitud", "fe"],
    chapters: ["salmos-27", "salmos-34", "hebreos-11"],
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
