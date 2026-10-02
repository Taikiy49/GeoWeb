# Geolabs website

A responsive React + TypeScript website rebuilt from the saved Geolabs Wix editor, including unpublished page variants and dynamic project records. The original source capture is dated September 28, 2026; the October 1 review compares it with the published site and fresh saved editor views. See `docs/content-parity-review.md` and `docs/fresh-wix-review.md` for coverage and unresolved source issues.

## Run locally

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 5174
```

Open http://127.0.0.1:5174. Node 20.19+ or 22.12+ is required by Vite.

```sh
npm run check     # TypeScript, ESLint, production build
npm run preview   # Serve the production build
```

## Content

- `src/data/site.ts`: offices, services, original engineering case studies, leadership, benefits, awards.
- `src/data/cms-projects.json`: additional distinct projects from Wix's dynamic collection.
- `src/data/drafts.json`: archived unfinished source narratives; not imported into the site.
- `src/data/unfinished-projects.json`: 12 source titles shown as Under construction, with only verified image associations.
- `docs/wix-source-snapshot.json`: original inspected page text and image metadata, including all 28 dynamic records.
- `docs/MIGRATION.md`: source precedence, coverage, and editorial decisions.
- `DESIGN.md`: visual identity and shared interaction conventions.

All applications and resume uploads go to https://careers.geolabs.net/apply. Contact inquiries use working email and telephone links. Four office selectors update a live Google Maps embed with a permanent directions fallback. Displayed phones use `(808)841-5064`; dialing links use international digits. The original Wix contact submission form has no migrated backend. No Wix runtime or credentials are required. Google supplies the embedded map. Fonts and project images are hosted locally.

## Hosting

`npm run build` generates `dist/`. The site uses browser-history routing: configure the host to serve `index.html` for application paths. Netlify `_redirects` and Vercel rewrites are included. Drafts have noindex metadata and robots exclusions; these are discoverability controls, not access control. Draft pages are intentionally accessible, per the owner's request.

This repository update does not itself change Wix or the geolabs.net domain. A production domain cutover is a separate hosting operation. Preserve route fallback and draft robot headers when deploying on another host.
