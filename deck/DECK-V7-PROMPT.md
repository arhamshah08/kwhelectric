# kWh Electric deck v7 — rebuild of the reference design, 23 slides

> Numbered v7 because `deck-v4.html`, `deck-v6.html` and `DECK-V5-PROMPT.md` already exist.
> This brief replaces all of them.
>
> Source: the 22-slide reference contact sheet Arham supplied on 27 July. This brief reproduces
> that design system exactly, enforces a strict three-size type scale, and adds one slide the
> reference is missing.

---

## START OF PROMPT

Build a 23-slide investor deck for **kWh Electric**, reproducing the design system specified below exactly. Deliver a native, editable presentation.

### 1. Output contract

1. **PowerPoint (.pptx)**, 16:9, **every slide exactly 1920 × 1080 px**. No slide differs in size. Any preview grid you produce must also be 16:9 per cell.
2. **PDF export**, one slide per page, same dimensions.
3. 23 slides, numbered 01 to 23.
4. Every element is a real editable object. Real text boxes, real vector shapes, real grouped diagrams. No flattened slides.

---

### 2. Type: exactly three sizes, no exceptions

This is the strictest rule in the brief. **The entire deck uses three type sizes and nothing else.** Hierarchy comes from weight, colour, and spacing, never from inventing a fourth size.

| Name | Size | Weight | Case | Colour | Used for |
|---|---|---|---|---|---|
| **TITLE** | 54px | 800 | UPPERCASE | `#14110C` | Slide headline only. One or two lines. Ends with a period. |
| **STAT** | 76px | 800 | as written | `#8E1B1B` or `#1F7A4D` | Big numbers only. The 80%, the ₹ figures, the ask. |
| **BODY** | 20px | 400 or 600 | Sentence case | `#14110C` at 600, `#5C574C` at 400 | Everything else. Subtitles, card titles, card captions, list items, chart labels, axis labels, footnotes, the slide number. |

Rules that follow from this:

- **There is no small label size.** No 12px uppercase tracked-out section labels in the corner. The gold number badge is the slide's only identifier, and its number is set in BODY.
- **A card title and its caption are the same size.** The title is BODY at weight 600 in ink, the caption is BODY at weight 400 in grey. That contrast alone is enough.
- **Chart axis labels are BODY.** Do not shrink them. If a chart is too crowded for 20px labels, the chart has too many labels.
- **Footnotes are BODY at weight 400 in grey.** They are not smaller than body text.
- If any element seems to need a fourth size, the slide has too much on it. Remove content instead.

Typeface: a geometric grotesque with a heavy 800 weight. Figtree, Inter, or DM Sans in that order of preference. One family for the whole deck. No monospace anywhere.

Line height: 1.1 for TITLE, 1.0 for STAT, 1.5 for BODY.

---

### 3. Colour

| Token | Hex | Use |
|---|---|---|
| `cream` | `#FBF8F1` | Slide background, every slide |
| `card` | `#FFFDF8` | Card and panel fill |
| `border` | `#EFE6D2` | 1px card borders and hairline dividers |
| `band` | `#FBF3DE` | Tinted band behind the bottom chip row |
| `ink` | `#14110C` | Titles and primary text |
| `grey` | `#5C574C` | Secondary and caption text |
| `gold` | `#D9A404` | Number badges, bee flight trails, section rules, hexagon fills, accent |
| `gold-deep` | `#B8860B` | Gold text on cream where contrast is needed |
| `maroon` | `#8E1B1B` | Problem statistics, warning states, the locked-in banner |
| `green` | `#1F7A4D` | Success states, checkmarks, positive figures |

No other colours except where a slide below specifies a categorical palette. No gradients anywhere. No shadow heavier than `0 1px 2px rgba(20,17,12,0.06)`.

---

### 4. Layout, identical on every slide

```
canvas            1920 × 1080, cream
margin            left 96, right 96, top 72, bottom 72
number badge      top-left at (96, 72), 56 × 44, radius 10, gold fill,
                  number in BODY weight 600, ink, centred
title             starts at x=96, baseline ~64px below the badge, TITLE size,
                  max width 1100, one or two lines
subtitle          BODY weight 400 grey, 24px below the title
content region    starts 56px below the subtitle, full width between margins
bottom chip row   optional, sits on the bottom margin line, described in §6
```

Vertical rhythm is a 24px grid. Every gap between elements is a multiple of 24.

**Background texture.** A honeycomb line pattern in `gold` at **5% opacity** sits behind every slide, bleeding off the right and bottom edges. It is a texture, never a subject. It must never sit behind body text at a density that reduces legibility.

---

### 5. Recurring components, build once and reuse

**Number badge.** Gold rounded rectangle, top-left, containing the two-digit slide number.

**Section rule.** A horizontal gold hairline running the full content width with a centred uppercase gold label sitting on it, used to mark the start of a named sequence. Used once, on slide 08, reading `CUSTOMER JOURNEY`. The label is BODY weight 600 in gold.

**Card.** `card` fill, 1px `border`, radius 14, padding 24. Contains a BODY weight 600 title and a BODY weight 400 grey caption.

**Stat card.** Same card, containing a STAT figure over a BODY weight 400 grey caption.

**Icon.** Hairline outline SVG in a 24-unit viewBox, 1.8px stroke, round caps and joins, drawn in ink or gold. One family across the whole deck. Never emoji.

**Hexagon.** The recurring shape. Flat-top. Used as icon frames, as asset markers, and as the logo mark.

**Bee.** Illustrated bee with a gold dotted flight trail. Bees appear on roughly half the slides and always carry meaning: a bee is an asset acting on its own. Flight trails connect things that are communicating. Never decorative filler.

**Bottom chip row.** A `band`-tinted strip across the bottom content area holding three or four chips. Each chip is an icon, a BODY weight 600 label, and a BODY weight 400 grey caption on one line beneath.

---

### 6. Placeholder policy

Where a value appears in **square brackets**, reproduce the brackets literally in grey. Do not invent numbers. Unbracketed copy is verified and must be set as written.

---

# The 23 slides

## Act one — the argument (01 to 07)

---

**01 · Cover**
TITLE: `THE FUTURE GRID RUNS ON FLEXIBILITY.`
BODY: `Unlock the full value of distributed energy through an open, secure, interoperable fabric.`
Right half: the kWh hexagon logo mark, large, gold fill, white wordmark, with a faint circuit-trace pattern behind it.
Bottom left: the kWh wordmark in gold with `The interoperability fabric for every DER.` beside it.

---

**02 · The lock-in problem**
TITLE: `DISTRIBUTED ENERGY HAS INTELLIGENCE. IT HAS NO COLONY.`
BODY: `Every manufacturer built its own hive.`

Six tinted hexagons in a row, each labelled above with an OEM name and each containing its own separate cluster of bees, each hexagon in a different tint: `TESLA`, `SOLAREDGE`, `HUAWEI`, `FRONIUS`, `ENPHASE`, `OTHERS`. No hexagon touches another. No bee crosses between hexagons. That separation is the entire argument.

Three stat cards: `80%` — `of DER capacity cannot participate in flexibility markets` · `10,000+` — `proprietary APIs and custom integrations` · `Millions` — `of assets remain stranded and underutilised`. Stats in maroon.

Closing line, BODY weight 600, centred: `Locked in. Invisible. Idle.`

---

**03 · The security problem**
TITLE: `ONE COMPROMISE. ENTIRE FLEET EXPOSED.`
BODY: `Today's architectures trust the entire fleet instead of each individual asset.`

Illustration: a red attacker glyph on the left labelled `ATTACK`, connected by a red line into a tight cluster of hexagons that have all turned red, with radiating impact lines. The point is that the cluster is shared, so one breach takes all of it.

Bottom chip row: `Single breach` · `Lateral movement` · `Full fleet impact`.

---

**04 · Sovereign identity**
TITLE: `EVERY ASSET BECOMES SOVEREIGN.`
BODY: `Identity moves from the manufacturer to the device.`

Illustration: hexagons now **separate and gold**, each holding one bee, none connected by a shared boundary. A single bee flies free above them on a gold dotted trail.

Bottom chip row: `Individual identity` · `Zero-trust by design` · `Data stays in jurisdiction`.

---

**05 · Shared intelligence, local decisions**
TITLE: `SHARED INTELLIGENCE. LOCAL DECISIONS.`
BODY: `The queen sets objectives. Bees decide how.`

Illustration: a crowned bee in a gold hexagon at the top with three labelled objectives beside it (`AI Policy & Goals`, `Fleet Objectives`, `Local Autonomy`), and gold dotted trails descending to four worker bees below. **The trails carry objectives downward only. No arrow points back into the queen.** She is not a control hub.

Bottom chip row: `Negotiate` · `Coordinate` · `Optimise` · `Execute`.

---

**06 · Open discovery**
TITLE: `EVERY ASSET DISCOVERS EVERY OTHER ASSET.`
BODY: `Open identity. Open discovery. Open transactions.`

Illustration: a top row of gold hexagons labelled with market roles (`VPP`, `DR Programs`, `Energy Trading`, `Ancillary Services`, `Utility Ops`, `More…`) and a bottom row of asset hexagons (`Battery`, `Inverter`, `EV Charger`, `Solar`, `HVAC`, `Pump`, `Generator`, `Load`), with gold dotted trails crossing freely between the two rows in a mesh. **No hub, no server, no central node.** The crossing pattern is the point.

Closing line, BODY weight 600, centred: `One fabric. Any asset. Any application.`

---

**07 · The controller**
TITLE: `ONE CONTROLLER. UNIVERSAL COMPATIBILITY.`
BODY: `Every DER ships with the kWh Controller or activates the kWh software licence.`

Left: a photoreal-style render or clean isometric drawing of the black gateway hardware.
Right: a five-row list card, each row an icon and a BODY weight 600 label: `Hardware Controller` · `Software Licence` · `Cloud Platform` · `App Ecosystem` · `Developer SDK`.

Bottom chip row on `band`: `Identity` — `Secure cryptographic identity for every asset` · `Interoperability` — `Every protocol over one common fabric` · `Applications` — `Every compatible app on every asset`.

---

## Act two — the customer journey (08 to 12)

All five slides carry the `CUSTOMER JOURNEY` section rule at the top and a step number before the step name. The step number and name are both TITLE size, separated by a wide space.

---

**08 · Discover**
Section rule: `CUSTOMER JOURNEY`. TITLE: `1   DISCOVER`
BODY: `Every gateway is discoverable.`
Illustration: a phone showing a QR scan screen reading `Scan QR to add device`, a gold dotted bee trail arcing from the phone to the gateway hardware, and a green check with `Gateway Found`.
Bottom chip row: `< 30 seconds` · `Zero-touch` · `Auto discovery`.

---

**09 · Enrol**
TITLE: `2   ENROL`
BODY: `Every DER joins the network securely.`
Illustration: a four-step hexagon sequence across the top (`Authenticate Device`, `Establish Identity`, `Exchange Certificates`, `Apply Policy`), with gold trails descending to a row of asset icons (battery, solar, EV, charger, meter) that converge on the gateway.
Bottom chip row: `Zero-touch onboarding` · `Secure identity` · `Policy applied`.

---

**10 · Install capabilities**
TITLE: `3   INSTALL CAPABILITIES`
BODY: `Install apps. Add capabilities. Instantly.`
Illustration: a 4 × 3 grid of app tiles, each a saturated solid colour with a white icon and a white BODY weight 600 label: `Grid Flex`, `Backup Power`, `Solar Optimiser`, `Energy Trading`, `Carbon Accounting`, `Forecasting`, `Peak Shaving`, `Load Control`, `Battery Health`, `Demand Response`, `Tariff Optimiser`, and a final muted tile reading `More Apps`. This grid is the one place a categorical palette is permitted.
Bottom chip row: `Apps not firmware` · `Updates over-the-air` · `Pay for what you use`.

---

**11 · Operate**
TITLE: `4   OPERATE`
BODY: `One interface. Every asset.`
Illustration: a laptop showing the fleet dashboard with four headline figures across its top (`Total Capacity [X] MW`, `Availability [X]%`, `Active Assets [X]`, `Revenue MTD ₹[X]`) over a line chart, and a phone beside it showing the same data condensed. All dashboard figures bracketed.
Bottom chip row: `Real-time visibility` · `Control & dispatch` · `Alarms & insights`.

---

**12 · Expand**
TITLE: `5   EXPAND`
BODY: `Add devices. Not integrations.`
Illustration: existing assets on the left connected by gold trails, and four rows on the right each with a green check, a device name, and a green `Auto discovered` pill: `New Inverter`, `New Battery`, `EV Charger`, `Heat Pump`.
Bottom chip row: `Plug & play` · `No re-integration` · `Scale infinitely`.

---

## Act three — the platform (13 to 17)

---

**13 · The stranded-value argument**
TITLE: `WE'RE DRIVING FERRARIS LIKE TOYOTAS.`
BODY: `A battery capable of grid services is typically used only for backup power because it cannot discover markets, negotiate with operators, or interoperate with other assets.`

Three icon cards in a row, each with a coloured icon, a coloured BODY weight 600 label, and a grey caption:
- Padlock, maroon — `LOCKED IN` — `OEM software traps the customer inside one ecosystem.`
- Eye, indigo — `INVISIBLE` — `Utilities and aggregators cannot discover compatible assets.`
- Currency, green — `IDLE` — `The battery earns nothing when it could provide grid services.`

Full-width maroon banner at the bottom, white BODY weight 600 uppercase text: `MOST DER VALUE IS STRANDED BEHIND PROPRIETARY SOFTWARE.`

---

**14 · Platform architecture**
TITLE: `THE kWh PLATFORM ARCHITECTURE`

Three panels side by side, each a card with a BODY weight 600 uppercase header:
- `EDGE (kWh CONTROLLER)` — rows: `Protocol Translation`, `Secure Identity`, `Edge Compute`, `Local AI Agent`
- `OPEN FABRIC (IEEE 2030.5)` — a node-and-trail mesh diagram with the labels `Discover`, `Authenticate`, `Negotiate`, `Exchange`, `Execute`
- `APPLICATION LAYER` — rows: `Market Apps`, `Utility Apps`, `Analytics & AI`

A four-segment bar beneath all three: `Secure` · `Interoperable` · `Agentic` · `Future-proof`.

---

**15 · The three properties**
TITLE: `SECURE, AGENTIC, INTEROPERABLE`

Three columns, each headed by an icon and a coloured BODY weight 600 uppercase label, then four plain BODY rows:
- `SECURE`, green shield — `Zero-trust identity` · `End-to-end encryption` · `Data in jurisdiction` · `Hardware root of trust`
- `AGENTIC`, gold crowned bee — `AI-driven objectives` · `Local decision making` · `Adaptive & autonomous`
- `INTEROPERABLE`, indigo node mesh — `IEEE 2030.5 native` · `Open discovery` · `Open transactions` · `Vendor agnostic`

Closing line, BODY weight 600, centred: `Security protects. Intelligence optimises. Interoperability connects.`

---

**16 · Applications**
TITLE: `APPLICATIONS UNLOCKED`
BODY: `One platform. Endless possibilities.`

A 4 × 3 grid of hexagon-framed icons with BODY labels beneath: `Virtual Power Plant`, `Demand Response`, `Energy Trading`, `Ancillary Services`, `EV Fleet Management`, `Backup & Resilience`, `Peak Management`, `Microgrids`, `Carbon Programs`, `Community Solar`, `Forecasting & AI`, `And more…`.

---

**17 · Market**

This slide does not exist in the reference and is being added. Investors will ask for it, and a deck that goes from applications straight to business model has no denominator.

TITLE: `[X MILLION] TRANSFORMERS. [Y GW] BEHIND THE METER.`
BODY: `Sized bottom-up from installed units in the beachhead market, not from a global forecast.`

Left, three figures as stat cards: `TAM [₹  ]` — `Global DER and DT installed base × blended ASP` · `SAM [₹  ]` — `[named market], assets reachable via retrofit or OEM cloud` · `SOM, 3 yr [₹  ]` — `What the current channel can physically install`

Right, the construction shown as two short stacks so it reads as arithmetic rather than assertion:

```
Model B path                        Model A path
transformers in [market]  [      ]  BTM DER sites      [      ]
× share instrumentable    [    % ]  × share addressable[    % ]
× ₹24,000 hardware        [ ₹    ]  × ₹6,000 hardware  [ ₹    ]
+ SaaS per DT per year    [ ₹    ]  + SaaS per asset   [ ₹    ]
= [ ₹        ]                      = [ ₹        ]
```

Bottom line, BODY weight 600: `Beachhead is India DISCOMs via Beckn DEG. Second market is US utilities already procuring on IEEE 2030.5.`

---

## Act four — the business (18 to 23)

---

**18 · Business model**
TITLE: `BUSINESS MODEL`
BODY: `Usage-based. Aligned with outcomes.`

Left, four revenue lines as icon rows with BODY weight 600 labels and grey captions:
- `Software Licence` — `Per asset, per year`
- `Marketplace & Apps` — `Per use case`
- `Transaction Fees` — `Market participation`
- `Data & Insights` — `Anonymised`

Right, a bordered card headed `Example economics per 1 MW`, four rows each a label and a right-aligned figure: `Gateway cost [₹    ]` · `Software, annual [₹    ]` · `Gross margin [  %]` · `Payback [  ] months`.

Every figure in that card is bracketed. See the note to Arham at the end of this file about why.

---

**19 · Go to market**
TITLE: `GO-TO-MARKET`
BODY: `Focused. Partner-led. Global.`

Four icon rows with BODY weight 600 labels and grey captions:
- `DISCOMs & Utilities` — `Utility-sponsored rollout across the connected base`
- `OEMs & Integrators` — `Telemetry embedded at manufacture`
- `C&I & Developers` — `Direct sale plus SaaS`
- `Policy & Programs Support` — `Standards and program eligibility`

Right side: a large bee on a long gold flight trail, the only decorative element on the slide.

---

**20 · Traction**
TITLE: `TRACTION`
BODY: `Early deployments. Strong pipeline.`

Four stat cards: `[X]` — `Pilots live` · `[X]+` — `Partners engaged` · `[X] GWh+` — `Pipeline` · `[X]` — `States engaged`

Right: a muted map of India with gold pin markers on active states.

Bottom row, four partner cards: `Zodiac Energy` — `NSE & BSE listed generator, data sharing live` · `Kintech Synergy` — `BESS operator, live gateway telemetry` · `Monarch Transformers` — `Transformer partner, telemetry embedded at manufacture` · `PCB Power India` — `Manufacturing partner, custom PCB in fabrication`

**Kintech is a BESS operator, not a transformer partner. Monarch is the transformer partner. Earlier versions of this deck had those swapped.**

---

**21 · Team**
TITLE: `TEAM`
BODY: `Domain depth. Execution mindset.`

Five people in a row, each a circular frame, a BODY weight 600 name, and a BODY weight 400 grey role:
- `Arham Shah` — `Founder & CEO`
- `Sujith Nair` — `Advisor`
- `Dr. Pramod Varma` — `Advisor`
- `Sudheer Kumar` — `Engineering`
- `Yuvaraju Meeruga` — `Engineering`

**Use either real supplied photographs or hexagon monogram frames with initials. Do not generate synthetic faces for real named people.**

Bottom capability row: `Energy Systems` · `Grid Operations` · `Embedded Software` · `Cybersecurity` · `AI / Data`.

---

**22 · Financial outlook**
TITLE: `FINANCIAL OUTLOOK`
BODY: `Built for scale and profitability.`

Left, a green bar chart titled `Revenue projection (₹ Cr)` across five fiscal years, every bar value bracketed and every axis label in BODY at full size.

Right, a card with four rows, each a label and a right-aligned bracketed figure: `Gross margin [  %]` · `ARR target, FY[  ] [₹  ] Cr` · `EBITDA margin, FY[  ] [  %]` · `Capital efficiency` — `High recurring revenue`.

Bottom chip row: `Scalable` · `High retention` · `Strong unit economics`.

---

**23 · The ask**
TITLE: `THE ASK`
BODY: `We're raising capital to build the open fabric for the energy transition.`

Left: `$1.5M` in STAT size, green, with `SAFE` in BODY weight 600 beneath it.

Right: three cards with icons: `Product` — `Scale hardware and software platform` · `Market` — `Expand pilots and build the GTM engine` · `Ecosystem` — `Grow the open network and developer ecosystem`.

Bottom chip row, five chips: `Massive market` · `Defensible moat` · `Open by design` · `Strong team` · `Real impact`.

---

## Verify before delivering

1. **Exactly three type sizes across all 23 slides.** Measure them. If a fourth exists, fix the slide by removing content, not by adding a size.
2. **No type smaller than 20px anywhere,** including chart axes, footnotes, chip captions, and the slide number.
3. Every slide is exactly 1920 × 1080.
4. Margins, badge position, title position and vertical rhythm are identical on all 23. Flip through them: the title should not move.
5. All gaps are multiples of 24px.
6. The honeycomb texture is at 5% opacity and never reduces text legibility.
7. Slide 02's six hexagons never touch. Slide 05 has no arrow pointing into the queen. Slide 06 has no central hub.
8. No synthetic faces of real people on slide 21.
9. Kintech is the BESS operator, Monarch is the transformer partner.
10. Every bracketed placeholder is still bracketed. No invented figures.
11. No gradients. No shadow heavier than 1px.

Deliver the .pptx and the .pdf, plus a note listing any decision this brief did not specify.

## END OF PROMPT

---

## Notes for Arham, not part of the prompt

**On the three-size rule.** The reference deck you sent actually uses about six sizes, with the OEM labels on slide 02 and the chip captions throughout running very small. I held you to three anyway, because that was the explicit instruction and because the reference's smallest text is the part that reads worst at a distance. The consequence is real: several slides in the reference will not fit at 20px minimum, particularly slides 10 and 16 with their twelve-tile grids. Where that happens, the fix specified is to cut items, not shrink type. Expect the app grid to lose two or three tiles.

**Four numbers in the reference are unverified and I bracketed all of them.**

1. Traction: the reference shows `4 pilots live`, `18+ partners engaged`, `12 GWh+ pipeline`, `3 states engaged`. Your own material supports 2 plants live and 5 DISCOMs via Beckn DEG. I cannot reconcile 18+ partners or 12 GWh with anything on file.
2. Financials: `12 / 48 / 110 / 340 / 520 ₹Cr` across five years, `~₹300 Cr ARR target`, `>65% gross margin`, `>25% EBITDA`. None of this exists in a model yet.
3. Business model: `Gateway cost ~$1,100` per 1 MW. This is a **sixth** distinct hardware price now in circulation, alongside ₹6,000, ₹24,000, the $100 BOM locked for ElectronVibe, the sub-$50 BOM in the master doc, and the $150 licence in the old decks. It may well be correct as a per-MW figure rather than a per-unit one, but nobody reading across your documents can tell.
4. Slide 22's fiscal year labels in the reference render as `FY25E, FY25E, FY29E, FY29E, FY30E`, which is not a valid sequence.

**Two things in the reference I'd push back on.** Slide 02 names Tesla, SolarEdge, Huawei, Fronius and Enphase inside a slide about lock-in. That is defensible and common, but it does close doors with those OEMs, and your GTM slide lists OEMs as a channel. Second, the team slide uses photorealistic generated faces of real people, which I have specified out.

**Market sizing is slide 17,** which takes the deck to 23. You told me on the previous version that market sizing was missing and it was missing again here. If you want to hold at 22, the cut I'd make is slide 16, since applications are already shown as installable tiles on slide 10.
