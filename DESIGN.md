---
version: alpha
name: Geolabs
description: A photographic engineering portfolio with precise, open layouts and restrained motion.
colors:
  primary: "#2d3142"
  yellow: "#f4cd00"
  white: "#ffffff"
  muted: "#606676"
  soft: "#f3f4f5"
  line: "#d9dce2"
  focus: "#806000"
typography:
  display:
    fontFamily: "Montserrat, sans-serif"
  sans:
    fontFamily: "DM Sans, sans-serif"
rounded:
  DEFAULT: "2px"
spacing:
  page-max: "1360px"
components:
  button:
    height: "52px"
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
  accent-button:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.primary}"
---

# Geolabs Design System

## Overview

**Creative North Star: “The work carries the identity.”**

Present an established engineering firm through authentic project and field photography. The slate masthead, original anniversary artwork, yellow active accents, and transparent G mark supply the identity. Open layouts, strong type hierarchy, and quiet separators supply the structure. Each page responds to its material: photographic archives, service spreads, portraits, chronological awards, or practical office information.

**Key Characteristics:**

- Original Geolabs colors, logos, Wix media, and project associations.
- Photographs take precedence over decorative interface containers.
- Short, readable motion with distinct ownership for text, images, statistics, and video.
- Shared controls and typography across every public and draft route.

`src/index.css` owns the runtime tokens and canonical styles. Shared behavior lives in `Shell`, `FeaturedFilm`, `HeroVideo`, `CountUp`, and `usePageMotion`; shared page primitives live in `App.tsx`. This document replaces the accumulated refinement notes. Product truth is recorded in PRODUCT.md; this pass's rationale and verification are in docs/redesign-audit.md.

## Colors

Slate anchors navigation, footer, and career/inquiry panels. Yellow identifies primary actions, selected navigation, and original artwork. White and cool gray alternate by content group, not on every section. Muted text remains readable against both light surfaces. Dark panels use lighter slate-tinted text and yellow keyboard outlines; light surfaces use the dark gold focus token.

**The Brand Rule.** Keep the supplied palette and artwork. Gradients are limited to readability scrims over actual imagery and the physical film-thumbnail treatment; they are not decorative section backgrounds.

## Typography

Self-hosted Montserrat provides headings and navigation; DM Sans handles reading and utility text. Desktop body text is 17px, narrow mobile 16px, with 1.7–1.75 line height. Introductory summaries use 19–21px. Display headings scale with the viewport; desktop navigation is 17px, uppercase and bold. Mobile navigation uses larger sentence-case links. Reading columns stop at 70ch.

Secondary text is typically 14–16px. Small photo credits, location labels, and utility metadata use 11–13px; they never replace core information. Preserve approved wording, punctuation and Hawaiian place names. Casing and line wrapping are presentation choices.

## Layout

The content width is bounded by the page-max token, with fluid gutters and 60px mobile / 64–104px larger section spacing. Interior titles and summaries share a two-column introduction on large screens and stack below 900px.

- Home retains the centered documentary video hero and physical filmstrip, followed by facts, the firm introduction, asymmetric services, a field-team spread, and recognition.
- Services alternate real photographs with explanatory copy. Service details use a readable article and capability index.
- Projects use three columns with a two-column opening photograph, two equal columns below 900px, and one column below 640px. Search and category filters remain directly above results.
- People combine individual portraits and names, with credentials in native disclosures. Phones use one profile per row.
- Awards pair a sticky ceremony photograph with a chronological list; phones stack the photograph above the list.
- Contact groups the inquiry panel and regional office directory; careers pairs the field team with a slate introduction.

The menu switches at 1150px. Main content adaptations occur at 900px and 640px, with a 360px refinement for narrow phones. The anniversary panel overhang is exactly 12px desktop/tablet and 10px mobile. Do not change it as part of general spacing adjustments.

## Elevation & Depth

Use thin separators for meaningful groups, not boxes around everything. Only the overhanging logo and expanded navigation need soft offset shadows. The filmstrip's selected thumbnail uses a yellow selection edge. No generic floating cards or repeated contact banner.

## Shapes

Keep photographic frames rectangular and buttons nearly square. Circular controls are reserved for media play and previous/next actions. The menu toggle is borderless except in forced-colors mode. Preserve useful native input, disclosure, and video affordances.

## Components

- Navigation: a yellow active underline on desktop, large links in a responsive dropdown, visible keyboard focus, Escape dismissal, current-link dismissal, and dismissal when focus or a pointer leaves the header.
- Buttons: 52px minimum primary control height, clear focus rings, small arrow movement on hover/focus, and an immediate press response.
- Project filters: wrapping text controls with a yellow active underline, `aria-pressed`, and URL-backed state. Search is a labeled native search input with a clear action and live result count.
- Project links: whole photographic entries are clickable; restrained image zoom and persistent arrows make navigation obvious on touch and keyboard.
- Filmstrip: original Wix-selected imagery and HDOT video, manual previous/next, keyboard arrow/Home/End selection, centered active thumbnail, playback focus transfer, and a retry state.
- Video: hero plays muted when visible, pauses offscreen/in background tabs, and remembers manual pause intent. Reduced motion starts paused; the user can explicitly play it.
- Disclosures: native `details`/`summary`, generous targets, short icon rotation, and a 220ms content entrance.

**The Motion Ownership Rule.** A block or its descendants may reveal, never both. Card groups reveal as a unit; standalone headings, paragraphs, lists, and images reveal independently. Text moves 8px over 420ms, card groups 14px, photography settles over 600ms; sibling delays stop at 135ms. Retained results do not replay when typing. Film transitions use 460ms and menu entry 240ms. All animation starts from already-visible content, never changes document flow, and cancels on route cleanup or reduced-motion preference changes.

Statistics retain the final value for assistive technology and reserve the final number's width. Count-ups run once when visible. Reduced-motion disables entrances, transitions and counting without hiding content.

## Do's and Don'ts

- Do preserve authentic photographs, project associations, video credits, and explicit draft warnings.
- Do keep applications on careers.geolabs.net.
- Do verify rendered desktop, intermediate and narrow mobile compositions after shared changes.
- Do edit canonical selectors and update this document instead of appending override layers.
- Don't reintroduce the removed yellow “Contact our team” banner.
- Don't substitute generated imagery, new logos, invented copy, or unverified draft claims.
- Don't add continuous decorative motion, parallax, letter-by-letter text, or animation dependencies.

### Verified presentation details

Tall-building photographs for Central Ala Moana, Moana Pacific and the Hilton draft use top-aligned subject positioning so desktop crops preserve their crowns. Leadership names and roles use explicit content-sized grid rows regardless of whether credentials are available. The film readability scrim uses translucent slate (`#171b2aaa`). Draft rendering decodes imported numeric entities and known damaged punctuation without altering the archived source JSON or removing draft warnings. Project search accepts common unaccented keyboard spellings; displayed Hawaiian names stay unchanged. Related projects prioritize the same market, then the same location.
