# Higgsfield-guided UI refinement — October 4, 2026

The connected Higgsfield website workflow supplied its design recipe, frontend taste guidance and review rubric. Its website builder creates a separately hosted site and cannot directly edit this Vite repository. The guidance was applied to the existing Geolabs implementation; no new Higgsfield site, generated media, framework migration or primary-domain cutover was performed.

## Presentation changes

- Interior page titles and summaries now follow one clear reading order. Project-detail openings retain their balanced two-column composition.
- Services has five keyboard-accessible jump links, real photo captions beneath their images, larger spreads for the first two disciplines and quieter photo/text rows for the remaining disciplines.
- Leadership portraits use inset white name panels with a restrained yellow rule on larger screens. Phones retain compact portrait/name rows without overlapping panels.
- Project stories have a stronger opening paragraph and more comfortable spacing. Career benefits use two readable columns.
- Home service photos no longer have unnecessary numbered overlays.

The approved yellow/slate/light palette, real Wix assets, source wording, hero video, filmstrip, badge, directory, credentials, draft labels, careers links and existing motion timings are preserved. No source-data files changed.

## Verification

- `npm run check` passed TypeScript, ESLint and the production build; `git diff --check` passed.
- Captured all 56 routes at 1440px and 390px: 112 views, with no horizontal overflow or broken main-content images.
- Automated WCAG A/AA checks on 14 representative routes at both sizes, plus four routes at 320px, returned no violations in the checked main content. This is not a complete accessibility certification.
- Services jump links and leadership disclosures passed keyboard checks at 1440px, 768px, 390px and 320px, with both normal and reduced motion. Destinations receive focus and remain visible below the header; reduced motion produced no active animations.
- Rendered-content checks passed across 43 content routes, preserving all 99 project narrative paragraphs. Directory checks verified all 32 spreadsheet records, sorting, search and reset.
- Contact validation and draft behavior were rechecked without sending an email. The form remains an explicit email-draft handoff, not direct message delivery.
- Impeccable's detector returned 11 advisory existing color warnings and no non-advisory findings. Established branding takes precedence over generic palette suggestions. Its stale design sidecar was left unchanged; refreshing skill metadata is a separate maintenance task.

Local evidence: `/Users/tyamashita/Documents/ChatGPT/Geolabs/higgsfield-design-review/`. Screenshots document full routes; visual inspection focused on the changed page openings, Services layouts, People portraits, careers benefits and project stories at desktop and mobile sizes. Automated route coverage should not be interpreted as a fresh editorial audit of every Wix page.
