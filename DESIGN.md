---
version: alpha
name: Geolabs
description: An engineering field journal with a Pacific landscape and precise editorial typography.
colors:
  primary: "#142e3a"
  muted: "#53666c"
  yellow: "#f3cc30"
  soft: "#f1f5f4"
  white: "#ffffff"
  line: "#d7e0df"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
  sans:
    fontFamily: "DM Sans, sans-serif"
rounded:
  DEFAULT: "0px"
spacing:
  section-gap: "100px"
  page-max: "1280px"
components:
  button:
    height: "54px"
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

A coastal engineering field journal: expansive real project photography, condensed technical headings, generous white space, and a restrained survey-marker yellow accent. The visual signature is the oversized two-line hero paired with a quiet photo caption. The logo mark abstracts geological strata.

### Product context and register

Brand/marketing register. Clients, consultants, and job seekers in Hawaiʻi and the Pacific need to understand capabilities, find relevant experience, contact an office, or apply. English with Hawaiian place names; this is not a Japan-market product. Desktop research and mobile contact lookup are primary scenes. Wix's saved editor pages and CMS records are the content source; user requested a full visual replacement and careers portal integration.

Avoid outdated boxed layouts, generic technology gradients, excessive pills, stock-image substitutions, and decorative dashboards. Quiet utility wins in contact information and search.

Runtime token ownership: `src/index.css` is canonical. Its `:root` variables map directly to the colors above (`--ink` maps to `colors.primary`) and to `--font-display` / `--font-body`. This document mirrors that source. Shared owners are `Shell.tsx` for navigation, `Photo`, `ArrowLink`, `ProjectCard`, and `PageIntro` in `App.tsx`. Changes to global identity update this document and CSS together. No generated token adapter or competing Tailwind theme is used.

## Colors

Ink owns text, navigation, service sections, and footer. Yellow identifies primary actions and emphasis; it always carries dark text. White and soft alternate broad page sections; line separates editorial rows. Muted is secondary body text. Visible teal focus outlines remain distinct from yellow accents. Light theme only; forced-colors uses system scrollbars.

## Typography

Self-hosted Barlow Condensed 600/700 for headings, DM Sans 400/500/600 for content and controls. Body copy is generally 16px with 1.8 line height. Long case-study prose has a constrained measure. Small uppercase tracking is reserved for short labels. Hawaiian diacritics use the font package's extended character support and sans-serif fallback.

## Layout

Maximum content width 1280px; desktop side gutters 56px. At 700px navigation becomes a nonmodal collapsible list. At 700px major grids become one column, gutters reduce to 20px, and section spacing reduces. Main document owns scrolling. Image aspect ratios reserve card geometry; detail images have fixed responsive heights. Search results are deliberately rendered in full (30 projects) with lazy images.

## Elevation & Depth

Borders and tonal sections establish hierarchy. No floating card shadows. Hero overlay exists solely for text contrast; sticky white navigation sits above content. Draft warnings occupy document flow.

## Shapes

Square corners, thin dividers, and rectangular controls reflect engineering precision. Only scrollbar thumbs are rounded for operability.

## Components

### Foundational visual states

All links/buttons are native controls with pointer, hover and visible focus. Pressed buttons shift one pixel; selected market filters invert to ink. Disabled controls reduce opacity and use a not-allowed cursor. Warning state is a labeled draft notice. No remote mutations, toasts, or loading spinners are needed: content is bundled locally. Empty search and unknown routes provide explicit recovery actions.

### Buttons and actions

Primary yellow on hero and navy on white; text links have a fine underline and directional arrow. CTA labels describe destinations. Careers buttons link to the external careers portal. Contact buttons are actual mail/telephone links, not simulated submissions.

### Navigation and data display

One shared shell across all routes. NavLink indicates current route. Mobile navigation is nonmodal, closes on route change or Escape, and restores menu-button focus on Escape. Route changes focus the main landmark. Project filters are buttons with aria-pressed, not ARIA tabs; search and filters persist in query parameters. Breadcrumbs link back to collections.

### Forms and overlays

The only local field is instant project search with a named clear control and no-results state. No account, booking, payment, or resume forms. Applications and resume uploads are handled on careers.geolabs.net. Native details provides leadership credential disclosure.

### Iconography

Lucide outline icons, usually 17–25px. Icons accompany text except explicitly labeled mobile and search buttons.

### Motion

Short 200ms navigation/action feedback, 600ms restrained image zoom, and one hero settle. Reduced-motion disables animation and transitions and uses immediate scrolling. No autoplay carousel.

### Content and data visualization

Concrete language centered on sites, engineering work, and communities. Distinguish general project descriptions from documented Geolabs scope. Conflicting or unfinished material stays in the archived source; draft pages visibly identify unverified content. No charts.

## Do's and Don'ts

- Do use actual Wix project images and retain stated photo credits.
- Do keep all job application paths on the careers portal.
- Don't treat draft text as verified project experience.
- Don't introduce a second navigation or design system for individual pages.
