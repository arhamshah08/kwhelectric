# DERSec (DER Security Corp) — Competitor Research

> Captured: 2026-08-31 · Primary sources: dersec.io (WebFetch + wp-sitemap) · Status: thorough  
> Correct primary domain: **https://dersec.io** (not dersec.com)

---

## 1. Primary URL(s) and subdomains

| Role | URL |
|------|-----|
| Marketing | https://dersec.io |
| Sitemap | https://dersec.io/wp-sitemap.xml → posts + pages + categories |
| Contact | hr@dersec.io (careers); sales via contact forms |
| LinkedIn | DER Security Corp |
| Note | Spin-out heritage from SunSpec Alliance / Sandia talent; founded ~2022, Scotts Valley CA |

---

## 2. Site map / page hierarchy

### Discoverable pages (wp-sitemap-posts-page-1.xml)
- `/` Home  
- `/products/` — Product suite hub  
- `/platform/` — Unified platform narrative (+ `/platform/market-drivers/`, `/platform/partners/`)  
- `/solutions/` — Industry verticals  
- `/services/`  
- `/satori/` (product/initiative page)  
- `/resources/` · `/resources/downloads/` · `/resources/news/` · `/resources/whitepapers/`  
- `/case-studies/`  
- `/about/` · `/about/careers/`  
- `/contact/`  
- Legal: `/privacy-policy/`, `/state-privacy-notice/`, `/service-activation-agreement/`  
- Internal/test pages in sitemap (ignore for IA): hero-video-background-tests, widgets_testing, wp-forms-test  

### Likely primary nav (from page structure + common WP pattern)
- Platform  
- Products  
- Solutions  
- Resources (Downloads, News, Whitepapers)  
- About / Careers  
- Contact  
- CTAs: Explore Sentry, Schedule demo, Download spec sheets, Trial license forms (LabTest)

Blog posts also live as top-level URLs (e.g. `/dersync-ieee-2030-5-csip-dual-certification/`).

---

## 3. Global UI / design system notes

- **Theme:** Dark cybersecurity aesthetic; high-contrast; “OT security for DER” tone.
- **Typography:** Bold H1s; section labels (INDUSTRY SOLUTIONS, PLATFORM CAPABILITIES).
- **Layout:** Product suite cards; vertical solution tabs (Data Centers, Microgrids/Military, Distributed Energy, E-Mobility, VPP & DERMS); heavy form modals for gated downloads.
- **CTAs:** Explore DERSec Sentry →; Schedule demo; Download Product Spec Sheet →; Trial license for LabTest Pro/Plus.
- **Trust strip:** “NERC CIP Aligned • IEC 62443 Compliant • IEEE 2030.5 Certified • SunSpec Validated”
- **Feel:** Standards-native security vendor; denser and more compliance-forward than Enode/Derapi; closest peer for **protocol gateway** messaging via DERSync.

---

## 4. Per-page content inventory

### Home — https://dersec.io/
- **H1:** “Securing the Future of Distributed Energy”
- **Sub:** “DERSec Sentry delivers real-time OT cybersecurity for solar inverters, battery systems, EV chargers, and every connected DER on your grid.”
- **Sections:** Trusted by → The Grid Is Expanding (Unprotected endpoints / Protocol blind spots / Regulatory pressure) → Meet DERSec Sentry (Monitoring, Protocol-aware detection, Automated compliance, Incident Response <5 min) → News & Updates → Blog posts → Compliance strip → Secure Your Grid Today (forms)
- **Product spotlight:** Sentry as hero product

### Products — https://dersec.io/products/
- **H1:** “The DERSec Product Suite”
- **Four products:**
  1. **DERSec Sentry** — Cyber-physical verification; protocol-valid but operationally dangerous commands (volt/var, frequency, active power abuse, nameplate falsification)
  2. **DERSync Gateway** — Secure IEEE 2030.5 aggregation; multi-protocol translation; **Cloud** (fleet/residential) or **Edge** (C&I, grid-scale, EMS gateway) deployments; upstream to DERMS/VPP; downstream SunSpec Modbus, DNP3, IEEE 2030.5, proprietary
  3. **DERSim Digital Twins** — Physics-based twins; attack simulation; validation
  4. **DERSec LabTest Pro** — Certification / lab automation for IEEE 1547.1, UL 1741 SB; also described with local monitoring / edge AI / offline operation on products page
- **Integrations:** DERMS/VPP, SCADA/EMS, SIEM/SOC, utility control centers, cloud APIs; protocols IEEE 2030.5, SunSpec Modbus, DNP3, OCPP, MQTT, BACnet

### Platform — https://dersec.io/platform/
- **H1:** “Unified Platform for DER Security”
- **Stats:** <1s detection latency · 93% fewer false positives · 50+ DER device types · Zero agents required
- **Contrast:** IT tools vs generic OT/ICS vs DERSec Sentry
- **Capabilities:** Cyber-physical IDS · Protocol-native security · Digital twin intelligence · Secure DER aggregation · Edge AI & physics validation · Fleet visibility & risk posture
- **Detections:** Cyber threats · Configuration drift · Operational anomalies
- **Differentiators:** Agentless · Protocol-native · Continuously learning · Fleet-scale · Compliance-ready · SOC-integrated

### Solutions — https://dersec.io/solutions/
Verticals:
1. **AI & Data Centers** — BTM DER for hyperscale; backup/UPS/BESS; grid interconnection security  
2. **Microgrids & Military** — Island mode; DoD CMMC / NERC CIP  
3. **Distributed Energy** — Fleet-scale rooftop/community DER  
4. **E-Mobility** — OCPP, OpenADR, V2G security  
5. **VPP & DERMS** — Aggregated fleet risk; false telemetry; secure onboarding PKI  

### About — https://dersec.io/about/
- **H1:** “Securing the Grid Starts Here.”
- **Heritage:** SunSpec / Sandia architects; AutoGrid, NTT, IBM leadership
- **Stats:** 25+ years standards work; 80%+ of DER deployments rely on standards pioneered by founding team
- **Leadership:** Thomas Tansy (CEO), Vish Ganti (President & COO — AutoGrid/Qcells/CPower), Jay Johnson (CTO — Sandia), Venkat Prabhala (CFO)

### Resources
- Downloads (gated forms), News, Whitepapers
- Blog topics: IEEE 2030.5 compliance, Power IOCs, AI data centers, DistribuTECH, NVIDIA GTC, Nozomi partnership, DERSync CSIP dual certification

---

## 5. Buyer segmentation

Primarily **security buyers** inside:
- Utilities / grid operators  
- VPP & DERMS platforms (aggregation risk)  
- AI data center operators  
- Military / microgrid operators  
- E-mobility / charging networks  
- DER OEMs & NRTLs (LabTest certification path)  

Less consumer-retailer oriented than Enode; less “API for apps” than Derapi; overlaps kWh on **protocol gateway / IEEE 2030.5 / multi-protocol edge**.

---

## 6. Docs / Resources

| Item | Location |
|------|----------|
| Spec sheets | Gated downloads from Products |
| Whitepapers | /resources/whitepapers/ |
| News | /resources/news/ + blog posts |
| Case studies | /case-studies/ |
| LabTest trial | Modal trial license request |
| Pricing | Not public |

---

## 7. Trust / social proof

- Compliance badges: NERC CIP, IEC 62443, IEEE 2030.5, SunSpec  
- DERSync: IEEE 2030.5 **CSIP Aggregator & Client** dual certification (announced)  
- Partnerships: Nozomi Networks; Ignition SCADA integration news  
- Founder pedigree (SunSpec Alliance founder as CEO; Sandia CTO)  
- “Trusted by industry leaders” logo strip on home (text scrape didn’t enumerate names)

---

## 8. Takeaways for kWh Electric

- **DERSync is the closest competitor pattern to an Open Protocol Gateway:** multi-protocol up/down, Cloud vs Edge SKUs, DERMS/VPP upstream, Modbus/DNP3/2030.5 downstream, PKI onboarding.
- Product suite page with **4 named products + one-liners** is a usable pattern; kWh should keep **2** but use the same card clarity.
- Solutions-by-industry (tabs) is optional depth; for kWh prefer **buyer boxes** (Aggregators, OEMs, Financiers) over DERSec’s security verticals.
- Security/compliance language can be a trust subsection on Gateway pages (IEEE 2030.5, SunSpec) without becoming a cybersecurity company.
- Gating every PDF behind forms is heavy — prefer open docs for developer/OEM velocity (Texture/Enode pattern).

---

## Research notes / gaps
- `/resources/` returned mostly form chrome via WebFetch (JS-heavy); use downloads/news/whitepapers subpaths.
- Exact header mega-menu labels not browser-confirmed in this pass; page sitemap is authoritative for IA.
- dersec.com not used as primary; confirm no redirect needed for docs.
