#!/usr/bin/env python3
"""Generate localhost-only redesign previews for kWh Electric."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent
ASSET = "../assets"
UPLOAD = "../uploads"
SHARED_CSS = "../_shared/brand.css"
SHARED_JS = "../_shared/site.js"

LOGOS = [
    "nfh-logo.png",
    "Samayang Logo.png",
    "microsoft-for-startups.png",
    "nvidia-inception.png",
    "Polsky CNVC.png",
    "iVenture loo.jpg",
    "pasted-1782743184735-0.png",
]


def link(href, label, active=False):
    cur = ' aria-current="page"' if active else ""
    return f'<a href="{href}"{cur}>{label}</a>'


def nav(page="home", force_solid=False):
    solid_attr = ' data-force-solid="true"' if force_solid else ""
    scrolled = " is-scrolled" if force_solid else ""
    return f"""
<nav class="site-nav{scrolled}"{solid_attr}>
  <a class="brand" href="index.html">
    <img class="mark-light" src="{ASSET}/kwh-logo-mark-light.png" alt="kWh Electric" />
    <img class="mark-dark" src="{ASSET}/kwh-logo-mark.png" alt="kWh Electric" />
  </a>
  <button class="nav-toggle" type="button" aria-label="Menu">☰</button>
  <div class="nav-links">
    {link("index.html#about", "Company")}
    {link("oem-integrations.html", "OEM Integrations", page == "oem")}
    {link("open-protocol-gateway.html", "Gateway", page == "gateway")}
    {link("index.html#how", "How it works")}
    {link("index.html#contact", "Contact")}
    <a class="btn-demo" href="index.html#demo">Demo</a>
    <a class="btn-login" href="https://portal.kwhelectric.io/" target="_blank" rel="noopener">Login</a>
  </div>
</nav>"""


def footer(option_label):
    return f"""
<footer class="site-footer">
  <div class="foot-grid">
    <div>
      <img src="{ASSET}/kwh-logo-mark-light.png" alt="kWh" style="height:36px;margin-bottom:14px;filter:drop-shadow(0 1px 2px rgba(0,0,0,.4))" />
      <p style="margin:0;font-size:14px;max-width:280px;line-height:1.55">Communication infrastructure that makes every energy asset visible and dispatchable.</p>
    </div>
    <div>
      <h4>Products</h4>
      <a href="oem-integrations.html">OEM Integrations / APIs</a>
      <a href="open-protocol-gateway.html">Open Protocol Gateway</a>
    </div>
    <div>
      <h4>Company</h4>
      <a href="index.html#about">About</a>
      <a href="index.html#who">Who it's for</a>
      <a href="index.html#architecture">Architecture</a>
    </div>
    <div>
      <h4>Get started</h4>
      <a href="index.html#demo">Request a demo</a>
      <a href="mailto:arham@kwhelectric.io">arham@kwhelectric.io</a>
      <a href="https://portal.kwhelectric.io/">Portal login</a>
    </div>
  </div>
  <div class="foot-bottom">
    <span>© 2026 kWh Electric · Palo Alto, California</span>
    <span>Preview option: {option_label} · localhost only</span>
  </div>
</footer>
<div class="preview-banner">
  <strong>{option_label}</strong>
  <span>|</span>
  <a href="../option-a/">A</a>
  <a href="../option-b/">B</a>
  <a href="../option-c/">C</a>
  <span>|</span>
  <a href="../">All options</a>
</div>"""


def logo_strip():
    items = "".join(
        f'<div class="backed-logo"><img src="{UPLOAD}/{n}" alt="" /></div>' for n in LOGOS * 2
    )
    return f"""
    <div style="max-width:640px;margin:0 auto 40px;text-align:center;">
      <p style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.75);margin:0 0 16px;">Supported by</p>
      <div style="overflow:hidden;-webkit-mask-image:linear-gradient(to right,transparent,#000 40px,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to right,transparent,#000 40px,#000 calc(100% - 40px),transparent);">
        <div style="display:flex;gap:14px;animation:logo-scroll 26s linear infinite;width:max-content;">{items}</div>
      </div>
    </div>"""


def contact_section(
    heading="Talk to the kWh team.",
    lead="Request a demo or ask about OEM Integrations and the Open Protocol Gateway.",
):
    return f"""
<section id="contact" style="background:var(--bronze);padding:72px clamp(16px,4vw,48px) 88px;">
  <div class="wrap" style="max-width:760px;">
    <h2 style="font-size:clamp(28px,4vw,48px);font-weight:700;text-align:center;margin:0 0 12px;letter-spacing:-0.03em;">{heading}</h2>
    <p style="text-align:center;margin:0 auto 36px;max-width:480px;font-size:16px;">{lead}</p>
    {logo_strip()}
    <div id="demo"></div>
    <form id="contact-form" style="display:flex;flex-direction:column;gap:22px;max-width:640px;margin:0 auto;">
      <input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px;opacity:0;height:0;width:0;" aria-hidden="true" />
      <div class="form-row">
        <div>
          <label>First name <span class="req">*</span></label>
          <input type="text" name="first_name" required />
        </div>
        <div>
          <label>Last name <span class="req">*</span></label>
          <input type="text" name="last_name" required />
        </div>
      </div>
      <div>
        <label>Work email <span class="req">*</span></label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>I'm interested in</label>
        <select name="interest">
          <option value="">Select…</option>
          <option>OEM Integrations / APIs</option>
          <option>Open Protocol Gateway (hardware)</option>
          <option>Open Protocol Gateway (software license)</option>
          <option>Partnership / pilot</option>
          <option>Other</option>
        </select>
      </div>
      <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
        <input type="checkbox" name="request_demo" value="yes" checked style="width:auto;" />
        <span>I'd like to schedule a product demo</span>
      </label>
      <div>
        <label>Message</label>
        <textarea name="message" rows="4" placeholder="Tell us about your fleet, OEM stack, or use case."></textarea>
      </div>
      <p id="form-status" style="margin:0;font-size:14px;min-height:1.2em;"></p>
      <div>
        <button class="btn-primary" type="submit" data-label="Request demo">Request demo</button>
      </div>
    </form>
    <p style="text-align:center;margin:40px 0 0;font-size:13px;color:rgba(0,0,0,0.5);">
      Palo Alto, California · <a href="mailto:arham@kwhelectric.io" style="color:rgba(0,0,0,0.65);">arham@kwhelectric.io</a>
    </p>
  </div>
</section>"""


def head(title, body_class):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{title}</title>
<link rel="icon" type="image/png" href="../favicon.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="{SHARED_CSS}" />
<link rel="stylesheet" href="styles.css" />
</head>
<body class="{body_class}">
"""


def tail():
    return f'\n<script src="{SHARED_JS}"></script>\n</body>\n</html>\n'


def write_opt(name, css, pages):
    d = ROOT / name
    d.mkdir(parents=True, exist_ok=True)
    (d / "styles.css").write_text(css)
    for filename, html in pages.items():
        (d / filename).write_text(html)
    print(f"Wrote {name}: {', '.join(pages)}")


# ═══════════════════════════════════════════════════════════════════════════
# OPTION A — Product-first cards
# ═══════════════════════════════════════════════════════════════════════════
A_CSS = r"""
.hero{min-height:88vh;display:flex;align-items:flex-end;position:relative;padding:120px 0 72px;color:var(--cream)}
.hero-bg{position:absolute;inset:0;background:url(../uploads/hero-bg.webp) center/cover no-repeat}
.hero-bg::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,5,0,.45),rgba(10,5,0,.72))}
.hero .wrap{position:relative;z-index:1}
.hero h1{font-size:clamp(34px,5.5vw,68px);font-weight:700;letter-spacing:-.035em;line-height:1.05;margin:0 0 18px;max-width:18ch}
.hero p.lead{font-size:clamp(16px,1.5vw,19px);opacity:.85;max-width:42ch;margin:0 0 28px;line-height:1.65}
.hero-ctas{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:48px}
.product-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:-40px auto 0;position:relative;z-index:2;padding:0 clamp(16px,3vw,24px);width:min(1160px,94vw)}
.product-card{background:var(--cream);border:1px solid var(--border);border-radius:var(--radius);padding:28px 28px 32px;display:flex;flex-direction:column;gap:14px;transition:border-color .2s,transform .2s}
.product-card:hover{border-color:var(--bronze);transform:translateY(-2px)}
.product-card .eyebrow{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--bronze);margin:0}
.product-card h2{font-size:clamp(22px,2.4vw,28px);margin:0;letter-spacing:-.025em;line-height:1.15}
.product-card p{margin:0;color:var(--muted);font-size:15px;line-height:1.55;flex:1}
.product-card .card-tags{display:flex;flex-wrap:wrap;gap:8px}
.product-card .card-link{font-size:14px;font-weight:600;color:var(--bronze);margin-top:4px}
.section{padding:80px clamp(16px,4vw,48px)}
.section h2{font-size:clamp(28px,3.8vw,44px);font-weight:700;letter-spacing:-.03em;margin:0 0 16px;line-height:1.1}
.section .sub{font-size:17px;color:var(--muted);max-width:54ch;margin:0 0 40px;line-height:1.6}
.how-row{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.how-cell{background:var(--brown);color:var(--cream);clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);aspect-ratio:1/1.05;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:18% 16%}
.how-cell strong{font-size:clamp(16px,2vw,22px);letter-spacing:-.02em}
.how-cell span{font-size:12.5px;opacity:.75;margin-top:8px;line-height:1.35}
.who-grid,.value-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.who-card,.value-card{background:rgba(255,255,255,.55);border:1px solid var(--border);border-radius:var(--radius);padding:22px 20px}
.who-card h3,.value-card h3{margin:0 0 8px;font-size:17px;letter-spacing:-.02em}
.who-card p,.value-card p{margin:0;font-size:14px;color:var(--muted);line-height:1.5}
.bronze-band{background:var(--bronze)}
.bronze-band .who-card{background:rgba(255,255,240,.18);border-color:rgba(11,11,14,.12)}
.bronze-band .who-card p{color:rgba(11,11,14,.72)}
.arch{background:var(--dark-warm);color:var(--cream);padding:80px clamp(16px,4vw,48px)}
.arch-layer{display:grid;grid-template-columns:72px 1fr;gap:0 28px;border-top:2px solid rgba(205,127,50,.35);padding:18px 0 26px}
.arch-layer:first-of-type{border-top-color:var(--bronze);border-top-width:3px}
.arch-layer .lvl{font-size:36px;font-weight:700;color:var(--bronze);line-height:1}
.arch-layer h3{margin:0 0 8px;color:var(--bronze);font-size:18px}
.arch-layer p{margin:0;color:rgba(255,251,240,.72);font-size:15px}
.page-hero{padding:130px clamp(16px,4vw,48px) 56px;background:var(--dark-warm);color:var(--cream);position:relative;overflow:hidden}
.page-hero::before{content:'';position:absolute;inset:0;background:url(../uploads/hero-bg.webp) center/cover no-repeat;opacity:.35}
.page-hero .wrap{position:relative;z-index:1}
.page-hero .eyebrow{color:var(--bronze);font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin:0 0 14px}
.page-hero h1{font-size:clamp(32px,4.5vw,52px);margin:0 0 16px;letter-spacing:-.03em;line-height:1.08;max-width:18ch}
.page-hero p{font-size:17px;opacity:.8;max-width:52ch;margin:0 0 24px;line-height:1.6}
.feature-list{display:grid;gap:12px;margin:0;padding:0;list-style:none}
.feature-list li{display:grid;grid-template-columns:28px 1fr;gap:12px;align-items:start;padding:14px 0;border-bottom:1px solid var(--border)}
.feature-list .dot{width:22px;height:22px;background:var(--bronze);clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);margin-top:2px}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}
.mode-card{border:1px solid var(--border);border-radius:var(--radius);padding:28px;background:rgba(255,255,255,.5)}
.mode-card h3{margin:0 0 10px;font-size:22px;letter-spacing:-.02em}
.mode-card p{margin:0 0 16px;color:var(--muted)}
@media(max-width:800px){.product-grid,.who-grid,.value-grid,.two-col{grid-template-columns:1fr}.how-row{grid-template-columns:1fr 1fr}}
"""

A_HOME = (
    head("kWh Electric — Preview A", "opt-a")
    + nav()
    + f"""
<section class="hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="wrap">
    <h1>Every energy asset made visible and dispatchable.</h1>
    <p class="lead">kWh Electric builds the communication infrastructure that connects OEM devices to aggregators, utilities, and energy platforms — so fleets can be seen, controlled, and verified.</p>
    <div class="hero-ctas">
      <a class="btn-bronze" href="#demo">Request a demo</a>
      <a class="btn-secondary" href="#products">Explore products</a>
    </div>
  </div>
</section>
<div id="products" class="product-grid">
  <a class="product-card" href="oem-integrations.html">
    <p class="eyebrow">Product 01</p>
    <h2>OEM Integrations / APIs</h2>
    <p>One integration surface for multi-OEM device connectivity. Built for aggregators, utilities, and platforms that need interoperable access without building every OEM connector in-house.</p>
    <div class="card-tags"><span class="tag">REST APIs</span><span class="tag">Telemetry</span><span class="tag">Dispatch</span><span class="tag">Normalize</span></div>
    <span class="card-link">Explore OEM Integrations →</span>
  </a>
  <a class="product-card" href="open-protocol-gateway.html">
    <p class="eyebrow">Product 02</p>
    <h2>Open Protocol Gateway</h2>
    <p>Open-standards edge connectivity delivered two ways: a software license on your existing device, or a palm-sized physical gateway from kWh.</p>
    <div class="card-tags"><span class="tag">IEEE 2030.5</span><span class="tag">OpenADR</span><span class="tag">SunSpec</span><span class="tag">Edge</span></div>
    <span class="card-link">Explore the Gateway →</span>
  </a>
</div>
<section id="about" class="section cream-hex">
  <div class="wrap">
    <h2>What kWh Electric does</h2>
    <p class="sub">We sit between heterogeneous energy hardware and the platforms that need to operate it. Our stack connects devices, normalizes protocols, enables secure dispatch, and verifies response — the company detail reviewers look for: what we do, who for, how it works, and how to reach us.</p>
    <div class="value-grid">
      <div class="value-card"><h3>Connect once</h3><p>Integrate against kWh instead of maintaining dozens of OEM-specific connectors and protocol dialects.</p></div>
      <div class="value-card"><h3>Operate at the edge</h3><p>Policy-bound control close to the asset — offline-ready when the cloud is unavailable.</p></div>
      <div class="value-card"><h3>Prove the outcome</h3><p>Every dispatch is logged so response is verifiable for programs, settlements, and partners.</p></div>
    </div>
  </div>
</section>
<section id="how" class="section">
  <div class="wrap" style="text-align:center;">
    <h2>How it works</h2>
    <p class="sub" style="margin-left:auto;margin-right:auto;">Four steps from physical device to claimable, dispatchable capacity.</p>
    <div class="how-row">
      <div class="how-cell"><strong>Connect</strong><span>Open standards gateway: IEEE 2030.5, OpenADR, SunSpec.</span></div>
      <div class="how-cell"><strong>Normalize</strong><span>One clean data stream from every OEM protocol.</span></div>
      <div class="how-cell"><strong>Dispatch</strong><span>Charge, discharge, curtail, and shift in real time.</span></div>
      <div class="how-cell"><strong>Verify</strong><span>Logged response for programs and revenue claims.</span></div>
    </div>
  </div>
</section>
<section id="who" class="section bronze-band">
  <div class="wrap">
    <h2 style="color:var(--dark);">Who it's for</h2>
    <p class="sub" style="color:rgba(11,11,14,.72);">The same audiences Enode, Texture, and DER platforms serve — plus the platforms themselves when they need deeper OEM connectivity.</p>
    <div class="who-grid">
      <div class="who-card"><h3>Aggregators / VPP operators</h3><p>Dispatch a unified fleet across manufacturers without per-OEM engineering.</p></div>
      <div class="who-card"><h3>Utilities / DISCOMs</h3><p>See behind-the-meter assets and flexible capacity with automatic device join.</p></div>
      <div class="who-card"><h3>Energy platforms</h3><p>Compete and interoperate with layers like Texture or Enode by plugging into kWh OEM connectivity APIs.</p></div>
      <div class="who-card"><h3>OEMs</h3><p>Make hardware interoperable and program-ready without building a full software stack.</p></div>
      <div class="who-card"><h3>BESS financiers</h3><p>Portfolio health and performance visibility across battery fleets.</p></div>
      <div class="who-card"><h3>Commercial owners</h3><p>Visibility and grid participation from solar, storage, and EV charging.</p></div>
    </div>
  </div>
</section>
<section id="architecture" class="arch">
  <div class="wrap">
    <h2 style="margin-bottom:40px;">Five layers from physical device to AI operation</h2>
    <div class="arch-layer"><div class="lvl">L5</div><div><h3>Applications + Value</h3><p>Utility orchestration, financing, VPP participation, grid services, forecasting, verification.</p></div></div>
    <div class="arch-layer"><div class="lvl">L4</div><div><h3>MCP + AI</h3><p>Agentic systems with DER context, telemetry access, and policy-constrained dispatch tools.</p></div></div>
    <div class="arch-layer"><div class="lvl">L3</div><div><h3>Cloud platform</h3><p>Multi-tenant onboarding, telemetry, events, and dispatch orchestration.</p></div></div>
    <div class="arch-layer"><div class="lvl">L2</div><div><h3>Protocol + API layer</h3><p>OEM Integrations that translate Modbus, OCPP, SunSpec, OpenADR, and more into one surface.</p></div></div>
    <div class="arch-layer"><div class="lvl">L1</div><div><h3>Edge gateway</h3><p>Open Protocol Gateway — software license or palm-sized hardware — local, offline-safe control.</p></div></div>
  </div>
</section>
"""
    + contact_section()
    + footer("Option A · Product-first")
    + tail()
)

A_OEM = (
    head("OEM Integrations / APIs — kWh (Preview A)", "opt-a")
    + nav("oem", True)
    + f"""
<header class="page-hero"><div class="wrap">
  <p class="eyebrow">Product · OEM Integrations</p>
  <h1>One API surface. Many OEM devices.</h1>
  <p>kWh provides the interop layer aggregators, utilities, and competing platforms use to connect batteries, inverters, EVSE, thermostats, and other DERs — without owning every OEM relationship themselves.</p>
  <a class="btn-bronze" href="index.html#demo">Request a demo</a>
</div></header>
<section class="section cream-hex"><div class="wrap two-col">
  <div>
    <h2>What you get</h2>
    <p class="sub">Connectivity APIs beneath your product experience — focused on OEM interoperability and dispatch-ready streams.</p>
    <ul class="feature-list">
      <li><span class="dot"></span><div><strong>Unified telemetry</strong><br><span style="color:var(--muted);font-size:14px;">Normalized readings and events across OEM dialects.</span></div></li>
      <li><span class="dot"></span><div><strong>Secure dispatch</strong><br><span style="color:var(--muted);font-size:14px;">Policy-bound charge, discharge, curtail, and shift.</span></div></li>
      <li><span class="dot"></span><div><strong>Verification hooks</strong><br><span style="color:var(--muted);font-size:14px;">Logged outcomes for programs and settlements.</span></div></li>
      <li><span class="dot"></span><div><strong>Platform-ready</strong><br><span style="color:var(--muted);font-size:14px;">Serve Texture-, Enode-, or DERMS-class products that need OEM reach.</span></div></li>
    </ul>
  </div>
  <div>
    <h2>Who buys this</h2>
    <div class="value-grid" style="grid-template-columns:1fr;gap:12px;">
      <div class="value-card"><h3>Aggregators &amp; VPPs</h3><p>Expand addressable fleets without a growing integration backlog.</p></div>
      <div class="value-card"><h3>Utilities</h3><p>Behind-the-meter visibility without OEM-by-OEM projects.</p></div>
      <div class="value-card"><h3>Energy software platforms</h3><p>Use kWh as the OEM connectivity substrate under your own UX.</p></div>
    </div>
  </div>
</div></section>
<section class="section"><div class="wrap">
  <h2>How integration works</h2>
  <p class="sub">From first conversation to production fleet access.</p>
  <div class="who-grid">
    <div class="who-card"><h3>1. Scope OEMs</h3><p>Identify device classes and manufacturers in your target markets.</p></div>
    <div class="who-card"><h3>2. Connect APIs</h3><p>Authenticate, subscribe to telemetry, wire dispatch into your control plane.</p></div>
    <div class="who-card"><h3>3. Pilot &amp; scale</h3><p>Validate on a site cohort, then expand OEM coverage through kWh.</p></div>
  </div>
  <p style="margin-top:36px;"><a class="btn-primary" href="index.html#demo">Book an OEM Integrations demo</a>
  <a href="open-protocol-gateway.html" style="margin-left:16px;font-weight:600;color:var(--bronze);">Also see Open Protocol Gateway →</a></p>
</div></section>
"""
    + contact_section("Demo OEM Integrations", "Tell us which OEMs and device classes you need to reach.")
    + footer("Option A · Product-first")
    + tail()
)

A_GW = (
    head("Open Protocol Gateway — kWh (Preview A)", "opt-a")
    + nav("gateway", True)
    + f"""
<header class="page-hero"><div class="wrap">
  <p class="eyebrow">Product · Open Protocol Gateway</p>
  <h1>Edge connectivity, two ways.</h1>
  <p>Bring open-protocol intelligence to the site — as a software license on hardware you already own, or as a palm-sized physical gateway from kWh.</p>
  <a class="btn-bronze" href="index.html#demo">Request a demo</a>
</div></header>
<section class="section cream-hex"><div class="wrap">
  <h2>Delivery modes</h2>
  <p class="sub">Same protocol stack and policy model. Choose the form factor that fits the deployment.</p>
  <div class="two-col">
    <div class="mode-card">
      <p class="tag" style="margin-bottom:14px;">Mode A · Software</p>
      <h3>License on existing devices</h3>
      <p>Install the Open Protocol Gateway runtime on compatible edge hardware or OEM controllers already in the field.</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;"><span class="tag">Software license</span><span class="tag">Existing hardware</span><span class="tag">OTA updates</span></div>
    </div>
    <div class="mode-card">
      <p class="tag" style="margin-bottom:14px;">Mode B · Hardware</p>
      <h3>Palm-sized kWh gateway</h3>
      <p>A compact physical device kWh provides for sites that need a dedicated, offline-ready edge node.</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;"><span class="tag">Physical gateway</span><span class="tag">Local edge</span><span class="tag">Offline-ready</span></div>
    </div>
  </div>
</div></section>
<section class="section"><div class="wrap two-col">
  <div>
    <h2>Protocols &amp; capabilities</h2>
    <ul class="feature-list">
      <li><span class="dot"></span><div><strong>IEEE 2030.5 / OpenADR / SunSpec</strong><br><span style="color:var(--muted);font-size:14px;">Open standards for utility and program interoperability.</span></div></li>
      <li><span class="dot"></span><div><strong>Southbound OEM dialects</strong><br><span style="color:var(--muted);font-size:14px;">Modbus, OCPP, and manufacturer protocols translated at the edge.</span></div></li>
      <li><span class="dot"></span><div><strong>Policy-as-code</strong><br><span style="color:var(--muted);font-size:14px;">Safe local execution bounds for agents and upstream platforms.</span></div></li>
    </ul>
  </div>
  <div>
    <h2>Why edge matters</h2>
    <div class="value-card" style="margin-bottom:12px;"><h3>Resilience</h3><p>Continue local policy when WAN links drop.</p></div>
    <div class="value-card" style="margin-bottom:12px;"><h3>Latency</h3><p>Site-level decisions without round-tripping every command.</p></div>
    <div class="value-card"><h3>Trust boundary</h3><p>Keep raw device control behind a verified gateway layer.</p></div>
  </div>
</div>
<div class="wrap" style="margin-top:40px;">
  <a class="btn-primary" href="index.html#demo">Book a Gateway demo</a>
  <a href="oem-integrations.html" style="margin-left:16px;font-weight:600;color:var(--bronze);">Pair with OEM Integrations →</a>
</div></section>
"""
    + contact_section("Demo the Open Protocol Gateway", "Tell us whether you need a software license, hardware unit, or both.")
    + footer("Option A · Product-first")
    + tail()
)

write_opt("option-a", A_CSS, {
    "index.html": A_HOME,
    "oem-integrations.html": A_OEM,
    "open-protocol-gateway.html": A_GW,
})

print("Option A done — continuing in part 2 for B and C")

# ═══════════════════════════════════════════════════════════════════════════
# OPTION B — Split storytelling (Texture-like)
# ═══════════════════════════════════════════════════════════════════════════
B_CSS = r"""
.hero-split{min-height:100vh;display:grid;grid-template-columns:1.05fr .95fr;background:var(--dark-warm);color:var(--cream)}
.hero-copy{padding:140px clamp(24px,5vw,64px) 72px;display:flex;flex-direction:column;justify-content:center}
.hero-visual{position:relative;min-height:420px;background:url(../uploads/hero-bg.webp) center/cover no-repeat}
.hero-visual::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(18,13,4,.85),rgba(18,13,4,.25))}
.hero-copy .eyebrow{color:var(--bronze);font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin:0 0 18px}
.hero-copy h1{font-size:clamp(36px,4.8vw,60px);letter-spacing:-.035em;line-height:1.05;margin:0 0 20px;max-width:14ch}
.hero-copy .lead{font-size:18px;opacity:.82;line-height:1.65;max-width:38ch;margin:0 0 28px}
.hero-ctas{display:flex;flex-wrap:wrap;gap:12px}
.split-row{display:grid;grid-template-columns:1fr 1fr;gap:0;align-items:stretch;min-height:420px}
.split-row.reverse .split-text{order:2}
.split-row.reverse .split-media{order:1}
.split-text{padding:72px clamp(24px,5vw,64px);display:flex;flex-direction:column;justify-content:center;background:var(--cream)}
.split-text.dark{background:var(--dark-warm);color:var(--cream)}
.split-text .eyebrow{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--bronze);margin:0 0 14px}
.split-text h2{font-size:clamp(28px,3.2vw,40px);letter-spacing:-.03em;margin:0 0 16px;line-height:1.12;max-width:16ch}
.split-text p{font-size:16px;color:var(--muted);line-height:1.65;margin:0 0 22px;max-width:42ch}
.split-text.dark p{color:rgba(255,251,240,.75)}
.split-media{position:relative;background:#2B1A08;overflow:hidden}
.split-media img{width:100%;height:100%;object-fit:cover;opacity:.55}
.split-media .panel{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:40px}
.panel-card{background:rgba(255,251,240,.95);border:1px solid var(--border);padding:28px;max-width:340px;width:100%;border-radius:var(--radius)}
.panel-card h3{margin:0 0 10px;font-size:20px}
.panel-card p{margin:0;font-size:14px;color:var(--muted);line-height:1.5}
.panel-card ul{margin:14px 0 0;padding-left:18px;color:var(--muted);font-size:14px}
.proof{padding:56px clamp(24px,5vw,64px);background:var(--bronze);text-align:center}
.proof h2{margin:0 0 10px;font-size:clamp(24px,3vw,36px);letter-spacing:-.03em}
.proof p{margin:0 auto 28px;max-width:48ch;color:rgba(11,11,14,.72)}
.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;width:min(1000px,94vw);margin:0 auto}
.pillar{background:rgba(255,251,240,.2);border:1px solid rgba(11,11,14,.1);padding:22px;text-align:left;border-radius:var(--radius)}
.pillar strong{display:block;font-size:28px;letter-spacing:-.03em;margin-bottom:6px}
.pillar span{font-size:14px;color:rgba(11,11,14,.75)}
.company{padding:80px clamp(24px,5vw,64px);background:var(--cream)}
.company-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:48px;align-items:start;width:min(1100px,94vw);margin:0 auto}
.company h2{font-size:clamp(28px,3.5vw,44px);letter-spacing:-.03em;margin:0 0 16px;line-height:1.1}
.company .sub{color:var(--muted);font-size:16px;line-height:1.65;margin:0}
.fact{border-top:1px solid var(--border);padding:16px 0}
.fact h3{margin:0 0 6px;font-size:16px}
.fact p{margin:0;font-size:14px;color:var(--muted);line-height:1.5}
.page-hero-split{display:grid;grid-template-columns:1.1fr .9fr;background:var(--dark-warm);color:var(--cream);min-height:420px}
.page-hero-split .copy{padding:130px clamp(24px,5vw,64px) 64px}
.page-hero-split .viz{background:url(../uploads/hero-bg.webp) center/cover;position:relative}
.page-hero-split .viz::after{content:'';position:absolute;inset:0;background:rgba(18,13,4,.45)}
.page-hero-split .eyebrow{color:var(--bronze);font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin:0 0 14px}
.page-hero-split h1{font-size:clamp(32px,4vw,48px);letter-spacing:-.03em;margin:0 0 16px;line-height:1.08;max-width:14ch}
.page-hero-split p{opacity:.8;max-width:40ch;line-height:1.6;margin:0 0 24px}
.steps{padding:72px clamp(24px,5vw,64px)}
.steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;width:min(1100px,94vw);margin:24px auto 0}
.step{border-left:3px solid var(--bronze);padding:8px 0 8px 18px}
.step .n{font-size:13px;font-weight:700;color:var(--bronze);letter-spacing:.08em}
.step h3{margin:6px 0;font-size:18px}
.step p{margin:0;font-size:14px;color:var(--muted);line-height:1.5}
@media(max-width:900px){
  .hero-split,.split-row,.company-grid,.page-hero-split,.pillars,.steps-grid{grid-template-columns:1fr}
  .split-row.reverse .split-text,.split-row.reverse .split-media{order:unset}
  .hero-visual{min-height:280px}
}
"""

B_HOME = (
    head("kWh Electric — Preview B", "opt-b")
    + nav()
    + f"""
<section class="hero-split">
  <div class="hero-copy">
    <p class="eyebrow">kWh Electric</p>
    <h1>The communication layer for distributed energy.</h1>
    <p class="lead">We connect OEM devices to the platforms that need to see and dispatch them — aggregators, utilities, and energy software companies alike.</p>
    <div class="hero-ctas">
      <a class="btn-bronze" href="#demo">Book a demo</a>
      <a class="btn-secondary" href="#products">See products</a>
    </div>
  </div>
  <div class="hero-visual" aria-hidden="true"></div>
</section>

<section id="products">
  <div class="split-row">
    <div class="split-text">
      <p class="eyebrow">Product 01</p>
      <h2>OEM Integrations / APIs</h2>
      <p>Provide APIs that connect heterogeneous OEM devices. Sell and serve aggregators, utilities, and platforms that would otherwise rebuild OEM connectivity themselves — including competitors in the Texture / Enode class when they need an interop substrate.</p>
      <a class="btn-primary" href="oem-integrations.html">Explore OEM Integrations</a>
    </div>
    <div class="split-media">
      <div class="panel"><div class="panel-card">
        <h3>Interop for platforms</h3>
        <p>One northbound surface for telemetry, events, and policy-bound dispatch.</p>
        <ul><li>Multi-OEM coverage</li><li>Normalized data model</li><li>Verification-ready logs</li></ul>
      </div></div>
    </div>
  </div>
  <div class="split-row reverse">
    <div class="split-text dark">
      <p class="eyebrow">Product 02</p>
      <h2>Open Protocol Gateway</h2>
      <p>Edge connectivity on open standards. Delivered as a software license installed on existing devices — or as a palm-sized physical gateway that kWh ships.</p>
      <a class="btn-bronze" href="open-protocol-gateway.html">Explore the Gateway</a>
    </div>
    <div class="split-media">
      <div class="panel"><div class="panel-card">
        <h3>Two delivery modes</h3>
        <ul>
          <li><strong>Software license</strong> — run on existing edge / OEM hardware</li>
          <li><strong>Physical gateway</strong> — palm-sized unit from kWh</li>
        </ul>
      </div></div>
    </div>
  </div>
</section>

<section class="proof" id="how">
  <h2>Connect → Normalize → Dispatch → Verify</h2>
  <p>Borrowed IA clarity from category leaders: lead with the operating loop, then prove who it's for.</p>
  <div class="pillars">
    <div class="pillar"><strong>Connect</strong><span>Open standards at the edge: IEEE 2030.5, OpenADR, SunSpec.</span></div>
    <div class="pillar"><strong>Operate</strong><span>Real-time charge, discharge, curtail, and shift across mixed fleets.</span></div>
    <div class="pillar"><strong>Prove</strong><span>Logged response so programs and partners can claim outcomes.</span></div>
  </div>
</section>

<section class="company" id="about">
  <div class="company-grid">
    <div>
      <h2>Company detail, written for humans and reviewers</h2>
      <p class="sub">kWh Electric is based in Palo Alto. We build hardware-enabled software infrastructure so distributed energy assets become visible and dispatchable — not locked behind proprietary OEM silos.</p>
      <p style="margin:24px 0 0;"><a class="btn-primary" href="#demo">Talk to the team</a></p>
    </div>
    <div>
      <div class="fact" id="who"><h3>Who we serve</h3><p>Aggregators / VPPs, utilities &amp; DISCOMs, OEMs, BESS financiers, commercial asset owners, and energy AI / software platforms.</p></div>
      <div class="fact"><h3>What makes us different</h3><p>We sell the connectivity and gateway layer — including to platforms that compete on UX or markets but still need OEM reach.</p></div>
      <div class="fact" id="architecture"><h3>Architecture in one line</h3><p>Edge gateway → protocol/API layer → cloud → MCP/AI → applications &amp; value (VPP, grid services, verification).</p></div>
      <div class="fact"><h3>How to engage</h3><p>Request a demo below, email arham@kwhelectric.io, or log into the portal for existing partners.</p></div>
    </div>
  </div>
</section>
"""
    + contact_section("Book a live demo", "Walk through OEM Integrations, the Gateway, or both with the kWh team.")
    + footer("Option B · Split story")
    + tail()
)

B_OEM = (
    head("OEM Integrations — kWh (Preview B)", "opt-b")
    + nav("oem", True)
    + f"""
<header class="page-hero-split">
  <div class="copy">
    <p class="eyebrow">OEM Integrations / APIs</p>
    <h1>Device connectivity without the OEM tax.</h1>
    <p>APIs that connect various OEM devices so your product can monitor and dispatch a mixed fleet — whether you are an aggregator, a utility, or a platform in the Texture / Enode peer set.</p>
    <a class="btn-bronze" href="index.html#demo">Book a demo</a>
  </div>
  <div class="viz" aria-hidden="true"></div>
</header>
<div class="split-row">
  <div class="split-text">
    <p class="eyebrow">Problem</p>
    <h2>Every OEM is another integration project.</h2>
    <p>Energy software teams burn quarters stitching Modbus, OCPP, cloud OEM APIs, and program protocols. kWh collapses that work into one connectivity surface.</p>
  </div>
  <div class="split-media"><div class="panel"><div class="panel-card">
    <h3>Without kWh</h3>
    <ul><li>N OEM connectors</li><li>Uneven telemetry schemas</li><li>Fragile dispatch paths</li></ul>
  </div></div></div>
</div>
<div class="split-row reverse">
  <div class="split-text dark">
    <p class="eyebrow">Solution</p>
    <h2>Integrate once. Reach many OEMs.</h2>
    <p>Normalize southbound dialects, expose clean northbound APIs, and keep verification in the loop so programs can trust what was delivered.</p>
  </div>
  <div class="split-media"><div class="panel"><div class="panel-card">
    <h3>With kWh</h3>
    <ul><li>One integration partner</li><li>Shared data model</li><li>Policy-bound control</li></ul>
  </div></div></div>
</div>
<section class="steps">
  <div class="wrap" style="width:min(1100px,94vw);margin:0 auto;">
    <h2 style="font-size:clamp(28px,3vw,40px);letter-spacing:-.03em;margin:0;">Buyer journeys</h2>
  </div>
  <div class="steps-grid">
    <div class="step"><div class="n">01</div><h3>Aggregators</h3><p>Onboard mixed OEM fleets faster; keep dispatch reliability as you scale capacity.</p></div>
    <div class="step"><div class="n">02</div><h3>Utilities</h3><p>Gain behind-the-meter visibility and flexibility hooks without per-OEM RFPs.</p></div>
    <div class="step"><div class="n">03</div><h3>Platforms</h3><p>Offer OEM coverage under your brand while kWh maintains the connectors.</p></div>
  </div>
  <div style="width:min(1100px,94vw);margin:36px auto 0;">
    <a class="btn-primary" href="index.html#demo">Request OEM Integrations demo</a>
  </div>
</section>
"""
    + contact_section()
    + footer("Option B · Split story")
    + tail()
)

B_GW = (
    head("Open Protocol Gateway — kWh (Preview B)", "opt-b")
    + nav("gateway", True)
    + f"""
<header class="page-hero-split">
  <div class="copy">
    <p class="eyebrow">Open Protocol Gateway</p>
    <h1>Open standards at the site edge.</h1>
    <p>Deploy as a software license on existing devices, or as a palm-sized physical gateway from kWh — same protocols, same policy model.</p>
    <a class="btn-bronze" href="index.html#demo">Book a demo</a>
  </div>
  <div class="viz" aria-hidden="true"></div>
</header>
<div class="split-row">
  <div class="split-text">
    <p class="eyebrow">Mode A</p>
    <h2>Software license on existing hardware</h2>
    <p>Install the gateway runtime where you already have compute — OEM controllers, industrial PCs, or partner gateways — and speak open standards northbound.</p>
    <a href="index.html#demo" style="font-weight:600;color:var(--bronze);">Ask about licensing →</a>
  </div>
  <div class="split-media"><div class="panel"><div class="panel-card">
    <h3>Best when</h3>
    <ul><li>Hardware SKUs already exist</li><li>Partners want software attach</li><li>Fast geographic scale matters</li></ul>
  </div></div></div>
</div>
<div class="split-row reverse">
  <div class="split-text dark">
    <p class="eyebrow">Mode B</p>
    <h2>Palm-sized physical gateway</h2>
    <p>kWh provides a compact edge device for sites that need a dedicated, offline-ready node connected locally to assets.</p>
    <a href="index.html#demo" style="font-weight:600;color:var(--bronze);">Ask about hardware →</a>
  </div>
  <div class="split-media"><div class="panel"><div class="panel-card">
    <h3>Best when</h3>
    <ul><li>Greenfield sites need a node</li><li>Offline resilience is required</li><li>You want a kWh-supplied SKU</li></ul>
  </div></div></div>
</div>
<section class="proof">
  <h2>Protocols that matter to programs</h2>
  <p>IEEE 2030.5 · OpenADR · SunSpec · Modbus · OCPP — translated at the edge, exposed cleanly upstream.</p>
  <a class="btn-primary" href="index.html#demo">Schedule Gateway demo</a>
</section>
"""
    + contact_section()
    + footer("Option B · Split story")
    + tail()
)

write_opt("option-b", B_CSS, {
    "index.html": B_HOME,
    "oem-integrations.html": B_OEM,
    "open-protocol-gateway.html": B_GW,
})

# ═══════════════════════════════════════════════════════════════════════════
# OPTION C — Dense enterprise / docs-ish (Google reviewer friendly)
# ═══════════════════════════════════════════════════════════════════════════
C_CSS = r"""
body.opt-c{background:#FFFBF0}
.topbar{background:var(--dark);color:var(--cream);font-size:12px;padding:8px 24px;text-align:center}
.topbar a{color:var(--bronze);font-weight:600}
.hero-dense{padding:120px clamp(16px,4vw,48px) 48px;background:var(--dark-warm);color:var(--cream);border-bottom:3px solid var(--bronze)}
.hero-dense .wrap{width:min(1100px,94vw);margin:0 auto}
.hero-dense .eyebrow{color:var(--bronze);font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin:0 0 12px}
.hero-dense h1{font-size:clamp(30px,4vw,48px);letter-spacing:-.03em;margin:0 0 14px;line-height:1.1;max-width:22ch}
.hero-dense .lead{font-size:17px;opacity:.85;max-width:62ch;line-height:1.65;margin:0 0 22px}
.meta-row{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:28px}
.meta-row .tag{background:rgba(255,251,240,.08);border-color:rgba(205,127,50,.45);color:rgba(255,251,240,.85)}
.toc{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:8px}
.toc a{display:block;background:rgba(255,251,240,.06);border:1px solid rgba(205,127,50,.3);padding:12px 10px;font-size:12px;font-weight:600;text-align:center;border-radius:var(--radius)}
.toc a:hover{border-color:var(--bronze);color:var(--bronze)}
.dense{padding:48px clamp(16px,4vw,48px);width:min(1100px,94vw);margin:0 auto}
.dense h2{font-size:clamp(24px,2.8vw,34px);letter-spacing:-.025em;margin:0 0 10px;padding-top:16px}
.dense .lede{color:var(--muted);font-size:16px;line-height:1.65;margin:0 0 24px;max-width:70ch}
.def-grid{display:grid;grid-template-columns:180px 1fr;gap:0;border-top:1px solid var(--border)}
.def-grid dt,.def-grid dd{margin:0;padding:14px 12px;border-bottom:1px solid var(--border);font-size:14px;line-height:1.5}
.def-grid dt{font-weight:700;background:rgba(205,127,50,.08);color:var(--dark)}
.def-grid dd{color:var(--muted)}
.prod-table{width:100%;border-collapse:collapse;font-size:14px;margin:8px 0 28px}
.prod-table th,.prod-table td{border:1px solid var(--border);padding:12px 14px;text-align:left;vertical-align:top}
.prod-table th{background:rgba(205,127,50,.12);font-size:13px}
.prod-table a{color:var(--bronze);font-weight:600}
.audience{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.audience article{border:1px solid var(--border);padding:16px;border-radius:var(--radius);background:rgba(255,255,255,.45)}
.audience h3{margin:0 0 6px;font-size:15px}
.audience p{margin:0;font-size:13px;color:var(--muted);line-height:1.45}
.steps-ol{margin:0;padding:0;list-style:none;counter-reset:s}
.steps-ol li{counter-increment:s;display:grid;grid-template-columns:40px 1fr;gap:14px;padding:16px 0;border-bottom:1px solid var(--border)}
.steps-ol li::before{content:counter(s, decimal-leading-zero);font-weight:700;color:var(--bronze);font-size:18px}
.steps-ol h3{margin:0 0 4px;font-size:16px}
.steps-ol p{margin:0;font-size:14px;color:var(--muted)}
.callout{background:var(--bronze);color:var(--dark);padding:28px;border-radius:var(--radius);margin:28px 0}
.callout h3{margin:0 0 8px;font-size:20px}
.callout p{margin:0 0 14px;font-size:15px;max-width:60ch}
.arch-table{width:100%;border-collapse:collapse;font-size:14px}
.arch-table th,.arch-table td{border:1px solid rgba(205,127,50,.35);padding:12px;text-align:left}
.arch-table th{background:rgba(205,127,50,.15)}
.dark-panel{background:var(--dark-warm);color:var(--cream);padding:48px clamp(16px,4vw,48px)}
.dark-panel .inner{width:min(1100px,94vw);margin:0 auto}
.dark-panel .arch-table td{color:rgba(255,251,240,.78);border-color:rgba(205,127,50,.35)}
.dark-panel .arch-table th{color:var(--cream);background:rgba(205,127,50,.25)}
.page-doc{padding:110px clamp(16px,4vw,48px) 24px;border-bottom:1px solid var(--border);background:rgba(255,255,255,.35)}
.page-doc .wrap{width:min(1100px,94vw);margin:0 auto}
.page-doc .crumbs{font-size:12px;color:var(--muted);margin:0 0 12px}
.page-doc .crumbs a{color:var(--bronze)}
.page-doc h1{font-size:clamp(28px,3.5vw,42px);letter-spacing:-.03em;margin:0 0 12px}
.page-doc .summary{font-size:16px;color:var(--muted);max-width:70ch;line-height:1.65;margin:0}
.spec{width:100%;border-collapse:collapse;font-size:14px;margin:20px 0}
.spec th,.spec td{border:1px solid var(--border);padding:10px 12px;text-align:left}
.spec th{width:34%;background:rgba(205,127,50,.1)}
@media(max-width:800px){
  .toc,.audience,.def-grid{grid-template-columns:1fr}
  .def-grid dt{border-bottom:0}
}
"""

C_HOME = (
    head("kWh Electric — Company & Products (Preview C)", "opt-c")
    + '<div class="topbar">Localhost redesign preview C — dense company detail for program reviewers · <a href="#demo">Request demo</a></div>'
    + nav()
    + f"""
<header class="hero-dense" id="top">
  <div class="wrap">
    <p class="eyebrow">Company overview</p>
    <h1>kWh Electric makes distributed energy assets visible and dispatchable.</h1>
    <p class="lead">We provide OEM connectivity APIs and an Open Protocol Gateway (software license or palm-sized hardware) so aggregators, utilities, OEMs, and energy platforms can connect, control, and verify fleets without rebuilding integrations for every manufacturer.</p>
    <div class="meta-row">
      <span class="tag">Palo Alto, California</span>
      <span class="tag">Hardware-enabled software</span>
      <span class="tag">Edge + cloud</span>
      <span class="tag">Open standards</span>
    </div>
    <div class="hero-ctas" style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px;">
      <a class="btn-bronze" href="#demo">Request a demo</a>
      <a class="btn-secondary" href="#products">Jump to products</a>
      <a class="btn-secondary" href="https://portal.kwhelectric.io/" target="_blank" rel="noopener">Portal login</a>
    </div>
    <nav class="toc" aria-label="On this page">
      <a href="#about">1. What we do</a>
      <a href="#products">2. Products</a>
      <a href="#who">3. Who for</a>
      <a href="#how">4. How it works</a>
      <a href="#contact">5. Contact</a>
    </nav>
  </div>
</header>

<section class="dense" id="about">
  <h2>1. What kWh Electric does</h2>
  <p class="lede">kWh sits between heterogeneous DER hardware and the software systems that need to operate it. We translate OEM protocols, expose clean APIs, run open-standards gateways at the edge, and log dispatch outcomes for verification.</p>
  <dl class="def-grid">
    <dt>Category</dt><dd>Energy communication infrastructure / OEM interop + edge gateway</dd>
    <dt>Primary offer</dt><dd>OEM Integrations / APIs; Open Protocol Gateway (license or hardware)</dd>
    <dt>Customers</dt><dd>Aggregators &amp; VPPs, utilities / DISCOMs, OEMs, financiers, commercial owners, energy platforms</dd>
    <dt>Differentiator</dt><dd>We sell connectivity to platforms (including peers like Texture or Enode) that still need OEM reach, plus dual-mode edge delivery</dd>
    <dt>HQ</dt><dd>Palo Alto, California · arham@kwhelectric.io</dd>
  </dl>
</section>

<section class="dense" id="products">
  <h2>2. Products</h2>
  <p class="lede">Two product lines. Full pages linked for detail; summary for reviewers below.</p>
  <table class="prod-table">
    <thead><tr><th>Product</th><th>What it is</th><th>Delivery</th><th>Typical buyer</th></tr></thead>
    <tbody>
      <tr>
        <td><a href="oem-integrations.html">OEM Integrations / APIs</a></td>
        <td>APIs that connect various OEM devices into one telemetry + dispatch surface</td>
        <td>Cloud / API integration</td>
        <td>Aggregators, utilities, energy platforms</td>
      </tr>
      <tr>
        <td><a href="open-protocol-gateway.html">Open Protocol Gateway</a></td>
        <td>Open-standards edge node (IEEE 2030.5, OpenADR, SunSpec, southbound OEM dialects)</td>
        <td>(a) Software license on existing device<br>(b) Palm-sized physical gateway from kWh</td>
        <td>OEMs, site operators, utilities, partners</td>
      </tr>
    </tbody>
  </table>
</section>

<section class="dense" id="who">
  <h2>3. Who it's for</h2>
  <p class="lede">Explicit audiences — the density competitors like Enode and Molecule put on the homepage.</p>
  <div class="audience">
    <article><h3>Aggregators / VPP operators</h3><p>Unified dispatch across mixed OEM fleets; less custom integration backlog.</p></article>
    <article><h3>Utilities / DISCOMs</h3><p>Behind-the-meter visibility and flexible capacity with program-friendly protocols.</p></article>
    <article><h3>Energy platforms</h3><p>Use kWh as OEM connectivity under your product (Texture / Enode-class peers included).</p></article>
    <article><h3>OEMs</h3><p>Ship interoperable, program-ready hardware without building a full cloud stack.</p></article>
    <article><h3>BESS financiers</h3><p>Portfolio health and performance visibility across batteries.</p></article>
    <article><h3>Commercial asset owners</h3><p>Visibility and participation from solar, storage, and EV charging.</p></article>
  </div>
</section>

<section class="dense" id="how">
  <h2>4. How it works</h2>
  <ol class="steps-ol">
    <li><div><h3>Connect</h3><p>Edge gateway (software or hardware) speaks open standards and local OEM protocols.</p></div></li>
    <li><div><h3>Normalize</h3><p>OEM Integrations APIs present one clean telemetry and event model upstream.</p></div></li>
    <li><div><h3>Dispatch</h3><p>Charge, discharge, curtail, and shift under policy constraints — cloud and/or edge.</p></div></li>
    <li><div><h3>Verify</h3><p>Every dispatch is logged for program performance, partners, and settlements.</p></div></li>
  </ol>
  <div class="callout">
    <h3>Want a walkthrough?</h3>
    <p>Use the Demo CTA to request a live session on OEM Integrations, the Gateway, or both. Existing partners can also use portal login.</p>
    <a class="btn-primary" href="#demo">Request demo</a>
  </div>
</section>

<section class="dark-panel" id="architecture">
  <div class="inner">
    <h2 style="margin:0 0 16px;font-size:clamp(24px,2.8vw,34px);letter-spacing:-.025em;">Architecture (five layers)</h2>
    <table class="arch-table">
      <thead><tr><th>Layer</th><th>Name</th><th>Role</th></tr></thead>
      <tbody>
        <tr><td>L5</td><td>Applications + Value</td><td>VPP, grid services, financing, forecasting, verification</td></tr>
        <tr><td>L4</td><td>MCP + AI</td><td>Agent tooling with policy-constrained dispatch</td></tr>
        <tr><td>L3</td><td>Cloud platform</td><td>Onboarding, telemetry, events, orchestration</td></tr>
        <tr><td>L2</td><td>Protocol + API</td><td>OEM Integrations / interop APIs</td></tr>
        <tr><td>L1</td><td>Edge gateway</td><td>Open Protocol Gateway — license or hardware</td></tr>
      </tbody>
    </table>
  </div>
</section>
"""
    + contact_section("5. Contact & demo", "Program reviewers and partners: request a demo or email the team directly.")
    + footer("Option C · Dense enterprise")
    + tail()
)

C_OEM = (
    head("OEM Integrations / APIs — Spec (Preview C)", "opt-c")
    + nav("oem", True)
    + f"""
<header class="page-doc">
  <div class="wrap">
    <p class="crumbs"><a href="index.html">Company</a> / Products / OEM Integrations</p>
    <h1>OEM Integrations / APIs</h1>
    <p class="summary">Product page for the API layer that connects various OEM devices. Sold to aggregators, utilities, and platforms that need OEM connectivity without building every connector.</p>
  </div>
</header>
<section class="dense">
  <h2>Summary for reviewers</h2>
  <table class="spec">
    <tr><th>Product name</th><td>OEM Integrations / APIs</td></tr>
    <tr><th>Problem</th><td>Each OEM introduces unique protocols, clouds, and control semantics; platforms drown in N integrations.</td></tr>
    <tr><th>Solution</th><td>kWh maintains OEM connectors and exposes one northbound API for telemetry, events, and policy-bound dispatch.</td></tr>
    <tr><th>Buyers</th><td>Aggregators/VPPs, utilities, energy software platforms (including Texture/Enode-class peers needing OEM reach)</td></tr>
    <tr><th>Outcomes</th><td>Faster OEM coverage, normalized data, verifiable dispatch logs</td></tr>
    <tr><th>Related product</th><td><a href="open-protocol-gateway.html" style="color:var(--bronze);font-weight:600;">Open Protocol Gateway</a> for edge delivery</td></tr>
  </table>

  <h2>Capability checklist</h2>
  <ul class="steps-ol">
    <li><div><h3>Multi-OEM connectivity</h3><p>Batteries, inverters, EVSE, and related DERs across manufacturer dialects.</p></div></li>
    <li><div><h3>Normalized telemetry</h3><p>One data model for readings, states, and events.</p></div></li>
    <li><div><h3>Secure dispatch</h3><p>Charge / discharge / curtail / shift with policy bounds.</p></div></li>
    <li><div><h3>Verification</h3><p>Logged outcomes for programs and partner settlements.</p></div></li>
  </ul>

  <div class="callout">
    <h3>Demo this product</h3>
    <p>Request a technical walkthrough of the OEM Integrations surface and which manufacturers are in scope for your market.</p>
    <a class="btn-primary" href="index.html#demo">Request demo</a>
  </div>
</section>
"""
    + contact_section()
    + footer("Option C · Dense enterprise")
    + tail()
)

C_GW = (
    head("Open Protocol Gateway — Spec (Preview C)", "opt-c")
    + nav("gateway", True)
    + f"""
<header class="page-doc">
  <div class="wrap">
    <p class="crumbs"><a href="index.html">Company</a> / Products / Open Protocol Gateway</p>
    <h1>Open Protocol Gateway</h1>
    <p class="summary">Edge product with two delivery modes: (a) software license installed on an existing device, or (b) a palm-sized physical gateway provided by kWh.</p>
  </div>
</header>
<section class="dense">
  <h2>Delivery modes</h2>
  <table class="prod-table">
    <thead><tr><th>Mode</th><th>Form</th><th>When to use</th><th>Notes</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>A · Software license</strong></td>
        <td>Runtime on existing edge / OEM hardware</td>
        <td>Partner already has a device SKU; wants software attach</td>
        <td>OTA updates; same protocol stack as hardware mode</td>
      </tr>
      <tr>
        <td><strong>B · Physical gateway</strong></td>
        <td>Palm-sized unit supplied by kWh</td>
        <td>Site needs a dedicated offline-ready node</td>
        <td>Local asset connection; open standards northbound</td>
      </tr>
    </tbody>
  </table>

  <h2>Technical outline</h2>
  <table class="spec">
    <tr><th>Northbound</th><td>IEEE 2030.5, OpenADR, SunSpec-oriented open protocols</td></tr>
    <tr><th>Southbound</th><td>OEM dialects including Modbus, OCPP, and manufacturer APIs/protocols</td></tr>
    <tr><th>Control model</th><td>Policy-as-code; offline-safe local execution</td></tr>
    <tr><th>Cloud pairing</th><td>Works with OEM Integrations / APIs and kWh cloud orchestration</td></tr>
  </table>

  <h2>How a deployment typically runs</h2>
  <ol class="steps-ol">
    <li><div><h3>Choose mode</h3><p>License on existing hardware vs. ship palm-sized gateway.</p></div></li>
    <li><div><h3>Commission site</h3><p>Connect local assets; establish identity and policy.</p></div></li>
    <li><div><h3>Expose upstream</h3><p>Utility / aggregator / platform consumes open protocols or kWh APIs.</p></div></li>
    <li><div><h3>Operate &amp; verify</h3><p>Dispatch with logged response for program participation.</p></div></li>
  </ol>

  <div class="callout">
    <h3>Demo either mode</h3>
    <p>Tell us in the form whether you need software licensing, hardware units, or a mixed pilot.</p>
    <a class="btn-primary" href="index.html#demo">Request demo</a>
  </div>
</section>
"""
    + contact_section()
    + footer("Option C · Dense enterprise")
    + tail()
)

write_opt("option-c", C_CSS, {
    "index.html": C_HOME,
    "oem-integrations.html": C_OEM,
    "open-protocol-gateway.html": C_GW,
})

# Hub index
hub = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>kWh Electric — Redesign previews (localhost)</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="_shared/brand.css" />
<style>
  body{{padding:48px 24px 80px;}}
  .hub{{width:min(900px,94vw);margin:0 auto;}}
  h1{{font-size:clamp(28px,4vw,42px);letter-spacing:-.03em;margin:0 0 12px;}}
  .note{{color:var(--muted);font-size:15px;line-height:1.6;margin:0 0 28px;}}
  .warn{{background:rgba(205,127,50,.12);border:1px solid var(--border);padding:14px 16px;border-radius:var(--radius);font-size:14px;margin-bottom:28px;}}
  .opts{{display:grid;gap:14px;}}
  .opt{{display:block;border:1px solid var(--border);padding:22px 20px;border-radius:var(--radius);background:rgba(255,255,255,.5);transition:border-color .15s;}}
  .opt:hover{{border-color:var(--bronze);}}
  .opt h2{{margin:0 0 6px;font-size:20px;}}
  .opt p{{margin:0;color:var(--muted);font-size:14px;line-height:1.5;}}
  .opt .go{{display:inline-block;margin-top:12px;color:var(--bronze);font-weight:600;font-size:14px;}}
</style>
</head>
<body>
<div class="hub">
  <h1>kWh Electric redesign previews</h1>
  <p class="note">Localhost-only options. Production <code>index.html</code> and kwhelectric.io are untouched. Same brand (honeycomb, bronze, cream, DM Sans) with richer company + product storytelling.</p>
  <div class="warn"><strong>Do not push.</strong> These files live under <code>preview/</code> only.</div>
  <div class="opts">
    <a class="opt" href="option-a/"><h2>Option A — Product-first cards</h2><p>Hero + two large product cards above the fold, then company / how / who / architecture. Clearest product IA.</p><span class="go">Open Option A →</span></a>
    <a class="opt" href="option-b/"><h2>Option B — Split storytelling</h2><p>Texture-like alternating narrative panels, strong demo CTA, company facts in a structured aside.</p><span class="go">Open Option B →</span></a>
    <a class="opt" href="option-c/"><h2>Option C — Dense enterprise</h2><p>Docs-ish density for Google-for-Startups reviewers: TOC, definition list, product tables, architecture table.</p><span class="go">Open Option C →</span></a>
  </div>
</div>
</body>
</html>
"""
(ROOT / "index.html").write_text(hub)
print("Hub + options B/C written")
