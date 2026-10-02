# Fresh signed-in Wix review — October 1, 2026

This review compares the current signed-in Wix editor with `docs/wix-source-snapshot.json` captured September 28, 2026. It checks source freshness, not the independent truth of every source claim and not verbatim migration parity by itself.

## Method and result

Opened the editor URL supplied by the user in a separate Chrome research tab. Used the visible page selector, rendered `iframe#preview` DOM, and dynamic-item combobox. Did not save, publish, change site content, or inspect hidden application state. Captured rendered text after each page/item finished updating; transient mixed renders were discarded and re-read. Image inspection used rendered image `alt`, `src`, and DOM image metadata, followed by local visual inspection of the downloaded original Wix assets.

**All 33 archived named pages and all 28 CMS items were individually opened and read. All 61 normalized rendered-text comparisons matched the September 28 archive.** The comparison decodes archived HTML entities, removes zero-width spaces, lowercases, replaces punctuation/non-ASCII separators with spaces, and compares the complete ordered ASCII word-and-number sequence using its 32-bit rolling fingerprint. This intentionally tolerates the archive's damaged punctuation/encoding; it is not a claim of byte-for-byte equality. There were no substantive fresh text changes among these archived pages/items.

Also inspected four visible page variants absent from the 33-page archive and the legacy HOME page. Thus 38 distinct named editor pages were opened in this pass. Dynamic item 0 overlaps the named Ala Moana template page; do not add 33 and 28 and call that 61 distinct URLs.

## Archived named-page coverage

| Editor page | Fresh fingerprint | Result |
| --- | ---: | --- |
| Home (New) | 349051634 | Match |
| About Us (New) | 1991397404 | Match |
| Leadership (New) | 3694372388 | Match |
| Team (New) | 2635033475 | Match |
| Services (New) | 1037109341 | Match |
| Geotechnical Engineering (New) | 2996534247 | Match |
| Services After Construction | 2990438940 | Match |
| Drilling and Subsurface Investigation ( | 1337970083 | Match |
| Materials Testing (New) | 1771667693 | Match |
| Forensic and Expert Witness (New) | 1532737428 | Match |
| Projects (New) | 861598112 | Match |
| International Marketplace (New) | 2839205529 | Match |
| Honolulu Rail (Newer) | 3939900341 | Match |
| Kamehameha (Newer) | 363368249 | Match |
| Ala Moana (Newer) (Item) | 3975403542 | Match |
| Ala Moana Center Expansion (New) | 479741114 | Match |
| The Moana Pacific (New) | 103220511 | Match |
| Ko'olani Tower (New) | 1851579278 | Match |
| Kahului Airport Terminal Complex (New) | 1874848715 | Match |
| Navy's Dry Dock 3 Replacement (New) | 3579393012 | Match |
| Kapolei Harborside Redevelopment (New) | 3241353561 | Match |
| New Projects | 2067958177 | Match |
| SpecificProject (Title) | 854693127 | Match |
| Awards (New) | 4077506539 | Match |
| Contact (New) | 1693451390 | Match |
| Apply (New) | 3323304151 | Match |
| Home (New - Prototypes) | 1941657647 | Match |
| Resorts | 3032358699 | Match |
| Ko'olina Lagoons | 4098941373 | Match |
| Mariott Hotel | 3413743177 | Match |
| Ko'olina Beach Villas | 3019492062 | Match |
| Aulani | 1324339824 | Match |
| TEAM | 3541093060 | Match |

## CMS coverage

The dynamic `Ala Moana (Newer) (Item)` selector currently reports **28 items**, and all 28 were opened. Both entries titled Palau Wharf Improvements are distinct records and were checked separately. No new item titles appeared relative to the archive.

| Index | CMS title | Fresh fingerprint | Result |
| ---: | --- | ---: | --- |
| 0 | "The Park on Keaaumoku" Twin Towers | 3975403542 | Match |
| 1 | Ala Moana Elevated Pedestrian Walkway | 4013486989 | Match |
| 2 | Ala Moana Expansion | 3448163750 | Match |
| 3 | Aulani Resort | 3764887850 | Match |
| 4 | Azure and Sky Ala Moana Twin Towers | 2706145670 | Match |
| 5 | Consolidated Car Rental (ConRAC) Facility | 2703449244 | Match |
| 6 | Emergency Slope Scaling for Kalepa Slope | 2648028789 | Match |
| 7 | HNL Consolidated Rental Car (ConRAC) Facility | 2019803622 | Match |
| 8 | Hanalei Hills Landslide Mitigation | 2146762798 | Match |
| 9 | Hilton Grand Islander | 3093631823 | Match |
| 10 | Ka Makana Aliʻi | 2793242261 | Match |
| 11 | Kahalui Airport Terminal Expansion | 2211054278 | Match |
| 12 | Koa Ridge | 3829458936 | Match |
| 13 | Koolani Condominium | 188080796 | Match |
| 14 | Life Sciences Building at University of Hawaii Manoa | 2459457482 | Match |
| 15 | Makai Slope Repair below Alelele Slope | 1676424244 | Match |
| 16 | Mauka Concourse at Daniel K. Inouye International Airport | 2751357417 | Match |
| 17 | Moana Pacific | 1352732464 | Match |
| 18 | Palau Wharf Improvements | 2035872190 | Match |
| 19 | Palau Wharf Improvements | 509030744 | Match |
| 20 | Pali Highway Landslide Mitigation | 3523714269 | Match |
| 21 | Rockfall Protection at Alelele Slope | 4282294928 | Match |
| 22 | Sky Ala Moana Twin Towers | 743282215 | Match |
| 23 | The Central Ala Moana | 2995919295 | Match |
| 24 | Tinian North Field | 762243291 | Match |
| 25 | Victoria Place | 3082218820 | Match |
| 26 | Wainiha Landslide Mitigation | 3008022294 | Match |
| 27 | Yap Wharf Improvements | 525026860 | Match |

The separate `SpecificProject (Title)` collection reports **2 items**: Ko'olina Beach Villas and Mariott Hotel. Both were opened. The selected Beach Villas item matches the archived named template page; the second Mariott item repeats the resort narrative and explicitly ends “-Currently Using as Plcaeholder (generated by Chatgpt)”. It adds a Dwell image credit but no completed engineering narrative. Keep both as unfinished source material. Total dynamic item coverage in this pass is therefore 28 + 2; the 28-item comparison table above refers only to the archived primary CMS collection.

## Additional variants outside the archived 33

| Page inspected | Finding |
| --- | --- |
| Copy of Services (New) | Four overview groups: Geotechnical Engineering; Drilling and Subsurface Investigation; Construction Support; Construction Materials Engineering and Testing. These are already represented capabilities. Some explanatory wording differs from Services (New), but no new service capability or project narrative appeared. This duplicate remains source evidence; do not invent a separate service to match a duplicate page. |
| Copy of Kamehameha (Newer) | Same normalized narrative as Kamehameha (Newer), fingerprint 363368249. |
| Honolulu High Capacity Transit (New) | Earlier layout with Civil Beat credit, corridor location, Government client/market, initial plans 2008, and the same detailed rail engineering narrative as the newer rail page. The actual editor label contains two spaces before (New). |
| Kamehameha School Athletic Field (New) | Earlier layout with KCS West credit, Kamehameha School client/location, completed 2002, Education market, and the same engineering/award narrative as the newer Kamehameha page. |
| HOME | Legacy homepage inspected freshly. Contains USFCR/SAM statement, office maps, the older Oakland address and current employment-policy wording, plus a CLIENTS section explicitly under construction. Differences from unpublished New pages are recorded below. |

The visible page selector also contains old pages/anchors, duplicate layout experiments, bookings/cart/calendar/member/account app pages, and the two dynamic templates. These Wix infrastructure pages are not new completed engineering stories. No evidence supports claiming a usable booking or customer-account workflow was migrated. The older static project pages outside this list were not freshly re-read by this sub-review; the primary task separately audits the public legacy website.

## Source inconsistencies and migration decisions

1. **Oakland address conflict.** Current legacy HOME displays 2044 Franklin Street, Oakland, CA 94612 and maps to that address. Home (New), Contact (New), and Home (New - Prototypes) still display 344 20th Street, Suite 340. Home (New)'s Oakland map directs to 212 9th Street, which matches neither displayed address. Do not replicate that incorrect map association. The primary task must resolve the displayed directory/address and map together using the current operational source.
2. **Employment-policy conflict.** Current HOME contains newer EEO/AAP text and accommodation contact (808) 913-5146. Apply (New) still contains the earlier EEO/AAP text and 808-841-5064. Application delivery itself is intentionally superseded by careers.geolabs.net per the user's direction; current policy text must not be replaced by invented wording.
3. **Contact form parity.** Contact (New) has fields for first name, last name, email, phone, message, Submit, and the confirmation text “Thanks! We have received your message.” Reading that editor form does not verify its backend, notification recipient, or delivery behavior. A mailto-based replacement is a functional difference that must be disclosed before production if direct submission remains absent.
4. **Incomplete source content remains incomplete.** TEAM is only an ENGINEERS & GEOLOGISTS heading. New Projects is a short generic introduction with a Pali Highway image. Resort pages still contain unfinished/reused source narratives, and their normalized content is unchanged. Retain under-construction/draft treatment and do not create missing facts.
5. **CMS metadata contradictions remain in the source.** Park on Keaaumoku has heading Honolulu, Oahu but a location field Waikiki, O'ahu. The newer Kamehameha and rail pages include stray International Market Place image-credit text. Source provenance is not a substitute for fact/asset matching.
6. **Palau/Malakal relationship.** Both Palau Wharf CMS items explicitly name Malakal Island and describe Malakal Harbor; the Services (New) caption says Palau Wharf Improvements, Malakal Island (2024). The Home prototype's Malakal Port image filename describes a vessel at Palau's commercial seaport. This supports linking the prototype label to the existing Palau subject rather than inventing a new engineering scope, but does not prove every pictured work package is the same.

## Missing prototype subjects and verified media

The Home (New - Prototypes) page contains image labels for Straub Benioff Medical Center, Ililani Condominium, Kaiāulu o Kūku'ia Apartments, Temporary Schools for Maui, and Malakal Port. Except the repeated Straub title/credit, these are image labels, not completed project descriptions. Preserve missing subjects as under-construction entries without invented narratives, dates, project scope or metrics.

- **Straub:** source photograph clearly shows Hawaii Pacific Health / Straub Medical Center signage. Reused as `public/images/straub-medical-center.webp`; retain the visible source credit “Photo Courtesy: Hawaii Pacific Health”.
- **Temporary Schools for Maui:** source photograph shows a temporary modular classroom campus and is labeled for Maui in Wix. Reused as `public/images/maui-temporary-schools.webp`. No more-specific location/date/scope was verified.
- **Kaiāulu o Kūku'ia:** the image carrying this alt text actually shows **KAHULUI LANI** signage. A second authored image labeled Kaiaulu.png visibly says **Kaiāulu o Kupuohi**, another different project. These assets were withheld from the public site. Use a text-only under-construction entry until a correctly matched source image is confirmed.
- **Ililani:** the named source image is a broad Kakaako skyline with several buildings. An alternate Ilani Condo.png repeats the skyline; its precise subject cannot be established from the image. Withheld rather than present a possibly mismatched photograph. Use a text-only under-construction entry pending confirmation.

Full observed source URLs, credits and rejected alternate-image evidence are in `docs/prototype-asset-sources.json`. Withheld review images are outside the public tree in `/Users/tyamashita/Documents/ChatGPT/Geolabs/prototype-asset-review/`. The two retained originals were proportionally converted to WebP, maximum 1600px, without generative edits; dimensions are registered in `src/data/image-sizes.json`.

## Limits

Fresh source matching confirms that the migration archive still represents AJ's visible text for the 33 named pages and 28-item collection reviewed. It does not guarantee source factual accuracy, prove rights to every third-party credited photograph, validate a contact form backend, or itself prove that every original sentence is displayed verbatim in the replacement. Production readiness must combine this source review with the primary task's rendered-route, content-mapping and functional checks. No production-domain cutover was performed by this review.
