# Enode — Competitor Research

> Captured: 2026-08-31 · Primary sources: enode.com (browser + WebFetch + sitemap) · Status: thorough

---

## 1. Primary URL(s) and subdomains

| Role | URL |
|------|-----|
| Marketing | https://enode.com |
| Developers / docs | https://developers.enode.com |
| Link UI | https://link.enode.com |
| OAuth / API hosts | oauth.production.enode.io; API production hosts per docs |
| Sitemap | https://enode.com/sitemap.xml |
| robots.txt | Disallows /admin, /sandbox, /campaigns/*; Allow / |

---

## 2. Site map / page hierarchy

### Primary nav (browser-verified mega-menus)
- **Products**
  - Connect — “Connect to and control thousands of energy devices” → `/connect`
  - Optimize — “Unlock smart energy use cases for your customers” → `/optimize`
  - Flex — “Turn connected assets into a flexible, virtual power plant” → `/flex`
- **Use cases**
  - Energy devices: Electric vehicles, Home chargers, Solar inverters, Home batteries, HVACs → `/use-cases/...`
  - Use cases and solutions: Home energy management, Smart charging, Production/consumption/export monitoring, Demand response, Smart heating & cooling, VPPs, V2G, Smart scheduling, Public charging & route planning, EV smart solar charging
- **Company**
  - About us, Customers, Partnerships (OEM partner), Careers, Contact sales, Blog
- **Developers**
  - API reference, Getting started, Feature guides, Brands (supported)
- Header CTAs: **Contact sales** · **Start building**

### Footer clusters
- Products: Connect, Optimize, Flex
- Developers: API reference, Getting started, Features guides, Reference articles
- Company: About, Blog, Careers, Contact
- Hardware categories: EVs, Home chargers, Solar inverters, Home batteries, HVACs

### Key pages from sitemap
- `/`, `/connect`, `/optimize`, `/flex`
- `/use-cases`, `/use-cases/electric-vehicles`, `home-chargers`, `solar-inverters`, `home-batteries`, `hvacs`
- `/about`, `/customers`, `/careers`, `/contact`, `/newsletter`, `/blog/*`
- `/privacy-policy`

---

## 3. Global UI / design system notes

- **Theme:** Light, modern developer-platform SaaS; clean white/light backgrounds with product illustrations.
- **Typography:** Contemporary sans; product names as section anchors (Connect / Optimize / Flex).
- **Layout:** Product-led IA (not buyer-first on nav). Mega-menus are rich: Products (3), Use cases (devices + solutions lists), Company, Developers.
- **CTAs:** Dual primary — **Start building** (self-serve/dev) + **Contact sales** (enterprise). Strong developer-first funnel.
- **Logo:** Wordmark “Enode” in header.
- **Social proof:** Dense customer logo strip; quantified metrics; SOC 2 Type II callouts on Flex.
- **Feel:** European open-energy / retailer-centric; API-first; polished product marketing with comparison tabs (“With Enode / Without Enode”).

---

## 4. Per-page content inventory

### Home — https://enode.com/
- **Headline:** “One integration, 1000+ energy devices”
- **Sub:** Integrate devices for engagement/retention; optimize consumption balancing consumers/retailers/grid; aggregate into flexible load for markets.
- **CTAs:** Start building · Contact sales
- **Sections:** Logo trust → Our platform (Connect / Optimize / Flex) → Use cases (4 tiles) → By developers, for developers → Why Enode (metrics) → Industries → Blog → Ready to get started?
- **Metrics:** 250M+ energy customers reached; 1000+ devices / 80+ brands / 5+ categories; 100GWh+ managed; 25% avg Smart Charging savings
- **Industries:** Energy retailers, startups/apps, e-mobility, DERMS, EV fleets, utilities/grid owners, smart home

### Connect — https://enode.com/connect
- **H1/lead:** Connect to and control thousands of energy devices
- **How it works:** Single API → Link UI for customer hardware → Build features → Extend with Optimize
- **Device categories:** EVs, home chargers, HVACs, solar, home batteries
- **Link UI:** Web SDK, native SDKs, privacy/scopes, security
- **Docs CTAs:** Full API reference, Getting started, Feature guides, Reference articles

### Optimize — https://enode.com/optimize
- **Lead:** Unlock smart energy use cases
- **Pillars:** Help users save money · Generate insights · Reduce time to market · Get ready for demand response
- **Modules:** Smart charging · Scheduling · Statistics and insights
- Out-of-the-box algorithms on top of Connect + market data (e.g. Nordpool)

### Flex — https://enode.com/flex
- **Positioning:** “The flexibility platform for residential energy retailers”
- **Lead:** Turn connected assets into a flexible VPP; shapeable load; 5–60 min settlement periods; up to 36h forward visibility; preview before dispatch
- **Engine loop:** Site formation (Connect) → Site optimization (Optimize) → Aggregation → Flexibility dispatch → Disaggregation
- **Audiences on-page:** Retail teams · Operations · Energy management teams
- **Products:** Flex dashboard · Flex APIs
- **Trust:** SOC 2 Type II, GDPR/EU Data Act, 99.9% uptime, 24/7 support
- **Stats (Flex page):** 1,000+ GWh managed; 1,000+ asset models; 550,000+ connected assets
- **Quotes:** Fuse, Eneco, Iberdrola

### Use cases hub — https://enode.com/use-cases
- Industries grid + deep dives: Smart charging, Energy management & insights, Demand response, E-mobility, EV charging statistics, EV fleet management

### Customers — https://enode.com/customers
- **Stats:** 50% lower churn (Ostrom smart devices); 12 months faster (Monta); 25% savings (Fjordkraft)
- Stories: Ostrom, Fjordkraft, Monta, Frank Energie, Chargetrip, Kaluza, Greenely, plus many blog case studies (Tibber, ENGIE, Iberdrola, EnBW, etc.)

### About — https://enode.com/about
- Mission: digital infrastructure for zero-carbon energy system
- Leadership: Henrik Langeland (CEO), Nikolai Heum (CTO), etc.
- Investors: Creandum, Lowercarbon, Helge Lund, etc.
- Remote-first EU team

### Developers
- https://developers.enode.com — REST API, OAuth2, OpenAPI, Postman, Link UI scopes, integration guides

---

## 5. Buyer segmentation

**Nav is product-led; industries are secondary.**

Primary buyers (marketing):
- Energy retailers (core for Flex)
- Energy startups / apps
- E-mobility providers
- DERMS / DR program operators
- EV fleet managers
- Utilities / grid owners
- Smart home providers

OEM relationship: **Partnerships** under Company (“Become an OEM partner”) — OEMs are supply-side partners more than primary nav buyers.

Financiers: **not** a first-class segment on Enode marketing.

---

## 6. Docs / Resources

| Item | Location |
|------|----------|
| API reference | developers.enode.com/api/reference |
| Getting started / integration guides | developers.enode.com |
| Brands / supported hardware | Developers → Brands |
| Blog | /blog (Customers, Partnerships, Product updates, Evolving energy, Inside Enode) |
| Newsletter | Open Energy Newsletter |
| Press kit | linked from About |
| Pricing | No public price list; custom plans + free API exploration |

---

## 7. Trust / social proof

- Large enterprise logo wall (retailers/utilities globally)
- Quantified platform metrics (devices, GWh, savings, customers reached)
- SOC 2 Type II (blog + Flex page)
- Customer case studies with % outcomes
- Investor names on About
- OEM partnership announcements (SMA, BMW, Sungrow, Growatt, myenergi, Peblar, Indra, etc.)

---

## 8. Takeaways for kWh Electric

- **Best model for a 2–3 product Solutions dropdown:** Enode’s Products mega-menu with **short descriptor under each product name** (Connect / Optimize / Flex) maps cleanly to kWh’s **OEM Integrations/APIs** + **Open Protocol Gateway**.
- Use-cases mega-menu is secondary depth (devices × solutions) — optional later for kWh; don’t overbuild nav on day one.
- Dual CTA (**Start building** + **Contact sales**) is strong if kWh has public docs; otherwise lean Contact/Book demo.
- Buyer boxes: Enode proves **aggregators/retailer-VPP** angle heavily; OEMs are partners not primary cards; financiers absent — so Derapi/Texture matter more for financier IA.
- Layered platform story (Connect → Optimize → Flex) is a clear narrative pattern: connect → optimize → aggregate — useful for sequencing kWh product story.

---

## Research notes / gaps
- Exact Partnerships URL path not fully fetched (`/partnerships` likely).
- Visual design tokens (exact hex) not extracted; screenshot recommended for brand board.
- Sitemap includes wildcard `enode.com/*` entry (generator quirk).
