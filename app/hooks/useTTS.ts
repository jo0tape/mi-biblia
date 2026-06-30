"use client";
import { useState, useRef } from "react";
import type { Verse } from "../lib/types";

export function useTTS() {
  const [speaking, setSpeaking] = useState(false);
  const [activeVerse, setActiveVerse] = useState<number | null>(null);
  const utterancesRef = useRef<SpeechSynthesisUtterance[]>([]);

  const stop = () => {
    if (typeof window === "undefined") return;
    window.speechSynthesis?.cancel();
    setSpeaking(false);
    setActiveVerse(null);
  };

  const speak = (verses: Verse[]) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    stop();

    const getVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      return voices.find(v => v.lang.startsWith("es")) ?? null;
    };

    const buildAndSpeak = () => {
      const voice = getVoice();
      utterancesRef.current = verses.map((verse, i) => {
        const utt = new SpeechSynthesisUtterance(verse.t);
        utt.lang = "es-ES";
        utt.rate = 0.9;
        if (voice) utt.voice = voice;
        utt.onstart = () => { setSpeaking(true); setActiveVerse(verse.v); };
        utt.onend = () => {
          if (i === verses.length - 1) { setSpeaking(false); setActiveVerse(null); }
        };
        return utt;
      });
      utterancesRef.current.forEach(u => window.speechSynthesis.speak(u));
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = buildAndSpeak;
    } else {
      buildAndSpeak();
    }
  };

  const toggle = (verses: Verse[]) => {
    if (speaking) stop();
    else speak(verses);
  };

  return { speaking, activeVerse, toggle, stop };
}
