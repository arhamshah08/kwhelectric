# kWh Electric — Deck slide requirements & critique

Written 17 August 2026, after deck version E (`deck/deck-e-white.html`, 18 slides) was rejected. This
document is a content brief, not a design brief: for each slide it states what has to be true or present
on that slide, and separately what was wrong with what got built. It does not prescribe layout, color,
components, or how to fix anything — that's a separate decision.

## Complaints that apply across the whole deck, not one slide

- **Drop shadows were used everywhere** — on hero panels, floating stat cards, card grids, phone and
  laptop frames. This was called out as wrong across the board, not slide-specific.
- **"Product screen" panels did not look like they came from the actual website.** Several slides put
  content inside a laptop-shaped frame and called it a UI, when the content itself was an invented
  diagram, icon list, or generic checklist — not a recreation of any real screen in the actual kWh
  gateway management UI or Grid Intelligence utility portal.
- Two real screens do exist as faithful ground truth and were rebuilt correctly in a separate file
  (`deck/ui-snippets-handoff.html`): the gateway **Overview** screen and the Grid Intelligence
  **Asset management** table. Every other "product screen" slide below still needs its real
  counterpart identified or captured — none of the others have been confirmed against an actual
  screenshot yet.

---

## Slide 1 — Cover

**What must be on this slide**
- Company identity (kWh Electric).
- The core thesis: distributed energy assets — rooftop solar, batteries, EV chargers, smart
  appliances — now number over 100 million globally, deployed with no common way to see or control
  them.
- Something that establishes this is a real, running product, not a concept — the natural candidates
  are the two real screens (fleet/gateway overview, asset management), since those are the ones with
  actual ground truth.

**What was wrong**
- The two "hero" panels shown were simplified, invented versions of a dashboard and a table — not the
  real gateway Overview screen or the real Asset Management table. They used drop shadows.
- The staggered/overlapping panel composition was decorative, not grounded in anything the real product
  actually shows.

---

## Slide 2 — Problem: the toll chain

**What must be on this slide**
- The chain a single customer's battery has to pass through today: utility → aggregator → integrator →
  OEM, with a fee taken at each step, before it reaches the customer's device.
- The fact that this entire chain repeats in full for every new customer — not a one-time cost.
- This is a conceptual/economic diagram, not a product screen.

**What was wrong**
- Not specifically called out this round.

---

## Slide 3 — Problem, at scale

**What must be on this slide**
- Two numbers: 80% of distributed energy fleets never make it past a pilot, and utilities pay an
  estimated $50,000 or more per month, per OEM, to keep a single integration alive.
- Not a product screen — this is a stats slide.

**What was wrong**
- Not specifically called out this round.

---

## Slide 4 — Value redistribution ("Value Sticks")

**What must be on this slide**
- Before: five parties splitting one fee — device owner, OEM, integrator, aggregator, utility.
- After: compressed to device owner, kWh, utility.
- The real number behind this: kWh's program fee is 15% of the value it helps create; the utility and
  customer retain the other 85% (source: `financials.md` §4.1 — gross program value $10.0M, retained
  $8.5M, kWh fee $1.5M).

**What was wrong**
- Called out explicitly: **"nothing to do with an application or a UI."** This was built as a plain
  before/after chain of boxes with no connection to the actual product. Whether this slide is meant to
  show product evidence of the value redistribution, or something else entirely, is unresolved — the
  complaint is recorded as given, not interpreted.

---

## Slide 5 — Solution thesis: connect, normalize, dispatch, verify

**What must be on this slide**
- The four-part framework and a one-line definition of each:
  1. Connect — the gateway speaks the asset's own protocol, on-site.
  2. Normalize — every dialect is turned into one clean model.
  3. Dispatch — setpoints are sent from any platform, live.
  4. Verify — every event is logged, before, during, and after.
- This concept is literally demonstrated by the real gateway Overview screen (system health cards +
  the northbound/gateway/southbound architecture tree), so that screen is the natural evidence for it.

**What was wrong**
- Not named individually in the latest round of feedback, but built the same way as the slides that
  were named: a simplified, invented version of the gateway overview panel inside a shadowed laptop
  frame, not a recreation of the real screen.

---

## Slide 6 — Any asset, any protocol

**What must be on this slide**
- Evidence that the gateway ingests multiple protocols (Modbus TCP, SunSpec Modbus, RS-485, CAN 2.0B,
  MQTT, OCPP) and presents a single IEEE 2030.5 interface upstream.
- The real gateway UI already has this as two actual tabs — **Northbound** and **Southbound** — visible
  in its tab strip. Southbound should show which protocol adapters are actually configured and their
  connection status; Northbound should show the IEEE 2030.5 server configuration (endpoint, certificate
  status, tenant, poll rate).

**What was wrong**
- Called out explicitly: **"there is absolutely no UI. You just pasted it on a laptop screen."** The
  content was a generic three-icon-groups-into-a-box diagram (kWh gateway / OEM integration / asset
  seeker feeding a "universal translator" box) — not a screenshot of anything the product actually
  shows, and not the real Northbound/Southbound tabs.

---

## Slide 7 — Onboarding

**What must be on this slide**
- The real four-step flow: scan a QR code or pair over Bluetooth into the kWh or utility app → the
  gateway discovers every device already wired to it → the customer selects their utility and OEM →
  they select and join available programs.
- This is a phone-in-hand moment. A real screenshot of this flow already exists from earlier in this
  project: an app bar reading "kWh Electric," a "Step 2 of 6" progress indicator, headline "Find gateway
  over Bluetooth," the specific body copy about BLE scanning for unenrolled gateways, an "Enrolled via
  Bluetooth" success state, Utility/Integrator dropdowns, and a bottom tab bar (Devices / Enroll /
  Telemetry / Events).

**What was wrong**
- Called out explicitly: **"Same for number 7"** — no real UI. The content was an invented "discover
  devices" checklist, shown inside a laptop frame even though the real screen this maps to is a phone
  screen, not a laptop screen.

---

## Slide 8 — Visibility and dispatch

**What must be on this slide**
- Evidence that the utility can see every asset (gateway-managed or OEM-integrated) in one place, and
  can deploy a flexibility event / see telemetry / dispatch from the same place.
- The real product has this split across the Grid Intelligence **Asset management** table (already
  faithfully rebuilt in `ui-snippets-handoff.html`) and a **Grid services** / **Dispatch at scale**
  page that has not yet been captured from the live product.

**What was wrong**
- Called out as partial: **"you tried something, but sure."** The asset table portion was closer to
  real, but the "deploy flexibility event" panel next to it was invented, not a capture of the real
  Grid Services or Dispatch at Scale page, and the panel still used a drop shadow.

---

## Slide 9 — Customer payout

**What must be on this slide**
- The real outcome of a dispatch event as the customer would actually see it in the app — most likely
  the **Events** tab (visible in the onboarding screen's tab bar) showing a completed event entry.
- Whether a specific payout dollar figure is a real field in the app today, or a planned/placeholder
  figure, needs to be confirmed before it appears on a real screen.

**What was wrong**
- Called out explicitly: **"there's actually no UI."** The content was a generic invented notification
  card ("You just earned $4.20") with no grounding in any actual app screen.

---

## Slide 10 — Security

**What must be on this slide**
- Evidence of device-level security: certificate-based identity, IEEE 2030.5 device identity, isolation
  between devices so one compromised asset can't reach the fleet.
- The real gateway UI has a dedicated **Security** tab (visible in the same tab strip as Overview,
  Northbound, Southbound, etc.) that has not yet been captured.

**What was wrong**
- Not named individually this round, but built the same way as slides 6/7/9: an invented checklist
  ("mTLS device certificate," "IEEE 2030.5 identity," "zero-trust isolation") plus a row of protocol
  tags, not a capture of the real Security tab.

---

## Slide 11 — One foundation, many apps (grid services ecosystem)

**What must be on this slide**
- The set of applications that run on top of the same gateway/translator layer: demand flexibility,
  digital twin, demand & supply forecasting, peer-to-peer trading, asset health & securitization.
- Who they serve: utility, OEMs, service providers, aggregators, financiers.
- This is a conceptual ecosystem diagram, not a literal product screen — unlike slides 6–10, there may
  not be a single real screen this maps to.

**What was wrong**
- Not named individually. Used rounded cards with drop shadows, which falls under the general
  no-shadows complaint.

---

## Slide 12 — Certifications

**What must be on this slide**
- Two certification tracks: SunSpec (SunSpec Modbus compliance, IEEE 2030.5/CSIP readiness, utility
  program compatibility) and UL + Quality Logic (UL certification readiness, hardware QA and test
  logic, field reliability and manufacturing quality).
- The framing line: this is required to move from pilot deployments to utility-scale rollout.
- Not a product-screen slide by nature — this is compliance/credibility content.

**What was wrong**
- Not named individually. Used card styling with drop shadows.

---

## Slide 13 — Competition

**What must be on this slide**
- A comparison table: kWh Electric against Uplight, Kalki Tech, Texture HQ & Enode, and Molecule
  Systems, across six criteria — OEM integrations, interoperability, gateway, one-time fee, DERMS,
  offline controls.
- The specific yes/no claims per competitor as supplied in Arham's own reference material.

**What was wrong**
- Not named individually. Open item worth flagging: the competitive claims for Texture HQ & Enode and
  Molecule Systems are not independently verified against the master knowledge document — they were
  reproduced as supplied, not fact-checked.

---

## Slide 14 — Timeline

**What must be on this slide**
- Five stages: Today (sample telemetry live, integration platform live, gateway MVP live) → October (3
  OEM integrations, gateway orders open, SunSpec certificate readiness) → January (15 OEM integrations,
  1,000 gateways processed, UL readiness) → April (30 OEM integrations, 10,000 processed / 1,000
  delivered) → June (50,000 processed / 10,000 delivered, edge intelligence launches).

**What was wrong**
- Not named individually. Open item: the month labels (October, January, April, June) don't specify a
  year, so it's ambiguous which calendar year each milestone falls in.

---

## Slide 15 — Unit economics

**What must be on this slide**
- Device software and certificate: $30, ≥90% gross margin.
- OEM integration fee: $1,500 per new OEM, ~88% gross margin.
- Utility platform subscription: $25K–$300K per year, 75–85% margin.
- Device lifecycle: $4–$8 per device per year, 75–85% margin.
- Program management fee: 15% base case, ~90% margin.
- Lifetime value per connected asset: $177 over a modeled seven-year asset life, 83% recurring.
- **Must not include a gateway hardware price** — that figure is contested across 6+ conflicting
  sources in `financials.md` §8 and is explicitly unresolved.

**What was wrong**
- Not named individually. The gateway price was correctly omitted — this constraint needs to hold in
  any rebuild too.

---

## Slide 16 — Market size

**What must be on this slide**
- Global TAM: $4.90B upfront plus $1.10B recurring per year, across 122.6M addressable endpoints
  worldwide.
- India SAM: $671M upfront plus $119M recurring per year, across 15.5M serviceable endpoints in the
  first market.
- Year-5 SOM: $43.0M revenue — 1.07M certified devices, 30 utilities under contract, 450K assets active
  in programs, 6.4% of the India SAM pool.
- All figures must come from `financials.md`, not be approximated.

**What was wrong**
- Not named individually. The nested-circle visual used floating cards with drop shadows.

---

## Slide 17 — Financial projections

**What must be on this slide**
- Five-year revenue: $0.96M → $3.49M → $9.64M → $22.1M → $43.0M (Y1–Y5).
- Recurring share of revenue growing from 30% to 65% over the same period.
- Gross margin growing from 77% to 84%.
- EBITDA break-even in Year 3.
- Five-year cumulative revenue: $79.2M.

**What was wrong**
- Not named individually. The bar chart and its floating stat cards used drop shadows.

---

## Slide 18 — Close

**What must be on this slide**
- A single closing line that restates the thesis from the cover: one gateway makes every energy asset
  visible and dispatchable.
- Framing: this is infrastructure underneath the systems a utility or OEM already runs, not a platform
  they have to separately adopt.

**What was wrong**
- Not named individually.
