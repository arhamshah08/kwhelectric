# kWh Electric launch film — source ledger

## Canonical inputs

- Story brief and visual asset pack supplied by Arham on 30 August 2026.
- Opening empty-house illustration supplied by Arham on 30 August 2026 and preserved at `public/assets/opening-empty-house.png`.
- Opening populated-house illustration supplied by Arham on 30 August 2026 and preserved at `public/assets/opening-house-with-assets.png`.
- Current company positioning, visual rules, and verified-claim constraints from the kWh image-deck-studio skill references.
- Customer journey source: `/Users/arhamshomefolder/kwh-investor-room/src/pages/06-customer-journey.html`.
- Canonical project context: `/Users/arhamshomefolder/kwhelectric/CONTEXT.md`.

## Editorial decisions

- The current investor-room journey contains 16 steps, so the film follows the corrected sequence rather than forcing the older 15-step count.
- Payment is shown as aggregator-to-Alex. kWh verifies delivery and does not handle the money.
- Battery and EV assets are shown connecting through the home gateway; HVAC is shown through a vendor cloud API.
- The unresolved Zigbee wording from the supplied reference is not presented as a fact. The phone uses the neutral label “Local interface.”
- Demand response is the current anchor service. Other services are explicitly framed as expansion or future services.
- Utility-program details, device state, and charge percentages are illustrative UI values, not operating metrics.

## Deliverables

- Source composition: `src/video/LaunchFilm.tsx`
- Master render: `out/kwh-launch-video-v5.mp4`
- Opening approval cut: `out/kwh-opening-preview-v5.mp4`
- Poster: `out/kwh-launch-video-v5-poster.png`
- Standalone generator: `scripts/make-standalone.mjs`
