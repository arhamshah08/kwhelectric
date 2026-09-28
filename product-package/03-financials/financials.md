# kWh Electric · Financials

**Source:** `kWh Electric Financial Strategy Report v3`, 14 pages, found in
`~/Downloads/Partnership proposal for battery fleet.zip`. Company facts and hardware
positioning come from the kWh Electric Master Knowledge Document.

**Status of the numbers.** Integration costs, avoided-cost bridges and the five-year build
are **modeled** from the drivers shown. Endpoint counts and program benchmarks are taken from
published sources, listed in section 9. USD/INR ≈ ₹95.37.

**Read section 8 before quoting any hardware price anywhere.**

---

## Contents

1. Headline numbers
2. Current position
3. Revenue architecture
4. Unit economics by counterparty
5. Value redistribution
6. Market sizing
7. Five-year projections
8. Pricing conflict, unresolved
9. Sources

---

# 1. Headline numbers

| | |
|---|---|
| Year-5 revenue | $43.0M |
| Year-5 gross margin | 84% |
| Five-year cumulative revenue | $79.2M |
| EBITDA break-even | Year 3 |
| Capital required to break-even | $4M to $6M |
| Year-5 recurring share of revenue | 65% |
| Lifetime revenue per connected asset, 7-year life | ~$177, of which 83% recurring |
| India SAM | $671M upfront plus $119M recurring per year |
| Global TAM | $4.90B upfront plus $1.10B recurring per year |

**The one-line argument.** Only 6.9 percent of Indian endpoints need to be connected by year
five to reach a $43M revenue run rate.

---

# 2. Current position

| | |
|---|---|
| Stage | MVP developed, live on 2 operating plants since December 2025, production PCB in development |
| Revenue | Pre-revenue, MRR $0 |
| Monthly burn | ~$2,000 |
| Raised to date | $65,000, from Cozad New Venture Challenge, UChicago Polsky, UIUC iVenture, and NSF I-Corps |
| Current raise | $1.5M on a SAFE, cap `[TBC]` |
| Round label | Pre-seed per master document checkbox defaults. Deck cover has previously said seed. **Settle this.** $1.5M reads pre-seed to most investors, and mislabelling costs more in credibility than it gains. |
| Team | 3 full-time: 1 founder, 2 founding engineers |
| Customers | 0 paying. 2 pilot partners, Zodiac Energy and Kintech Synergy. Describe as pilot partners, never as paying customers. |

---

# 3. Revenue architecture

Two kinds of revenue. Every device and every organization pays once to connect, and
continuously to stay connected.

**Year-5 mix: 35 percent fixed, 65 percent recurring.**

## 3.1 Fixed, once per connection

Wins the device and the counterparty.

1. Device licence and certificate
2. Integration fee, charged to the OEM and to the utility
3. Physical gateway
4. Connector deployment

## 3.2 Recurring, for as long as it stays connected

The cost of running the network, and the programs on top of it.

Network: platform subscription, device lifecycle, connector maintenance.
Programs: program management fee.
Also: maintenance contracts.

## 3.3 Price and gross margin by line

| Product | Price | Type | Gross margin |
|---|---|---|---|
| Device software and certificate | $30, falling to $3–8 at high volume | Fixed | ≥90% |
| OEM integration fee | $1,500 per new OEM, or an annual licence | Fixed | ~88% |
| Universal gateway | $199 list, $149 floor **⚠ see §8** | Fixed | 67% |
| Connector deployment, utility | $1.5K to $250K by tier | Fixed | 73% |
| Utility platform subscription | $25K / $100K / $300K per year | Recurring | 75–85% |
| Device lifecycle | $4 to $8 per device per year | Recurring | 75–85% |
| Connector maintenance | $400 per connector per year | Recurring | 75% |
| Program management fee | 10–30%, 15% base case | Recurring | ~90% |

## 3.4 Lifetime value of one connected asset

Modeled over a seven-year asset life.

| | |
|---|---|
| Fixed: licence, gateway, integration at connection | $30 |
| Recurring: platform, lifecycle, program, maintenance | $147 |
| **Total per active asset** | **$177**, 83% recurring |
| Against a software-licence-only sale | $30 |

**The gateway is access, not the profit pool.** The model carries a $50 BOM plus assembly,
QA, provisioning, shipping, warranty and support, giving $65 landed COGS against a $199 list
price at 67 percent margin. Its job is to reach assets that cannot otherwise be enrolled.
Each one then earns recurring revenue for seven years.

---

# 4. Unit economics by counterparty

Every counterparty adopts for a different financial reason.

## 4.1 Utility or DISCOM

DISCOM-scale case: 25 OEMs, 1M assets, 100,000 active in programs.

**Integration cost bridge, year 1**

| | |
|---|---|
| Cost of integrating alone | $1.65M |
| kWh deployment, connectors and ARR | $0.50M |
| **Integration cost avoided** | **$1.15M** |

Avoided equals current integration minus deployment of $187.5K and platform and maintenance
ARR of $310K.

**Annual program value, once running**

| | |
|---|---|
| Gross program value created | $10.0M |
| Retained by utility and customers | $8.5M |
| kWh program fee at 15% | $1.5M |

Modeled payback on kWh deployment: under 12 months.

**By deployment scale**

| | Pilot | Regional | DISCOM |
|---|---|---|---|
| Active program assets | 1,000 | 20,000 | 100,000 |
| Integration avoided, Y1 | $174K | $531K | $1.15M |
| Program value per year | $100K | $2.0M | $10.0M |
| Five-year benefit | $0.67M | $9.14M | $43.65M |

## 4.2 OEM

**Break-even licence price per device.** How much kWh can charge before the OEM stops saving
money, against a flat $30 list price.

| Device volume | Break-even licence price |
|---|---|
| 10,000 devices | $0–5 |
| 100,000 devices | $15–23 |
| 1,000,000 devices | $27–29 |

Break-even equals avoided integration cost divided by device volume. **Below roughly 100,000
devices a flat $30 exceeds the integration cost it replaces, so volume tiering is required.**
At low volume the argument is market access, not cost avoidance.

**Recommended tiering**

| Asset class | Licence | Lifecycle ARR |
|---|---|---|
| Battery, inverter, charger, controller | $20–30 | $4–8 per year |
| High-volume meter, simple controller | $3–8 | $1–2 per year |
| Enterprise OEM cloud connector | $10–50K | $5–25K per year |

## 4.3 Customer or asset owner

Program value net of a 15 percent kWh fee. Figures are published US program benchmarks from
Con Edison and Green Mountain Power, not India forecasts.

| Asset | Program value | Net to customer |
|---|---|---|
| 10 kW residential battery | $8.5–9.5K one-time | $7.2–8.1K |
| 100 kW C&I flexibility | $18.0K per year | $15.3K per year |
| 100 managed EVs | $15.7K per year | $13.3K per year |
| 100 thermostats | $8.5K enrollment | $7.2K |

The customer pays nothing upfront. The fee is taken from value that does not exist today.

## 4.4 Who pays kWh what

| Counterparty | Fixed | Recurring |
|---|---|---|
| Utility / DISCOM | Integration and connector deployment | Platform subscription, device lifecycle, program management fee |
| OEM | Integration fee of $1,500, or an annual licence | Optional device lifecycle add-on |
| Customer / asset owner | Nothing, directly | Nothing, directly. Program value is already net of kWh's fee. |

**The customer never receives a bill from kWh.** This matters in a DISCOM conversation and
should be stated explicitly.

---

# 5. Value redistribution

Illustrative split of 100 units of value created by a single connected asset over its program
life.

## 5.1 Today

| Share | Where it goes |
|---|---|
| 24 | OEM cloud and API work |
| 21 | Aggregator integration |
| 15 | Utility connector build |
| 15 | Utility retained |
| 15 | Customer and OEM retained |
| 10 | Other: metering, field service, admin |

Sixty of every hundred units is consumed on integration before the asset is dispatched.

## 5.2 With kWh

| Share | Where it goes | Change |
|---|---|---|
| 30 | kWh shared integration layer | 60 → 30 |
| 30 | Utility retained | 15 → 30 |
| 30 | Customer and OEM retained | 15 → 30 |
| 10 | Other, unchanged | no change |

## 5.3 The argument

Three parties currently build the same thing. The OEM, the aggregator and the utility each
pay for enrollment, translation, permissions and settlement on the same asset.

One certified integration serves every counterparty, so thirty units buy what sixty used to.
kWh is not a new toll on top of the stack. It is the consolidation of a cost already being
paid three times, and most of the saving goes to the counterparties rather than to kWh.

## 5.4 Operational change

| | Today | With kWh |
|---|---|---|
| Onboard a new OEM | 3–9 months | 2–8 weeks |
| Stand up a new utility environment | 6–18 months | 1–4 months |
| Launch a new application on connected assets | 3–12 months | 2–12 weeks |
| Engineering reused on the next program | 10–30% | 70–90% |

## 5.5 What one deployment costs today

| | Residential battery program | C&I flexibility program | Multi-OEM DISCOM rollout |
|---|---|---|---|
| Organizations | 7–12 | 8–14 | 15–30+ |
| Interfaces | 5–10 | 8–16 | 30–100+ |
| Time to first dispatch | 3–9 months | 6–12 months | 12–36 months |
| Integration spend | $50–150K | $150–500K | $1–5M |

## 5.6 Why point-to-point does not scale

Relationships to build and maintain: (U×O) + (O×A) + (U×A) against U + O + A. Complexity
illustration, not purchased interfaces.

| Scale | Point-to-point | Shared control plane | Reduction |
|---|---|---|---|
| 3 utilities, 5 OEMs, 4 applications | 47 | 12 | −74% |
| 10 utilities, 25 OEMs, 10 applications | 600 | 45 | −93% |
| 50 utilities, 100 OEMs, 25 applications | 8,750 | 175 | −98% |

---

# 6. Market sizing

The market is the monetizable control layer, not the value of the hardware.

## 6.1 Endpoint funnel

| | |
|---|---|
| Global addressable endpoints | 122.64M. PV 2,973 GW ÷ 75 kW = 39.64M, plus EV stock 76M, plus public charging 7M |
| US + Australia serviceable endpoints | 20.5M. US 15.34M (solar 6.00M, EVs 9.03M, public chargers 0.31M) + Australia 5.16M (rooftop solar 4.50M, EVs 0.65M, public chargers 0.01M) |
| kWh connected by year 5 | 1.07M cumulative devices, 30 utilities, 450K active in programs |

## 6.2 TAM — grid services + communication infrastructure

**$39.3B per year.** Industry markets, not kWh take.

| Line | Source | Value |
|---|---|---|
| Global VPP / grid services | Persistence, $23.0B by 2033 | $23.0B |
| Global smart-grid communications | TBRC, 2026 | $16.3B |
| TAM | Sum | **$39.3B/yr** |

kWh's own certificate + gateway + lifecycle model ($4.90B upfront, $1.10B/yr on 122.64M endpoints) is what kWh can charge. It is not the communication-infrastructure market and must not be used to size TAM or SAM.

## 6.3 SAM — communication infrastructure + flexibility, US + Australia

Primary markets are the **United States and Australia**. India is not in this pool. SAM is the published industry market, not 20.5M × $9.

| Line | Build | Value |
|---|---|---|
| US comm | ~85% of North America's 35% of $16.3B | $4.9B |
| Australia comm | ~55% of Australia smart-grid AUD 1.68B | $0.6B |
| US+AU comm | | $5.5B |
| US flexibility | ~90% of North America's ~39% of global DR $10.3B | $3.6B |
| Australia flexibility | AU VPP ~$360M (KenResearch, 2026) | $0.4B |
| US+AU flexibility | | $4.0B |
| SAM | Comm + flexibility | **$9.5B/yr** |

## 6.4 SOM

Two figures, do not mix them.

**Market SOM (Arham, revised 2026-09-01):** 5% of US+AU comm + 1% of US+AU flexibility = $275M + $40M = **$315M/yr**. Not 50% of the US+AU market.

**Year-5 execution forecast** (section 7), not a market-share claim:

| | |
|---|---|
| Year-5 revenue | $43.0M |
| Share of market SOM | 14% of $315M |
| Utilities under contract | 30 |
| Cumulative certified devices | 1.07M |
| Assets active in programs | 450K |
| Recurring share of revenue | 65% |

**Scope note.** TAM and SAM are published industry markets. Grid services is the $23B global VPP figure. Communication is smart-grid communications. Flexibility is demand-response / VPP program markets in the US and Australia. kWh unit economics ($40 upfront, $9/yr) describe capture, not the market. India is not a primary market and is not in SAM or SOM.

## 6.5 Why replication compounds

Index of the build cost to add one more utility, OEM or program.

| | Index |
|---|---|
| First case | 100 |
| Tenth case | 35 |
| Hundredth case | 12 |

Full connector and permission build for the first. Connector and device-profile reuse by the
tenth. Configuration only by the hundredth.

Connectors become inventory, built once and sold again at near-zero marginal cost. New
markets add programs, not architecture, because certification, telemetry, permissions and
settlement are identical across the United States and Australia. The pool itself
grows, because assets uneconomic to connect today become viable, lifting total value roughly
45 percent on the same asset base.

## 6.6 Market context from the master document

Global VPP market approximately $23B by 2033 at 25.8 percent CAGR. 122-plus GW of
decentralized capacity on VPP platforms across 48 countries, 900-plus VPP projects. Over $17B
invested in VPP platforms between 2022 and 2024. India velocity proof: 2.6M rooftops and
9.6 GW in roughly two years under PM Surya Ghar, with Gujarat leading at 6.67 GW.

Primary commercial targets: United States and Australia. Secondary: Canada, UK, Germany,
Netherlands. India is not a primary market.

---

# 7. Five-year projections

| | Y1 | Y2 | Y3 | Y4 | Y5 |
|---|---|---|---|---|---|
| Revenue | $0.96M | $3.49M | $9.64M | $22.1M | $43.0M |
| Recurring share | 30% | 40% | 50% | 58% | 65% |
| Gross margin | 77% | 78% | 80% | 82% | 84% |
| EBITDA | $(0.77)M | $(0.26)M | $1.73M | $6.22M | $14.05M |

**Drivers**

Fixed and upfront, 10K to 600K devices: gateways sold, new certified devices at $30, OEM
integration fees, and utility connector deployments.

Recurring, 10K to 1.07M devices: utility platform subscriptions, device lifecycle at $6 per
year, connector maintenance, and the program management fee on 1K to 450K active assets.

Utilities under contract grow from 1 to 30. Connectors built grow from 5 to 500.

**Summary**

| | |
|---|---|
| Five-year cumulative revenue | $79.2M |
| EBITDA break-even | Year 3 |
| Capital required to get there | $4M to $6M |

The current $1.5M ask is sized against that $4M to $6M total, which means this round is meant
to reach the point where the next one is optional rather than necessary.

---

# 8. Pricing conflict, unresolved

**This is the single largest inconsistency in the company's material. Do not quote a hardware
price in any document until Arham picks one.**

Seven figures across six sources, and several of them cannot be true at the same time.

| Source | Figure | What it claims to be |
|---|---|---|
| Financial Strategy Report v3 | $199 list, $149 floor | Universal gateway **price** |
| Financial Strategy Report v3 | $50 | Gateway **BOM**, giving $65 landed COGS |
| Financial Strategy Report v3 | $30, or $3–8 at volume | Device **software licence** |
| Spec doc 0.1, 2026-07-27 | ~₹6,000, ≈$70 | Model A target **price** at volume |
| Spec doc 0.1, 2026-07-27 | ~₹24,000, ≈$280 | Model B target **price** at volume |
| ElectronVibe lock, 2026-07-24 | $100 | Device **BOM** |
| Master document body and old decks | sub-$50 | Device **BOM**, "≈1/5th the closest alternative" |
| Venture and seed deck copy | $150 one-time | Gateway **licence** |
| ENTICE datasheet tab | ~$200 | Per **site**, installed status unclear |

## 8.1 The contradictions, specifically

1. **$199 gateway list against ₹6,000 Model A.** ₹6,000 is roughly $70. The financial model's
   entire gateway revenue line, $1.22B of the global TAM, is built on $199. If Model A really
   sells at $70, that line falls by roughly two thirds.
2. **$100 BOM against a $70 Model A price.** The unit would be sold below cost. A sub-$50 BOM
   is the only prior figure consistent with a ₹6,000 price, which puts the ElectronVibe $100
   lock and the spec sheet in direct conflict.
3. **$50 BOM in the financial model against the $100 ElectronVibe lock.** Both were set in
   the same fortnight.
4. **$150 one-time licence against $30 device software licence.** Three readings of the $150
   are possible and only Arham knows which: a software licence on top of hardware, a
   superseded single-SKU hardware price, or a US-market price for the same unit.
5. **The two-SKU split is not in the financial model at all.** The model has one "universal
   gateway" at $199. It has no Model B line, which means the DISCOM channel that Model B
   exists to serve is not represented in the revenue build.

## 8.2 What this actually requires

Not a price decision. Three decisions.

1. Is the gateway one SKU or two, for revenue-model purposes.
2. Is the quoted number a BOM, a landed cost, a list price, or an installed per-site price,
   stated explicitly every time it appears.
3. Is the $150 a separate software licence, and if so how it relates to the $30 device
   certificate already in the model.

Until those three are answered, `deck/DECK-V3-PROMPT.md` removed the $150 and sub-$50 claims
from the deck's main line rather than print contradictions, and this package carries no
hardware price anywhere. That is the correct posture, but it is not sustainable through a
diligence process.

---

# 9. Sources

From the Financial Strategy Report v3 appendix.

1. US DOE, *Pathways to Commercial Liftoff: Virtual Power Plants*, energy.gov
2. FERC, Order No. 2222 explainer, ferc.gov
3. NREL, *Interoperability of Distributed Energy Resources*, nrel.gov/docs/fy21osti/77959.pdf
4. NREL / GMLC, *Survey of DER interconnection practice*, docs.nrel.gov/docs/fy21osti/77497.pdf
5. SunSpec, *Common Smart Inverter Profile implementation guide*, sunspec.org
6. OpenADR Alliance, OpenADR primer, openadr.org
7. US DOE, *Sourcing DERs for Distribution Services*, 2024, energy.gov
8. LBNL, *Business Models for Scaling Demand Flexibility*, eta-publications.lbl.gov
9. IEA PVPS, *Snapshot of Global PV Markets 2026*, iea-pvps.org
10. IEA, *Global EV Outlook 2026*, charging chapter, iea.org
11. Ministry of Power, India, *Annual Report 2025–26*, powermin.gov.in
12. PFC, *Performance of State Power Utilities 2023–24*, pfcindia.com
13. PIB, PM Surya Ghar progress, pib.gov.in
14. PIB, India registered EVs, pib.gov.in
15. MNRE, PM-KUSUM programme, mnre.gov.in
16. Con Edison, Smart Usage Rewards, coned.com
17. Con Edison, Dynamic Load Management RFP 2025–26, coned.com
18. Green Mountain Power, Bring Your Own Device storage, greenmountainpower.com
19. Con Edison, Distributed System Implementation Plan, coned.com

---

# 10. Caveats to carry into any investor conversation

1. **The utility five-year benefit combines integration savings and program value.** It must
   not be double-counted in company revenue.
2. **Integration costs and avoided-cost bridges are modeled**, not observed. Endpoint counts
   and program benchmarks are sourced.
3. **Customer benchmarks are US programs**, Con Edison and Green Mountain Power. They are not
   India forecasts. India sizing is separate, in section 6.3.
4. **Revenue is $0 today** and the model starts at $0.96M in year one. The gap between two
   pilot partners and 30 contracted utilities by year five is the execution risk, and it is
   the thing an investor will press on.
5. **The pricing conflict in section 8 is unresolved** and materially affects the gateway
   revenue line.
