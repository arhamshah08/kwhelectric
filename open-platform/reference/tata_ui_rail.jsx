// ui_rail.jsx — the always-on actor rail + chart helpers (load curve, bars).

const { clamp: _clamp, Easing: _E, interpolate: _interp } = window;

// ── load curve (baseline vs actual, shaded reduction) ────────────────────────
function LoadCurve({ x, y, w, h, progress = 1, color = BRAND.tata }) {
  const n = 48;
  // baseline: rising evening peak. actual: same until event window then dips.
  const base = i => {
    const u = i / (n - 1);
    return 0.5 + 0.42 * Math.sin((u - 0.18) * Math.PI * 0.92);
  };
  const evStart = 0.46, evEnd = 0.86;
  const dip = i => {
    const u = i / (n - 1);
    let b = base(i);
    if (u > evStart && u < evEnd) {
      const m = Math.sin(((u - evStart) / (evEnd - evStart)) * Math.PI);
      b -= 0.30 * m;
    }
    return b;
  };
  const sweep = _clamp(progress, 0, 1);
  const px = i => x + (i / (n - 1)) * w;
  const py = v => y + h - v * h;
  const pts = (fn, upto) => {
    let s = '';
    for (let i = 0; i <= upto; i++) s += `${i === 0 ? 'M' : 'L'}${px(i).toFixed(1)},${py(fn(i)).toFixed(1)} `;
    return s;
  };
  const cut = Math.max(1, Math.floor(sweep * (n - 1)));
  // shaded area between baseline and actual up to sweep
  let area = '';
  for (let i = 0; i <= cut; i++) area += `${i === 0 ? 'M' : 'L'}${px(i).toFixed(1)},${py(base(i)).toFixed(1)} `;
  for (let i = cut; i >= 0; i--) area += `L${px(i).toFixed(1)},${py(dip(i)).toFixed(1)} `;
  area += 'Z';
  // px/py are local to the svg (origin 0,0)
  function pxl(i){ return (i/(n-1))*w; }
  function pyl(v){ return h - v*h; }
  const ptsl = (fn, upto) => { let s=''; for(let i=0;i<=upto;i++) s+=`${i===0?'M':'L'}${pxl(i).toFixed(1)},${pyl(fn(i)).toFixed(1)} `; return s; };
  let areal=''; for(let i=0;i<=cut;i++) areal+=`${i===0?'M':'L'}${pxl(i).toFixed(1)},${pyl(base(i)).toFixed(1)} `;
  for(let i=cut;i>=0;i--) areal+=`L${pxl(i).toFixed(1)},${pyl(dip(i)).toFixed(1)} `; areal+='Z';

  return (
    <svg style={{ position:'absolute', left:x, top:y, overflow:'visible' }} width={w} height={h}>
      {[0,0.25,0.5,0.75,1].map(g => (
        <line key={g} x1={0} x2={w} y1={h-g*h} y2={h-g*h} stroke={BRAND.line} strokeWidth="1" strokeDasharray="3 5" />
      ))}
      <path d={ptsl(base, n-1)} fill="none" stroke={BRAND.mut} strokeWidth="2.5" strokeDasharray="6 6" opacity="0.7" />
      <path d={areal} fill={`${color}1f`} stroke="none" />
      <path d={ptsl(dip, cut)} fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx={pxl(cut)} cy={pyl(dip(cut))} r="6" fill={color} stroke="#fff" strokeWidth="2.5" />
    </svg>
  );
}
window.LoadCurve = LoadCurve;

// ── horizontal contribution bar ──────────────────────────────────────────────
function ContribBar({ segs, progress = 1, h = 22 }) {
  const total = segs.reduce((s, x) => s + x.v, 0);
  return (
    <div style={{ display:'flex', width:'100%', height:h, borderRadius:h/2, overflow:'hidden',
      background:BRAND.faint, border:`1px solid ${BRAND.line}` }}>
      {segs.map((s, i) => (
        <div key={i} style={{ width:`${(s.v/total)*100*_clamp(progress,0,1)}%`, background:s.color,
          transition:'width 200ms' }} />
      ))}
    </div>
  );
}
window.ContribBar = ContribBar;

// ── actor rail ───────────────────────────────────────────────────────────────
function railNodeStyle(active) {
  return {
    opacity: active ? 1 : 0.4,
    filter: active ? 'none' : 'grayscale(0.6)',
    transition: 'opacity 320ms, filter 320ms',
  };
}

function Connector({ on, lt }) {
  const dot = on ? ((lt * 0.9) % 1) : 0;
  return (
    <div style={{ height:38, display:'flex', justifyContent:'center', position:'relative' }}>
      <div style={{ width:2, height:'100%', background: on ? BRAND.tata : BRAND.line,
        opacity: on ? 1 : 0.6, transition:'background 320ms' }} />
      {on && (
        <div style={{ position:'absolute', left:'50%', top:`${dot*100}%`, transform:'translate(-50%,-50%)',
          width:9, height:9, borderRadius:5, background:BRAND.tata,
          boxShadow:`0 0 0 4px ${BRAND.tata}33` }} />
      )}
    </div>
  );
}

function ActorRail({ beat, lt }) {
  const tier = ACTOR_TIER[beat.actor] || 'Utility';
  const all = tier === 'all';
  const uActive = all || tier === 'Utility';
  const aActive = all || tier === 'Aggregator';
  const cActive = all || tier === 'Customer';
  const activeAgg = ['kazam','pulse','sundae'].includes(beat.actor) ? beat.actor : null;
  const allAggHot = beat.actor === 'aggs';

  const tp = PARTICIPANTS.find(p => p.id === 'tata');
  const aggs = PARTICIPANTS.filter(p => p.tier === 'Aggregator');

  return (
    <div style={{ position:'absolute', left:GEO.railX, top:GEO.railY, width:GEO.railW, height:GEO.railH,
      display:'flex', flexDirection:'column', ...rise(lt, 0, 0.6, 18) }}>
      <div style={{ fontFamily:BRAND.mono, fontSize:13, fontWeight:500, letterSpacing:'0.16em',
        color:BRAND.mut, textTransform:'uppercase', marginBottom:16 }}>One artifact · whole network</div>

      {/* Utility */}
      <div style={{ ...railNodeStyle(uActive), background:BRAND.bg, borderRadius:16,
        border:`2px solid ${uActive ? BRAND.tata : BRAND.line}`, padding:'16px 18px',
        boxShadow: uActive ? `0 12px 30px ${BRAND.tata}22` : 'none' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <Brandmark id="tata" color={BRAND.tata} label="Tata Power" size={30} />
          <Tag color={BRAND.tata}>Utility</Tag>
        </div>
        <div style={{ fontFamily:BRAND.font, fontSize:14, color:BRAND.sub, marginTop:10 }}>
          Posts the Flex Offer · awards capacity · settles</div>
      </div>

      <Connector on={aActive || cActive || all} lt={lt} />

      {/* Aggregators */}
      <div style={{ ...railNodeStyle(aActive), background:BRAND.bg, borderRadius:16,
        border:`2px solid ${aActive ? BRAND.ink : BRAND.line}`, padding:'15px 18px',
        boxShadow: aActive ? '0 12px 30px rgba(20,40,80,0.14)' : 'none' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:13 }}>
          <span style={{ fontFamily:BRAND.font, fontWeight:600, fontSize:16.5, color:BRAND.ink }}>5 aggregators</span>
          <span style={{ fontFamily:BRAND.font, fontSize:13.5, color:BRAND.mut }}>discover &amp; bid</span>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:9 }}>
          {aggs.map(a => {
            const hot = activeAgg === a.id || allAggHot;
            return (
              <div key={a.id} style={{ display:'flex', alignItems:'center', gap:11,
                padding:'8px 11px', borderRadius:11,
                background: hot ? `${a.color}14` : BRAND.faint,
                border:`1px solid ${hot ? a.color : BRAND.line}`, transition:'all 240ms' }}>
                <div style={{ width:26, height:26, borderRadius:8, background:a.color, flexShrink:0,
                  display:'flex', alignItems:'center', justifyContent:'center', color:'#fff' }}>
                  <Icon name={{kazam:'car',pulse:'building',sundae:'sun'}[a.id]} size={15} color="#fff" />
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:BRAND.font, fontWeight:600, fontSize:14.5, color:BRAND.ink,
                    lineHeight:1.1 }}>{a.name}</div>
                  <div style={{ fontFamily:BRAND.font, fontSize:12, color:BRAND.mut }}>{a.sub}</div>
                </div>
                {hot && <CheckDot color={a.color} size={18} />}
              </div>
            );
          })}
          <div style={{ display:'flex', alignItems:'center', gap:8, paddingLeft:4 }}>
            <div style={{ display:'flex', gap:5 }}>
              {EXTRA_AGG.map(e => (
                <div key={e.id} style={{ width:22, height:22, borderRadius:7, background:BRAND.faint2,
                  border:`1px solid ${BRAND.line}`, fontFamily:BRAND.font, fontSize:10.5, fontWeight:600,
                  color:BRAND.mut, display:'flex', alignItems:'center', justifyContent:'center' }}>{e.initials}</div>
              ))}
            </div>
            <span style={{ fontFamily:BRAND.font, fontSize:12.5, color:BRAND.mut }}>+ more on the network</span>
          </div>
        </div>
      </div>

      <Connector on={cActive || all} lt={lt} />

      {/* Customers */}
      <div style={{ ...railNodeStyle(cActive), background:BRAND.bg, borderRadius:16,
        border:`2px solid ${cActive ? BRAND.teal : BRAND.line}`, padding:'15px 18px',
        boxShadow: cActive ? `0 12px 30px ${BRAND.teal}22` : 'none' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ display:'flex', alignItems:'center', gap:11 }}>
            <div style={{ width:30, height:30, borderRadius:9,
              background:`linear-gradient(135deg, ${BRAND.teal}, ${BRAND.tata})`,
              display:'flex', alignItems:'center', justifyContent:'center' }}>
              <Icon name="users" size={17} color="#fff" /></div>
            <span style={{ fontFamily:BRAND.font, fontWeight:600, fontSize:16.5, color:BRAND.ink }}>Thousands of homes</span>
          </div>
        </div>
        <div style={{ fontFamily:BRAND.font, fontSize:14, color:BRAND.sub, marginTop:10 }}>
          Each aggregator → 1,000s of EVs, batteries &amp; ACs</div>
      </div>
    </div>
  );
}
window.ActorRail = ActorRail;
