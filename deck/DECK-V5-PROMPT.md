# kWh Electric investment deck, v5 — 20 slides

> Supersedes `deck-v4.html`, `DECK-V3-PROMPT.md`, v2, and the rebuild prompt. Use this one.
> Numbered v5 because `deck/deck-v4.html` already exists as a built 20-slide deck. This brief
> replaces it: v4 still opens on `Today, the hive is fragmented`, still carries the banned
> two-word headline style (`One gateway. One common language.`, `Two gateways. One core.`),
> has no bottom-up market sizing, and has no competition slide.
>
> **What changed and why.** v4 rebuilds the opening around one visual argument: the grid used to be
> one large hexagon, it has already broken into millions of small ones, and kWh is the layer that
> makes the small ones controllable. It purges the two-word-sentence headline style. It adds real
> bottom-up market sizing and a competition slide, both of which an investor will ask for and
> neither of which existed. It fixes the sequence so team is second-to-last and the ask is last.
> It also fixes six factual errors carried in the 24-slide render.
>
> Paste everything between START and END into Manus or another deck-building agent.

---

## START OF PROMPT

Build a 20-slide seed investment deck for **kWh Electric**, plus seven appendix slides. Deliver a native, editable presentation, not a web page.

### 1. Output contract

1. A **PowerPoint file (.pptx)**, **16:9, exactly 1920 × 1080 px per slide**. Every slide is the same size. No slide is taller, wider, or cropped differently from any other. If you produce a contact sheet or preview grid, every cell in it must be 16:9 as well.
2. A **PDF export** at the same dimensions, one slide per page.
3. Twenty main slides numbered `01 / 20` to `20 / 20`. Seven appendix slides numbered `A · 01` to `A · 07`, which do not count toward the 20.
4. Every element is a real editable object. Real text boxes, real vector shapes, real grouped diagrams. No slide may be a flattened image.

Fonts: **DM Sans** (400 / 500 / 700) for text, **DM Mono** (400 / 500) for labels, numerics, footers, and technical specification strings. Embed them. If embedding fails, substitute Inter and JetBrains Mono and say so.

### 2. Headline discipline, read this before writing any slide

The previous version of this deck was written in a style that reads as machine-generated, and it has to go. **These constructions are banned:**

- Two-word sentence pairs. `One device. Infinite value.` `Every asset. One model.` `Two models. One platform.`
- Triadic fragments. `Land. Expand. Multiply.` `Every asset. Everywhere. Working together.` `Enroll. Dispatch. Settle.`
- Abstract nouns as the payoff. `infinite value`, `working together`, `powerful for the grid`, `unlocks every use case`.

**Every headline must contain at least one of: a number, a named entity, or a claim that could be proven wrong.** Write the way an engineer explains a system to another engineer who is short on time. Full sentences are fine. Fragments are fine if they are specific. What is not fine is rhythm standing in for content.

Compare:

| Banned | Required |
|---|---|
| `One device. Infinite value.` | `Nine applications run on the same gateway.` |
| `Every asset. One model.` | `Six protocols in, one asset model out.` |
| `Two models. One platform.` | `Two gateways, one software core.` |
| `Land. Expand. Multiply.` | `India DISCOMs first, US 2030.5 programs second.` |
| `From install to impact.` | `Five steps from unboxing to first dispatch.` |

The headlines specified per slide below already follow this rule. Do not "improve" them back into the banned style.

### 3. Design system, exact values

| Token | Hex | Use |
|---|---|---|
| ink | `#0E1512` | Primary text |
| slate | `#4A5A52` | Secondary text |
| slate-2 | `#8A9992` | Tertiary text, captions, placeholders |
| paper | `#FAFAF8` | Default background |
| warm | `#FBF7EE` | Warm alternate background |
| cool | `#F4F6F4` | Appendix background |
| rule | `#E3E7E4` | 1px hairlines |
| mint | `#E4F4EA` | Fill: connected asset. **Also: Model A** |
| mint-d | `#1E8B4E` | Stroke and text on mint |
| honey | `#C8901B` | Dispatch, translation layer, money |
| honey-d | `#8A6008` | Stroke and text on honey |
| indigo | `#EDEAFB` | Fill: software layer. **Also: Model B** |
| indigo-d | `#4B31C4` | Stroke and text on indigo |

Type scale in points on the 1920 canvas: display 80, h1 46, lead 25, body 18, section label 12 (DM Mono, uppercase, ~0.12em tracking), micro 13 (DM Mono).

**Colour is semantic.** Hollow outline means an asset that exists but cannot be controlled. Mint means connected and controllable. Honey means dispatch, translation, or money. Indigo means a software layer. Model A is always mint, Model B is always indigo, on every slide that splits by model.

Margins 100px left and right. Every slide carries a DM Mono section label top left (`07 · Product line`), a headline, the content, then `kWh Electric` bottom left and `07 / 20` bottom right.

### 4. The hexagon system, and the argument it carries

The hexagon is the only geometric primitive in this deck, and across slides 02, 03, 05 and 20 it tells the whole story on its own. Build these four states as one system and reuse them exactly:

- **State 1, the single box** (slide 02). **One** large hexagon, filling most of the canvas, solid `slate-2` fill. Inside it, a small number of large asset glyphs. Everything controllable is inside this one shape. Outside it, empty paper.
- **State 2, the shatter** (slide 03). The large hexagon has broken into a dense lattice of small hexagons spread across the canvas. Almost all of them are **hollow outlines** in `rule`. Three or four remain solid `slate-2`, and those are the only ones still controllable. The break should read as something that already happened, not something in progress.
- **State 3, the lighting** (slide 05). Same lattice, same positions as state 2, but a translation band in `honey` now runs across it, and cells adjacent to the band have turned `mint`. Lighting spreads outward from the band.
- **State 4, the field** (slide 20). Same lattice, mostly `mint`, with a scatter of `honey` for assets under active dispatch, and a handful still hollow because the work is not finished.

**The lattice cell positions must be identical across all four slides.** That is what makes the argument land: an investor sees the same field four times and watches it change state. If the positions drift, the slides become four unrelated decorations.

No bees, no honeycomb illustrations, no honey jars, no insects anywhere in the deck. The hexagon is a shape, not a character.

### 5. Placeholder policy

Where a value appears in **square brackets**, reproduce the brackets literally in `slate-2`. Do not invent numbers. Do not substitute plausible-looking figures. Unbracketed copy is verified and must be reproduced as written.

---

# The 20 slides

## Act one, the problem (02 to 04)

---

### 01 · Cover

Label: `Distributed energy platform · Seed`
Headline, display: `Switching on the grid we already built.`
Sub: `An edge gateway and platform that makes installed energy assets dispatchable, whatever protocol they speak.`
Footer: `north star: megawatts under management`

Visual: hexagon lattice in **state 4**, quiet and low-contrast, as a background rather than a subject. The cover shows the destination; the deck earns it.

---

### 02 · The grid was one box

Label: `02 · Problem`
Headline: `Grid control was built for a few hundred large assets.`
Sub: `Central generation, central dispatch, one control room. That worked because everything controllable sat inside one system.`

Visual: hexagon lattice **state 1**. One large solid hexagon dominating the canvas, containing a handful of large glyphs labelled `thermal`, `hydro`, `grid-scale solar`, `transmission`.

Three supporting facts down the left, each one line:
- `A few hundred assets per utility.`
- `One protocol stack, one vendor relationship, one control room.`
- `Dispatch was a solved problem because the problem was small.`

Caption in slate-2: `Nothing here is broken. It is just built for a grid that no longer exists.`

---

### 03 · The box already broke

Label: `03 · Problem`
Headline: `The assets distributed. The control layer did not follow.`
Sub: `Millions of batteries, solar arrays, EV chargers and meters are already installed behind the meter. Almost none of them can be dispatched.`

Visual: hexagon lattice **state 2**, and this is the visual centre of the deck. The large box has shattered. Most cells are hollow.

Three points down the left:
- `Every OEM speaks a different protocol, so every site becomes its own integration project.`
- `No telemetry, so no grid-program eligibility and no verified performance.`
- `The asset depreciates on a balance sheet while earning nothing.`

Stat block, prominent: `80%` — `of DER fleets still lack dispatchability, capped at pilots, leaking margin into custom integration work.`

Caption: `The capacity is already in the ground. It is the addressing that is missing.`

---

### 04 · Why now

Label: `04 · Why now`
Headline: `Interconnection rules made dispatchability mandatory, and edge silicon got cheap enough to comply.`

Chart, titled `Installed DER capacity — illustrative`: three ascending steps, `4 TWh / today`, `11 TWh / +3 yrs`, `33 TWh / +6 yrs`, in mint. Keep the word "illustrative" visible.

Two drivers:
- `I` — `IEEE 1547 and IEEE 2030.5 are now day-one interconnection requirements for distribution-connected assets.` Sub: `Compliance is no longer optional, and there is no cheap way to speak these standards at the edge.`
- `II` — `A gateway now costs about ₹6,000 to build.` Sub: `Cheap enough to put on every asset rather than only the largest ones.`

---

## Act two, the product (05 to 11)

---

### 05 · The distribution layer

Label: `05 · Solution`
Headline: `kWh puts a translation layer between the assets and everything that wants to control them.`
Sub: `One integration in either direction. Nothing behind it has to change.`

Visual: hexagon lattice **state 3**. A honey band runs across the shattered field, and cells near it turn mint. This is the same field from slide 03, now lighting up.

Overlay the three-band abstraction on the right third:
- Top, indigo: `Applications` — `plug in without touching assets`
- Middle, honey, the hero: `Translation layer`
- Bottom, mint: `Assets` — `connect without touching applications`

Caption in DM Mono: `one integration, either direction`

---

### 06 · Six protocols in, one asset model out

Label: `06 · How it works`
Headline: `The gateway performs model translation, not just protocol translation.`
Sub: `Anything southbound arrives as a different dialect. Everything northbound leaves as one IEEE 2030.5 asset model.`

Four-tier vertical diagram:
1. **Top box**, indigo, roughly one third slide width, centred: `DERMS / utility / cloud` with subtitle `Northbound consumer`.
2. **Bidirectional arrow** labelled `IEEE 2030.5`.
3. **Centre box**, honey with honey-d border, spanning nearly the full content width, the widest object on the slide: `kWh Gateway` with subtitle `Normalises every asset into one 2030.5 model`.
4. **Two bidirectional arrows**, left labelled `Modbus / SunSpec`, right labelled `CAN`.
5. **Bottom row**, five boxes in `warm` with `rule` borders: `Solar PV`, `Inverters`, `Battery / BMS`, `EV chargers`, `Distribution transformer`.

To the right of the gateway box, a small monospace block showing the normalised model:

```
power · energy · stateOfCharge · voltage
current · limits · capabilities · health
```

Caption in slate-2: `An application calls device.getSOC(). It never learns which protocol answered.`

---

### 07 · Two gateways, one software core

Label: `07 · Product line`
Headline: `Two gateways, one software core.`
Sub: `Same compute, same stack, same northbound interface. The difference is where each one has to survive.`

Two-column comparison, Model A in **mint**, Model B in **indigo**, identical row structure:

| | **Model A — DER Gateway** | **Model B — DT Gateway** |
|---|---|---|
| Application | `BESS, solar PV, inverters` | `Distribution transformer sites` |
| Class | `SBC-tier embedded gateway` | `Ruggedised, cellular-connected` |
| Environment | `Indoor, enclosure-protected, IP20` | `Outdoor pole or pad mount, IP65 / IP66` |
| Temperature | `0 to +50 °C` | `−40 to +85 °C` |
| Reads | `Inverter and BMS telemetry` | `The transformer's existing meter or IED` |
| Southbound | `RS-485, Ethernet, CAN 2.0B` | `RS-485, Ethernet, DNP3, optional IEC 61850` |
| Connectivity | `Ethernet, optional 4G LTE` | `Dual Ethernet + 4G LTE, GPS` |
| Target price at volume | `~₹6,000` | `~₹24,000` |

**Correction from the previous version, get this right:** Model A is **indoor, IP20**. It is not outdoor and not IP65. Model B is the outdoor unit at **IP65 / IP66**, not IP67. Drawing both as outdoor destroys the argument on slide 14.

One line spanning both columns: `Neither model meters. Both read what is already measured and normalise it.`

Footnote in slate-2: `Target BOM-driven prices at volume. Early certified, industrial-temperature units land higher.`

---

### 08 · What a DISCOM sees below the feeder

Label: `08 · Utility value`
Headline: `Below the feeder, a DISCOM currently sees nothing. Model B changes that.`
Sub: `Model A reports on DERs. Model B reports on the transformer itself.`

Split by model using the mint and indigo convention.

**Left, Model A, at the DER:**
- `Visibility` — `active power per site and per feeder · reactive power and power factor · availability · reverse power flow`
- `Grid support` — `Volt-VAR and Volt-Watt status · voltage at point of connection · frequency response · ride-through log`
- `Dispatch` — `curtailment requested vs delivered · setpoint compliance · ramp-rate adherence · response latency`
- `Battery` — `state of charge and health · cycles · round-trip efficiency · cell temperature and fault flags`

**Right, Model B, at the transformer:**
- `Loading and health` — `kVA vs rating · overload events and duration · oil and winding temperature · estimated loss-of-life · tap position`
- `Power quality, LV side` — `per-phase voltage · phase imbalance · reverse power flow duration · sags, swells, interruptions`
- `Loss and efficiency` — `energy per interval · input vs downstream consumption for AT&C loss localisation · overloaded vs underutilised transformers`
- `Reliability` — `outage and restoration timestamps · interruption frequency feeding SAIDI and SAIFI · last-gasp reporting on power loss`

Five outcome chips in honey across the bottom: `Fewer transformer failures` · `AT&C loss localisation` · `SAIDI and SAIFI at fine grain` · `Rooftop solar without LV overload` · `Deferred transformer replacement`

Footnote in slate-2: `Transformer metrics come from the DT's existing instrumentation. Availability depends on what that system exposes.`

---

### 09 · Five steps from unboxing to first dispatch

Label: `09 · Onboarding`
Headline: `A site goes live in [X] days without a custom integration.`

Horizontal five-step sequence with a duration under each:

1. `Activate` — `Gateway powered, licence claimed.` — `[ ] min`
2. `Discover` — `Devices found, protocols identified automatically.` — `[ ] min`
3. `Model` — `Digital twin built, unified asset record created.` — `[ ] min`
4. `Register` — `2030.5 client registers with the utility, certificates install.` — `[ ] hrs`
5. `Dispatch` — `Applications installed, asset earning.` — `[ ] days`

Comparison bar drawn to scale: `Conventional integration, [ ] weeks` against `kWh onboarding, [ ] days`.

Caption: `No site survey per asset. No vendor engineering engagement. No driver written on site.`

---

### 10 · One console, nine applications

Label: `10 · Platform`
Headline: `Nine applications run on the same gateway and the same asset model.`
Sub: `Operators work in one console. Each application sells more gateways, and each gateway makes the next application cheaper to add.`

**Left half, the console.** Vector UI abstractions, not fake photorealistic screenshots: `Fleet map`, `Asset detail`, `Flexibility forecast`. A live strip beneath: `kWh Fleet Console` · `BESS 004 · Kintech Synergy` · `SOC 78%` · `Dispatch active` · `340ms`. Hero metric `340ms` with caption `dispatch latency, measured live`.

**Right half, the catalogue.** Nine tiles: `Visibility and monitoring` · `Fleet management` · `Demand flexibility` · `VPP and aggregation` · `Energy trading` · `EV charging operations` · `Analytics and insights` · `Transformer health` · `Compliance and reporting`.

Mark two tiles as `third party` to show the marketplace is real.

---

### 11 · A flexibility event, end to end

Label: `11 · Use case`
Headline: `A demand flexibility event, from grid signal to settled payment.`

Five-step horizontal chain, each step labelled with what carries the message:

1. `Baseline established` — `platform, from historical telemetry`
2. `Event received` — `utility → gateway over IEEE 2030.5`
3. `Dispatch issued` — `gateway → asset in its native protocol`
4. `Performance verified` — `asset → platform, normalised telemetry`
5. `Incentive settled` — `platform → asset owner`

Four bracketed result figures: `[X]` events · `[Y] MWh` dispatched · `[Z]%` accuracy · `[₹]` incentives paid

Caption: `This is the loop that turns a stranded asset into a revenue-earning one. Everything else in the deck exists to make this loop cheap enough to run at scale.`

---

## Act three, the business (12 to 17)

---

### 12 · Market

Label: `12 · Market`
Headline: `[X million] distribution transformers and [Y GW] of behind-the-meter DER in [named market].`
Sub: `Sized bottom-up from installed units, not top-down from a global VPP forecast.`

**Left, three nested figures**, set as typography rather than concentric circles:

| | Figure | Definition |
|---|---|---|
| `TAM` | `[$    ]` | `Global DER and DT installed base × blended ASP × attach rate` |
| `SAM` | `[$    ]` | `[named market], assets reachable via retrofit or OEM cloud` |
| `SOM, 3 yr` | `[$    ]` | `What the current channel can physically reach and install` |

**Right, the bottom-up construction.** Show the arithmetic so it reads as a model rather than a claim:

```
Model B path
  distribution transformers in [market]   [        ]
  × share instrumentable                  [     %  ]
  × ₹24,000 hardware                      [ ₹      ]
  + SaaS per DT per year                  [ ₹      ]
  = [₹        ]

Model A path
  BTM DER sites in [market]               [        ]
  × share addressable                     [     %  ]
  × ₹6,000 hardware                       [ ₹      ]
  + SaaS per asset per year               [ ₹      ]
  = [₹        ]
```

Body: `Beachhead is India DISCOMs via Beckn DEG. The second market is US utilities and aggregators already procuring on IEEE 2030.5.`

Footnote in slate-2: `Multi-market expansion is on the roadmap and is deliberately excluded from this sizing.`

---

### 13 · How the hardware reaches the asset

Label: `13 · Go to market`
Headline: `Four routes to install, and only one of them requires us to sell door to door.`

Four routes as parallel paths converging on an installed gateway, each with the route, partner type, mechanism, and which model it carries:

1. `Direct` — `Asset owners and C&I sites` — `Gateway sale plus SaaS` — **Model A**
2. `DISCOM channel` — `5 DISCOMs via Beckn DEG` — `Utility-sponsored rollout across their network` — **Model B**, plus **Model A** where DER is co-located
3. `OEM embed` — `Monarch Transformers and equivalents` — `Telemetry embedded at manufacture` — **Model B**
4. `Financier and EPC` — `Portfolio owners, installers` — `Bundled at financing or at install` — **Model A**

Manufacturing line: `Custom PCB in fabrication with PCB Power India.`

Caption: `Routes two and three put someone else's balance sheet and someone else's installer in front of the asset.`

---

### 14 · Model B costs four times Model A because it lives outdoors

Label: `14 · Unit economics, hardware`
Headline: `Model B costs four times Model A, and every rupee of the gap is environmental.`

**Left, two waterfalls.** Model A from price to contribution margin. Model B as the same core plus a stack of named deltas, so the gap reads as physics rather than markup:

```
MODEL A                            MODEL B
Price              ~₹6,000         Price                       ~₹24,000
  less BOM            [₹    ]        Model A core BOM             [₹    ]
  less Assembly, test [₹    ]        + IP65/66 outdoor enclosure  [₹    ]
  less Logistics      [₹    ]        + −40 to +85 °C grade        [₹    ]
  less Warranty       [₹    ]        + Surge and EMC protection   [₹    ]
  = Contribution   [₹  ] [ %]        + Cellular modem and antenna [₹    ]
                                     + Wider isolated I/O         [₹    ]
                                     + Power-loss ride-through    [₹    ]
                                     less Assembly, logistics,
                                          warranty                [₹    ]
                                     = Contribution        [₹  ] [ %]
```

**Right, three figures:**
- `Assumed mix, year [X]` — `[X%] Model A / [X%] Model B`
- `Blended contribution per unit` — `[₹    ]`
- `Units to breakeven on tooling and certification` — `[X]`

Caption: `Hardware is the wedge, not the margin. Model B is the wedge that gets a DISCOM to fund network coverage.`

Footnote in slate-2: `Model B price composition to be confirmed as hardware-only versus hardware plus connectivity plus SLA.`

---

### 15 · Recurring revenue per asset

Label: `15 · Unit economics, software`
Headline: `[₹X] per asset per month at [X%] gross margin, with CAC recovered in [X] months.`

Left, the per-asset unit:

```
SaaS revenue per asset / month      [    ]
  less Cloud and telemetry storage  [    ]
  less Support and success          [    ]
  = Gross profit / asset / month    [    ]  [ %]
```

Right, four metrics: `CAC per asset [ ]` · `Payback [X] months` · `LTV / CAC [X]x` · `Net revenue retention [X%]`

Below, a comparison: `Cost per MW onboarded via gateway [ ]` against `via OEM cloud [ ]`, with the note `cloud onboarding carries no hardware cost, so blended cost per MW falls as that path scales`.

Caption: `Each device profile built unlocks a whole model class. The library compounds; the cost to onboard the next asset does not.`

---

### 16 · Recurring revenue overtakes hardware in year [X]

Label: `16 · Projections`
Headline: `Recurring revenue overtakes hardware revenue in year [X].`

One combined chart, `yr 1` to `yr 5`, four series:
1. Model A hardware revenue, **mint**
2. Model B hardware revenue, **indigo**
3. Recurring revenue, **honey**
4. Total cost, drawn as a line

**Correction from the previous version:** Model B is a hardware SKU. Do not label it "software". The three revenue series are Model A hardware, Model B hardware, and recurring.

Driver table, every cell bracketed:

| | yr 1 | yr 2 | yr 3 | yr 4 | yr 5 |
|---|---|---|---|---|---|
| Model A units | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Model B units | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Assets under management | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| MW under management | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Hardware revenue | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Recurring revenue | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Gross margin % | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |
| Burn | `[ ]` | `[ ]` | `[ ]` | `[ ]` | `[ ]` |

Annotate the crossover point directly on the chart.

---

### 17 · Traction

Label: `17 · Traction`
Headline: `Live telemetry on operating assets, and a channel into five DISCOMs.`

Four proof chips: `Custom PCB in fabrication / PCB Power India` · `Live BESS telemetry / Kintech Synergy` · `DISCOM channel / 5 DISCOMs via Beckn DEG` · `Piloting / 2 plants live`

Two partner blocks. **Get these descriptions right, the previous version had them wrong:**
- `Zodiac Energy` — `NSE and BSE listed generator` — `Data sharing live. Generation records feeding model training, gateway telemetry pilot in setup.`
- `Kintech Synergy` — `BESS operator, ₹800Cr+ revenue EPC` — `Live BESS assets streaming gateway telemetry, state of charge and dispatch validation.`

Do not describe Kintech as a transformer partner. The transformer relationship is Monarch Transformers, and it belongs on slide 13.

Four bracketed metrics: `[X] device profiles built` · `[X] sites live` · `[X] MW under management` · `2030.5 certification [status]`

---

## Act four, why us and the ask (18 to 20)

---

### 18 · Competition

Label: `18 · Competition`
Headline: `Everyone else is either in the cloud or inside one vendor's hardware.`

**Left, a two-axis positioning map.** Horizontal axis: `single-vendor` to `OEM-agnostic`. Vertical axis: `cloud-only` to `device-level edge`. Place:

- `AutoGrid / Uplight class DERMS` — cloud-only, OEM-agnostic. `Can orchestrate, cannot reach an asset that will not report.`
- `Enphase, Tesla, Sungrow clouds` — cloud-only, single-vendor. `Deep control, only over their own hardware.`
- `Kalkitech` — edge, partially agnostic. `Protocol gateways, sold as integration projects rather than a platform.`
- `Transformer monitoring vendors` — edge, single-purpose. `Read the DT, cannot dispatch anything.`
- `kWh Electric` — device-level edge, OEM-agnostic, in honey. `Both, in one asset model.`

**Right, why the gap holds.** Five numbered advantages:
1. `Device-profile library compounds. Build one profile, unlock a whole model class permanently.`
2. `Retrofit reach into assets nobody else can address.`
3. `Autonomous edge safety layer, so we can command hardware we never installed.`
4. `Standards-native, so grid programs accept us without a bespoke integration.`
5. `One core across two form factors, so DER and transformer deployments share every driver and every update.`

Caption: `Each profile built and each site retrofit widens a lead in a segment nobody else is contesting.`

---

### 19 · Team

Label: `19 · Team`
Headline: `Four founding engineers, zero attrition, production PCB already in fabrication.`

Founder: `Arham Shah` — `Founder & CEO` — `M.S. Energy, Stanford` · `B.S. Industrial Engineering, UIUC` · `Ex-Tesla, Rivian, Beckn`

Advisors: `Sujith Nair — Co-Founder, Beckn` and `Dr. Pramod Varma — Chief architect, UPI and Aadhaar`

**Correction from the previous version: Vish Ganti is not an advisor and must not appear on this slide or anywhere in the deck.**

Engineering: `Sudheer Kumar — Deployment Engineer` and `Yuvaraju Meenuga — Integrations Engineer`

Closing: `The team that shipped the pilot is the team building the company.`

Use empty hexagon outlines in `rule` as avatar frames. Do not generate synthetic faces for real named people.

---

### 20 · The ask

Label: `20 · The ask`
Headline, display: `$1.5M on a SAFE, [$ cap] cap.`

Use of funds as a horizontal segmented bar. **The segments must sum to exactly 100%.** The previous version summed to 90%.

- `Engineering and device profiles` — `[X%]`
- `Hardware production run, both models` — `[X%]`
- `Certification, both models` — `[X%]`
- `Go-to-market and deployment` — `[X%]`
- `Runway and operations` — `[X%]`

`What this buys`, three milestones:
- `[X] MW under management`
- `[X] device profiles shipped`
- `Model B certified and deployed at [X] DT sites`

`Runway`: `[X] months.`

Closing line, display scale: `Everyone else is chasing next year's assets. We are switching on the ones already in the ground.`

Visual: hexagon lattice **state 4**, the same field from slides 02, 03 and 05, now mostly lit. This is the payoff for the geometry the deck opened with.

---

## Appendix, seven slides, `cool` background

- **A · 01** — Model A full specification. Compute and OS, southbound, northbound, protocols, functions, security and timing, physical. Set in DM Mono.
- **A · 02** — Model B full specification. Compute and OS, read-only data acquisition, southbound, northbound, functions, physical cost drivers versus Model A.
- **A · 03** — Model A DISCOM metrics, full catalogue, including the energy and loss family omitted from slide 08 for space.
- **A · 04** — Model B DISCOM metrics, full catalogue, including DER coordination where DER is co-located.
- **A · 05** — Layered architecture. Cloud consumers, platform services, the honey translation band, physical devices. Caption: `The translation band sits between the software you own and the hardware you don't. That placement is the whole argument.`
- **A · 06** — Four deployment modes. `Client only` · `Server only` · `Both` · `With apps`. Caption: `Each asset is onboarded by whichever path is cheapest.`
- **A · 07** — Control-authority boundary. `Cloud, economic dispatch` above a visible boundary rule, `Edge, protective and grid-support` below. Caption: `Economics in the cloud. Safety at the edge, autonomous even if the link drops.`

---

## Verify before delivering

1. **Every slide is exactly 1920 × 1080.** No exceptions, including any preview grid.
2. Twenty main slides, footers `NN / 20`. Seven appendix slides, `A · 0N`.
3. **No banned headline construction survives.** Re-read §2 and check all twenty.
4. The hexagon lattice on slides 02, 03, 05 and 20 uses **identical cell positions** in four different states.
5. Model A is indoor IP20. Model B is outdoor IP65/IP66. Never IP67, never both outdoor.
6. Model B is labelled hardware on slide 16, never software.
7. Use of funds on slide 20 sums to exactly 100%.
8. Vish Ganti appears nowhere.
9. Kintech Synergy is a BESS operator. Zodiac Energy is a listed generator. Monarch is the transformer partner.
10. Every bracketed placeholder is still bracketed, in `slate-2`. No invented figures.
11. Model A is mint and Model B is indigo on slides 07, 08, 13, 14, and 16, without inverting.
12. No bees, honeycomb illustrations, honey jars, or insects.
13. Every diagram is grouped vector shapes with live, editable text.

Deliver the .pptx and the .pdf, plus a short note listing any decision you made that this brief did not specify.

## END OF PROMPT

---

## Notes for Arham, not part of the prompt

**The opening now does what you described.** Slide 02 is the single large hexagon, slide 03 is that box shattered with the pieces gone dark, slide 05 is the translation layer lighting them back up, and slide 20 is the finished field. The constraint that makes it work is that the cell positions never move, so an investor is watching one field change state four times rather than looking at four different decorations. That instruction is repeated in the verification list because it is the thing most likely to get lost.

**What I cut to make room.** The old slides 19 to 21 (`From install to impact`, `Open network. Open to all.`, `One device. Infinite value.`) were the three worst offenders for the writing style, and they were also redundant. The customer journey duplicated onboarding, the open-network slide duplicated the architecture, and the application layer merged into the new platform slide 10.

**Market sizing is now bottom-up.** Slide 12 shows the arithmetic on the slide: units, times share addressable, times ASP, plus SaaS. A top-down TAM taken from a global VPP forecast is the fastest way to lose a technical investor, and your two-SKU line makes bottom-up genuinely easy since you have unit prices and a countable installed base.

**Sequence is as you asked.** Team is 19, the ask is 20. Competition sits at 18 so the moat argument is the last thing before the people, which is the conventional order and the one that reads best.

**One thing I could not fix.** Slide 07 still needs the pricing conflict resolved. The deck now says ₹6,000 and ₹24,000 and stays silent on the $150 licence and the $50 versus $100 BOM. That silence is the correct default, but it becomes a problem the moment an investor asks for the BOM in diligence and gets a different number than the ElectronVibe application gave.
