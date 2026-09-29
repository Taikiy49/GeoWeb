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
