export type TextPart = { text: string; h: boolean; w?: string };

// Quita tildes/acentos para matching insensible a acentos
// "mesías" → "mesias", "apóstol" → "apostol", "redención" → "redencion"
function stripAccents(s: string): string {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

// Caracteres que cuentan como "letra" (incluyendo acentuadas para corte de palabra)
const ALPHA = /[a-zA-ZÀ-ɏ]/;

function isLetter(ch: string | undefined): boolean {
  return !!ch && ALPHA.test(ch);
}

function isWordMatch(stripped: string, start: number, end: number): boolean {
  return !isLetter(stripped[start - 1]) && !isLetter(stripped[end]);
}

export function tok(text: string, hl: string[]): TextPart[] {
  if (!hl?.length) return [{ text, h: false }];

  // Normalizar el texto original para búsqueda (sin acentos, minúsculas)
  const norm = stripAccents(text.toLowerCase());
  const hits: { s: number; e: number; w: string }[] = [];

  hl.forEach(w => {
    // Normalizar también el término de búsqueda
    const wNorm = stripAccents(w.toLowerCase());
    let i = 0;
    while ((i = norm.indexOf(wNorm, i)) !== -1) {
      const e = i + wNorm.length;
      // Verificar límite de palabra en el texto normalizado
      if (isWordMatch(norm, i, e)) {
        hits.push({ s: i, e, w });
      }
      i += wNorm.length;
    }
  });

  if (!hits.length) return [{ text, h: false }];

  hits.sort((a, b) => a.s - b.s);

  const pts: TextPart[] = [];
  let c = 0;
  hits.forEach(h => {
    if (h.s < c) return; // saltar hits solapados
    if (h.s > c) pts.push({ text: text.slice(c, h.s), h: false });
    pts.push({ text: text.slice(h.s, h.e), h: true, w: h.w });
    c = h.e;
  });
  if (c < text.length) pts.push({ text: text.slice(c), h: false });
  return pts;
}
