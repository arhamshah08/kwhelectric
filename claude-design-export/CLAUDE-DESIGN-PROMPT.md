# Design brief for Claude — kWh Electric landing page

Attached is `kwhelectric-export.html`, a fully self-contained export of the live landing page at kwhelectric.io (all local JS and images are inlined; GSAP, fonts, and the React runtime load from CDNs). Please review and improve this page per the brief below, and return an improved version of the same HTML file.

---

## 1. Context — what this site is

**kWh Electric** — tagline: *"Every energy asset, visible and dispatchable."* An energy infrastructure company selling an edge gateway + protocol translation + cloud/MCP/AI layer for distributed energy resources (DERs: batteries, solar inverters, EV chargers, smart meters). The audience is B2B: aggregators/VPP operators, BESS financiers, OEMs, utilities/DISCOMs, energy AI platforms, and commercial asset owners.

**Brand system:**
- Bronze: `#CD7F32` (primary accent, section backgrounds, hex cards)
- Cream: `#FFFBF0` / `#FFF7E6` (page background, hex card backs)
- Near-black: `#0B0B0E` (text, dark cards) and dark honey-brown `#2B1A08` / `#120d04`
- Honey-yellow bees: `#FBCF2E` body, black stripes
- Typeface: DM Sans
- Honeycomb hex motifs everywhere: a cream honeycomb SVG background pattern (`.cream-hex-section`), four hexagonal flip cards in "How It Works" (Connect / Normalize / Dispatch / Verify), hexagonal icons on feature cards, and a giant dashed hexagonal shield ring in the Architecture section.

**Page structure (top to bottom):** fixed nav → full-viewport hero (dark photo background, big cream headline) → "The Problem" gold metrics band → cream honeycomb band containing "How It Works" hex flips and "Platform Features" cards → "Who it's for" gold card grid → dark five-layer Architecture stack (L1–L5) → gold contact section with a "Backed by" logo carousel and a form.

**Technical notes:**
- Animations are driven by GSAP 3.12.5 + MotionPathPlugin (already loaded from cdnjs). The bee logic is in the inline `<script>` near the end of the file (originally `bees.js`).
- The page contains non-standard tags (`<x-dc>`, `<helmet>`, `<sc-if>`) and template placeholders like `{{ navStyle }}`, `{{ scrolled }}`, `{{ handleSubmit }}`. These belong to a small client-side template runtime (the large inline `support.js` script) — **leave them exactly as they are, do not "fix" or expand them.** Keep the runtime script intact.
- Mobile (≤768px) uses simplified stacked layouts and disables the 3D card flips — preserve that behavior.

## 2. Existing bee experiences — MUST be preserved and built upon

These two scenes are already implemented and loved. Do not remove or replace them; extend and polish around them.

**(a) Hero flight bee.** A small flat-vector bee (yellow ellipse body, black stripes, round black head with a white eye highlight, two translucent blue-tinted wings, tiny grey stinger, two antennae) first peeks out of a hidden "cell" near the lower-left of the hero — rises, wiggles left/right, then launches. It flies a curved GSAP motion path with fast wing-flapping, orienting to its direction of travel (flips horizontally, dips up to ±45°), while dropping a dotted bronze trail on a canvas behind the text (dots at ~0.8 opacity over the background, dimmed to ~0.3 when passing over the headline so text stays readable). After loops around the title it lands with a small bounce on the "t" at the end of "asset" in the headline, settles with a slight head-down tilt, and its wings switch to a slow idle flutter forever.

**(b) Architecture defense scene.** When the Architecture section scrolls into view (IntersectionObserver at 45% visibility): a large dashed hexagonal shield ring (dark stroke, `12 8` dash) scales in around the five-layer stack, centered on the "l" in "physical". A yellow defender bee perches above that "l" with idle wing flutter. A dark attacker bee (`#1a1a1a` body, 1.32× scale, fast angry wing-buzz, eyes that glance left-right on a loop) lunges at the shield **three times** from different angles (150°, 30°, 90°): it accelerates in from outside, hits the hex boundary, a small bronze hexagonal ripple expands at the impact point and the ring pulses, then the attacker recoils and fades. The yellow bee turns to watch each attack, then rests. After the third failed strike, a personality epilogue: the attacker perches on the L5 layer line facing the barrier, sits there ~2.6s looking around, turns left, flies off screen left — then loops forever "spying": peeking in from a different screen edge each time (right, top, bottom-left, bottom, bottom-right), the barrier gives a small "yep, still there" pulse, the bee stares ~1.5s and retreats. Its eyes glance left-right the whole time.

## 3. Your task

**Review and improve the EXISTING design, and integrate new ideas into the current experience.** Do not rebuild from scratch and do not restructure the page: the current sections, copy, layout, and the two bee scenes above are approved and must remain. Your job is an art-direction and animation pass that makes the whole page feel more alive, more crafted, and more bee — while staying professional for a B2B energy-infrastructure audience.

## 4. THE NEW STORY EXPERIENCE — most important addition

Weave in a new animated vignette telling the story of **"shared hive vs. individual cells"** as a metaphor for the product:

- **Legacy state (the old way):** all bees live together in ONE big shared hexagon — one big colony cell. When a dark attacker bee strikes it, the whole hex is compromised at once: the big hexagon flashes alarm-red, a lightning-bolt strike hits its edge, and every bee inside is exposed together. One breach = everyone exposed.
- **The kWh Electric way:** each bee gets its OWN individual honeycomb cell — a tessellated cluster of golden hexagons, exactly one bee per cell. When the attacker probes, it just bounces/deflects off a single cell wall with a small deflection ripple; no bee is exposed, no cell falls, and the attacker gives up.

This mirrors the site's actual message: policy-bound, isolated, secure per-asset control versus monolithic all-or-nothing integrations.

**Reference imagery** (the user made mockups; recreate the spirit of these in the site's own art style):
- **Image A:** many small golden hexagons, each filled with several tiny bees, scattered on the cream honeycomb background — the "hive as a system" establishing shot.
- **Image B:** one large alarm-red hexagon crowded with bees, with a dark attacker bee and a yellow lightning bolt at its edge — the "shared hive compromised" moment.
- **Image C:** a tessellated cluster of golden cells, ONE bee per cell, with the dark attacker bee deflecting off the outside wall, leaving a dotted red trail and a white impact arc — the "individual cells, attack deflected" moment.

**Integration requirements:**
- Implement it as a scroll-driven or section-based animated vignette, ideally near the Architecture/security narrative (e.g., just before or within the Architecture section), **complementing — not replacing — the existing shield-defense scene**.
- Match the existing bronze/cream/honeycomb art style and the existing flat-vector bee character (round black head, white eye highlight, striped yellow body, translucent wings, tiny stinger). The attacker stays the dark `#1a1a1a` bee.
- Keep it self-explanatory at a glance; short caption text is welcome if it strengthens the message.

## 5. Interaction & polish requests

Spell each of these out in the improved version:

1. **More bee character/personality throughout:** expressive eyes (looping left-right glances, like the attacker already has), antennae twitches, gentle hover bobbing while idle, curious head tilts, small playful reactions (a startle, a happy wiggle after a deflected attack, etc.). Apply to both existing bees and any new ones.
2. **A bee that follows the viewer:** a small companion bee that accompanies the cursor or tracks scroll position through the page, reacting subtly to sections as you pass them (e.g., perking up at the hex flip cards, hiding during the attack scene). It must be subtle, small, and never block or distract from reading; it should never sit over body text, and it should be disabled on touch devices if cursor-based.
3. **Zoom and laptop-width resilience:** the experience must stay composed at browser zoom levels roughly 50%–200% and across common laptop widths (~1280–1728px). Concretely: no broken absolute positioning, no bees stranded off-screen, hex clusters that reflow or scale via clamp()/container-relative units, and bee flight paths and the shield-ring geometry recomputed on resize and zoom (the code already re-layouts the ring on `resize` — extend that discipline to everything new).
4. **Overall screen look — cohesive full-page art direction pass:** refine the hex background patterns, section-to-section transitions, spacing rhythm, and how bee moments are distributed down the page, so the whole scroll feels alive but professional — a few well-placed moments rather than constant motion.

**Constraints:**
- Keep it professional — the audience is B2B energy infrastructure buyers, not a kids' site. Charm, not clutter.
- Respect `prefers-reduced-motion`: reduce or disable decorative bee motion for users who ask for it.
- Keep performance smooth: GSAP is already loaded, prefer transforms/opacity, avoid layout thrash, keep canvas/DOM node counts modest.
- Mobile must degrade gracefully: the page currently uses simplified stacked layouts and no 3D flips under 768px — new experiences should simplify or gracefully disappear there rather than break.
- Do not modify the template placeholders (`{{ ... }}`), `<sc-if>`/`<x-dc>`/`<helmet>` tags, or the inlined runtime script.

## 6. Deliverable

Return an **improved version of the provided HTML file** with the enhancements integrated — keeping all existing content, sections, copy, images, and the current hero-bee and shield-defense scenes intact. One self-contained file, same structure, better design.

---

*Asset note: all images in the export are base64-inlined. A few oversized source logos (EntreCORPS, Samayang, Landuyt Center, favicon) were downscaled before inlining to keep the file small; they render identically at their display size (99px logo tiles). No assets were omitted or replaced with placeholders.*
