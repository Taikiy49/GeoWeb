/** Presentation-only repairs for the imported Wix drafts. Raw source stays intact. */
export function formatDraftParagraph(text: string): string {
  return text
    .replace(/&#(\d+);/g, (entity, digits: string) => {
      const point = Number(digits);
      return point > 0 && point <= 0x10ffff && !(point >= 0xd800 && point <= 0xdfff)
        ? String.fromCodePoint(point)
        : entity;
    })
    .replace(/\u200b/g, "")
    // These damaged punctuation patterns are present in the source export.
    .replace(/\uFFFD(?=s\b)/g, "’")
    .replace("historic�carefully", "historic—carefully")
    .replace(/^� (?=2023 Geolabs)/, "© ")
    .replace(/^\uFFFD$/, "")
    .trim();
}
