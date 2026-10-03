# Section review — October 3, 2026

## Scope and findings

Captured 112 full-page views across all 56 public and draft routes at 390px and 1440px, plus 498 section/photographic captures. The local review gallery is at `/Users/tyamashita/Documents/ChatGPT/Geolabs/section-review-2026-10-03/index.html`. Contact sheets cover the full section set. Full-page captures retain context around sticky elements and sections taller than the viewport. No horizontal page overflow was detected in the 112 baseline views.

The existing white/soft-gray interior palette, leadership portrait hierarchy, office/map grouping, service spreads, and occasional slate emphasis remain coherent. The main opportunity was the Projects archive: a repeated photograph/title grid concealed the summaries already available in the source content. The project detail templates and related links already provide a useful continuation, so this pass improves the entry into those stories.

## Implemented

- Three large photo/story spotlights interrupt the unfiltered gallery, preserving source order. Alternate image placement on desktop; stacked compositions on tablet and phone.
- Existing project summaries appear in gallery previews. Spotlight summaries display in full; standard previews are limited to three visual lines, with the full text available on the linked project page.
- Gallery/List toggle with URL-backed state, visible selected state, native buttons and accessible pressed state. The compact list prioritizes thumbnails, titles and locations on phones.
- Search/category filters retain the chosen view; empty-result recovery clears filters while keeping that view and returning focus to search.
- Correct heading levels for archive entries, decorative arrow semantics, forced-color selection affordance, and immediate visibility of a focused link’s animated descendants.

No project data, imagery, business claims, source wording, phone numbers, or application destinations changed. This was a presentation review, not a fresh Wix content-parity audit.

## Design sources

- Snøhetta project archive: https://www.snohetta.com/projects — complementary gallery/list browsing.
- Arup project stories: https://www.arup.com/projects/ — image-led stories with readable context.
- Applied installed Frontend Design, Impeccable and frontend-design-premium guidance, preserving the established design system. The targeted UI/UX Pro Max lookup reinforced balanced headings; the project browsing direction came from the references and existing content.
- Reviewed the changed UI against the current Vercel Web Interface Guidelines.

## Verification

- `npm run check`: TypeScript, ESLint and production build passed.
- At 360, 390, 768, 1024 and 1440px: gallery/list switching, category filtering, accent-insensitive search, empty recovery, focus visibility, keyboard project navigation, related cards and overflow checks passed.
- Five automated WCAG A/AA checks reported zero violations in the filtered project gallery. This supplements manual visual/keyboard review; it is not a complete accessibility certification.
- Updated gallery/list and detail screenshots are saved in the review folder’s `after` directory.
- Normal-motion checks at 390 and 1440px confirmed immediate focused-card visibility, 1000ms text entrances, no replay after scrolling back, and immediate visibility when reduced motion is enabled.
