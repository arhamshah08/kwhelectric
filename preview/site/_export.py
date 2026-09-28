#!/usr/bin/env python3
"""Bundle a solution page into ONE self-contained HTML file for Claude Design.
Inlines all CSS + JS, embeds the kWh logo as a data URI, swaps the hero image
for a lightweight gradient, and strips preview-only chrome. Output is portable
and can be pasted into any design tool."""
import base64
import re
from pathlib import Path

S = Path(__file__).resolve().parent
SRC_PAGE = S / "solutions" / "aggregators.html"
OUT = S / "kwh-solutions-standalone.html"

html = SRC_PAGE.read_text()

css = "\n\n".join(
    (S / "_shared" / f).read_text()
    for f in ["brand.css", "nav.css", "pages.css", "solution-scroll.css"]
)
js = "\n\n".join((S / "_shared" / f).read_text() for f in ["nav.js", "solution-scroll.js"])


def datauri(p: Path) -> str:
    return "data:image/png;base64," + base64.b64encode(p.read_bytes()).decode()


light = datauri(S / "assets" / "kwh-logo-mark-light.png")
dark = datauri(S / "assets" / "kwh-logo-mark.png")

# Hero image -> portable gradient (keeps the file small and dependency-free)
css = css.replace(
    "url(../uploads/hero-bg.webp) center/cover no-repeat",
    "radial-gradient(120% 120% at 82% 0%, rgba(205,127,50,0.30), transparent 60%),"
    " radial-gradient(90% 90% at 0% 100%, rgba(205,127,50,0.14), transparent 55%)",
)

# Strip external stylesheet/link tags (keep the Google Fonts link for DM Sans)
html = re.sub(r'\s*<link rel="preconnect"[^>]*>', "", html)
html = re.sub(r'\s*<link rel="stylesheet" href="[^"]*(brand|nav|pages|solution-scroll)\.css"[^>]*>', "", html)
html = re.sub(r'\s*<link rel="icon"[^>]*>', "", html)

# Inline the stylesheet
html = html.replace("</head>", f"<style>\n{css}\n</style>\n</head>")

# Remove external scripts + preview banner, then inline the JS
html = re.sub(r'\s*<script src="[^"]*(nav|solution-scroll)\.js"></script>', "", html)
html = re.sub(r'<div class="preview-banner">.*?</div>', "", html, flags=re.S)
html = html.replace("</body>", f"<script>\n{js}\n</script>\n</body>")

# Embed the logo
html = html.replace("../assets/kwh-logo-mark-light.png", light)
html = html.replace("../assets/kwh-logo-mark.png", dark)

OUT.write_text(html)
print(f"Wrote {OUT.name} ({len(html) // 1024} KB)")
