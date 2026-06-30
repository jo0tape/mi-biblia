"use client";
import { useLocalStorage } from "./useLocalStorage";
import type { StreakData } from "../lib/types";

export function useStreak() {
  const [streak, setStreak] = useLocalStorage<StreakData>("bs_streak", { lastDate: "", count: 0 });

  const markToday = () => {
    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    setStreak(s => {
      if (s.lastDate === today) return s;
      if (s.lastDate === yesterday) return { lastDate: today, count: s.count + 1 };
      return { lastDate: today, count: 1 };
    });
  };

  return { count: streak.count, markToday };
}
