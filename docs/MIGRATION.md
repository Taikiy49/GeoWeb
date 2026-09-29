# Wix migration — September 28, 2026

## Source and scope

Source: the signed-in Wix editor for Geolabs (site ID `0da50766-13c9-4764-89ed-437b9ba900b1`). Inspected 33 named page views, including the hidden New/Newer variants and Home prototypes, plus all 28 items exposed by the dynamic project selector. `wix-source-snapshot.json` records the rendered text and DOM image metadata. It is a content snapshot, not a Wix database export or version-history export. Wix did not expose individual record modification timestamps in the inspected view; no claim is made that a name alone proves chronological recency.

The saved New/Newer editor pages take precedence over the older public site and the original repository. Home (New) provided the main content direction; prototype/resort variants are also preserved. Wix bookings and member-account boilerplate are not part of this engineering marketing site's workflow. No changes were made to Wix.

## Coverage

| Wix content                                                                               | Replacement                                                                                                          |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Home (New), Home prototypes                                                               | Home, featured project links, company facts                                                                          |
| About Us (New)                                                                            | `/about`                                                                                                             |
| Leadership (New), Team (New), TEAM                                                        | `/people`, four leaders including CFO Payton Kiuchi                                                                  |
| Services (New) and five service pages                                                     | `/services` and five detailed capability pages                                                                       |
| Projects (New), New Projects, individual New/Newer projects                               | `/projects`, 30 searchable/filterable project pages                                                                  |
| Ala Moana (Newer) (Item): 28 CMS records                                                  | Distinct projects merged with existing stories; 20 additional project pages; Aulani and Hilton variants under drafts |
| Awards (New)                                                                              | `/awards`, 15 recognition entries                                                                                    |
| Contact (New) and updated Home office listings                                            | `/contact`, four offices with phone/email/map links                                                                  |
| Apply (New)                                                                               | `/careers`, benefits and careers.geolabs.net application links                                                       |
| Resorts, Ko'olina Lagoons, Mariott Hotel, Ko'olina Beach Villas, Aulani, dynamic template | `/drafts`, eight clearly marked source stories including two CMS variants                                            |
| SpecificProject (Title)                                                                   | Beach Villas variant retained as a draft; substantive projects use individual routes                                 |

## Editorial decisions

- Owner explicitly requested unfinished resort content be included as clearly marked draft pages. Draft pages show persistent warnings, carry noindex metadata, and are linked from Projects and the footer. They are public review pages, not private previews.
- Some resort copy is explicitly AI placeholder text and contains mismatched projects/places. It is preserved for review, not represented as verified company work. The Hilton CMS item displays an Ala Moana heading and conflicting opening/completion dates; it is also a draft. The Aulani CMS variant is retained alongside the earlier draft.
- CMS contains two Palau Wharf records. One project page combines the consistent project context; both source versions remain archived. Azure/Sky and Sky have distinct CMS records and remain distinct portfolio entries.
- Several CMS footers incorrectly repeat Waikiki for projects whose headings/body locate them elsewhere. Main-page location follows the consistent project description. Conflicting completion years (e.g. Ala Moana Expansion, Hanalei, Palau) and speculative engineering details were not promoted into fact panels.
- Existing detailed engineering stories retain documented Geolabs scope, foundation methods, quantities, and original credits. General newer CMS descriptions are condensed as project overviews; they do not invent Geolabs responsibilities. Full inspected text remains in the snapshot.
- Robin's source lists fractional years of experience that can become stale; education and registrations are retained instead.
- Oakland uses the latest displayed office address, 344 20th Street, Suite 340. The older live address and inconsistent embedded-map destination were not reused.
- All application/resume actions use `https://careers.geolabs.net/apply`; opportunities link to the careers portal. The separate working application portal was inspected; no applications were submitted. HR accommodation contact is separate from application submission.
- Contact is implemented using phone, email, and Google Maps links. There is no simulated contact-form submission or unconfigured backend.
- Photography was taken from the inspected Wix assets and optimized to local WebP. Asset manifests retain source URLs and transformations. The displayed wordmark/strata symbol is a new treatment; the original Wix anniversary logo is retained as an asset.

## Operation and review

The site runs without Wix accounts, API keys, or cloud content dependencies. Repository push is not a Wix publish or domain cutover. Verify hosting history fallback before serving deep links in production. The source snapshot intentionally stays in repository documentation and is not imported into the browser bundle.

Draft review, verification of disputed source details, and any production domain cutover remain editorial/deployment follow-ups. This migration does not imply those drafts have been approved.
