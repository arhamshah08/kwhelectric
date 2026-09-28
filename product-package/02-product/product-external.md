# kWh Network + DER Gateway

**External datasheet.** A4, printed both sides. Roughly 750 words. Every `[TBC]` is a real
gap, not a placeholder to be filled by guess.

---

# PAGE 1

## Header

**kWh Network + DER Gateway**
Universal Energy Translation Platform

> **Every energy asset, visible and dispatchable.**
> One platform, any protocol, any OEM, any geography.

## Standfirst

kWh Electric builds the translation layer between distributed energy resources and the
systems that operate them. The kWh Network normalises every connected asset into one
canonical model and presents a single interface northbound to utilities, DERMS and
aggregators. The DER Gateway reaches the assets that interface cannot address directly.

## The problem

**The assets are already installed. The way to reach them is not.**

More than 100 million DERs are deployed globally with no common dispatch layer between them.
Every manufacturer ships its own firmware, protocol dialect, API and cloud, so a utility with
a mixed fleet builds and maintains a separate integration for each one, and each integration
becomes another silo. The integrations that do exist are cloud-down: rate-limited, often
hosted out of jurisdiction, revocable by the vendor, and inert the moment connectivity fails.

`100M+ DERs deployed globally` · `80% of fleets without unified dispatch` · `$50K+ per month, per OEM`

## The two products

**kWh Network · the digital infrastructure**

Asset Registry, Canonical Model, Translation Engine, Control Router, Policy Engine and
Digital Twin. Discovers assets, normalises telemetry, routes commands and enforces control
authority as policy. Projects the same model northbound into IEEE 2030.5, OpenADR, CIM, REST
and webhooks, so adding a consumer does not require a new integration.

**DER Gateway · the physical infrastructure**

Speaks each asset's native protocol locally. Executes setpoints, schedules and Volt-VAR,
Volt-Watt and ramp-rate control on the device. Enforces its safe operating envelope and
buffers telemetry when the link drops. Logs every dispatch before, during and after
execution. Performs model translation, not only protocol translation.

## The relationship

> The Gateway is a component of the Network, not a separate product. Assets with a compatible
> interface connect to the Network directly through OEM connectors. Assets without one connect
> through a Gateway. Both paths write into the same canonical model, so the operator sees one
> fleet.

## Diagram

```
Assets  ·  BESS, solar PV, EV chargers, inverters, meters,
           flexible loads, microgrids, distribution transformers

    ↓ (no compatible interface)        ↓ (compatible API or cloud)

DER Gateway                            OEM connectors / direct APIs

    └──────────────┬───────────────────┘

kWh Network  ·  canonical model, registry, policy, control routing

    ↓

IEEE 2030.5 · OpenADR · Universal API · CIM · Webhooks

    ↓

Utility DERMS · Aggregators and VPPs · OEM platforms · Applications
```

**Fixed requirement for the designer:** the two paths must visibly converge. That convergence
is the product. Orientation, colour, and how telemetry-up against dispatch-down is indicated
are all open.

---

# PAGE 2

## Capabilities

**Discovery and management.** Automatic asset discovery and capability detection · device
enrollment and identity issuance · digital twin per asset · fleet management across sites,
owners and geographies

**Dispatch and verification.** Active and reactive power setpoints · schedule execution ·
Volt-VAR, Volt-Watt and frequency-Watt curves · ramp-rate control · IEEE 1547 DER function
set · curtailment requested against delivered · setpoint compliance and response latency
logged per event

**Security and governance.** Trusted Execution Environment on-device · zero-trust device
identity · mTLS and PKI · role-based access control and tenant isolation · secure boot and
signed firmware · in-jurisdiction telemetry retention

**Resilience and integration.** Local execution independent of cloud availability ·
safe-envelope enforcement on comms loss · store-and-forward buffering · OTA update · Universal
API v2, webhooks on CloudEvents, SDKs for Python, TypeScript, Java and .NET, OpenAPI 3.1

## Supported assets

Battery energy storage · Solar PV · EV chargers · Inverters · Meters · HVAC and flexible
loads · Microgrids · Distribution transformers, read through existing instrumentation ·
Legacy Modbus, CAN, BACnet, DLMS and proprietary assets · OEM cloud platforms including
Tesla, Sonnen, SolarEdge, Enphase and GoodWe

## Protocols

**Southbound:** IEEE 2030.5 · Modbus RTU and TCP · SunSpec Modbus · CAN 2.0B · OCPP · DNP3 ·
BACnet · DLMS · MQTT · Zigbee · IEC 61850, optional

**Northbound:** IEEE 2030.5, CSIP and SEP2 over mTLS · OpenADR 2.0b and 3.0 · CIM, IEC 61970
and 61968 · Universal API, REST and JSON · webhooks on CloudEvents · DNP3 and IEC 61850 to
SCADA, optional

The Gateway operates as both an IEEE 2030.5 client and an IEEE 2030.5 server in the same
device, which allows kWh to sit on either side of a utility integration. IEEE 1547 is
implemented on Model A. IEEE 2800 is a roadmap item and is not a current capability.

## Applications

Demand response · Virtual power plants · Battery dispatch · Solar curtailment and export
management · EV charging · Grid services · Distribution transformer monitoring · Dynamic
operating envelopes · Loss and reliability analytics · Commercial and industrial energy
management · Microgrids · Verified telemetry for asset health and financing

## Why this architecture

| | Point-to-point | Cloud-only | kWh |
|---|---|---|---|
| Adding an OEM | New integration project | New API integration, if one exists | New driver against existing model |
| Connectivity loss | Undefined | Control unavailable | Local execution, safe envelope, buffered telemetry |
| Control authority | Per-integration | Held by the OEM | Held by the asset owner and operator |
| Verified response | If built | Depends on OEM reporting | Logged before, during and after |

kWh is not a DERMS and does not replace one. It sits below the DERMS as the connectivity,
normalisation, security and verification layer.

## Specification

| | **Model A · DER Gateway** | **Model B · DT Gateway** |
|---|---|---|
| Application | BESS, solar PV, inverters | Distribution transformer sites |
| Southbound | 1–2 × isolated RS-485 · Ethernet, Modbus TCP and SunSpec · 1 × CAN 2.0B to BMS · optional digital I/O | Modbus and DNP3 client to existing meter or IED · optional IEC 61850 · digital inputs. Read-only |
| Northbound | Ethernet, optional 4G LTE · IEEE 2030.5 server and client | IEEE 2030.5 · optional DNP3 and IEC 61850 · dual Ethernet plus 4G LTE · GPS |
| Compute | Quad-core ARM Cortex-A, 1–2 GB RAM, 8–16 GB eMMC plus microSD | Quad-core ARM Cortex-A, 2 GB RAM, 16–32 GB, redundant firmware banks |
| Enclosure | DIN-rail or panel, IP20 | Outdoor pole or pad mount, IP65 / IP66 |
| Temperature | 0 to +50 °C, industrial option −20 to +60 °C `[grade at launch TBC]` | −40 to +85 °C |
| Power | 9–24 VDC | `[TBC]` |
| Certification | CE and FCC target | `[TBC]` |

Neither model meters. Model A reads inverter and BMS telemetry. Model B reads the
transformer's existing metering or monitoring system, and available data depends on what that
system exposes.

## Footer

Pay-once gateway licence plus recurring SaaS. No per-dispatch fees. No lock-in. Pricing
`[TBC]`.

**kWh Electric** · Palo Alto, California · kwhelectric.io
Sales `[email]` · Technical `[email]` · Telephone `[number]`
`[Document reference]` · `[Revision]` · `[Date]` · Specifications subject to change without
notice.

---

## Notes for the designer

**Page 2 is at capacity.** If it sets too tight, drop the "Why this architecture" table first
and replace it with a QR code. It is the most persuasive block and the least load-bearing for
an engineer who already understands the problem.

**What this format loses,** relative to `product-internal.md`: the three cost drivers behind
Model B's price gap, cell-level BMS telemetry detail, full application descriptions, and the
regulatory position covering Rule 21, FERC 2222 and the India CEA and RDSS anchors. If
DISCOMs and government agencies are a real target, a separate one-page transformer-monitoring
insert is a better answer than fitting it here.
