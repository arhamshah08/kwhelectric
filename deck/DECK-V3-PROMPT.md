# kWh Electric investment deck, v3.1 — 6-slide prologue + 18 slides

> Supersedes `DECK-V2-PROMPT.md`, which supersedes `DECK-REBUILD-PROMPT.md`. Use this one.
> v3 adds the two-model product line (Model A DER Gateway, Model B DT Gateway) and the DISCOM
> metrics story, and rebuilds hardware unit economics around two SKUs instead of one.
> **v3.1 adds a six-slide bee-story prologue** that introduces the three properties the whole
> pitch rests on: interoperability, security, agentic. The prologue is illustrated. The 18 main
> slides remain geometry-only. That register break is deliberate and is explained in §2.1.
> Paste everything between START and END into Manus or another deck-building agent.

---

## START OF PROMPT

Build a seed investment deck for **kWh Electric**: a six-slide illustrated prologue, then 18 main slides, then seven appendix slides. Deliver a native, editable presentation, not a web page.

### 1. Output contract

1. A **PowerPoint file (.pptx)**, 16:9, 1920 × 1080 px, every element a real editable object. Real text boxes, real vector shapes, real grouped diagrams. No slide may be a flattened screenshot.
2. A **PDF export** at the same dimensions.
3. Slide order and numbering:
   - **Slide 01, the cover**, comes first and is numbered `01 / 18`.
   - **Six prologue slides** follow, numbered `P · 01` through `P · 06` bottom right. They do not count toward the 18.
   - **Main deck slides 02 through 18** follow, numbered `02 / 18` onward.
   - **Seven appendix slides** close, numbered `A · 01` through `A · 07`. They do not count toward the 18.
   - Total deck: 31 slides. The cover sits before the prologue because it is what is on screen while the room settles. The prologue is the cold open told out loud; the main deck is where the pitch is evidenced.

Do not build this as HTML, a web app, or a slide framework. Fonts: **DM Sans** (400 / 500 / 700) for text, **DM Mono** (400 / 500) for labels, numerics, footers, and all technical specification text. Embed them. If embedding fails, substitute Inter and JetBrains Mono and say so.

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

**Add one product-line convention used throughout the deck:** Model A is always drawn in **mint**, Model B is always drawn in **indigo**. Once a reader learns that on slide 05, every later slide that splits by model is legible without a legend.

The recurring primitive is the **hexagon**, one hexagon being one energy asset. A faint hexagonal lattice in `rule` at 6 to 10 percent opacity sits behind section and statement slides, sparser on dense data slides.

Margins roughly 100px left and right. Every slide carries a DM Mono section label at top left in the format `05 · Product line`, a headline, the content, then `kwhelectric` bottom left and `05 / 18` bottom right.

### 2.1 The two registers, and where the line falls

This deck runs two visual registers and the boundary between them is exact.

**Register one, the prologue (`P · 01` to `P · 06`).** Illustrated. Bees, hives, sealed cells and a wasp are all permitted and required. This is the only place in the deck where a metaphor carries the argument.

**Register two, the cover and main deck (`01 / 18` through `18 / 18`) and the whole appendix.** **No bees, no honeycomb illustrations, no honey jars, no insects. Geometry and colour only.** The hexagon lattice stays, because it is a shape, not a character.

The break is the point. The prologue makes a claim in pictures, then the deck drops the pictures and proves the claim in numbers. Do not soften the transition by leaking a bee into slide 02, and do not stiffen the prologue by rendering it in the flat geometric style. An investor should notice the change of register, because it reads as a company that can tell a story and then stop telling it.

### 2.2 Prologue-only palette extension

The prologue art is warmer and more saturated than the main deck. Two additional tokens, used **only** on `P · 01` to `P · 06`:

| Token | Hex | Use |
|---|---|---|
| comb | `#E8C05A` | Hive and cell fill in prologue illustrations |
| alarm | `#9E2020` | The compromised cell on `P · 02`, and the prologue section label |

Prologue backgrounds use `warm`. Prologue section labels (`THE PROBLEM`, `THE SOLUTION`) are DM Mono, uppercase, in `alarm`, matching the existing slides. Note the semantic cost: `alarm` doing double duty as a neutral label colour and as the compromise colour weakens the rule that colour is semantic. If that trade bothers you, set the labels in `ink` and reserve `alarm` for `P · 02` alone.

### 3. Placeholder policy

Where a value appears in **square brackets** below, reproduce the brackets literally on the slide in `slate-2`. Do not invent numbers, do not delete the placeholder, do not substitute a plausible-looking figure. Unbracketed copy is verified and must be reproduced as written.

---

## The prologue, six slides, told in the hive

The prologue exists to introduce three properties before any number is shown: **interoperability, security, agentic**. Each gets a problem beat and a solution beat, so no property arrives unearned.

| Slide | Beat | Property |
|---|---|---|
| `P · 01` | Problem | Interoperability, absent |
| `P · 02` | Problem | Security, absent |
| `P · 03` | Solution | Security, solved |
| `P · 04` | Solution | Interoperability, solved |
| `P · 05` | Problem and solution in one slide | Agentic |
| `P · 06` | Payoff, all three at once | All three |

Security resolves before interoperability because the wasp on `P · 02` is the sharper wound and leaving it open across two slides costs attention. Agentic comes last of the three because it is the only property that depends on the other two being true first.

---

### P · 01 — The hive is fragmented

Label: `THE PROBLEM`
Headline: `Today, the hive is fragmented.`
Sub, in `slate`: `Every OEM locks its devices in a separate silo.`

Stat block, left, lower third: `80%` in display scale, with caption in body: `of DER fleets still lack dispatchability. Existing APIs are too expensive, and lack interoperability and security.`

Visual, right half: eight to eleven `comb` hexagons of markedly different sizes, scattered with irregular gaps between them, each holding its own bees. No two hexagons touch. No bee crosses from one hexagon to another. The composition must read as debris, not as a pattern, because the argument is that these were each built correctly and separately.

Copy note: the source slide reads `an existing APIs are too expensive`. That is a typo. Set it as `Existing APIs are too expensive`.

---

### P · 02 — The wasp

Label: `THE PROBLEM`
Headline: `One weak cell and the wasp gets in.`
Sub, in `slate`: `A fragmented fleet has no shared defence. Every silo defends alone, or not at all.`

Do **not** repeat the `Today, the hive is fragmented.` headline from `P · 01`. In the source these were one slide with a build. As two static slides a repeated headline reads as a mistake.

Visual, right half: a single large hexagon filled `alarm`, bees inside it, a wasp entering at the upper right with a strike mark at the point of entry. This is one of the fragmented hexagons from `P · 01`, enlarged. Keep its silhouette recognisably the same shape so the reader connects the two slides.

Optional caption in `slate-2`: `Integration tax is the visible cost of fragmentation. Breach is the one nobody prices.`

---

### P · 03 — Every asset guards itself

Label: `THE SOLUTION`
Headline: `Every asset guards itself.`
Sub, two lines in `slate`: `Each DER sits in its own sealed cell.` / `One compromised device never reaches the fleet.`

Three points, each with a small solid `comb` hexagon as bullet marker:
1. `Trusted Execution Environment` — `Policy enforced on the edge device.`
2. `Zero-trust device identity` — `Each DER enrolled and authenticated alone.`
3. `Data sovereignty` — `Telemetry stays in-jurisdiction, never offshore.`

Visual, right half: seven hexagons in a proper tessellated comb, edges shared, one bee per cell. The wasp from `P · 02` is present but **outside** the comb and turned away, with no strike mark and no entry point. It never appears again after this slide.

The visual argument across `P · 01` to `P · 03` is a progression in geometry: scattered, then breached, then tessellated. Cells that share walls are stronger than cells that stand alone, and they are also cheaper. Hold that geometric logic, because slide `A · 05` and the whole cost story depend on it.

---

### P · 04 — One language out

Label: `THE SOLUTION`
Headline: `Many dialects in. One language out.`
Sub, in `slate`: `The gateway performs model translation, not just protocol translation.`

Three zones, left to right:

1. **Left panel**, `comb` fill, rounded, holding the southbound dialects with a small line icon beside each: `IEEE 2030.5`, `SunSpec Modbus`, `MQTT`, `Zigbee`, `Integrations`. In the panel's lower left, a small cluster of sealed comb cells with bees inside, carrying the sealed-cell idea forward from `P · 03`.
2. **Centre**, the physical gateway drawn as a real product object with two labelled cables entering it, `CAN` and `MODBUS`. Below it, a dashed branch labelled `OR Software License` running to the right. Keep this branch. It is the only place in the whole deck that states the gateway is optional and the stack can ship as software, and slide 04 in the main deck does not carry it.
3. **Right panel**, `comb` fill, the northbound consumers: `Utility`, `Aggregators`, `Integrators`, `OEMs`, `Financiers`.

Between centre and right, set `IEEE 2030.5` in large rotated type running vertically. That single standard is the whole width of the slide's argument.

A queen bee sits below the centre, between the gateway and the right panel. She is the master node. Do not label her on this slide; `P · 06` explains her.

Footnote in `slate-2`: `IEEE 2030.5 appears on both sides because it is spoken southbound to compliant assets and northbound to every consumer. Everything else is translated.`

---

### P · 05 — The agent has no hands

**This slide is new. Nothing in the source deck covers it, and it is the reason the prologue works.** Interoperability and security each get two slides. Agentic gets this one, so it has to carry both a problem and an answer.

Label: `THE SOLUTION`
Headline: `An agent can plan a dispatch. Nothing lets it act.`
Sub, in `slate`: `There is no interface between a model that reasons and hardware that must not be wrong.`

**Left column, the gap.** Three lines, each a short label in DM Mono followed by one sentence:
- `No bounded interface` — `An API key to a battery is not a safety model.`
- `No policy at the edge` — `If the link drops or the model errs, nothing stops the command.`
- `No verifiable record` — `An action nobody can audit is an action nobody will authorise.`

**Right column, the answer.** Draw it as a two-tier stack split by a visible horizontal boundary in `honey`, reusing the control-authority geometry from `A · 07` so the two slides are recognisably the same diagram at different depths:
- **Above the boundary**, `Agent proposes` — `MCP-native. The agent queries the hive and requests an action in the language every asset already speaks.`
- **The divider**, labelled `boundary` in DM Mono, `honey`.
- **Below the boundary**, `The cell disposes` — `Policy-as-code runs on the edge device. Every request is checked against that asset's safe operating envelope before anything moves.`

Closing line, spanning the slide, emphasised: `The agent can ask the hive for anything. The cell decides what is safe.`

Visual: a single bee arriving at a sealed cell carrying a command. The cell's outline is lit, using the **exact same lit-cell treatment** that repels the wasp on `P · 03`. That reuse is the argument: the mechanism that keeps an attacker out is the mechanism that keeps an agent in bounds. One security model, two threats, no additional engineering.

---

### P · 06 — The hive

Label: `THE PLATFORM`
Headline: `The hive is interoperable, cryptographic and agentic-ready.`

This is the payoff. Everything introduced across the previous five slides resolves into one picture. Build it in four horizontal bands.

**Band 1, top, the actors.** Five filled hexagons across the slide width, each labelled beneath: `Utility / DISCOM`, `Aggregator / VPP`, `OEM`, `Financier`, `AI agent`. Four are `comb`. The fifth, `AI agent`, is `indigo` fill with `indigo-d` text. It is drawn at identical size and on identical footing with the other four, because the claim is that an agent is a peer consumer of the hive rather than a feature bolted onto it.

**Band 2, the hive, the largest object on the slide.** A solid tessellated honeycomb slab spanning nearly the full content width. Not the faint background lattice, a real filled object. Inside it, three thin horizontal strata, top to bottom, each a single line in DM Mono:
1. `IEEE 2030.5 · one model, every asset` — this is the word **interoperable**
2. `TEE · zero-trust identity · one sealed cell per asset` — this is the word **cryptographic**
3. `MCP · policy-as-code · agents call the hive directly` — this is the word **agentic-ready**

The headline names three properties. Each stratum is one of them, in the same order. Without these three bands the slide asserts three things and shows none of them, which is the single largest defect in the current draft.

The queen bee sits inside the hive slab, at its centre. Label her `master node` in DM Mono, `slate-2`. She is what the actors above address and what dispatches downward.

**Band 3, the traffic, drawn through and around the hive.** Two visually distinct flight paths, both crossing the hive slab, and both must be present or the slide fails to show that data and commands move in both directions:
- **Rising**, bees carrying nectar upward from the assets to the actors. Trail dotted, in `mint`. Labelled once at the left margin: `telemetry ↑`
- **Descending**, bees carrying a command downward from the actors to the assets. Trail dotted, in `honey`. Labelled once at the left margin: `dispatch ↓`

**Band 4, bottom, the assets.** Six hexagons in a tessellated row, each sealed, each with one bee inside: `BESS`, `Solar PV`, `EV charger`, `Smart meter`, `Flexible load`, `Distribution transformer`. These are the same bees that were locked in separate silos on `P · 01` and given their own cells on `P · 03`. Now they are adjacent, sealed, and reachable.

Closing line, display scale, below band 4: `Every actor above speaks one language. Every asset below keeps its own cell. The hive is what makes both true at once.`

**What to leave out.** Do not add the honey jars from the source product slide (`Forecasting`, `Peer-to-Peer Trading`, `Demand Flexibility`, `Asset Securitisation`, `Asset Health Management`) to this slide. They are the revenue layer, and this slide's job is the bidirectional traffic and the three properties. Adding a sixth band turns the payoff into an architecture diagram. The applications are already carried by main-deck slide 08 and by `A · 05`.

---

### Not in the prologue: the source product slide

The source deck's `DER GATEWAY` slide (`Palm sized & Under $50 BOM`, protocol stack, devices under management, business model, the five honey jars, the `Interoperability + Security + MCP` strip) does **not** enter the prologue. Two reasons:

1. It is product and pricing, not story. Its content is already covered by main-deck slides 05, 06 and 13, in more detail and split correctly by SKU.
2. It prints `Under $50 BOM` and `$150 one-time gateway license`, which are the two figures v3 deliberately removed. See the pricing note at the end of this document. Do not reintroduce them anywhere.

If you want the honey-jar visual preserved, the correct home is main-deck slide 06 or `A · 05`, rendered as geometry rather than as jars, per §2.1.

---

## The 18 slides

---

### 01 · Cover

Label: `Distributed energy platform · Seed`
Headline, display: `Switching on the grid we already built.`
Sub: `Hardware gateway + platform. One integration, any asset, any application.`
Footer: `north star: megawatts under management`
Visual: the hive lattice at its most present. Most cells hollow, a few mint, one or two honey. The only slide where the background leads.

---

### 02 · Problem

Headline: `The megawatts already exist.` Second line in `slate-2`: `They're just stranded.`

Three points, each with a small hexagon icon:
1. `Millions of batteries, solar arrays and EV chargers are already installed behind the meter.`
2. `Obsolete protocols, no monitoring, no grid-program eligibility.`
3. `Depreciating on a lender's balance sheet, earning nothing.`

Stat block: `80%` with caption `of DER fleets still lack dispatchability, capped at pilots, leaking margin into custom integration work.`

Visual: a field of hollow, unfilled hexagons. Nothing is lit. This is the visual baseline for the whole deck.

⚠️ **Overlap to manage.** This slide and `P · 01` both open on `80%` and both state the fragmentation problem. Coming seven slides apart, the repeat is noticeable. Two ways to handle it, pick one and hold it:
1. **Recommended.** Keep both, but split the 80% between them. `P · 01` carries the interoperability and security half of the caption, exactly as written there. This slide drops the percentage entirely and leads on `stranded`, since its distinct argument is that the megawatts are already installed and depreciating, which the prologue never says.
2. Cut this slide's stat block and let the prologue own the number outright.

Do not print `80%` at display scale twice in one deck.

---

### 03 · Why now

Headline: `Two curves just crossed.`
Sub: `DER growth has outrun the infrastructure built to carry it, and interconnection rules just made dispatchability mandatory.`

Chart titled `Installed DER capacity — illustrative`: three ascending steps, `4 TWh / today`, `11 TWh / +3 yrs`, `33 TWh / +6 yrs`. Clean stepped form in mint. Keep the word "illustrative" visible.

Two drivers:
- `I` — `IEEE 1547 and IEEE 2030.5` `are the day-one interconnection requirement for distribution-connected assets, and there is no cheap way to speak them at the edge.`
- `II` — `Sub-₹6,000 hardware` `means an edge gateway can sit on every asset, not just the biggest ones.`

---

### 04 · Solution

Headline: `Every asset, one model.`
Sub: `The gateway performs model translation, not just protocol translation.`

A four-tier vertical diagram, top to bottom:
1. **Top box**, indigo fill, indigo-d text, roughly one third slide width, centred: `DERMS / utility / cloud` with subtitle `Northbound consumer`.
2. **Bidirectional arrow** labelled `IEEE 2030.5`.
3. **Centre box**, honey fill with honey-d border, spanning nearly the full content width, the widest object on the slide: `DER gateway` with subtitle `Normalises every asset into one 2030.5 model`.
4. **Two bidirectional arrows** down, left labelled `Modbus / SunSpec`, right labelled `CAN`.
5. **Bottom row**, four equal boxes in `warm` with `rule` borders: `Solar PV / SunSpec Modbus`, `Inverters / Modbus, curves`, `Battery / BMS / CAN, cell level`, `DT / Modbus, DNP3`.

Footnote in slate-2: `DT — distribution transformer. Read via its existing metering or monitoring IED.`

Keep the geometry symmetrical. The argument is that many dialects go in the bottom and one standard comes out the top.

---

### 05 · Product line

Headline: `Two gateways. One core.`
Sub: `Same compute, same stack, same northbound interface. The difference is where it has to survive.`

A two-column comparison, Model A in **mint**, Model B in **indigo**. Give both columns identical row structure so the eye compares across rather than reading down twice.

| | **Model A — DER Gateway** | **Model B — DT Gateway** |
|---|---|---|
| Application | `BESS, solar PV, inverters` | `Distribution transformer sites` |
| Class | `SBC-tier embedded gateway` | `Ruggedised, cellular-connected` |
| Environment | `Indoor / enclosure-protected, IP20` | `Outdoor pole or pad mount, IP65 / IP66` |
| Temperature | `0 to +50 °C commercial` | `−40 to +85 °C` |
| Reads | `Inverter and BMS telemetry` | `The transformer's existing meter or IED` |
| Southbound | `RS-485, Ethernet, CAN 2.0B` | `RS-485, Ethernet, DNP3, optional IEC 61850` |
| Connectivity | `Ethernet, optional 4G LTE` | `Dual: Ethernet + 4G LTE, GPS` |
| Target price at volume | `~₹6,000` | `~₹24,000` |

Below the table, one line spanning both columns, emphasised: `Neither model meters. Both read what is already measured, and normalise it into one IEEE 2030.5 model.`

Footnote in slate-2: `Target BOM-driven prices at volume. Early certified, industrial-temperature units land higher.`

---

### 06 · Value proposition

Headline: `What each side actually gets.`

Four cards with identical treatment, one per buyer:

| Buyer | Gets | Instead of |
|---|---|---|
| `Asset owner` | `A stranded asset becomes a revenue-earning one.` | `Waiting for a replacement they will not buy.` |
| `Utility / DISCOM` | `Visibility and control at the LV network edge.` | `A blind spot below the feeder.` |
| `OEM` | `Grid-program eligibility without building a standards stack.` | `Twelve months of protocol engineering.` |
| `Financier` | `Independent telemetry on the whole book.` | `Residual value they cannot verify.` |

Closing line, emphasised: `One integration replaces a project per site.`

---

### 07 · What the DISCOM sees

This slide carries the beachhead argument, so give it room. Headline: `The blind spot below the feeder, closed.`

Split the slide by model, using the mint and indigo convention established on slide 05.

**Left, Model A — at the DER**
Four grouped metric families, each a short labelled list. Do not use full sentences here, use the technical register.
- `Visibility` — `active power per site and per feeder · reactive power and power factor · availability and connection status · reverse power flow`
- `Grid support` — `Volt-VAR and Volt-Watt curve status · voltage at point of connection · frequency response · ride-through event log`
- `Dispatch` — `curtailment requested vs delivered · setpoint compliance · ramp-rate adherence · response latency`
- `Battery` — `state of charge and state of health · cycles · round-trip efficiency · cell-level temperature and fault flags`

**Right, Model B — at the transformer**
- `Loading and health` — `kVA vs rating · overload events and duration · oil and winding temperature · estimated loss-of-life · tap position`
- `Power quality, LV side` — `per-phase voltage · phase imbalance · reverse power flow duration · sags, swells, interruptions`
- `Loss and efficiency` — `energy through the transformer per interval · input vs downstream consumption for AT&C loss localisation · overloaded vs underutilised DTs`
- `Reliability` — `outage and restoration timestamps · interruption duration and frequency feeding SAIDI and SAIFI · last-gasp reporting through power-loss ride-through`

Across the bottom, five outcome chips in honey, which is what the DISCOM actually buys:
`Fewer transformer failures` · `AT&C loss localisation` · `SAIDI / SAIFI at fine grain` · `Rooftop solar without LV overload` · `Deferred transformer replacement`

Footnote in slate-2: `Transformer metrics are derived from the DT's existing instrumentation. Availability depends on what that system exposes.`

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

Below, a comparison bar drawn to scale: `Conventional integration [ ] weeks` against `kWh onboarding [ ] days`.

Caption: `No site survey per asset. No vendor engineering engagement. No custom driver written on site.`

---

### 10 · Distribution

Headline: `How the hardware reaches the asset.`

Four channel routes as parallel paths converging on an installed gateway. Each carries the route, the partner type, the commercial mechanism, and **which model it carries**, using the mint and indigo convention:

1. `Direct` — `Asset owners and C&I sites` — `Gateway sale plus SaaS` — **Model A**
2. `DISCOM channel` — `5 DISCOMs via Beckn DEG` — `Utility-sponsored deployment across their network` — **Model B, and Model A where DER is co-located**
3. `OEM embed` — `Monarch Transformers and equivalents` — `Telemetry embedded at manufacture, shipped inside the asset` — **Model B**
4. `Financier and EPC` — `Portfolio owners, installers` — `Bundled at financing or at install` — **Model A**

Manufacturing line: `Custom PCB in fabrication with PCB Power India.`

Caption: `Every route lands the same core. Only the enclosure and the party who pays for it change.`

---

### 11 · Market

Headline: `Stranded megawatts in one beachhead: [named market].`

Three figures set as typography, not a concentric-circle TAM diagram:
- `Installed base` — `[X GW]` — `behind the meter`
- `Addressable stranded` — `[Y GW]` — `reachable via retrofit and OEM cloud`
- `Annual SAM` — `[$Z]` — `SaaS, hardware and revenue share`

Add a fourth figure for the transformer opportunity, since Model B addresses a different denominator: `Distribution transformers in [named market]` — `[X million]` — `today largely uninstrumented`.

Body: `Beachhead: India DISCOMs via Beckn DEG, expanding to U.S. utilities and aggregators on IEEE 2030.5.`
Footnote in slate-2: `Multi-market expansion is on the roadmap, not this slide.`

---

### 12 · Unit economics, hardware

This is the most important new slide in the deck. Headline: `Model B is Model A plus the environment.`

**Left: the two waterfalls.** Show Model A as a short waterfall from price to contribution margin, then Model B as the same waterfall with a stack of named environmental deltas added on top. The visual argument is that the price gap is entirely explainable by physics, not by markup.

```
MODEL A                              MODEL B
Price               ~₹6,000          Price                    ~₹24,000
  less  BOM            [₹    ]         Model A core BOM           [₹    ]
  less  Assembly, test [₹    ]         + IP65/66 outdoor enclosure[₹    ]
  less  Logistics      [₹    ]         + −40 to +85 °C grade      [₹    ]
  less  Warranty       [₹    ]         + Surge and EMC protection [₹    ]
  =     Contribution   [₹    ] [ %]    + Cellular modem, antenna  [₹    ]
                                       + Wider isolated I/O       [₹    ]
                                       + Power-loss ride-through  [₹    ]
                                       less Assembly, logistics,
                                            warranty              [₹    ]
                                       =    Contribution   [₹  ] [ %]
```

**Right: three figures that make the mix legible.**
- `Assumed mix, year [X]` — `[X%] Model A / [X%] Model B`
- `Blended contribution per unit` — `[₹    ]`
- `Units to breakeven on tooling and certification` — `[X]`

Caption: `Hardware is not the margin engine. It is the wedge that installs the software, and Model B is the wedge that gets a DISCOM to pay for the network.`

Footnote in slate-2: `Model B price composition to be confirmed as hardware-only versus hardware plus connectivity plus SLA.`

---

### 13 · Unit economics, software

Headline: `[$X] per asset per month, [X%] gross margin.`

Left, the recurring economics as a per-asset unit:

```
SaaS revenue per asset / month      [    ]
  less  Cloud and telemetry storage [    ]
  less  Support and success         [    ]
  =     Gross profit / asset / mo   [    ]  [ %]
```

Right, four SaaS metrics in a row:
- `CAC per asset` — `[    ]`
- `Payback period` — `[X] months`
- `LTV / CAC` — `[X]x`
- `Net revenue retention` — `[X%]`

Below, a small comparison: `Cost per MW onboarded via gateway [    ]` against `via OEM cloud [    ]`, with the note `cloud onboarding carries no hardware cost, so blended cost per MW falls as that path scales`.

Caption: `Each device profile built unlocks a whole model class. The library compounds; the cost to onboard does not.`

---

### 14 · Financial projections

Headline: `[X] MW under management by year [X].`

One combined chart across `yr 1` to `yr 5`, with four series:
1. Model A hardware revenue, mint
2. Model B hardware revenue, indigo
3. Software and recurring revenue, honey
4. Total cost, drawn as a line rather than a bar

Beneath, a driver table. Every cell is a bracketed placeholder:

| | yr 1 | yr 2 | yr 3 | yr 4 | yr 5 |
|---|---|---|---|---|---|
| Model A units shipped | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Model B units shipped | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Assets under management | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| MW under management | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Hardware revenue | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Recurring revenue | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Gross margin % | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Burn | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |

Annotate the point where recurring revenue overtakes hardware revenue. That crossover is the story of the slide.

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
5. `One core across two form factors, so the DER gateway and the transformer gateway share every profile, every driver and every update.`

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

Use of funds as a four-segment horizontal bar with percentages:
- `Engineering and device profiles` — `[X%]`
- `Hardware production run, both models` — `[X%]`
- `Certification and utility integration` — `[X%]`
- `Runway and operations` — `[X%]`

`This gets us to`, three milestones:
- `[X] MW under management`
- `[X] device profiles shipped`
- `Model B certified and deployed at [X] DT sites`

`Runway`: `[X] months.`

Closing line, display scale: `Everyone else is chasing next year's assets. We're switching on the ones already in the ground.`

Visual: the hive lattice returns from the cover, now mostly lit mint with a scatter of honey. Mirror slide 02, where nothing was lit, so the deck closes on the frame it opened with.

---

## Appendix, not part of the 18

All appendix slides use the `cool` background. Set every specification list in DM Mono.

**A · 01 — Model A, DER Gateway, full specification**
`Positioning: edge DER controller for behind-the-meter and small commercial sites. Control-grade device.`
- `Compute & OS` — `Quad-core ARM Cortex-A (RK3568 / i.MX8M-mini class) · 1–2 GB RAM · 8–16 GB eMMC + microSD store-and-forward · Embedded Linux (Yocto / Buildroot) · containerised app runtime · OTA`
- `Southbound` — `1–2× isolated RS-485 (Modbus RTU) · Ethernet (Modbus TCP, SunSpec Modbus) · 1× CAN 2.0B (CANopen / J1939) for direct BMS access · optional digital I/O for interlocks and relays`
- `Northbound` — `Ethernet + optional 4G LTE · IEEE 2030.5 server and client`
- `Protocols` — `IEEE 2030.5 · Modbus RTU/TCP · SunSpec Modbus · CAN (CANopen/J1939) · IEEE 1547 DER function set`
- `Functions` — `active and reactive power setpoints and schedule execution · Volt-VAR, Volt-Watt, freq-Watt curve configuration · ramp-rate control · ride-through configuration and event capture · safe-operating-envelope enforcement on comms loss · cell-level BMS telemetry over CAN (per-module voltage, temperature, balancing, fault flags)`
- `Timing & security` — `NTP / PTP, optional GPS · TLS transport · secure boot, SoC-dependent · signed firmware · RBAC`
- `Physical` — `DIN-rail or panel mount · IP20 · 9–24 VDC · 0 to +50 °C commercial, −20 to +60 °C industrial option · CE / FCC target`

**A · 02 — Model B, DT Gateway, full specification**
`Positioning: connectivity and control gateway for transformer sites. Reads existing DT metering and monitoring. Does not meter.`
- `Compute & OS` — `Quad-core ARM Cortex-A, equal or higher than Model A · 2 GB RAM · 16–32 GB storage for outage buffering · Embedded Linux · containerised apps · redundant firmware banks · OTA`
- `Data acquisition, read-only` — `Modbus / DNP3 client to the transformer's existing meter or monitoring IED · optional IEC 61850 client · digital inputs for status and alarms · reads loading, oil and winding temperature, tap position, LV voltage quality, reverse-power-flow status as exposed by the existing system`
- `Southbound` — `RS-485 (Modbus RTU) · Ethernet (Modbus TCP) · 1× CAN 2.0B where storage is co-located`
- `Northbound` — `IEEE 2030.5 · optional DNP3 / IEC 61850 to utility SCADA · dual Ethernet + 4G LTE · GPS time sync`
- `Functions` — `aggregate and normalise DT and co-located DER telemetry into 2030.5 · transformer-aware dispatch constraint respecting DT thermal and loading limits · event capture and store-and-forward through outages · safe-envelope enforcement for co-located controllable assets`
- `Physical, the cost drivers versus Model A` — `outdoor pole or pad mount · IP65 / IP66 · −40 to +85 °C · surge and EMC protection for pole-top · wider isolated I/O count · integrated cellular modem and antenna · ride-through capacitor or battery for last-gasp reporting`

**A · 03 — Model A metrics for DISCOMs, full catalogue**
Reproduce the four families from slide 07 in full, plus `energy and loss` which slide 07 omits for space: `energy exported and imported per interval · self-consumption versus export ratio · contribution to feeder peak reduction · solar generation profile for feeder-level forecasting`. Close with the four value lines: `LV network visibility where none existed · reactive support to manage feeder voltage without capital works · DER dispatch for peak management and network-upgrade deferral · data foundation for hosting-capacity and planning studies`.

**A · 04 — Model B metrics for DISCOMs, full catalogue**
Reproduce the four families from slide 07 in full, plus `DER coordination where DER is co-located`: `combined DT load and DER export view · transformer-aware dispatch constraint limiting DER export to protect the DT · local hosting-capacity indication from real loading and voltage data`. Close with the five value lines already used as chips on slide 07.

**A · 05 — Layered architecture**
Sub-label `top: cloud · bottom: physical`. Tiers: `grid DERMS`, `external APIs`, `open networks`, `financing rail`, then `2030.5 server + client — any deployment mode`, `universal API layer — REST, webhooks, streaming`, `forecasting`, `optimisation`, `dispatch`, `telemetry`, `asset management`, `OTA`, then the honey translation band `cloud translation — vendor cloud APIs` and `edge gateway — Modbus TCP southbound`, then physical: `BESS`, `PV inverters`, `EVSE`, `meters and loads`, `distribution transformers`.
Caption: `The translation band sits between the software you own and the hardware you don't. That placement is the whole argument.`

**A · 06 — Four deployment modes**
`Same core, four ways in.` `Mode 01 · Client only` — `Edge gateway speaks out to an existing server.` `Mode 02 · Server only` — `2030.5 server receives utility controls in the cloud.` `Mode 03 · Both` — `Server and client together, end to end through our stack.` `Mode 04 · With apps` — `Full platform, our forecasting and optimisation on top.`
Caption: `Each asset is onboarded by whichever path is cheapest.`

**A · 07 — Control-authority boundary**
`Economics in the cloud. Safety at the edge.` `Cloud / Economic dispatch` — `Price-aware scheduling and portfolio allocation, strategy decided centrally.` A visible `boundary` divider. `Edge / Protective + grid-support` — `Runs autonomously and stays inside each asset's safe limits, even if the link drops.`

---

## Verify before delivering

1. 31 slides total, in this order: cover `01 / 18`, prologue `P · 01` to `P · 06`, main deck `02 / 18` to `18 / 18`, appendix `A · 01` to `A · 07`.
2. Every bracketed placeholder is still bracketed and styled in `slate-2`. No invented figures anywhere.
3. Model A is mint and Model B is indigo on every slide that splits by model: 05, 07, 10, 12, and 14. The convention never inverts.
4. Slides 12, 13, and 14 are visually a set. Same chart language, same table treatment, same label positions.
5. Slide 07 is dense but readable. If the eight metric families do not fit at body size, cut items from the lists rather than shrinking the type below 16pt.
6. Every technical specification string is set in DM Mono, on slide 05, slide 07, and all appendix slides.
7. Colour semantics hold across all 18 slides.
8. Every diagram is grouped vector shapes with live, editable text.

**Prologue-specific checks:**

9. Bees, hives and the wasp appear on `P · 01` to `P · 06` and **nowhere else**. The cover, all 18 main slides and all 7 appendix slides are geometry only.
10. `P · 01` and `P · 02` do not share a headline.
11. The wasp appears on `P · 02` (inside, attacking) and `P · 03` (outside, repelled), then never again.
12. The lit-cell treatment on `P · 03` and the lit-cell treatment on `P · 05` are visually identical. Different colours or different glow treatments break the argument that it is one security model handling two threats.
13. `P · 06` shows both flight directions, `telemetry ↑` in mint and `dispatch ↓` in honey, and both are labelled.
14. `P · 06` band 2 contains exactly three labelled strata, matching the three adjectives in its headline in the same order.
15. `Under $50 BOM` and `$150 one-time gateway license` appear nowhere in the deck.

Deliver the .pptx and the .pdf, plus a short note listing any decision you made that this brief did not specify.

## END OF PROMPT

---

## Notes for Arham, not part of the prompt

### On the prologue, added in v3.1

**The gap the prologue fills, and the one it does not.** Your six source slides give interoperability a problem slide and a solution slide, and give security the same. Agentic gets neither. It appears as a word in the `P · 06` headline and as an unexplained `MCP` chip on the product slide, and that is all. That was the real weakness, not the missing artwork on the last slide. `P · 05` is the fix: it states the gap (a model can reason about the grid, nothing safely lets it act) and answers it with the boundary you already describe in `A · 07`. If you cut one prologue slide for time, cut `P · 04`, because main-deck slide 04 makes the same argument with better geometry. Do not cut `P · 05`.

**The one design decision I would defend hardest.** `P · 05` reuses the exact lit-cell visual that repels the wasp on `P · 03`. That is not a shortcut. It says the safety mechanism that keeps an attacker out is the same mechanism that keeps an agent in bounds, which means agentic dispatch costs you no additional security engineering. That is a strong claim and it is true of your architecture. Make sure whoever builds the deck does not render those two cells differently.

**The prologue costs you six slides of patience.** You picked prologue-on-top rather than replacing slides 01, 02 and 04, so an investor now sees seven slides before the first verifiable fact. That is survivable in a room where you are talking over it and it is expensive in a deck sent cold over email. Consider maintaining two exports from the same file: the full 31 for in-person, and a version with the prologue hidden for send-ahead. If you want that, tell me and I will add the cut list to the prompt.

**A duplication you now have to resolve.** `P · 01` and main slide 02 both lead with `80%` at display scale, seven slides apart. I put two options in the slide 02 spec and recommended splitting the number rather than printing it twice. Pick one before this is built.

**Two source-copy fixes.** Your `P · 01` slide reads `an existing APIs are too expensive`; the spec sets it as `Existing APIs are too expensive`. Your `P · 02` repeats the `P · 01` headline, which works as an animated build and reads as an error as two static slides; the spec gives it `One weak cell and the wasp gets in.`, which is locked copy from your master knowledge doc.

**The source product slide is excluded and you should know why.** It carries both `Under $50 BOM` and `$150 one-time gateway license`, which are exactly the two figures v3 stripped out, and which contradict the ₹6,000 / ₹24,000 spec sheet. See the pricing note immediately below. Its honey jars are a good visual, and if you want them the honest home is main slide 06, rendered as geometry.

### On everything else, from v3

**A pricing conflict you have to resolve before this goes out.** The earlier deck copy and the master knowledge document both say `$150 one-time gateway license` and `under $50 BOM`. The new spec sheet says Model A targets ~₹6,000, which is roughly $70, and Model B targets ~₹24,000, roughly $285. Those cannot all be describing the same thing. Three readings are possible and only you know which is right:

1. `$150` is a software license charged on top of hardware, and the ₹ figures are hardware prices. If so the deck needs both numbers, stated separately.
2. `$150` is the old single-SKU hardware price and is now superseded by the two ₹ prices.
3. `$150` was a US-market price and the ₹ figures are India-market prices for the same units.

I removed the `$150` and the `under $50 BOM` claims from the main line of v3 rather than print two contradictory prices in one deck. Slide 03 driver II now reads `Sub-₹6,000 hardware`. If reading 1 is correct, tell me and I will put the software license back into slide 13 where it belongs.

**Model B carries the DISCOM story, and that changes the deck's centre of gravity.** Model A is a good product. Model B is the one that gets a utility to sign, because transformer blindness is a problem DISCOMs already know they have and already have budget lines for. Slide 07 is built to be the slide you linger on in an India meeting. If you find yourself pitching Model B first in real conversations, tell me and I will reorder the deck around it.

**Three open questions from your spec sheet are now bracketed in the deck**, so they surface rather than hide: the ₹24,000 composition (hardware only, or hardware plus data plan plus SLA), the certification targets per region, and the temperature grade for Model A at launch. The first one matters most, because a price that silently includes a data plan is a margin figure, and an investor will find that in diligence rather than in the deck.

**What was cut to hold 18.** v2's Solution and How-it-works slides merged into one, because the four-tier diagram makes the argument on its own. The four use-case slides stayed cut. The competition slide is still absent and still needs preparing, though it is now more urgent, since a two-SKU hardware line invites a direct comparison with Kalkitech and with the transformer-monitoring vendors who already sell into DISCOMs.

**One copy fix.** Your source document has `a observable` in the Model A summary. It reads `an observable` in the deck.
