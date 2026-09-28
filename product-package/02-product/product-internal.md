# kWh Electric · Product Reference

**Internal.** Contains bracketed placeholders, unresolved figures and known contradictions.
Do not send outside the company. The external version is `product-external.md`.

Source: kWh Electric Master Knowledge Document. Nothing here is invented. Where the master
document is silent, the field is marked `[TBC]` rather than filled by assumption.

---

## Contents

1. Positioning
2. The problem
3. The platform
4. Capabilities
5. Supported assets
6. Connectivity and interoperability
7. Architecture
8. Applications
9. Competitive position
10. Specification
11. Open items

---

# 1. Positioning

**kWh Network + DER Gateway**
Universal Energy Translation Platform

> Every energy asset, visible and dispatchable. One platform, any protocol, any OEM, any
> geography.

kWh Electric builds the translation layer between distributed energy resources and the
systems that operate them. The kWh Network is the software platform. It discovers assets,
normalises their data into one canonical model, routes control commands, and presents a
single interface northbound to utilities, DERMS, aggregators and applications. The DER
Gateway is the field device that reaches assets the Network cannot address directly.

Assets that already expose a compatible interface connect to the Network through OEM cloud
connectors and direct APIs. Assets that do not, which is most of the installed base, connect
through the Gateway. Both paths resolve into one asset registry, one control surface and one
audit trail.

**Naming warning.** "kWh Network" is not a term used in the master document, which calls the
software side the *Universal Energy Translation Platform*. Approve or replace before
external use.

---

# 2. The problem

## 2.1 Scale

More than 100 million distributed energy resources are deployed globally, and no common
dispatch layer exists between them. An estimated 80 percent of DER fleets lack unified
dispatch. The gap is not a shortage of assets. It is a shortage of a way to address them.

## 2.2 Cause

Every manufacturer ships its own firmware, protocol dialect, API and cloud. A utility that
wants visibility and control across a mixed fleet must build and maintain a separate
integration for each one. Industry estimates put that integration tax at over 50,000 US
dollars per month, per utility, per OEM. Each integration that gets built becomes another
silo, and none of them compose.

## 2.3 Why existing integrations do not solve it

The integrations that do exist are cloud-down. OEM APIs are rate-limited, hosted offshore,
and revocable by the vendor whose commercial interest is served by keeping the fleet inside
its own platform. Data sovereignty obligations under GDPR, India's DPDP Act and US state
privacy law are difficult to satisfy when telemetry has to transit a third-party cloud in
another jurisdiction to reach the operator who owns the asset.

## 2.4 Where it hurts operationally

The consequence sits at the low-voltage network. Rooftop solar reverses power flow through
distribution transformers at midday, which raises voltage, trips inverters, thermally cycles
the transformer and mis-coordinates protection. None of it is visible without sub-transformer
sensing. The flexibility to correct it already exists in the field, in batteries and
inverters and controllable loads that are physically capable of responding and
administratively unreachable.

Reverse power flow is the sharpest low-tension talking point available and should lead any
DISCOM conversation.

---

# 3. The platform

Two components. Sold and deployed separately, designed as one system.

## 3.1 kWh Network, the digital infrastructure

The Network holds the canonical model that every connected asset is expressed in. Everything
else is built on that model.

| Service | Function |
|---|---|
| Asset Registry | Identity, enrollment and lifecycle state for every connected asset |
| Canonical Model | One normalised DER representation, independent of make, model and protocol |
| Translation Engine | Bidirectional mapping between native device semantics and the canonical model |
| Control Router | Directs commands from any northbound platform to the correct asset by the correct path |
| Policy Engine | Enforces operating limits, permissions and control authority as policy |
| Digital Twin | Live representation of each asset's state, capability and history |

Four functions run continuously underneath: telemetry normalisation, command translation,
event correlation, and audit and logging.

**Northbound projections.** The same canonical model is projected into whatever the
counterparty already speaks, without a separate integration for each: IEEE 2030.5 with CSIP
and SEP2 profiles over mTLS, OpenADR 2.0b and 3.0, Universal API in REST and JSON, CIM
export to IEC 61970 and 61968, webhooks on CloudEvents, native and partner OEM APIs, and a
path for standards not yet published.

## 3.2 DER Gateway, the physical infrastructure

The Gateway sits at the site, speaks each connected asset's native protocol locally, and
presents one clean IEEE 2030.5 interface northbound.

It performs **model translation, not only protocol translation**. Decoding a Modbus register
map is the easy half. The Gateway resolves what those registers mean in each vendor's
implementation and expresses them as the same canonical DER object that every other asset on
the network produces.

It **executes locally**. Setpoints, schedules, Volt-VAR, Volt-Watt and frequency-Watt curves,
and ramp-rate control all run on the device. When the connection to the Network is lost, the
Gateway continues operating and enforces its configured safe operating envelope rather than
failing to an undefined state. Telemetry is buffered to local storage and forwarded when the
link returns.

It **verifies**. Every dispatch event is logged before, during and after execution, which
produces the record needed to prove response and claim revenue.

## 3.3 Two variants

Same compute core, same software stack. They differ in where the device has to survive.

**Model A, DER Gateway.** Behind-the-meter and small commercial sites. Batteries, solar PV,
inverters. Indoor or enclosure-protected. Control-grade, with direct CAN access to the
battery management system.

**Model B, DT Gateway.** Distribution transformer sites. Ruggedised, cellular-connected,
outdoor-rated. Reads the transformer's existing meter or monitoring IED and aggregates it
with co-located DER telemetry.

**Neither model meters.** Model A reads inverter and BMS telemetry. Model B reads the
metering or monitoring system already installed at the transformer. Never claim kWh does
metering.

## 3.4 The relationship

The Gateway is a component of the Network, not a separate product line.

The Network is useful without the Gateway when an asset already exposes a compatible API,
and utilities can begin with cloud-connected fleets and no hardware installed. The Gateway
extends the Network to the assets that cannot participate any other way, which is the legacy
and protocol-native majority of the installed base.

Neither component locks the other in. Both write into the same canonical model, and an
operator sees one fleet regardless of how any individual asset arrived.

**Internal note.** This two-path design weakens the older "hardware is our moat" line,
because Layer 1 now shows OEM cloud connectors reaching assets with no kWh gateway installed.
Either the moat argument moves to the translation and canonical model, or the connector path
is framed as an onboarding ramp to hardware. Unresolved. Do not use "hardware is our moat"
until it is settled.

---

# 4. Capabilities

## 4.1 Discovery and fleet management
Automatic asset discovery and capability detection. Device enrollment and identity issuance.
Asset registry with lifecycle state. Digital twin per asset. Fleet-scale management across
sites, owners and geographies.

## 4.2 Translation and normalisation
Bidirectional translation between native device semantics and one canonical DER model.
Vendor-specific register maps and object models resolved at the edge or at the connector.
Telemetry normalisation and command translation as a continuous platform service rather than
a per-integration project.

## 4.3 Dispatch and control
Active and reactive power setpoints. Schedule execution. Volt-VAR, Volt-Watt and
frequency-Watt curves. Ramp-rate control. Ride-through configuration and event capture.
IEEE 1547 DER function set. Charge, discharge, curtail and shift commands issued from any
northbound platform in real time. Transformer-aware dispatch constraint on Model B, limiting
export to protect the distribution transformer's thermal and loading limits.

## 4.4 Verification and audit
Every dispatch event logged before, during and after execution. Curtailment requested against
curtailment delivered, in kilowatts and duration. Setpoint compliance and ramp-rate
adherence. Response latency to a grid signal. Correlated acknowledgements on every command.
Event correlation and full audit logs at the platform.

## 4.5 Security and governance
Trusted Execution Environment on-device. Zero-trust device identity, so a single compromised
device cannot reach the fleet. mTLS and PKI. Role-based access control and tenant isolation.
Secure boot and signed firmware. Data sovereignty, with telemetry retained in-jurisdiction
for GDPR, DPDP Act and US state-law compliance.

## 4.6 Resilience and continuity
Local execution independent of cloud availability. Safe-operating-envelope enforcement on
communications loss. Store-and-forward buffering through outages. Redundant firmware banks
and over-the-air update on Model B. Power-loss ride-through for last-gasp reporting at
transformer sites.

## 4.7 Integration and developer surface
Universal API v2. Webhooks on CloudEvents. SDKs for Python, TypeScript, Java and .NET.
OpenAPI 3.1 specification. CIM export for systems that consume IEC 61970 and 61968.

---

# 5. Supported assets

Three paths in. All resolve into the same canonical model.

## 5.1 Field and edge connected, through a Gateway
Battery energy storage systems · Solar PV · EV chargers · Inverters · Meters · HVAC and
flexible loads · Microgrids · Distribution transformers, read through their existing meter or
monitoring IED

## 5.2 OEM and vendor cloud, through connectors
Tesla · Sonnen · SolarEdge · Enphase · GoodWe, and additional platforms through direct OEM
APIs and MQTT. No kWh hardware is installed on this path.

## 5.3 Legacy and protocol-native
Modbus · CAN · BACnet · DLMS · proprietary vendor protocols

## 5.4 Battery detail

Battery systems connected through Model A additionally expose cell-level BMS telemetry over
CAN: per-module voltage, per-module temperature, balancing status and fault flags, alongside
state of charge, state of health, charge and discharge power, cycle count and round-trip
efficiency.

---

# 6. Connectivity and interoperability

## 6.1 Southbound, toward the asset
IEEE 2030.5 · Modbus RTU and Modbus TCP · SunSpec Modbus · CAN 2.0B, CANopen and J1939 ·
OCPP · DNP3 · BACnet · DLMS · MQTT · Zigbee · IEC 61850 client, optional on Model B · digital
I/O for interlocks, relays, status and alarms

## 6.2 Northbound, toward the operator
IEEE 2030.5, CSIP and SEP2 profiles over mTLS · OpenADR 2.0b and 3.0 · CIM export, IEC 61970
and 61968 · Universal API, REST and JSON · webhooks on CloudEvents · native and partner OEM
APIs · DNP3 and IEC 61850 to utility SCADA, optional on Model B

## 6.3 Standards position

IEEE 2030.5 is mandated under California Rule 21 and is the platform's primary northbound
interface. IEEE 1547 is the day-one interconnection standard for distribution-connected
assets and its DER function set is implemented on Model A.

**IEEE 2800 is transmission-level aggregation. It is a roadmap item and is not a current
claim.** Do not state or imply conformance.

## 6.4 Client and server in the same device

The Gateway operates as both an IEEE 2030.5 **client**, talking to a utility server, and an
IEEE 2030.5 **server**, presenting to a DERMS or VPP platform. Both directions are
implemented in the same device, which allows kWh to sit on either side of a utility
integration without a change of product.

## 6.5 Regulatory position

The platform operates behind and alongside the meter with asset-owner consent. It does not
alter tariffs, metering or settlement.

Anchors: IEEE 2030.5 under California Rule 21, OpenADR for North American demand response,
FERC Order 2222 for wholesale markets serving aggregated DERs, EU network codes, and India's
CEA, NSPM, RDSS and Green Energy Open Access Rules 2022. Privacy: GDPR, DPDP Act 2023, and US
state law through in-jurisdiction telemetry.

**Language warning.** Sanctioned load is a regulated contractual quantity. Never claim to
adjust sanctioned load in real time to a DISCOM audience. The correct and technically
identical framing is **flexible connections with dynamic operating envelopes**, consented
through the connection agreement.

---

# 7. Architecture

Four layers. This supersedes the older five-layer stack, which is retired.

```
LAYER 1 — ASSETS
BESS · Solar PV · EV chargers · Inverters · Meters
HVAC and flexible loads · Microgrids · Distribution transformers
Legacy protocol assets: Modbus · CAN · BACnet · DLMS · proprietary

        │                                    │
        │ (no compatible interface)          │ (compatible API or cloud)
        ▼                                    │
                                             │
DER GATEWAY                                  │
Native protocol drivers · Local execution    │
Model translation · Store-and-forward        │
Safe operating envelope · Verification       │
IEEE 2030.5 client and server                │
                                             │
        │                                    │
        └──────────────┬─────────────────────┘
                       ▼

LAYER 2 — kWh NETWORK · CORE PLATFORM SERVICES
Asset Registry · Canonical Model · Translation Engine
Control Router · Policy Engine · Digital Twin
Telemetry normalisation · Command translation
Event correlation · Audit and logs
OEM cloud connectors · Direct OEM APIs and MQTT

                       │
                       ▼

LAYER 3 — UNIVERSAL INTEGRATION LAYER
IEEE 2030.5 (CSIP/SEP2) · OpenADR 2.0b/3.0 · Universal API (REST/JSON)
CIM export (IEC 61970/61968) · Webhooks (CloudEvents)
OEM API (native/partner) · Custom projections

                       │
                       ▼

LAYER 4 — APPLICATIONS AND ECOSYSTEM
Utility DERMS (CSIP / 2030.5) · Aggregators and VPPs
OEM platforms and partner applications · JARVIS (AI intelligence)
Weather APIs · External APIs (markets, GIS, billing, payments)
Consumed through Universal API v2 · Webhooks · SDKs · OpenAPI 3.1
```

**Two paths, one platform.** An asset that already exposes a compatible API connects to the
Network directly through an OEM cloud connector, with no kWh hardware installed. An asset
that does not connects through a Gateway. Both paths write into the same canonical model, so
the operator above Layer 3 sees one fleet and one control surface regardless of which path
any given asset took.

**Flow.** Telemetry travels up. Dispatch travels down. Every command carries a correlated
acknowledgement, so the platform records what was delivered rather than only what was sent.

**Flow legend for any redraw.** Telemetry and data up: green solid. Dispatch and control
down: orange dashed. Identity, trust and security: grey dashed.

**Three cross-cutting properties.** Bidirectional flow with correlated acknowledgements.
Secure by design through mTLS, PKI, RBAC, tenant isolation, audit and data governance.
Protocol and vendor agnostic across any protocol, any OEM, any geography.

**Not on this diagram:** Beckn ONIX and MCP. Both are real. Beckn is the DISCOM channel and
MCP is the agentic interface. Neither is an architectural layer any longer. Do not re-insert
them into the layer list.

---

# 8. Applications

## 8.1 Demand response
Program signals arrive over OpenADR or IEEE 2030.5 and are translated into native commands
for every enrolled asset regardless of manufacturer. Delivered response is logged per event
and per asset.

## 8.2 Virtual power plants
A single dispatch interface across a mixed fleet of asset types and manufacturers.
Aggregators address capacity by canonical model rather than by vendor integration.

## 8.3 Battery dispatch
Charge, discharge and shift commands with setpoint and ramp-rate compliance recorded. State
of charge, state of health, cycle count and round-trip efficiency reported continuously, with
cell-level temperature and fault flags where the BMS is reachable over CAN.

## 8.4 Solar curtailment and export management
Curtailment requested against curtailment delivered, in kilowatts and duration. Voltage at
the point of connection, which locates low-voltage over-voltage caused by solar. Reactive
contribution through Volt-VAR and Volt-Watt curve execution.

## 8.5 EV charging
OCPP-connected charge points managed alongside every other asset class in the same fleet view
and under the same control policy.

## 8.6 Grid services
Frequency response participation. Reactive support to manage feeder voltage without capital
works. Ride-through event logs. Harmonics and THD as reported by the inverter.

## 8.7 Distribution transformer monitoring
Loading in kVA against rating and percentage utilisation. Overload events and duration. Oil
and winding temperature with thermal trend. Estimated thermal loss of life. Tap position on
OLTC units. Per-phase voltage and voltage quality. Phase imbalance. Reverse power flow
presence and duration. Sags, swells and interruptions as reported by the existing meter.

All values are read from the transformer's existing instrumentation. Availability depends on
what that system exposes.

## 8.8 Dynamic load management and flexible connections
Dynamic operating envelopes delivered over IEEE 2030.5, consented through the connection
agreement. Transformer-aware dispatch constraints that limit DER export to protect the
transformer. Local hosting-capacity indication derived from real loading and voltage data.
Australia's CSIP-AUS is the working precedent.

## 8.9 Loss and reliability analytics
Feeder and transformer input against downstream consumption, which localises AT&C loss to the
transformer. Outage detection and restoration timestamps at transformer level, feeding SAIDI
and SAIFI at fine grain. Last-gasp reporting through power-loss ride-through.

## 8.10 Commercial and industrial energy management
Site-level visibility across generation, storage and flexible load. Self-consumption against
export ratio. Participation in grid programs using assets already installed.

## 8.11 Microgrids
Coordinated visibility and control across generation, storage and load within a bounded
system, using the same canonical model as grid-connected assets.

## 8.12 Asset health, verified telemetry and financing
Continuous condition data and an auditable dispatch record, which supports maintenance
planning and gives financiers verifiable performance history on financed assets. This is the
basis of the Fannie Mae engagement on securitizing microgrid and datacenter loans.

## 8.13 DISCOM value summary

**Model A at the DER.** Low-voltage network visibility where none existed. Reactive support to
manage feeder voltage without capital works. DER dispatch for peak management and
network-upgrade deferral. A data foundation for hosting-capacity and planning studies.

**Model B at the transformer.** Remote condition monitoring, which means fewer failures and
longer transformer life. AT&C loss localisation down to the transformer. Fine-grained
reliability data without manual reporting. Safe rooftop-solar integration without
low-voltage overload. Deferral of transformer replacement through load-balancing insight.

---

# 9. Competitive position

## 9.1 Against point-to-point integration

Point-to-point integration scales linearly with the number of manufacturers in the fleet.
Every new OEM is a new project, a new maintenance burden and a new failure mode, and nothing
built for one vendor transfers to the next.

The kWh architecture scales with the number of protocols, not the number of vendors, because
translation happens once into a canonical model and every northbound consumer reads that
model. Adding an OEM adds a driver, not an integration program.

## 9.2 Against cloud-only approaches

Cloud-only platforms depend on the OEM's API remaining available, permissive and fast enough
to carry control. Those APIs are rate-limited, frequently hosted outside the operator's
jurisdiction, and revocable by a vendor whose commercial interest lies in keeping the fleet
on its own platform. When connectivity fails, a cloud-only architecture has nothing at the
site to fall back on.

kWh executes at the edge. Control logic, safe operating envelopes and verification run on the
Gateway, so dispatch continues through connectivity interruptions and telemetry is buffered
rather than lost. Telemetry can be retained in-jurisdiction, which makes the data-sovereignty
position defensible rather than aspirational.

## 9.3 Against DERMS platforms

kWh is not a DERMS and does not compete with one. It sits below the DERMS as the
connectivity, normalisation, security and verification layer, and it feeds the DERMS a clean
canonical model over the interface that DERMS already speaks. Operators keep the platform
they have chosen and gain access to the assets it could not previously reach.

## 9.4 Summary

| | Point-to-point | Cloud-only | kWh |
|---|---|---|---|
| Cost of adding an OEM | New integration project | New API integration, if the API exists | New driver against existing model |
| Behaviour on connectivity loss | Undefined | Control unavailable | Local execution, safe envelope, buffered telemetry |
| Control authority | Per-integration | Held by the OEM | Held by the asset owner and operator |
| Data location | Varies | OEM cloud, often out of jurisdiction | In-jurisdiction |
| Legacy asset coverage | Bespoke per asset | Not addressable | Addressable through the Gateway |
| Verification of delivered response | Per-integration, if built | Depends on OEM reporting | Logged before, during and after every event |
| Commercial model | Engineering time, recurring | Per-platform subscription | Pay-once gateway licence plus SaaS, no per-dispatch fee |

## 9.5 Named competitors

Kalkitech. OEM-managed ecosystems including Enphase, Tesla and Sungrow clouds. Cloud-down
DERMS of the AutoGrid and Uplight class. Solitude Labs.

## 9.6 Objection handling

**Will OEMs open their APIs?** They have had 15 years. Openness cannibalizes their recurring
cloud revenue. Even open OEM APIs are cloud-down: rate-limited, offshore, revocable. kWh is
edge-up and owned by the asset owner.

**Why hardware?** The problem is at the device, not in the cloud. The gateway BOM costs less
than an hour of integration engineering.

**Is this just another DERMS?** No. kWh feeds DERMS. It is the connectivity, normalisation and
security layer below.

**Only two pilot customers?** Two industrial partners with 2,500-plus sites and 30-plus MW,
live since December 2025, plus a channel into 5 DISCOMs on 3 continents, at roughly $2,000
per month burn. Capital efficiency is the story.

**India risk?** India is the proving ground for velocity, not the market cap. HQ is Palo Alto
and the commercial centre is North America under Rule 21 and FERC 2222.

---

# 10. Specification

| | **Model A · DER Gateway** | **Model B · DT Gateway** |
|---|---|---|
| Application | BESS, solar PV, inverters | Distribution transformer sites |
| Class | SBC-tier embedded gateway | Ruggedised, cellular-connected |
| Compute | Quad-core ARM Cortex-A, RK3568 or i.MX8M-mini class | Quad-core ARM Cortex-A, equal to or above Model A |
| Memory | 1 to 2 GB RAM | 2 GB RAM |
| Storage | 8 to 16 GB eMMC plus microSD, store-and-forward | 16 to 32 GB, outage buffering, redundant firmware banks |
| Operating system | Embedded Linux, Yocto or Buildroot, containerised app runtime, OTA | Embedded Linux, containerised app runtime, OTA |
| Southbound | 1 to 2 × isolated RS-485 for Modbus RTU · Ethernet for Modbus TCP and SunSpec Modbus · 1 × CAN 2.0B, CANopen and J1939, to BMS · optional digital I/O for interlocks and relays | Modbus and DNP3 client to existing DT meter or monitoring IED · optional IEC 61850 client · digital inputs for status and alarms. Read-only, no metering front-end |
| Northbound | Ethernet, optional 4G LTE · IEEE 2030.5 server and client | IEEE 2030.5 · optional DNP3 and IEC 61850 to utility SCADA · dual Ethernet plus 4G LTE · GPS |
| Protocols | IEEE 2030.5 · Modbus RTU and TCP · SunSpec Modbus · CAN · IEEE 1547 DER function set | IEEE 2030.5 · Modbus · DNP3 · IEC 61850, optional |
| Control functions | Active and reactive power setpoints · schedule execution · Volt-VAR, Volt-Watt, frequency-Watt · ramp-rate control · ride-through configuration and event capture · safe-operating-envelope enforcement on comms loss · cell-level BMS telemetry over CAN | Aggregate and normalise DT and co-located DER telemetry into IEEE 2030.5 · transformer-aware dispatch constraint · event capture and store-and-forward through outages · safe-envelope enforcement for co-located controllable assets |
| Timing and security | NTP and PTP, GPS optional · TLS · secure boot, SoC-dependent · signed firmware · RBAC | NTP and PTP · GPS · TLS · signed firmware · RBAC |
| Enclosure | DIN-rail or panel mount, IP20 | Outdoor pole or pad mount, IP65 / IP66 |
| Operating temperature | 0 to +50 °C commercial. Industrial option −20 to +60 °C. `[Grade at launch TBC]` | −40 to +85 °C |
| Power input | 9 to 24 VDC | `[TBC]` |
| Environmental | `[Not specified]` | Surge and EMC protection for pole-top · integrated cellular modem and antenna · ride-through capacitor or battery for last-gasp reporting |
| Regulatory | CE and FCC target | `[Certification targets per region TBC]` |
| Dimensions and weight | `[TBC]` | `[TBC]` |
| Max assets per gateway | `[TBC]` | `[TBC]` |
| Telemetry interval and latency | `[TBC]` | `[TBC]` |
| IEEE 2030.5 certification status | `[TBC]` | `[TBC]` |
| Target price at volume | `[CONTESTED, see financials §8]` | `[CONTESTED, see financials §8]` |

**Cost drivers behind the roughly 4× gap between Model B and Model A.** This is physics, not
markup: IP65/66 outdoor enclosure, −40 to +85 °C grade, surge and EMC protection for
pole-top, wider isolated I/O count, integrated cellular modem and antenna, and a ride-through
capacitor or battery for last-gasp reporting.

**Commercial model.** Pay-once gateway licence plus recurring SaaS. No per-dispatch fees. No
lock-in. Pricing `[TBC]`.

---

# 11. Open items

## 11.1 Must be resolved before external use

1. **Hardware pricing.** Six conflicting figures. See `03-financials/financials.md` §8. No
   price appears anywhere in the external datasheet.
2. **Product naming.** "kWh Network" is not in the master document.
3. **Certification targets** per region: CE, UL, BIS, regional metering.
4. **Model A temperature grade at launch:** commercial or industrial.
5. **Is Model B's price hardware only,** or hardware plus data plan plus SLA.

## 11.2 Claims deliberately not made anywhere in this package

- Metering, in either model.
- IEEE 2800 conformance.
- Adjusting sanctioned load. Replaced throughout with flexible connections and dynamic
  operating envelopes.
- "Hardware is our moat", which conflicts with the OEM connector path.
- "No third-party licence dependencies." DemandCast is AGPL-3.0 and is a methodology
  reference only, never linked into the product.
- "We use Nixtla" without qualification. TimeGPT is a closed-source paid API that would break
  the data-sovereignty claim and is not used. The self-hosted Apache-2.0 packages are.
- Vish Ganti as an advisor. He is not one.

## 11.3 Missing specification data

Every `[TBC]` in section 10. The largest gaps a utility engineer will ask about first are
certification status, maximum assets per gateway, telemetry interval, and Model B power
input.

## 11.4 Open-source posture, for technical due diligence

In product, all permissive: pvlib-python BSD-3, LightGBM MIT, OpenDSS BSD-style, pandapower
BSD-3, SHAP MIT, Kubernetes, Prometheus and Grafana Apache-2.0.

Not in product: DemandCast, AGPL-3.0, methodology reference only. TimeGPT, closed-source paid
API, not used. MATPOWER is transmission-only and balanced positive-sequence, which is the
wrong tool for Indian low-tension networks that are three-phase four-wire unbalanced. Use
OpenDSS and pandapower for LT.
