---
version: alpha
name: Geolabs
description: A professional engineering portfolio grounded in authentic Wix photography and original Geolabs branding.
colors:
  primary: "#2d3142"
  muted: "#626774"
  yellow: "#f4cd00"
  soft: "#f5f6f7"
  white: "#ffffff"
  line: "#dddfe4"
typography:
  display:
    fontFamily: "Montserrat, sans-serif"
  sans:
    fontFamily: "DM Sans, sans-serif"
rounded:
  DEFAULT: "2px"
spacing:
  section-gap: "64–96px responsive"
  page-max: "1280px"
components:
  button:
    height: "52px"
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
  card:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.muted}"
  accent-button:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.primary}"
  divider:
    backgroundColor: "{colors.line}"
---

# Geolabs Design System

## Overview

### Creative North Star

An established engineering firm presented through its real work: centered uppercase Montserrat 800 hero typography, deep slate and signal yellow from the latest user reference, exact original anniversary artwork, and generous, consistent space. The signature is a full-bleed, muted looping video hero using the same Geolabs drilling footage as the Wix homepage. The title is manually broken into two bold lines with a lighter drilling-services line. A visible play/pause control accompanies it. The Home (New) filmstrip follows the hero, with a large project viewer, perforated thumbnails, and original HDOT walkway footage. The latest supplied screenshot governs the masthead and centered composition. A single navigation row places the original anniversary logo at the left; the earlier utility text is preserved in the footer. Interior service pages use open alternating photo/text rows, and projects use a generous two-column gallery. The user explicitly requested this complete visual revision; the prior invented logo and editorial taglines are retired.

### Product context and register

Brand/marketing register. Clients, consultants, and job seekers in Hawaiʻi and the Pacific need to understand capabilities, find relevant experience, contact an office, or apply. English with Hawaiian place names; this is not a Japan-market product. Desktop research and mobile contact lookup are primary scenes. Wix's saved editor pages and CMS records are the content source; user requested a full visual replacement and careers portal integration.

Avoid outdated boxed layouts, generic technology gradients, excessive pills, stock-image substitutions, and decorative dashboards. Quiet utility wins in contact information and search.

Runtime token ownership: `src/index.css` is canonical. Its `:root` variables map directly to the colors above (`--ink` maps to `colors.primary`) and to `--font-display` / `--font-body`. This document mirrors that source. Shared owners are `Shell.tsx` for navigation, `Photo`, `ArrowLink`, `ProjectCard`, and `PageIntro` in `App.tsx`. Changes to global identity update this document and CSS together. No generated token adapter or competing Tailwind theme is used.

## Colors

Ink owns text, navigation, service sections, and footer. Yellow identifies primary actions and emphasis; it always carries dark text. White and soft alternate broad page sections; line separates editorial rows. Muted is secondary body text. Visible ochre focus outlines remain distinct from yellow accents. Light theme only; forced-colors uses system scrollbars.

## Typography

Self-hosted Montserrat 500/600/700/800 for headings, DM Sans 400/500/600 for content and controls. Body copy is generally 16px with 1.8 line height. Long case-study prose has a constrained measure. Main navigation uses a consistent 1rem (16px) desktop size and 1.125rem (18px) collapsed-menu size, with Montserrat 700 and 0.04em tracking. Small uppercase tracking is reserved for short labels. Hawaiian diacritics use the font package's extended character support and sans-serif fallback.

## Layout

Maximum content width 1280px; desktop side gutters 56px. At 1100px navigation becomes a nonmodal collapsible list. At 760px major grids become one column, gutters reduce to 20px, and section spacing reduces. Main document owns scrolling. Image aspect ratios reserve card geometry; detail images have fixed responsive heights. Search results are deliberately rendered in full (30 projects) with lazy images.

## Elevation & Depth

Tonal sections, open photographic rows, and deliberate whitespace establish hierarchy. Shadows are limited to the masthead and film viewer. Hero overlay exists solely for text contrast; sticky charcoal navigation with a yellow anniversary-logo panel sits above content. Draft warnings occupy document flow.

## Shapes

Photography and controls use subtle 2px corners; open photographic layouts replace boxed service cards. Circular controls are reserved for media playback and carousel navigation. Original brand assets retain their original proportions and colors.

## Components

### Foundational visual states

All links/buttons are native controls with pointer, hover and visible focus. Pressed buttons shift one pixel; selected market filters invert to ink. Disabled controls reduce opacity and use a not-allowed cursor. Warning state is a labeled draft notice. No remote mutations, toasts, or loading spinners are needed: content is bundled locally. Empty search and unknown routes provide explicit recovery actions.

### Buttons and actions

A yellow outlined primary action on the hero, solid yellow on dark sections, and slate on white; text links have a fine underline and directional arrow. The hero also offers an outlined contact link. CTA labels describe destinations. Careers buttons link to the external careers portal. Contact buttons are actual mail/telephone links, not simulated submissions.

### Navigation and data display

One shared shell across all routes. NavLink indicates current route. Mobile navigation is nonmodal, closes on route change or Escape, and restores menu-button focus on Escape. Route changes focus the main landmark. Project filters are buttons with aria-pressed, not ARIA tabs; search and filters persist in query parameters. Breadcrumbs link back to collections.

### Forms and overlays

The only local field is instant project search with a named clear control and no-results state. No account, booking, payment, or resume forms. Applications and resume uploads are handled on careers.geolabs.net. Native details provides leadership credential disclosure.

### Iconography

Lucide outline icons, usually 17–25px. Icons accompany text except explicitly labeled mobile and search buttons.

### Motion

Short 200ms navigation/action feedback, restrained photographic zoom, and a muted looping background video. Reduced-motion disables animation and transitions and uses immediate scrolling. Reduced-motion preferences suppress video autoplay and show a frame from the actual clip; visitors can explicitly start playback. A visible native button pauses or resumes the video. Section headings, cards, and editorial blocks reveal on entry with short fade-and-rise animations; hero title lines reveal through a mask in sequence. Search updates animate only the result cards, keeping the heading stable. Content stays readable without animation support. The featured filmstrip is manually operated, supports arrow/Home/End keys, and resets video playback when the selected project changes. No autoplay carousel.

### Content and data visualization

Page headings use direct source-based names. Homepage company copy comes from Home (New) and About Us (New), with encoding and punctuation normalized. Technical service text may be condensed from Wix without adding capabilities or claims. Distinguish general project descriptions from documented Geolabs scope. Conflicting or unfinished material stays in the archived source; draft pages visibly identify unverified content. No charts.

### Brand and photography

`public/brand/geolabs-50th-anniversary.png` is the unmodified original Wix transparent anniversary artwork used in the top-left navigation. `geolabs-g.png` is the original G/auger/hammer mark used in the footer and favicon. Asset provenance is in `docs/refinement-asset-sources.json` in addition to the original migration manifests. Photo subjects were visually inspected: drilling uses the actual CME-75 rig, testing uses a concrete core, geotechnical services use Pali slope mitigation, construction uses Hoopili earthwork, and careers uses the field crew. Project images stay paired with their named projects. No generated images or invented logos.

## Do's and Don'ts

- Do use actual Wix project images and retain stated photo credits.
- Do keep all job application paths on the careers portal.
- Don't treat draft text as verified project experience.
- Don't introduce a second navigation or design system for individual pages.

## Reference-led refinement

The September 28, 2026 user screenshot supersedes the earlier charcoal interpretation: deep slate `#2d3142`, signal yellow `#f4cd00`, and white photographic layouts. Anthropic frontend-design and Stark web-design were read and applied. Decisions, selected references, and verification scope are recorded in `docs/ui-refinement-brief.md`. All source-based wording and media stay unchanged; typography casing and layout are presentation choices.

## Compact layout and motion refinement

Contact strips use 30px desktop / 26px mobile vertical padding and 26–34px headings. Standard sections use responsive 64–96px spacing; page introductions use 72px/48px desktop padding. Shared buttons use readable 13px labels. The larger navigation scale remains unchanged.

Gallery siblings enter with a capped 195ms stagger; photography uses a restrained scale entrance while text uses short translation. Mobile menus open with a 240ms transition and staggered links. Links, filters, disclosure content, and footer navigation give consistent interaction feedback. No continuous decorative effects or extra animation libraries. Reduced-motion preferences cancel active Web Animations and disable CSS animation; route changes clean up observers and animations.
