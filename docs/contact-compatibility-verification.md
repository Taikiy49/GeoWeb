# Contact and legacy compatibility verification

Verified October 1, 2026 against the integrated local app at `http://127.0.0.1:5174` using headless Chrome through Playwright. This pass did not change application source.

## Contact

At viewport widths **1440, 390 and 320px**:

- No horizontal page overflow or uncaught page errors.
- All four office selectors are at least 48px high. Exactly one `aria-pressed` value is true after each selection.
- Keyboard Tab then Enter selects Maui from Oʻahu, keeps focus on the button, and shows a 3px yellow focus indicator.
- Map and directions queries match the source-configured addresses in `src/data/site.ts` exactly. Kauaʻi's `Unit #5` remains part of the encoded query, not a URL fragment.
- Every visible Contact telephone link uses the requested `(###)###-####` display and an E.164 `tel:` target. Verified Oʻahu, Maui, both Kauaʻi numbers, California, the main inquiry contact and the footer.
- Reduced-motion mode removes the address entrance animation and selector transitions.
- Axe WCAG 2 A/AA and WCAG 2.1 AA checks reported **zero violations** on the Contact page. This is an automated audit, not a claim of full accessibility conformance or an audit of Google's cross-origin iframe internals.
- All four Google maps visibly render address cards/pins and map tiles at desktop width; Oʻahu was additionally verified visually at both phone widths. Its desktop pane is 440px high; phone panes are 320px high. The source address and direct directions link remain outside the iframe.

Google's iframe `load` event occurs before all of its map tiles finish rendering. Visual verification therefore waited for the provider content rather than treating removal of the loading overlay as sufficient evidence. Provider availability and geocoding remain external dependencies; no fabricated coordinates or API key were introduced.

## Client compatibility

Sixteen representative navigation cases passed:

- Robin M. Lim, Gerald Y. Seki and John Y.L. Chen old profile URLs resolve to their People anchors. The profile starts sit approximately 112px from the viewport top, below the fixed navigation.
- The ambiguous old Ala Moana copy URL resolves to the verified Ala Moana Center Expansion project.
- Literal and percent-encoded CONRAC parentheses resolve correctly.
- Percent-encoded ʻokina, quoted project name and apostrophe variants resolve correctly, including the explicitly marked Beach Villas draft.
- Home `#clients`, `#contact`, Wix services data-anchor and Wix careers region fragments resolve to the right routes.
- Internal query strings are preserved before the destination fragment, for example `/robinmlim?from=legacy` becomes `/people?from=legacy#robin-lim`.
- The canonical About Clients anchor remains visible and explicitly says “Under construction.” Canonical Services stays unchanged; an unknown path still shows Page not found.

This browser pass verifies React client compatibility. Local Vite does not execute `vercel.json` redirects, so deployed 308 redirects, headers and asset behavior still require staging HTTP checks. External application forwarding was not followed in this browser pass.

## Evidence

Temporary local evidence, outside the repository:

- `/tmp/geolabs-integrated-verification.json`: assertions, phone values, map queries, accessibility results and all 16 route outcomes.
- `/tmp/geolabs-map-maui-confirmed.png`, `/tmp/geolabs-map-office-1.png`, `/tmp/geolabs-map-office-2.png`: rendered Maui, Kauaʻi and California map snapshots.
- `/tmp/geolabs-map-render-1440.png`, `/tmp/geolabs-map-render-390.png`, `/tmp/geolabs-map-render-320.png`: loaded Oʻahu map snapshots.
- `/tmp/geolabs-integrated-contact-full-1440.png`, `/tmp/geolabs-integrated-contact-full-390.png`, `/tmp/geolabs-integrated-contact-full-320.png`: full Contact layouts captured during the initial interaction pass. Some provider tiles were still loading at the instant of these captures; use the dedicated map snapshots above to verify the rendered map.
