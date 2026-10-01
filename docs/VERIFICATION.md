# Verification — September 28, 2026

- `npm run check`: TypeScript, ESLint, and Vite production build passed with updated dependencies (Vite 7, React Router 7).
- `npm audit`: zero reported vulnerabilities after updating the original repository's affected dependencies.
- `designmd lint DESIGN.md`: zero errors and zero warnings; `docs/design-lint.json` records the result.
- Frontend premium strict static audit: zero findings; `docs/ui-audit.json` records the result.
- Browser: inspected home, all nine other page families including 404, every one of the 30 project routes, five service routes, and eight draft detail routes at a 390 CSS-pixel phone width. No horizontal overflow or failed completed images detected. All manifest assets exist on disk.
- Visually reviewed desktop home, project collection, leadership, careers, and phone homepage. Shared type, navigation, colors, and imagery remain consistent.
- Project interaction checks: market filter, search/no results, clear filters, dedicated search clear with focus restoration, URL query persistence, and browser Back restoring the filtered query.
- Navigation: mobile open/close, Escape and button focus restoration; shared route focus and scroll handling; direct deep links and unknown-route recovery.
- Content behavior: leadership credential disclosure; draft notices and `noindex, nofollow`; application links all target careers.geolabs.net, with resumes directed to `/apply`.
- Reduced-motion emulation: hero animation `none`, document scroll behavior `auto`; emulation reset afterward.
- Production-build smoke test: direct Palau project URL, return to the 30-project collection, and four-office contact layout at 320 CSS pixels passed.
- No browser console errors in the inspected final preview. No contact messages, job applications, or Wix changes were submitted.

This is functional and visual browser validation, not a formal WCAG certification or an assertion that draft source claims have been independently verified. Source discrepancies are documented in MIGRATION.md.

## Owner-requested branding and design revision

- `npm run check`: TypeScript, ESLint and Vite production build passed after the redesign; `npm audit --audit-level=moderate` reports zero vulnerabilities.
- Strict premium audit and official designmd lint passed with zero errors/warnings. Runtime CSS, DESIGN.md and UX-CONTRACT.md describe the revised shared system.
- Original Wix anniversary and G PNGs were inspected directly. A contact-sheet review covered existing photos and proposed replacements; only visually confirmed replacement subjects were retained. The temporary contact sheet was removed before commit.
- Desktop visual inspection: header, photographic hero, company intro, service cards, project gallery, field-team careers panel, footer, and service collection.
- Phone validation at 390px: homepage, portfolio, named project selector, selected-state caption update, navigation open/close, Escape focus restoration, empty search and clear-filters recovery to 30 projects.
- Narrow validation at 320px: home/about/services/people/awards/contact/careers/drafts/404, all 30 project detail routes and all 5 service detail routes. No document overflow or broken completed images. Eight draft detail pages retained visible warnings and noindex/nofollow metadata, with no overflow.
- Reduced-motion emulation: photo animation is none, document scroll is auto; emulation and viewport override reset after testing. No console errors in the final preview. Careers links still target the external portal.
- All 49 photo assets referenced by JSX and content data exist locally. Updated dependency licenses are included. No Wix/Base44 content was modified or published.

## Video homepage and public test domain

- Live Wix DOM exposed a 38.5385-second MP4. Visual comparison confirmed the same drilling footage in the owner-provided YouTube video `tbyqrhBD-hA` (Geolabs cover). The whole clip is retained; 1280px H.264 compression and audio removal reduced it from 29 MB to about 5.3 MB. Poster is an extracted frame, not generated artwork.
- Browser confirmed muted inline autoplay, play/pause button behavior, readyState 4, and full 38.5385-second duration. Reduced-motion emulation disabled autoplay and kept video paused. At 390 CSS pixels, video playback worked with no horizontal overflow. Emulation and viewport overrides were reset.
- Vercel production build completed successfully. Project is connected to GitHub main. Wix CNAME for `test.geolabs.net` now targets `d1f338d741962b13.vercel-dns-017.com`; Vercel verification returned configured-correctly, verified, no issues. Original CNAME and rollback instructions are in DEPLOYMENT.md.
- HTTPS certificate issued for test.geolabs.net. Public browser verified readyState 4 and advancing playback, no broken loaded images, and direct Palau project navigation. Anonymous HTTPS requests to home, video and a deep link returned 200; video served as video/mp4 with byte-range support. Git integration automatically built the pushed revision successfully.
- Explicit root response header and hostname-aware robots metadata keep the public test homepage out of search indexes as well as the other staging routes.

## Filmstrip and palette revision — September 28, 2026

Typecheck, ESLint, production build, strict UI audit, and design token lint passed. Browser verified original 51.51-second HDOT footage playing, next-project selection clearing playback, and Home-key thumbnail selection. Visually checked desktop, 585px, and 320px layouts; 320px viewport has 309px document width and no document overflow. Filmstrip scrolls internally. Reduced-motion mode was enabled during the narrow-screen review; content remained fully visible. Browser settings restored afterward.

## Reference-led visual redesign — September 28, 2026

Read the user-linked Anthropic frontend-design skill and Stark router/web-design plus the selected creative-direction, page-proof, cinematic, brand-motif, and rendered-quality references. Applied their design workflow within the existing React/Vite stack. No new runtime library or media asset was added. Source-based copy in App.tsx and data files is unchanged; hero words were regrouped into spans and utility copy moved to the footer.

`npm run check` passed (TypeScript, ESLint, Vite build). Strict UI audit: zero findings. Design document lint: zero errors/warnings. Browser reviewed desktop hero, film viewer, home services, services, projects, people, and contact. Verified all four leadership portraits loaded. Inspected 390px and 320px hero/navigation. At 320px, service, people, contact, careers, walkway detail, about, awards, and draft routes all had a 309px document width and no overflowing main-content elements.

Verified no-results project search and clear recovery, retained input focus, mobile menu/Escape focus restoration, reduced-motion poster/paused video, film video playback (51.51 seconds) and selection reset. Reduced-motion and viewport emulation restored afterward. Highest-impact visual repairs: simplified the masthead, centered the headline, replaced boxed services with photographic layouts, and stopped search from replaying page-intro motion.

## Slate interior pages — September 29, 2026

Shared interior introductions now use the original #2d3142 slate, white headings, yellow eyebrows and light secondary text. People continues the slate through its leadership portraits and native credential disclosures. Content, photographs, motion and the anniversary logo overhang remain unchanged.

`npm run check` passed. Browser checks covered eight main interior routes at 1440, 768, 390 and 320px (32 route/viewport combinations), plus service and draft detail pages at 1440 and 320px. No horizontal overflow or broken images were found in the main-route matrix. All 21 automated WCAG A/AA scans passed, including an expanded leadership disclosure. Keyboard activation and yellow focus on the disclosure passed; project search and focus styling remained functional. Desktop and mobile screenshots are saved in the local `slate-review` artifact directory. These checks do not constitute screen-reader or physical-device certification.

The Impeccable detector reported only the existing, documented film readability scrim advisory; no new advisory was introduced.

## Detail masthead consistency — scheduled refinement, September 29, 2026

Desktop and mobile inspection found two remaining inconsistencies with the approved slate interiors: project detail titles remained on white, and draft breadcrumbs formed a separate white strip above their dark titles. Both now share the slate masthead. A shared, labeled breadcrumb navigation preserves its wording and destinations, provides 44px links and yellow keyboard focus, and wraps safely. Original imagery, summaries and draft warnings are unchanged.

`npm run check` passed. Verified all 30 project and eight draft detail routes at 320px, plus three representative details at 390, 768 and 1440px (47 combinations total). No horizontal overflow, incorrect masthead colors or undersized breadcrumb targets; nine automated WCAG A/AA scans reported zero violations. Keyboard return from a draft to the draft index passed. The first interaction assertion ran before React rendered the destination heading; waiting for that heading resolved the test timing issue without changing application behavior. Before/after viewport screenshots and the verification report are saved in the local `detail-masthead-review` directory. The detector only repeated the previously documented film-scrim advisory.

## Project search interaction — scheduled refinement, September 29, 2026 (Hawaiʻi)

Desktop and mobile screenshots showed both Chrome’s native clear decoration and the custom clear button. Scoped search-input CSS now removes the redundant decoration while retaining the accessible 44px button. Rapid typing also reproduced the previously noted dropped-character problem: the URL-controlled input was being updated inside the router’s React transition. `BrowserRouter useTransitions={false}` makes that state synchronous; existing authored page animations remain active. No new dependency or local/URL synchronization layer was added.

`npm run check` passed. At 1440, 768, 390 and 320px, verified complete input strings at 0, 5 and 30ms character intervals; Backspace; combined search and market filtering; clearing search while preserving market; empty-state recovery; reload; project navigation and browser Back restoration. Four automated WCAG A/AA scans reported zero violations, with no horizontal overflow or page errors. Rapid input also passed with motion enabled. Mobile navigation, menu dismissal and Escape focus restoration passed after the router change. Before/after screenshots confirm one visible clear control. Artifacts are saved in the local `search-refinement` directory. The detector repeated only the previously documented film-scrim advisory.

## Service anchor navigation — scheduled refinement, September 30, 2026 (Hawaiʻi)

Before screenshots showed capability destinations landing 224px from the viewport top because document scroll padding and section scroll margin each added 112px. Removed the duplicate section margin; selected sections now align at 112px with space below the sticky header and anniversary artwork. The capability index marks the selected hash link with `aria-current="location"`, heavier text and a yellow divider. Destination articles are focusable for native keyboard anchor navigation. Wording, photos and section order remain unchanged.

`npm run check` passed. All five service routes passed at 1440, 768, 390 and 320px: expected landing position, one selected link, target focus and no horizontal overflow. Keyboard activation, browser Back, reload with a fragment, homepage introduction deep-link positioning and motion-enabled scrolling passed. Four automated WCAG A/AA scans reported zero violations; no browser page errors occurred. Before/after screenshots and verification data are saved in the local `service-anchor-review` directory. The detector repeated only the existing documented film-scrim advisory.

## Filmstrip focus visibility — scheduled refinement, October 1, 2026

Desktop and phone screenshots showed the first thumbnail’s focus ring clipped by the scroll container: a 3px outline with 5px offset had only 4px of inner clearance. Increased the filmstrip’s horizontal inner padding to 12px, preserving the original frames, selection treatment and scrolling behavior.

`npm run check` passed. At 1440, 768, 390 and 320px, Home, End and wraparound arrow-key navigation passed (16 checks); all four sides of the focused thumbnail’s outline remained inside the scroll container and selection stayed synchronized. Four automated WCAG A/AA scans of the featured-project section reported no violations. No document overflow or browser page errors occurred. Before/after desktop and mobile evidence is in the local `film-focus-review` directory.
