"use client";
import { useLocalStorage } from "./useLocalStorage";
import type { Notes } from "../lib/types";

export function useNotes() {
  const [notes, setNotes] = useLocalStorage<Notes>("bs_notes", {});

  const key = (book: string, chapter: number, verse: number) => `${book}-${chapter}-${verse}`;

  const get = (book: string, chapter: number, verse: number) => notes[key(book, chapter, verse)] ?? "";

  const save = (book: string, chapter: number, verse: number, text: string) => {
    setNotes(n => {
      const k = key(book, chapter, verse);
      if (!text.trim()) {
        const { [k]: _, ...rest } = n;
        return rest;
      }
      return { ...n, [k]: text.trim() };
    });
  };

  const hasNote = (book: string, chapter: number, verse: number) =>
    !!notes[key(book, chapter, verse)];

  const allNotes = Object.entries(notes).map(([k, text]) => {
    const [book, chapter, verse] = k.split("-");
    return { book, chapter: parseInt(chapter), verse: parseInt(verse), text, key: k };
  });

  return { get, save, hasNote, allNotes };
}
