# Texture (TextureHQ) — Competitor Research

> Captured: 2026-08-31 · Primary sources: texturehq.com (browser + WebFetch); docs.texturehq.com · Status: thorough on nav/IA; sitemap.xml empty/blocked via curl from this environment

---

## 1. Primary URL(s) and subdomains

| Role | URL |
|------|-----|
| Marketing (primary) | https://www.texturehq.com |
| Docs | https://docs.texturehq.com |
| OEM Direct API | https://direct.texturehq.com/v2 (API base per OEM spec) |
| OEM integration hub | https://www.texturehq.com/oem |
| OEM technical spec | https://www.texturehq.com/oem/spec |
| Trust / security | linked as Security + SOC 2 badge in footer |
| Note | texture.io is **not** the primary product site; **texturehq.com** is correct |

robots.txt: Allow /; Disallow /proposal/; Sitemap declared at /sitemap.xml (returned empty body when curled from research env — use nav/footer + known URLs).

---

## 2. Site map / page hierarchy

### Primary nav (browser-verified)
- **Platform Overview**
- **Solutions** (dropdown / button)
- **Company** (dropdown)
- **Customers**
- **Docs** → docs.texturehq.com
- **Sign in**
- **Book a demo** (primary CTA)

### Solutions (footer + nav list — authoritative IA)
Buyer / segment pages:
- Electric Utilities → `/solutions/electric-utilities` (fetch timed out once; linked in footer)
- VPPs → `/solutions/vpps`
- Grid Services Companies → `/solutions/grid-services-companies`
Capability / workflow pages:
- Grid Operations
- Grid Visibility

### Company (footer)
- About Us, Careers (Hiring), Press, Support, Contact

### Resources (footer cluster)
- Join CORD, Blog, Legal, Security

### Other important pages
- `/oem` — OEM & TPDO partners
- `/oem/spec` — public technical requirements (Texture Direct API)
- `/customers` — case studies (home links “View All Case Studies”)
- `/blog/*`, `/press/*`
- Integrations browse (home: “Browse integrations”)
- Device Cloud announced via blog/press (product packaging for OEMs)

---

## 3. Global UI / design system notes

- **Positioning line:** “The operating system for the energy grid.”
- **Theme:** Sophisticated dark/light mix; product UI demos (map of grid assets, device/meter/site/transformer cards); Mapbox map in hero region.
- **Layout:** Operator-centric — control center metaphor; workflow cards; heavy testimonial carousel; integrations strip.
- **CTAs:** Book a demo / See a Demo / See Texture in action; newsletter subscribe in footer.
- **Trust badges:** SOC 2 Type II; member of VGIC, Mercury Consortium.
- **Feel:** Utility/co-op grade operations platform — topology-aware, not “consumer energy app.” Explicitly differentiates from Enode/Derapi-style device APIs in docs.

---

## 4. Per-page content inventory

### Home — https://www.texturehq.com/
- **H1:** “The operating system for the energy grid.”
- **Sub:** “Electric utilities, VPPs, and grid services companies use Texture to monitor, coordinate, and run their grid operations.”
- **CTAs:** Book a Demo; View All Case Studies; Browse integrations; See a Demo
- **Sections:** Hero + map → Energy leaders trust Texture (testimonials carousel) → Texture control center (one view / see & act / add what’s next) → Built for how the grid actually works (device/meter/site/transformer/feeder model) → What teams run in Texture (6 workflows) → Hundreds of integrations → Recent news → Closing line “The grid is already generating signal. Texture makes sure someone's listening.”
- **Workflows named:** Enrollment→dispatch programs; identify BTM devices from AMI/SCADA; monitor feeders/meters/transformers; measure program/portfolio performance; surface issues; defendable reports
- **Personas (hero):** Electric utilities, VPPs, grid services companies

### VPPs — https://www.texturehq.com/solutions/vpps
- **H1:** “For the companies creating new grid value”
- **Sub framing:** OEMs and TPOs make DER work, but every partnership = another integration; Texture helps with ROI/visibility
- **Pillars:** One connection into utility market · Real-time fleet visibility · Program performance you can defend
- **Differentiators:** No per-OEM fees / bespoke data agreements; device-agnostic; enrolled vs delivered capacity tracking
- **Quote:** Geoff Ferrell, sonnen

### Grid services companies — https://www.texturehq.com/solutions/grid-services-companies
- **H1:** “For the companies that help the grid operate better”
- **Sub:** DERMS, AMI, SCADA vendors — Texture as independent data/integration layer
- **Sections:** For DERMS providers (50+ OEM first-party integrations) · For AMI/meter data providers · For SCADA providers · Neutrality / one integration / topology-connected data

### OEM & TPDO — https://www.texturehq.com/oem
- **H1:** “Integrate with Texture”
- **Sub:** One open, standards-based integration to every utility/CCA/program on Texture
- **Defines OEM vs TPDO** (TPDO = third-party demand orchestrator / fleet operator with cloud APIs — includes finance/operate fleets)
- **Enables:** Grid programs, unified telemetry, cloud-to-cloud control, monetization, no hardware changes
- **Legacy vs open model** comparison table
- **Primitives:** Auth, stable IDs, real-time telemetry (<15 min), deterministic control
- **Docs:** Technical requirements · Integration terms · Trust center
- **Path:** Review → Execute terms → Workspace → Certification → Go live
- **CTAs:** Contact Integrations (integrations@texturehq.com) · View Technical Requirements

### Texture Device Cloud (product packaging — blog/press)
- Managed energy-native backend for OEMs: OAuth2, identity, telemetry, control, program logic, cross-party (utilities, VPPs, CCAs, **financiers**), governance
- Claims: skip 6–12 months backend; avoid $500k+ infra; grid-ready day one
- Explicitly names financiers as stakeholders who “won’t back assets without verifiable performance”

### Docs positioning (docs.texturehq.com overview)
- Texture ≠ data warehouse; ≠ mere device integration API
- Names Enode and Derapi as device-API peers: “That’s where Texture starts, not where it ends”
- Models sites, devices, meters, topology, weather, emissions + orchestration

---

## 5. Buyer segmentation

Three primary marketing segments (nav/footer Solutions):
1. **Electric Utilities** (co-ops, munis, IOUs — strong co-op proof: VEC, Washington Electric, NRTC, Ann Arbor SEU)
2. **VPPs** (and OEM/TPO fleets connecting into utilities)
3. **Grid Services Companies** (DERMS, AMI, SCADA vendors)

Plus OEM/TPDO partner track (`/oem`) — supply-side.

**Financiers** appear in Device Cloud messaging as a trust audience (verifiable performance), not a dedicated Solutions page.

---

## 6. Docs / Resources

| Item | Location |
|------|----------|
| Platform docs | docs.texturehq.com |
| OEM Direct API spec | /oem/spec (public, no NDA) |
| Blog | /blog |
| Press | /press |
| Case studies / Customers | /customers |
| CORD community | Join CORD |
| Security / Legal | footer |
| Pricing | No public pricing |

---

## 7. Trust / social proof

- Named testimonials: Ann Arbor SEU, NRTC, Parker Daniels, Washington Electric Cooperative, sonnen, Vermont Electric Cooperative
- SOC 2 Type II badge
- Industry memberships: VGIC, Mercury Consortium
- “Hundreds of integrations” / “50+ OEMs” first-party
- Partnership press (e.g. Leap × Texture)

---

## 8. Takeaways for kWh Electric

- Texture’s Solutions IA is **buyer vertical × capability** — good reference if kWh expands beyond 3 buyer boxes later; for now keep simpler.
- **OEM path is first-class but separate** (`/oem` + public spec) — excellent pattern for kWh **OEM Integrations/APIs** product page: public docs, certification path, “integrate once → many programs.”
- Open Protocol Gateway story aligns more with Texture’s topology/orchestration narrative + Molecule/DERSec protocol layers than with Enode Link UI.
- Financiers: Texture validates the audience in OEM Device Cloud copy (“Financiers won’t back assets without verifiable performance”) — use as social-proof language on kWh financier buyer box, even without a Texture-style dedicated page.
- Strong CTA discipline: **Book a demo** everywhere; Docs in primary nav.

---

## Research notes / gaps
- `/solutions/electric-utilities` and `/solutions/grid-operations|visibility` linked but electric-utilities fetch timed out once — re-fetch when designing those analogs.
- Sitemap empty via curl from this environment; browser nav/footer used as source of truth.
- Exact Solutions mega-menu panel copy beyond footer list not fully expanded in AX tree (expanded state didn’t inject unique panel links beyond footer set).
