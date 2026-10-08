# Website development and maintenance

Geolabs' responsive engineering portfolio, rebuilt from the Wix **New/Newer** pages and dynamic project collections. Built with React 18, TypeScript, React Router 7, and Vite 7. The original Geolabs slate/yellow branding, anniversary artwork, project photography, and documentary footage are retained; Montserrat and DM Sans are self-hosted.

**Live test site:** [test.geolabs.net](https://test.geolabs.net/). GitHub `main` deploys automatically through the existing Vercel integration. This is a staging site, not an approved cutover of geolabs.net or www.geolabs.net.

## Current site

There are 68 canonical routes: nine main pages, five service detail pages, 30 completed project stories, and 24 explicitly unfinished project stories. Unknown paths show the site's 404 page. Verified legacy Wix paths and fragments have compatibility destinations.

- **Home:** original background video with visibility-aware playback and pause/play controls, a seven-frame manual filmstrip containing all five authored Wix Home slides and the existing Park/Azure features, statistic counters, services, company information, careers, and recognition. The HDOT walkway film and the restored Halawa View/Ka Haku photos retain their credits; image-only features have no invented case-study links.
- **About:** nine photographic topic links, readable full sections, original USFCR artwork and source statement, capabilities, sectors, regional office links, and the explicitly unfinished Clients section.
- **Services:** a jump index, photographic discipline spreads, source design/construction-support disclosures, and individual capability pages.
- **Projects:** 44 gallery entries, including 14 marked Under construction; search, market filters, Gallery/List views, and URL-backed browsing state. Completed stories retain source narratives, photo credits, and related projects.
- **People:** four selectable leadership profiles with URL-backed selection and previous/next navigation, plus the reviewed 32-person team directory with local search and sorting.
- **Awards, Contact, and Careers:** source recognition and benefits/policy content, four office/map pairs with directions fallbacks, and careers links to the external application portal. Applications and resume uploads go to [careers.geolabs.net/apply](https://careers.geolabs.net/apply).

### UI and motion

Shared text reveals follow the rendered column: left-side text enters from the left, right-side text from the right, and stacked text uses a small vertical rise. The shared 560ms ease-out timing has short stagger; newly filtered results use 280ms without replaying already-viewed cards. Hero lines, profile changes, photo previews, link underlines, and a 3px reading-progress bar complete the motion system.

Responsive navigation collapses at 1150px, contains scrolling on short screens, and supports Escape and focus restoration. Keyboard focus, printing, reduced-motion changes, and route cleanup reveal pending content immediately. Small About photo panels use complete-line excerpts and short preview lists; full source sections retain all details. Scrollbars remain visible, and reduced motion removes entrances and hover movement.

### Contact form behavior

The contact form **prepares an email draft; it does not send a message**. It validates required fields and email format, rejects whitespace-only required values, shows associated inline errors, preserves entered values, and focuses the first correction. A valid draft exposes an explicit email-app link and states that it has not been sent. Editing any field removes the stale draft. The message limit is 1,500 characters; phone is optional.

Office email/telephone links remain available independently. Phone display uses `(808) 841-5064`; dial links use international digits. Each office has its own lazy-loaded Google Maps iframe and permanent directions link, stacked beneath the office details on phones.

## Run locally

Use a Node version satisfying Vite's requirement: `^20.19.0 || >=22.12.0`.

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 5174
```

Open [http://127.0.0.1:5174](http://127.0.0.1:5174). No Wix runtime, Wix credentials, or environment secrets are needed for the current site. Google supplies the external map embeds; the careers portal and email application are separate services.

```sh
npm run typecheck    # TypeScript
npm run lint         # ESLint
npm run test:motion  # 13 actual-hook lifecycle and directional-motion checks
npm run test:content # Wix narratives, services, film slides, gallery routes, and roster
npm run check        # TypeScript, ESLint, content parity, and production build
npm audit --omit=dev --audit-level=high
```

Build and inspect the production output:

```sh
npm run build
npm run preview -- --host 127.0.0.1 --port 4174
```

Open [http://127.0.0.1:4174](http://127.0.0.1:4174). `check` includes `test:content` but does not include `test:motion`; run both before shipping motion changes. The content guard uses the checked-in independent Wix capture/manifests: 102 project paragraphs, 34 service explanations, five original film slides/credits, 48 gallery tile destinations, and 32 team qualification records. Run it from a full checkout containing `docs/`.

## Code and content guide

| Location | Responsibility |
| --- | --- |
| `src/App.tsx` | Page compositions, shared page primitives, route matching, and page metadata |
| `src/index.css` | Canonical design tokens, shared styles, motion, and responsive/accessibility rules |
| `src/components/` | Shell/navigation, video, filmstrip, counters, maps, leadership, team directory, contact form, reading progress, and reveal hook |
| `src/data/site.ts` | Offices, services, original case studies, leadership, benefits, and awards |
| `src/data/cms-projects.json` | Additional distinct projects from the Wix dynamic collection |
| `src/data/team.json` | Reviewed team-directory snapshot; no runtime spreadsheet dependency |
| `src/data/aboutTopics.ts` | About photo-topic content and source-associated imagery |
| `src/data/featuredProjects.ts` | Featured film slides, image associations, credits, and optional verified story links |
| `src/data/image-sizes.json` | Intrinsic photo dimensions; update when replacing source images |
| `src/data/unfinished-projects.json` | Public unfinished stories with verified titles/image associations and explicit notices |
| `src/data/drafts.json` | Archived unfinished narratives; not imported into the browser bundle |
| `src/data/legacyRoutes.ts` | Client-side compatibility destinations |
| `public/` | Local images, brand artwork, videos, licenses, and host routing/crawler files |
| `DESIGN.md` / `UX-CONTRACT.md` | Visual intent, token ownership, and shared interaction behavior |
| `PRODUCT.md` | Product purpose, content constraints, and outstanding integration boundaries |

Preserve source wording, qualifications, project/photo associations, credits, and clearly marked uncertainties. Do not turn draft narratives into verified case studies or invent client logos/certifications. Earlier source snapshots remain for provenance; they are not substitutes for the latest parity review.

To refresh the directory from the company's published source spreadsheet, run `python scripts/sync-team.py`, review the `src/data/team.json` diff, then run the project checks. This maintenance command requires Python and network access; the deployed directory reads its local snapshot.

## Hosting and launch requirements

Vercel builds `dist/` with `npm run build` from GitHub `main`. `vercel.json` defines legacy redirects, application rewrites, and staging noindex headers. Netlify's `public/_redirects` supplies an SPA fallback. Browser-history routes require the host to serve `index.html` for application paths while serving assets directly. See [deployment and rollback details](DEPLOYMENT.md).

Staging intentionally disallows crawling through `public/robots.txt`, response headers, and hostname-aware page metadata. Draft noindex settings are discoverability controls, not access control: draft routes are publicly accessible. Internal research/Markdown files are excluded from Vercel deployment by `.vercelignore`.

Before a primary-domain launch:

1. Configure a sending backend if direct contact-form delivery is required; the current draft handoff is explicit and functional.
2. Finish and approve the Clients section and unfinished portfolio/profile content, or make an explicit editorial decision about their public availability.
3. Approve the primary domain/canonical URL configuration, remove global staging crawler exclusions, retain draft exclusions, and verify redirects, HTTPS, and rollback.

No root/www DNS cutover or sending integration was performed by the October UI refinements. Source date/award conflicts and other editorial limitations are documented in [production readiness](PRODUCTION-READINESS.md).

## Verification and review records

The latest signed-in Wix recheck reopened 29 New/Newer-related pages, including the prototype and service children, read every named newer-gallery tile and its link configuration, and reviewed the Home/Team slides and leadership credentials. It found and restored the missing Halawa View Apartments and Ka Haku Timeshare film slides, restored the Central Ala Moana photo credit, and corrected one materials-testing typo. All 44 live gallery destinations and 102 rendered project paragraphs passed comparison. The expanded filmstrip passed image, counter, keyboard wrapping, and overflow checks at 320px, 390px, 768px, and 1280px. Full scope and source exceptions are recorded in the [fresh Wix recheck](wix-new-page-recheck.md).

The October 4 production-polish review passed TypeScript, ESLint, the production build, all 13 motion checks, and a strict UI static audit. The production dependency audit reported zero vulnerabilities at that time. Browser validation covered all 68 canonical routes at 390px and 1280px, plus eight main routes at 320px and 768px: 152 layout checks with one h1 per route, no horizontal document overflow, and no failed already-loaded images. Contact validation/draft recovery, short-screen menu behavior, preview geometry, and portfolio empty-state/filter recovery were also exercised.

The deployment was verified on test.geolabs.net. These checks are dated evidence, not a guarantee about future changes, every lazy-loaded/external asset, or a formal screen-reader/WCAG certification. Motion lifecycle tests simulate DOM and preference events; they do not replace real-device reduced-motion testing.

- [Latest production UI polish](production-polish-2026-10-04.md)
- [Fresh Wix pages and interaction recheck](wix-new-page-recheck.md) and [original Home film evidence](wix-home-film-source.json)
- [Directional motion and shared presentation](directional-ui-refinement-2026-10-04.md)
- [Complete Wix parity review](wix-complete-parity-review-2026-10-04.md): saved audit covering 49 standalone pages, 30 dynamic records, and named newer-gallery tiles
- [Content restoration](wix-content-restoration-2026-10-04.md) and [Wix interactions](wix-interaction-restoration-2026-10-04.md)
- [Migration/source precedence](MIGRATION.md) and [legacy routes](legacy-route-review.md)
- [Production readiness and unresolved content](PRODUCTION-READINESS.md)
- [Verification history](VERIFICATION.md)
