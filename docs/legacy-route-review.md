# Legacy route compatibility — October 1, 2026

## Scope

This is staging migration compatibility, not a production domain cutover. Existing global `X-Robots-Tag: noindex, nofollow`, draft headers, build settings and SPA rewrites remain unchanged. No DNS changes, production hostname redirects, or new runtime dependencies were introduced.

The published Wix sitemap inventory in [content-parity-review.md](./content-parity-review.md) contains 55 entries. Fifty require aliases; five already resolve to canonical paths: `/`, `/awards`, `/projects/tinian-north-field`, `/projects/victoria-place`, and `/projects/moana-pacific`.

`src/data/legacyRoutes.ts` owns the literal, decoded mapping. `vercel.json` contains matching explicit permanent redirects. There are 60 edge rules because ten rules additionally cover encoded punctuation or lowercase percent-escape representations of the same verified URL. Unknown URLs are not redirected to arbitrary pages, and canonical paths have no self-redirects.

## Resolved ambiguous source

On October 1, a direct HTTP request to `https://www.geolabs.net/copy-of-ala-moana-center-expansion` returned **301** with `Location: https://www.geolabs.net/ala-moana-new`. Following it returned **200** and title **Ala Moana Center Expansion (New) | geolabs 2023**. The former unresolved alias therefore maps to `/projects/ala-moana-center`.

Source: [published old alias](https://www.geolabs.net/copy-of-ala-moana-center-expansion), [resolved Wix page](https://www.geolabs.net/ala-moana-new).

## Escaping and encoding

[Vercel's configuration reference](https://vercel.com/docs/project-configuration/vercel-json#redirects) defines source values as path patterns and supports permanent 308 redirects. Its [routing implementation](https://github.com/vercel/vercel/blob/main/packages/routing-utils/src/superstatic.ts) compiles those patterns with `path-to-regexp`. The [official Next.js redirect syntax reference](https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects#regex-path-matching) documents literal escaping for parentheses and other reserved pattern characters.

- Both CONRAC legacy slugs contain literal parentheses. JSON rules use `\\(` and `\\)`; separate exact `%28`/`%29` rules cover encoded requests. The compiler output matches parentheses literally rather than capturing their contents.
- The apostrophe in `/specificproject/ko'olina-beach-villas` is literal in a JSON double-quoted value. An exact `%27` version is also included.
- Commas, quoted project titles and the Hawaiian ʻokina have literal and encoded variants. Hexadecimal alphabetic escapes additionally have lowercase variants. No wildcard was added to compensate for encoding uncertainty.
- The client helper decodes once, normalizes Unicode to NFC, and accepts a trailing slash. Malformed percent escapes do not crash routing. Unknown keys cannot resolve inherited object properties.
- The helper returns a destination only; the caller should preserve `location.search` before any destination fragment. Explicit destination profile fragments take precedence over an obsolete source-page fragment.

## Verified homepage fragments

These values were read directly from the current published homepage DOM. The public section ID is the semantic lowercase name; the surrounding Wix region and menu `data-anchor` values are additional supported aliases.

| Semantic fragment | Wix region | Wix menu data-anchor | Destination |
| --- | --- | --- | --- |
| `#services` | `#comp-iggq277c` | `#dataItem-iggq277e` | `/services` |
| `#about` | `#comp-iggq2kqb` | `#dataItem-iggq2kqc` | `/about` |
| `#projects` | `#comp-iggq2qkr` | `#dataItem-iggq2qkr1` | `/projects` |
| `#people` | `#comp-iggq361j` | `#dataItem-iggq361j1` | `/people` |
| `#contact` | `#comp-ip2uzos0` | `#dataItem-ip2uzos2` | `/contact` |
| `#careers` | `#comp-jrjqmf1d` | `#dataItem-jrjqmf2f` | `/careers` |
| `#clients` | `#comp-iggq2y8l` | Not present in current menu | `/about#clients` |

The old Clients section explicitly says it is under construction. Its destination needs a matching `id="clients"` section preserving that status. The three named legacy profile paths need `robin-lim`, `gerald-seki`, and `john-chen` IDs on their corresponding People profiles.

Fragments never reach the server, so `getLegacyDestination(pathname, hash)` must be invoked in the client before normal route matching. A `*` not-found route alone cannot handle old `/projects/:slug` links, because the existing project route matches first. The helper intentionally handles homepage fragments only when pathname is `/`, preserving unrelated anchors on service and project detail pages.

## Verification

- Fifty canonical mappings, all literal and URI-encoded forms, trailing-slash client handling, all 20 observed fragment aliases, unchanged canonical paths, unknown/malformed paths and inherited-key rejection passed 250 assertions.
- Official `@vercel/routing-utils` 6.6.0 compiled the full `vercel.json` with no errors; the 60 redirect rules resolve to 308 responses with expected destinations. The validation dependency was installed only under `/tmp/geolabs-routing-validation`, not in the project.
- Staging-wide noindex was explicitly asserted to remain present.
- Integration and deployed HTTP checks remain the main task's responsibility. Local Vite does not process `vercel.json` edge redirects. Check both CONRAC paths, apostrophe/quoted/ʻokina variants, application forwarding, profile fragments and the existing asset routes after deployment.

Source inventory: [published sitemap](https://www.geolabs.net/sitemap.xml), [published homepage](https://www.geolabs.net/), and the page-by-page source review linked above. Obsolete booking paths map to Contact; this does not restore or imply a booking backend. Applications map to the owner-approved `https://careers.geolabs.net/apply`.


## Deployed result

The root task verified all 60 configured rules on test.geolabs.net after commit `c61accc` deployed. Every request returned HTTP308 with its exact expected destination, including the encoded/literal punctuation variants. Canonical pages and source assets returned200; global staging noindex headers remained intact. Evidence is in the October review directory's deployed-http.json. No primary-domain DNS cutover occurred.
