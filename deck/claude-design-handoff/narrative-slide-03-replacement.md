# Slide 03 — replaces "why now" in the base narrative doc

The primary deck (`kwh-electric-investor-deck-control-plane-v2.pptx`) reuses the same 18-slide
narrative as `narrative-source-slides-1-2-4-18.md` for every slide **except slide 3**, which was
specifically rewritten and regenerated to introduce the "control plane" framing. Use this doc for
slide 3 instead of whatever slide 3 says in the base narrative doc.

Reference render: `reference-slides/slide-03.png`

## Narrative job and reasoning

Slide 2 established the problem (fragmentation, repeated integration, underutilized capacity).
Slide 3 answers "so what does kWh actually do about it, mechanically" — before slide 4 makes the
market-structure argument (aggregator = tax) and slide 5 shows the product. It's a single
operating loop: forecast → decide → dispatch → verify, with the kWh Control Plane as the box that
turns a predicted need into a verified grid action.

## Exact primary copy

- `Forecasting finds flexibility.`
- `kWh turns it into grid action` (this second line is the title's punch — keep it distinct from
  the first line, e.g. via weight or the two-line break, not a color change)
- `FROM PREDICTED NEED TO VERIFIED RESPONSE` (green, uppercase subhead under the title)
- `FORECAST` / `See when and where flexibility is required` (small callout card, top-left, sits
  above a small forecast line chart)
- `kWh CONTROL PLANE` (green filled block, center) with a settings/sliders icon above the label
  and one line beneath it: `Identity  •  Translation  •  Policy  •  Dispatch  •  Verification`
- Asset labels feeding into the control plane from the right side: `BATTERY STORAGE`, `SOLAR
  INVERTER`, `EV CHARGER`, `UTILITY METER`, `FLEXIBLE LOAD`, converging into `UTILITY GRID`
- Bottom four-step rail, numbered green circles:
  1. `FORECAST` / `See when and where flexibility is required`
  2. `DECIDE` / `Apply grid constraints and program policy`
  3. `DISPATCH` / `Coordinate mixed assets across OEMs`
  4. `VERIFY` / `Return telemetry and response evidence`
- `kWh Electric` lockup, bottom-left

## Canvas composition (read off the reference render, approximate)

- Title block upper-left, two lines, ~64–72px, same weight/scale as the rest of the deck's
  section titles.
- Green underline beneath the title, then the green uppercase subhead.
- Left column: small outlined `FORECAST` label card, with a compact line chart below it (single
  green flexibility-need curve over time, one shaded peak window highlighted).
- Center: the green `kWh CONTROL PLANE` block — this is the same visual language as the "kWh
  COMMUNICATIONS LAYER" bar used elsewhere in the deck (slide 5's gateway, slide 6's kWh EDGE
  block) — treat it as the same component family, not a new shape language.
- A curved green connector runs from the forecast chart into the left side of the control plane
  block; a dashed feedback line runs from the utility grid, along the bottom, back up into both
  the forecast chart and the control plane block (showing verified response feeds the next
  forecast).
- Right side: five asset icons (battery, solar, EV charger, meter, flexible load) each with a
  straight green line into the control plane's right edge, converging into one line that reaches
  the utility grid icon (top-right).
- Bottom: the four-step numbered rail spans the width, directly under the diagram, each step a
  green circle-number + bold label + one short line of support copy — same treatment as the
  numbered step rails on slides 7 and 8.

## HTML implementation notes

- Build the `kWh CONTROL PLANE` block as the same reusable "GatewayHero"-adjacent green panel
  component already used elsewhere (don't invent a new container style for it).
- Reuse the existing `AssetIcon` set (battery, solar inverter, EV charger, utility meter, flexible
  load) — same icons as slides 1, 5, 6, 13.
- Reuse the numbered-step rail component pattern already specified for slides 7 and 8.
- This slide is almost entirely a diagram, not a product-UI window — there is no `ProductWindow`
  on this slide. Don't add one.
