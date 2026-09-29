# Geolabs website

A responsive React + TypeScript website rebuilt from the saved Geolabs Wix editor, including unpublished page variants and dynamic project records. Content and photography were inspected on September 28, 2026.

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
- `src/data/drafts.json`: clearly labeled unfinished stories.
- `docs/wix-source-snapshot.json`: original inspected page text and image metadata, including all 28 dynamic records.
- `docs/MIGRATION.md`: source precedence, coverage, and editorial decisions.
- `DESIGN.md`: visual identity and shared interaction conventions.

All applications and resume uploads go to https://careers.geolabs.net/apply. Contact inquiries use working email and telephone links. No Wix runtime or credentials are required. Fonts and project images are hosted locally.

## Hosting

`npm run build` generates `dist/`. The site uses browser-history routing: configure the host to serve `index.html` for application paths. Netlify `_redirects` and Vercel rewrites are included. Drafts have noindex metadata and robots exclusions; these are discoverability controls, not access control. Draft pages are intentionally accessible, per the owner's request.

This repository update does not itself change Wix or the geolabs.net domain. A production domain cutover is a separate hosting operation. Preserve route fallback and draft robot headers when deploying on another host.
