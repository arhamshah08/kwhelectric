# kWh Electric investment deck, v2 — 18 slides

> Supersedes `DECK-REBUILD-PROMPT.md`. That file described a 24-slide narrative deck. This one is a
> tighter 18-slide investment deck with unit economics, projections, and a $1.5M ask.
> Paste everything between START and END into Manus or another deck-building agent.

---

## START OF PROMPT

Build an 18-slide seed investment deck for **kWh Electric**. Deliver a native, editable presentation, not a web page.

### 1. Output contract

1. A **PowerPoint file (.pptx)**, 16:9, 1920 × 1080 px, every element a real editable object. Real text boxes, real vector shapes, real grouped diagrams. No slide may be a flattened screenshot.
2. A **PDF export** at the same dimensions.
3. Exactly 18 slides in the main deck. Three optional appendix slides may follow, clearly numbered `A · 01` through `A · 03`, and they do not count toward the 18.

Do not build this as HTML, a web app, or a slide framework. Fonts: **DM Sans** (400 / 500 / 700) for text, **DM Mono** (400 / 500) for labels, numerics, and footers. Embed them. If embedding fails, substitute Inter and JetBrains Mono and say so.

### 2. Design system, exact values

| Token | Hex | Use |
|---|---|---|
| ink | `#0E1512` | Primary text |
| slate | `#4A5A52` | Secondary text |
| slate-2 | `#8A9992` | Tertiary text, captions, placeholders |
| paper | `#FAFAF8` | Default background |
| warm | `#FBF7EE` | Warm alternate background |
| cool | `#F4F6F4` | Appendix background |
| rule | `#E3E7E4` | 1px hairlines |
| mint | `#E4F4EA` | Fill: connected asset |
| mint-d | `#1E8B4E` | Stroke and text on mint |
| honey | `#C8901B` | Dispatch, translation layer, money |
| honey-d | `#8A6008` | Stroke and text on honey |
| indigo | `#EDEAFB` | Fill: software layer |
| indigo-d | `#4B31C4` | Stroke and text on indigo |

Type scale in points on the 1920 canvas: display 80, h1 46, lead 25, body 18, section label 12 (DM Mono, uppercase, ~0.12em tracking), micro 13 (DM Mono).

**Colour is semantic, never decorative.** Hollow outline means a stranded asset. Mint means connected. Honey means dispatch, translation, or money. Indigo means a software layer.

The recurring primitive is the **hexagon**, where one hexagon is one energy asset. A faint hexagonal lattice in `rule` at 6 to 10 percent opacity sits behind section and statement slides, sparser on dense data slides. **No bees, no honeycomb illustrations, no honey jars, no insects.** Geometry and colour only.

Margins roughly 100px left and right. Every slide carries a DM Mono section label at top left in the format `04 · Solution`, a headline, the content, then `kwhelectric` bottom left and `04 / 18` bottom right.

### 3. Placeholder policy

Where a value appears in **square brackets** below, reproduce the brackets literally on the slide in `slate-2`. Do not invent numbers, do not delete the placeholder, do not substitute a plausible-looking figure. Unbracketed copy is verified and must be reproduced as written.

---

## The 18 slides

---

### 01 · Cover

Label: `Distributed energy platform · Seed`
Headline, display: `Switching on the grid we already built.`
Sub: `Hardware gateway + platform. One integration, any asset, any application.`
Footer: `north star: megawatts under management`
Visual: the hive lattice at its most present. Most cells hollow, a few mint, one or two honey. This is the only slide where the background leads.

---

### 02 · Problem

Headline: `The megawatts already exist.` Second line in `slate-2`: `They're just stranded.`

Three points, each with a small hexagon icon:
1. `Millions of batteries, solar arrays and EV chargers are already installed behind the meter.`
2. `Obsolete protocols, no monitoring, no grid-program eligibility.`
3. `Depreciating on a lender's balance sheet, earning nothing.`

Stat block: `80%` with caption `of DER fleets still lack dispatchability, capped at pilots, leaking margin into custom integration work.`

Visual: a field of hollow, unfilled hexagons. Nothing is lit. This is the visual baseline for the whole deck.

---

### 03 · Why now

Headline: `Two curves just crossed.`
Sub: `DER growth has outrun the infrastructure built to carry it, and interconnection rules just made dispatchability mandatory.`

Chart titled `Installed DER capacity — illustrative`: three ascending steps, `4 TWh / today`, `11 TWh / +3 yrs`, `33 TWh / +6 yrs`. Clean stepped form in mint. Keep the word "illustrative" visible.

Two drivers:
- `I` — `IEEE 2030.5` `is becoming the utility-mandated interconnection standard, and there is no cheap way to speak it at the edge.`
- `II` — `Under $50 BOM` `means edge hardware is finally cheap enough to put a gateway on every asset, not just the biggest ones.`

---

### 04 · Solution

Headline: `One translation layer.`
Sub: `Any application on one side, any asset on the other.`

Diagram, three stacked bands with bidirectional arrows between:
- Top, indigo: `Applications` — `Apps plug in without touching assets.`
- Middle, honey, the hero: `Translation layer`
- Bottom, mint: `Assets` — `Assets connect without touching apps.`

Caption in DM Mono: `one integration, either direction. nothing behind it has to change`

---

### 05 · How it works

Headline: `Every asset, one model.`

A four-tier vertical diagram, top to bottom:
1. **Top box**, indigo fill, indigo-d text, ~one third slide width, centred: `DERMS / utility / cloud` with subtitle `Northbound consumer`.
2. **Bidirectional arrow** labelled `IEEE 2030.5`.
3. **Centre box**, honey fill with honey-d border, spanning nearly full content width, the widest object on the slide: `DER gateway` with subtitle `Normalises every asset into one 2030.5 model`.
4. **Two bidirectional arrows** down, left labelled `Modbus / SunSpec`, right labelled `CAN`.
5. **Bottom row**, four equal boxes in `warm` with `rule` borders: `Solar PV / SunSpec Modbus`, `Inverters / Modbus, curves`, `Battery / BMS / CAN, cell level`, `DT / Modbus`.

Footnote in slate-2: `DT — distribution transformer, telemetry embedded at manufacture.`

Keep the geometry symmetrical. The argument is that many dialects go in the bottom and one standard comes out the top.

---

### 06 · Value proposition

Headline: `What each side actually gets.`

Four columns, each headed by the buyer and carrying one hard outcome. Use a consistent card, not four different treatments:

| Buyer | Gets | Instead of |
|---|---|---|
| `Asset owner` | `A stranded asset becomes a revenue-earning one.` | `Waiting for a replacement they will not buy.` |
| `Utility / DISCOM` | `Dispatchable capacity without touching vendor hardware.` | `A separate integration project per OEM.` |
| `OEM` | `Grid-program eligibility without building a standards stack.` | `Twelve months of protocol engineering.` |
| `Financier` | `Independent telemetry on the whole book.` | `Residual value they cannot verify.` |

Closing line, emphasised: `One integration replaces a project per site.`

---

### 07 · Product

Headline: `Palm sized. Under $50 BOM.`

Three spec blocks:
- `Protocol stack` — `IEEE 2030.5, SunSpec, Modbus, MQTT, Zigbee`
- `Devices under management` — `solar inverters, batteries, EV chargers, smart meters, flexible loads`
- `Deployment` — `physical gateway, or software-only license on existing hardware`

Product visual: a restrained technical rendering of the gateway PCB or enclosure, line-art or flat isometric, ink and mint on paper. It must read as an engineering drawing. No hands, no glossy 3D render, no product photography.

Caption: `Discovers, monitors and dispatches without a cloud round trip.`

---

### 08 · User experience

Headline: `What the operator actually sees.`

Two or three clean UI abstractions drawn as vector, not fake photorealistic screenshots:
- `Fleet dispatch map` — `every gateway, asset state and active dispatch signal, live.`
- `Asset detail` — `state of charge, power, faults, degradation, per asset.`
- `Flexibility and forecasting` — `demand and generation forecasts driving automated offers.`

A live console strip: `kWh Fleet Console` `Live` — `BESS 004 · Kintech Synergy`, `state of charge 78%`, `dispatch signal Active`, `latency 340ms`.

Hero metric: `340ms` with caption `dispatch latency, measured live`.

---

### 09 · Onboarding

Headline: `Live in [X] days, not a quarter.`

A horizontal five-step sequence, numbered, with a duration under each step:

1. `Activate` — `Gateway powered and licensed.` — `[ ] min`
2. `Discover` — `Devices found, protocols identified automatically.` — `[ ] min`
3. `Model` — `Digital twin built, unified asset record created.` — `[ ] min`
4. `Register` — `2030.5 client registers with the utility, certificates install.` — `[ ] hrs`
5. `Dispatch` — `Applications installed, asset earning.` — `[ ] days`

Below, a comparison bar: `Conventional integration [ ] weeks` against `kWh onboarding [ ] days`, drawn to scale.

Caption: `No site survey per asset. No vendor engineering engagement. No custom driver written on site.`

---

### 10 · Distribution

Headline: `How the hardware reaches the asset.`

Four channel routes, shown as parallel paths converging on an installed gateway. Each carries a route, a partner type, and the commercial mechanism:

1. `Direct` — `Asset owners and C&I sites` — `Gateway sale plus SaaS.`
2. `DISCOM channel` — `5 DISCOMs via Beckn DEG` — `Utility-sponsored deployment across their connected base.`
3. `OEM embed` — `Monarch Transformers and equivalents` — `Telemetry embedded at manufacture, shipped inside the asset.`
4. `Financier and EPC` — `Portfolio owners, installers` — `Bundled at financing or at install.`

Manufacturing line: `Custom PCB in fabrication with PCB Power India.`

Caption: `Every route lands the same core. Only the party who pays for it changes.`

---

### 11 · Market

Headline: `Stranded megawatts in one beachhead: [named market].`

Three figures set as typography, not a concentric-circle TAM diagram:
- `Installed base` — `[X GW]` — `behind the meter`
- `Addressable stranded` — `[Y GW]` — `reachable via retrofit and OEM cloud`
- `Annual SAM` — `[$Z]` — `SaaS, hardware and revenue share`

Body: `Beachhead: India DISCOMs via Beckn DEG, expanding to U.S. utilities and aggregators on IEEE 2030.5.`
Footnote in slate-2: `Multi-market expansion is on the roadmap, not this slide.`

---

### 12 · Unit economics, hardware

Headline: `[$150] per gateway, [X%] contribution margin.`

Left: a waterfall from price down to contribution margin. Every line item is its own bar segment:

```
Gateway license price          $150
  less  BOM                    [$    ]   (target under $50)
  less  Assembly and test      [$    ]
  less  Logistics and duties   [$    ]
  less  Warranty reserve       [$    ]
  =     Contribution margin    [$    ]   [  %]
```

Right: three supporting figures.
- `Units to breakeven on tooling` — `[X]`
- `Cost per unit at [X] volume` — `[$]` with a note that BOM falls with volume
- `Payback on a customer's gateway spend` — `[X] months`

Caption: `Hardware is not the margin engine. It is the wedge that installs the software.`

---

### 13 · Unit economics, software

Headline: `[$X] per asset per month, [X%] gross margin.`

Left: the recurring economics, laid out as a per-asset unit.

```
SaaS revenue per asset / month     [$    ]
  less  Cloud and telemetry storage [$    ]
  less  Support and success         [$    ]
  =     Gross profit / asset / mo   [$    ]   [  %]
```

Right: four SaaS metrics in a row.
- `CAC per asset` — `[$]`
- `Payback period` — `[X] months`
- `LTV / CAC` — `[X]x`
- `Net revenue retention` — `[X%]`

Below, a small comparison: `Cost per MW onboarded via gateway [$]` against `via OEM cloud [$]`, with the note `cloud onboarding carries no hardware cost, so blended cost per MW falls as that path scales`.

Caption: `Each device profile built unlocks a whole model class. The library compounds; the cost to onboard does not.`

---

### 14 · Financial projections

Headline: `[X] MW under management by year [X].`

One combined chart across five years, `yr 1` through `yr 5`, with three series:
1. Hardware revenue, mint
2. Software and recurring revenue, honey
3. Total cost, drawn as a line rather than a bar

Beneath the chart, a driver table. Every cell is a bracketed placeholder to be filled once the model is built:

| | yr 1 | yr 2 | yr 3 | yr 4 | yr 5 |
|---|---|---|---|---|---|
| Gateways shipped | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Assets under management | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| MW under management | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Hardware revenue | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Recurring revenue | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Gross margin % | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Burn | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |

Annotate the point on the chart where recurring revenue overtakes hardware revenue. That crossover is the whole story of the slide.

---

### 15 · Traction

Headline: `A live channel into DISCOMs.`

Four proof chips: `Custom PCB / PCB Power India`, `Live telemetry / Kintech Synergy BESS`, `DISCOM channel / 5 DISCOMs via Beckn DEG`, `Piloting / 2 plants live today`.

Two partner blocks:
- `Zodiac Energy` — `NSE & BSE listed generator` — `Data sharing live, generation records feeding model training, gateway telemetry pilot in setup.`
- `Kintech Synergy` — `BESS operator` — `Live BESS assets streaming gateway telemetry, state of charge and dispatch validation.`

Four metric slots: `[X] device profiles built`, `[X] sites live`, `[X] MW under management`, `2030.5 — [status]`.

---

### 16 · Why we win

Headline: `Five advantages that compound.`

Numbered `01` to `05` in DM Mono:
1. `Device-profile library compounds. Build once, unlock a whole model class forever.`
2. `Retrofit reach nobody else has.`
3. `Autonomous edge safety layer lets us command hardware we never installed.`
4. `Standards-native, so grid programs accept us.`
5. `Translation in cloud and edge, so we onboard mixed portfolios competitors cannot.`

Closing: `Each profile built and each site retrofit widens a lead nobody else is chasing.`

---

### 17 · Team

Headline: `Built by practitioners.`

Founder: `Arham Shah` — `Founder & CEO` — `M.S. Energy, Stanford` — `B.S. Industrial Engineering, UIUC` — `Ex-Tesla, Rivian, Beckn`
Advisors: `Sujith Nair — Co-Founder, Beckn`, `Dr. Pramod Varma — Chief architect, UPI & Aadhaar`
Engineering: `Sudheer Kumar — Deployment Engineer`, `Yuvaraju Meenuga — Integrations Engineer`

Closing: `Four founding engineers, zero attrition, production PCB already in fabrication. The team that shipped the pilot is the team building the company.`

Use empty hexagon outlines in `rule` as avatar frames. Do not generate synthetic faces for real named people.

---

### 18 · The ask

Headline, display: `$1.5M.`
Sub: `SAFE, [$ cap] cap.`

Use of funds, as a four-segment horizontal bar with percentages:
- `Engineering and device profiles` — `[X%]`
- `Hardware production run` — `[X%]`
- `Deployment and utility integration` — `[X%]`
- `Runway and operations` — `[X%]`

`This gets us to`, as three milestones:
- `[X] MW under management`
- `[X] device profiles shipped`
- `2030.5 certification [status]`

`Runway`: `[X] months.`

Closing line, display scale: `Everyone else is chasing next year's assets. We're switching on the ones already in the ground.`

Visual: the hive lattice returns from the cover, now mostly lit mint with a scatter of honey. Deliberately mirror slide 02, where nothing was lit, so the deck closes on the frame it opened with.

---

## Optional appendix, not part of the 18

**A · 01 — Layered architecture** (background `cool`)
Sub-label `top: cloud · bottom: physical`. Tiers: `grid DERMS`, `external APIs`, `open networks`, `financing rail`, then `2030.5 server + client — any deployment mode`, `universal API layer — REST, webhooks, streaming`, `forecasting`, `optimisation`, `dispatch`, `telemetry`, `asset management`, `OTA`, then the honey translation band `cloud translation — vendor cloud APIs` and `edge gateway — Modbus TCP southbound`, then physical: `BESS`, `PV inverters`, `EVSE`, `meters and loads`.
Caption: `The translation band sits between the software you own and the hardware you don't. That placement is the whole argument.`

**A · 02 — Four deployment modes** (background `cool`)
`Same core, four ways in.` `Mode 01 · Client only` — `Edge gateway speaks out to an existing server.` `Mode 02 · Server only` — `2030.5 server receives utility controls in the cloud.` `Mode 03 · Both` — `Server and client together, end to end through our stack.` `Mode 04 · With apps` — `Full platform, our forecasting and optimisation on top.`
Caption: `Each asset is onboarded by whichever path is cheapest.`

**A · 03 — Control-authority boundary** (background `cool`)
`Economics in the cloud. Safety at the edge.` `Cloud / Economic dispatch` — `Price-aware scheduling and portfolio allocation, strategy decided centrally.` A visible `boundary` divider. `Edge / Protective + grid-support` — `Runs autonomously and stays inside each asset's safe limits, even if the link drops.`

---

## Verify before delivering

1. Exactly 18 slides in the main deck, footers numbered `NN / 18`. Any appendix slides are numbered `A · 0N` and clearly separate.
2. Every bracketed placeholder is still bracketed and styled in `slate-2`. No invented figures anywhere.
3. Nothing is clipped, nothing overflows, no orphan lines.
4. Slides 12, 13, and 14 are visually a set. Same chart language, same table treatment, same label positions. An investor should read them as one financial section.
5. Colour semantics hold across all 18 slides.
6. No bees, honeycomb, honey jars, or insects.
7. Every diagram is grouped vector shapes with live, editable text.

Deliver the .pptx and the .pdf, plus a short note listing any decision you made that this brief did not specify.

## END OF PROMPT

---

## Notes for Arham, not part of the prompt

**What was cut to get to 18.** The old 24-slide version had a standalone Insight slide, a four-slide use-case sequence, an Application-stack slide, and a separate Business-model slide. The use cases were the biggest loss but they were four slides doing one job, and their content is largely absorbed into Value proposition on slide 06 and Distribution on slide 10. If a specific investor wants them, they belong in the appendix rather than the main line.

**What you need to fill before this is sendable.** Slides 12, 13, and 14 are structure with no numbers in them. That is deliberate, since I will not invent your unit economics, but it does mean the deck cannot go out until you have built the model. The two figures I did carry through are the ones already established in your material: $150 gateway license and under $50 BOM.

**One thing to decide.** You are raising $1.5M and slide 01 says Seed. At that size, most investors will read it as pre-seed, and the earlier venture-deck source did say Pre-Seed. Mislabelling the round tends to cost you more in credibility than it gains in positioning. Worth settling before you send.

**A gap the deck does not currently cover.** There is no competition slide. Slide 16 is "why we win", which is an advantages slide, not a landscape. Some investors will ask directly where Kalkitech, OEM-managed clouds like Enphase and Tesla, and cloud-down DERMS players sit relative to you. At 18 slides there is no room, so prepare it as a nineteenth appendix slide rather than leaving it unanswered.
