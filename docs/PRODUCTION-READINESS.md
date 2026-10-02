# Production readiness review — October 1, 2026

This review prepares the replacement website on **test.geolabs.net**. It does not approve or perform a geolabs.net/www.geolabs.net cutover.

## Restored and checked

- The original USFCR Verified Vendor artwork and the published SAM statement appear under About on both the homepage and About page. The graphic is the company's source asset, not a newly created seal. This review does not independently certify its registration status.
- Contact has a real Google Maps embed for all four directory offices, visible selected-office state, accessible controls, an address caption, and permanent Google directions links. Oakland uses the newer displayed address, 344 20th Street, Suite 340; the mismatched Wix map destination was not copied.
- Visible phone numbers consistently use `(808)841-5064`, and dial links retain `tel:+18088415064` form. The current published policy's separate HR accommodation number is `(808)913-5146`.
- Meaningful omitted content was restored: About sectors and construction capabilities, source Design/Construction Support approach paragraphs, Gerald/John credentials, all seven benefit types, current published EEO/AAP text, and missing technical project details. Recommended dimensions and engineering uncertainty are preserved as qualifications.
- All 30 completed project summaries and service descriptions use source excerpts. Case-study bodies still include condensed source-based wording; navigation, accessibility labels, notices, and the new careers workflow are interface copy. The site is not a word-for-word reproduction of Wix.
- There are 12 unfinished source stories. They display **Under construction**, without unverified project narratives. Four prototype titles are now represented: Straub, Ililani, Kaiāulu o Kūkuʻia, and Temporary Schools for Maui. Only Straub and the Maui school scene have photos with sufficient subject evidence. Rejected or uncertain photo associations are documented in `prototype-asset-sources.json`.
- Source Clients content is still **Under construction**. No client names or logos were invented.
- Fifty verified legacy aliases, with 60 Vercel edge rules for encoding variants, and 20 observed old homepage fragments have compatibility destinations. Canonical pages remain direct routes. See `legacy-route-review.md` for exact mappings and verification.
- The footer is approximately 26% shorter on desktop and 25% shorter on a narrow phone while retaining its contents and usable mobile controls. Brand colors/artwork, hero video, and filmstrip are retained. New linework is abstract decoration, not project evidence.

## Remaining differences and decisions

1. **Contact submissions:** the Wix Contact(New) message form has no migrated sending backend. The new site offers working email and telephone links. A form endpoint/inbox workflow is required to restore form-submission parity; there is no fake success state.
2. **Source inconsistencies:** source variants disagree about the H-3 award year and some project completion dates. Disputed dates are omitted rather than resolved by invention. Other inconsistent source labels, duplicate records, and editorial handling are detailed in `content-parity-review.md`.
3. **Unfinished stories:** these remain public, clearly labeled, and noindex. They need editorial approval and confirmed text/photos before becoming completed portfolio entries. Archived placeholder narratives are not imported into the browser bundle.
4. **Fresh-source scope:** all 33 archived named views and all 28 CMS items were freshly reopened and read; every normalized text comparison matched. Four additional variants and legacy HOME were also reviewed (38 named views total). No new substantive text was found in the archived items. `fresh-wix-review.md` records exact coverage and method. A New/Newer name or matching text does not prove an edit timestamp, approval status, or independent factual correctness.
5. **Production hosting/search:** staging intentionally returns `X-Robots-Tag: noindex, nofollow` and disallows crawling. A deliberate production cutover must configure the primary domain and canonical URLs, remove global staging exclusions while retaining draft exclusions, preserve redirects, and verify SSL and rollback. No production DNS was changed by this review.

## Evidence

- `docs/content-parity-review.md`: public-source comparison, omissions, repairs and conflicts.
- `docs/fresh-wix-review.md`: current signed-in editor comparison and exact coverage limits.
- `docs/vendor-badge-source.json`, `docs/prototype-asset-sources.json`: original asset provenance and rejected associations.
- `docs/contact-compatibility-verification.md`: map rendering, formatted phone/dial pairs, responsive and legacy checks.
- `docs/VERIFICATION.md`: final code/browser check record.
- Local screenshot audit: `/Users/tyamashita/Documents/ChatGPT/Geolabs/october-content-review/`.
