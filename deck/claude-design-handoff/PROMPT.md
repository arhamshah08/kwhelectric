# Build the kWh Electric investor deck — handoff prompt

## The job

Build one complete 18-slide investor deck for kWh Electric, as a Claude Design canvas (18
artboards, one per slide, 16:9 each). Follow the narrative, copy, and slide order of the primary
source deck exactly. Follow the locked visual design system exactly. Use the pre-built HTML
components as the literal reference for every product-UI window or diagram that reappears across
slides — don't redesign them from scratch.

This is a reconstruction and unification job, not a redesign. The narrative is decided. The visual
system is decided. What's being built here is the first version that has all 18 slides living in
one coherent, editable canvas instead of scattered across a dozen exploratory PowerPoint files and
a folder of separate HTML snippets.

## Source of truth — read this before touching any supporting deck

**As of 2026-08-23, the complete and only authoritative set of source PowerPoint files is:**
`/Users/arhamshomefolder/Documents/Codex/2026-08-23/new-chat-2/outputs/kwh-ppts-last-10-days/`
— 23 decks, all verified present, valid, and readable. Do not pull content from any other path,
including paths referenced by earlier versions of this handoff (Downloads, other dated Codex
folders, etc.) — even a file with an identical-looking name elsewhere may not be the same binary.

**Tier 1 — primary / controlling deck:** `kwh-electric-investor-deck-control-plane-v2.pptx`.
Follow its content, narrative, positioning, sequence, terminology, and control-plane framing. If a
lower-tier deck conflicts with it, keep control-plane-v2's framing and note the conflict rather
than silently blending or replacing it.

**Tier 2 — direct companion versions, consult first when v2 needs more explanation, evidence, or
an alternative treatment:**
`kwh-electric-investor-deck-control-plane-v1-base.pptx` (the immediate predecessor — verified
byte-for-byte identical to v2 on 17 of 18 slides; only slide 3 differs, see below),
`kwh-electric-investor-deck-approved-system-v2.pptx`, `kwh-creative-investor-deck-v3.pptx`,
`kwh-readable-investor-deck-v2.pptx`, `kwh-software-first-investor-deck-final.pptx`.

**Tier 3 — secondary/reference decks, dip into for a fact, stat, phrase, or visual idea only —
never for slide order or overall narrative:** everything else in the folder. Full list with notes
in `supporting-decks/INDEX.md`, which has been rewritten for this consolidated folder.

**Verified duplicate:** `kwh-electric-investor-deck-control-plane-v1-base.pptx` and
`kwh-electric-investor-deck-gpt-image-2.pptx` are byte-identical (same MD5) — the former is an
intentionally renamed copy of the latter, per this folder's own `MANIFEST.txt`. Not an error;
don't extract it twice.

**Verified content relationship between the primary deck and its predecessor:** every one of v2's
18 slides was diffed against v1-base's by checksum, not by eyeballing. They are identical on
slides 1, 2, 4–18. **Slide 3 is the only difference** — this matches (and confirms) the split
already reflected in this folder's narrative docs (`narrative-source-slides-1-2-4-18.md` +
`narrative-slide-03-replacement.md`). No other content conflicts were found between v1-base and
v2. Conflicts between v2 and a Tier 2/3 deck have not been separately audited slide-by-slide —
report anything you find as you go rather than resolving it silently.

**Do not:**
- Treat any Tier 3 deck's narrative, slide order, or category framing as authoritative.
- Let the bee/honeycomb metaphor (present in `kwh-electric-investor-deck-bee-analogy.pptx` and
  `kwh-electric-demo-journey-bee-v3.pptx`) replace the software/control-plane thesis — it's
  retired.
- Turn this into a product-demo-journey or connected-asset-story deck — those are separate,
  shorter decks in Tier 3, not alternate structures for this one.
- Prefer a Tier 3 deck's content merely because it looks more polished than the primary.
- Combine conflicting figures from two decks. Keep control-plane-v2's number and flag the
  discrepancy.

## Read these in order

1. **`design-system/tokens.md`** — the binding style rules (color, type, spacing, chrome, diagram
   rules). Read this first; every slide must comply.
2. **`narrative-source-slides-1-2-4-18.md`** — exact copy, layout, and component spec for 17 of the
   18 slides (everything except slide 3). This is long and detailed — it's per-slide, so jump to
   the slide you're building.
3. **`narrative-slide-03-replacement.md`** — slide 3 was rewritten after the base doc above was
   written. Use this doc for slide 3, not whatever slide 3 says in the base doc.
4. **`reference-slides/slide-01.png` … `slide-18.png`** — the actual rendered PNGs from the
   approved primary deck. This is the visual ground truth for composition, spacing, and exact
   wording — when the written spec and the image seem to disagree on a small detail, the image
   wins.
5. **`design-system/ui-components/*.html`** — real, already-built HTML/CSS components matching
   this exact design system. Open any file directly in a browser to see it rendered at true size.
   These are the literal building blocks for product-UI windows and one corrected infrastructure
   diagram (see below) — reuse them, don't reinterpret them.
6. **`brand/`** — approved raster assets: real team portraits (`arham.png`, `sudheer.png`,
   `yuvaraju.png` — use these exact photos for the team slide, never a generated substitute) and
   one approved visual benchmark image for the overall GPT-Image-2-era aesthetic the deck is
   translating out of.
7. **`supporting-decks/INDEX.md`** — Tier 2 and Tier 3 decks, catalogued with the tier structure
   above. Consult Tier 2 first when a slide needs more than the primary deck gives you; Tier 3 only
   for a stray fact, stat, or visual idea. Neither tier's slide order or narrative should be
   followed.

## What "18 slides" means here

The primary deck's slide sequence (title only — see the narrative docs for full content):

1. The universal communications layer for distributed energy (cover)
2. The grid is distributed. Control is not. (problem)
3. Forecasting finds flexibility. kWh turns it into grid action. (control plane — **use the
   slide-03 replacement doc for this one**)
4. The aggregator is not the market. It is the tax. (market insight)
5. Connect once. Use forever. (product)
6. One edge gateway turns every asset into grid-ready capacity. (architecture)
7. Grid participation should feel as simple as connecting headphones. (owner journey)
8. One connection turns months of integration into a repeatable workflow. (utility journey)
9. Connect the asset once. Compound the software forever. (value stack)
10. Hardware is access. Recurring software is the profit pool. (business model)
11. A shared hub collapses the N×N integration market. (market structure)
12. Built through discovery. Proven on operating assets. (traction)
13. Distribute through the channels already touching the asset. (go-to-market)
14. The market has software, gateways, and clouds. It does not have a neutral communications
    layer. (competition)
15. Every deployment expands the translation graph. (moat)
16. The next chapter turns a deployed product into repeatable infrastructure. (roadmap)
17. Built by people who have deployed grid software before. (team)
18. Make every distributed asset grid-ready. (close)

## Component reuse map — which HTML file covers which slide

Match these directly; don't rebuild a product window that already exists.

| Slide | Component(s) to reuse |
|---|---|
| 1 | `slide-01-telemetry-dashboard.html`, `slide-01-device-management.html` |
| 3 | No product window — pure diagram, build fresh per `narrative-slide-03-replacement.md` |
| 5 | `slide-05-telemetry-dashboard.html`, `slide-05-device-management.html` |
| 6 | Gateway architecture diagram — see `g-01-network-planning.html`'s window-chrome and
     `g-19-competition-layered.html`'s connector style as the closest built references; the gateway
     hero graphic itself should reuse the same visual language as slide 5's gateway |
| 7 | `slide-07-phone-connect.html`, `slide-07-phone-discover.html`,
     `slide-07-phone-authorize.html`, `slide-07-phone-join.html`, `slide-07-phone-earn.html` —
     all five share one phone-frame size, use them as-is |
| 8 | `g-05-asset-record.html` (enrollment/detail pattern), `g-08-utility-asset-registry.html`
     (registry/table pattern), `g-10-dispatch-event.html` (dispatch pattern) — the 5-panel design
     pattern (design/target/enroll/dispatch/verify) should be built from these three components'
     shared chrome, not from scratch |
| 9 | `g-09-fleet-telemetry.html`, `g-21-unified-workspace.html` (orbit/hub layout reference) |
| 10 | `g-13a-revenue-access-paths.html`, `g-13b-revenue-summary.html` — kept as two separate
      pieces deliberately; lay them out together on the slide, don't merge into one card |
| 11 | `g-19-competition-layered.html`'s connector-line technique (algorithmic fan lines) |
| 12 | `g-17-operating-evidence.html` |
| 17 | `team-1-product.html`, `team-2-deployment.html`, `team-3-integrations.html` — these are the
      three small UI fragments that sit near each team member; the real portraits go in
      `brand/`, composite them together |
| 18 | `g-21-unified-workspace.html` (closing hub/network pattern) |

Slides 2, 4, 13, 14, 15, 16 are primarily editorial/diagram slides (blocks, before/after systems,
comparison matrices, curves) rather than product-UI windows — build these from the narrative docs'
canvas-composition sections and the reference PNGs, following the same flat/no-shadow/DM-Sans
system as everything else.

## The one structural correction already made — apply it consistently

Any "kWh sits in the middle of the market" diagram (this comes up on slides 4, 11, and 14) must
NOT be a stacked horizontal sandwich. Layout: DERs on the left, utilities/aggregators/OEMs on the
right, grid applications/services on top, kWh infrastructure as one bar at the very bottom with
nothing below it. `design-system/ui-components/g-19-competition-layered.html` is the fully worked
example of this correction — use it as the template for slides 4, 11, and 14's versions of the
same idea.

## Non-negotiables (repeating from tokens.md because these get missed)

- DM Sans only. White/warm-white background only. Text in black (`#0B0F0C`) or kWh green
  (`#16A34A`) only, with narrow, clearly-scoped exceptions for semantic status color and signal
  yellow as specified in `tokens.md`.
- No drop shadows, no gradients, no purple, no glassmorphism.
- Biggest feasible text, fewest words — cut decorative meta copy (timestamps, "last updated,"
  disclaimer captions) rather than shrinking it to fit.
- A product screen is a faithful UI recreation, never a diagram wearing a device frame.
- Preserve every number exactly as written in the narrative docs (unit economics, market sizing,
  traction figures) — these are sourced facts, not placeholders to round or restyle.

## When something is ambiguous

If a slide's exact layout isn't fully pinned down by the narrative doc + reference PNG + component
map above, make the most consistent choice with the rest of the deck and keep going — don't stall
the whole deck on one uncertain slide. Flag what you weren't sure about at the end rather than
guessing silently on something load-bearing (a number, a claim, a person's name/title).
