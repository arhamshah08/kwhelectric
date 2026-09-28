# kWh Electric · Deck

18 slides. Copy only, no design specification.

**Narrative order is fixed and is the point of this version.** Security precedes
interoperability. AI never precedes interoperability. Monetization never precedes
applications. That order was locked in deck v6 and is carried here unchanged.

**Headline discipline used here:** every headline carries a number, a named entity, or a
falsifiable claim. This follows `DECK-V5-PROMPT.md` §2 rather than the v6 chat
specification, which required two-word sentence pairs. The two briefs conflict and Arham
has to pick one before either is used externally. Flagged, not resolved.

---

## 01 · Cover

**kWh Electric**

Universal Energy Translation Platform

Every energy asset, visible and dispatchable. One platform, any protocol, any OEM, any
geography.

Palo Alto, California · kwhelectric.io

*Round label pending. Master document checkbox default reads pre-seed. $1.5M reads
pre-seed.*

---

## 02 · Problem

**80 percent of DER fleets have no unified dispatch**

More than 100 million distributed energy resources are deployed globally and no common
dispatch layer exists between them.

Every manufacturer ships its own firmware, protocol dialect, API and cloud. A utility with a
mixed fleet builds and maintains a separate integration for each one, at an estimated
50,000 US dollars per month per OEM. Each integration becomes another silo and none of them
compose.

`100M+ DERs deployed` · `80% without unified dispatch` · `$50K+ per month, per OEM`

**Visual:** nine separate hexagon clusters, none touching. No bridges, no trails, no
protocol logos. Vendor lock-in with nothing connecting it.

---

## 03 · Security

**One compromised device must never reach the fleet**

Security comes before interoperability in this deck because connecting everything to
everything is only an improvement if a single breach stays contained.

Every asset guards itself. A Trusted Execution Environment runs on the device. Device
identity is zero-trust, so one compromised unit is isolated rather than trusted by its
neighbours. Telemetry stays in-jurisdiction, which makes GDPR, DPDP Act and US state
privacy compliance a property of the architecture rather than a policy commitment.

**Visual:** eight independent cells, each holding one bee, not one shared hive. A red
attacker strikes exactly one cell. That cell turns red and is labelled Contained. Every
other cell stays gold and unconnected.

---

## 04 · Interoperability

**One canonical model, not one integration per vendor**

Point-to-point integration scales with the number of manufacturers. kWh scales with the
number of protocols, because translation happens once into a canonical model that every
northbound consumer reads.

Southbound the platform speaks IEEE 2030.5, Modbus RTU and TCP, SunSpec Modbus, CAN, OCPP,
DNP3, BACnet, DLMS, MQTT and Zigbee. Northbound it projects the same model into IEEE 2030.5,
OpenADR, CIM, REST, webhooks and native OEM APIs.

Adding an OEM adds a driver, not an integration program.

**Visual:** the same eight independent cells with floating discovery nodes above them and
dotted flight trails weaving cell to node to node to cell. No hub, no server, no hierarchy.

---

## 05 · Why now

**Rooftops are being added faster than utilities can schedule them**

Three things changed at once.

India added 2.6 million rooftops and 9.6 GW in roughly two years under PM Surya Ghar.
Gujarat alone reached 6.67 GW. The assets arrived before the control layer did.

IEEE 2030.5 adoption is rising and is now mandated under California Rule 21. FERC Order 2222
opens wholesale markets to aggregated DERs. The standards exist and the regulation now
requires them.

Agentic AI needs a secure, policy-bound hardware interface to act on physical infrastructure.
Nothing in the current stack provides one.

---

## 06 · The universal controller

**Two components, one platform**

**kWh Network.** Asset Registry, Canonical Model, Translation Engine, Control Router, Policy
Engine, Digital Twin. Discovers assets, normalises telemetry, routes commands, enforces
control authority as policy.

**DER Gateway.** Speaks each asset's native protocol locally. Executes setpoints, schedules
and Volt-VAR, Volt-Watt and ramp-rate control on the device. Enforces its safe operating
envelope and buffers telemetry when the link drops. Logs every dispatch before, during and
after execution.

The Gateway is a component of the Network, not a separate product. Assets with a compatible
interface connect to the Network directly through OEM connectors. Assets without one connect
through a Gateway. Both paths write into the same canonical model.

**Two SKUs.** Model A for behind-the-meter batteries, solar and inverters, indoor rated,
with direct CAN access to the BMS. Model B for distribution transformer sites, outdoor
rated, cellular connected, reading the transformer's existing meter or IED. Neither model
meters.

---

## 07 · Enrollment

**Connect an asset once and it is eligible for every program**

The gateway is installed, discovers what is on site, detects each asset's capability, and
issues a device identity. The asset appears in the registry as a digital twin with a known
capability set.

From that point the same asset can be enrolled in any compatible program without a new
integration, a new commissioning visit or a new consent flow.

*Per-asset enrollment time: [TBC]. The 5-minute figure in the v6 specification is not
verified anywhere and should not be used until it is measured.*

---

## 08 · Customer application

**The asset owner sees what their asset earns**

The owner claims the asset, receives a secure identity, and sees every compatible program in
one place with an explicit eligibility state. Consent is granted per program and per
permission, and it is revocable at any time.

Value visible to the owner: self-consumption against export, battery state of health and
cycle count, program participation, and delivered response per event.

*Program names, benefit figures and eligibility rules in the current prototype are sample
data. Replace before any external showing.*

---

## 09 · Fleet dashboard

**One fleet view regardless of how each asset connected**

The operator sees sites, assets, gateways, dispatch, events and audit in one application.
An asset that arrived through an OEM cloud connector and an asset that arrived through a
gateway are the same object in the same list.

Fleet operations: dispatch and schedule execution, curtailment requested against delivered,
setpoint compliance, response latency per event, and full audit logs.

*Device counts, capacity and uptime figures: [TBC].*

---

## 10 · Marketplace

**One asset, many applications**

Because every asset resolves into one canonical model, an application written once reaches
every compatible asset on the network.

Applications and services run against Universal API v2, webhooks on CloudEvents, and SDKs
for Python, TypeScript, Java and .NET, against an OpenAPI 3.1 specification.

Multiple applications can hold different permissions on the same asset, with control
priority and conflict policy enforced by the Policy Engine rather than by convention.

---

## 11 · Monetization

**Fixed fees win the connection. Recurring fees are the larger share.**

Fixed, once per connection: device licence and certificate, OEM and utility integration
fees, physical gateway, connector deployment.

Recurring, for as long as the asset stays connected: utility platform subscription, device
lifecycle, connector maintenance, and the program management fee.

Modeled lifetime revenue from one connected asset over a seven-year life is approximately
177 US dollars, of which 83 percent is recurring. A software licence sale alone returns
approximately 30 US dollars.

*Full detail in `03-financials/financials.md`. Hardware pricing is unresolved and no gateway
price should appear on this slide until it is settled.*

---

## 12 · AI agents

**An agent can plan a dispatch. Nothing today lets it act safely.**

JARVIS is the AI intelligence layer, sitting in the application layer above the canonical
model rather than inside the control path.

The boundary is the point. The agent proposes. The Policy Engine and the on-device safe
operating envelope dispose. An agent operating through kWh is bounded by the same mechanism
that bounds an attacker, which is what makes autonomous dispatch defensible to a utility.

**Visual:** the queen used only as shared intelligence, with exchange lines and explicitly
no arrows pointing into her.

---

## 13 · Business model

**Pay-once gateway licence plus SaaS. No per-dispatch fees. No lock-in.**

B2B. Channel-led through system integrators, EPCs, OEM embed, and the Beckn DEG open
network.

Distribution routes and the SKU each carries: direct to asset owners and C&I carries
Model A. The DISCOM channel via Beckn DEG carries Model B, plus Model A where DER is
co-located. OEM embed through Monarch Transformers carries Model B. Financier and EPC
bundling carries Model A.

Year-5 revenue mix is 35 percent fixed and 65 percent recurring.

---

## 14 · Market

**$9.5B serviceable market in the United States and Australia**

Primary markets are the United States and Australia. India is not a primary market.

TAM $39.3B/yr: global VPP / grid services $23.0B by 2033 plus $16.3B global smart-grid comm.
SAM $9.5B/yr: US+AU comm $5.5B plus US+AU flexibility $4.0B. Industry market, not kWh take.
SOM $315M/yr: 5% of US+AU comm plus 1% of US+AU flexibility.

The global VPP market is projected at approximately $23B by 2033 at 25.8 percent CAGR, with
122 GW of decentralised capacity already on VPP platforms across 48 countries.

TAM and SAM count only what kWh can charge for. They exclude the capital value of the assets
themselves, which is one to two orders of magnitude larger.

---

## 15 · Competition

**Everyone else is either cloud-down or single-vendor**

| | Kalkitech | OEM clouds | Cloud-down DERMS | kWh |
|---|---|---|---|---|
| Vendor neutral | Partly | No | Partly | Yes |
| Edge execution | Yes | No | No | Yes |
| Works on legacy assets | Yes | No | No | Yes |
| Control survives disconnection | Partly | No | No | Yes |
| Agentic-native interface | No | No | No | Yes |

Named competitors: Kalkitech, OEM-managed ecosystems including Enphase, Tesla and Sungrow,
cloud-down DERMS of the AutoGrid and Uplight class, and Solitude Labs.

kWh is not a DERMS and does not replace one. It sits below the DERMS as the connectivity,
normalisation, security and verification layer.

*A two-SKU hardware line invites direct comparison with Kalkitech and with transformer
monitoring vendors already selling into DISCOMs. Prepare the detailed comparison as an
appendix.*

---

## 16 · Go to market

**India is the proving ground for velocity. North America is the commercial centre.**

Live today: two operating plants since December 2025. Zodiac Energy in Gujarat, 2,500-plus
sites and 30-plus MW of rooftop solar, data sharing live. Kintech Synergy in Gujarat, a
₹800 crore revenue EPC with 30-plus years in solar, wind and storage, providing live BESS
assets for telemetry and dispatch validation.

Channel: Beckn DEG is live into 5 DISCOMs across India, Oman, Qatar and Brazil. Monarch
Transformers embeds kWh telemetry inside distribution transformers at manufacture. PCB Power
India is the hardware partner for production PCB.

Engagement: Fannie Mae on verified telemetry for securitizing microgrid and datacenter
loans.

Next six months: ship the production gateway with IEEE 2030.5 northbound, certify Model B
and deploy first DT sites, complete end-to-end control across chargers, batteries and
inverters, scale to one utility plus one or two aggregators, and begin AI-assisted edge
optimization with policy-as-code.

---

## 17 · Team

**Arham Shah, Founder and CEO.** M.S. Energy, Atmosphere and Energy, Stanford. B.S.
Industrial Engineering, UIUC. Previously Tesla, Rivian, Beckn. Launched the first open
energy networks in India and Brazil.

**Sudheer Kumar Anuchuru, Founding Forward-Deployment Engineer.**

**Yuvaraju Meenuga, Founding Backend and Integrations Engineer.**

Founding engineers bring 15-plus years combined at Uplight and AutoGrid building
utility-scale DER management.

**Advisors:** Sujith Nair, co-founder of Beckn and FIDE. Dr. Pramod Varma, chief architect of
UPI and Aadhaar.

Three full-time. Approximately $2,000 monthly burn.

*No women in the founding team today. Committed to sourcing women for the next hires.*

---

## 18 · Raise

**$1.5M on a SAFE**

Raised to date: $65,000, from Cozad New Venture Challenge awards, UChicago Polsky and UIUC
iVenture accelerator support, and an NSF I-Corps grant.

Current status: pre-revenue, two pilot partners, MRR $0, monthly burn approximately $2,000.

The financial model shows EBITDA break-even in year three on $4M to $6M of total capital, so
this round is sized to reach the point where the next one is optional.

**Use of funds:** *[TBC, must sum to 100 percent]*

**Cap:** *[TBC]*

Arham Shah · arham@kwhelectric.io · kwhelectric.io

---

## Open items on this deck

1. Headline style. `DECK-V5-PROMPT.md` bans two-word sentence pairs and triadic fragments.
   The v6 chat specification requires them. This document follows v5. Pick one.
2. Round label. Pre-seed against seed.
3. Every bracketed figure above, in particular the per-asset enrollment time on slide 07,
   the fleet metrics on slide 09, and use of funds on slide 18.
4. No gateway price appears anywhere in this deck, deliberately. See
   `03-financials/financials.md` section 8.
