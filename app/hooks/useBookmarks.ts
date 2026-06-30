"use client";
import { useLocalStorage } from "./useLocalStorage";
import type { Bookmark } from "../lib/types";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useLocalStorage<Bookmark[]>("bs_bookmarks", []);

  const add = (b: Omit<Bookmark, "id" | "date">) => {
    const newB: Bookmark = { ...b, id: `${b.book}-${b.chapter}-${b.verse}`, date: new Date().toISOString() };
    setBookmarks(bs => {
      if (bs.some(x => x.id === newB.id)) return bs;
      return [newB, ...bs];
    });
  };

  const remove = (id: string) => setBookmarks(bs => bs.filter(b => b.id !== id));

  const has = (book: string, chapter: number, verse: number) =>
    bookmarks.some(b => b.book === book && b.chapter === chapter && b.verse === verse);

  return { bookmarks, add, remove, has };
}
