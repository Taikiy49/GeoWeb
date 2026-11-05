# A connected Geolabs story

The owner's follow-up to the November website notes asked for the website to feel like a story. This extension makes the reading sequence explicit and puts a documented place narrative ahead of the project archive. It follows the established Geolabs visual system and authentic Wix source material.

## What visitors experience

The homepage follows **roots → place → engineering work → people → next project**:

- The original drilling-film hero opens with “Follow our story.” A wrapping chapter index lets visitors start with the company's roots, International Market Place, the work, the people, or their own project.
- The company introduction begins with the documented 1975 founding and 1991 employee-ownership milestones. The original company paragraphs, USFCR statement/artwork and counters remain.
- International Market Place supplies a real story: its earlier cultural life, redevelopment constraints below ground and around protected trees, the named SME/Geolabs geotechnical team, and the completed August 2016 place. Three short chapters lead to the complete original project narrative.
- The original seven-frame photographic filmstrip continues into other places. The engineering disciplines then form a compact sequence: understanding the ground, developing the geotechnical design, and supporting work in the field. Full service explanations remain on Services, including the visible Design and Construction Support copy.
- The team follows the work, with links to the actual people and career opportunities. Recognition and a quiet project-conversation ending complete the journey.

Projects opens with the longer International Market Place sequence and the regional story concepts before the searchable catalogue. The opening also offers a direct “Browse all projects” shortcut. Waikīkī is the default regional selection; Ko Olina remains a URL-selected alternative. Both concept chronologies retain explicit draft/date/role review notices.

Each completed project now offers links to its context, full story and continuation. The next story prioritizes an exact location match, then the same market, then another completed project; it advances through the source collection rather than asserting a historical sequence. It preserves the visitor's original catalogue search, category, display mode and return anchor across the chain.

International Market Place, Moana Pacific and the circa-2008 conceptual Honolulu rail story also receive source-supported reading subheads over their unchanged original paragraphs. About's nine complete topics gain previous/next links and an onward route into project stories. The People page similarly connects the team to its work.

## Editorial boundaries

- The 1960s–1970s International Market Place chapter describes the place before redevelopment. It does not date Geolabs' involvement to that period.
- All 30 completed project stories retain their 102 captured paragraphs. The service explanations, original project images, photographic credits, seven film frames and 32-person directory remain intact.
- No new engineering results, client endorsements or capabilities were invented. The October 5 wording holds remain in effect. The rail text remains conceptual/preliminary work, rather than a claim to have delivered the completed rail system.
- Unverified regional milestones, unfinished stories and disputed source dates are not promoted as verified company history. The continuation omits pending/conflicting completion labels.
- The earlier November 5 homepage arrangement of long service spreads is superseded by the compact work sequence. The complete service material remains visible on Services.

## Implementation and verification

`PlaceStory` shares the documented place sequence between Home and Projects. `StoryPath` and `StoryCoda` connect the homepage chapters; `WorkJourney` explains the disciplines; `ProjectStoryGuide` manages project reading/continuation; `storySections` supplies the three source-supported subhead sets. Component CSS uses existing colors, typography, spacing and motion tokens. No dependency or generated asset was added.

Verification before staging publication:

- `npm run check`: TypeScript, ESLint, source parity and production build passed.
- `npm run test:motion`: all 13 lifecycle and reduced-motion checks passed.
- Browser review covered Home, About, Projects, three featured story details, People and Services at 1440px and 390px CSS widths. All 16 route/size combinations had one h1, no horizontal overflow and no broken loaded images after scrolling through their media. Home, Projects and the International Market Place detail also passed 320px overflow/heading checks.
- Tested all five homepage chapter destinations and sticky-header clearance; project reading anchors; place-story → project → next-story → original place return; filtered Residential/Moana/List gallery → story → focused originating result; both regional selectors; About previous/next/last-topic continuation and native mobile selector; mobile menu Escape/focus restoration.
- Reduced motion paused background video and removed new link transitions; existing image orientation and shared motion behavior remain. Strict premium audit reported zero findings. Impeccable detector returned no findings. An independent finish reviewer returned **ship** after two redundant decorative labels were removed from the changed Projects surfaces.

Evidence captures and browser-check JSON are stored locally in the sibling `story-review-2026-11-05` directory. Source and brand constraints are in [PRODUCT.md](../PRODUCT.md), [DESIGN.md](../DESIGN.md), [UX-CONTRACT.md](../UX-CONTRACT.md) and the [earlier note-by-note record](website-notes-2026-11-05.md).

This work is published through the existing GitHub/Vercel staging path at [test.geolabs.net](https://test.geolabs.net/). It does not authorize a primary-domain cutover or publication to Wix.
