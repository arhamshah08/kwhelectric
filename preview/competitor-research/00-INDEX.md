# Competitor Research Index — kWh Electric Product / Solutions Planning

> Folder: `preview/competitor-research/`  
> Captured: **2026-08-31**  
> Scope: Research + documentation only. **Live kWh production site was not modified.** No Solutions/Resources pages built.

## Files

| File | Company | Primary domain |
|------|---------|----------------|
| [derapi.md](./derapi.md) | DERApi / Derapi | https://derapi.com |
| [enode.md](./enode.md) | Enode | https://enode.com |
| [texture.md](./texture.md) | Texture (TextureHQ) | https://www.texturehq.com |
| [molecule-systems.md](./molecule-systems.md) | Molecule Systems | https://moleculesystems.com |
| [dersec.md](./dersec.md) | DERSec / DER Security Corp | https://dersec.io |

### Domain resolution notes
- **Texture:** texturehq.com (not texture.io)
- **Molecule:** moleculesystems.com (not molecule.xyz)
- **DERSec:** dersec.io (not dersec.com)

---

## Comparison table (at a glance)

| | Derapi | Enode | Texture | Molecule | DERSec |
|---|--------|-------|---------|----------|--------|
| **One-liner** | Unified DER APIs + console + services | Device connect → optimize → flex VPP APIs | OS for grid ops (utilities/VPPs) | Execution/control point for DER fleets | OT cyber + protocol gateway for DER |
| **Nav style** | Solutions (buyers) + Resources | Products + Use cases + Devs | Platform + Solutions (buyers) + Docs | Products + Who we serve | Platform + Products + Solutions (verticals) |
| **Product framing** | API / Console / Services | Connect / Optimize / Flex | Platform + Device Cloud + OEM Direct | AERA / EMS / Optimization / DividendVPP | Sentry / DERSync / DERSim / LabTest |
| **Primary buyers** | VPP/DERMS, OEM, Lender/TPO/IPP, Installer/O&M | Retailers, apps, DERMS, fleets, utilities | Utilities, VPPs, grid-services cos | OEM, developers, VPP/agg, asset owners, optimizers | Utilities, VPP/DERMS, data centers, military, EV |
| **OEM track** | Buyer page | Partnerships | Dedicated `/oem` + public spec | Who-we-serve + DividendVPP | LabTest + secure devices |
| **Financier track** | **First-class** Lenders/TPOs/IPPs | Weak / absent | Named in Device Cloud trust story | Asset owners / portfolio | Indirect |
| **Aggregator/VPP track** | First-class | Flex + DERMS industries | First-class Solutions | First-class | Solutions vertical |
| **Protocol / gateway** | Cloud OEM APIs | Cloud OEM APIs + Link UI | Cloud + topology; Direct API | Edge MOS350 + AERA | **DERSync** IEEE 2030.5 gateway |
| **Docs** | docs.derapi.com | developers.enode.com | docs.texturehq.com | /developer + FAQ/glossary | Spec sheets / whitepapers (gated) |
| **Public pricing** | No | No (free explore + sales) | No | No (perf share on DividendVPP) | No |
| **Best borrow for kWh** | Buyer mega-menu IA | 2–3 product mega-menu copy | OEM public-spec path | Execution / gateway narrative | Protocol gateway SKU clarity |

---

## Nav hierarchies (5–10 lines each)

### Derapi
1. Solutions ▾ — Our Solutions; VPPs & DERMs; OEMs; Lenders/TPOs/IPPs; Installers & O&Ms  
2. Resources ▾ — API Resources; Blog  
3. About · Contact · LOGIN  
4. Footer mirrors Solutions + API Resources + Blog  

### Enode
1. Products ▾ — Connect; Optimize; Flex  
2. Use cases ▾ — Devices (EV, charger, solar, battery, HVAC) + solution list (HEM, DR, VPP, V2G, …)  
3. Company ▾ — About; Customers; Partnerships; Careers; Contact; Blog  
4. Developers ▾ — API reference; Getting started; Feature guides; Brands  
5. CTAs: Contact sales · Start building  

### Texture
1. Platform Overview · Solutions ▾ · Company ▾ · Customers · Docs · Sign in · Book a demo  
2. Solutions: Electric Utilities; VPPs; Grid Services Companies; Grid Operations; Grid Visibility  
3. Footer Resources: CORD; Blog; Legal; Security  
4. Parallel OEM track: `/oem` + `/oem/spec`  

### Molecule Systems
1. Platform products: AERA; EMS; Optimization; DividendVPP  
2. Who we serve (OEMs, Developers, VPP Platforms, Asset Owners, Optimization)  
3. About / Events / Partnerships · Blog · FAQ · Glossary · Resources · Developer · Contact  

### DERSec
1. Platform · Products (Sentry, DERSync, DERSim, LabTest) · Solutions (5 industry verticals)  
2. Resources (Downloads, News, Whitepapers) · Case studies · About/Careers · Contact  

---

## Speech-to-text note: “dumpsters, OEMs, and financiers”

| Literal | Likely intended (energy context) | Competitor validation |
|---------|----------------------------------|------------------------|
| **dumpsters** | **Aggregators** (or VPP/DERMS operators / developers) | Derapi VPPs&DERMs; Texture VPPs; Molecule VPP Platforms; Enode Flex/DERMS; DERSec VPP&DERMS |
| **OEMs** | **OEMs** (device manufacturers) | All five cover OEMs (buyer page, partnerships, or `/oem`) |
| **financiers** | **Lenders / TPOs / IPPs / portfolio owners** | Derapi first-class; Texture Device Cloud; Molecule asset owners |

Design recommendation: label UI **Aggregators** (or “Aggregators & VPPs”), **OEMs**, **Financiers** — and keep a footnote in internal docs that “dumpsters” was STT for aggregators.

---

## Recommended Solutions / Resources IA for kWh Electric

Based on patterns above (especially Derapi mega-menu + Enode product descriptors + Texture OEM docs path + Molecule/DERSec gateway story):

### Solutions ▾ (mega-menu)

**Column A — Products (2)**  
1. **OEM Integrations / APIs** — one-line: “Connect devices and fleets through a single integration layer.”  
2. **Open Protocol Gateway** — one-line: “Standards-native edge/cloud gateway for multi-protocol DER control.”  

**Column B — Who it’s for (3 buyer boxes)**  
1. **Aggregators & VPPs** — “Launch and scale programs across multi-vendor fleets.” *(STT: dumpsters)*  
2. **OEMs** — “Qualify for programs faster; ship grid-ready integrations.”  
3. **Financiers** — “Portfolio visibility, performance verification, monetization confidence.” *(Lenders / TPOs / IPPs)*  

Optional footer link in panel: **View all Solutions** → hub page that repeats products + buyers (Derapi `/solutions/` pattern).

### Resources ▾ (keep thin — Derapi model)

1. **Docs / API** — developer reference & integration guides  
2. **Blog / Insights** — news and explainers  
3. Optional later: Case studies, Glossary (Molecule-style SEO), Security/Trust  

Avoid DERSec-style gated everything on first ship; prefer Texture/Enode open docs for OEM velocity.

### Page build order (when implementation starts — not done in this research pass)
1. Solutions hub  
2. Two product pages  
3. Three buyer pages (can share case-study modules with persona framing — Derapi pattern)  
4. Resources hub + docs entry  

### Messaging angles to borrow
- Derapi: “Integrate once. Grow from there.” + Authorize / Data / Control triad  
- Enode: Layered Connect → Optimize → Flex narrative for sequencing products  
- Texture: Public OEM spec + certification path; financiers need verifiable performance  
- Molecule: Signal → Execution → Verification; connectivity ≠ delivered performance  
- DERSec: Cloud vs Edge gateway SKUs; IEEE 2030.5 / SunSpec / Modbus / DNP3 vocabulary for Gateway page  

---

## Method notes
- Tools: WebFetch, WebSearch, curl (sitemaps/robots), browser AX snapshots for Derapi/Texture/Enode mega-menus  
- Texture `/sitemap.xml` empty via curl from research environment; nav/footer used as SoT  
- Some pages timed out once (Molecule /resources, Texture electric-utilities); secondary sources + sitemap used  

## Constraint confirmation
- **No live production site changes**  
- **No push to origin**  
- **No new Solutions/Resources UI built** — markdown research only under `preview/competitor-research/`
