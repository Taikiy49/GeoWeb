# Completed scheduled refinements

## 2026-10-03 — Office-specific navigation

Evidence on the deployed About page at 390px and 1440px: all four regional office links pointed to `/contact#office-locations`, so choosing Maui, Kauaʻi or California landed at the beginning of the directory instead of that office.

Added stable office IDs to the shared office data, matched About links to each office’s row, and labeled/focused those destination rows for keyboard users. Shared hash navigation now focuses focusable destinations before scrolling; existing header offset, motion preferences, maps, copy, colors and application links remain unchanged.

Verification: 16 office link flows (four offices × two viewport widths × normal/reduced motion), four direct-link loads, four clean WCAG A/AA axe scans, and two existing service-anchor regressions. Screenshots confirm the selected location and map are visible with keyboard focus continuing into that office. TypeScript, ESLint, production build and diff checks passed.

Evidence: `/Users/tyamashita/Documents/ChatGPT/Geolabs/office-deeplink-review/`.
