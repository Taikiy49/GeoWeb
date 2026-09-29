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
