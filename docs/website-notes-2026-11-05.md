# Website review notes — November 5, 2026

Implemented against the seven-page “Geolabs Website notes” PDF supplied by the owner. Its tentative comments were treated as refinement guidance. No company claims, source photo associations, current service wording holds, or production-domain approvals were inferred from those comments.

## Note-by-note changes

1. **Home video control:** reduced to a discreet icon with accessible label/tooltip and 44px target. Retained pause/play because the decorative video autoplays for longer than five seconds. Reduced motion still starts it paused.
2. **Home introduction colors:** all right-column paragraphs use the same ink color; the opening paragraph keeps its reading hierarchy through size.
3. **Home service captions:** original project names/captions now accompany both main service photos. Supporting drilling/testing imagery names its actual subject.
4. **Two main service groups:** Geotechnical engineering and Services during construction lead the Home presentation; drilling/materials testing follow. The Services introduction names the two main groups and retains all four discipline links/detail pages.
5. **Testing photo orientation:** displays the original concrete-core photograph upright with CSS; source pixels are preserved. Its full test specimen is visible rather than cropped into a landscape banner.
6. **Empty Design/Construction area:** removed the standalone collapsed section on Home and Services. Its retained descriptions are integrated visibly into the relevant service group.
7. **About culture photo:** visible Malakal Port, Republic of Palau (2024) caption.
8. **Clients:** removed the unfinished About Clients placeholder. No named client directory or logos were added.
9. **Services approach:** approach text now accompanies the corresponding photographic service description, without a separate dropdown interaction.
10. **Project gallery:** uniform photographs, compact bottom titles/locations, no opaque white hover cards, no summary blocks or interrupting spotlights. G70's photographic approach informed the restraint; its artwork was not copied.
11. **Related projects:** retained all related-story links and contextual return navigation.
12. **Regional storylines:** Ko Olina visual chronology and Waikiki history available from Projects, and from the existing resort-concepts draft route. Ko Olina concept years are explicitly unverified. Waikiki separates the published International Market Place story from all five proposed concept milestones. Missing milestone photos and unapproved roles are not fabricated.
13. **Leadership faces:** removed portrait hover overlays; visible name/role links, selected full profiles, credentials and previous/next controls remain.
14. **Awards photos:** all 12 verified corresponding photographs now appear directly alongside the 15 awards, preserving credits. Three previously rejected photo associations remain withheld.
15. **Awards navigation:** added Awards to desktop/mobile main navigation. Company stakeholder agreement on its long-term prominence can still be discussed; the placement is reversible.
16. **About scrolling:** one complete topic is displayed at a time via nine desktop topic links or a labeled mobile selector, with existing hashes and office links. All topic copy, quality statements, original photos and vendor statement remain, except the explicitly removed Clients placeholder.
17. **Footer:** removed Draft project stories from Connect. Existing routes remain; Stories in development is discoverable beside the regional stories.

## Content boundaries

The document explains the intended visual chronology; it does not establish the accuracy of dates or Geolabs' engineering role. Resort concept copy previously identified as generated/placeholder remains archived, not displayed as approved work. Historical IMP context and its August 2016 completion come from the existing completed story. Specific Waikiki concept photographs and approved descriptions are still needed before those milestones become completed case studies.

Contact still prepares an explicitly unsent email draft. No direct-delivery backend, Wix publish, or root/www domain cutover is part of these UI refinements.

## Verification

- TypeScript, ESLint, source-content guard and Vite production build pass. The guard preserves all 30 stories/102 narrative paragraphs, 34 service explanations with 16 authorized holds, five original Home slides, 44 gallery destinations and 32 team records. It now also scans extracted page components for held marketing claims.
- All 13 motion lifecycle checks pass; strict premium static audit reports zero findings. Fresh Web Interface Guidelines were read and applied to the changed components.
- Browser layout checks: seven changed desktop surfaces at 1440px, six at 390px, six at 320px and six near 768px (767 actual CSS pixels), plus Home at 390px. One h1 per checked page, no horizontal overflow or broken already-loaded media. Scrolled through all Services, Projects and Awards content: all 6/48/13 main-content images loaded respectively.
- All nine About topics, four leadership selections, mobile topic/category selection, navigation open/Escape/focus return, project search/List state, no-results recovery, and exact catalogue-card return focus passed.
- Gallery image transition changes from 460ms to none under browser-emulated reduced motion. Hero starts paused in reduced motion; explicit play and pause both worked. The upright photo retains its orientation in that state.
- Existing related projects, all 15 awards and 12 directly visible verified award photos were confirmed. No email was sent. These are bounded checks, not exhaustive assistive-technology certification. Review evidence is retained locally in `notes-review-2026-11-05` beside the checkout; it is not shipped as site content.
