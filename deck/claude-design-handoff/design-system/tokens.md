# kWh Electric — locked visual design system

This is the binding style reference. Every slide in the deck must follow this, no exceptions
without asking first.

## Canvas

- 16:9, matches the primary deck's render size: 2048×1152 (or scale proportionally; keep the
  16:9 ratio exact).
- Background: white / warm white. `#FCFBF8` or plain `#FFFFFF` — pick one and hold it across every
  slide. Never dark, never a gradient, never a texture.

## Type

- One typeface family only: **DM Sans**. No pairing with a serif, no second family anywhere,
  including labels and captions.
- Sentence case everywhere. Never all-caps body copy — all-caps is reserved for short green
  section labels/eyebrows and step-rail words (FORECAST, DECIDE, DISPATCH…), matching how the
  reference slides use it.
- Biggest feasible text, fewest possible words. Cut anything that isn't load-bearing —
  timestamps, "last updated," "system healthy," italic disclaimers, decorative captions. If a
  label doesn't change what the reader understands, delete it rather than shrink it.
- Hierarchy from weight and size, not from a pile of different sizes. Cap it around 3 sizes per
  slide (title / section label / body-and-data), with one exception allowed for a genuine hero
  number (a dollar figure or percentage that IS the point of the slide).

## Color — exactly two ink colors, one accent

- Black / near-black text: `#0B0F0C`.
- kWh green (the only accent color, used for emphasis, links, active states, underlines, section
  labels, and the one interactive-looking accent per screen): `#16A34A`.
- No purple, no gradients, no glow, no glassmorphism. This has been explicitly rejected before —
  don't reintroduce it even if a reference image suggests it.
- Semantic states (a status pill, an error, a warning) can use a second small palette strictly for
  that purpose — muted red for "offline"/"overload," amber for "pending"/"volt violation" — but
  never as a second brand accent. Everywhere else, differentiate with black, weight, or fill
  opacity rather than a new hue.
- Signal yellow (`#F7B719`) is allowed ONLY for value-transfer / activation / one-time-event
  emphasis (a dispatch window highlight, a "new work" node) — same restrained use as in the
  reference decks. Don't use it decoratively.

## Containers, icons, UI chrome

- No drop shadows anywhere. Flat panels, thin 1px (or ~1.5–2px) borders in a pale hairline gray
  (`#E4EAE5`), done.
- Product-window chrome: thin border, small red+yellow traffic-light dots top-left (no green dot),
  white body, 8–10px corner radius. This is the recurring "browser chrome" frame used across the
  reference render — reuse it as one component, don't reinvent per slide.
- Icons render as plain line strokes (no filled colored badge/circle behind them) at ~1.6–2px
  stroke weight, black by default, green only when the icon itself is the meaningfully-accented
  element (e.g. the gateway/control-plane node).
- A "product screen" must look like a faithful recreation of the real kWh UI (real nav items, real
  table columns, real copy) — never a diagram wearing a device frame. The HTML components in
  `ui-components/` are the literal ground truth for this; match their fidelity level, don't
  approximate below it.

## Diagrams

- One reading direction, held consistently.
- **Infrastructure/"kWh sits in the middle" diagrams are never a stacked sandwich.** Layout rule:
  DERs on the left, utilities/aggregators/OEMs on the right, grid services/applications on top,
  and the kWh infrastructure bar at the very bottom with nothing below it. See
  `ui-components/g-19-competition-layered.html` for the worked example of this correction.
- Connector color carries meaning: green = data/control, yellow = value/new activation, red =
  duplicated integration work or a fault/error.
- Reduce crossing lines and repeated nodes. Don't draw the same chain three times to imply
  repetition — draw it once and annotate the repetition in one caption.

## Reference implementation — this is not optional inspiration, it's the source of truth

`design-system/ui-components/*.html` are pixel-real, already-approved HTML/CSS builds of the
actual UI windows and diagrams this deck needs. They are self-contained files — open any one
directly in a browser to see it rendered at true size. Build new slides by matching their exact
visual language (spacing, border weight, font sizes, icon style, color use), not by
re-interpreting the design system from scratch each time.

A live, continuously-updated browsable index of every component (with full-size click-through) is
published at:

**https://claude.ai/code/artifact/f14850ab-f3e7-4fda-8371-109f12715990**
