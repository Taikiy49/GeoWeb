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

White and soft gray are the dominant content surfaces, following the homepage balance. Interior introductions are soft gray; photo bands, catalogs, project galleries, leadership, awards, drafts and office directories are white. Long service/project reading sections and People’s team section use soft gray. About follows soft-gray introduction → white photo/legacy → soft-gray capabilities → white sectors → soft-gray offices → slate culture → white Clients. Slate is occasional emphasis: navigation, footer, the homepage video/film and careers feature, About’s culture section, Careers’ ownership section, and the compact contact inquiry panel. Do not force dark/light alternation or add dark frames around photographs. Preserve yellow accents and readable dark-gold labels on light backgrounds.

**The Brand Rule.** Keep the supplied palette and artwork. Gradients are limited to readability scrims over actual imagery and the physical film-thumbnail treatment; they are not decorative section backgrounds.

## Typography

Self-hosted Montserrat provides headings and navigation; DM Sans handles reading and utility text. Desktop body text is 17px, narrow mobile 16px, with 1.7–1.75 line height. Introductory summaries use 19–21px. Display headings scale with the viewport; desktop navigation is 14px, uppercase and semibold. Mobile navigation uses larger sentence-case links. Reading columns stop at 70ch.

Secondary text is typically 14–16px. Small photo credits, location labels, and utility metadata use 11–13px; they never replace core information. Preserve approved wording, punctuation and Hawaiian place names. Casing and line wrapping are presentation choices.

## Layout

The content width is bounded by the page-max token, with fluid gutters and 60px mobile / 64–104px larger section spacing. Interior page introductions pair the title on the left with a summary bounded to 54ch on the right, using a .9fr/1.1fr grid and 72px/60px opening spacing. Below 900px they stack in reading order. Project-detail titles retain their separate two-column composition. Slate is reserved for visual anchors and selected editorial groups. Project and draft breadcrumbs stay within the light introduction, with 44px return links and wrapping on narrow screens.
- Home retains the centered documentary video hero and physical filmstrip, followed by facts, the firm introduction, asymmetric services, a field-team spread, and recognition.
- Services alternate real photographs with explanatory copy. Service details use a readable article and capability index. The selected hash destination has a yellow divider and heavier link text. Capability anchors receive focus and use the document’s single 112px scroll offset; do not stack an additional section scroll margin on it.
- Projects use a white editorial gallery with a full-width photo/story spotlight every ten entries, separated by three-column photographic rows. Two equal columns below 900px and one below 640px keep reading comfortable; spotlights stack below 900px. Existing summaries introduce each story, with three-line previews on standard entries and full summaries on spotlights. Search and category filters remain directly above results. A URL-backed Gallery/List control provides a compact thumbnail index; phones prioritize names and locations in List view. Filtering returns uniform cards and preserves the selected view. Related projects stay compact.
- People use four large portrait columns on wide screens and two on smaller screens. A white name/role panel overlaps each portrait on larger screens, with a yellow rule marking the selected profile. Phones use two compact portrait columns without overlap. Portrait links select a larger profile below the gallery, with the authored experience, education, registration and email in a readable definition list. Selection is URL-backed through the existing person hashes, supports previous/next and browser history, and places focus at the selected profile. Payton's uncompleted profile stays explicitly under construction.
- Awards pair a sticky ceremony photograph with a chronological list; phones stack the photograph above the list.
- Contact groups the inquiry panel and regional office directory, with a separate Google map beside each office’s details and persistent directions links. Office rows stack details above their own map on narrow phones. Careers pairs the field team with a soft-gray introduction and uses slate for the ownership section.
- About uses a compact original USFCR trust row, a light capabilities section, open sector columns, and office links. The source Clients section stays explicitly Under construction.
- Footer padding and grid are compact, while mobile links retain 44px targets. Desktop/tablet/phone heights are approximately 370/450/740px.

The menu switches at 1150px; quieter desktop link typography keeps navigation visible on smaller laptops. The desktop anniversary panel is 260px wide. Main content adaptations occur at 900px and 640px, with a 360px refinement for narrow phones. The anniversary panel overhang is exactly 12px desktop/tablet and 10px mobile. Do not change it as part of general spacing adjustments.

## Elevation & Depth

Use thin separators for meaningful groups, not boxes around everything. Only the overhanging logo and expanded navigation need soft offset shadows. The filmstrip's selected thumbnail uses a yellow selection edge. No generic floating cards or repeated contact banner.

## Shapes

Keep photographic frames rectangular and buttons nearly square. Circular controls are reserved for media play and previous/next actions. The menu toggle is borderless except in forced-colors mode. Preserve useful native input, disclosure, and video affordances.

## Components

- Navigation: a yellow active underline on desktop, large links in a responsive dropdown, visible keyboard focus, Escape dismissal, current-link dismissal, and dismissal when focus or a pointer leaves the header.
- Buttons: 52px minimum primary control height, clear focus rings, small arrow movement on hover/focus, and an immediate press response.
- Project filters: a labeled native category selector on phones keeps photographs closer to the opening screen; desktop uses wrapping text controls with a yellow active underline, `aria-pressed`, and URL-backed state. Search is a labeled native search input with one 44px clear action and a live result count. Suppress the extra WebKit clear decoration when the custom action is present. Router state updates synchronously because it controls the input value; authored reveal animations remain independent of React transitions.
- Project links: whole photographic entries are clickable; restrained image zoom and persistent arrows make navigation obvious on touch and keyboard.
- Filmstrip: original Wix-selected imagery and HDOT video, manual previous/next, keyboard arrow/Home/End selection, centered active thumbnail, playback focus transfer, and a retry state.
- Video: hero plays muted when visible, pauses offscreen/in background tabs, and remembers manual pause intent. Reduced motion starts paused; the user can explicitly play it.
- Disclosures: native `details`/`summary`, generous targets, short icon rotation, and a short content entrance. The service approach disclosures preserve the Home(New) Design and Construction Support paragraphs without expanding every page by default. Their content owns its animation and is excluded from the shared reveal observer.
- Interior introductions use subtle contour-inspired linework, explicitly decorative rather than a map. A wrapper handles the one-time 900ms entrance; reduced motion disables it. The original logo, documentary media and physical filmstrip remain the main visual anchors.
- USFCR: original source PNG and exact published statement, 112px art on desktop and 86px on mobile, with no invented certification link.

**The Motion Ownership Rule.** A block or its descendants may reveal, never both. Text within photo cards reveals independently of the image, so captions do not finish animating before reaching the reading area. Text in split layouts enters 32px from its rendered column's side over 560ms with a fast ease-out; CSS-reordered columns follow their actual position. Full-width and stacked text rises only 16px, while photography settles from scale .985. Sibling delays stop at 120ms. Entrances begin within the lower 92% of the viewport and play once per page visit. Scrolling back or resizing does not replay them; navigating to another page resets the sequence. Filtering takes 280ms without stagger. Retained results do not replay when typing. Film transitions use 460ms, menu entry 240ms, and menu links enter from the left over 320ms with up to 150ms stagger. Hero title lines enter from opposite sides using the same 560ms token. The selected leadership profile owns a separate right-side entrance, with a vertical fallback on phones; its descendants are excluded from the global observer. Content is visible by default. JavaScript stages only observed offscreen content; focus, print, route cleanup and reduced-motion changes reveal pending content immediately. Animation never changes document flow. A fixed 3px yellow reading-progress line follows the scroll distance on every route, recalculating when content resizes. Hover feedback uses subtle lightening, a yellow underline sweep and 2–3px movement; touch layouts do not depend on hover, and reduced motion suppresses movement.

Runtime CSS remains canonical (token ownership model B). `--motion-reveal: 560ms`, `--reveal-distance: 32px` and `--ease-out: cubic-bezier(.16, 1, .3, 1)` feed both CSS hero/profile entrances and `usePageMotion` through computed styles. `--scrollbar-thumb: #868b99` and `--scrollbar-track: #f3f4f5` apply globally through standards-based scrollbar properties and WebKit fallbacks; forced colors restores platform colors.

Statistics retain the final value for assistive technology and reserve the final number's width. Count-ups run once when visible and finish in 650ms. Reduced-motion disables entrances, transitions and counting without hiding content.

## Do's and Don'ts

- Do preserve authentic photographs, project associations, video credits, and explicit draft warnings.
- Do keep applications on careers.geolabs.net.
- Do verify rendered desktop, intermediate and narrow mobile compositions after shared changes.
- Do edit canonical selectors and update this document instead of appending override layers.
- Don't reintroduce the removed yellow “Contact our team” banner.
- Don't substitute generated imagery, new logos, invented copy, or unverified draft claims.
- Don't add continuous decorative motion, parallax, letter-by-letter text, or animation dependencies.

### Verified presentation details

Tall-building photographs for Central Ala Moana, Moana Pacific and the Hilton draft use top-aligned subject positioning so desktop crops preserve their crowns. Leadership names and roles use explicit content-sized grid rows regardless of whether credentials are available. The film readability scrim uses translucent slate (`#171b2aaa`). Unfinished pages display source titles and an Under construction notice. Unverified narratives stay in the repository archive and are not bundled. Only imagery with confirmed source subject association is shown; other unfinished entries use abstract slate contour linework. Project search accepts common unaccented keyboard spellings; displayed Hawaiian names stay unchanged. Related projects prioritize the same market, then the same location.

### Gallery and interaction finish

Project categories and locations sit together below unobstructed photos, using readable 13px metadata. Draft warning labels retain their image placement because they communicate verification status. Project titles use a fine underline on hover and keyboard focus alongside the existing arrow motion. Film thumbnail captions use 12px text; selected frames stay steady on hover, and keyboard focus uses a distinct slate outline. The horizontally scrolling filmstrip reserves 12px at both ends so the 8px outline extent is never clipped. Office links have 44px targets and credentials use 15px text. Shared Photo images carry intrinsic dimensions from `src/data/image-sizes.json`; CSS retains responsive image proportions and reserves layout space while assets load. Update this manifest when replacing source image dimensions.

### October site-wide refinement

References: Snøhetta’s project archive (https://www.snohetta.com/projects) for quiet image-led browsing and Arup’s projects page (https://www.arup.com/projects/) for legible hierarchy. Adapt these principles within Geolabs’ approved identity; do not import their fonts, colors or assets. Long-form service/project descriptions use soft gray; awards, contact directories, draft notices and career policies use white reading surfaces. Keep the original video, filmstrip and once-per-visit entrances; current motion timings are defined by The Motion Ownership Rule. Gallery crops for Central Ala Moana and Moana Pacific align to the top to preserve tower crowns.

### Office wayfinding

About’s regional office links target stable, named office anchors on Contact (`office-oahu`, `office-maui`, `office-kauai`, `office-california`). Hash navigation moves focus to the destination before scrolling, using the existing sticky-header offset and reduced-motion behavior. Office rows are programmatically focusable and labeled by their visible heading; Tab proceeds into that office’s contact links. Preserve the general `office-locations` anchor for existing links.

### Project browsing refinement

The October 3 section review captured 56 routes at desktop and mobile sizes. Larger project stories interrupt the archive’s repeated card rhythm without adding marketing claims or replacing source assets. The alternating image position belongs only to occasional gallery spotlights; all surfaces remain white or soft gray. Gallery headings use h2 below the page title, and related entries use h3 below their section heading. Keyboard focus reveals a photographic link’s pending descendants immediately and cancels their active entrance, so the focused title is readable without waiting.

## Restored source content — October 4, 2026

Keep long engineering narratives in the established reading column, with source captions on their actual project photos. The Team directory uses a yellow-headed semantic table on desktop and stacked records plus native sorting on phones; never shrink a four-column table until names are unreadable. Search/sort feedback is immediate; initial row motion uses the shared once-per-visit reveal and respects reduced motion. The contact field set makes its email-draft handoff explicit and never shows a sent confirmation.

## Higgsfield-guided presentation pass — October 4, 2026

Higgsfield’s connected website workflow supplied design guidance; its builder only creates separately hosted products and does not edit this repository. Apply its useful hierarchy, caption placement, layout variation and interaction principles within the approved Geolabs system. No generated assets or replacement site were created. Services now has a wrapping, keyboard-accessible jump index with focused article destinations. The two primary disciplines retain larger photographic spreads; the other three use quieter left-aligned photo/text rows. Captions belong below their associated photos. Career benefits use two readable columns, and project stories distinguish their opening paragraph through the existing type scale. All source content and established motion timings remain intact.

## Restored Wix interactions — October 4, 2026

About Us (New) uses nine topic photographs that reveal text on hover. Preserve this exploration idea with inset white paper panels, a 420ms horizontal masked reveal and restrained photo scaling; do not restore the heavy borders, blurred text strips or washed-out background. Each card keeps its title visible and links to the full original section with focus at the destination. On phones, source previews appear beneath the photo and tapping opens the full section. Five newly retrieved photographs must stay associated with their actual Wix subjects. Project photos use the same reveal language to introduce a source summary, while retaining visible project names and direct story links. Leadership follows the Wix portrait gallery plus larger credentials slideshow concept, with URL-backed selection replacing the old disclosure-only treatment. The profile's shared 560ms entry respects reduced motion, and hovering a portrait must never silently change the selected person.

## Source parity follow-up

The main project catalogue includes all named newer Wix gallery projects; gallery-only entries retain exact titles, locations and photos and use explicit Under construction status. They share ProjectCard, filters, search and Gallery/List behaviors with completed stories, and link to noindex draft routes. Award photographs use native Project photo disclosures; blank or mismatched source photos are withheld. No new palette, typography or independent card system is introduced. Native select geometry and keyboard behavior are intentionally platform-owned. Contact constraint validation is browser-owned through reportValidity; the message field grows to its contents.
