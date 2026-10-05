# Wix content restoration — October 4, 2026

## What this review fixes

The prior review proved that the source archive was still current. It did **not** prove that every piece of Wix content appeared in the new site. This review found and restored real omissions: the embedded Team table, three additional Why Us slides, leadership experience/contact details, service sentences and photo captions, and shortened project narratives.

The signed-in editor was read again on October 3–4. Coverage includes **35 standalone pages, both dynamic page templates and all 30 dynamic records** (28 primary projects plus two resort drafts). Leadership's three detail slides and all four Team slides were opened. The Team Master iframe was read separately from its parent page, then compared with the owner's published CSV.

`wix-audit-2026-10-04.json` records the fresh page/record fingerprints. These verify source freshness; they are not independent fact-checking or a substitute for the content and interaction checks below. New/Newer labels do not prove an edit timestamp or editorial approval.

## Page-by-page destination checklist

| Wix page | Destination and treatment |
| --- | --- |
| Home (New) | `/`: full About paragraph, four source statistics, Design and Construction Support paragraphs, original hero video and featured film presentation. Locations remain accessible in footer/Contact. |
| Home (New - Prototypes) | `/`, `/services/forensic-expert-witness`, `/drafts`: preserve unique Forensics paragraph and prototype project subjects. Repeated carousel experiments are consolidated; older 40-year wording is superseded by Home(New)'s 50-year copy. |
| About Us (New) | `/about`: all nine content topics, three source highlights, capabilities, client types, sectors, offices, culture, commitment and source-associated photos. Repeated desktop/mobile blocks are consolidated. |
| Leadership (New) | `/people#leadership`: four people; all three authored experience/education/registration/email detail slides. Payton has no authored detail slide, so no biography was invented. Experience figures are copied as authored, not recalculated. |
| Team (New) | `/people#team`: all 32 rows, Name/Position/Degree/Licensed, search and sorting. Four Why Us slides presented as readable text beneath the directory. |
| TEAM | `/people#team`: legacy Engineers & Geologists page only contains its heading; no additional roster. |
| Services (New) | `/services`: complete introduction, From start to end / We are with you heading, both full descriptions/goals and the Pali/Hoopili/Victoria Place/Palau images and captions. |
| Copy of Services (New) | `/services` and corresponding details: retain its distinct subsurface-investigation, construction-support and CoMET descriptions. Duplicate Geotechnical Engineering copy is consolidated. |
| Geotechnical Engineering (New) | `/services/geotechnical-engineering`: every capability paragraph and technique, conventional/specialty wall groups, source project photographs/captions. |
| Services After Construction | `/services/construction-support`: displayed Wix heading is Services During Construction; all six capabilities retained. Repeated source images are consolidated. |
| Drilling and Subsurface Investigation ( | `/services/drilling-subsurface-investigation`: full introduction, Core/Rotary/Offshore paragraphs, including the previously omitted core-drilling sentence. |
| Materials Testing (New) | `/services/materials-testing`: full introduction and all four capability paragraphs. |
| Forensic and Expert Witness (New) | `/services/forensic-expert-witness`: full introduction, Litigation, Insurance Claims and Arbitration text. |
| Projects (New) | `/projects`: original introduction, all nine project descriptions and linked case studies. Existing search/filter/gallery/list controls retained. |
| New Projects | `/projects`: introduction restored; gallery links checked against canonical stories and drafts. Unlabeled/mismatched tiles are flagged below. |
| International Marketplace (New) | `/projects/international-marketplace`: complete four-paragraph narrative and project team credits. |
| Honolulu High Capacity Transit (New) | `/projects/honolulu-rail`: full shared narrative, Government client, initial plans 2008. Historical design-phase context visible above summary. |
| Honolulu Rail (Newer) | Same route; same complete five-paragraph engineering narrative. Stray International Market Place credit not assigned to rail imagery. |
| Kamehameha School Athletic Field (New) | `/projects/kamehameha-athletic-field`: full three-paragraph story, client, 2002 completion and awards. |
| Kamehameha (Newer) | Same route; Pukalani/Maui location and correctly associated photo credit. |
| Copy of Kamehameha (Newer) | Same route; identical source narrative, no additional page invented. |
| Ala Moana Center Expansion (New) | `/projects/ala-moana-center`: all three original technical paragraphs; questionable completion metadata is Under review. |
| The Moana Pacific (New) | `/projects/moana-pacific`: complete three-paragraph story, dimensions, recommendations and inspection scope. |
| Ko'olani Tower (New) | `/projects/koolani-tower`: complete three-paragraph story, foundations and sewer work. CMS spelling variants are consolidated. |
| Kahului Airport Terminal Complex (New) | `/projects/kahului-airport`: complete three-paragraph airport/pavement narrative. |
| Navy's Dry Dock 3 Replacement (New) | `/projects/navy-dry-dock`: all four source narrative blocks and client. Historical quotations retain their original dates. |
| Kapolei Harborside Redevelopment (New) | `/projects/kapolei-harborside`: all three source narrative blocks and client. |
| Ala Moana (Newer) (Item) | All **28** records read individually. Completed records map to 30 combined canonical project routes. Both Palau narratives retained on one route; four overlapping static/CMS stories consolidated; Aulani/Hilton remain drafts. See narrative manifest and CMS indices in the audit JSON. |
| SpecificProject (Title) | Both records read: Beach Villas and Marriott. Explicit ChatGPT placeholder text and mismatched project imagery stay out of completed case studies. Routes remain under construction. |
| Awards (New) | `/awards`: award entries retained, including distinct 2013/2014 awards and organizations. H-3's conflicting year remains withheld. |
| Contact (New) | `/contact`: source intro, four addresses, phones, emails, office maps and original field set. Email handoff differs from Wix delivery; see below. |
| Apply (New) | `/careers`: all seven benefits retained. Current published EEO/AAP policy takes precedence over the older draft policy. Applications and live openings use careers.geolabs.net as the owner requested. |
| Resorts | `/drafts/resort-concepts`: incomplete resort/region timeline experiments remain under construction. |
| Ko'olina Lagoons | `/drafts/koolina-lagoons`: under construction; no speculative source narrative promoted. |
| Mariott Hotel | `/drafts/marriott`: under construction; explicit generated placeholder. |
| Ko'olina Beach Villas | `/drafts/beach-villas`: under construction. |
| Aulani | `/drafts/aulani`: under construction. |

## Restored content and media

- **99 complete narrative paragraphs across 30 project pages**, replacing condensed or rewritten bodies. `wix-narrative-coverage.json` is the source-to-route paragraph manifest. Cleanup is limited to source encoding damage, typography and whitespace. UI labels are interface copy, not new company claims.
- **32 team records** from the supplied public CSV, preserving names, roles, degrees and blank licenses. Desktop has an accessible sortable table; phones have readable records and a native sort control. `python3 scripts/sync-team.py` refreshes the versioned snapshot, with column/empty/duplicate validation. Spreadsheet edits do **not** silently update the live website; review and redeploy the refreshed data.
- Three leadership experience/credential/contact records and all four Why Us statements. Robin/Gerald/John years are the figures authored in Wix, not a current-year estimate.
- Full Services/Copy of Services descriptions and previously omitted Drilling/Materials sentences. Conventional/specialty retaining-wall grouping restored.
- Nine additional original Wix images with provenance in `october-wix-restored-assets.json`. No generated or replacement stock imagery. Website encoding/size optimization only.
- Source-exact Home Design/Construction Support disclosures are shared with Services. Home's omitted public/private-sector paragraph and source 16-award statistic restored.

## Explicit differences and unresolved source material

1. **Contact delivery is not migrated.** The original First name, Last name, Email, Phone and Message fields now prepare an email to `hawaii@geolabs.net`. The visitor must open and send it in their email app. The page explicitly says it has not been sent. No fake Wix success message, email API, inbox delivery or contact-submission parity is claimed. A sending endpoint/inbox integration is still needed for direct submission.
2. **Conflicting dates remain under review.** Hanalei has 2021 metadata versus September 2025 narrative; Pali has 2019 metadata versus early 2020 narrative; Palau has 2024 metadata versus designs described as nearly complete in late 2025; Tinian has 2025 metadata attached to a World War II narrative; the Ala Moana 2021 footer is not reliably matched to the Nordstrom-expansion story. These completion fields display Under review. H-3's 1992/1993 conflict remains withheld. Source-authored narrative values are preserved, not independently certified.
3. **Repeated/mismatched metadata is not promoted.** Several Honolulu projects inherit Waikiki footer labels; heading/known project locations remain canonical. Stray International Market Place photo credits on school/rail templates are not copied onto unrelated images. The Oakland map uses the New page's displayed 344 20th Street address rather than its mismatched embedded location.
4. **Unfinished gallery material is not a completed case study.** New Projects includes unlabeled tiles, repeated aerial imagery and incomplete/mismatched links (including `UHWOCampusAerialColor.jpg`, `guam-140486.jpg`, `kapolei-homes-golf-front-aerial-photo.jpg` and an unnamed tile). Their imagery alone does not establish a project title, role or engineering scope. Completed CMS targets are represented; unsupported associations remain recorded rather than invented. Prototype Straub/Maui school images remain available on their marked draft pages; uncertain Ililani/Kaiāulu image associations remain withheld.
5. **Draft concepts remain under construction.** Twelve existing draft routes retain that status and noindex. Explicitly generated/placeholder resort copy remains archived, not passed off as approved work. Decorative Wix textures, duplicate layouts, editor-only controls, Bookings/cart/member scaffolding and superseded resume-email workflows are not company-content requirements.
6. **This is source fidelity, not independent certification.** No claim is made that every figure AJ entered is correct, current, approved by Robin, or cleared for third-party media licensing. Full source preservation makes the content reviewable; it does not remove these source uncertainties.

## Verification

- TypeScript, ESLint and production build pass.
- Rendered 43 routes, including all 30 project stories; all 99 narrative paragraphs present after normalized comparison.
- Desktop 1440px and mobile 390px checks across 14 routes, plus 320px checks on People, Services, Contact and a long project story: no page overflow, no broken first-party images, no uncaught application errors, and zero automated Axe WCAG A/AA violations within main content. This is not a claim of exhaustive accessibility conformance or Google iframe accessibility.
- Search, license/role filtering, ascending/descending sorting, keyboard sorting, no-results recovery and mobile sorting tested. Empty license cells stay empty rather than inventing credentials.
- Contact required-field validation, draft encoding, unsent status and invalidation after edits tested. No email was sent.
- One-second directory entrance, no replay on rescroll, reduced-motion suppression and clear-search focus checked.
- Desktop/mobile full-page and section snapshots: `/Users/tyamashita/Documents/ChatGPT/Geolabs/wix-content-restoration-review/`. Google map tile loading is provider-dependent; this pass does not claim new delivery/map-backend work.

No production-domain DNS change or primary-domain cutover is included.
