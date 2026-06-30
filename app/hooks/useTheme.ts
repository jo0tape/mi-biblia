"use client";
import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTheme() {
  const [isDark, setIsDark] = useLocalStorage<boolean>("bs_theme", false);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  const toggle = () => setIsDark(d => !d);
  return { isDark, toggle };
}
