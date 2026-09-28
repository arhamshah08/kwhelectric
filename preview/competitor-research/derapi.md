# DERApi (Derapi) — Competitor Research

> Captured: 2026-08-31 · Primary sources: derapi.com (browser + WebFetch + sitemap) · Status: thorough

---

## 1. Primary URL(s) and subdomains

| Role | URL |
|------|-----|
| Marketing site | https://derapi.com / https://www.derapi.com |
| Docs / API | https://docs.derapi.com |
| Console login | Linked from nav as **LOGIN** (console app; exact host not confirmed in scrape) |
| Sitemap index | https://derapi.com/sitemap_index.xml (Yoast) |
| robots.txt | Allows all; Crawl-delay 10; points to sitemap |

---

## 2. Site map / page hierarchy

### Primary nav
- **Solutions** (mega-menu)
- **Resources** (mega-menu)
- **About**
- **Contact**
- **LOGIN** (right of nav, separated)

### Solutions mega-menu (verified via browser click — matches user screenshot pattern)
Featured / hub:
- **Our Solutions** — “One platform to build, run, and scale in energy.” → `/solutions/` (also `/solutions/our-solutions/`)

Buyer segments:
- **VPPs and DERMs** — “Launch and scale VPP programs faster” → `/solutions/vpps-derms/`
- **OEMs** — “Expand program access for your devices” → `/solutions/oems/`
- **Lenders, TPOs, and IPPs** — “Increase revenue. Reduce portfolio risk.” → `/solutions/lenders-tpos/`
- **Installers and O&Ms** — “Bring on more devices. Keep systems running.” → `/solutions/installers-om/`

### Resources mega-menu (verified)
- **API Resources** — “Everything teams need to build, launch, and scale” → `/resources/`
- **Our Blog** — “Industry insights, news, and updates” → `/blog/`

### Footer
- Solutions, API Resources, Blog, About, Contact
- Privacy Policy, Terms & Conditions

### Full discoverable pages (from page-sitemap.xml)
- `/` Home
- `/solutions/`, `/solutions/our-solutions/`
- `/solutions/vpps-derms/`, `/solutions/oems/`, `/solutions/lenders-tpos/`, `/solutions/installers-om/`
- `/resources/`, `/blog/`, `/about/`, `/contact/`
- `/derapi-vs-energy-platforms/` (comparison landing)
- `/docs-sla/`, `/api-terms-conditions/`
- `/privacy-policy/`, `/terms-conditions/`

---

## 3. Global UI / design system notes

- **Theme:** Dark navy/midnight hero + white body sections; enterprise SaaS energy aesthetic.
- **Logo:** Wordmark “derapi” + stylized butterfly/moth (blue wings + one orange accent wing).
- **Accent:** Vibrant orange (nav separators as orange dots, hotspot markers on hero hardware imagery).
- **Typography:** Clean geometric sans; headlines dark purple/navy on white; white on dark hero.
- **Layout:** Full-bleed photo hero (EV charger / inverter wall), centered value props, buyer cards in a grid, soft glow / gradient / dot-grid atmospherics.
- **Mega-menu:** Click/hover expands Solutions into featured “Our Solutions” + 4 persona cards with short taglines; Resources = 2 items (API Resources + Blog).
- **CTAs:** “Learn More”, “View All Solutions”, “View Our Resources”, contact form at page bottoms; LOGIN in header (not a marketing CTA).
- **Feel:** Recent rebrand (“Introducing a New Identity…”) — polished, purple-navy + orange, hardware-forward photography.

---

## 4. Per-page content inventory

### Home — https://derapi.com/
- **H1:** “Build what’s next in distributed energy.”
- **Subhead (H4):** “One platform to connect devices, aggregate data, and unlock value across the energy ecosystem.”
- **Primary CTAs:** Learn More; View All Solutions; contact form (“There’s a faster way forward”)
- **Sections (order):** Trusted by → The right infrastructure to move faster (Connect / Operate / Scale) → Built for the teams driving distributed energy (4 buyer cards) → API resources → Built by energy leaders… → Latest News → Contact form
- **Value props:** Secure APIs for auth/data/control; console visibility; program support & enrollment; less complexity / faster scale
- **Personas:** VPPs & DERMs, OEMs, Lenders/TPOs/IPPs, Installers & O&M
- **Products/modules named:** API (Authorize, Data, Control), Console, Services; BYODC Network called out in news

### Solutions hub — https://derapi.com/solutions/
- **H1:** “One platform to build, run, and scale in energy.”
- **Sub:** “With services to support long-term success.”
- **Tools:** API · Console · Services
- **Then:** Same 4 buyer cards → contact form “Find the right path to launch”

### VPPs & DERMs — https://derapi.com/solutions/vpps-derms/
- **H1:** “Launch and scale VPP programs faster”
- **Capabilities:** Authorize · Data · Control
- **Claims:** Launch in months vs years; expand vendors; simpler authorization; secure at scale
- **Case:** Enphase DSGS — “5x year-over-year DSGS revenue growth. Operational VPP launched in 8 weeks. Thousands of devices enrolled.”

### OEMs — https://derapi.com/solutions/oems/
- **H1:** “Expand program access for your devices”
- **Journey:** Connect → Launch → Enable → Expand
- **Why:** Qualify faster; less integration burden; sales velocity; manufacturer-sanctioned APIs only; flexibility across partners
- **Case:** Enphase — “Operational VPP launched in 8 weeks. 2,000+ devices enrolled.”

### Lenders, TPOs, IPPs — https://derapi.com/solutions/lenders-tpos/
- **H1:** “Increase revenue. Reduce portfolio risk.”
- **Capabilities labeled:** Enable · Control · Data (portfolio participation, performance visibility, anomaly/risk)
- **Claims:** Maximize revenue across utilities/ISOs/markets; forecast; identify anomalies; operate at scale
- **Stats:** “2,000+ batteries. 5x year-over-year DSGS revenue growth.” (Enphase case reused)

### Installers & O&Ms — https://derapi.com/solutions/installers-om/
- **H1:** “Bring on more devices. Keep systems running.”
- **Capabilities:** Connect · Monitor · Operate
- **Claims:** Reduce software timelines up to 80%; integrate in days not months; cut integration costs by tens of thousands; simplify auth; improve uptime

### Resources (API) — https://derapi.com/resources/
- **H1:** “Everything teams need to build, launch, and scale”
- **Links out to:** API Guide + API Reference (docs.derapi.com)
- **CTA:** Free API trial form

### About — https://derapi.com/about/
- **Belief line:** “Distributed energy should be easier to connect, coordinate, and scale.”
- **Origin:** Founder Thomas Lee (Enphase, AutoGrid, Stanford PhD EE); CEO Stina Brock; eng/product leadership from NYT/EnergyHub etc.
- **Name etymology:** DER + API
- **Values:** Uncompromising quality; Collaborative empowerment; Radical candor & trust; Responsible stewardship

### Docs
- https://docs.derapi.com — reference overview, interval data persistence notes for VPP apps, vendor credential / join-flow patterns (Authorize API)

---

## 5. Buyer segmentation

Explicit four-box model (primary IA pattern):

1. **VPPs and DERMs** — program operators needing multi-vendor control, enrollment, harmonized data  
2. **OEMs** — manufacturers needing program eligibility / channel enablement  
3. **Lenders, TPOs, and IPPs** — financiers / owners needing portfolio visibility + monetization  
4. **Installers and O&Ms** — field/ops software needing multi-vendor monitoring  

Products underneath are horizontal: **API + Console + Services** (not sold as separate mega-menu products).

---

## 6. Docs / Resources

| Item | Location |
|------|----------|
| API Guide | docs.derapi.com (linked from /resources/) |
| API Reference | docs.derapi.com |
| Blog / news | /blog/ |
| Comparison page | /derapi-vs-energy-platforms/ |
| SLA | /docs-sla/ |
| API terms | /api-terms-conditions/ |
| PDF collateral (legacy) | e.g. VPP-Solution.pdf under /wp-content/uploads/ |

No public pricing page found.

---

## 7. Trust / social proof

- “Trusted by” logo strip on home (logos not fully enumerated in text scrape)
- Enphase case study reused across OEM / VPP / Lender pages (8 weeks, 2,000+ devices, 5x DSGS revenue)
- Leadership bios with AutoGrid, Enphase, EnergyHub, Proterra pedigree
- Manufacturer-sanctioned integrations messaging (trust/compliance angle)

---

## 8. Takeaways for kWh Electric

**Closest structural analog for Solutions IA.**

- Mega-menu = **hub page + persona cards with one-line benefit tags** — not a long product list.
- kWh’s two products (OEM Integrations/APIs + Open Protocol Gateway) can sit as a **Products** column; Derapi’s pattern suggests a second column of **Who it’s for** (Aggregators/VPPs, OEMs, Financiers).
- Literal speech-to-text “dumpsters” → Derapi’s parallel is **VPPs/DERMs (aggregators)**; they also surface **Lenders/TPOs/IPPs** as first-class — strong validation for kWh’s financier box.
- Resources mega-menu kept **thin**: Docs/API + Blog (good model for kWh Resources).
- Buyer pages reuse the same case study with persona-specific framing — efficient content system.
- CTA pattern: soft “Learn More” on heroes + persistent bottom contact form (not aggressive pricing).

---

## Research notes / gaps
- Console login URL not captured.
- Exact trusted-by logos need screenshot if logo wall is required for design.
- Sitemap returned 500 via WebFetch tool but worked via curl.
