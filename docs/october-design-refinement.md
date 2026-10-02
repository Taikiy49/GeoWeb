# Site-wide presentation review — October 1, 2026

## Reference direction

Reviewed Snøhetta’s project archive (https://www.snohetta.com/projects) and Arup’s projects page (https://www.arup.com/projects/) online. Applied their clear hierarchy and image-led presentation within the existing Geolabs yellow/slate identity. No external artwork or new marketing copy was imported.

## Changes

- Four prominent leadership portraits across wide screens, two on tablets, and compact portrait/name/role rows on phones. Existing credential disclosures remain intact.
- Native labeled project category selector on mobile replaces three rows of wrapping filters. Desktop filters, URL-backed search, result counts and reset remain available.
- Long project and service stories now read on white below slate photographic sections. Related projects have a quiet separating rule.
- Awards, office directories, unfinished project notices and career policy copy use lighter surfaces. The contact inquiry panel remains slate and every office retains its own map.
- Intro summaries align beside multi-line titles; tower photography retains the tops of buildings. Service headings gain consistent hover/focus feedback.
- Navigation collapses at 1280px so smaller laptops do not crowd the anniversary logo and links.

## Verification

- Captured all 56 routes at 390px and 1440px before and after the changes. Both 112-view passes report no horizontal overflow or broken main-content images.
- Reviewed full-page overview sheets and project/service/draft detail compositions. Corrected a mobile profile row-placement issue identified during visual review.
- WCAG A/AA axe checks on 12 representative routes at both widths passed (24 scans). Rechecked the final mobile select label and profile corrections with two more clean scans.
- Nine main routes checked at 320, 768, 1180, 1280 and 1281px: 45 additional overflow checks passed.
- Mobile Retail selection, no-results search, Clear filters returning all 30 projects, menu navigation, Escape dismissal and credentials disclosures passed. Four office/map pairs remain present.
- TypeScript, ESLint, production build and whitespace checks passed.
- Evidence: `/Users/tyamashita/Documents/ChatGPT/Geolabs/october-design-refinement/after/`.

The bulk screenshots capture lazy Google maps in their loading state; this pass verifies their retained iframe placement, not third-party map availability. Brand assets, source copy, application destinations, original media and entrance timings were preserved. This is a staging presentation update, not a new Wix content-parity audit or production DNS cutover.

## Follow-up: homepage-led light palette

The user refined the direction to predominantly white and soft gray with occasional slate emphasis. About’s photo/legacy and sectors, the Services catalog, People leadership, and detail photographs are now white. Service and project reading sections use soft gray. Slate remains in the shared header/footer, homepage features, About culture, Careers ownership and contact inquiry panel. The homepage and all content/behavior remain unchanged. Updated light-surface label and service-hover colors preserve contrast.

Verification: all 56 routes captured at 390px and 1440px; 112 checks with no overflow or broken images, and 24 representative WCAG A/AA scans with no violations. Reviewed the resulting About, Services, People and project-detail compositions. TypeScript, lint, production build and diff checks pass.
