// Sorted longest-first to avoid partial matches (e.g. "Juan" before "1 Juan")
const BOOK_MAP: Array<[string, string]> = [
  ["1 Tesalonicenses", "1tesalonicenses"],
  ["2 Tesalonicenses", "2tesalonicenses"],
  ["Lamentaciones",    "lamentaciones"],
  ["Deuteronomio",     "deuteronomio"],
  ["1 Corintios",      "1corintios"],
  ["2 Corintios",      "2corintios"],
  ["Apocalipsis",      "apocalipsis"],
  ["1 Crónicas",       "1cronicas"],
  ["2 Crónicas",       "2cronicas"],
  ["1 Timoteo",        "1timoteo"],
  ["2 Timoteo",        "2timoteo"],
  ["Filipenses",       "filipenses"],
  ["Colosenses",       "colosenses"],
  ["Proverbios",       "proverbios"],
  ["1 Samuel",         "1samuel"],
  ["2 Samuel",         "2samuel"],
  ["Eclesiastés",      "eclesiastes"],
  ["1 Reyes",          "1reyes"],
  ["2 Reyes",          "2reyes"],
  ["Zacarías",         "zacarias"],
  ["Malaquías",        "malaquias"],
  ["Sofonías",         "sofonias"],
  ["Cantares",         "cantares"],
  ["Jeremías",         "jeremias"],
  ["1 Pedro",          "1pedro"],
  ["2 Pedro",          "2pedro"],
  ["Nehemías",         "nehemias"],
  ["Efesios",          "efesios"],
  ["Gálatas",          "galatas"],
  ["Hebreos",          "hebreos"],
  ["Santiago",         "santiago"],
  ["Ezequiel",         "ezequiel"],
  ["Génesis",          "genesis"],
  ["Habacuc",          "habacuc"],
  ["Romanos",          "romanos"],
  ["Filemón",          "filemon"],
  ["Jeremías",         "jeremias"],
  ["Miqueas",          "miqueas"],
  ["Levítico",         "levitico"],
  ["Números",          "numeros"],
  ["Hechos",           "hechos"],
  ["Daniel",           "daniel"],
  ["Isaías",           "isaias"],
  ["Salmos",           "salmos"],
  ["Salmo",            "salmos"],
  ["Marcos",           "marcos"],
  ["Mateo",            "mateo"],
  ["Lucas",            "lucas"],
  ["Josué",            "josue"],
  ["Jueces",           "jueces"],
  ["1 Juan",           "1juan"],
  ["2 Juan",           "2juan"],
  ["3 Juan",           "3juan"],
  ["Éxodo",            "exodo"],
  ["Oseas",            "oseas"],
  ["Abdías",           "abdias"],
  ["Nahúm",            "nahum"],
  ["Hageo",            "hageo"],
  ["Esdras",           "esdras"],
  ["Amós",             "amos"],
  ["Jonás",            "jonas"],
  ["Joel",             "joel"],
  ["Juan",             "juan"],
  ["Ester",            "ester"],
  ["Tito",             "tito"],
  ["Job",              "job"],
  ["Rut",              "rut"],
  ["Judas",            "judas"],
];

export type ParsedRef = { bookId: string; chapter: number };

export function parseVerseRef(ref: string): ParsedRef | null {
  const trimmed = ref.trim();
  for (const [name, bookId] of BOOK_MAP) {
    if (trimmed.startsWith(name + " ") || trimmed.startsWith(name + ":")) {
      const rest = trimmed.slice(name.length).trim();
      const chapter = parseInt(rest, 10);
      if (!isNaN(chapter) && chapter > 0) return { bookId, chapter };
    }
  }
  return null;
}
