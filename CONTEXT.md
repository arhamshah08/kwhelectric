# kWh Electric — Product/Site

## Status

Active. Live static site at repo root (GitHub Pages / kwhelectric.io). Latest deploy: typography
+10px, short 1–3 word section titles (incl. **The Universal Communication Pane**), and clean
folder URLs (`/solutions/oem-integration-platform/`, `/demo/`, `/docs/oem-integration-platform/`)
with `.html` redirect stubs. Pushed to `origin/main` for Pages.

## Last meaningful work

7 September 2026 (typography, titles, clean URLs — pushed to origin/main) —
  - Fonts: +~10px on readable UI in `preview/homepage.src.html` and `_shared/{pages,nav,solution-scroll,brand}.css`. Build cache `VER=v9`.
  - Titles: homepage OEM → **The Universal Communication Pane**; gateway → **Edge Gateway**; who → **Buyers** + short card labels; solutions hub/product/persona H1s shortened (OEM Platform, Fleet Programs, OEM Reach, Portfolio Data, Grid Visibility); scroll H2s → One API / Edge Control style; mega-menu titles shortened.
  - Clean URLs: `_build_site.py` emits `demo/`, `solutions/*/`, `docs/oem-integration-platform/` as `index.html` folders; nav/footer/CTAs use absolute extensionless paths; legacy `*.html` stubs redirect.
  - Rebuild synced to repo root: `index.html`, `demo/`, `demo.html`, `solutions/`, `solutions.html`, `docs/`, `_shared/`.
  - Workflow: edit `preview/homepage.src.html` + `_build_site.py` + `_shared/`, run `python3 preview/site/_build_site.py`, then
    `cp preview/site/index.html . && cp preview/site/{demo,solutions}.html . && rm -rf demo solutions docs _shared && cp -R preview/site/{demo,solutions,docs,_shared} .`

3 September 2026 (homepage restructure + logo swap — LOCAL ONLY, not deployed) — Reworked
`~/kwhelectric/index.html` per Arham. NOT pushed; GitHub Pages (`arhamshah08/kwhelectric`
branch `main`) still serves the old live homepage. Test at http://localhost:4321 via
`preview/site/serve.sh` (rebuilds from `_build_site.py`, then serves; `serve.sh stop` kills).
Changes:
  1. LOGO: the gold hexagon-lightning badge is BANNED forever (Arham, 3×). New canonical
     logo = `~/Downloads/kWh_black.jpg` (the "kWh" wordmark). Regenerated
     `assets/kwh-logo-mark.png` (black, transparent) + `kwh-logo-mark-light.png` (white)
     from it via scratchpad `make_logo.py` (PIL trim+recolor), 286×120, `?v=2` cache-bust on
     all refs. Same files dropped in `preview/site/assets/`. See memory
     `reference_kwh_brand_tokens`.
  2. HOMEPAGE sections: removed "Hardware-enabled software infrastructure" (Edge Gateway/
     Protocol Translation/Cloud-Based) and "Five layers from physical device to AI operation"
     (L1–L5). New order: Hero → How it works (kept) → **Product 1: OEM Integration Platform**
     (`#products`, cream, cards Connectivity/Normalization/Dispatch/Reach/Telemetry) →
     **Product 2: Open Protocol Gateway** (`#product-gateway`, dark, Two modes/Protocols/
     Resilience/Coverage) → **Who it's for** (`#who`, moved into the old 5-layer slot, dark
     honeycomb bg) → Contact → **new full footer** (logo + Solutions/Who it's for/Resources/
     Company columns + "© 2026 kWh Electric"). Content lifted from `web/src/app/page.tsx`
     (the localhost:3000 Next.js rebuild).
  3. TYPOGRAPHY per Arham's locked rules: single large title per section (no tiny eyebrow),
     card = one-word `<h3>` + one description `<p>` (no eyebrow, no small/large/small stack),
     every box `border-radius: var(--box-radius)` = 2px.
  4. Nav: homepage links now Problem/How It Works/Products/Who It's For/Get In Touch
     (`#architecture` link retired). `_build_site.py` `old_nav` updated to match. Removed the
     floating "kWh Electric | Solutions" preview banner from every preview page. Preview
     mega-menu (`_shared/nav.css` `.kwh-mega`) darkened + white titles for contrast.
  5. `_build_site.py` subpage `footer()` also rebuilt to match (added "Who it's for" column).
3 September 2026 (round 2 — rich cards + subpage/docs cleanup, still LOCAL) —
  - Deleted the "How it works" hex section (Connect/Normalize/Dispatch/Verify hexagons) from
    the homepage entirely. Removed the "How It Works" nav link (index.html + `_build_site.py`
    old_nav in sync).
  - **Product 1 & Product 2 are now rich cards** (graphic panel + single-word title +
    description), ported from `web/src/components/kwh-graphics.tsx`. Product 1 = 4 cards
    **Connect / Normalize / Dispatch / Verify** (hub diagram, schema-map code panel, native-API
    fan, dispatch log). Product 2 = Two modes / Protocols / Resilience / Coverage. New CSS
    atoms `.kg-*` in index.html `<style>`.
  - **Dark cards are now solid black (#000) with white text** (Product 2 + Who it's for);
    light cards stay white with black text. Rule per Arham: white box→black text, black
    box→white text.
  - Subpages (`_build_site.py`): removed the `Solutions / X` breadcrumb and the `Product` /
    `Solutions` hero eyebrows from all product + persona + hub + demo pages; removed the
    `sol_section` eyebrow. `.sol-step min-height 82vh→46vh` (tighter step spacing).
    cta-band "kWh" text → inline wordmark image ("Ready to see [kWh] in action?", "Talk to
    the [kWh] team").
  - Docs page (`preview/docs/oem-integration-platform.html` + `docs.css`): logo → wordmark,
    dropped `<span>electric</span>`, removed the "localhost preview / Preview hub" pill,
    `.brand img` height 28→22.
  - Preview nav: "Book a Demo" and "Sign In" are now plain links matching the others (no
    bronze pill, no divider). Mega-menu darkened (#14100a) with white titles for contrast.
  - Bumped `_build_site.py` `VER` v4→v5 so cached shared CSS/JS reloads.

3 September 2026 (round 3 — theme/nav/logo/button pass, still LOCAL) —
  - White logo: `~/kwhelectric/kWh_white.png` is now the canonical white wordmark (memory
    updated). `make_logo.py` builds `kwh-logo-mark-light.png` from it and `kwh-logo-mark.png`
    from `~/Downloads/kWh_black.jpg`. Cache-bust `?v=3`.
  - **Nav / title bar is now opaque `#FFFBF0` from the top** (not transparent), dark text +
    dark wordmark always, no scroll colour swap. Homepage `navStyle` in the DC script +
    `_shared/nav.css` `.kwh-nav`; `nav_html` no longer emits the sc-if light/dark logo
    toggle; `old_nav` in `build_index` updated to match.
  - **Product 2 (Open Protocol Gateway) is no longer a black section** — now `kwh-prod--light`
    on `#FFFFFF`, white cards / black text, dark-pill kWh nodes with white logo. `#who` stays
    the only dark section (+ footer).
  - **All Book-a-Demo buttons unified** = bronze pill, cream text, 11px/0.14em uppercase
    (`.kwh-prod-cta`, `.btn-bronze`, `.btn-primary` in `preview/_shared/brand.css` +
    index.html). Nav "Book a Demo" stays a plain link.
  - Product 1 "Dispatch" card pills: "Tesla/Enphase/SolarEdge API" → "BESS / Inverter /
    EV Charger". Same company-name swap in the subpage `sol_section` vizes.
  - "kWh" typed in headings → inline wordmark image ("kWh for {persona}", "Why teams choose
    kWh"). Body-copy "kWh" left as text for now.
  - Subpage `.cream-hex` honeycomb ::before texture removed (plain cream). "Related product"
    eyebrow removed. `_build_site.py` VER v5→v6.

3 September 2026 (round 4 — subpage step layout, still LOCAL) —
  - **Step headings are one line now:** `Step 1: Enroll devices` (was tiny "STEP 1" label +
    big title + body). Rule committed to `reference_kwh_brand_tokens` — never the
    tiny-label/big-title/medium-body stack. `sol_section` in `_build_site.py` folds
    `s['label']` into the `<h3>`; `.sol-step .step-label { display:none }`.
  - Subpage sticky visual panel (`.sol-visual`/`.sol-shell`): `min(78vh,640px)` → `min(52vh,
    420px)`, radius 26px→2px, padding 30→18, tint 12%→7%. `.sol-head` bottom margin 8px→52px
    for breathing room above the grid.
  - Homepage `.kwh-prod-fig` 172px→150px, `.kwh-prod-h` bottom margin 40→48. VER v6→v7.

3 September 2026 (round 5 — de-box, 2-layer rule, deploy prep, still LOCAL) —
  - **New hard rule in memory:** max 2 text layers per block (title + text; number may sit in
    the title, optionally in a circle). No nested boxes. Black wordmark bare on light bg.
  - Homepage products fully reworked: no figure box / no card-in-card, flat graphics, **black
    wordmark with no pill**, section titles use full width (removed `max-width:20ch`), and the
    **"Book a Demo" buttons are removed from both product sections** (contact form is the CTA).
  - **Product 2 is a bento now:** "Protocols" is a full-width feature card (diagram + copy
    side by side); Two modes / Resilience / Coverage in a 3-col row. "Two modes" is a plain
    Software|Hardware split, no sub-boxes.
  - **"Who it's for" cards are cream `#FFFBF0` with black text** on the dark honeycomb band
    (were black boxes).
  - Nav mega-menu (`.kwh-mega`) → light `#FFFBF0` box, black titles, 2px radius.
  - `solutions/index.html` product cards: "Product 01/02" eyebrow → number in a bronze circle
    inside the h3 (`.product-card h3 .num`). VER v7→v8. Logo assets rebuilt from
    `~/Downloads/kWh_black.jpg` + `~/kwhelectric/kWh_white.png`, cache `?v=3`.

**LIVE on kwhelectric.io — FULL multi-page site deployed 2026-09-03.** Commits:
  - `76ac60d` — homepage redesign (single-page, simple nav)
  - `93433a5` — full site: `index.html` (full nav: Home / Solutions▾ / Guide / Book a Demo /
    Sign In), `solutions/` (hub + 2 product pages + 4 persona pages), `docs/` (technical
    guide), `demo.html`, `_shared/` (nav/brand/pages/solution-scroll CSS+JS). Warmer card
    fill `#FFF6E4`, "One shared language" protocol section (no jargon anywhere).
  - `7c30c8e` — **`.nojekyll`** (GitHub Pages/Jekyll was 404-ing the `_shared/` dir because
    of the leading underscore — subpages rendered unstyled for ~2 min until this landed).
  Verified live: homepage, /solutions/*, /docs/*, all styled. Contact form posts to Web3Forms
  key `e06d…7ZNL` (Arham confirmed that key is fine; delivery-to-inbox still his to check).

**BUILD WORKFLOW (changed):** repo root is now the DEPLOY OUTPUT. Homepage source lives at
`preview/homepage.src.html` (the `{{ navStyle }}` template version). To change the homepage:
edit `preview/homepage.src.html`, run `preview/site/_build_site.py` (now reads that file),
then `cp preview/site/index.html . && cp preview/site/{demo,solutions}.html . && rm -rf demo solutions docs _shared && cp -R preview/site/{demo,solutions,docs,_shared} .`
and commit. Subpage content is edited in `_build_site.py` directly.

DEPLOY (original prep notes): push the redesign to kwhelectric.io
(GitHub Pages, repo `arhamshah08/kwhelectric`, branch `main`). Open items before pushing:
  1. GitHub Pages serves repo ROOT only — `index.html` + `assets/` + `shared.css` + `bees.js`
     + `support.js`. The `preview/` subpages (solutions/, docs/, demo.html) are NOT in the
     repo, so a plain push deploys the HOMEPAGE ONLY. The live homepage nav is the simple
     `{{ navStyle }}` block (Products / Who It's For / Get In Touch / Login) — NOT the
     Solutions▾/Guide preview nav. Decide: homepage-only vs. commit the whole `preview/site/`
     build into the repo.
  2. Contact form posts to Web3Forms key `e06d54ca-4593-4bf6-b1d4-2b6c9cf99460` (already
     live). Web3Forms blocks server-side validation — Arham must confirm that key delivers to
     arham@kwhelectric.io in his web3forms.com dashboard.
  3. `support.js` has an uncommitted framework update from before this session (dark-mode
     placeholders, `__resources` fetch guard). Decide include vs. `git checkout support.js`.
  Changed & ready: `index.html`, `assets/kwh-logo-mark.png`, `assets/kwh-logo-mark-light.png`.

KNOWN ISSUE: in the claude-in-chrome automated browser (DPR 2.2 / viewport mismatch) the
scroll + screenshots glitch near the page bottom — nav appears mid-screen, footer hard to
capture. DOM/order/offsets verified correct via JS; `get_page_text` shows the full page in
the right order. Arham should scroll it in a normal browser to confirm the bottom + footer.
Backups: `scratchpad/index.ORIG.html` (git HEAD), `scratchpad/index.MINE.html`.


1 September 2026 (TAM / SAM / SOM, US + Australia) — Rebuilt market size on primary
markets United States and Australia as industry markets, not kWh take. India is out of
SAM/SOM. Locked: TAM $39.3B, SAM $9.5B, SOM $315M (5% of US+AU comm + 1% of flex, not 50%).
UI-library slide `deck/ui-elements/g-28-market-size-summary.html` is table left, three
concentric circles right. Endpoint stack is `g-29`. Do not revive the $595M SAM or US+India 58M.

30 August 2026 (opening sequence v5) — Rebuilt only the launch film's opening visual layer across
two review rounds, using Arham's two supplied high-definition architectural cutaway PNGs as the
physical-world artwork. The sequence begins with the empty house, replaces it with the populated
home, and introduces Alex, the air conditioner, battery and EV charger. The fragmentation beat now
uses three deliberate vertical-then-right routes with separated y levels: two green paths pass
through distinct aggregator and connector nodes before reaching the utility, while the third path
is red and terminates at an X because no usable connection exists. The solution removes every
intermediary, gathers the assets at the central kWh gateway and draws one shared line directly to
the utility. The later scenes remain unchanged pending approval. Rendered and visually inspected
checkpoints at 0:02, 0:05, 0:08, 0:10, 0:13 and 0:16; lint, TypeScript and production bundling
pass. Delivered `out/kwh-opening-preview-v5.mp4` (1920×1080, 30fps, 18.07s, 1.9MB), rendered the
full `out/kwh-launch-video-v5.mp4` master (1920×1080, 30fps, 94.06s, 9.4MB), and regenerated the
standalone Downloads HTML with the v5 master embedded and hash-verified.

30 August 2026 (launch-film v3 + standalone delivery) — Rebuilt the 94-second personal-video
composition as `deck/personal-video-remotion/src/video/LaunchFilm.tsx` from Arham's supplied
story brief and technical-editorial visual reference. The film now moves through the opening
fragmentation problem, gateway connection, utility visibility and enrolment, autonomous asset
response, dual-sided verification, aggregator-to-Alex payment, neighborhood scale, the
user/OEM/utility network, service expansion and the growth flywheel. The owner and house remain
visually stable through the early journey; mobile onboarding and payment updates are shown in a
compact phone; green orthogonal paths and moving pulses carry all communication; and every frame
uses a strict white/black/kWh-green SVG system at 1920×1080. Reconciled the supplied older
15-step wording against the current investor-room page's 16-step sequence, preserved the factual
payment boundary (kWh verifies; the aggregator pays), and avoided the unresolved Zigbee claim by
using “Local interface.” Representative frames across every scene were rendered and visually
inspected, final overlap fixes were rechecked, and lint, TypeScript and production bundling all
passed. Rendered and media-verified `out/kwh-launch-video-v3.mp4` (H.264, 1920×1080, 30fps,
94.06s, 9.3MB), generated a poster and source ledger, copied the companion MP4 to Downloads, and
replaced `~/Downloads/kWh Personal Video (standalone).html` with a dependency-free 12MB HTML
player containing the complete embedded video. The previous standalone was preserved as
`kWh Personal Video (standalone).original.html`. Narration and soundtrack remain unauthored.

29 August 2026 (personal-video home redesign) — Completely replaced the first Remotion home's
rough icon diagram with a new architectural cutaway in `src/video/HomeWorld.tsx`. The new scene
has distinct living-room, utility-bay and garage zones; an exterior HVAC condenser and service
meter; a wall-mounted home battery; a wall charger and recognisable EV; a warmer furnished
interior; and a human Alex seated on the sofa. During setup Alex holds the phone, while during
automated response it rests on the coffee table. HVAC temperature, battery discharge and
charger pause states are now integrated into the equipment instead of floating across the
house, and the setup composition was shifted so the mobile UI never covers the EV charger.
Visually inspected the connect, response, verification and payment compositions, passed lint,
TypeScript and the production bundle, then rendered and media-verified
`deck/personal-video-remotion/out/kwh-personal-video-v2.mp4` (H.264, 1920×1080, 30fps, 94.06s,
12.7MB). The earlier render remains available for comparison.

29 August 2026 (personal launch-video rebuild) — Replaced the visually broken Claude Animation
output with a complete code-native Remotion film in `deck/personal-video-remotion/`. The 94-second
Alex journey preserves the approved nine-beat content while using one continuous spatial
exposition: a cutaway home and mobile onboarding persist into the visible utility connection,
utility dashboard and dispatch; the same home then carries through automated asset response,
dual-sided verification and aggregator payment before zooming into many homes, multiple
utilities, the end-user/OEM/utility network and the services flywheel. The home clearly depicts
the battery, EV/charger and HVAC; the payment scene states that kWh measures and verifies but
does not handle funds. The visual system is DM Sans only, black text at 64px and 22px, white
ground, one green accent, complete phrases rather than staccato fragments, and eased camera/
object continuity rather than hard slide cuts. Visually inspected representative frames across
all scenes, passed `npm run lint` and `npm run build`, then rendered and media-verified
`deck/personal-video-remotion/out/kwh-personal-video.mp4` (H.264, 1920×1080, 30fps, 94.06s,
12.6MB). No narration or soundtrack has been authored yet.

28 August 2026 (launch-video sequence prep, from the real demo recording) — Arham asked to prep
for a launch video: understand the demo end to end from audio and video, gather still frames
from the gateway, utility and consumer portals, and produce a storyboard HTML in the kWh UI
library style. Source: `~/Downloads/kWh Demo Recording.mp4` (6:37, the newest of 5 candidate
demo files in Downloads — the other 4 are June 30 earlier takes, superseded). Transcribed
locally with `openai-whisper` (already installed under python3.9, `base` model — the `small`
model's download died partway through a background shell call, base was faster and the audio
is clear enough that accuracy wasn't a concern) into 57 timestamped segments, full transcript
saved at `deck/launch-video-assets/transcript.json`. Extracted 19 frames from the source at
native 1920×1080 via `ffmpeg -ss`, then cropped every frame in one pass to strip the Google
Meet recording chrome (outer browser bar, camera bubbles, meet toolbar, copyright watermark)
down to just the product UI — one crop box for desktop shares (`crop=1590:980:60:100`), one
for the mobile-phone-mirror tiles (`crop=384:805:660:150`) — both verified clean by direct
visual inspection before use. Built `deck/launch-video-storyboard.html`: 5 acts (the pitch →
gateway portal before → consumer app onboarding → utility/Grid Intelligence portal → gateway
payoff) plus a closing block, each shot showing the cropped screenshot in a `.win`-style
chrome window (rounded, thin dot bar — same treatment as the `ui-library.html` snippets) next
to its timestamp, a one-line edit direction, and the actual transcript excerpt as voiceover
text. One whisper mis-transcription corrected throughout ("suspect" → "SunSpec," the DER
protocol) — flagged in the doc itself so it's not mistaken for something Arham actually said.
This is explicitly framed as prep, not the final video — the file's own header says so — and
it separately surfaces the exact "grid services" language (forecasting, procurement, trading,
flexibility) that Arham's other open ask (adding grid services to the kWh-investor-room
roadmap and flowchart, a different project) will likely want to reuse. Assets: 19 PNGs in
`deck/launch-video-assets/` (~5.3MB). Not yet reviewed by Arham.

26 August 2026 (6 new financial-projections deck slides, by product) — Arham shared two HTMLs a teammate sent over WhatsApp, saved to `~/Downloads/kwh-financial-projections.html` (an interactive 4-year model: fleet growth, revenue by product line, COGS, opex, breakeven, per-device unit economics — sliders + 3 scenario presets) and `~/Downloads/kwhgatewayspec.html` (a hardware BOM/SBC-selection spec, not projections — noted but not used, since it doesn't feed the interactive model's cost structure). Read the model's `calculate()` JS and replicated it exactly in a standalone Node script to get real Base-case Y1–Y4 numbers (not fabricated): Year 4 revenue $8.40M (Platform SaaS $4.86M, Enterprise $1.73M, AI $1.34M, Source License $0.48M), 135,000 DERs / 1.08 GW, Year 4 EBITDA +$0.84M (first profitable year, breakeven at 114,513 DERs), gross margin climbing 84%→91%. Built 6 new deck-ready slides in `deck/ui-elements/` per Arham's ask to show "projections by product" using the just-updated typography scale (`g-40-typography-scale.html`) and visual language (DM Sans, green accent, thin-border cards, no drop shadows, hand-coded SVG bar charts matching the `g-31`-style precedent rather than the teammate's Inter/Tailwind-dashboard look): `g-41-financials-snapshot.html` (Y4 KPI row), `g-42-revenue-by-product.html` (stacked bar, 4 years × 4 product segments), `g-43-revenue-mix-year4.html` (Y4 proportion bar + per-product $/% breakdown), `g-44-product-trajectories.html` (2×2 small-multiples, one mini chart per product with its own Y1→Y4 growth multiple — Platform 27.0×, AI 148.5×, Enterprise 6.0×, License 1.6×), `g-45-revenue-vs-cost-ebitda.html` (grouped revenue/cost bars + dashed EBITDA line crossing positive at Y4), `g-46-unit-economics-by-product.html` (per-device $/month table split by product, net contribution turning positive at Y4). All SVG chart coordinates were computed in a Python generation script (not hand-typed) for arithmetic accuracy, then visually verified one-by-one in-browser via a temporary local HTTP server + claude-in-chrome before finalizing. Added a new `Financials` manifest category (50 items, 9 categories total) and regenerated `ui-library.html`.

26 August 2026 (ui-elements font-size pass + 2 new full-slide library entries + typography-standard reference) — Arham flagged that text in three deck slides ("Simple Customer Onboarding," "Utility Accesses DERs," the Grid Intelligence/Modernisation architecture slide) read too small next to two Artisan-style reference slides (Integration Tax diagram, kWh Gateway/License architecture). Traced all three to `deck/ui-elements/` source: the onboarding slide to `slide-07-phone-connect/discover/authorize/join/earn.html`, the utility workflow slide to `g-22`–`g-26-workflow-*.html`, and the architecture slide to `g-32-platform-architecture.html` (confirmed by exact content match, not `g-33` which is the newer 4-layer universal-platform diagram with different content). Bumped every `font-size` in those 11 files ~18% (rounded to the nearest 0.5px, hierarchy preserved) via a scripted regex pass, and grew the fixed mockup frames proportionally (`.phone` 236×480→280×570, `.win` 300×540→360×640) so the larger text doesn't clip inside `overflow:hidden` containers. The onboarding/utility-workflow full-slide compositions (title + numbered steps + device row) had never been saved as files — only the individual fragments existed — so per Arham's direction these were rebuilt as new canonical library entries: `g-38-onboarding-flow.html` and `g-39-utility-workflow.html`, each assembling the resized fragments under one shared shell (CSS scoped per-step as `.p1`–`.p5`/`.w1`–`.w5` to avoid class collisions between fragments that reuse names like `.title`/`.name`). Also added `g-40-typography-scale.html`, a new "Standards" category reference documenting the resulting size floor (44px title / 18-20px section / 15-17px card title / 13-15px body / 12-13px caption minimum) for all future slides. `manifest.json` updated (41→44 entries, +1 category) and `ui-library.html` regenerated via `node ui-elements/build-library.mjs`. All three rebuilt files visually verified in-browser (via a temporary local HTTP server + claude-in-chrome) before finalizing — no clipping, step numbering intact. `g-32`'s own title text ("kWh Grid Intelligence — platform architecture") was left as-is since only font sizes were requested, not copy; the deck-specific "12 month Plan" title seen in the pasted image is a swap made when that slide was actually placed into a deck export, not part of the reusable component.

17 August 2026 (per-slide requirements & critique doc) — Built `deck/DECK-E-SLIDE-REQUIREMENTS.md` (copied to `~/Downloads/kwh-deck-slide-requirements.md`): a content-only brief (no design prescriptions) going through all 18 deck-E slides one by one, stating what must be on each slide and what was specifically wrong with what got built, plus the deck-wide complaints (drop shadows everywhere, several "product screens" being invented diagrams in a device frame rather than real UI recreations). This is the reference document for any future rebuild of this deck — read it before touching deck content or visuals again.

17 August 2026 (deck E product visuals rejected; UI snippet correction brief) — Arham rejected deck E's "MacBook screen" panels outright: most were a diagram or icon checklist pasted inside a laptop frame, not real UI, and the whole file had too many drop shadows. Rather than attempt a third full-deck rebuild blind, built `deck/ui-snippets-handoff.html` (copied to `~/Downloads/kwh-ui-snippets-handoff.html` for easy handoff to another design tool): two faithfully rebuilt reference-quality snippets (gateway Overview screen, Grid Intelligence Asset Management table — real top bars, real nav, real column headers, matched against the actual screenshots supplied earlier in this project) plus detailed written specs for the 5 screens that failed (any-asset/protocol, onboarding, grid services/dispatch, customer payout, security), each explaining exactly what real screen needs to be captured/built rather than re-guessing. No drop shadows anywhere in this file. New durable rule captured in `feedback_kwh_visual_design_system.md`: a "product screen" must be a screenshot recreation, never a diagram wearing a device frame — if the real screen isn't known precisely, say so in writing instead of approximating.

17 August 2026 (deck version E — the complete 18-slide deck, white/MacBook system) — Built `deck/deck-e-white.html` (published: https://claude.ai/code/artifact/0e20e48f-ea2e-4ee7-b211-a399f4e2eca1), the most complete deck to date: version D's problem+solution spine plus the value chain, protocol architecture, grid-services ecosystem, onboarding, competition, certifications, timeline, unit economics, market size, and financial projections — 18 slides total, replacing D's dark canvas with pure white per Arham's explicit correction, and introducing a MacBook-screen frame (dark lid bezel, white screen, thin base) as the one recurring device for every "here's the product" moment, reserving the phone frame only for genuine phone-in-hand moments (payout notification). Content for the new topic slides came from screenshots of an existing rough deck Arham shared (10 slides: Value Sticks, Any Asset & Any Protocol, Enabling Grid Services, Onboarding Journey, Competition, Certifications, Timeline, Unit Economics, Market Size, Financial Projects) — rebuilt with the same content but completely new UI. Per explicit instruction, all market-sizing and financial figures were pulled from `product-package/03-financials/financials.md` rather than approximated: Global TAM $4.90B upfront + $1.10B/yr, India SAM $671M + $119M/yr, Year-5 SOM $43.0M, 5-year revenue $0.96M→$43.0M, EBITDA break-even Year 3. The contested gateway hardware price (financials.md §8, unresolved across 6+ sources) was deliberately excluded from the unit-economics slide — only non-contested lines were used (device certificate $30, OEM integration fee $1,500/OEM, platform subscription, device lifecycle, program fee). After a first pass, Arham gave detailed per-slide feedback (fix left-column paragraphs into numbered steps, merge two-meaningless-small-boxes into one larger real one, cap font sizes at three, give slide 7/security "an experience" not a bare tag list) which was applied directly into this file rather than left as a separate revision. A later message shared 6 more Artisan.co reference slides (multi-agent panel layout, dual-stat-chart-over-browser-chrome, team cards, values grid, before/after icon-cloud-to-orbit) plus a kWh "Infrastructure Required" bee/hex slide; these were used to redesign the cover slide as a staggered dual-panel hero and to give the market-size and financial-projections slides a bolder floating-stat-card-over-chart treatment, and to round/shadow the grid-services and certifications card grids — all still on white, still one accent color, still capped at three font sizes per slide (density comes from richer composition, not more sizes). Full list of new rules this round captured in `feedback_kwh_visual_design_system.md`'s "Updated 2026-08-17" section — read that before any further kWh deck/visual work.

17 August 2026 (deck version D — real 8-slide problem+solution deck) — Built `deck/deck-d-dark.html` (published: https://claude.ai/code/artifact/702ecc35-5279-47fa-9531-6efad62483cc), a genuine written deck (not scene snippets) modeled on an Artisan.co reference slide Arham pointed to: dark gradient canvas, bold headline + 20-50-word body copy on the left, two staggered "real screenshot" product panels on the right (light-mode UI in a dark browser chrome, dropped shadow, like real screenshots lifted onto a dark background). 8 slides, full written problem+solution narrative pulled from the master knowledge doc (the toll-chain problem, the 80%/$50K+ scale stats, the connect/normalize/dispatch/verify solution thesis, two dedicated two-panel product slides — fleet analytics + asset list, then dispatch panel + payout notification — protocol/security slide, closing line). Kept the locked design-system rules from the same-day scene-visuals work (sentence case, one accent color — kWh green `#34D399` on dark, no boxed icons) while adopting the reference's structural mood (dark canvas, bigger headline weight, staggered screenshot panels with real shadow) since Arham explicitly pointed at that reference for this piece. This is a distinct "version D," separate from the A/B/C scene directions — same locked typography/color-discipline rules, different structural template (written deck vs. diagram scenes).

17 August 2026 (deck scene visuals — 3 directions, 18 slides) — Built `deck/scene-visuals-v2.html` (published: https://claude.ai/code/artifact/0c9d50f7-8cbc-4176-ae3c-dbe9d1a9194d), a set of six 16:9 screenshot-ready scenes telling the pitch's core "one infrastructure" story (the utility→aggregator→integrator→OEM toll chain vs. one kWh gateway; Bluetooth onboarding; northbound/southbound protocol translation; parallel customer/utility telemetry; the unified gateway-or-OEM asset list plus grid services; the dispatch→payout loop), each rebuilt in three complete visual directions — A "open editorial" (white, generous whitespace), B "structured system" (faint tint, right-angle connectors, spec-sheet dividers), C "confident product" (warm paper, bigger weight contrast, gateway drawn as the visual hero). Superseded `deck/scene-visuals-draft1.html` (case A only, first pass) after Arham's design-system correction. New locked rules captured in memory as `feedback_kwh_visual_design_system.md`: DM Sans/humanist sans only, 2-3 type sizes max with hierarchy from weight/space not size, sentence case everywhere (no mono/uppercase/eyebrow labels), one accent color (kWh green) on a restrained neutral palette, no boxed icon badges (thick bare-stroke icons instead), containers only when needed (2px radius, quiet border, minimal shadow), diagrams must hold one consistent reading direction across any before/after pair and minimize repeated nodes/crossing lines, and every scene must fill the full 16:9 canvas. Apply this system to any future kWh deck/product-mockup visual work, not just this file.

## For Codex — handoff, read this before starting any deck-visuals work here

Arham wants a **fourth, genuinely different** take on the same "one infrastructure, six moments" story — not a re-skin of what Claude already built. Read before starting:
- `deck/scene-visuals-v2.html` (or the published artifact above) — the six-scene story and content are already solved; don't re-derive them from scratch, but don't just restyle them either.
- `~/.claude/projects/-Users-arhamshomefolder/memory/feedback_kwh_visual_design_system.md` — the locked design rules (one accent color, sentence case, no boxed icons, 2px radius, consistent diagram direction, full-canvas 16:9). These rules came from Arham correcting a first draft that broke them; treat them as binding, not optional inspiration.
- Three directions already exist: A "open editorial" (white/whitespace), B "structured system" (tint/right-angle connectors), C "confident product" (warm paper/bold weight). **Do not build a fourth variant that's just another flavor of "clean SaaS diagram slides."** Arham explicitly asked for a different *experience*, not another layout — he mentioned images and a genuinely different medium as fair game. Push somewhere those three didn't go: illustration instead of icon-diagrams, a different narrative device, motion/interaction if the target format allows it, real imagery instead of vector icons — something that couldn't have been produced by re-skinning the existing HTML.
- Same content constraints apply (see [kWh Electric Master Knowledge](../.claude/projects/-Users-arhamshomefolder/memory/reference_kwh_electric_master.md) for company facts) but the form is wide open.

2 August 2026 (product package) — Created `product-package/`, four markdown documents in three folders, all sourced from the kWh master knowledge document and from `kWh Electric Financial Strategy Report v3` (extracted from `~/Downloads/Partnership proposal for battery fleet.zip`). Contents: `01-deck/kwh-deck.md` (18 slides, v6 mandatory narrative order, v5 headline discipline), `02-product/product-internal.md` (full product reference, 16-page brochure equivalent), `02-product/product-external.md` (2-page A4 datasheet cut from the internal doc), `03-financials/financials.md` (5-year model, unit economics per counterparty, TAM/SAM, value redistribution). **The package deliberately carries no hardware price anywhere.** Extracting the financial report surfaced a seventh and eighth conflicting figure: FSR v3 prices the "universal gateway" at **$199 list / $149 floor on a $50 BOM and $65 landed COGS**, and a separate **$30 device software certificate**, neither of which reconciles with the ~₹6,000 (≈$70) Model A spec price, the $100 ElectronVibe BOM lock, or the $150 one-time licence. Worse, **FSR v3 models one gateway SKU, not two, so Model B and the whole DISCOM channel are absent from the revenue build** and $1.22B of the global TAM gateway line rests on the $199 figure. Written up in full in `03-financials/financials.md` §8, which reframes it as three decisions rather than one price. Also flagged: "kWh Network" is a new product name that does not appear in the master document, and the v5-vs-v6 headline-style conflict remains unresolved and is noted in the deck file.

27 July 2026 (gateway ecosystem v2) — Expanded the canonical `open-platform/kWh Gateway Experience.html` through its reproducible builder and redeployed the same production alias at `https://kwh-gateway-experience.vercel.app`. The 14-step story now makes the purchaser/account owner explicit, shows scoped invitations for installers, operators, OEM support and utilities, discovers seven verified-per-model OEM/device profiles, represents EVs through charger sessions rather than implying unsupported direct vehicle control, and adds a dedicated many-devices-to-many-apps phone scene. The Mac app now includes a Connections route mapping roles, OEM/device adapters and six example app connections with separate telemetry, control, approval and ownership policies; EV Smart Charging, Depot Charge Planner and a read-only Driver Charging App can coexist on the EVSE/vehicle twin. The full purchase-to-Mac flow passed with zero console errors and ten visually inspected states. The public file returned HTTP 200 and its SHA-256 matched the tested local artifact exactly. **The earlier `exports/kWh-Gateway-Experience-Content-Review.docx` is now behind this v2 prototype and should be regenerated before the team uses it for copy review.**

27 July 2026 (deck v6, bee narrative + customer journey) — Built `deck/deck-v6.html` and `deck/kwh-deck-v6.pdf` (18 pages, verified) from a machine-readable layout specification Arham supplied in chat. This is a **different design system from v4, not an edit of it**: Figtree at weight 900 for titles (60–86px), cream `#FBF8F1`, gold `#D9A404`, maroon `#6D1818` section labels, security red `#A70F0F`, green `#2C8E5A`, a single honeycomb texture at 5% opacity behind every slide, no gradients, no shadows beyond a 1px card lift, margins 72/72/56/48. The spec's rule that every slide reads in under three seconds drove the low text density.

**The narrative order is mandatory and is the point of this version:** 01 intro, 02 problem, **03 security, 04 interoperability** (security must never come after interoperability), 05 why now, 06 universal controller, then the customer journey — 07 enrollment, 08 customer app, 09 fleet dashboard, 10 marketplace, 11 monetization — then 12 AI agents, 13 business model, 14 market, 15 competition, 16 GTM, 17 team, 18 raise. AI never precedes interoperability; monetization never precedes applications.

**Three illustrations carry the argument and each corrects an error in earlier decks.** Slide 02: nine completely separate gold hexagon clusters, none touching, no bridges, no trails, no labels, no protocol logos — vendor lock-in. Slide 03: eight *independent* cells each holding one bee, **not one shared hive**, with a red attacker striking exactly one cell that turns red and is labelled Contained while every other cell stays gold and unconnected. Slide 04: the same eight independent cells with floating discovery nodes above them and dotted bee flight trails weaving cell → node → node → cell — **no hub, no server, no queen, no hierarchy**. Slide 12 uses the queen only as shared intelligence with exchange lines and explicitly no arrows pointing into her.

**Unverified figures bracketed:** fleet revenue, online devices, capacity, licence and marketplace metrics, SAM, SOM, runway, milestones, devices under management, channel partners. Verified figures kept: 80% lock-in, $23B/25.8% CAGR VPP TAM, 122+ GW on VPP platforms, 5 DISCOMs via Beckn DEG, Monarch Transformers, ~₹6,000 / ~₹24,000 target prices, $1.5M ask, ~$2,000 burn. **`5 minutes` per-asset enrollment on slide 07 is spec-supplied and not verified anywhere — flagged for Arham.** Team slide uses hexagon monogram frames rather than generated faces of real people.

⚠️ **Direct conflict with `DECK-V5-PROMPT.md` §2.** That brief bans two-word sentence pairs and triadic fragments; this spec requires them (`One device. / One license.`, `Enroll once.`, `One fleet. / Thousands of assets.`, `One controller. / Unlimited applications.`). The chat spec is newer and explicit, so it was followed. Arham has to decide which document governs before either is used externally.

Two rendering bugs found by screenshotting all 18 in headless Chrome: a blanket `.slide > *:not(.comb-bg){position:relative}` rule silently overrode `position:absolute` on the footer and page number, dropping them into the content flow; and two illustration SVGs had cells extending past their viewBox, flattening them at the edge.

27 July 2026 (latest) — `deck/DECK-V5-PROMPT.md` supersedes the built `deck-v4.html` and v3.1. Numbered v5 to avoid colliding with the existing `deck-v4.html`; that build still opens on "Today, the hive is fragmented", still uses the banned two-word headline style, and has neither bottom-up market sizing nor a competition slide. Originally drafted as v3.1 and everything before it. Written after reviewing the 24-slide ChatGPT render (`~/Downloads/ChatGPT Image Jul 27, 2026, 12_21_29 PM.png`). Four changes Arham asked for. (1) **The opening now carries one visual argument:** slide 02 is a single large hexagon holding a few central assets, slide 03 is that box already shattered into a lattice of hollow cells, slide 05 is the honey translation band lighting them, slide 20 is the finished field. Cell positions must be identical across all four, which is stated twice because it is the thing most likely to be lost. (2) **A headline-discipline section bans the machine-generated style** — two-word sentence pairs, triadic fragments, abstract-noun payoffs — and requires every headline to carry a number, a named entity, or a falsifiable claim. (3) **Market sizing added as slide 12, built bottom-up** with the arithmetic visible (units × share addressable × ASP + SaaS), plus a competition slide at 18 with a two-axis positioning map. (4) **Sequence fixed:** team 19, ask 20. Twenty main slides plus seven appendix. Explicit 1920×1080 requirement on every slide including preview grids. Six factual errors from the render are corrected in-brief: Vish Ganti removed, Model A restored to indoor/IP20 (the render showed both models outdoor), Model B set to IP65/IP66 not IP67, Model B relabelled hardware not software on the projections chart, use-of-funds forced to sum to 100% (the render summed to 90%), and the Zodiac/Kintech partner descriptions corrected with Monarch named as the transformer partner. Cut for style and redundancy: `From install to impact`, `Open network. Open to all.`, `One device. Infinite value.`

27 July 2026 (gateway experience content-review DOCX) — Built `exports/kWh-Gateway-Experience-Content-Review.docx`, a landscape working document that transcribes the entire `open-platform/kWh Gateway Experience.html` prototype so the team can mark up copy changes in Word. Every string was read out of the bundle's inline JSX and template rather than retyped from the rendered page. It covers all 13 purchase-and-onboarding steps (frame copy, on-screen copy, and the "Outside the phone" explainer panel for steps 4 to 13) and all 18 Mac routes including the seven BESS-01 detail tabs, the 12-step dispatch walkthrough, the 8-row gateway apps/priority policy table, and the 5-step program enrolment dialog. Every content table carries a shaded blank "Proposed change" column, and the instructions tell reviewers not to edit the Current copy column so edits can be applied back unambiguously. Section 3 documents the controlled vocabulary — the six tone tokens and the four eligibility states — since those words repeat across screens. Section 4 lists 14 items that must be resolved before any external showing, each with a blank owner column: the `$349` sample price, the "free, forever" runtime claim, the software-only licence route, **TANGEDCO as the demo DISCOM, which contradicts the Delhi/BRPL beachhead the P2P research concluded on**, the invented `Peak Flex Reward` and `Solar Export Compliance` program names, the illustrative ₹12,400 and ₹18,000 monthly benefits, the `$42.00`/`$65.00` metered cloud charges, the 20% resilience reserve default, the P1–P4 control priority order, the unmeasured 6.2% MAPE / 99.98% API success / 100% export compliance figures, the fictional `SinoPower ES-50` vendor, the real Tamil Nadu place names attached to fictional assets, the visible "Not compatible" Residential VPP card, and whether a freely navigable Mac app should end the story at all. Section 5 states that edits are applied through `open-platform/improve-gateway-experience.mjs` and never by hand, because the HTML is a generated bundle. **Not visually verified:** the machine has no LibreOffice, Word or Pages, so the DOCX was checked structurally only — 87 tables, no ragged rows, every table's column widths summing to the 9.8-inch usable width.

27 July 2026 (deck v4, built in HTML) — Built `deck/deck-v4.html`, a 20-slide seed deck in the editorial bee/gold visual language Arham produced with Nano Banana, plus `deck/kwh-seed-deck-v4.pdf` (20 pages, verified). Design language, deliberately unlike the earlier `deck/index.html` that Arham rejected as looking generic: serif headlines (Newsreader) against small DM Sans body and DM Mono labels, warm cream `#FAF6EC` paper, muted gold `#AD8324` accent used sparingly, cards with 1px warm rules and no shadows, hexagon slide badges, and an illustrated bee on a dotted flight path recurring on roughly a third of the slides. Model A stays mint, Model B stays lilac. A bee and a wasp are drawn as reusable SVG `<symbol>`s. **Two slides were added to the Nano Banana 18, because that version dropped two of the three properties the story exists to introduce:** slide 05 "Every asset guards itself" (security — TEE, zero-trust identity, data sovereignty, wasp repelled by a tessellated comb) and slide 06 "An agent can plan a dispatch. Nothing lets it act." (agentic — three gaps, then an agent-proposes / cell-disposes boundary reusing the exact lit-cell visual from slide 05). **Invented figures were removed and bracketed:** 99.9% uptime, 98% data capture, 85%+ attach rate, NRR 120%+, LTV/CAC 3.0x+, and the Exicom and Servotech partner logos, which are not verified kWh partners; slide 17 now carries Zodiac Energy, Kintech Synergy, PCB Power India and the Beckn DEG channel. The "four founding engineers" claim was corrected to three full-time per the master knowledge doc. Round label left off the cover eyebrow pending Arham's pre-seed vs seed decision. Viewer supports arrow/space/click navigation, `?print` for PDF export, and auto-hiding controls. Four rendering bugs found and fixed by screenshotting every slide in headless Chrome: SVG gradients defined inside a `display:none` slide did not resolve when referenced from the visible slide (moved to global defs), nav controls parked on the footer page number, two-column slides left a dead lower half (added `.split.tall`), and `html` keeping `height:100%; overflow:hidden` collapsed the PDF export to a single page.

27 July 2026 (OEM partner brief v2) — Rebuilt the older honeycomb two-pager as `exports/kWh-Electric-Battery-OEM-Partner-Brief-v2.docx`, preserving its cream/honey visual identity and recurring-services framing while correcting the commercial and technical overclaims. Removed unsupported claims of IES certification, universal out-of-box compatibility, an IEEE 2030.5 server with trading built in, guaranteed transaction-fee ARR, asset securitisation, a sub-$80 BOM and unverified live deployments. The new exact two-page brief defines the OEM-neutral battery participation layer, embedded-versus-gateway routes, three defensible services, a blended model/device/fleet/program revenue structure and a gated 90-day Delhi pilot. It was rendered and inspected page by page; accessibility has no high-severity findings and all table geometry is exact.

27 July 2026 (gateway experience deployment) — Created the separate Vercel production project `kwh-gateway-experience` so the prototype could be hosted without changing the existing `kwhelectric` project. Deployed the canonical `open-platform/kWh Gateway Experience.html` as the production root at `https://kwh-gateway-experience.vercel.app`. The public alias returned HTTP 200 and the served file's SHA-256 exactly matched the canonical local artifact.

27 July 2026 (gateway experience refinement) — Preserved the downloaded source and created the canonical improved artifact at `open-platform/kWh Gateway Experience.html` through the reproducible `open-platform/improve-gateway-experience.mjs` transform. The story now starts with product purchase, adds a real sample checkout before delivery, expands phone onboarding with substantive outside-phone explainers, and introduces a dedicated "One device, many jobs" scene showing battery monitoring, resilience, tariff optimisation, solar shifting, predictive maintenance, operator control and optional demand response. The Mac application was made responsive, its Programs & services catalogue was broadened to six balanced services rather than centring demand response, and reduced-motion support was added. The automated flow from purchase through onboarding into Mac Programs passed with zero console errors, and six key states were visually inspected. The source's `$349` remains clearly labelled as sample pricing pending a final SKU/pricing decision.

27 July 2026 (P2P battery business package) — Completed and visually verified `exports/kWh-Electric-P2P-Battery-Intro.docx`, an exact two-page external partner introduction, and `exports/kWh-Electric-P2P-Business-Model-Internal.docx`, a 13-page confidential working model. The package positions kWh Electric as the OEM-neutral edge gateway, digital-twin, policy, safe-dispatch, renewable-provenance and meter-reconciliation layer beneath authorised trading providers and DISCOM programs. It includes a 90-day Delhi pilot, customer and revenue architecture, OEM landscape covering Ola Shakti, Tata Power/TPREL, Amara Raja, Livguard and Exide, illustrative unit economics and degradation gates, a 24-month execution plan, risks, kill criteria and source register. Both DOCX files were rendered page by page with final table-geometry and accessibility audits; the source-linked research companion and reproducible builder remain in `research/`.

27 July 2026 (P2P battery-market research) — Completed `research/p2p-trading-india-pilots.md`, a source-linked scan of India's P2P electricity-trading sequence: BRPL's 2019 announcement, the 2020 UPPCL/MVVNL Lucknow pilot, Tata Power-DDL's 2021 Delhi pilot, CESC's 2022 Kolkata trial, the 2026 Auroville research pilot, and the live interstate India Energy Stack pilot across TPDDL, BRPL and PVVNL. Mapped the UPERC 2023, DERC 2024/2026 and KERC 2024 operating rules. Strategic conclusion: kWh Electric should not enter as another trading marketplace—the current PVVNL pilot already lists eleven trading providers—but as the OEM-neutral battery control, renewable-provenance, schedule-execution and meter-reconciliation layer underneath trading apps and DISCOM programs. Delhi is the leading beachhead because its rules expressly include BESS charged through renewable energy. The memo also flags conflicting public CESC and TPDDL metrics and shows why the regulated ₹0.42/kWh transaction fee cannot support the business alone.

27 July 2026 (deck v3.1) — Added a six-slide illustrated bee-story prologue to `deck/DECK-V3-PROMPT.md`, sitting on top of the 18 rather than replacing any of them. Deck is now 31 slides: cover `01 / 18`, prologue `P · 01` to `P · 06`, main deck `02 / 18` to `18 / 18`, appendix `A · 01` to `A · 07`. The prologue introduces three properties with a problem beat and a solution beat each: interoperability absent (`P · 01` fragmented hives), security absent (`P · 02` the wasp), security solved (`P · 03` sealed cells), interoperability solved (`P · 04` many dialects to one 2030.5), agentic (`P · 05`, entirely new), and the payoff (`P · 06` the hive). Five of the six are specced from Arham's existing Canva-style slides; `P · 05` and the build-out of `P · 06` are new. `P · 05` reuses the exact lit-cell visual that repels the wasp on `P · 03`, arguing that one security model bounds both an attacker and an agent. `P · 06` was a skeleton in the source and is now four bands: five actor hexagons on top (the `AI agent` in indigo, at peer size), the hive slab carrying three labelled strata matching the three adjectives in its headline, bidirectional traffic (`telemetry ↑` in mint, `dispatch ↓` in honey) with the queen as the labelled master node, and six sealed asset cells below. The v3 no-bees rule was rescoped in a new §2.1 rather than deleted: illustration is permitted in the prologue only, and the cover, all 18 main slides and the whole appendix stay geometry-only. Two prologue-only tokens added, `comb #E8C05A` and `alarm #9E2020`. **Two items left for Arham:** `P · 01` and main slide 02 both lead on `80%` at display scale seven slides apart, with two resolution options written into the slide 02 spec; and the source product slide (`Under $50 BOM`, `$150 one-time gateway license`) was excluded from the prologue because it reprints the two contested figures v3 removed.

27 July 2026 (latest build) — Built and visually verified `open-platform/mac-app-dashboard.html`, a standalone dependency-free Mac operations-app prototype that replaces the former slideshow wrapper with one persistent application shell. It includes Overview, Sites, Assets and BESS digital twins, Gateways, Dispatch, Events, Marketplace, Programs & services, Usage & billing, Developer, Settings, and Help routes; seven-step first-run gateway onboarding; a sourced site profile for location, DISCOM, tariff, meter and operating preferences; device capability discovery; explainable app, cloud-service and program matching; least-privilege permissions and control priorities; marketplace installation; program consent and enrolment; and live dispatch feedback. Direct preview hooks support the Programs, onboarding and dispatch states. Static JavaScript and required-flow checks passed, and the Overview, Programs and onboarding layouts were rendered at 1600×1000 for visual QA. Packaged the current artifact as `open-platform/mac-app-dashboard.zip` while leaving the downloaded source archive untouched.

27 July 2026 (latest) — Extended `open-platform/ANIMATION-UPDATE-PROMPT.md` with gateway-driven compatibility and program discovery. After the gateway connects, the seven-step onboarding now builds a sourced site profile covering location, DISCOM, tariff, service connection, meter, contract demand, export permission, operating goals, automation preferences, and consent. The platform combines that context with discovered asset capabilities and gateway state to rank explainable on-gateway apps, cloud services, and sample DISCOM programs as Eligible, Likely eligible, Action required, or Not compatible. Added a full Programs & services route, program enrolment and least-privilege data/control permissions, gateway Apps & services visibility, recommendation panels, live eligibility recalculation, revocation, and conflict policies when multiple services can control the same asset.

27 July 2026 (later) — `deck/DECK-V3-PROMPT.md` supersedes v2. Adds the two-SKU product line (Model A DER Gateway, indoor IP20, ~₹6,000, BESS/PV/inverter, CAN to BMS; Model B DT Gateway, outdoor IP65/66, −40 to +85 °C, ~₹24,000, reads the transformer's existing meter or IED, dual Ethernet + LTE) and a new slide 07 "What the DISCOM sees" carrying the full metric families for both models. Convention added: Model A is always mint, Model B always indigo, on slides 05, 07, 10, 12, and 14. Slide 12 was rebuilt as two waterfalls where Model B is Model A plus named environmental deltas (IP65/66 enclosure, temperature grade, surge/EMC, cellular modem, wider isolated I/O, power-loss ride-through), which makes the 4× price gap read as physics rather than markup. Appendix grew to seven slides holding both full specification sheets and both full metric catalogues. Held at 18 main slides by merging v2's Solution and How-it-works into one. **Unresolved pricing conflict:** the `$150 one-time gateway license` and `under $50 BOM` claims in the master knowledge document cannot be reconciled with ~₹6,000 and ~₹24,000, so both were removed from v3's main line pending Arham's decision on whether $150 is a separate software license, a superseded single-SKU price, or a US-market price.

27 July 2026 (later) — Audited the newly downloaded `Mac app dashboard flow.zip` and completely rewrote `open-platform/ANIMATION-UPDATE-PROMPT.md`. The exported artifact was a ten-step presentation wrapper mixing web purchase, order confirmation, iPhone setup, product education, and a compressed Mac dashboard. The new prompt removes the slideshow shell and specifies one persistent native-style Mac application with first-run gateway onboarding, Overview, Sites, Assets and digital twins, Gateways, Dispatch, Events, Marketplace, Usage & billing, Developer tools, loading/error/recovery states, and three complete operator paths. Purchase stays outside the app; technical education becomes contextual help; the missing marketplace-install, live-dispatch, metering, and fleet flows are explicit interactive requirements.

27 July 2026 — Two build briefs added. `deck/DECK-V2-PROMPT.md` supersedes the 24-slide rebuild with an 18-slide investment deck: cover, problem, why now, solution, how it works, value proposition, product, user experience, onboarding, distribution, market, hardware unit economics, software unit economics, five-year financial projections, traction, why we win, team, and a $1.5M ask on a SAFE. Slides 12 to 14 are structure only, with every financial figure left bracketed, since the model does not exist yet. The four use-case slides and the standalone insight and business-model slides were cut to reach 18. Advisors read Sujith Nair and Dr. Pramod Varma. Two open items flagged: the round is labelled Seed while $1.5M reads pre-seed, and there is no competition slide, which needs preparing as appendix rather than left unanswered.

Earlier that day, the first version of `open-platform/ANIMATION-UPDATE-PROMPT.md` specified a fixed-stage BDR-style presentation with browser/phone frames and the hive palette. That direction was superseded later on 27 July after the exported Mac artifact showed that the presentation wrapper was the core problem. The four reverse-engineered Tata reference files remain saved in `open-platform/reference/` for optional component-level reference only.

26 July 2026 (later) — New workstream: the open-source DER platform. Wrote `open-platform/ANIMATION-PROMPT.md`, a self-contained prompt for the Claude app that builds a ten-scene animated React artifact of the full product sequence, from stranded assets through gateway discovery, digital twin, 2030.5 registration, the four-band stack, app install, the dispatch chain, usage metering, and fleet scale. Positioning locked in the prompt: IEEE 2030.5 is one protocol and not the product, the utility runs the 2030.5 server while the gateway is the client, and the 2030.5 client plus core SDK are free and open source with revenue metered on API calls, dispatch events, devices, and telemetry retained. Open question flagged: the handoff gates the free tier by resource count while the pricing story is usage-based, so which meter actually binds needs deciding before launch.

26 July 2026 — Wrote `deck/DECK-REBUILD-PROMPT.md`, a self-contained build brief for rebuilding the deck as a native PPTX plus PDF via Manus rather than HTML. It carries the full palette and type tokens, the hive-lattice background spec, the no-bee constraint, verbatim copy for all slides, the bracketed-placeholder policy, and a 7-point quality bar. One new slide was added at position 06, "Every asset, one model", specifying the four-tier DERMS / IEEE 2030.5 / DER gateway / Solar PV, Inverters, Battery-BMS, DT diagram; the main deck is now 21 numbered slides plus 3 appendix slides. The DT node is footnoted as the distribution transformer with telemetry embedded at manufacture, which is the Monarch partnership. The file also holds three Nano Banana prompts for background and device art only, with an explicit rule that generated imagery never carries readable information.

25 July 2026 — Built and visually verified the 23-slide kWh Electric venture deck in `deck/index.html`. The presentation uses a fixed 1920×1080 canvas, keyboard/click navigation, a print-to-PDF mode, one reusable SVG hexagon system, the mint/indigo/honey semantic palette, DM Sans/DM Mono typography, and literal bracketed placeholders for every unverified metric. A 23-page PDF render was used to check the complete deck for clipping, wrapping, page count, and unintended overlaps.

The deck consolidates three earlier sources: the Speedrun deck (narrative arc), the older kWhElectric_Deck (hive/hexagon brand), and the venture deck (the accurate technical content — bidirectional translation layer, four use cases, deployment modes, control-authority boundary). The abstraction: a hexagon is an energy asset and the deck lights the field up across the slides — hollow means stranded, mint means connected, honey means dispatched, indigo means a software layer. Every bee, honey jar and hive illustration was removed; only the geometry survives. Honey is reserved for the translation layer, dispatch and money. Exported to `deck/kwhelectric-seed-deck.pdf`.

24 July 2026 — Created `exports/kWh-Electric-ElectronVibe-2026-Draft.docx`, a working draft answering all 38 ElectronVibe application questions from the July application archive and kWh master knowledge document. The narrative consistently positions kWh as a physical edge gateway plus a universal, OEM-agnostic protocol translator. BRPL Problem Statement 1 (LT Network Visibility & Asset Intelligence) is the recommended working track. Founder-only facts and decisions are marked in gold callouts.

## Next step

Review local typography / short titles / clean folder URLs, then push to GitHub Pages when ready. Confirm Web3Forms still delivers to arham@kwhelectric.io.

