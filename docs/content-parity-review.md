# Content parity review — October 1, 2026

This is a read-only audit of the migration before the current repair pass. Code locations and findings describe the initial state of this pass and are not a post-fix certification.

## Evidence and limits

Reviewed `src/App.tsx`, `src/data/site.ts`, every record in `src/data/cms-projects.json` and `src/data/drafts.json`, `docs/MIGRATION.md`, `docs/wix-source-snapshot.json` (33 named editor views and 28 CMS records captured September 28), `vercel.json`, the current published homepage, all seven legacy linked project stories, three leader profiles, Team, Awards, both `specificproject` records, and the three published XML sitemaps. The main task separately inspected the fresh signed-in Wix editor. A page name containing “New” is not proof that it is newer than the currently published policy text.

**The existing migration has broad topic coverage, but it is not a verbatim copy and did not retain every meaningful fact or function.** Thirty project pages and eight draft pages represent all 28 archived CMS records, sometimes through merging or summarization. Most descriptions are rewritten summaries. No blanket “nothing was made up” or “every word was preserved” statement is supported by this review. Much of the wording is faithful in meaning; certain omissions and one stronger-than-source claim are identified below.

## Highest-priority corrections

### 1. Restore USFCR artwork and the original SAM statement

Absent from Home and About in the inspected code. The published homepage places the original badge beneath About with this wording:

> Geolabs, Inc. is a verified vendor registered to do business with the U.S. Federal Government through the System for Award Management (SAM).

Source: https://www.geolabs.net/ , About section; image immediately before this statement. Preserve the badge as source artwork and restore the sentence, without adding certification, contract-eligibility, or current-registration claims beyond the source. This audit checks parity, not independent verification of registration status.

### 2. Restore Gerald and John's education and registrations

`src/data/site.ts` leaders entries initially had only names, roles, and portrait names for Gerald and John. Robin's education and registrations are present. Published legacy pages contain the following missing material, suitable for the existing disclosure UI:

**Gerald Y. Seki** — https://www.geolabs.net/geraldyseki

- M.S. in Soil Mechanics and Foundation Engineering, California State University at Sacramento
- B.S.in Civil Engineering, University of Hawaii at Manoa
- State of Hawaii, Registered Civil Engineer

**John Y.L. Chen** — https://www.geolabs.net/johnylchen

- M.S. in Geotechnical Engineering, University of Massachusetts at Lowell
- B.S. in Structural Engineering. Tongji University, Shanghai, China
- State of Hawaii, Registered Civil Engineer

Normalizing the missing space in “B.S.in” and sentence punctuation does not change the credentials. Do not invent emails for these leaders. Modify rendering so email is optional. Legacy fractional experience figures are present but undated; keeping them omitted is a documented stale-data precaution, not full preservation. Payton has no archived education or registration details, so retain the title/portrait only.

### 3. Preserve uncertainty in the Ala Moana engineering narrative

Initial new copy (`site.ts`, Ala Moana Center body) asserted that an ancient channel **had eroded** the coral ledge. Both archived Wix story and published `/ala-moana-center-expansion` say the absence was **probably** due to channel erosion. The summary improperly removes that uncertainty.

Source-exact replacement paragraph from `pages["Ala Moana Center Expansion (New)"]`:

> This project site was unique in that the upper coral ledge that is generally present at depths of about 15 to 20 feet below the ground surface in the Ala Moana-Kaka’ako area was absent across a portion of the project site probably due to erosion by an ancient alluvial stream channel. The presence of an ancient alluvial stream channel across a portion of the project site posed significant challenges to the design and construction of foundations for this project.

### 4. Current EEO/AAP policy was missing

The initial new `/careers` text follows the older `Apply (New)` snapshot, rather than the more detailed policy currently on the published homepage. Main task also confirmed that fresh signed-in Wix HOME matches the published policy. The current published HR accommodation contact is **(808) 913-5146**, not the general office number in the older Apply page. Restoring the policy is a content migration, not new legal advice or a newly authored legal policy.

Patch-ready text from current HOME:

**EEO Statement**

Geolabs, Inc. is an equal opportunity employer committed to providing equal employment opportunities to all applicants and employees in accordance with all applicable federal, state, and local laws. Employment decisions are based on individual merit, qualifications, business needs, and the ability to perform the essential functions of the position.

The Company prohibits unlawful discrimination and harassment on the basis of race, color, religion, sex, gender identity, sexual orientation, national origin, age, disability, genetic information, marital status, citizenship, arrest and court record (as permitted by Hawaii law), amnesty or status as a covered veteran, lactation, or any other characteristic protected by applicable law.

As a federal contractor, Geolabs, Inc. complies with all applicable Executive Orders and federal contractor requirements, including Executive Orders 14173 and 14398. The Company does not engage in unlawful discriminatory employment practices, including racially discriminatory DEI activities or preferences prohibited by applicable law.

**AAP Statement**

Geolabs, Inc. is also an ADA-compliant employer. The Company is committed to providing reasonable accommodations to qualified applicants and employees with disabilities to enable them to perform the essential functions of their positions, unless doing so would impose an undue hardship. Applicants requiring reasonable accommodation during the application process should contact Human Resources at (808) 913-5146 or employment@geolabs.net.

Keep the accommodation email available for accommodation requests. Continue routing applications/resumes to `https://careers.geolabs.net/apply`, per the owner's explicit replacement instruction. Format displayed phone as `(808)913-5146` per the owner's chosen format, while retaining `tel:+18089135146`.

### 5. Restore project-specific technical details lost to summaries

These are concrete source facts, not decorative copy. Source location is `docs/wix-source-snapshot.json.pages[page-name]`; the equivalent legacy pages also contain most of them.

| Project | Detail missing from initial new page | Source |
| --- | --- | --- |
| International Market Place | The foundation installation specifically used **micropiles**; names remain but project-team roles were dropped. | `International Marketplace (New)` |
| Honolulu rail | Rail height approximately **29–75 feet**; special spans envisaged as **balanced cantilever** guideway construction. Historical alignment to UH Mānoa/Waikīkī omitted; retain historical context if restored, never imply current operating alignment. | `Honolulu Rail (Newer)` |
| Kamehameha | **Pukalani, Maui**, not merely Maui; **2002 Grand Conceptor Award** at local ACEC competition; **Honorable Mention Award** at National Civil Engineering Competition in Washington, DC, 2002. | `Kamehameha (Newer)` |
| Moana Pacific | **416 living units in each tower**. | `The Moana Pacific (New)` / CMS 17 |
| Koʻolani | **46 stories**, approximately **750,000 sq ft** of interior space; sewer crosses **Ala Moana Boulevard and Ala Moana Drainage Canal** and discharges into **69-inch Ala Moana Trunk Sewer**. | `Ko'olani Tower (New)` / CMS 13 |
| Kahului terminal | CMS explicitly lists **1983 completion**; retain only if desired as source data, not independently verified date. | CMS 11 |

Patch-ready Kamehameha sentence:

> The project was awarded the 2002 Grand Conceptor Award at the local ACEC Competition and received an Honorable Mention Award at the National Civil Engineering Competition held in Washington DC in 2002.

No need to reintroduce long resort marketing descriptions, third-party construction-industry quotations, time-sensitive hotel amenities, or speculative structural descriptions merely to increase content volume. Archive them, clearly mark unfinished stories, and preserve substantive Geolabs scope.

### 6. Restore source-specific About sectors

`About Us (New)` explicitly names **Parking Structures**, **Wastewater Treatment Plants**, **Water Mains**, **Electrical Transmission Lines**, and **Advanced Telecommunication Networks—including Trenchless Installations**. The initial new “What we support” paragraph collapsed several to “utility networks”. Restore the specific sectors, because these are meaningful service/search terms. Likewise, the older homepage specifically mentioned dams, which no longer appears in the main public copy.

Patch-ready source wording, punctuation-only cleanup:

- Transportation: Highways, Airports, and Harbor Facilities
- Vertical Construction: High-rise Buildings, Parking Structures, Residential and Commercial Developments, and Industrial Complexes
- Infrastructure Development: Wastewater Treatment Plants, Water Mains, Electrical Transmission Lines, and Advanced Telecommunication Networks—including Trenchless Installations.

### 7. Preserve unfinished work as unfinished

`Home (New - Prototypes)` repeatedly contains **Straub Benioff Medical Center**, “Read More”, and **Photo Courtesy: Hawaii Pacific Health**. No current project or draft entry represents it. There is no substantive project narrative in this snapshot. Represent it as an **Under construction** page/card with the authentic matching source image if available; do not write a case study or infer Geolabs responsibilities.

The eight existing resort/dynamic draft pages contain known unfinished or explicit AI placeholder material. For production readiness, the owner's latest permission supports replacing displayed unverified narratives with **Under construction** while retaining raw source copy in the repository archive. Earlier instructions asked to keep clearly marked drafts; retaining titles/media with draft/under-construction labels satisfies that intent without presenting placeholder engineering claims as facts.

### 8. Restore navigation/function parity honestly

Contact(New) contained a message form and maps. Initial migration had phone/email/Google Maps **links only**, no embedded map and no contact submission backend. The original migration document openly records this choice. User now explicitly requests map restoration. Restoring the map fixes that requested feature; mailto is still not the original form workflow. Do not claim exact functional parity unless a real form endpoint is implemented and verified. Do not add a fake submission success message.

## Source conflicts requiring caution

| Topic | Conflict | Appropriate handling |
| --- | --- | --- |
| H-3 award year | Published `/awards`: **1993**. Archived `Awards (New)`: **1992**. Initial migration uses 1992. | Do not label 1992 invented; it is copied from source. Preserve award name and suppress disputed year, or mark date pending verification. |
| Kamehameha award | Project page says 2002; Awards lists Kunuiakea Athletic Complex in 2003 and legacy Awards locates it on Oʻahu while New project says Pukalani, Maui. | Do not silently conflate the named awards/complexes. Preserve each source's clear title; avoid deriving one from the other. |
| Oakland office | Published old homepage: 2044 Franklin Street. New Home/Contact: 344 20th Street, Suite 340. | New address is established project intent; keep it and ensure map points there. |
| Hanalei completion | CMS body says late September 2025, field says 2021. | Continue omitting definitive completion year. |
| Palau wharf | CMS 19 body describes designs nearly complete late 2025; footer says completion 2024. Two distinct records. | Continue merge of consistent scope with no conflicting date. |
| Ala Moana expansion | CMS footer says 2021; detailed story is a specific Nordstrom expansion. | Do not import questionable CMS completion field into detailed story. |
| Hilton draft | CMS selected title says Hilton but rendered heading says Ala Moana; dates conflict. | Under construction, not verified portfolio fact. |

## Wording provenance

Initial new site contains authored editorial copy, including every project `summary`, service `intro`/`sections` summaries, and several About/Careers bridging sentences. Examples: “Understand the ground. Design with confidence.” (unused service short field), “A flexible foundation strategy for highly variable ground.” (visible summary), and “Employee ownership brings personal accountability to the work and a shared interest in our clients’ success.” (visible People). These are not source-exact quotations. Most are neutral paraphrases supported in broad meaning, but the owner has repeatedly asked not to make up wording. Prefer direct excerpts of source copy in visible descriptions; navigation labels, accessibility labels, and under-construction notices are ordinary interface copy.

The audit found no basis for claiming all current copy is independently fact-checked. The CMS itself has speculative and explicitly generated passages. Source fidelity is distinct from truth verification.

## Benefits: source-exact labels and descriptions

The initial new six benefit cards cover all seven benefit types but collapse life insurance and FSA and shorten FSA eligibility. If exact preservation is desired, use these seven source labels/descriptions from Apply(New) and current HOME:

| Label | Description |
| --- | --- |
| Employee Stock Ownership Plan (ESOP) | Provides retirement benefits to eligible employees based on ownership interest in our Company. |
| 401K Plan | Provides employees the potential for future financial security for retirement. |
| Medical, Dental, Drug and Vision | Geolabs pays family coverage after twelve consecutive months of full-time employment. |
| Group Term Life Insurance | No descriptive body is provided in source; do not invent coverage limits. |
| Paid Time Off (PTO) | 14 days the first year up to 28 days at 20 or more years of service. |
| Flexible Spending Account (FSA) | Allows employees to save tax dollars on money they spend for eligible, non-reimbursed health care expenses, insurance premiums and/or dependent care out-of-pockets expenses. |
| Holidays | Ten days per year plus 1/2 day on Christmas Eve. |

## Legacy URL inventory and recommended destinations

The published sitemap index lists 25 static pages, 28 project URLs, and two SpecificProject URLs (55 entries). The initial `vercel.json` contained no redirects. React only knew the new routes, so the old paths generally reached the new not-found page. Add explicit permanent redirects before production migration. Source: https://www.geolabs.net/sitemap.xml and its three child sitemaps, fetched October 1, 2026. URL strings below are the actual published forms, including typos and encoded punctuation.

### Static paths

| Old path | Destination / handling |
| --- | --- |
| `/` | `/` |
| `/johnylchen` | `/people#john-chen` (add stable profile anchor), or `/people` |
| `/robinmlim` | `/people#robin-lim` (add stable profile anchor), or `/people` |
| `/geraldyseki` | `/people#gerald-seki` (add stable profile anchor), or `/people` |
| `/team` | `/people` |
| `/leadership-new` | `/people` |
| `/team-new` | `/people` |
| `/ala-moana-center-expansion` | `/projects/ala-moana-center` |
| `/ala-moana-new` | `/projects/ala-moana-center` |
| `/copy-of-ala-moana-center-expansion` | Inspect exact page before redirect; web reader could not resolve this path in the review. |
| `/kahului-new` | `/projects/kahului-airport` |
| `/pacifica-honolulu` | `/projects/kahului-airport` (legacy menu explicitly labels this Kahului terminal) |
| `/awards` | Already canonical |
| `/909-kapiolani` | `/projects/kamehameha-athletic-field` (legacy menu explicitly labels this Kamehameha) |
| `/materials-new` | `/services/materials-testing` |
| `/new-projects` | `/projects` |
| `/application` | `https://careers.geolabs.net/apply` |
| `/forensics-new` | `/services/forensic-expert-witness` |
| `/moana-pacific` | `/projects/moana-pacific` |
| `/navy-dock-new` | `/projects/navy-dry-dock` |
| `/honolulu-high-capacity-transit-corridor` | `/projects/honolulu-rail` |
| `/copy-of-honolulu-high-capacity-tran` | `/projects/international-marketplace` (legacy menu explicitly labels this International Marketplace) |
| `/blank-4` | `/projects/koolani-tower` |
| `/inquiry-services-page` | `/contact` — obsolete Wix booking workflow, not a new booking implementation |
| `/book-online` | `/contact` — obsolete Wix booking workflow, not an application portal |

### Dynamic project paths

| Old path | Destination |
| --- | --- |
| `/projects/aulani-resort` | `/drafts/aulani-cms` |
| `/projects/ka-makana-ali%CA%BBi` | `/projects/ka-makana-alii` |
| `/projects/hilton-grand-islander` | `/drafts/hilton-grand-islander` |
| `/projects/wainiha-landslide-mitigation` | `/projects/wainiha-landslide` |
| `/projects/consolidated-car-rental-(conrac)-facility` | `/projects/kahului-conrac` |
| `/projects/pali-highway-landslide-mitigation` | `/projects/pali-highway` |
| `/projects/life-sciences-building-at-universit` | `/projects/uh-life-sciences` |
| `/projects/hanalei-hills-landslide-mitigation` | `/projects/hanalei-hills` |
| `/projects/hnl-consolidated-rental-car-(conrac)-facility` | `/projects/hnl-conrac` |
| `/projects/mauka-concourse-at-daniel-k.-inouye-international-airport-honolulu%2C-oahu` | `/projects/mauka-concourse` |
| `/projects/sky-ala-moana-twin-towers` | `/projects/sky-ala-moana` |
| `/projects/the-central-ala-moana-` | `/projects/central-ala-moana` |
| `/projects/palau-wharf-improvements-` | `/projects/palau-wharf` |
| `/projects/makai-slope-repair-below-alelele-slope-piilani-hwy%2C-maui` | `/projects/makai-alele-slope` |
| `/projects/koa-ridge-` | `/projects/koa-ridge` |
| `/projects/tinian-north-field` | Already canonical |
| `/projects/yap-wharf-improvements` | `/projects/yap-wharf` |
| `/projects/rockfall-protection-at-alelele-slope` | `/projects/alele-rockfall` |
| `/projects/emergency-slope-scaling-for-kalepa-slope` | `/projects/kalepa-slope` |
| `/projects/azure-and-sky-ala-moana-twin-towers` | `/projects/azure-sky-ala-moana` |
| `/projects/victoria-place` | Already canonical |
| `/projects/palau-wharf-improvements` | `/projects/palau-wharf` |
| `/projects/ala-moana-elevated-pedestrian-walkway` | `/projects/ala-moana-walkway` |
| `/projects/%22the-park-on-keaaumoku%22-twin-towers` | `/projects/park-on-keeaumoku` |
| `/projects/kahalui-airport-terminal-expansion` | `/projects/kahului-airport` |
| `/projects/koolani-condo` | `/projects/koolani-tower` |
| `/projects/moana-pacific` | Already canonical |
| `/projects/ala-moana-expansion` | `/projects/ala-moana-center` |

### Dynamic SpecificProject paths

| Old path | Destination / handling |
| --- | --- |
| `/specificproject/ko'olina-beach-villas` | `/drafts/dynamic-beach-villas` |
| `/specificproject/mariott-hotel` | `/drafts/marriott` — published story explicitly says generated ChatGPT placeholder; keep under construction |

Fragments on the old homepage are separate from server redirects and should be mapped by a client-side compatibility handler if legacy shared anchor links are to work. Inspect actual old anchor IDs rather than guessing them.

## Production cutover conditions

- This pass can be deployed to `test.geolabs.net` under the existing authorization. User is considering production, not authorizing a DNS cutover in this message.
- Initial configuration intentionally includes global `X-Robots-Tag: noindex, nofollow` and crawl-disallowing `robots.txt`. Keep staging private to crawlers; remove staging-wide directives only as part of a deliberate production configuration, retaining noindex on unfinished drafts.
- Preserve factual conflict notes and mark unfinished pages clearly. A source snapshot is not evidence that every project fact is approved or current.
- Recheck fresh Wix page inventory against the September 28 snapshot before claiming latest-editor completeness. Main task owns that fresh editor check.

## Implemented source-data repairs during this review

The main task subsequently authorized edits limited to `src/data/site.ts` and `src/data/cms-projects.json`. The following were written to `site.ts` (no commit by this reviewer):

- Original office numbers now display in the requested `(area)prefix-line` form. Rendering must normalize non-digits for `tel:` URLs.
- Five service introductions and capability descriptions now use direct excerpts from their archived Wix pages, with encoding/punctuation cleanup. All retaining-wall categories and PVD terminology retained.
- Gerald and John education/registration restored; Robin degree names follow original wording. Optional-email rendering is required.
- International Market Place micropiles/team roles, rail height/balanced cantilever detail, Pukalani and 2002 awards, Moana Pacific unit count, Koʻolani dimensions/sewer routing, and the Ala Moana probability qualifier restored. Kahului's 1983 field copied from matching CMS 11.
- H-3 year suppressed as an em dash because source versions conflict. Award descriptions restored for UH faculty housing wick drains, Aloha Tower soft soil, and Sewer Tunnel methods.
- All seven benefit types now use source labels/descriptions. Group Term Life Insurance has no invented descriptive body; renderer should skip the empty paragraph.

This remains a source-fidelity repair, not independent verification of the source's engineering, employment, or award claims. Main task owns UI verification, final content handling, deployment, and the fresh-editor coverage statement.

### Summary copy follow-up

All 30 visible project summary taglines in `site.ts` and `cms-projects.json` were replaced with excerpts from their named archived Wix source. Several CMS summaries are intentionally short sentence fragments to avoid reintroducing disputed dates, vague technical speculation, or numerous hotel/engineering measurements. Capitalization, malformed character decoding, nonbreaking hyphens, terminal punctuation, and the obvious “a expansive” typo were normalized. Palau's summary uses consistent location/context from CMS 18 while its existing body still uses CMS 19. Raw source is unchanged. These are source excerpts, not an independent check of the CMS authors' assertions. The main project body text is still condensed in many places, so the completed site should be described as preserving source-backed content rather than a verbatim copy of every page.

## Final integrated content review

The integrated `App.tsx` restores the source-specific About sectors and company narrative, current published/fresh-HOME EEO/AAP policy with `(808)913-5146`, USFCR badge and SAM statement, seven benefit types, Gerald/John credentials, and Clients under-construction status. Office phone formatting is centralized, and Contact includes a four-office map component. Legacy alias mapping and the ambiguous old Ala Moana redirect are documented separately in `legacy-route-review.md`.

The four prototype project titles are present in `wix-source-snapshot.json.images["Home (New - Prototypes)"]` as original alt labels: Ililani Condominium; Kaiāulu o Kūku'ia Apartments; Temporary Schools for Maui; Straub Benioff Medical Center. Together with the eight archived draft records they form twelve under-construction pages. Original placeholder narratives are no longer rendered, and no project-scope text was invented for those four titles. The fresh asset reviewer identified mismatched/unspecific Ililani and Kaiāulu media, so those should use construction artwork rather than claim a correct project photograph. Main task owns the fresh screenshot/asset evidence for the retained Straub and Maui school images.

One further qualification issue was found and fixed in the authorized source-data files: Moana Pacific and Koʻolani summaries of shaft diameters/depths now explicitly state these were **recommended based on structural demands**, as in the Wix source. Prior wording (“accommodated loads” / “reached depths”) could imply as-built measurements or verified capacities. The source's observed installation and inspection statements remain.

No further material fabricated company credential, person, project responsibility, or numeric claim was found in this bounded integrated review. That does not certify every underlying CMS fact. Project bodies still include condensed paraphrases; ordinary contact prompts and navigation labels remain editorial interface text. Source conflicts on H-3, Hanalei, Palau, Ala Moana dates and stale experience figures remain documented and are not newly asserted as resolved facts. The original Wix contact-form submission workflow remains absent; map restoration and direct contact links do not imply a functioning form backend.

### Supported final coverage wording

“Rechecked the old public site, the archived Wix page/CMS inventory, and the freshly inspected editor views. Restored missing credentials, policy text, technical details, the USFCR badge, and office maps. All 28 archived CMS records are represented, with duplicate stories merged and unfinished material clearly marked across 12 under-construction pages. Source wording and supported facts were preserved or restored; some project bodies remain condensed summaries. Conflicting dates are documented, and the old contact-form backend has not been migrated. This is ready for staging review, not a claim that every source assertion was independently verified.”

If fresh Wix inspection did not reopen every page/record, describe it as fresh **targeted editor views** instead of suggesting a full present-day export. Do not state that all text is verbatim, every new AJ edit has been independently reviewed chronologically, or all content is independently fact-checked.


## Final integration status

The root task integrated the USFCR row, office map, phone formatter, restored About/People/benefits/current policy copy, missing prototype subjects, under-construction handling, and legacy compatibility. Raw unfinished narratives are no longer imported into the browser bundle. Source Home(New) Design and Construction Support paragraphs are retained in native disclosures on Services. Fresh review is now complete for all 33 archived named views and all 28 CMS records, with four additional variants and legacy HOME also inspected; all archived normalized text comparisons matched. See fresh-wix-review.md for exact evidence and PRODUCTION-READINESS.md for the current functional differences and launch considerations. No claim of verbatim reproduction or independent factual certification is made.
