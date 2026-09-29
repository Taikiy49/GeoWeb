/** Match common keyboard spellings without changing the displayed Hawaiian names. */
export function normalizeProjectSearch(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/['’‘ʻʼ]/g, "")
    .toLowerCase()
    .trim();
}
