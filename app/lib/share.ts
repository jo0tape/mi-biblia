export async function shareVerse(text: string, ref: string): Promise<void> {
  const content = `"${text}" — ${ref}\n\nBiblia Simple`;
  if (navigator.share) {
    await navigator.share({ text: content });
  } else {
    await navigator.clipboard.writeText(content);
  }
}
