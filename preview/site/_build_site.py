#!/usr/bin/env python3
"""Generate preview/site pages for kWh Electric localhost duplicate."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parent
REPO = ROOT.parent.parent
SITE = ROOT
SHARED = "../_shared"
# Cache-busting token appended to shared CSS/JS so browsers always load fresh assets.
VER = "v9"
ASSET_ROOT = "../../assets"
UPLOAD_ROOT = "../../uploads"


def assets(depth=0):
    return "../" * depth + "assets"


def uploads(depth=0):
    return "../" * depth + "uploads"
PORTAL = "https://portal.kwhelectric.io/"

MEGA_ITEMS = [
    ("Solutions", "One platform to connect, normalize, and dispatch energy assets.", "/solutions/"),
    ("Aggregators", "Launch and scale programs across mixed OEM fleets.", "/solutions/aggregators/"),
    ("OEMs", "Make devices program-ready without building every downstream integration.", "/solutions/oems/"),
    ("Financiers", "Portfolio visibility and performance data across battery fleets.", "/solutions/financiers/"),
    ("Utilities", "Behind-the-meter visibility and flexible capacity at scale.", "/solutions/utilities/"),
]


def mega_menu(prefix: str = "") -> str:
    # Absolute-from-root paths so nav works from every depth.
    rows = "".join(
        f'<a href="{href}"><strong>{title}</strong><span>{desc}</span></a>'
        for title, desc, href in MEGA_ITEMS
    )
    return f"""<div class="kwh-mega" role="menu">{rows}</div>"""


def nav_html(path_prefix="", mega_prefix=None, scrolled_class="", use_dc=False, depth=0):
    home = "/"
    demo = "/demo/"
    guide = "/docs/oem-integration-platform/"
    ap = assets(depth)
    brand_imgs = f'<img class="mark-dark" src="{ap}/kwh-logo-mark.png?v=3" alt="kWh Electric" />'
    if use_dc:
        nav_open = '<nav style="{{ navStyle }}" class="kwh-nav" id="site-nav">'
    else:
        nav_open = f'<nav class="kwh-nav {scrolled_class}" id="site-nav">'

    return f"""{nav_open}
  <a href="{home}" class="kwh-nav-brand">
    {brand_imgs}
  </a>
  <button class="kwh-nav-toggle" type="button" aria-label="Open menu">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
  </button>
  <div class="kwh-nav-links">
    <a href="{home}">Home</a>
    <span class="kwh-nav-dot" aria-hidden="true"></span>
    <div class="kwh-nav-item">
      <button type="button" data-solutions-toggle aria-haspopup="true">Solutions
        <svg viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5"/></svg>
      </button>
      {mega_menu()}
    </div>
    <span class="kwh-nav-dot" aria-hidden="true"></span>
    <a href="{guide}">Guide</a>
    <span class="kwh-nav-dot" aria-hidden="true"></span>
    <a href="{demo}" class="kwh-nav-demo">Book a Demo</a>
    <a href="{PORTAL}" class="kwh-nav-signin" target="_blank" rel="noopener">Sign In</a>
  </div>
</nav>
<div class="kwh-nav-overlay" aria-hidden="true"></div>"""


def head(title: str, depth: int = 0, extra_css: str = "") -> str:
    p = "../" * depth
    favicon = "../" * depth + "favicon.png"
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>{title}</title>
<link rel="icon" type="image/png" href="{favicon}" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="{p}_shared/brand.css?{VER}" />
<link rel="stylesheet" href="{p}_shared/nav.css?{VER}" />
{extra_css}
</head>
<body>"""


def tail(depth: int = 0, form_script: bool = False, scroll: bool = False) -> str:
    p = "../" * depth
    scripts = f'<script src="{p}_shared/nav.js?{VER}"></script>\n'
    if scroll:
        scripts += f'<script src="{p}_shared/solution-scroll.js?{VER}"></script>\n'
    if form_script:
        scripts += f'<script src="{p}_shared/demo-form.js?{VER}"></script>\n'
    scripts += """</body>
</html>"""
    return scripts


def footer(prefix: str = "", depth: int = 0) -> str:
    ap = assets(depth)
    return f"""
<footer class="site-footer">
  <div class="foot-grid">
    <div>
      <img src="{ap}/kwh-logo-mark-light.png?v=3" alt="kWh Electric" style="height:26px;margin-bottom:16px;" />
      <p style="margin:0;font-size:18px;max-width:280px;line-height:1.55;">Communication infrastructure that makes every energy asset visible and dispatchable.</p>
    </div>
    <div>
      <h4>Solutions</h4>
      <a href="/solutions/oem-integration-platform/">OEM Platform</a>
      <a href="/solutions/open-protocol-gateway/">Edge Gateway</a>
      <a href="/solutions/">All solutions</a>
    </div>
    <div>
      <h4>Buyers</h4>
      <a href="/solutions/aggregators/">Aggregators</a>
      <a href="/solutions/oems/">OEMs</a>
      <a href="/solutions/financiers/">Financiers</a>
      <a href="/solutions/utilities/">Utilities</a>
    </div>
    <div>
      <h4>Resources</h4>
      <a href="/docs/oem-integration-platform/">Technical guide</a>
      <a href="/demo/">Book a demo</a>
      <a href="{PORTAL}">Sign in</a>
    </div>
    <div>
      <h4>Company</h4>
      <a href="/">Home</a>
      <a href="mailto:arham@kwhelectric.io">Contact</a>
    </div>
  </div>
  <div class="foot-bottom">
    <span>© 2026 kWh Electric · Palo Alto, California</span>
  </div>
</footer>"""


def redirect_stub(target: str) -> str:
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta http-equiv="refresh" content="0;url={target}" />
<link rel="canonical" href="{target}" />
<title>Redirecting…</title>
</head>
<body>
<p>Moved to <a href="{target}">{target}</a>.</p>
</body>
</html>
"""


def write_page(rel_dir: str, html: str, old_html_name=None):
    """Write clean URL folder index.html and optional legacy .html redirect."""
    out_dir = SITE / rel_dir
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "index.html").write_text(html)
    if old_html_name:
        parent = out_dir.parent if rel_dir != "." else SITE
        # For demo/ -> stub at demo.html; for solutions/aggregators/ -> stub at solutions/aggregators.html
        stub_path = SITE / old_html_name
        stub_path.parent.mkdir(parents=True, exist_ok=True)
        target = "/" + rel_dir.strip("/") + "/"
        if rel_dir in (".", ""):
            target = "/"
        stub_path.write_text(redirect_stub(target))


def build_index():
    # homepage source lives outside the deploy path (repo root index.html is the BUILT file)
    src_path = REPO / "preview" / "homepage.src.html"
    if not src_path.exists():
        src_path = REPO / "index.html"
    src = src_path.read_text()

    old_nav = """<nav style="{{ navStyle }}">
  <a href="#hero" style="display:flex;align-items:center;gap:10px;">
    <img src="assets/kwh-logo-mark.png?v=3" height="26" alt="kWh Electric" style="display:block;" />
  </a>
  <div data-nav-links="" style="display:flex;align-items:center;gap:26px;">
    <a href="#products" style="color:#0B0B0E;font-size:13.5px;font-weight:400;transition:opacity 0.15s;" style-hover="opacity:0.5">Products</a>
    <a href="#who" style="color:#0B0B0E;font-size:13.5px;font-weight:400;transition:opacity 0.15s;" style-hover="opacity:0.5">Who It's For</a>
    <a href="#contact" style="color:#0B0B0E;font-size:13.5px;font-weight:400;transition:opacity 0.15s;" style-hover="opacity:0.5">Get In Touch</a>
    <a href="https://portal.kwhelectric.io/" class="nav-login">Login</a>
  </div>
</nav>"""

    new_nav = nav_html(use_dc=True)
    if old_nav not in src:
        raise SystemExit("Could not find production nav block in index.html")
    src = src.replace(old_nav, new_nav)

    src = src.replace('href="/favicon.png"', 'href="favicon.png"')
    src = src.replace('src="assets/', 'src="assets/')
    src = src.replace('url(uploads/', 'url(uploads/')
    src = src.replace('src="uploads/', 'src="uploads/')

    nav_css_link = f'<link rel="stylesheet" href="_shared/nav.css?{VER}">'
    src = src.replace("</helmet>", f'  {nav_css_link}\n</helmet>', 1)

    nav_script = f'\n<script src="_shared/nav.js?{VER}"></script>'

    src = src.replace('<script src="./bees.js"></script>', f'<script src="./bees.js"></script>{nav_script}')

    (SITE / "index.html").write_text(src)
    print("Wrote index.html")


def page_shell(title, body, depth=0, form=False, scroll=False):
    p = "../" * depth
    extra = f'<link rel="stylesheet" href="{p}_shared/pages.css?{VER}" />'
    if scroll:
        extra += f'\n<link rel="stylesheet" href="{p}_shared/solution-scroll.css?{VER}" />'
    html = head(title, depth, extra)
    html += nav_html(scrolled_class="is-scrolled", depth=depth)
    html += body
    html += footer(depth=depth)
    html += tail(depth, form_script=form, scroll=scroll)
    return html


def build_demo():
    body = """
<div class="page-hero" style="padding-bottom:48px;">
  <div class="wrap">
    <h1>Book a Demo</h1>
    <p>Schedule a 30-minute walkthrough of the OEM Platform, Edge Gateway, or both.</p>
  </div>
</div>
<div class="demo-layout">
  <div class="demo-aside">
    <h2>What to expect</h2>
    <p>We will walk through your use case, show how kWh normalizes OEM data, and discuss integration paths for your team.</p>
    <ul>
      <li>Live product overview tailored to your buyer type</li>
      <li>Technical Q&amp;A on APIs, enrollment, and edge gateway options</li>
      <li>Next steps for a pilot or integration scoping call</li>
    </ul>
    <p style="margin-top:24px;font-size:14px;">Prefer email? <a href="mailto:arham@kwhelectric.io" style="color:var(--bronze);font-weight:600;">arham@kwhelectric.io</a></p>
  </div>
  <form class="demo-form" id="demo-form">
    <input type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px;opacity:0;" aria-hidden="true" />
    <div class="form-row">
      <div><label>First name <span class="req">*</span></label><input type="text" name="first_name" required /></div>
      <div><label>Last name <span class="req">*</span></label><input type="text" name="last_name" required /></div>
    </div>
    <label>Work email <span class="req">*</span></label>
    <input type="email" name="email" required />
    <label>Company</label>
    <input type="text" name="company" />
    <label>Role</label>
    <input type="text" name="role" />
    <label>I am a</label>
    <select name="buyer_type">
      <option value="">Select buyer type</option>
      <option>Aggregator / VPP operator</option>
      <option>OEM</option>
      <option>Financier</option>
      <option>Utility / Energy platform</option>
      <option>Other</option>
    </select>
    <label>Product interest</label>
    <select name="product_interest">
      <option value="">Select product</option>
      <option>OEM Platform</option>
      <option>Edge Gateway</option>
      <option>Both</option>
      <option>Not sure yet</option>
    </select>
    <label>Message</label>
    <textarea name="message" rows="4" placeholder="Tell us about your fleet, OEM stack, or use case."></textarea>
    <p id="demo-status"></p>
    <button class="btn-primary" type="submit">Request demo</button>
  </form>
</div>
"""
    write_page("demo", page_shell("Book a Demo | kWh Electric", body, depth=1, form=True), "demo.html")


def build_solutions_hub():
    body = """
<header class="page-hero">
  <div class="wrap">
    <h1>Solutions</h1>
    <p>kWh Electric provides OEM connectivity APIs and an Edge Gateway so aggregators, OEMs, financiers, and utilities can operate mixed fleets without rebuilding every integration.</p>
    <a class="btn-bronze" href="/demo/">Book a Demo</a>
  </div>
</header>
<section class="section cream-hex">
  <div class="wrap">
    <h2>Products</h2>
    <p class="lede">Two product lines that work together: cloud APIs for OEM normalization and an edge gateway for open-protocol connectivity.</p>
    <div class="product-grid">
      <a class="product-card" href="/solutions/oem-integration-platform/" style="text-decoration:none;color:inherit;">
        <h3><span class="num">1</span>OEM Platform</h3>
        <p>Unified API layer for batteries, thermostats, water heaters, and other connected devices. One canonical data model across OEM ecosystems.</p>
        <span class="link">Explore OEM Platform →</span>
      </a>
      <a class="product-card" href="/solutions/open-protocol-gateway/" style="text-decoration:none;color:inherit;">
        <h3><span class="num">2</span>Edge Gateway</h3>
        <p>Edge connectivity on open standards. Software license on existing hardware or a palm-sized physical gateway from kWh.</p>
        <span class="link">Explore Edge Gateway →</span>
      </a>
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <h2>Buyers</h2>
    <p class="lede">Built for the teams driving distributed energy programs across the US and Australia.</p>
    <div class="persona-grid">
      <div class="persona-card"><h3>Aggregators</h3><p>One API and one data model instead of N different OEM schemas. Launch programs faster across mixed fleets.</p><a class="link" href="/solutions/aggregators/">Learn more →</a></div>
      <div class="persona-card"><h3>OEMs</h3><p>Reach aggregators and platforms through a single onboarding path without building every downstream integration.</p><a class="link" href="/solutions/oems/">Learn more →</a></div>
      <div class="persona-card"><h3>Financiers</h3><p>Normalized telemetry and device state for portfolio monitoring, underwriting, and performance verification.</p><a class="link" href="/solutions/financiers/">Learn more →</a></div>
      <div class="persona-card"><h3>Utilities</h3><p>Behind-the-meter visibility, demand response hooks, and open standards at the edge.</p><a class="link" href="/solutions/utilities/">Learn more →</a></div>
    </div>
  </div>
</section>
<section class="cta-band">
  <h2>Ready to see <img src="/assets/kwh-logo-mark.png?v=3" alt="kWh" style="height:0.78em;vertical-align:-0.02em;display:inline-block;" /> in action?</h2>
  <p>Walk through OEM Platform, Edge Gateway, or both with the kWh team.</p>
  <a class="btn-primary" href="/demo/">Book a Demo</a>
</section>
"""
    write_page("solutions", page_shell("Solutions | kWh Electric", body, depth=1))
    (SITE / "solutions.html").write_text(redirect_stub("/solutions/"))


# ── Accent palette for scroll frames (rotates per step) ──
ACCENTS = ["#1F9C6B", "#CD7F32", "#2563EB", "#6D5AE6"]


def viz(title, inner):
    return f'<div class="viz"><div class="viz-title">{title}</div>{inner}</div>'


def sol_section(eyebrow, title, sub, steps):
    """steps: list of dict(label, title, desc, callout, viz)."""
    left, frames = [], []
    for i, s in enumerate(steps):
        accent = ACCENTS[i % len(ACCENTS)]
        callout = (
            f'<div class="sol-callout"><span class="i">i</span><span>{s["callout"]}</span></div>'
            if s.get("callout") else ""
        )
        active = " is-active" if i == 0 else ""
        left.append(f"""      <div class="sol-step" data-accent="{accent}" style="--step-accent:{accent}">
        <h3>{s['label']}: {s['title']}</h3>
        <p>{s['desc']}</p>
        {callout}
        <div class="sol-step-viz"><div class="sol-shell" style="--accent:{accent}"><div class="sol-frame is-active" style="--accent:{accent}">{s['viz']}</div></div></div>
      </div>""")
        frames.append(f'<div class="sol-frame{active}" style="--accent:{accent}">{s["viz"]}</div>')
    return f"""
<section class="sol">
  <div class="sol-head">
    <h2>{title}</h2>
    <p>{sub}</p>
  </div>
  <div class="sol-grid">
    <div class="sol-steps">
{''.join(left)}
    </div>
    <div class="sol-visual">
      <div class="sol-shell" style="--accent:{ACCENTS[0]}">
        {''.join(frames)}
      </div>
    </div>
  </div>
</section>"""


def persona_page(title, h1, summary, steps, why, related, scroll_h2="How It Works"):
    why_cards = "".join(
        f'<div class="persona-card"><h3>{w[0]}</h3><p>{w[1]}</p></div>' for w in why
    )
    logo = '<img src="/assets/kwh-logo-mark.png?v=3" alt="kWh" style="height:0.82em;vertical-align:-0.03em;display:inline-block;" />'
    body = f"""
<header class="page-hero">
  <div class="wrap">
    <h1>{h1}</h1>
    <p>{summary}</p>
    <a class="btn-bronze" href="/demo/">Book a Demo</a>
  </div>
</header>
{sol_section("How it works", scroll_h2, "One integration surface, from first connection to verified outcome.", steps)}
<section class="section">
  <div class="wrap">
    <h2>Why Teams Choose {logo}</h2>
    <div class="persona-grid">{why_cards}</div>
  </div>
</section>
<section class="section cream-hex" style="padding-top:0;">
  <div class="wrap">
    <div class="mode-card" style="max-width:660px;">
      <h3>{related[0]}</h3>
      <p>{related[1]}</p>
      <a href="{related[2]}" style="color:var(--bronze);font-weight:600;">Explore {related[0]} →</a>
    </div>
  </div>
</section>
<section class="cta-band">
  <h2>Talk to the <img src="/assets/kwh-logo-mark.png?v=3" alt="kWh" style="height:0.78em;vertical-align:-0.02em;display:inline-block;" /> team</h2>
  <p>Request a demo tailored to your use case and buyer segment.</p>
  <a class="btn-primary" href="/demo/">Book a Demo</a>
</section>
"""
    return page_shell(f"{title} | kWh Electric Solutions", body, depth=2, scroll=True)


def build_persona_pages():
    agg_steps = [
        {"label": "Step 1", "title": "Enroll devices", "callout": "One connector for every OEM, not one per manufacturer.",
         "desc": "Link an OEM account and kWh discovers every eligible device, assigns a canonical ID, and records what each one can do.",
         "viz": viz("Enroll devices", '<div class="viz-box tint"><div class="viz-row"><span class="viz-label">OEM cloud</span><span class="viz-chip solid">OAuth linked</span></div><div class="viz-row" style="margin-top:8px;"><span class="viz-strong">BESS · Inverter · EV charger</span></div></div><div class="viz-box"><div class="viz-row"><span class="viz-label">Devices discovered</span><span class="viz-xl">1,284</span></div><div class="viz-bar"><i style="width:100%"></i></div><div class="viz-row"><span class="viz-mini">Batteries 812</span><span class="viz-mini">EVSE 341</span><span class="viz-mini">Tstats 131</span></div></div><div class="viz-chips"><span class="viz-chip">canonical device_id</span><span class="viz-chip plain">capability: control</span></div>')},
        {"label": "Step 2", "title": "See the whole fleet", "callout": "One canonical data model across the entire fleet.",
         "desc": "Telemetry from every OEM lands in one schema, so a mixed fleet reads like a single system in real time.",
         "viz": viz("Fleet telemetry", '<div class="viz-box"><div class="viz-row"><span class="viz-label">Fleet state of charge</span><span class="viz-strong">63%</span></div><div class="viz-bar"><i style="width:63%"></i></div><div class="viz-split div"><div><span class="viz-mini">Online</span><div class="viz-strong">1,271 / 1,284</div></div><div><span class="viz-mini">Dispatchable</span><div class="viz-strong">4.9 MW</div></div></div></div><div class="viz-box"><div class="viz-row"><span><span class="viz-dot g"></span> Live telemetry</span><span class="viz-mini">updated 2s ago</span></div></div>')},
        {"label": "Step 3", "title": "Dispatch in canonical form", "callout": "kWh translates one command into each OEM's native API.",
         "desc": "Send one command against a canonical device. kWh converts it into each manufacturer's format and tracks execution state.",
         "viz": viz("Dispatch", '<pre class="viz-code"><span class="k">POST</span> /devices/dev_8f2c1a/commands\n{\n  <span class="k">"command_type"</span>: <span class="s">"set_charge_mode"</span>,\n  <span class="k">"parameters"</span>: { <span class="k">"mode"</span>: <span class="s">"backup_reserve"</span> }\n}</pre><div class="viz-box"><div class="viz-row"><span>Battery API</span><span class="viz-chip solid">acknowledged</span></div><div class="viz-row"><span>Inverter API</span><span class="viz-chip solid">acknowledged</span></div><div class="viz-row"><span>EVSE API</span><span class="viz-chip">pending</span></div></div>')},
        {"label": "Step 4", "title": "Verify and settle", "callout": "Logged response for settlements and program M&amp;V.",
         "desc": "Every dispatch is measured against target and logged, so program performance and settlement are provable.",
         "viz": viz("Event performance", '<div class="viz-box tint"><div class="viz-row"><span class="viz-label">Event · Peak shave</span><span class="viz-badge"><span class="tick">✓</span> Verified</span></div><div class="viz-row" style="margin-top:8px;"><span class="viz-xl">4.62 MW</span><span class="viz-mini">delivered vs 4.5 target</span></div></div><div class="viz-box"><div class="viz-row"><span>Devices responded</span><span class="viz-strong">1,240</span></div><div class="viz-row"><span>Settlement</span><span class="viz-strong">$18,420</span></div></div>')},
    ]
    oem_steps = [
        {"label": "Step 1", "title": "Connect your cloud", "callout": "Manufacturer-sanctioned APIs only.",
         "desc": "Connect your device cloud once. kWh detects your telemetry and control endpoints and confirms scopes.",
         "viz": viz("Connect your cloud", '<div class="viz-box tint"><div class="viz-row"><span class="viz-label">API credentials</span><span class="viz-chip solid">verified</span></div><div class="viz-row" style="margin-top:8px;"><span class="viz-strong">cloud.your-oem.com</span></div></div><div class="viz-box"><div class="viz-li"><span class="viz-ic">1</span><div><div class="viz-strong">Telemetry endpoint</div><span class="viz-mini">detected · 5 metrics</span></div></div><div class="viz-li"><span class="viz-ic">2</span><div><div class="viz-strong">Control endpoint</div><span class="viz-mini">detected · 3 commands</span></div></div></div>')},
        {"label": "Step 2", "title": "Map fields once", "callout": "Map once; every downstream app benefits.",
         "desc": "Your native fields map to the canonical model. Units, timestamps, and enums are normalized at ingestion.",
         "viz": viz("Field mapping", '<pre class="viz-code"><span class="m"># your schema        canonical</span>\nbattery_soc_pct   → <span class="s">state_of_charge</span>\ntstat_setpoint_f  → <span class="s">target_temperature</span>\ndev_uid           → <span class="s">oem_device_id</span></pre><div class="viz-chips"><span class="viz-chip">units normalized</span><span class="viz-chip">UTC timestamps</span><span class="viz-chip plain">enums mapped</span></div>')},
        {"label": "Step 3", "title": "Reach downstream apps", "callout": "New partners connect to kWh, not a new project.",
         "desc": "Once mapped, your devices are reachable by aggregators, utilities, and platforms through one connection.",
         "viz": viz("Connected apps", '<div class="viz-box"><div class="viz-row"><span class="viz-label">Connected via kWh</span><span class="viz-chip solid">4 live</span></div></div><div class="viz-box"><div class="viz-li"><span class="viz-dot g"></span> VPP operator · West</div><div class="viz-li"><span class="viz-dot g"></span> Utility DR program</div><div class="viz-li"><span class="viz-dot g"></span> Energy platform</div><div class="viz-li"><span class="viz-dot a"></span> Financier portfolio</div></div>')},
        {"label": "Step 4", "title": "Nothing is lost", "callout": "Fields with no canonical match are never dropped.",
         "desc": "OEM-specific fields are preserved under oem_extensions, so your unique data survives normalization.",
         "viz": viz("Preserved data", '<pre class="viz-code">{\n  <span class="k">"device_id"</span>: <span class="s">"dev_8f2c1a"</span>,\n  <span class="k">"target_temperature"</span>: 51.7,\n  <span class="k">"oem_extensions"</span>: {\n    <span class="k">"eco_mode"</span>: true\n  }\n}</pre><div class="viz-box tint"><div class="viz-row"><span>OEM-specific fields</span><span class="viz-badge"><span class="tick">✓</span> preserved</span></div></div>')},
    ]
    fin_steps = [
        {"label": "Step 1", "title": "Onboard the portfolio", "callout": "Backfill runs before real-time streams begin.",
         "desc": "Import the portfolio across OEMs and backfill history, so day one starts with a complete record.",
         "viz": viz("Portfolio import", '<div class="viz-box tint"><div class="viz-row"><span class="viz-label">Portfolio import</span><span class="viz-chip solid">backfill done</span></div><div class="viz-row" style="margin-top:8px;"><span class="viz-xl">3,410</span><span class="viz-mini">batteries · 6 OEMs</span></div></div><div class="viz-box"><div class="viz-row"><span>History ingested</span><span class="viz-strong">24 months</span></div><div class="viz-bar"><i style="width:100%"></i></div></div>')},
        {"label": "Step 2", "title": "Monitor fleet health", "callout": "Health normalized across every OEM.",
         "desc": "Uptime, faults, and connectivity are normalized into one health view across manufacturers.",
         "viz": viz("Fleet health", '<div class="viz-box"><div class="viz-row"><span class="viz-label">Fleet uptime</span><span class="viz-strong">98.7%</span></div><div class="viz-bar"><i style="width:98%"></i></div></div><div class="viz-box"><div class="viz-li"><span class="viz-dot g"></span> Healthy<span style="margin-left:auto" class="viz-strong">3,301</span></div><div class="viz-li"><span class="viz-dot a"></span> Degraded<span style="margin-left:auto" class="viz-strong">92</span></div><div class="viz-li"><span class="viz-dot r"></span> Offline<span style="margin-left:auto" class="viz-strong">17</span></div></div>')},
        {"label": "Step 3", "title": "Track performance", "callout": "Performance measured against modeled output.",
         "desc": "Compare actual throughput and yield to modeled expectations to validate deployments over time.",
         "viz": viz("Performance", '<div class="viz-box tint"><div class="viz-row"><span class="viz-label">Portfolio yield</span><span class="viz-badge"><span class="tick">✓</span> on target</span></div><div class="viz-row" style="margin-top:8px;"><span class="viz-xl">92%</span><span class="viz-mini">of modeled output</span></div></div><div class="viz-box"><div class="viz-row"><span>Throughput (MWh)</span><span class="viz-strong">1,284</span></div><div class="viz-row"><span>Avg cycles</span><span class="viz-strong">312</span></div></div>')},
        {"label": "Step 4", "title": "Underwrite with data", "callout": "The same schema your risk team can defend.",
         "desc": "Export normalized telemetry and a complete audit trail for underwriting and reporting.",
         "viz": viz("Data export", '<pre class="viz-code"><span class="k">GET</span> /devices/{id}/telemetry\n  ?metric=state_of_charge\n  &amp;since=2024-01-01</pre><div class="viz-box"><div class="viz-row"><span>Normalized schema</span><span class="viz-chip solid">CSV · JSON</span></div><div class="viz-row"><span>Audit log</span><span class="viz-chip">complete</span></div></div>')},
    ]
    util_steps = [
        {"label": "Step 1", "title": "See behind-the-meter", "callout": "One view across every DER class.",
         "desc": "Roll device telemetry up along grid topology so feeders, transformers, and sites are all visible.",
         "viz": viz("Grid visibility", '<div class="viz-box"><div class="viz-row"><span class="viz-label">Feeder F-001</span><span class="viz-strong">14 sites</span></div><div class="viz-bar"><i style="width:74%"></i></div><div class="viz-row"><span class="viz-mini">87% load</span><span class="viz-mini">Transformer T-102</span></div></div><div class="viz-box"><div class="viz-li"><span class="viz-dot g"></span> Battery · Powerwall<span style="margin-left:auto" class="viz-mini">charging</span></div><div class="viz-li"><span class="viz-dot g"></span> EV charger<span style="margin-left:auto" class="viz-mini">online</span></div><div class="viz-li"><span class="viz-dot g"></span> Thermostat<span style="margin-left:auto" class="viz-mini">synced</span></div></div>')},
        {"label": "Step 2", "title": "Run a DR program", "callout": "Enroll and schedule in one workflow.",
         "desc": "Enroll devices into a program and set the event window and recurrence without leaving the platform.",
         "viz": viz("Demand response", '<div class="viz-box tint"><div class="viz-row"><span class="viz-label">Summer Peak 2026</span><span class="viz-chip solid">enrolling</span></div><div class="viz-row" style="margin-top:8px;"><span class="viz-xl">2,140</span><span class="viz-mini">devices enrolled</span></div></div><div class="viz-box"><div class="viz-row"><span>Window</span><span class="viz-strong">4–7 PM</span></div><div class="viz-row"><span>Recurrence</span><span class="viz-strong">Weekdays</span></div></div>')},
        {"label": "Step 3", "title": "Dispatch on open standards", "callout": "Market signals delivered to devices at the edge.",
         "desc": "Issue an event once; the Open Protocol Gateway delivers it to every device at the site edge.",
         "viz": viz("Open-standard dispatch", '<pre class="viz-code"><span class="k">event</span>\nsignal: <span class="s">reduce &middot; level 1</span>\nduration: 180 min</pre><div class="viz-box"><div class="viz-row"><span>Gateway L1</span><span class="viz-chip solid">delivered</span></div><div class="viz-row"><span>Devices curtailing</span><span class="viz-strong">2,090</span></div></div>')},
        {"label": "Step 4", "title": "Verify response", "callout": "Verifiable M&amp;V from the data used to dispatch.",
         "desc": "Measure shed against target and generate M&amp;V-ready reports from the same data used to act.",
         "viz": viz("Verification", '<div class="viz-box tint"><div class="viz-row"><span class="viz-label">Event result</span><span class="viz-badge"><span class="tick">✓</span> settled</span></div><div class="viz-row" style="margin-top:8px;"><span class="viz-xl">6.1 MW</span><span class="viz-mini">shed vs 5.8 target</span></div></div><div class="viz-box"><div class="viz-row"><span>Report</span><span class="viz-chip">M&amp;V ready</span></div></div>')},
    ]

    pages = {
        "aggregators": (
            "aggregators.html",
            persona_page(
                "Aggregators",
                "Fleet Programs",
                "Aggregators and VPP operators need one integration surface to enroll devices, ingest telemetry, and dispatch across manufacturers without maintaining N OEM connectors.",
                agg_steps,
                [
                    ("One API", "Connect batteries, thermostats, EV chargers, and more through a canonical data model."),
                    ("Faster Enrollment", "OAuth-based device linking and normalized enrollment state across OEMs."),
                    ("Dispatch", "Issue control commands in canonical form; kWh translates to OEM-specific calls."),
                    ("Verify", "Logged response data for program performance and settlements."),
                ],
                ("OEM Platform", "Cloud APIs for multi-OEM connectivity and normalization.", "/solutions/oem-integration-platform/"),
                scroll_h2="Fleet Control",
            ),
        ),
        "oems": (
            "oems.html",
            persona_page(
                "OEMs",
                "OEM Reach",
                "Device manufacturers expose telemetry and control through proprietary clouds. kWh gives OEMs a single path to reach aggregators, utilities, and energy platforms.",
                oem_steps,
                [
                    ("Downstream Reach", "One integration mapping layer instead of bespoke connectors per partner."),
                    ("Preserve Data", "Fields without a canonical equivalent are kept in oem_extensions."),
                    ("Edge Option", "Pair cloud APIs with the Edge Gateway for site-level open standards."),
                    ("Faster Onboarding", "New downstream applications connect to kWh, not a new OEM project each time."),
                ],
                ("Edge Gateway", "Software license or palm-sized hardware for edge protocol translation.", "/solutions/open-protocol-gateway/"),
                scroll_h2="OEM Path",
            ),
        ),
        "financiers": (
            "financiers.html",
            persona_page(
                "Financiers",
                "Portfolio Data",
                "BESS financiers and asset owners need reliable telemetry, device health, and performance data to monitor portfolios and underwrite new deployments.",
                fin_steps,
                [
                    ("Telemetry", "State of charge, power, and alerts in a consistent schema across OEMs."),
                    ("Device Identity", "Stable canonical device IDs mapped to OEM-native identifiers."),
                    ("Health Events", "Connectivity, fault, and diagnostic events normalized where OEMs expose them."),
                    ("Backfill", "Batch ingestion for portfolio onboarding before real-time streams begin."),
                ],
                ("OEM Platform", "Canonical APIs for telemetry, events, and device metadata.", "/solutions/oem-integration-platform/"),
                scroll_h2="Portfolio View",
            ),
        ),
        "utilities": (
            "utilities.html",
            persona_page(
                "Utilities",
                "Grid Visibility",
                "Utilities and energy platforms need to see distributed assets, run demand response programs, and coordinate flexible capacity without rip and replace.",
                util_steps,
                [
                    ("Fleet Visibility", "One view across batteries, thermostats, water heaters, and other DERs."),
                    ("Edge Standards", "Market-side standards handled by the Edge Gateway, so you don't build them."),
                    ("Program Dispatch", "Enroll, dispatch, and verify device response through one workflow."),
                    ("Platform Interop", "Use kWh as the OEM connectivity layer under your own DERMS or VPP UX."),
                ],
                ("Edge Gateway", "Edge gateway for open-protocol programs and local asset connectivity.", "/solutions/open-protocol-gateway/"),
                scroll_h2="Grid Control",
            ),
        ),
    }
    for slug, (old_name, html) in pages.items():
        write_page(f"solutions/{slug}", html, f"solutions/{old_name}")
    print(f"Wrote {len(pages)} persona pages")


def product_oem():
    body = """
<header class="page-hero">
  <div class="wrap">
    <h1>OEM Platform</h1>
    <p>A unified integration and normalization layer between OEM device ecosystems and downstream applications. Batteries, thermostats, water heaters, and more in one consistent data and control interface.</p>
    <a class="btn-bronze" href="/demo/">Book a Demo</a>
  </div>
</header>
<section class="section cream-hex">
  <div class="wrap two-col">
    <div>
      <h2>The Problem</h2>
      <p class="lede">Every OEM exposes different APIs, auth schemes, units, and event semantics. Teams building on multiple device categories end up re-solving the same integration problem for every manufacturer.</p>
      <h2>The Solution</h2>
      <p class="lede">kWh maps OEM-specific schemas into a canonical data model. Applications interact with one API and one schema, not N OEM dialects.</p>
    </div>
    <div>
      <h2>Capabilities</h2>
      <ul class="feature-list">
        <li><span class="dot"></span><div><strong>REST APIs</strong><br><span style="color:var(--muted);font-size:14px;">Enrollment, reads, control commands, and historical queries.</span></div></li>
        <li><span class="dot"></span><div><strong>Event streams &amp; webhooks</strong><br><span style="color:var(--muted);font-size:14px;">Near-real-time telemetry and state-change events at scale.</span></div></li>
        <li><span class="dot"></span><div><strong>Canonical data model</strong><br><span style="color:var(--muted);font-size:14px;">Devices, telemetry, events, enrollment, and command state.</span></div></li>
        <li><span class="dot"></span><div><strong>OEM mapping layer</strong><br><span style="color:var(--muted);font-size:14px;">Units, timestamps, and enums normalized at ingestion.</span></div></li>
      </ul>
      <p style="margin-top:20px;"><a href="/docs/oem-integration-platform/" style="color:var(--bronze);font-weight:600;">Read technical overview →</a></p>
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <h2>Buyers</h2>
    <div class="persona-grid">
      <div class="persona-card"><h3>Aggregators</h3><p>Unified fleet dispatch without per-OEM engineering backlog.</p></div>
      <div class="persona-card"><h3>OEMs</h3><p>Single path for downstream apps to connect to your devices.</p></div>
      <div class="persona-card"><h3>Financiers</h3><p>Portfolio telemetry and device health in one schema.</p></div>
      <div class="persona-card"><h3>Utilities</h3><p>OEM connectivity substrate under your own product experience.</p></div>
    </div>
  </div>
</section>
<section class="cta-band">
  <h2>See the OEM Platform</h2>
  <p>Request a technical walkthrough or read the full technical overview in our docs.</p>
  <a class="btn-primary" href="/demo/" style="margin-right:12px;">Book a Demo</a>
  <a class="btn-primary" href="/docs/oem-integration-platform/" style="background:var(--dark-warm);">Technical docs</a>
</section>
"""
    steps = [
        {"label": "Step 1", "title": "Connect any OEM", "callout": "One OAuth connection per OEM, then every device.",
         "desc": "Link an OEM cloud and kWh enumerates devices, assigns canonical IDs, and records capabilities.",
         "viz": viz("Enroll devices", '<div class="viz-box tint"><div class="viz-row"><span class="viz-label">OEM cloud</span><span class="viz-chip solid">OAuth linked</span></div><div class="viz-row" style="margin-top:8px;"><span class="viz-strong">BESS · Inverter · EV charger</span></div></div><div class="viz-box"><div class="viz-row"><span class="viz-label">Devices discovered</span><span class="viz-xl">1,284</span></div><div class="viz-bar"><i style="width:100%"></i></div></div><div class="viz-chips"><span class="viz-chip">canonical device_id</span><span class="viz-chip plain">capabilities</span></div>')},
        {"label": "Step 2", "title": "Normalize to one model", "callout": "Units, timestamps, and enums normalized at ingestion.",
         "desc": "OEM-specific schemas are mapped into a single canonical data model for devices, telemetry, and events.",
         "viz": viz("Field mapping", '<pre class="viz-code"><span class="m"># oem schema         canonical</span>\nbattery_soc_pct   → <span class="s">state_of_charge</span>\npower_w           → <span class="s">active_power</span>\ndev_uid           → <span class="s">oem_device_id</span></pre><div class="viz-chips"><span class="viz-chip">units</span><span class="viz-chip">UTC</span><span class="viz-chip plain">enums</span></div>')},
        {"label": "Step 3", "title": "Read, stream, and control", "callout": "One REST API, one webhook stream, one command schema.",
         "desc": "Applications query reads, subscribe to event streams, and issue canonical commands through one interface.",
         "viz": viz("Canonical command", '<pre class="viz-code"><span class="k">POST</span> /devices/dev_8f2c1a/commands\n{ <span class="k">"command_type"</span>: <span class="s">"set_charge_mode"</span> }</pre><div class="viz-box"><div class="viz-row"><span>Translated to OEM API</span><span class="viz-chip solid">acknowledged</span></div><div class="viz-row"><span>Webhook stream</span><span class="viz-chip">live</span></div></div>')},
        {"label": "Step 4", "title": "Preserve everything", "callout": "Fields with no canonical match live in oem_extensions.",
         "desc": "Nothing is dropped. OEM-specific fields are preserved so no fidelity is lost through normalization.",
         "viz": viz("Preserved data", '<pre class="viz-code">{\n  <span class="k">"device_id"</span>: <span class="s">"dev_8f2c1a"</span>,\n  <span class="k">"state_of_charge"</span>: 63,\n  <span class="k">"oem_extensions"</span>: { <span class="k">"eco_mode"</span>: true }\n}</pre><div class="viz-box tint"><div class="viz-row"><span>OEM-specific fields</span><span class="viz-badge"><span class="tick">✓</span> preserved</span></div></div>')},
    ]
    body = body.replace("</header>", "</header>" + sol_section("How it works", "One API", "Connect, normalize, and control a mixed device fleet through a single integration surface.", steps), 1)
    return page_shell("OEM Platform | kWh Electric", body, depth=2, scroll=True)


def product_gateway():
    body = """
<header class="page-hero">
  <div class="wrap">
    <h1>Edge Gateway</h1>
    <p>Protocol translation and local connectivity delivered as a software license on existing hardware, or as a palm-sized physical gateway from kWh.</p>
    <a class="btn-bronze" href="/demo/">Book a Demo</a>
  </div>
</header>
<section class="section cream-hex">
  <div class="wrap">
    <h2>Two Modes</h2>
    <p class="lede">Same protocol stack and policy model. Choose the form factor that fits your deployment.</p>
    <div class="two-col">
      <div class="mode-card">
        <p style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--bronze);margin:0 0 12px;">Mode A · Software</p>
        <h3>License on existing devices</h3>
        <p>Install the Edge Gateway runtime on compatible edge hardware or OEM controllers already in the field.</p>
      </div>
      <div class="mode-card">
        <p style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--bronze);margin:0 0 12px;">Mode B · Hardware</p>
        <h3>Palm-sized kWh gateway</h3>
        <p>A compact physical device for sites that need a dedicated, offline-ready edge node connected locally to assets.</p>
      </div>
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap two-col">
    <div>
      <h2>What It Handles</h2>
      <ul class="feature-list">
        <li><span class="dot"></span><div><strong>Market-side standards</strong><br><span style="color:var(--muted);font-size:14px;">Utility and program interoperability, handled for you.</span></div></li>
        <li><span class="dot"></span><div><strong>Every device dialect</strong><br><span style="color:var(--muted);font-size:14px;">Manufacturer protocols normalized locally at the edge.</span></div></li>
        <li><span class="dot"></span><div><strong>Offline-ready control</strong><br><span style="color:var(--muted);font-size:14px;">Local policy execution when cloud links are unavailable.</span></div></li>
        <li><span class="dot"></span><div><strong>Cloud pairing</strong><br><span style="color:var(--muted);font-size:14px;">Works with the OEM Platform and kWh cloud orchestration.</span></div></li>
      </ul>
    </div>
    <div>
      <h2>Buyers</h2>
      <div class="persona-card" style="margin-bottom:12px;"><h3>OEMs</h3><p>Ship interoperable, program-ready hardware with software or kWh gateway attach.</p></div>
      <div class="persona-card" style="margin-bottom:12px;"><h3>Utilities</h3><p>Edge node for demand response and open-protocol programs.</p></div>
      <div class="persona-card"><h3>Integrators</h3><p>Field deployments needing local protocol bridge without custom firmware.</p></div>
    </div>
  </div>
</section>
<section class="cta-band">
  <h2>Demo the Edge Gateway</h2>
  <p>Tell us whether you need a software license, hardware unit, or both.</p>
  <a class="btn-primary" href="/demo/">Book a Demo</a>
</section>
"""
    steps = [
        {"label": "Step 1", "title": "Choose a delivery mode", "callout": "Same stack as software or a palm-sized kWh device.",
         "desc": "Deploy the gateway runtime as a license on existing edge hardware, or as a dedicated kWh gateway unit.",
         "viz": viz("Delivery mode", '<div class="viz-box tint"><div class="viz-row"><span class="viz-label">Mode A · Software</span><span class="viz-chip solid">selected</span></div><div class="viz-row" style="margin-top:8px;"><span class="viz-strong">License on existing device</span></div></div><div class="viz-box"><div class="viz-row"><span class="viz-label">Mode B · Hardware</span><span class="viz-chip plain">available</span></div><div class="viz-row" style="margin-top:8px;"><span class="viz-strong">Palm-sized kWh gateway</span></div></div>')},
        {"label": "Step 2", "title": "Commission the site", "callout": "Local discovery of assets over native protocols.",
         "desc": "The gateway discovers local assets and registers them, bridging site hardware to the kWh cloud.",
         "viz": viz("Commissioning", '<div class="viz-box"><div class="viz-li"><span class="viz-dot g"></span> Battery<span style="margin-left:auto" class="viz-mini">found</span></div><div class="viz-li"><span class="viz-dot g"></span> EV charger<span style="margin-left:auto" class="viz-mini">found</span></div><div class="viz-li"><span class="viz-dot g"></span> Inverter<span style="margin-left:auto" class="viz-mini">found</span></div></div><div class="viz-box tint"><div class="viz-row"><span>Registered to cloud</span><span class="viz-chip solid">paired</span></div></div>')},
        {"label": "Step 3", "title": "Translate both ways", "callout": "Market standards ↔ device dialects, at the edge.",
         "desc": "Market-side signals are translated into each device's native language, and telemetry back into one canonical form.",
         "viz": viz("Translation", '<pre class="viz-code"><span class="k">market event</span>\n  → <span class="s">device command</span>\n  → <span class="s">acknowledged</span></pre><div class="viz-box"><div class="viz-row"><span>Market side</span><span class="viz-chip solid">one standard</span></div><div class="viz-row"><span>Device side</span><span class="viz-chip">every dialect</span></div></div>')},
        {"label": "Step 4", "title": "Operate, even offline", "callout": "Local policy runs when the cloud link drops.",
         "desc": "Policies execute locally so programs keep running through connectivity gaps, then resync when back online.",
         "viz": viz("Edge operation", '<div class="viz-box tint"><div class="viz-row"><span class="viz-label">Cloud link</span><span class="viz-chip">offline</span></div><div class="viz-row" style="margin-top:8px;"><span class="viz-badge"><span class="tick">✓</span> local policy active</span></div></div><div class="viz-box"><div class="viz-row"><span>Buffered events</span><span class="viz-strong">142</span></div><div class="viz-row"><span>Resync on reconnect</span><span class="viz-chip solid">ready</span></div></div>')},
    ]
    body = body.replace("</header>", "</header>" + sol_section("How it works", "Edge Control", "One protocol stack from commissioning to offline-ready operation, as software or hardware.", steps), 1)
    return page_shell("Edge Gateway | kWh Electric", body, depth=2, scroll=True)


def build_products():
    write_page(
        "solutions/oem-integration-platform",
        product_oem(),
        "solutions/oem-integration-platform.html",
    )
    write_page(
        "solutions/open-protocol-gateway",
        product_gateway(),
        "solutions/open-protocol-gateway.html",
    )


def fix_docs():
    docs = SITE / "docs"
    src_docs = REPO / "preview" / "docs"
    guide_dir = docs / "oem-integration-platform"
    guide_dir.mkdir(parents=True, exist_ok=True)

    for name in ["docs.css", "docs.js"]:
        src = src_docs / name
        if src.exists():
            shutil.copy2(src, docs / name)

    src_guide = src_docs / "oem-integration-platform.html"
    if not src_guide.exists():
        return

    text = src_guide.read_text()
    # Normalize any remaining relative/legacy refs to absolute clean URLs.
    text = text.replace('href="../favicon.png"', 'href="/favicon.png"')
    text = text.replace('src="../assets/', 'src="/assets/')
    text = text.replace('href="docs.css"', 'href="/docs/docs.css"')
    text = text.replace('src="docs.js"', 'src="/docs/docs.js"')
    text = text.replace('href="index.html"', 'href="/"')
    # Hash forms first so bare replace cannot break #fragments.
    text = text.replace(
        'href="oem-integration-platform.html#',
        'href="/docs/oem-integration-platform/#',
    )
    text = text.replace(
        'href="oem-integration-platform.html"',
        'href="/docs/oem-integration-platform/"',
    )
    if 'src="/docs/docs.js"' not in text and 'src="docs.js"' not in text:
        # script tag at end may already be absolute
        pass
    text = text.replace('src="./docs.js"', 'src="/docs/docs.js"')
    # Strip any leftover same-folder *.html hrefs pointing at legacy names.
    for old, new in [
        ("docs/oem-integration-platform.html", "/docs/oem-integration-platform/"),
        ("../docs/oem-integration-platform.html", "/docs/oem-integration-platform/"),
        ("../demo.html", "/demo/"),
        ("demo.html", "/demo/"),
    ]:
        text = text.replace(f'href="{old}"', f'href="{new}"')
        text = text.replace(f"href='{old}'", f"href='{new}'")

    (guide_dir / "index.html").write_text(text)
    (docs / "oem-integration-platform.html").write_text(redirect_stub("/docs/oem-integration-platform/"))
    (docs / "index.html").write_text(redirect_stub("/docs/oem-integration-platform/"))
    print("Wrote docs/oem-integration-platform/")


def copy_shared():
    src = REPO / "_shared"
    dest = SITE / "_shared"
    dest.mkdir(parents=True, exist_ok=True)
    for name in [
        "brand.css",
        "nav.css",
        "nav.js",
        "pages.css",
        "solution-scroll.css",
        "solution-scroll.js",
        "demo-form.js",
    ]:
        f = src / name
        if f.exists():
            shutil.copy2(f, dest / name)


def write_demo_form():
    (SITE / "_shared" / "demo-form.js").write_text("""const WEB3FORMS_ACCESS_KEY = 'e06d54ca-4593-4bf6-b1d4-2b6c9cf99460';

document.getElementById('demo-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('demo-status');
  const btn = form.querySelector('button[type="submit"]');
  const data = new FormData(form);

  const firstName = (data.get('first_name') || '').toString().trim();
  const lastName = (data.get('last_name') || '').toString().trim();
  const email = (data.get('email') || '').toString().trim();

  if (!firstName || !lastName || !email) {
    status.textContent = 'Please fill in all required fields.';
    status.className = 'error';
    return;
  }

  btn.disabled = true;
  status.textContent = 'Sending...';
  status.className = '';

  const messageParts = [
    data.get('message') || '',
    data.get('company') ? `Company: ${data.get('company')}` : '',
    data.get('role') ? `Role: ${data.get('role')}` : '',
    data.get('buyer_type') ? `Buyer type: ${data.get('buyer_type')}` : '',
    data.get('product_interest') ? `Product: ${data.get('product_interest')}` : '',
  ].filter(Boolean).join('\\n\\n');

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: 'Demo request from kWh preview site',
        from_name: `${firstName} ${lastName}`.trim(),
        email,
        message: messageParts || '(no message)',
        botcheck: data.get('botcheck') || '',
      }),
    });
    const json = await res.json();
    if (res.ok && json.success) {
      status.textContent = 'Thank you. We will be in touch shortly to schedule your demo.';
      status.className = 'success';
      form.reset();
    } else {
      status.textContent = json.message || 'Something went wrong. Please email arham@kwhelectric.io.';
      status.className = 'error';
    }
  } catch {
    status.textContent = 'Network error. Please try again or email arham@kwhelectric.io.';
    status.className = 'error';
  }
  btn.disabled = false;
});
""")


def main():
    copy_shared()
    write_demo_form()
    build_index()
    build_demo()
    build_solutions_hub()
    build_persona_pages()
    build_products()
    fix_docs()
    print("Site build complete.")


if __name__ == "__main__":
    main()
