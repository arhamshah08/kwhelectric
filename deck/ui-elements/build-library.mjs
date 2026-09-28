import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, 'manifest.json'), 'utf8'));

// Cards whose container only declares width (auto height from padding+content) —
// no reliable regex extraction, so their true rendered height is hand-measured here.
const HEIGHT_OVERRIDES = {
  'g-13a-revenue-access-paths.html': 230,
  'g-13b-revenue-summary.html': 160,
  'g-15b-financial-stats.html': 160,
  'g-32-platform-architecture.html': 1400,
  'g-33-universal-platform-architecture.html': 1020,
  'g-34-pricing-option-a-grid.html': 620,
  'g-36-pricing-option-c-matrix.html': 620,
  'g-38-onboarding-flow.html': 900,
  'g-39-utility-workflow.html': 960,
  'g-40-typography-scale.html': 700,
  'g-41-financials-snapshot.html': 450,
  'g-42-revenue-by-product.html': 950,
  'g-43-revenue-mix-year4.html': 750,
  'g-44-product-trajectories.html': 900,
  'g-45-revenue-vs-cost-ebitda.html': 950,
  'g-46-unit-economics-by-product.html': 860,
  'g-29-bottom-up-calculation.html': 720,
};

function extractDims(html, file) {
  for (const sel of ['window', 'win', 'card', 'phone', 'slide']) {
    const re = new RegExp(`\\.${sel}\\{[^}]*?width:(\\d+)px;\\s*height:(\\d+)px`);
    const m = html.match(re);
    if (m) return { w: +m[1], h: +m[2] };
  }
  if (HEIGHT_OVERRIDES[file]) {
    const wMatch = html.match(/\.slide\{[^}]*?width:(\d+)px/) || html.match(/\.win\{[^}]*?width:(\d+)px/);
    const w = wMatch ? +wMatch[1] : 640;
    return { w, h: HEIGHT_OVERRIDES[file] };
  }
  // width-only container, no override — safe fallback
  const wMatch = html.match(/\.win\{[^}]*?width:(\d+)px/);
  const w = wMatch ? +wMatch[1] : 640;
  return { w, h: 300 };
}

const items = manifest.map((m, i) => {
  const html = fs.readFileSync(path.join(__dirname, m.file), 'utf8');
  const dims = extractDims(html, m.file);
  return { id: 'i' + i, file: m.file, title: m.title, category: m.category, dims, html };
});

const categories = [...new Set(items.map(i => i.category))];

let dataJson = JSON.stringify({ items });
dataJson = dataJson.split('</script').join('<\\/script');

const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>kWh UI Bank</title>
<meta name="description" content="Every kWh Electric deck UI component built so far — browse by category, click to view full-size.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  /* Forced light theme, always — this is a screenshot-source tool, never dark,
     regardless of the viewer's OS/browser theme preference. */
  :root{
    --bg:#FFFFFF; --surface:#FFFFFF; --ink:#0B0F0C;
    --ink-muted:rgba(11,15,12,.6); --ink-faint:rgba(11,15,12,.4);
    --line:#E4EAE5; --accent:#16A34A; --accent-bg:#EAF7EE; --chip-bg:#F5F6F5;
  }

  *,*::before,*::after{ box-sizing:border-box; }
  html{ color-scheme:light; }
  html,body{ margin:0; padding:0; }
  body{
    background:var(--bg); color:var(--ink); font-family:'DM Sans',-apple-system,sans-serif;
    -webkit-font-smoothing:antialiased;
  }

  .topbar{
    position:sticky; top:0; z-index:10; background:var(--bg); border-bottom:1px solid var(--line);
    padding:18px 32px 0;
  }
  .topbar-inner{ max-width:1400px; margin:0 auto; }
  .topbar-row{ display:flex; align-items:baseline; gap:14px; flex-wrap:wrap; }
  .eyebrow{ font-size:12px; font-weight:700; color:var(--accent); letter-spacing:.02em; }
  h1{ font-size:24px; font-weight:800; margin:2px 0 0; letter-spacing:-.01em; text-wrap:balance; }
  .sub{ font-size:13px; color:var(--ink-muted); max-width:620px; line-height:1.5; margin:4px 0 14px; }

  .filters{ display:flex; gap:8px; flex-wrap:wrap; padding-bottom:14px; }
  .chip{
    font-family:inherit; font-size:12px; font-weight:600; color:var(--ink-muted);
    background:var(--chip-bg); border:1px solid transparent; border-radius:999px;
    padding:6px 13px; cursor:pointer; transition:background .12s,color .12s;
  }
  .chip:hover{ color:var(--ink); }
  .chip.on{ background:var(--accent); color:#fff; }
  .chip .n{ opacity:.7; margin-left:3px; }

  main{ max-width:1400px; margin:0 auto; padding:22px 32px 80px; }
  section.cat{ margin-bottom:34px; }
  section.cat h2{
    font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:.06em;
    color:var(--ink-muted); margin-bottom:12px; display:flex; align-items:baseline; gap:8px;
  }
  section.cat h2 .n{ font-weight:500; text-transform:none; letter-spacing:0; color:var(--ink-faint); }

  .grid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(224px,1fr)); gap:14px; }
  .card{
    background:var(--surface); border:1px solid var(--line); border-radius:10px; overflow:hidden;
    cursor:pointer; transition:transform .12s, border-color .12s, box-shadow .12s; display:flex; flex-direction:column;
  }
  .card:hover{ transform:translateY(-2px); border-color:var(--accent); box-shadow:0 6px 18px rgba(0,0,0,.06); }
  .thumb{
    height:150px; background:#FFFFFF; display:flex; align-items:center; justify-content:center;
    overflow:hidden; position:relative;
  }
  .thumb iframe{ border:0; pointer-events:none; background:#fff; flex-shrink:0; }
  .card-foot{ padding:10px 12px; display:flex; align-items:center; justify-content:space-between; gap:8px; }
  .card-title{ font-size:12.5px; font-weight:700; line-height:1.3; }
  .card-tag{ font-size:9.5px; font-weight:700; color:var(--accent); background:var(--accent-bg); border-radius:999px; padding:3px 8px; white-space:nowrap; flex-shrink:0; }

  /* modal viewer — reads as its own page, not a popup, per "back to main page" */
  .modal{
    position:fixed; inset:0; background:var(--bg); display:none; flex-direction:column;
    z-index:100;
  }
  .modal.open{ display:flex; }
  .modal-head{
    display:flex; align-items:center; justify-content:space-between; padding:14px 24px;
    border-bottom:1px solid var(--line); flex-shrink:0; gap:16px;
  }
  .back-btn{
    font-family:inherit; font-size:13px; font-weight:700; color:var(--ink); background:var(--chip-bg);
    border:1px solid var(--line); border-radius:8px; padding:8px 14px; cursor:pointer;
    display:flex; align-items:center; gap:7px; flex-shrink:0;
  }
  .back-btn:hover{ background:var(--accent-bg); border-color:var(--accent); color:var(--accent); }
  .modal-title{ font-size:14px; font-weight:700; color:var(--ink-muted); flex:1; text-align:center; }
  .modal-nav{ display:flex; align-items:center; gap:8px; flex-shrink:0; }
  .icon-btn{
    width:34px; height:34px; border-radius:8px; border:1px solid var(--line); background:transparent;
    color:var(--ink); cursor:pointer; display:flex; align-items:center; justify-content:center; font-family:inherit;
    font-size:16px;
  }
  .icon-btn:hover{ background:var(--chip-bg); }
  .modal-body{ flex:1; overflow:auto; display:flex; align-items:flex-start; justify-content:center; padding:36px; background:#FFFFFF; }
  .modal-body iframe{ border:0; background:#fff; flex-shrink:0; }

  .empty{ font-size:13px; color:var(--ink-faint); padding:40px 0; text-align:center; }

  ::selection{ background:var(--accent-bg); }
</style>
</head>
<body>

<div class="topbar">
  <div class="topbar-inner">
    <div class="topbar-row">
      <div>
        <div class="eyebrow">kWh Electric</div>
        <h1>UI bank</h1>
      </div>
    </div>
    <div class="sub">The main reference for every deck UI component built so far. Click any template to open it full-size — that's the crop to paste into the deck.</div>
    <div class="filters" id="filters"></div>
  </div>
</div>

<main id="main"></main>

<div class="modal" id="modal">
  <div class="modal-head">
    <button class="back-btn" id="closeBtn">← Back to library</button>
    <div class="modal-title" id="modalTitle"></div>
    <div class="modal-nav">
      <button class="icon-btn" id="prevBtn" title="Previous">←</button>
      <button class="icon-btn" id="nextBtn" title="Next">→</button>
    </div>
  </div>
  <div class="modal-body" id="modalBody"></div>
</div>

<script type="application/json" id="data">${dataJson}</script>
<script>
const DATA = JSON.parse(document.getElementById('data').textContent);
const ITEMS = DATA.items;
const CATEGORIES = [...new Set(ITEMS.map(i => i.category))];

let activeCategory = 'All';
let currentIndex = 0;
let currentList = ITEMS;

function thumbScale(preset, boxW, boxH){
  return Math.min(boxW / preset.w, boxH / preset.h);
}

function renderFilters(){
  const el = document.getElementById('filters');
  const all = [['All', ITEMS.length], ...CATEGORIES.map(c => [c, ITEMS.filter(i=>i.category===c).length])];
  el.innerHTML = all.map(([c,n]) =>
    \`<button class="chip \${c===activeCategory?'on':''}" data-cat="\${c}">\${c}<span class="n">\${n}</span></button>\`
  ).join('');
  el.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => { activeCategory = btn.dataset.cat; renderGrid(); renderFilters(); window.scrollTo({top:0}); });
  });
}

function renderGrid(){
  const main = document.getElementById('main');
  const cats = activeCategory === 'All' ? CATEGORIES : [activeCategory];
  main.innerHTML = cats.map(cat => {
    const list = ITEMS.filter(i => i.category === cat);
    if(!list.length) return '';
    const cards = list.map(item => {
      const p = item.dims;
      const scale = thumbScale(p, 224, 150);
      return \`<div class="card" data-id="\${item.id}">
        <div class="thumb"><iframe srcdoc="\${item.html.replace(/"/g,'&quot;')}" style="width:\${p.w}px;height:\${p.h}px;transform:scale(\${scale});" scrolling="no" tabindex="-1"></iframe></div>
        <div class="card-foot"><div class="card-title">\${item.title}</div><div class="card-tag">\${item.category}</div></div>
      </div>\`;
    }).join('');
    return \`<section class="cat"><h2>\${cat} <span class="n">\${list.length}</span></h2><div class="grid">\${cards}</div></section>\`;
  }).join('') || '<div class="empty">Nothing here yet.</div>';

  main.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
  });
}

function openModal(id){
  currentList = activeCategory === 'All' ? ITEMS : ITEMS.filter(i => i.category === activeCategory);
  currentIndex = currentList.findIndex(i => i.id === id);
  showCurrent();
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

function showCurrent(){
  const item = currentList[currentIndex];
  const p = item.dims;
  document.getElementById('modalTitle').textContent = item.title + ' — ' + item.category + '  ·  ' + (currentIndex+1) + ' / ' + currentList.length;
  const body = document.getElementById('modalBody');
  const maxW = window.innerWidth - 120;
  const maxH = window.innerHeight - 160;
  const scale = Math.min(1.4, maxW / p.w, maxH / p.h);
  body.innerHTML = \`<iframe srcdoc="\${item.html.replace(/"/g,'&quot;')}" style="width:\${p.w}px;height:\${p.h}px;transform:scale(\${scale});transform-origin:top center;"></iframe>\`;
}

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentList.length) % currentList.length; showCurrent();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentList.length; showCurrent();
});
document.getElementById('closeBtn').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('modal');
  if(!modal.classList.contains('open')) return;
  if(e.key === 'Escape') closeModal();
  if(e.key === 'ArrowRight') document.getElementById('nextBtn').click();
  if(e.key === 'ArrowLeft') document.getElementById('prevBtn').click();
});

renderFilters();
renderGrid();
</script>

</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '..', 'ui-library.html'), page);
console.log('Built ui-library.html with', items.length, 'items across', categories.length, 'categories:', categories.join(', '));
