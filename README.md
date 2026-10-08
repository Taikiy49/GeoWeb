<div align="center">
  <img src="./public/brand/geolabs-g.png" alt="Geolabs emblem" width="72" />
  <h1>Geolabs, Inc.</h1>
  <p><strong>Our expertise. Our people. Our projects.</strong></p>
  <p>
    The Geolabs company website: geotechnical engineering, drilling,<br />
    construction support, and materials testing in Hawaiʻi and the Pacific Basin.
  </p>
  <p>
    <a href="https://test.geolabs.net">Explore the test website</a>
    · <a href="./docs/DEVELOPMENT.md">Developer guide</a>
    · <a href="./docs/PRODUCTION-READINESS.md">Launch readiness</a>
  </p>
  <p>
    <img alt="React 18" src="https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
    <img alt="Vite 7" src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" />
    <img alt="Deployment: Vercel" src="https://img.shields.io/badge/Deployment-Vercel-111827?logo=vercel&logoColor=white" />
    <img alt="Status: staging" src="https://img.shields.io/badge/Status-Staging-F5C518?labelColor=303840" />
  </p>
</div>

---

## Overview

GeoWeb brings Geolabs’ company information, engineering portfolio, team, and career opportunities into one responsive website. It preserves the original Geolabs branding, project photography, and videos while making the content easier to explore on desktop and mobile.

The website was rebuilt from AJ and Robin’s saved Wix New/Newer pages and project collections. This repository contains the independent React implementation and its captured source evidence. It does not automatically synchronize with Wix.

> **Currently in staging:** [test.geolabs.net](https://test.geolabs.net/) is the review deployment. A primary-domain launch is a separate approval and deployment step. Pushing this repository does not publish changes to Wix.

## Explore the website

| Page | What you’ll find |
| --- | --- |
| **[Home](https://test.geolabs.net/)** | Original drilling footage, seven featured project frames, company milestones, services, and careers. |
| **[About](https://test.geolabs.net/about)** | Nine photographic company topics, capabilities, sectors, culture, and regional offices. |
| **[Services](https://test.geolabs.net/services)** | Geotechnical engineering, construction support, drilling, and materials testing with detailed capability pages. |
| **[Projects](https://test.geolabs.net/projects)** | 44 catalogue entries, searchable by project and filterable by market, with Gallery/List views. |
| **[Our people](https://test.geolabs.net/people)** | Four leadership profiles and a searchable, sortable 32-person team directory. |
| **[Awards](https://test.geolabs.net/awards)** | Engineering recognition, project imagery, and original photo credits. |
| **[Contact](https://test.geolabs.net/contact)** | Four offices, individual maps and directions, phone/email links, and an email-draft inquiry form. |
| **[Careers](https://test.geolabs.net/careers)** | Benefits, employment policy, and links to the separate [application portal](https://careers.geolabs.net/apply). |

## Built around the original work

- **Authentic media:** original anniversary artwork, Geolabs emblem, Wix project photographs, drilling footage, and the HDOT walkway film. Supplied credits are retained.
- **Complete project narratives:** 30 completed stories retain 102 captured source paragraphs. The catalogue also includes 14 clearly marked unfinished entries.
- **Useful browsing:** URL-backed project filters and display preferences, contextual return links, leadership selection, and directory search/sorting.
- **Responsive interactions:** keyboard navigation, visible focus, reduced-motion support, mobile layouts, and restrained scroll animation.
- **Traceable content:** source captures, asset manifests, compatibility mappings, and review records remain in the repository.

## Review status

| Item | Current boundary |
| --- | --- |
| **Contact form** | Prepares an explicitly unsent email draft. Direct inbox delivery needs a sending integration. |
| **Unfinished content** | 24 unfinished story routes overall, including the 14 catalogue entries. Clients and Payton’s detailed biography also remain under construction. |
| **Service wording** | Selected promises and unconfirmed offerings are qualified or withheld pending Robin’s review. Originals are preserved in the [wording archive](./docs/content-review-holds-2026-10-05.md). |
| **Source conflicts** | Disputed dates and uncertain photo associations retain their documented treatment; source capture does not establish factual approval. |
| **Launch** | Staging intentionally blocks search indexing. Primary-domain configuration, editorial approval, and launch checks remain separate. |

See [production readiness](./docs/PRODUCTION-READINESS.md) for the full review boundaries and remaining decisions.

## Run locally

Use Node.js **20.19+ within version 20, or 22.12+**, as required by Vite.

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 5174
```

Open [localhost:5174](http://localhost:5174). The current website needs no Wix login, API keys, or environment secrets to run. Maps, the careers portal, and the visitor’s email app are external services.

```sh
npm run check        # TypeScript, ESLint, source-content checks, production build
npm run test:motion  # 13 motion lifecycle checks
```

The source-content guard checks project narratives, service explanations and authorized holds, original Home slides, gallery destinations, and team qualifications. These checks supplement the recorded browser reviews; they do not certify all source facts or accessibility conformance.

## Repository map

| Location | Purpose |
| --- | --- |
| [`src/App.tsx`](./src/App.tsx) | Pages, route definitions, and page metadata |
| [`src/components/`](./src/components/) | Navigation, media, leadership, directory, maps, contact form, and motion |
| [`src/data/`](./src/data/) | Versioned website content, project records, and compatibility mappings |
| [`src/index.css`](./src/index.css) | Shared design tokens, responsive layouts, and interaction styles |
| [`public/`](./public/) | Original brand assets, optimized photographs, videos, and host files |
| [`scripts/`](./scripts/) | Content/motion checks and reviewed team-directory refresh |
| [`docs/`](./docs/) | Wix evidence, migration history, verification, and deployment guidance |

## Guides and evidence

- [Development and maintenance](./docs/DEVELOPMENT.md) — commands, content ownership, directory refresh, and verification history.
- [Deployment and rollback](./docs/DEPLOYMENT.md) — staging hosting and domain boundaries.
- [Wix migration](./docs/MIGRATION.md) — source precedence and editorial decisions.
- [Latest Wix recheck](./docs/wix-new-page-recheck.md) — restored Home slides and source-content coverage.
- [Complete content parity review](./docs/wix-complete-parity-review-2026-10-04.md) — gallery, project narratives, awards, and source exceptions.
- [Design system](./DESIGN.md) and [interaction contract](./UX-CONTRACT.md) — visual direction and shared behavior.

---

<div align="center">
  <sub>Geolabs, Inc. · Established 1975 · Employee-owned since 1991</sub>
</div>
