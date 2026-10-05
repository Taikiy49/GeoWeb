# Completed scheduled refinements

## 2026-10-03 — Office-specific navigation

Evidence on the deployed About page at 390px and 1440px: all four regional office links pointed to `/contact#office-locations`, so choosing Maui, Kauaʻi or California landed at the beginning of the directory instead of that office.

Added stable office IDs to the shared office data, matched About links to each office’s row, and labeled/focused those destination rows for keyboard users. Shared hash navigation now focuses focusable destinations before scrolling; existing header offset, motion preferences, maps, copy, colors and application links remain unchanged.

Verification: 16 office link flows (four offices × two viewport widths × normal/reduced motion), four direct-link loads, four clean WCAG A/AA axe scans, and two existing service-anchor regressions. Screenshots confirm the selected location and map are visible with keyboard focus continuing into that office. TypeScript, ESLint, production build and diff checks passed.

Evidence: `/Users/tyamashita/Documents/ChatGPT/Geolabs/office-deeplink-review/`.

## 2026-10-05 — Retain project browsing context

Desktop (1440px) and phone (390px) reproduction: opening Koa Ridge from a filtered List view and selecting its Projects breadcrumb discarded the search/category/view and returned to all 44 projects. Opening the Turtle Bay draft from the same catalogue sent the reader to the separate Draft stories directory instead.

ProjectCard now carries its catalogue URL and stable card anchor in router history state. Both completed and unfinished stories return to the original results and focus the selected card, clear of the sticky masthead. Related stories preserve this origin. Breadcrumbs and closing return links agree. Direct/new-tab story links retain their normal fallback destinations. A shared Shell correction keeps search focus and scroll position when changing filters removes the return anchor. Approved business wording, photographs, layout, branding and motion timings remain intact.

Verification: 24 keyboard return flows across 1440/768/390/320px and normal/reduced motion; related-story continuity; list/gallery restoration; direct-link fallbacks; refresh/browser Back; clear-search/no-results recovery; six existing office/service/leadership anchor regressions; six clean WCAG A/AA axe scans; invalid external return state ignored. TypeScript, ESLint, production build, strict premium audit and diff checks passed. The initial clear-search focus regression introduced by the return anchor was reproduced and fixed before shipping.

Evidence: `docs/project-return-verification-2026-10-05.json` and `/Users/tyamashita/Documents/ChatGPT/Geolabs/refinement-2026-10-05/` (desktop/phone before-and-after snapshots).
