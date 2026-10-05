# Complete Wix content parity follow-up — October 4, 2026

This pass fixes gaps missed by the earlier restoration review. The new evidence supersedes the earlier claim that gallery-only titles were unsupported and that both Palau narratives were already present.

## Source inspection

Read 49 standalone business pages (including all New/Newer pages and older unique variants), all 28 primary CMS records, and both secondary resort records in the signed-in Wix editor/Preview. Refreshed an expired editor session before reading the dynamic collections. Mixed transitional captures were discarded. Read the nested Table Master roster separately and checked all 32 rows, all four Why Us slides, and the three authored leadership profiles. Payton's supplied name/title/portrait remain; no biography was invented.

`wix-complete-parity-review-2026-10-04.json` lists the exact pages and maps **every one of the 48 named New Projects tiles to a route**. Duplicated walkway, Palau and Tinian tiles share canonical pages. The sanitized source text is retained in `wix-complete-source-text-2026-10-04.json`; it contains no browser session credentials or embed-instance URLs.

## Restored

- Twelve missing gallery-only projects: Joint Traffic Management Center, Kalanianaole rock scaling, Turtle Bay, Hilton Grand Waikikian, Kukio, H-3, UH West Oahu, Andersen Air Force Base, Villages of Kapolei, H-1 Waimalu Viaduct, Four Seasons Hualalai and Koolina infrastructure. Exact source titles, locations and original photos are preserved; credits retain source spelling. No engineering scope or business narrative was invented. They are visibly **Under construction**, searchable and available in Gallery/List views.
- The already unfinished Aulani Resort and Hilton Grand Islander entries now use their correctly associated **New Projects gallery photos**, rather than mismatched CMS template imagery, and appear alongside the newer projects. There are **44 catalogue entries: 30 completed narratives and 14 unfinished gallery entries**. The full draft index retains 24 routes, including prototype and alternate resort concepts.
- All three previously missing paragraphs from Palau CMS record 18 precede the three paragraphs from record 19. Both authored variants are now present. The complete story corpus contains **102 source paragraphs across 30 completed stories**. Independent comparison against this pass's captured Wix text passed for every paragraph; rendered route comparison also passed.
- Restored rail notation **125 feet ± 25 feet**; the earlier stripped symbol changed its technical meaning.
- Restored old Awards location metadata for all 15 listed awards, including the Cubi Point FY85 facility identifier, and the original schedule sentence. Source descriptions remain; conflicting H-3 dates remain under review.
- Added 12 correctly associated newer Awards photos, with their supplied credits, behind keyboard/touch-operable Project photo disclosures. Three photos are withheld rather than mislabeled: the UH housing PNG is wholly transparent; the Kailua-Regional image conflicts with the Cartwright/Metcalf award; and the Hawaiian Airlines hangar conflicts with the Cubi Point award. All original award tile associations are retained in `wix-award-source-tiles.json`.

Original wording remains authoritative. Layout, navigation, accessible names and construction-status notices are interface copy. Formatting and obvious broken-word/punctuation fixes do not introduce new business claims. Newer 50-year copy supersedes obsolete 40/49-year versions; the current published employment policy supersedes older Apply copy; applications use the owner-authorized careers portal.

## Verification

- TypeScript, ESLint, production build, source diff checks and the premium strict static audit passed.
- All 24 draft routes checked for their source titles and explicit noindex/construction status; their displayed photos loaded.
- 28 changed-workflow viewport checks at 320, 390, 768 and 1440px: no horizontal page overflow. Desktop/mobile screenshots saved in the local `wix-complete-parity-review` directory.
- Automated Axe WCAG A/AA checks of main content passed on the seven representative changed routes at desktop/mobile sizes. This is bounded automated coverage, not exhaustive accessibility certification or an audit of external map iframes.
- Gallery/List modes, all/unfinished filters, search, keyboard link activation, focus visibility, browser Back with retained filters, no-results recovery and restored-search focus checked.
- Palau compared directly with both newly captured CMS source records, not only the site's own manifest. Rail ± and all three rendered leadership credential profiles checked separately.
- Contact keeps native constraint-validation ownership explicitly; long messages grow the field. Required-field focus, unsent email-draft status and invalidation after edits checked. No message sent.
- Existing shared motion and reduced-motion behavior preserved. Native mobile selects remain intentionally platform-owned. New image dimensions reserve layout space; original assets were converted to WebP, not generated or replaced with stock media.

## Remaining differences

Wix's direct contact inbox delivery is still not implemented: the current form prepares an explicitly unsent email draft. Aulani/Hilton source conflicts, explicit ChatGPT placeholder resort copy, incomplete prototype stories, ambiguous dates and unlabeled images remain archived or under construction. Decorative textures, duplicated layouts and unused Bookings/cart/member scaffolding are not promoted into new business claims. Source fidelity does not establish independent factual approval or media licensing.

Only the test deployment is updated. No Wix edit, publish action or geolabs.net/www.geolabs.net DNS cutover is included.
