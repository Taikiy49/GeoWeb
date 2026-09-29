# Comprehensive website redesign — 2026-09-29

## Brief and evidence

The user requested a complete visual/interaction redesign, preserving wording, factual content, routes, original Wix media, slate/yellow/white branding, original logos, the 12px/10px anniversary-panel overhang, hero video, filmstrip, careers portal, and explicit drafts. The removed contact banner stays removed.

The audit crawled the deployed baseline and local implementation at 1440px and 390px: 52 destinations including all top-level pages, five service details, thirty project details, and linked draft stories. Every destination was rendered and captured; representative page templates were visually inspected. All 104 after views had no horizontal overflow or broken images. No browser JavaScript errors were recorded. Normalized main-content text matched the baseline on all routes; CSS casing/whitespace and the hidden decorative award star were excluded from comparison. No data or media files changed.

## Findings and response

| Area | Baseline problem | Implemented response |
|---|---|---|
| Shared system | Thousands of accumulated CSS overrides obscured canonical choices | Replaced with one ordered stylesheet, shared tokens and explicit responsive sections |
| Home | Repeated equal-weight blocks weakened hierarchy | Photographic film archive, asymmetric service composition and field-team spread |
| Interior introductions | Tall stacked titles repeated across pages | Aligned title/summary spread that stacks on narrower screens |
| Project archive | Long wall of equal two-column items | Three-column archive with a wider opening project, open search/filter controls, clear active states |
| Leadership | Cramped two-column mobile profiles | One portrait/name profile per mobile row; native credentials disclosures |
| Contact | Large blank regions and vertically dispersed offices | Compact inquiry panel alongside a grouped office directory |
| Awards | Photo and list consumed disconnected vertical space | Ceremony photograph paired with chronological recognition; stacked mobile composition |
| Careers | Text over photography competed with the image | Real crew photograph beside a readable slate introduction |
| Interaction | Menu/current-page behavior and film focus/selection needed refinement | Outside/Escape/current-link dismissal, centered selection, native video focus and retry behavior |
| Motion | Search could replay retained results; offscreen video kept playing | Once-per-visit element tracking, short bounded stagger, visibility-aware video with manual intent preserved |

## Applied skills

Anthropic Frontend Design informed the photographic, content-led direction and distinct compositions. Impeccable supplied the craft floor, bounded before/after inspection, canonical system documentation and independent finish review. UI/UX Pro Max was queried for engineering/photographic portfolio design; its hierarchy and interaction guidance was used, while suggested substitute palettes, fonts and parallax were rejected in favor of the user's fixed brand and motion requirements. Current Web Interface Guidelines informed focus, semantics, reduced motion, responsive controls and accessible verification. React guidance informed observer/event cleanup and ref-backed transient state. These are design/process inputs, not shipped runtime dependencies.

The Impeccable detector reported no primary findings and 22 advisory color matches, all secondary tonal values for scrims, dark-surface text, hover states, and draft notices. These tonal roles are intentional and documented alongside the core palette. The independent review approved the overall composition and identified one 320px title/play-control collision; the narrow film viewport was made taller to resolve it.

## Verification

- `npm run check`: TypeScript, ESLint and production build.
- 52 routes × desktop/mobile: route rendering, images, horizontal overflow, main-content preservation and console errors.
- Nine main page types at 320, 390, 768, 1024, 1200 and 1440px: no horizontal overflow.
- axe WCAG 2 A/AA and 2.1 AA scans: zero violations across nine main page types × desktop/mobile (18 combinations). Automated checks do not constitute a complete assistive-technology audit.
- 70 scripted layout/interaction checks: mobile Escape and focus return, current-link dismissal, Tab exit, leadership disclosure, category/search/empty/clear states, project navigation, reduced-motion hero, selected film visibility, next/End controls, native film playback/focus, careers application links, office mail/phone links.
- Seven motion checks in a running browser: manual hero pause survives scrolling, offscreen pause, visible resume, statistic count-up to final facts, actual scroll entrances, reduced-motion cancellation, and retained search results do not replay.
- Final narrow film capture reviewed after the correction. No new dependencies, factual copy, media replacements or public draft claims introduced.

## Maintenance

Update canonical selectors and DESIGN.md together. Keep content and source-media manifests as the editorial authority. Motion must not hide content or shift layout. Continue routing applications to careers.geolabs.net. Local review captures are intentionally excluded from git; representative screenshots are supplied in the task's final response.
