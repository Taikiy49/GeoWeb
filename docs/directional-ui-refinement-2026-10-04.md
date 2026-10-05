# Directional UI refinement — October 4, 2026

The owner requested smoother, faster motion that follows the side of the text, plus further UI improvements within the current Geolabs site.

## Grounding

Reviewed the running test site, shared page components, page data, DESIGN.md, PRODUCT.md and the repository's saved Wix New/Newer source audits. The saved October 4 parity review covers 49 standalone Wix pages and their dynamic content. The current editor link requires sign-in in this session, so the saved captures provide the source reference; this pass does not claim a fresh signed-in Wix audit.

The implementation retains the current Montserrat / DM Sans, slate / yellow / white identity and photographic content. This is a marketing portfolio for clients, project partners and applicants. The signature is coordinated motion across its real photographic engineering spreads.

## Changes

- Shared text reveals use rendered column geometry: left text enters from -32px, right text from +32px. CSS-reordered service spreads follow their actual position. Stacked/full-width content uses a 16px rise. Reveals settle in 560ms with ease-out and at most 120ms sibling stagger.
- Photographs retain their subtle scale entrance. Initial project browsing and whole-card filtering now share the visited-card record, so viewed results do not replay as the search query changes. New results use 280ms without stagger.
- Hero title lines enter from opposite sides. Leadership profile content owns a separate 560ms entrance, excluded from the shared observer to prevent compounded motion. Phones use a short vertical profile entrance.
- The header uses 14px semibold links and a 260px anniversary panel; desktop navigation remains visible down to 1151px. The existing 12px/10px logo overhang is preserved. Smaller menus have a short leftward link sequence and retain Escape/focus behavior.
- Interior introductions use a left title/right summary composition above 900px, with stacked reading order below that breakpoint.
- Photo preview panels reveal horizontally in 420ms. Action links gain a short yellow underline sweep. Reading progress is reduced to 3px. Scrollbars receive a global visible baseline and a forced-colors fallback.
- Shared reveal timing/distance are canonical CSS tokens read by both CSS and the hook. Keyboard focus, live reduced-motion changes, printing and cleanup reveal pending content immediately.

## Verification

- `npm run check`: TypeScript, ESLint and Vite production build passed.
- `npm run test:motion`: 13 focused checks passed. The harness executes the actual hook against simulated elements and lifecycle events. It covers left/right directions, stacked fallback, no-observer/reduced-motion fallbacks, resize, listener cleanup, focus, print and filtered-result behavior. The live deployment check exposed CSS minification converting `560ms` to `.56s`; the hook now normalizes either unit to WAAPI milliseconds, with a regression check. The harness does not substitute for a real screen-reader or OS reduced-motion browser test.
- Strict premium static audit: zero findings. `designmd lint DESIGN.md`: zero errors, four existing orphan-token warnings for colors consumed by canonical CSS rather than frontmatter component recipes.
- Browser route checks: all 68 canonical routes at 390px and 1280px (136 checks), plus the eight main pages at 320px. Every route had one main h1 and no horizontal document overflow. The desktop menu was also checked immediately above its 1150px breakpoint.
- Live browser checks covered the hero, About, Services, Projects, People, Awards, Contact and Careers. Confirmed right-side service text and left-side reordered construction text; stacked mobile intro directions; search/no-results/reset and restored search focus; Gallery/List switching; profile selection/focus and independent animation ownership; mobile menu/Escape/focus; keyboard-readable photo-card titles.
- Desktop and mobile screenshots and the route-check records were saved to the task's outputs folder.

The contact form still prepares an email draft; its existing delivery behavior is outside this visual pass. Existing unfinished source stories remain marked under construction. Current Wix authentication and a real OS preference/screen-reader audit remain limits of this session's verification.
