# Build prompt — kWh Electric seed deck (Manus / agent build)

> Paste everything from "START OF PROMPT" to the end into Manus. It is self-contained.
> The Nano Banana asset prompts at the bottom are a separate, optional step for imagery only.

---

## START OF PROMPT

You are designing and building a 24-slide seed-stage venture deck for **kWh Electric**, a distributed energy platform company. I want a beautiful, editable, presentation-grade deck. Read the whole brief before starting.

### 1. Output format

Deliver **both** of the following:

1. A native **PowerPoint file (.pptx)**, 16:9, 1920×1080 px canvas, every element as a real editable object (real text boxes, real vector shapes, real grouped diagrams). No slide may be a flattened screenshot.
2. A **PDF export** of the same deck at the same dimensions.

Do not build this as an HTML page, a web app, or a slide framework like reveal.js. I already have an HTML version and I do not want another one. Native slides only.

Fonts: **DM Sans** (400 / 500 / 700) for all text, **DM Mono** (400 / 500) for labels, numerics, footers, and any code-like tokens. Embed the fonts in the .pptx. If embedding is impossible, substitute Inter for DM Sans and JetBrains Mono for DM Mono, and tell me you did.

### 2. Design system, use these exact values

Colour tokens:

| Token | Hex | Use |
|---|---|---|
| ink | `#0E1512` | Primary text, near-black with a green cast |
| slate | `#4A5A52` | Secondary text |
| slate-2 | `#8A9992` | Tertiary text, captions |
| paper | `#FAFAF8` | Default slide background |
| warm | `#FBF7EE` | Warm alternate background |
| cool | `#F4F6F4` | Cool alternate background, used for all appendix slides |
| rule | `#E3E7E4` | Hairline rules and dividers, 1px |
| mint | `#E4F4EA` | Fill: a connected asset |
| mint-d | `#1E8B4E` | Stroke/text on mint |
| honey | `#C8901B` | Fill: dispatch, the translation layer, money |
| honey-d | `#8A6008` | Stroke/text on honey |
| indigo | `#EDEAFB` | Fill: a software layer |
| indigo-d | `#4B31C4` | Stroke/text on indigo |

Type scale, in points on a 1920×1080 canvas: display 80, h1 46, lead 25, body 18, section label 12 (DM Mono, uppercase, letterspaced ~0.12em), micro 13 (DM Mono).

**The colours carry meaning. Never use them decoratively.** Hollow or outline-only means a stranded asset. Mint means a connected asset. Honey means dispatch, the translation layer, or revenue. Indigo means a software layer. A reader should be able to infer state from colour alone by slide 5.

### 3. The core visual motif: the hive

The single geometric primitive in this deck is the **hexagon**. One hexagon is one energy asset. Across the deck, the hexagon field progressively lights up: it starts hollow and grey (stranded assets), turns mint (connected), then honey (dispatched).

Build a **hive background system**:

- A tessellating hexagonal lattice, flat-top orientation, drawn as thin `rule`-coloured strokes at roughly 6 to 10 percent opacity.
- It should read as an architectural substrate, a faint honeycomb grid the content sits on, not as wallpaper. If it competes with the text for attention, reduce it.
- Vary it per slide type: dense small-cell lattice bleeding off one edge on section and cover slides, sparser and mostly cropped to a corner or margin band on dense content slides, near-invisible on the heaviest data slides.
- On the cover and the closing slide, allow a small number of hexagon cells in the lattice to be filled: mostly hollow, a few mint, one or two honey. That is the whole company thesis rendered as a texture.

**Hard constraint: no literal bees, no honey jars, no beehive illustrations, no honeycomb clip art, no insect imagery of any kind.** The metaphor survives only as geometry and colour. Any literal depiction of a bee or hive will make the deck unusable.

### 4. Layout rules

- Generous margins, roughly 100 px left and right on the 1920 canvas. Let slides breathe. Whitespace is a feature.
- Every content slide carries: a DM Mono section label at top left in the format `05 · Solution`, a headline, the body content, and a footer with `kwhelectric` at bottom left and `05 / 21` at bottom right. Appendix slides use `A · 01`, `A · 02`, `A · 03` instead.
- Appendix slides (the last three) use the `cool` background. Everything else uses `paper` unless a slide spec below says otherwise.
- Diagrams are vector, built from rounded rectangles, hexagons, and arrows. Arrow strokes ~3 px, arrowheads clean and small. Label every arrow with the protocol or flow it carries.
- Big numbers are set in DM Sans 700 at display scale with the unit in a smaller weight beside them.
- No stock photography anywhere. No gradients except very subtle ones inside a single hue. No drop shadows heavier than a soft 2 px.

### 5. Placeholder policy, important

Several figures are not yet verified. Where a value appears below in **square brackets**, reproduce the square brackets literally on the slide, styled in `slate-2`. Do not invent numbers, do not delete the placeholder, do not guess a plausible figure. Examples that must stay bracketed: `[X] MW`, `[Y]`, `[named market]`, `[X GW]`, `[$Z]`, `[$ amount]`, `[$ cap]`, `[status]`, `[$/MW]`.

Everything not in brackets is verified copy. Reproduce it exactly. Do not rewrite the headlines, do not "improve" the wording, do not add exclamation marks or marketing filler.

### 6. Slide-by-slide specification

---

**Slide 01 — Cover**
Label: `Distributed energy platform · Seed`
Headline (display): `Switching on the grid we already built.`
Sub: `Full stack · hardware gateway + SaaS`
Footer line: `north star: megawatts under management`
Wordmark: `kwhelectric`
Visual: the hive lattice at its most present here, most cells hollow, a few mint, one or two honey. This is the only slide where the background is a lead element.

---

**Slide 02 — Problem**
Label: `02 · Problem`
Headline: `The megawatts already exist.` / second line in `slate-2`: `They're just stranded.`
Three points, each with a small hexagon icon:
1. `Millions of batteries, solar arrays and EV chargers are already installed behind the meter.`
2. `Obsolete protocols, no monitoring, no grid-program eligibility.`
3. `Depreciating on a lender's balance sheet, earning nothing.`
Stat block: `80%` with caption `of DER fleets still lack dispatchability — capped at pilots, leaking margin into custom integration work.`
Visual: a field of hollow, unfilled hexagons. Nothing is lit. This slide is the visual baseline for everything that follows.

---

**Slide 03 — Insight**
Label: `03 · Insight`
Headline (display, this is a statement slide with lots of air): `The ugliness is the moat.`
Body: `Everyone is fighting over next year's hardware. The installed base is bigger and untouched, because every vendor's protocol differs and every site is its own project.`
Closing line, emphasised: `Do that work once, and you own ground nobody wants to fight for.`

---

**Slide 04 — Why now**
Label: `04 · Why now`
Headline: `Two curves just crossed.`
Sub: `DER growth has outrun the infrastructure built to carry it, and interconnection rules just made dispatchability mandatory.`
Chart, titled `Installed DER capacity — illustrative`: three ascending steps, `4 TWh / today`, `11 TWh / +3 yrs`, `33 TWh / +6 yrs`. Render as a clean stepped bar or area form in mint, not a generic Excel chart. Keep the word "illustrative" visible.
Two numbered drivers, `I` and `II`:
- `I` — `IEEE 2030.5` `is becoming the utility-mandated interconnection standard, and there is no cheap way to speak it at the edge.`
- `II` — `Under $50 BOM` `means edge hardware is finally cheap enough to put a gateway on every asset, not just the biggest ones.`

---

**Slide 05 — Solution**
Label: `05 · Solution`
Headline: `One translation layer.`
Sub: `Any application on one side, any asset on the other.`
Diagram, three horizontal bands stacked vertically:
- Top band, indigo: `Applications` with caption `Apps plug in without touching assets.`
- Middle band, honey, visually the hero of the slide: `Translation layer`
- Bottom band, mint: `Assets` with caption `Assets connect without touching apps.`
Bidirectional arrows between each band.
Caption below in DM Mono: `one integration, either direction — nothing behind it has to change`

---

**Slide 06 — Architecture in one picture (NEW SLIDE)**
Label: `06 · Architecture`
Headline: `Every asset, one model.`
This is a clean four-tier vertical diagram. Rebuild it as crisp vector shapes on the deck's palette. Structure, top to bottom:

1. **Top box**, indigo fill `#EDEAFB`, indigo-d text: title `DERMS / utility / cloud`, subtitle `Northbound consumer`. Rounded rectangle, roughly one-third the slide width, centred.
2. **Vertical bidirectional arrow** down from it, labelled `IEEE 2030.5` in slate.
3. **Centre box**, the hero element, honey-tinted fill with a honey-d border, spanning nearly the full content width: title `DER gateway`, subtitle `Normalises every asset into one 2030.5 model`. This box must read as the widest and most important object on the slide, because it is the product.
4. **Two vertical bidirectional arrows** dropping from the centre box: the left one labelled `Modbus / SunSpec`, the right one labelled `CAN`.
5. **Bottom row**, four equal boxes in a neutral warm-grey fill (`warm` with a `rule` border), ink title and slate subtitle:
   - `Solar PV` / `SunSpec Modbus`
   - `Inverters` / `Modbus, curves`
   - `Battery / BMS` / `CAN, cell level`
   - `DT` / `Modbus`

Note on the fourth box: `DT` means distribution transformer. Keep the label short as `DT` on the slide, and add a one-line footnote in `slate-2` beneath the diagram: `DT — distribution transformer, telemetry embedded at manufacture.`

Keep the geometry symmetrical and the vertical rhythm even. The visual argument is that many dialects go in the bottom and one standard comes out the top.

---

**Slide 07 — Architecture, full**
Label: `07 · Architecture`
Headline: `bidirectional translation core`
A layered systems diagram. Top tier, cloud consumers: `grid DERMS / utility programs`, `financing platform / securitisation`, `external APIs / weather, price`, `forecasting / site level`, `optimisation / price aware`. Centre band, honey, labelled `Translation layer` and `Bidirectional`. Southbound tier: `2030.5 server / standards northbound`, `gateway / Modbus TCP southbound`, `assets / BESS, PV, EVSE`, `OEM cloud / vendor device APIs`, `OEM devices / thermostat, EV, PV`.
Caption: `The cloud decides strategy. The gateway executes and stays inside each asset's safe limits on its own.`

---

**Slide 08 — How it works**
Label: `08 · How it works`
Headline: `Control flows down. Data flows up.` / sub: `One layer carries both.`
Three stacked nodes: `apps / DERMS, financing` (indigo), `translation / one core` (honey), `gateway / 2030.5 edge` then `assets / BESS, PV` (mint).
Two parallel vertical arrows running the full height in opposite directions, labelled `control, cloud to asset` (downward) and `data, asset to cloud` (upward). The two-way symmetry is the point of the slide.

---

**Slide 09 — Product**
Label: `09 · Product`
Headline: `Palm sized. Under $50 BOM.`
Three spec blocks:
- `Protocol stack` — `IEEE 2030.5, SunSpec, Modbus, MQTT, Zigbee`
- `Devices under management` — `solar inverters, batteries, EV chargers, smart meters, flexible loads`
- `Business model` — `$150 one-time gateway license plus recurring SaaS`
Product visual: a restrained, technical rendering of a small palm-sized edge gateway PCB or enclosure. Line-art or a flat isometric vector, in ink and mint on paper. It must look like an engineering drawing, not a consumer product photo. No hands, no glossy 3D marketing render.
Caption: `hardware gateway or software-only license — same core either way. discovers, monitors and dispatches without a cloud round trip.`

---

**Slide 10 — Application stack**
Label: `10 · Application stack`
Headline: `Four layers, one stack.`
Four stacked layers, numbered, each with a hexagon icon, colour-coded bottom to top from mint through honey to indigo:
- `01 Edge Gateway` — `Discovers, monitors and dispatches DERs locally — no cloud round trip.`
- `02 Protocol Translation` — `Speaks IEEE 2030.5 fluently to utilities and aggregators, regardless of device OEM.`
- `03 Cloud Platform` — `Fleet management, provisioning, telemetry and analytics across every deployed gateway.`
- `04 Application Layer` — `Forecasting, P2P trading, demand flexibility, asset securitisation, asset health. Sold on top of the gateway — and each one sells more gateways.`

---

**Slides 11 to 14 — Four use cases, one shared template**

Build one template and reuse it exactly, so the four slides read as a set. Template: a `Use case · 0N` label, a headline, then labelled blocks for `Pain`, `Control flow`, `Data flow`, `Result`. Not every case has all four blocks; omit the ones not supplied rather than padding them. The `Result` block is visually emphasised.

**11 — Use case 01, `Legacy BESS retrofit`**
Pain: `A commissioned battery, Modbus only — invisible and ineligible.`
Control flow: `Optimiser sets a schedule → translation maps it to that vendor's registers → gateway executes and holds.`
Data flow: `Registers polled and normalised → platform sees state of charge, power, faults, health.`
Result: `[X] MW online in [Y] days.`

**12 — Use case 02, `Financier portfolio`**
Pain: `Hundreds of financed assets, no independent telemetry — residual value unknown.`
Data flow: `Mixed fleet reports in — via gateway and via OEM cloud — normalised into one asset model. The financier sees one portfolio view of health, cycles, output, degradation.`
Result: `The entire book onboarded — not the connected fraction.`

**13 — Use case 03, `OEM compliance`**
Pain: `Needs grid-program eligibility without building a standards stack.`
Control flow: `Utility issues a 2030.5 control → our server receives it → translation converts to the OEM's native API → device responds.`
Data flow: `Telemetry returns as conformant reporting.`
Result: `The OEM keeps brand, cloud and customer. We supply compliance.`

**14 — Use case 04, `VPP aggregation`**
Pain: `Scattered assets cannot be dispatched as one resource.`
Control flow: `Grid signal arrives → optimiser allocates across the fleet → translation fans out per-asset commands in each native protocol → gateways execute in parallel.`
Result: `Portfolio-level co-optimisation — structurally impossible for edge-only competitors.`

---

**Slide 15 — Live product**
Label: `15 · Live product`
Headline: `Real telemetry, real dispatch, running today.`
Hero metric: `340ms` with caption `dispatch latency, measured live`.
Two product-screen mockups, drawn as clean vector UI abstractions rather than fake photorealistic screenshots:
- `Fleet dispatch map` — `real-time view of every gateway, asset state and active dispatch signal.`
- `Forecasting and flexibility` — `demand and generation forecasts driving automated flexibility offers.`
A console strip: `kWh Fleet Console` `Live` — `BESS 004 · Kintech Synergy`, `state of charge 78%`, `dispatch signal Active`, `latency 340ms`.

---

**Slide 16 — Market**
Label: `16 · Market`
Headline: `Stranded megawatts in one beachhead: [named market].`
Three figures:
- `Installed base` — `[X GW]` — `behind the meter`
- `Addressable stranded` — `[Y GW]` — `reachable via retrofit and OEM cloud`
- `Annual SAM` — `[$Z]` — `SaaS, hardware and revenue share`
Body: `Beachhead: India DISCOMs via Beckn DEG, expanding to U.S. utilities and aggregators on IEEE 2030.5.`
Footnote in slate-2: `Multi-market expansion is on the roadmap — not this slide.`
Do not draw a TAM/SAM/SOM concentric-circle diagram. Set the three figures as typography.

---

**Slide 17 — Business model**
Label: `17 · Business model`
Headline: `Three revenue lines. Cost per MW falls as the cloud path scales.`
- `01 · One-time` — `Gateway hardware`
- `02 · Recurring` — `SaaS per asset and per MW`
- `03 · Upside` — `Share of grid-program and market revenue`
Chart: `Blended cost per MW onboarded`, a declining curve across `yr 1`, `yr 2`, `yr 3`, `yr 4`. Y-axis label stays as the literal placeholder `[$/MW]`. Caption: `[$/MW] declines as cloud onboarding outgrows hardware`.

---

**Slide 18 — Why we win**
Label: `18 · Why we win`
Headline: `Five advantages that compound.`
Numbered `01` to `05`, DM Mono numerals:
1. `Device-profile library compounds — build once, unlock a whole model class forever.`
2. `Retrofit reach nobody else has.`
3. `Autonomous edge safety layer lets us command hardware we never installed.`
4. `Standards-native, so grid programs accept us.`
5. `Translation in cloud and edge — we onboard mixed portfolios competitors cannot.`
Closing line: `Each profile built and each site retrofit widens a lead nobody else is chasing.`

---

**Slide 19 — Traction**
Label: `19 · Traction`
Headline: `A live channel into DISCOMs.`
Four proof chips across the top: `Custom PCB / PCB Power India`, `Live telemetry / Kintech Synergy BESS`, `DISCOM channel / 5 DISCOMs via Beckn DEG`, `Piloting / 2 plants live today`.
Two partner blocks:
- `Zodiac Energy` — `NSE & BSE listed generator` — `Data sharing live — generation records feeding model training, gateway telemetry pilot in setup.`
- `Kintech Synergy` — `BESS operator` — `Live BESS assets streaming gateway telemetry, state of charge and dispatch validation.`
Four metric slots, all bracketed: `[X] device profiles built`, `[X] sites live`, `[X] MW under management`, `2030.5 — [status]`.

---

**Slide 20 — Team**
Label: `20 · Team`
Headline: `Built by practitioners.`
Founder: `Arham Shah` — `Founder & CEO` — `M.S. Energy, Stanford` — `B.S. Industrial Engineering, UIUC` — `Ex-Tesla, Rivian, Beckn`
Advisors: `Sujith Nair — Co-Founder, Beckn`, `Dr. Pramod Varma — Chief architect, UPI & Aadhaar`
Engineering: `Sudheer Kumar — Deployment Engineer`, `Yuvaraju Meenuga — Integrations Engineer`
Closing: `Four founding engineers, zero attrition, production PCB already in fabrication. The team that shipped the pilot is the team building the company.`
Use hexagonal avatar frames as placeholders. Leave them as empty hexagon outlines in `rule`. Do not generate synthetic faces for real named people.

---

**Slide 21 — Vision and Ask**
Label: `21 · Vision · Ask`
Headline: `Financeable megawatts.`
Body: `Verified telemetry — normalised and timestamped — consumed by financing rails as ground truth.`
Emphasis: `We don't do securitisation. We're the measurement layer that makes it possible.`
`18-month milestone`: `[X] MW under management`, `[X] device profiles shipped`
`The ask`: `[$ amount] SAFE, [$ cap] cap.`
Closing line, display scale: `Everyone else is chasing next year's assets. We're switching on the ones already in the ground.`
Visual: the hive lattice returns from the cover, but now most cells are lit mint and honey. It is the visual bookend to slide 02, where nothing was lit.

---

**Appendix A · 01 — Layered architecture** (background `cool`, footer `A · 01`)
Sub-label: `top: cloud · bottom: physical`
Tiers from top: `grid DERMS`, `external APIs`, `open networks`, `financing rail` / then `2030.5 server + client — any deployment mode`, `universal API layer — REST, webhooks, streaming`, `forecasting — hyperlocal, site level`, `optimisation — price and grid aware`, `dispatch`, `telemetry`, `asset management`, `OTA` / then the honey translation band: `cloud translation — vendor cloud APIs`, `edge gateway — Modbus TCP southbound` / then physical: `BESS`, `PV inverters`, `EVSE`, `meters and loads`.
Caption: `The translation band sits between the software you own and the hardware you don't. That placement is the whole argument.`

**Appendix A · 02 — Four deployment modes** (background `cool`, footer `A · 02`)
Headline: `Same core, four ways in.`
- `Mode 01 · Client only` — `Edge gateway speaks out to an existing server.`
- `Mode 02 · Server only` — `2030.5 server receives utility controls in the cloud.`
- `Mode 03 · Both` — `Server and client together — end to end through our stack.`
- `Mode 04 · With apps` — `Full platform — our forecasting and optimisation on top.`
Caption: `Each asset is onboarded by whichever path is cheapest.`

**Appendix A · 03 — Control-authority boundary** (background `cool`, footer `A · 03`)
Headline: `Economics in the cloud. Safety at the edge.`
- `Cloud` / `Economic dispatch` — `Price-aware scheduling and portfolio allocation — strategy decided centrally.`
- A visible `boundary` divider between them, drawn as a distinct horizontal rule with the word set in DM Mono.
- `Edge` / `Protective + grid-support` — `Runs autonomously and stays inside each asset's safe limits — even if the link drops.`

### 7. Quality bar

Before you deliver, verify every one of these:

1. Nothing is clipped, nothing overflows its container, no text wraps into an awkward orphan line.
2. All 24 slides are present and footer numbering is consistent, `NN / 21` on the main deck and `A · 0N` on the three appendix slides.
3. Every bracketed placeholder is still bracketed and still styled in slate-2.
4. No bee, hive, honeycomb, or insect illustration appears anywhere.
5. Every diagram is grouped vector shapes with live text, editable in PowerPoint.
6. The colour semantics hold across all slides: hollow is stranded, mint is connected, honey is dispatch or translation, indigo is software.
7. Fonts render as DM Sans and DM Mono, or you have told me what you substituted.

Deliver the .pptx and the .pdf, plus a one-paragraph note listing any decision you made that was not specified here.

## END OF PROMPT

---

## Companion prompts for Nano Banana (imagery only)

Nano Banana is an image model. It cannot lay out a 24-slide deck and it renders diagram text unreliably. Use it only to generate background and hero art, then place those images into the deck built above. Do not ask it to produce any slide that contains real copy or a labelled diagram.

**Asset 1 — hive background plate**

> A minimal abstract geometric background: a tessellating flat-top hexagonal lattice drawn in very thin hairlines, colour #E3E7E4 at low opacity, on an off-white #FAFAF8 background. Most cells are empty outlines. A small scattered handful of cells are filled with soft mint #E4F4EA, and two or three cells are filled with muted amber #C8901B. Flat vector, no gradients, no shading, no texture, no 3D. Extremely restrained, Swiss editorial design. Large areas of empty space. 16:9, 1920x1080. No text, no letters, no icons, no bees, no insects, no honeycomb realism, no honey.

**Asset 2 — the same plate, fully lit** (for the closing slide)

> Same as above, but the majority of hexagon cells are filled with mint #E4F4EA and roughly a fifth are filled with amber #C8901B, with only a few remaining as empty outlines. Same flat vector style, same palette, 16:9, no text.

**Asset 3 — edge gateway device drawing**

> A technical line-art illustration of a small palm-sized electronic gateway device: a compact rectangular circuit board with a low-profile enclosure, a few terminal blocks and a small antenna stub. Drawn as clean thin vector outlines in dark green-black #0E1512 on off-white #FAFAF8, with a single mint #E4F4EA accent fill. Flat, orthographic or gentle isometric, engineering-drawing feel, no perspective drama. No hands, no desk, no photorealism, no glossy reflections, no marketing render, no text, no logos, no labels.

Place these behind or beside the real vector content. Never let a generated image carry information the reader has to read.
