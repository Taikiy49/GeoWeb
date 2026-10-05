# Production readiness review — updated October 4, 2026

**October 5 owner update:** Specific service promises and unconfirmed offerings are now qualified or withheld pending Robin review; see [wording holds](content-review-holds-2026-10-05.md). This exception supersedes prior full-publication requirements for those passages. Employment/application/USFCR content and project narratives remain unchanged. Source fidelity and this editorial reduction do not certify legal compliance or eliminate all risk.

The latest content-restoration checklist is [wix-complete-parity-review-2026-10-04.md](wix-complete-parity-review-2026-10-04.md). It supersedes earlier claims about condensed copy and absent team data.

This review prepares the replacement website on **test.geolabs.net**. It does not approve or perform a geolabs.net/www.geolabs.net cutover.

## Restored and checked

- The original USFCR Verified Vendor artwork and the published SAM statement appear under About on both the homepage and About page. The graphic is the company's source asset, not a newly created seal. This review does not independently certify its registration status.
- Contact has an individual Google Maps embed beside each of the four directory offices, with accessible iframe titles and permanent Google directions links. Each office/map pair stacks on phones; the earlier bottom map selector has been removed. Oakland uses the newer displayed address, 344 20th Street, Suite 340; the mismatched Wix map destination was not copied.
- Visible phone numbers consistently use `(808) 841-5064`, and dial links retain `tel:+18088415064` form. The current published policy's separate HR accommodation number is `(808) 913-5146`.
- Meaningful omitted content was restored: About sectors and construction capabilities, source Design/Construction Support approach paragraphs, Gerald/John credentials, all seven benefit types, current published EEO/AAP text, and missing technical project details. Recommended dimensions and engineering uncertainty are preserved as qualifications.
- All 30 completed project summaries and service descriptions use source excerpts. Case-study bodies now retain 102 complete source narrative paragraphs across 30 pages; navigation, accessibility labels, notices, and the new careers workflow are interface copy. The site is not a word-for-word reproduction of Wix.
- There are 24 unfinished source story routes, including 14 visibly unfinished entries in the main gallery. They display **Under construction**, without unverified project narratives. Four prototype titles are now represented: Straub, Ililani, Kaiāulu o Kūkuʻia, and Temporary Schools for Maui. Only Straub and the Maui school scene have photos with sufficient subject evidence. Rejected or uncertain photo associations are documented in `prototype-asset-sources.json`.
- Source Clients content is still **Under construction**. No client names or logos were invented.
- Fifty verified legacy aliases, with 60 Vercel edge rules for encoding variants, and 20 observed old homepage fragments have compatibility destinations. Canonical pages remain direct routes. See `legacy-route-review.md` for exact mappings and verification.
- The footer is approximately 26% shorter on desktop and 25% shorter on a narrow phone while retaining its contents and usable mobile controls. Brand colors/artwork, hero video, and filmstrip are retained. New linework is abstract decoration, not project evidence.

## Remaining differences and decisions

1. **Contact submissions:** the Wix Contact(New) message form has no migrated sending backend. The original field set now prepares an explicit email draft for the visitor to send, alongside email/telephone links. A sending endpoint/inbox integration is still required for direct form-submission parity; there is no fake success state.
2. **Source inconsistencies:** source variants disagree about the H-3 award year and some project completion dates. Disputed dates are omitted rather than resolved by invention. Other inconsistent source labels, duplicate records, and editorial handling are detailed in `content-parity-review.md`.
3. **Unfinished stories:** these remain public, clearly labeled, and noindex. They need editorial approval and confirmed text/photos before becoming completed portfolio entries. Archived placeholder narratives are not imported into the browser bundle.
4. **Fresh-source scope:** The October 3–4 re-audit also inspected all embedded Team data, leadership/Why Us slides, 49 standalone pages and both dynamic collections (30 records). See the latest checklist above. Earlier source-freshness review: all 33 archived named views and all 28 CMS items were freshly reopened and read; every normalized text comparison matched. Four additional variants and legacy HOME were also reviewed (38 named views total). No new substantive text was found in the archived items. `fresh-wix-review.md` records exact coverage and method. A New/Newer name or matching text does not prove an edit timestamp, approval status, or independent factual correctness.
5. **Production hosting/search:** staging intentionally returns `X-Robots-Tag: noindex, nofollow` and disallows crawling. A deliberate production cutover must configure the primary domain and canonical URLs, remove global staging exclusions while retaining draft exclusions, preserve redirects, and verify SSL and rollback. No production DNS was changed by this review.

- The People page now includes the complete 32-person source directory, search/sorting, all four Why Us statements and leadership experience/email details. Nine additional Wix service/capability images and full overview text are restored.

## Evidence

- `docs/content-parity-review.md`: public-source comparison, omissions, repairs and conflicts.
- `docs/fresh-wix-review.md`: current signed-in editor comparison and exact coverage limits.
- `docs/vendor-badge-source.json`, `docs/prototype-asset-sources.json`: original asset provenance and rejected associations.
- `docs/contact-compatibility-verification.md`: map rendering, formatted phone/dial pairs, responsive and legacy checks.
- `docs/VERIFICATION.md`: final code/browser check record.
- Local screenshot audit: `/Users/tyamashita/Documents/ChatGPT/Geolabs/october-content-review/`.
