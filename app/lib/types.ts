export type VideoRef = { id: string; title: string };

export type Book = {
  id: string; api: string; name: string;
  testament: "AT" | "NT"; chapters: number; section: string;
};

export type ChapterCtx = {
  title: string; context: string; stake: string;
  keyVerse: string; keyText: string; highlights: string[];
  video: VideoRef | null; genealogy: string | null;
};

export type DictEntry = {
  term: string; type: string; short: string;
  body: string; verses: string[]; video?: VideoRef;
};

export type GenealogyNode = {
  n: string; y?: number | null; note: string | null;
  m: "start" | "end" | "special" | "dots" | null;
  book?: string; chapter?: number;
};

export type Genealogy = {
  title: string; ref: string; narrative: string; nodes: GenealogyNode[];
  yLabel?: string; // label para el campo numérico y (default: "años")
};

export type GuidedDay = { day: number; book: string; ch: number };

export type ReadingTheme = {
  id: string; name: string; desc: string; days: number; plan: GuidedDay[];
};

export type Cover = { id: string; url: string; label: string };

export type EmotionRef = { book: string; chapter: number; verse: number };

export type Emotion = {
  id: string; emoji: string; label: string; refs: EmotionRef[];
};

export type ProphecyPair = {
  id: string; theme: string;
  at: { book: string; chapter: number; verse: number; ref: string; note: string };
  nt: { book: string; chapter: number; verse: number; ref: string; note: string };
};

export type CharacterChapter = { book: string; ch: number; note: string };

export type Character = {
  id: string; name: string; emoji: string; bio: string;
  chapters: CharacterChapter[];
};

export type DailyVerseRef = { book: string; chapter: number; verse: number; ref: string };

export type Bookmark = {
  id: string; book: string; chapter: number; verse: number;
  text: string; ref: string; date: string;
};

export type Verse = { v: number; t: string };

export type Progress = { day: number; themeId?: string };

export type StreakData = { lastDate: string; count: number };

export type Notes = Record<string, string>;
