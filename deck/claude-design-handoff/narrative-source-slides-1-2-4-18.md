# kWh Electric — 18-slide GPT Image 2 deck reconstruction handoff

## Purpose

Rebuild the visual and interface elements of the original 18-slide kWh Electric GPT Image 2 investor deck as deterministic HTML/CSS/SVG components. The finished HTML should reproduce the final slide PNGs closely while making the interface panels, diagrams, labels, and flows editable.

This is not a request to redesign the story. It is a reconstruction specification.

## Authority order

When references disagree, use this order:

1. `slides/*.png` is the authority for composition, placement, scale, visual hierarchy, and rendered wording.
2. `prompts/*.txt` is the authority for intended exact copy and semantic meaning.
3. This handoff explains the reasoning, component structure, interaction logic, and implementation approach.

Some GPT-generated interface microcopy is decorative or slightly malformed. Rebuild it as clean, legible product UI while preserving the visible meaning. Do not faithfully reproduce accidental misspellings or impossible values.

## Global HTML rendering contract

- Master canvas: exactly `1600px × 900px`, 16:9.
- Build every slide inside `<section class="slide slide-XX">` with `position: relative; width: 1600px; height: 900px; overflow: hidden`.
- Do not use responsive reflow inside the slide. Scale the complete slide at the viewer boundary.
- Screenshot route: `/?slide=01&screenshot=1` through `/?slide=18&screenshot=1`.
- Screenshot mode removes navigation and browser margins.
- Font: DM Sans variable, local asset only.
- Background: warm white, approximately `#FCFBF8`.
- Main black: `#080C09`.
- kWh green: `#07843C`; dark green: `#075E31`; pale green linework: `#B9DEC7`.
- Signal yellow: approximately `#F7B719`, used only for new work, protocol labels, activation points, or the gateway’s one-time revenue wedge.
- Warning red: approximately `#C63028`, used only for integration tangles and broken-state emphasis.
- Muted UI gray: `#56625B`; light rules: `#D7E2DA`.
- Flat design: no gradients, glow, glassmorphism, glossy cards, purple, or large shadows.
- The realistic black gateway and real team portraits may remain raster assets. Rebuild interface panels, connectors, diagrams, icons, charts, and labels as HTML/SVG.

## Global typography

- Primary slide title: 62–82px, weight 700–760, line-height 0.98–1.08.
- Oversized closing/title words may reach 96px.
- Section or step labels: 22–30px, weight 700, uppercase.
- Explanatory text: 17–23px, weight 400–500.
- UI titles: 13–18px, weight 650–700.
- UI labels: 10–14px; important values: 16–24px.
- Giant metrics: 54–82px, weight 700.
- Titles and short labels generally have no terminal punctuation except when the original title is deliberately written as two sentences.

## Shared visual grammar

- Most titles begin 50–75px from the left and 45–85px from the top.
- A short green underline, generally 100–220px wide and 2–4px high, follows the title block.
- The kWh Electric lockup appears in either the top-left or bottom-left, depending on the slide silhouette.
- Connectors are 2–3px green strokes with rounded turns and circular junctions.
- Yellow dotted lines represent value transfer, activation, or exceptional/new work.
- Red lines represent duplicated integration work or market friction.
- Product screens use warm-white panels, thin gray/green borders, 6–10px corner radii, and minimal chrome.
- UI content is evidence nested inside a larger editorial composition; do not let UI panels become generic full-slide dashboards.

## Shared reusable components

Claude should implement these reusable pieces:

- `KwhLockup`
- `GatewayHero`
- `AssetIcon` variants: battery, solar inverter, EV charger, utility meter, flexible load, house battery, utility grid, customer, utility
- `ProtocolPill` variants: SunSpec, Modbus, OCPP, IEEE 2030.5, OpenADR
- `ProductWindow`
- `SidebarNav`
- `MetricCard`
- `TelemetryChart`
- `AssetRegistryTable`
- `AssetMap`
- `DispatchPanel`
- `VerificationPanel`
- `JourneyStep`
- `ActorNode`
- `CapabilityNode`
- `Connector`
- `StatusIcon` variants: check, partial, unavailable, lock, live
- `EvidenceMetric`
- `PortraitCard`

Use inline SVG for all relationship-heavy systems. Create connectors before node labels in the SVG DOM so that edges remain behind objects.

---

## Slide 01 — The universal communications layer for distributed energy

### Narrative job and reasoning

Establish the whole company in one view: kWh is infrastructure connecting physical distributed assets to operational software and the utility grid. The gateway is visually prominent, but the two software surfaces above it establish that the company includes device management, telemetry, and grid intelligence. The slide must feel like an operating system, not a hardware advertisement.

### Exact primary copy

- `The universal communications layer for distributed energy`
- `CONNECT ONCE. USE FOREVER.`
- `kWh Electric`
- Asset labels: `HOME BATTERY`, `EV CHARGER`, `SOLAR INVERTER`, `UTILITY GRID`

### Canvas composition

- Title block: approximately `x=54, y=68, w=770, h=245`; three deliberate lines, black, approximately 76px.
- Green underline: `x=54, y=340, w=207, h=3`.
- Tagline: `x=54, y=378`, green uppercase, approximately 25px.
- Large telemetry window: upper-right, roughly `x=880, y=52, w=675, h=454`.
- Device-management window: center, roughly `x=495, y=343, w=525, h=340`; it overlaps the lower-left of the telemetry window.
- Gateway hero: lower center, roughly `x=520, y=660, w=565, h=205`, layered in front of both application windows.
- Home battery and EV charger sit in the lower-left quadrant; solar inverter and utility grid sit in the lower-right quadrant.
- Green connector lines travel from each asset into the gateway. The final grid segment changes to short yellow dashes to imply dispatch/value activation.
- kWh lockup: bottom-left, roughly `x=52, y=812`.

### UI reconstruction

**Telemetry window:**

- Thin rounded border; kWh Electric and `Grid Intelligence` in the top bar.
- Left sidebar with operational navigation: Device Management, Telemetry, Asset Map, Network Topology, Dispatch at Scale, Event History; customer and administration groups below.
- Page title `Telemetry Dashboard`.
- Four top metrics: `512 ASSETS`, `98% REPORTING`, `16/16 GATEWAYS ONLINE`, `1.24 MW FLEET PEAK (24H)`.
- Main 24-hour line chart labeled `Fleet aggregate (15-min)`; one smooth green daily power curve.
- Bottom-left donut for asset status with online/offline/unreachable legend.
- Bottom-right horizontal distribution bars by asset type.

**Device-management window:**

- Same sidebar and product frame.
- Page title `Device Management`.
- Tabs include `Asset Registry`, `Pending`, `Gateways`, `Certificates`.
- Main table includes device name, type, site, status, last seen, power, and state of charge.
- Use credible example rows such as Home Battery 01, EV Charger 07, Solar Inverter 03; statuses should be mostly Online with one Offline example.

### Flow

Read left-to-right from asset icons, inward through green lines to the gateway, then upward into the overlapping operational screens. The utility-grid icon closes the chain. The gateway is the connection hinge; software is the operational outcome.

### HTML implementation notes

- Use two reusable `ProductWindow` instances with intentional overlap.
- Keep the gateway as the topmost layer.
- Asset connectors should be an SVG underneath the gateway and above the background.
- Do not place a generic browser frame around the entire slide.

---

## Slide 02 — The grid is distributed. Control is not.

### Narrative job and reasoning

Compress the market problem into three memorable failures. The three colored blocks must be understandable within five seconds: device ecosystems are fragmented, every integration is rebuilt, and most flexible capacity remains unused. Faint product UI around the blocks signals that this is an operating-infrastructure problem, not a conceptual sustainability issue.

### Exact primary copy

- `The grid is distributed. Control is not.`
- `FRAGMENTED`
- `30+ OEM surfaces`
- `Every new program pays the integration tax again.`
- `REBUILT`
- `$50–150K per integration`
- `Every new program pays the integration tax again.`
- `UNDERUTILIZED`
- `Only 20% activated`
- `Every new program pays the integration tax again.`

### Canvas composition

- kWh lockup: top-left, approximately `x=48, y=49`.
- Title: `x=75, y=116, w≈830, h≈145`, two lines, approximately 72px.
- Underline: `x=76, y=292, w=158`.
- Three equal rounded blocks span the central/lower area from approximately `x=190` to `x=1352`, each about `380×475` with 34px gaps.
- Green block: fragmented. Yellow block: rebuilt. Coral block: underutilized.
- Faint product navigation appears along the extreme left. Faint telemetry and device registry screens occupy the upper-right and lower-right background. A faint protocol tree sits to the right of the coral block.

### Card internals

**Fragmented block:**

- Top illustration: four vendor clouds, each containing a different asset icon, with crossed/dotted interconnections and an X at the center.
- Large white label `FRAGMENTED`.
- Metric `30+ OEM surfaces` in light green.
- One short explanatory sentence in white.

**Rebuilt block:**

- Top illustration: a maze of black paths entering from the left and exiting to four different user icons on the right.
- Label `REBUILT` in black.
- Metric `$50–150K per integration` in red.
- Repeated-work sentence in black.

**Underutilized block:**

- Top: white circular `20%` progress ring.
- Lower illustration: utility tower, battery, and solar array connected on one baseline.
- Label `UNDERUTILIZED` in white.
- Metric `Only 20% activated` in yellow.

### Flow

The reading order is title → green fragmentation → yellow rebuilding cost → red operational consequence. Color temperature increases as the problem worsens.

### HTML implementation notes

- These are editorial blocks, not clickable dashboard cards.
- Use simple inline SVG illustrations with 3px strokes.
- Background UI should be 8–18% opacity and never compete with the three blocks.

---

## Slide 03 — Distributed energy has crossed the coordination threshold

### Narrative job and reasoning

Explain why the company becomes necessary now. Four developments have converged: asset scale, utility need, protocol maturity, and AI-enabled control. The single horizontal signal rail makes these milestones feel cumulative rather than like unrelated cards.

### Exact copy

- `Distributed energy has crossed the coordination threshold.`
- `DER SCALE`
- `Millions of assets are moving behind the meter.`
- `GRID FLEXIBILITY`
- `Utilities need capacity they can actually call.`
- `OPEN STANDARDS`
- `IEEE 2030.5 and OpenADR already define the language.`
- `AI-NATIVE CONTROL`
- `Agents need a secure read/write plane at the edge.`
- Protocol blocks: `IEEE 2030.5`, `OpenADR`
- `kWh Electric`

### Canvas composition

- Oversized title: `x=54, y=69, w≈1215, h≈150`; two lines, approximately 68px.
- Underline: `x=55, y=259, w=216`.
- Faint network-topology product screen fills the upper-right background at about 12% opacity.
- Continuous green rail: approximately `x=53, y=568, w=1288`; then short yellow dashed continuation to `x≈1545`.
- Four milestone anchors at roughly x positions `240`, `615`, `960`, and `1281`.
- Each anchor has a top illustration, a circular icon below the rail, a green uppercase label, and two lines of supporting copy.
- Lockup: bottom-left.

### Milestone visuals

1. **DER scale:** cluster of batteries, solar, charger, and a house battery; dashed local device connections.
2. **Grid flexibility:** utility tower centered inside a green sine-wave waveform.
3. **Open standards:** stacked outlined boxes for IEEE 2030.5 and OpenADR.
4. **AI-native control:** compact edge device with a brain icon inside a dashed green square and a black lock.

### Flow

The eye follows the rail from left to right. Each milestone advances the thesis: more assets → need for dispatchable capacity → shared language → secure autonomous control.

### HTML implementation notes

- Build the rail and vertical milestone stems in one SVG.
- Keep all explanatory copy outside the illustrations.
- The product screenshot remains decorative evidence only.

---

## Slide 04 — The aggregator is not the market. It is the tax.

### Narrative job and reasoning

State the central market insight. The problem is not that utilities, OEMs, customers, or programs exist; the problem is duplicated integration work between them. The slide uses chaos versus calm to show that kWh removes the repeater layer while preserving the actors and more of the economic value.

### Exact copy

- `The aggregator is not the market. It is the tax.` with `the tax.` in red.
- `BEFORE`
- `Every OEM. Every utility. Every program. Rebuilt.`
- `INTEGRATION TAX`
- `AFTER`
- `One shared communications layer.`
- `Every program reuses the connection.`
- `kWh Electric Communications Layer`
- `Secure. Interoperable. Vendor-neutral.`
- Asset labels: `BATTERY STORAGE`, `SOLAR INVERTER`, `EV CHARGER`, `UTILITY METER`, `FLEXIBLE LOAD`
- Bottom metrics: `UTILITY +15`, `CUSTOMER +15`
- `More program value stays with the people who own and operate the grid.`

### Canvas composition

- Title spans nearly the full width at `x=62, y=72, h≈80`.
- Main visual is divided at about `x=812` by a thin vertical gray line.
- BEFORE occupies approximately the left 48%; AFTER occupies the right 48%.
- A small green chevron at the center divider points from before to after.
- Bottom value rail: `x=52, y=724, w≈1490, h≈106`, thin black border and large segmented metrics.

### BEFORE system

- Utility node on far left; customer node on far right.
- Between them: many OEM cloud, custom API, and integrator nodes.
- Dozens of red solid and dotted arrows cross in both directions.
- A translucent red horizontal band labeled `INTEGRATION TAX` sits across the densest section.
- Actor labels remain readable, but the line tangle should dominate.

### AFTER system

- Five asset icons form a row above one solid green communications bar.
- Utility node connects to the left end of the bar; customer node connects to the right end.
- Each asset drops into the bar through one straight green line.
- The green layer is calm, horizontal, and vendor-neutral.

### Flow

The audience first experiences the red tangle, then crosses the central chevron into the simplified green system, then reads the bottom value-retention outcome.

### HTML implementation notes

- Use one SVG for each side rather than DOM lines.
- Red connectors must remain behind nodes.
- Do not imply kWh replaces the utility or customer; they remain explicit endpoint nodes.

---

## Slide 05 — Connect once. Use forever.

### Narrative job and reasoning

Define the product as a universal translator and control plane. Mixed assets and protocols converge through kWh, then emerge as consistent telemetry, management, policy, and dispatch. Three outcome pillars establish interoperability, automation, and security.

### Exact primary copy

- `Connect once. Use forever.`
- `Any asset. Any protocol. Every program.`
- `TELEMETRY + DISPATCH`
- `INTEROPERABLE`
- `Connect any asset using any protocol.`
- `One integration. Infinite possibilities.`
- `AGENTIC`
- `Edge control with intelligent policies.`
- `Automate today. Adapt tomorrow.`
- `SECURE`
- `End-to-end security with offline resilience.`
- `Your data. Your control.`
- Security card: `SECURE. OFFLINE. AT THE EDGE.` / `Local control continues—always.`
- Policy card: `POLICY SURFACE (API + UI)` / `Set rules. Enforce locally or remotely.`

### Canvas composition

- Lockup top-left at `x=48, y=35`.
- Title at `x=49, y=100`, approximately 72px; underline below.
- Green subhead at `x=52, y=216`.
- Asset/protocol column: `x=50–380`, vertically centered.
- Gateway hero: center, roughly `x=489, y=360, w=337, h=212`.
- Two product windows: right side, telemetry above and device management below, spanning `x≈1014–1577`.
- `TELEMETRY + DISPATCH` label centered above the windows.
- Bottom outcome row spans all three columns from `y≈755` to `865`, separated by vertical rules.

### Input side

- Asset rows: Battery Storage → SunSpec; Solar Inverter → SunSpec; EV Charger → OCPP; Utility Meter → Modbus; Any Asset → Modbus.
- Each protocol appears in a white rounded pill with a green border and a small protocol icon/color accent.
- Green orthogonal connectors converge into the left side of the gateway.

### Output side

- A green line leaves the gateway toward the product screens.
- A small lock badge sits on the line.
- A dashed branch descends to the policy-surface card.
- A vertical dashed branch descends from the gateway to the offline-edge card.

### UI windows

- Telemetry: same metrics and line chart language as slide 01.
- Device management: registry table with statuses and controls.
- UI is detailed enough to feel real but is secondary to the translation flow.

### HTML implementation notes

- This slide should use actual reusable UI components because its claim is the unified product surface.
- Protocol pills and connector routes must line up precisely.
- Gateway and UI screens should not cast shadows.

---

## Slide 06 — One edge gateway turns every asset into grid-ready capacity

### Narrative job and reasoning

Explain the gateway architecture in a single technical diagram. This is the most hardware-forward slide: inputs on the left, secure edge in the middle, standard northbound interface and control plane on the right, offline-safe behavior below.

### Exact copy

- `One edge gateway turns every asset into grid-ready capacity.` with `grid-ready` in green.
- `ANY ASSET`
- Asset labels: `BATTERY STORAGE`, `SOLAR INVERTER`, `EV CHARGER`, `UTILITY METER`, `FLEXIBLE LOAD`
- Protocols: `SunSpec`, `OCPP`, `Modbus`
- `kWh EDGE`
- `Secure identity  •  Store-and-forward  •  OTA`
- `OPEN GRID STANDARDS`
- `IEEE 2030.5  •  OpenADR`
- `ONE CONTROL PLANE`
- `Telemetry  •  Dispatch  •  Verification  •  Agent policy`
- `OFFLINE-SAFE`
- `Local control continues—even when the cloud does not.`

### Canvas composition

- Centered two-line title across the top from approximately `x=270` to `x=1395`.
- Left input column begins at `x=62`; five assets stacked from y≈250 to y≈698.
- Protocol pills sit near x≈310 and connector arrows terminate at the gateway.
- Gateway hero centered near `x=535, y=379, w=325, h=191`.
- `kWh EDGE` heading directly above gateway.
- Product window at upper-right around `x=1103, y=219, w=451, h=419`.
- Green arrow labeled open standards runs from gateway to window.
- Offline-safe rail sits beneath the gateway and spans x≈499–935; device icons hang from it.
- One lock node is centered on the offline rail.

### UI window

- Telemetry dashboard at top with four metrics and a power chart.
- Lower-left donut chart labeled dispatch status.
- Lower-right verification table with events verified, baseline accuracy, and total impact.
- Under the window, the `ONE CONTROL PLANE` label and four capabilities appear as one line.

### Flow

Input assets → protocol normalization → secure kWh Edge → open grid standards → common control plane. A second downward branch proves local control persists during cloud loss.

### HTML implementation notes

- Use orthogonal connectors with arrowheads from protocols to gateway.
- Use the same asset and UI components as slides 01 and 05.
- The offline rail should look like a functional branch, not decorative iconography.

---

## Slide 07 — Grid participation should feel as simple as connecting headphones

### Narrative job and reasoning

Translate technical infrastructure into a simple owner experience. The slide must show that grid participation is not an abstract registration process: the owner connects a device, sees compatible assets, grants explicit permissions, chooses a program, and receives verified value. Control and revocability remain visible throughout.

### Exact primary copy

- `Grid participation should feel as simple as connecting headphones.`
- `1 CONNECT` / `Scan a QR code or pair by Bluetooth.`
- `2 DISCOVER` / `kWh finds every compatible asset.`
- `3 AUTHORIZE` / `The customer controls consent and access.`
- `4 JOIN` / `Choose a utility or OEM program.`
- `5 EARN` / `Dispatch is verified. Dollars are delivered.`
- `YOUR ASSET. YOUR DATA. YOUR CHOICE.`

### Canvas composition

- Title: approximately `x=52, y=72, w=1150, h=130`; two lines, 66–70px.
- Underline at `x=54, y=226, w≈118`.
- Journey step headers form one row from x≈55 to x≈1510 at y≈273–368.
- Each step owns a vertical column approximately 270–300px wide.
- A thin green journey line with shallow curves connects the five numbered green circles.
- Main UI/illustration band occupies y≈395–706.
- Lockup bottom-left; a long horizontal green arrow travels along the bottom into the final ownership statement at right.

### Step 1 — Connect

- Left: a tall home-battery cabinet with a visible QR code.
- Right: black-outline phone displaying `kWh Electric`, a large Bluetooth symbol, `Pairing…`, and a completed check state.
- A short dotted green line connects the physical device to the phone.

### Step 2 — Discover

- Three automatically discovered assets: Solar Inverter / Roof Array, Home Battery / Basement, EV Charger / Garage.
- Each asset uses a simple physical icon, a name/location pair, and a green check.
- Small green label `Auto-discovered` beneath the list.

### Step 3 — Authorize

- White consent panel with green border titled `Share data with kWh Electric`.
- Intro copy: `Allow kWh Electric to securely access your asset data.`
- Three permission rows with icons and on/off toggles:
  - `Telemetry` / `Real-time performance`
  - `Status & Events` / `Operations and alerts`
  - `Device Info` / `Model and configuration`
- Green `Authorize` button; small `Cancel` link.
- Beneath the card, a shield/lock icon and `You can revoke access anytime.`

### Step 4 — Join

- White program-selection panel titled `Join a program`.
- Three radio options:
  - `Peak Savings Program` / `Your Utility`
  - `EV Smart Charge` / `Your Utility`
  - `Home Battery Rewards` / `OEM Program`
- Green `Join program` button.

### Step 5 — Earn

- Upper status card: `Dispatch verified`, green check, a small green response curve with yellow dispatch window, time labels, and `Event: Peak Reduction`, `4:00 PM – 6:00 PM`.
- Lower payment card: `Payment delivered`, green check, `$42.18`, `Credited to your account`, and date.

### Flow

The numbered line is the primary reading path. The bottom arrow reinforces that the owner retains agency from start to finish. Discovery is automatic, authorization is explicit, program selection is voluntary, and earning is verified.

### HTML implementation notes

- Each step should be an independent component but aligned to one shared baseline.
- Use SVG curves between step numbers.
- Preserve large step labels and readable mobile UI; do not shrink the panels into realistic phone screenshots.

---

## Slide 08 — One connection turns months of integration into a repeatable workflow

### Narrative job and reasoning

Show the corresponding utility workflow. Unlike slide 07’s friendly owner journey, this slide is operational and data-dense. Five application panels demonstrate that design, targeting, enrollment, dispatch, verification, and settlement happen inside one repeatable control process. The return loop proves that the same connection is reused.

### Exact primary copy

- `One connection turns months of integration into a repeatable workflow.`
- `1 DESIGN` / `Define the program and policy.`
- `2 TARGET` / `Find eligible capacity across OEMs.`
- `3 ENROLL` / `Consent, identity, and security are built in.`
- `4 DISPATCH` / `Call capacity through one control plane.`
- `5 VERIFY & SETTLE` / `Measure performance and deliver payment.`
- `THE NEXT PROGRAM REUSES THE SAME CONNECTION.`

### Canvas composition

- Small lockup `kWh Grid Intelligence` at top-left.
- Title: x≈51, y≈92, w≈1230, two lines, approximately 65px.
- Five step headers at y≈250–320.
- Five tall product panels sit below, each approximately 280px wide and 390px high, from x≈46 through x≈1544.
- A large green return loop runs under all five panels, beginning below verification and returning to design.
- The loop contains a centered rounded label with the reuse statement.

### Panel 1 — Design

- Product-window title `Program`; green action `Create program`.
- Form fields: Program name, Program type, Objective, Policy, Performance window, Baseline method, Measurement & verification.
- Dispatch rules section: minimum event duration, minimum notice, maximum events/day, ramp rate.
- Bottom actions `Cancel` and green `Save program`.

### Panel 2 — Target

- Title `Asset Map`.
- Filter row for asset type, OEM, status; optional `Full Grid` state.
- Large map of the United States with green and yellow capacity points.
- Legend `Eligible capacity (MW)`.
- Bottom subpanels show eligible assets by OEM and asset types.

### Panel 3 — Enroll

- Title `Enrollment`; action `Bulk enroll`.
- Selected asset header with name, site ID, location, and capacity.
- Three evidence sections: `Customer consent`, `Device identity`, `Security`.
- Consent status must be positive; device identity includes model, firmware, last seen; security includes gateway, connection, and valid certificate.
- Bottom actions `View details` and green `Enroll`.

### Panel 4 — Dispatch

- Title `Dispatch`; action `Create event`.
- Large pale-yellow `Dispatch now` block with event ID, start, duration, target, ramp, and participating assets.
- Allocation preview as a yellow progress bar, target approximately 25 MW.
- Dispatch method, fallback, and notification states below.
- Bottom actions `Cancel` and yellow `Dispatch`.

### Panel 5 — Verify & settle

- Title `Telemetry`; time controls and asset filter.
- Green fleet response chart.
- `Event evidence` table showing event ID, start/end, target, actual average, and performance.
- `Settlement` section showing ready status, amount, and capacity-payment type.
- Green `Export` button.

### Flow

Step headers and panels move left-to-right. The bottom loop travels from verification back to design, making reuse—not merely linear completion—the central message.

### HTML implementation notes

- Use a shared `ProductWindow` shell but vary each panel’s internal component.
- Panels should align precisely in height and baseline.
- Build the return loop as SVG behind the panels and the label above it.

---

## Slide 09 — Connect the asset once. Compound the software forever.

### Narrative job and reasoning

Show how one persistent connection becomes a platform for multiple applications. The gateway and connected asset are the stable center; each application uses the same identity, telemetry, control, and verification. The orbit composition communicates compounding without reading like a product-menu grid.

### Exact primary copy

- `Connect the asset once.`
- `Compound the software forever.`
- `ONE PERSISTENT CONNECTION`
- `Telemetry  •  Identity  •  Control  •  Verification`
- `DEMAND FLEXIBILITY`
- `DIGITAL TWIN`
- `DEMAND + SUPPLY FORECASTING`
- `PEER-TO-PEER TRADING`
- `ASSET MANAGEMENT`
- `The value stack already exists. kWh standardizes the path to it.`

### Canvas composition

- Title block at `x=53, y=52`, two lines, approximately 57px.
- Underline and persistent-connection label beneath the title.
- Central gateway plus white battery cabinet around `x=660–980, y=495–640`.
- Bright green oval ring surrounds the center; two or three larger pale-green orbital ellipses fill most of the canvas.
- Five application labels and UI fragments occupy the outer orbit:
  - Digital Twin at left-center.
  - Demand Flexibility above center.
  - Demand + Supply Forecasting upper-right.
  - Peer-to-Peer Trading lower-left.
  - Asset Management lower-right.
- Bottom statement centered across the slide with a shield icon.

### Application fragments

**Digital twin:** small isometric battery/site illustration with state of charge, power, voltage, temperature, and health values.

**Demand flexibility:** small fleet aggregate chart next to a dispatch status card showing event window, response, and complete state.

**Forecasting:** line chart comparing forecast versus actual; side metrics for today’s peak, confidence, and net energy.

**Peer-to-peer trading:** compact market table with buy offer, sell offer, cleared price, counterparty verification, and completed settlement. Treat it as a conceptual future surface, not a live-market claim.

**Asset management:** donut status chart, online/offline/unreachable legend, fleet health, alerts, and update status.

### Flow

The eye starts at the persistent connection statement, drops into the central connection, and then travels around the orbit. Dotted radial links prove every application reuses the center rather than creating a new integration.

### HTML implementation notes

- Build orbit lines in SVG with low-opacity green strokes.
- UI fragments should be individual, editable components rather than screenshots.
- Keep the center visually dominant and the outer products evenly weighted.

---

## Slide 10 — Hardware is access. Recurring software is the profit pool.

### Narrative job and reasoning

Separate the one-time access mechanism from the long-lived economics. The black gateway enters a seven-year value ribbon: a narrow yellow upfront wedge followed by a long green recurring software lifecycle. The alternative certified software-only path prevents the audience from interpreting hardware as mandatory.

### Exact primary copy and values

- `Hardware is access.`
- `Recurring software is the profit pool.`
- `7-YEAR REVENUE / CONNECTED ASSET`
- `$199` / `GATEWAY LIST`
- `$65` / `LANDED COGS`
- `YEAR 1` through `YEAR 7`
- Years 1–3: `Recurring Lifecycle Revenue`
- Years 4–5: `Connector Revenue`
- Year 6: `Program Revenue`
- `~$177` / `TOTAL REVENUE PER CONNECTED ASSET`
- `~$147` / `RECURRING`
- `83%` / `OF LIFETIME REVENUE IS RECURRING`
- `15%` / `PROGRAM ATTACH`
- `Never billed to the end customer.`
- `$30 CERTIFIED SOFTWARE-ONLY PATH`

### Canvas composition

- Title: x≈47, y≈56, w≈1290, h≈150; two lines, approximately 68px.
- Underline around y≈235.
- Gateway hero enters from the left at y≈370–565.
- Revenue ribbon begins around x≈350 and extends to x≈1320.
- Yellow `$199` wedge occupies the first narrow segment.
- Seven green year segments occupy the middle.
- A beveled green outcome block at the end contains the three major economics.
- Circular 15% program-attach rule sits to the right.
- `$65 LANDED COGS` is anchored beneath the yellow wedge.
- Software-only path spans most of the lower third as a long outlined rounded rail.
- Lockup bottom-left.

### Flow

The physical gateway begins the path but quickly gives way to the much longer recurring ribbon. The right-side summary condenses the lifecycle. The bottom rail shows a software-only alternative, proving that access can also be embedded or certified.

### HTML implementation notes

- Use CSS clip-path or SVG polygons for the wedge and beveled outcome block.
- Numbers must remain exact and dominant.
- Do not add extra economic assumptions or present the values as historical revenue.

---

## Slide 11 — A shared hub collapses the N×N integration market

### Narrative job and reasoning

Make the many-to-many integration problem mathematically visual. The left side must feel painfully dense; the right side must look obviously manageable. Market values below translate connection compression into a monetizable endpoint opportunity.

### Exact copy and values

- `A shared hub collapses the N×N integration market.` with `A shared hub` in green.
- `POINT-TO-POINT`
- `10 utilities  ×  25 OEMs  ×  10 applications`
- `600 CONNECTIONS`
- `93% FEWER CONNECTIONS`
- `SHARED kWh HUB`
- `45 CONNECTIONS`
- `122.64M GLOBAL ENDPOINTS`
- `$4.90B UPFRONT OPPORTUNITY`
- `$1.10B / YEAR RECURRING OPPORTUNITY`

### Canvas composition

- Title spans top at x≈55, y≈55.
- Left comparison system occupies x≈75–605 and y≈215–560.
- Central reduction callout occupies x≈675–870.
- Right shared-hub system occupies x≈920–1510.
- Three giant market metrics form the bottom band from y≈670 to 810, separated by thin vertical rules.
- Lockup bottom-left.

### Left system

- Ten utility icons in a vertical column.
- Ten representative OEM/factory icons in a middle column.
- Ten application icons in a right column.
- Dense red line fans connect every stage, intentionally producing a field of crossing lines.
- `600 CONNECTIONS` sits beneath in red.

### Center callout

- Short green horizontal rule.
- Giant `93%` in green; `FEWER CONNECTIONS` beneath in black.
- Green rightward arrow.

### Right system

- Vertical utility column on left and application column on right.
- Realistic gateway acts as shared kWh hub in the center.
- Clean green fan-in/fan-out connections.
- `45 CONNECTIONS` beneath in green.

### Flow

The slide invites direct visual comparison before the audience reads the calculations. The market values are the conclusion, not separate charts.

### HTML implementation notes

- Generate line fans algorithmically in SVG from fixed node coordinates.
- Keep red lines thin enough to show density without becoming an opaque block.
- Exact market values must be treated as modeled claims and preserved verbatim.

---

## Slide 12 — Built through discovery. Proven on operating assets.

### Narrative job and reasoning

Demonstrate credible pre-seed execution. The slide uses a single evidence chain rather than disconnected vanity cards. Customer discovery flows into a live stack, operating plants, program experience, implementation partners, and an upcoming US commercial milestone.

### Exact copy and values

- `Built through discovery.`
- `Proven on operating assets.`
- `200+ CUSTOMER INTERVIEWS`
- `LIVE EDGE + CLOUD + UTILITY SURFACES`
- `2 OPERATING PLANTS SINCE DEC 2025`
- `10 AGGREGATORS ONBOARDED`
- `9 OF 40 IMPLEMENTATION VENDORS SELECTED`
- `FIRST US COMMERCIAL INSTALLS: MONTHS AWAY`

### Canvas composition

- Title block upper-left at x≈52, y≈58; two lines, approximately 60px.
- Underline at y≈213.
- A dotted green evidence line runs from x≈145 to x≈1525 around y≈640, ending in an arrow.
- Five large circular nodes sit on this line.
- Customer interview chat symbols occupy the far left above the first node.
- Gateway and stacked telemetry/device-management windows occupy x≈270–620.
- Faint map and two operating-plant icons occupy the center.
- Event History and Program Analytics windows occupy the right-center.
- Each node’s giant metric and descriptor sits beneath the line.
- Lockup bottom-left.

### UI evidence

- Telemetry window: live line chart and operational metrics.
- Device-management window: registered assets with status.
- Event History window: active demand-response events, dispatch issued, settlement window, event completed; lower device-response summary.
- Program Analytics window: Ministry of Power demand-flexibility program, aggregator and implementation-vendor counts, performance summary.

### Flow

Left-to-right chronology: interviews → live product surfaces → plants → program actors → implementation ecosystem → US commercialization. A faint map line supports geographic/operating continuity.

### HTML implementation notes

- The evidence line is the organizing element; UI fragments should float above it without becoming equal cards.
- Treat “10 aggregators” as prior program/policy experience, not signed current customers.
- Do not add customer logos, contracts, or revenue.

---

## Slide 13 — Distribute through the channels already touching the asset

### Narrative job and reasoning

Explain go-to-market without confusing channels with buyers. Device owners and assets enter through kWh; OEMs, installers, aggregators, and financiers help distribute and operate the connection; utilities and customers receive data, capacity, control, and value. The lower motion—land, expand, compound—shows how a first deployment grows into recurring software economics.

### Exact primary copy

- `Distribute through the channels already touching the asset.`
- `DEVICE OWNERS`
- Asset labels: `BATTERY STORAGE`, `SOLAR INVERTER`, `EV CHARGER`, `UTILITY METER`, `ANY ASSET`
- `NEUTRAL COMMUNICATIONS LAYER`
- Channel labels: `OEMs`, `INSTALLERS`, `AGGREGATORS`, `FINANCIERS`
- `Secure. Protocol-agnostic. Always on.`
- `UTILITIES` / `Visible capacity. Grid reliability. Better utilization.`
- `CUSTOMERS` / `Lower bills. More control. Resilient energy.`
- `DATA & CAPACITY`
- `1 LAND` / `Gateway or certified software`
- `2 EXPAND` / `More OEM profiles and programs`
- `3 COMPOUND` / `Recurring software and program attach`
- `Channels install the connection. Utilities and customers keep the value.`

### Canvas composition

- Title upper-left: x≈55, y≈50, w≈950, two lines, around 59px.
- Lockup upper-right.
- Main channel diagram occupies y≈220–620.
- Device-owner asset stack runs down the left edge.
- Gateway hero sits at x≈350–640, y≈336–510.
- Neutral communications rail runs horizontally from gateway to outcomes at y≈428.
- Four channel nodes hang from the rail across the center.
- Utilities and customers appear as two large outcome nodes on the right.
- Lower third holds three equally spaced GTM stages with arrows.
- Bottom statement sits inside a long outlined rounded rail.
- Small legend bottom-right distinguishes solid green `DATA & CAPACITY` from dotted yellow `VALUE ($)`.

### Main flow

- Green connectors bring five asset types into the gateway.
- A solid green rail carries data and capacity rightward.
- Dashed outline and central lock indicate the neutral secure layer.
- Channel nodes are attached beneath the rail; they enable distribution but are not final outcomes.
- Utilities and customers receive solid green arrows.
- Yellow dotted value arrows point back from outcome nodes toward the ecosystem.

### Lower commercial motion

1. **Land:** gateway or certified-software icons.
2. **Expand:** growing library of battery, solar, charger, meter, and additional profile icons.
3. **Compound:** monitor, cloud/recurrence symbol, and program calendar with verification check.

### HTML implementation notes

- Use one large SVG architecture diagram for the upper system.
- Use semantic green/yellow line styles consistently.
- Keep channels visually smaller than utilities and customers.

---

## Slide 14 — The market has software, gateways, and clouds. It does not have a neutral communications layer.

### Narrative job and reasoning

Position kWh across category capabilities rather than attacking named competitors. kWh is the only lane with the full combination of OEM-agnostic edge, open grid standards, mass-node economics, offline local control, and a neutral utility/customer relationship. The closing sentence converts a matrix into a memorable strategic conclusion.

### Exact copy

- `The market has software, gateways, and clouds.`
- `It does not have a neutral communications layer.`
- Column labels: `kWh ELECTRIC`, `SUPER-APIs`, `ENTERPRISE GATEWAYS`, `DERMS / VPP`, `OEM CLOUDS`
- Row labels: `OEM-AGNOSTIC EDGE`, `OPEN GRID STANDARDS`, `MASS-NODE ECONOMICS`, `OFFLINE LOCAL CONTROL`, `NEUTRAL UTILITY + CUSTOMER LAYER`
- `Most products add another interface. kWh deletes the repeater layer.` with the final clause in green.

### Canvas composition

- Lockup at x≈48, y≈35.
- Two-line title spans x≈52–1460, y≈94–210, approximately 56px.
- Comparison matrix occupies x≈55–1540, y≈249–733.
- Row icons and labels occupy the left 400px.
- Five vertical category lanes occupy the remaining width.
- kWh lane has a green border and pale green fill; other lanes use thin gray boundaries and warm-white fill.
- Conclusion runs across the bottom at y≈779–835 in approximately 49px type.

### Capability symbols

- Full capability: green outlined circle with green check.
- Partial capability: amber half-filled circle.
- Absent: light-gray circle with horizontal dash.
- kWh has full checks in all five rows.
- Other categories use restrained mixtures of partials and absences; do not turn this into red attack language.

### Flow

Read title → capability rows → scan across category lanes → conclusion. The green kWh column is the vertical anchor; the final green phrase states the category distinction.

### HTML implementation notes

- Implement as CSS Grid with fixed row/column tracks, not an HTML `<table>` with browser-dependent sizing.
- Category-level comparison only; do not introduce competitor logos or named-company claims.
- Use `aria-label` descriptions for the check/partial/absent states.

---

## Slide 15 — Every deployment expands the translation graph

### Narrative job and reasoning

Explain the moat as accumulated integration knowledge. The small diagrams on the left show how the graph densifies from one deployment to ten to one hundred. The center shows the reusable translation layers around the gateway. The right shows the growing application and operational surface. The next connection becomes easier because device profiles, protocol adapters, deployment knowledge, policy, and application relationships are already present.

### Exact copy

- `Every deployment expands the translation graph.`
- `1 DEPLOYMENT`
- `10 DEPLOYMENTS`
- `100 DEPLOYMENTS`
- Central layers: `APPLICATION SURFACE`, `POLICY + SECURITY`, `DEPLOYMENT KNOWLEDGE`, `PROTOCOL ADAPTERS`, `DEVICE PROFILES`
- Application outcomes: `ANALYTICS`, `OPERATIONS`, `MARKETPLACE`
- Operational outcomes: `ACCESS CONTROL`, `COMPLIANCE RULES`, `ENCRYPTION STANDARDS`, `EMS / SCADA`, `CLOUD`, `DATA LAKES`
- `More assets understood. More programs reusable. Lower marginal integration work.`
- `THE NEXT CONNECTION GETS EASIER.`

### Canvas composition

- Compact title upper-left at x≈44, y≈32; approximately 41px, three lines.
- Left evidence column occupies x≈43–410.
- Central translation graph occupies x≈500–1090 and y≈130–755.
- Right application/outcome column occupies x≈1120–1545.
- Bottom compounding statement travels from x≈440 to x≈1170, then routes into a callout at lower-right.

### Left progression

- Three sections divided by green dashed horizontal rules.
- Each section begins with grids of asset icons on the left and a small connection graph on the right.
- `1 DEPLOYMENT`: four asset lines converge into a small graph with one yellow activation node.
- `10 DEPLOYMENTS`: more asset rows and a slightly denser reusable graph.
- `100 DEPLOYMENTS`: large asset matrix and a dense green network with several yellow new-work nodes.

### Central graph

- Realistic gateway at the center.
- Five large white rounded layer labels distributed vertically around it.
- Green and pale-dotted network edges weave between circular junctions, the five layers, gateway, and outside outcomes.
- Solid green lines mean learned/reusable relationships; pale dotted lines mean possible or not-yet-activated relationships.

### Right outcomes

- Top row: analytics, operations, marketplace icon boxes.
- Middle: a simplified network-topology product window attached to the graph.
- Lower rows: security/access and infrastructure outcome icons.
- Bottom: physical asset icons.
- Final rounded callout includes a plus icon and `THE NEXT CONNECTION GETS EASIER.`

### Flow

Read scale progression on the left, then inspect the reusable center, then see expanding products and integrations on the right. The bottom line states the economic consequence of the graph.

### HTML implementation notes

- Build the center and left mini-graphs in SVG from arrays of fixed nodes and edges.
- Do not animate the graph in screenshot mode; optional progressive animation may be used in presentation mode.
- Keep labels above graph lines and preserve a clear visual hierarchy.

---

## Slide 16 — The next chapter turns a deployed product into repeatable infrastructure

### Narrative job and reasoning

Convert the current product into an execution roadmap without inventing dates. A single rising curve presents four chapters: what exists now, what needs certification, what must be deployed commercially, and what becomes repeatable at scale. The curve implies compounding progress rather than a rigid calendar.

### Exact copy

- `The next chapter turns a deployed product into repeatable infrastructure.`
- `NOW`
  - `Live edge + cloud stack`
  - `Two operating plants`
- `CERTIFY`
  - `Hardware, security, and open-standard certification`
  - `Expand the OEM profile library`
- `DEPLOY`
  - `First US commercial installs`
  - `Utility and customer programs`
- `SCALE`
  - `Repeatable channel deployment`
  - `More grid applications`
  - `Recurring program revenue`

### Canvas composition

- Title occupies upper-left x≈62, y≈54, w≈690, three lines, approximately 57px.
- A thick rising green curve begins near x≈62, y≈405 and rises to an arrow at x≈1560, y≈100.
- Four milestone circles with green outlines and yellow centers sit at x≈220, 580, 948, 1297.
- Dotted yellow stems descend from each milestone to its chapter heading.
- Four chapter columns occupy the bottom two-thirds.
- Lockup bottom-left.

### Chapter visuals

**Now:** gateway plus telemetry window; live/cloud and plant icons.

**Certify:** gateway plus device-management screen with no assets registered; security/certification and profile-library icons.

**Deploy:** house battery, EV charger, inverter, utility tower above a telemetry screen; program and commercial-building icons.

**Scale:** gateway centered inside multiple green connection rings, linked to battery, inverter, charger, solar, and grid; channel and recurring-revenue icons.

### Flow

The curve is the reading path. Each milestone’s text and evidence sit below it. The line steepens toward scale, signaling operating leverage.

### HTML implementation notes

- Render the rising curve as a cubic SVG path.
- Use fixed milestone x positions and align chapter text to each stem.
- Do not add dates, counts, certifications already achieved, or revenue targets.

---

## Slide 17 — Built by people who have deployed grid software before

### Narrative job and reasoning

Establish founder credibility and full-time engineering depth. Arham is larger and visually primary because he is the founder and CEO. Sudheer and Yuvaraju are grouped under full-time engineering without being promoted to founders. The lower founder-story strip explains the sequence from India’s energy stack work to kWh.

### Exact copy

- `Built by people who have deployed grid software before.`
- `ARHAM SHAH`
- `FOUNDER & CEO`
- `Tesla V2G  •  Ministry of Power  •  200+ customer interviews`
- `FULL-TIME ENGINEERING`
- `SUDHEER KUMAR`
- `Deployment engineering  •  AutoGrid experience`
- `YUVARAJU MEENUGA`
- `Integrations engineering  •  Uplight experience`
- `From open-network demand flexibility to the universal communications layer.`
- Story steps:
  - `Returned to India`
  - `Worked with Nandan Nilekani on the Ministry of Power energy stack`
  - `Designed demand flexibility`
  - `Built the neutral communications layer`

### Canvas composition

- Title: x≈67, y≈76, w≈850, two lines, around 57px.
- Lockup upper-right.
- Arham portrait: x≈84, y≈236, w≈360, h≈325; name/role to its right.
- Arham experience line directly beneath portrait.
- Sudheer portrait: x≈862, y≈277, w≈241, h≈269.
- Yuvaraju portrait: x≈1235, y≈277, w≈235, h≈269.
- `FULL-TIME ENGINEERING` centered above the two engineering portraits with a thin green bracket.
- A thin green horizontal line connects the three portrait anchor dots.
- Founder-story strip spans x≈60–1538, y≈672–850 inside a thin rounded green border.

### Founder-story strip

- India outline and opening statement on the left.
- Vertical separator.
- Four evenly spaced steps with simple icons and right-facing green chevrons.
- Final gateway icon represents the neutral communications layer.

### Flow

Read founder first, then full-time engineering team, then the bottom chronology that explains why this team is building this product.

### HTML implementation notes

- Use the exact approved portraits as raster images; no generated replacements.
- Use object-fit cover with the same crops.
- Maintain role accuracy: only Arham is labeled founder.

---

## Slide 18 — Make every distributed asset grid-ready

### Narrative job and reasoning

Resolve the deck with a clear infrastructure ambition and three execution verbs. The left side states the mission and near-term actions; the right side visualizes a gateway-centered network and an operating asset map. The composition echoes slide 01 but is more expansive and future-facing.

### Exact copy

- `Make every distributed asset grid-ready.` with `grid-ready.` in green.
- `We are building the communications standard between the asset, the grid, and every application that follows.`
- `CERTIFY` / `Production hardware and open standards`
- `DEPLOY` / `First US commercial programs`
- `SCALE` / `A reusable connection across utilities, OEMs, and applications`
- `kWh Electric`
- `kwhelectric.io`
- `PAY ONCE. USE FOREVER.`

### Canvas composition

- Left narrative column: x≈55–720.
- Giant title begins at x≈56, y≈69 and occupies four lines; last line green.
- Underline around y≈400.
- Supporting paragraph around x≈58, y≈438, w≈560.
- Three action columns begin around y≈545 and are separated by thin vertical rules.
- Lockup, website, and closing phrase sit bottom-left.
- Right visual field occupies x≈760–1550.
- Gateway hero around x≈1030, y≈220, w≈330, h≈130.
- Circular/radial asset network surrounds it from y≈55 to 475.
- Large asset-map product window sits below around x≈875, y≈494, w≈580, h≈318.

### Radial network

- Gateway sits at the center of concentric pale-green rings and a faint geographic/network grid.
- Six surrounding nodes: solar, home battery, EV charger, utility grid, people/customers, and city/industry.
- Green lines connect every node to the gateway.
- Yellow activation points appear at major junctions; small green dots spread outward to imply network scale.

### Asset-map UI

- Left sidebar with kWh Grid Intelligence navigation.
- Main title `Asset Map`.
- Large city map with many green asset markers.
- Top-right controls such as Full Grid, Energy Flow, Prepare Dispatch.
- Right-side energy-flow chart and supply breakdown.

### Flow

The title states the mission; certify/deploy/scale turn it into an execution plan; the radial network and map show the infrastructure outcome. The closing lockup and `PAY ONCE. USE FOREVER.` complete the brand memory.

### HTML implementation notes

- Use SVG for the radial network and a reusable `AssetMap` component below it.
- Gateway is the center of the visual but should not overwhelm the software/map surface.
- Do not add a fundraising amount, partner logos, revenue claim, or unverified deployment count.

---

## Suggested project structure

```text
kwh-deck/
  public/
    fonts/DMSans-Variable.ttf
    images/gateway.png
    images/team/arham.png
    images/team/sudheer.png
    images/team/yuvaraju.png
  src/
    components/
      SlideFrame.tsx
      KwhLockup.tsx
      GatewayHero.tsx
      AssetIcon.tsx
      ProductWindow.tsx
      TelemetryDashboard.tsx
      DeviceManagement.tsx
      AssetMap.tsx
      DispatchPanel.tsx
      ProtocolPill.tsx
      JourneyStep.tsx
      ActorNode.tsx
      ConnectorSvg.tsx
    slides/
      Slide01.tsx
      ...
      Slide18.tsx
    styles/
      tokens.css
      slides.css
```

## Build and QA order

1. Build the 1600×900 fixed slide shell and local DM Sans loading.
2. Build the shared lockup, gateway, asset icons, connector SVG, and product-window system.
3. Reconstruct slide 01 first; it establishes the product-UI scale and brand geometry.
4. Reconstruct slide 04 next; it establishes before/after network semantics.
5. Build slides 05–08 to validate reusable product and journey components.
6. Build slides 09–16 using the shared system components and bespoke SVG layouts.
7. Build slides 17 and 18 after final portrait and map assets are in place.
8. Capture every slide at 1600×900.
9. Create a five-column contact sheet and compare visual rhythm to `deck-montage.png`.

## Acceptance checklist

- [ ] All 18 slides render at exactly 1600×900.
- [ ] DM Sans loads locally with no fallback-font geometry shift.
- [ ] Every headline and important label matches the final PNG or exact prompt copy.
- [ ] UI fragments are editable HTML/SVG, not screenshots of complete slides.
- [ ] Gateway and approved portraits are the only major raster subjects.
- [ ] The visual hierarchy remains editorial: one claim and one composition per slide.
- [ ] Product windows use consistent sidebar, frame, table, chart, and status components.
- [ ] Connector colors preserve meaning: green=data/control, yellow=value/new activation, red=duplicated integration work.
- [ ] Slides 04, 11, and 15 preserve network semantics and keep edges behind nodes.
- [ ] Slide 07 makes owner consent and revocability explicit.
- [ ] Slide 08 closes a visible loop showing connection reuse.
- [ ] Slide 10 preserves all modeled values exactly and does not imply historical revenue.
- [ ] Slide 12 does not convert prior program evidence into current customer traction.
- [ ] Slide 14 remains a category comparison without invented competitor details.
- [ ] Slide 16 contains no invented dates or commitments.
- [ ] Slide 17 preserves real identities and role accuracy.
- [ ] Slide 18 contains no round amount or unverified partners.
- [ ] No gradients, shadows, purple, glassmorphism, bees, honeycombs, or generic AI imagery appear.

