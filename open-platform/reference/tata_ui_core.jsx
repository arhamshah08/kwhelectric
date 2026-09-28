// ui_core.jsx — entrance helpers, device frames, header, caption, cursor,
// small UI atoms, brand marks, and the actor rail. Registers into window.

const { clamp, Easing } = window;

// ── geometry shared across scenes ────────────────────────────────────────────
const GEO = {
  W: 1920, H: 1080,
  stageX: 64, stageY: 110, stageW: 1760, stageH: 880,
  capY: 1010, capH: 60,
  railX: 1900, railY: 110, railW: 0, railH: 0,
  headY: 44,
};
window.GEO = GEO;

// ── entrance helpers (drive off localTime seconds) ───────────────────────────
function rise(lt, start = 0, dur = 0.5, dist = 16) {
  const t = clamp((lt - start) / dur, 0, 1);
  const e = Easing.easeOutCubic(t);
  return { opacity: clamp(t * 1.5, 0, 1), transform: `translateY(${(1 - e) * dist}px)` };
}
function pop(lt, start = 0, dur = 0.5) {
  const t = clamp((lt - start) / dur, 0, 1);
  const e = Easing.easeOutBack(t);
  return { opacity: clamp(t * 1.8, 0, 1), transform: `scale(${0.82 + 0.18 * e})` };
}
function fade(lt, start = 0, dur = 0.4) {
  return { opacity: clamp((lt - start) / dur, 0, 1) };
}
window.rise = rise; window.pop = pop; window.fade = fade;

// ── icon set (hairline stroke) ───────────────────────────────────────────────
const PATHS = {
  bolt:      'M13 2 4 14h6l-1 8 9-12h-6l1-8z',
  broadcast: 'M5 9a7 7 0 0 1 14 0M8 11a4 4 0 0 1 8 0M12 13v0',
  check:     'M4 12l5 5L20 6',
  lock:      'M6 10V8a6 6 0 0 1 12 0v2M5 10h14v10H5z',
  phone:     'M7 2h10v20H7zM10 19h4',
  car:       'M3 13l2-5h14l2 5v5h-3v-2H6v2H3zM6.5 16h.01M17.5 16h.01',
  battery:   'M3 8h15v8H3zM18 11h2v2h-2M7 12h4',
  building:  'M5 21V4h9v17M14 9h5v12M8 8h1M8 12h1M8 16h1',
  sun:       'M12 4v2M12 18v2M4 12h2M18 12h2M6 6l1.5 1.5M16.5 16.5 18 18M18 6l-1.5 1.5M7.5 16.5 6 18M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  leaf:      'M5 19c0-8 6-13 14-13 0 8-6 13-14 13zM5 19c2-4 5-7 9-9',
  users:     'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20a6 6 0 0 1 12 0M17 11a3 3 0 1 0 0-6M16 14a6 6 0 0 1 5 6',
  send:      'M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z',
  grid:      'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  clock:     'M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z',
  trend:     'M3 17l6-6 4 4 8-8M21 7v5h-5',
  shield:    'M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z',
  spark:     'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18',
};
function Icon({ name, size = 18, color = 'currentColor', sw = 1.7, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}
      stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d={PATHS[name] || ''} />
    </svg>
  );
}
window.Icon = Icon;

// ── brand mark for a participant ─────────────────────────────────────────────
function Brandmark({ id, color, label, size = 30, showText = true, glyph }) {
  const glyphFor = { tata:'bolt', kazam:'car', pulse:'building', sundae:'sun', customer:'users' };
  return (
    <div style={{ display:'flex', alignItems:'center', gap:11 }}>
      <div style={{
        width:size, height:size, borderRadius: id==='tata'?7:9, flexShrink:0,
        background: id==='tata' ? `linear-gradient(135deg, ${BRAND.tata}, ${BRAND.teal})` : color,
        display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow:`0 4px 12px ${color}33`,
      }}>
        <Icon name={glyph || glyphFor[id] || 'bolt'} size={size*0.56} color="#fff" sw={2} />
      </div>
      {showText && (
        <span style={{
          fontFamily:BRAND.font, fontWeight:600, fontSize:size*0.62, color:BRAND.ink,
          letterSpacing:'-0.01em', whiteSpace:'nowrap',
        }}>{label}</span>
      )}
    </div>
  );
}
window.Brandmark = Brandmark;

// ── traffic lights ───────────────────────────────────────────────────────────
function TrafficLights() {
  return (
    <div style={{ display:'flex', gap:8 }}>
      {['#FF5F57','#FEBC2E','#28C840'].map(c => (
        <div key={c} style={{ width:12, height:12, borderRadius:6, background:c }} />
      ))}
    </div>
  );
}

// ── browser frame (chrome bar + url + body) ──────────────────────────────────
function BrowserFrame({ url, accent = BRAND.tata, children, x = GEO.stageX, y = GEO.stageY,
  w = GEO.stageW, h = GEO.stageH, style }) {
  return (
    <div style={{
      position:'absolute', left:x, top:y, width:w, height:h,
      background:'#fff', borderRadius:16, overflow:'hidden',
      border:`1px solid ${BRAND.line}`,
      boxShadow:'0 30px 70px rgba(20,40,80,0.13), 0 4px 14px rgba(20,40,80,0.06)',
      display:'flex', flexDirection:'column', ...style,
    }}>
      <div style={{
        height:48, flexShrink:0, display:'flex', alignItems:'center', gap:16, padding:'0 18px',
        borderBottom:`1px solid ${BRAND.line}`, background:'#FBFCFE',
      }}>
        <TrafficLights />
        <div style={{
          flex:1, maxWidth:560, height:30, borderRadius:8, background:'#fff',
          border:`1px solid ${BRAND.line}`, display:'flex', alignItems:'center', gap:8,
          padding:'0 12px', marginLeft:6,
        }}>
          <Icon name="lock" size={13} color={BRAND.mut} sw={1.8} />
          <span style={{ fontFamily:BRAND.mono, fontSize:13, color:BRAND.sub, letterSpacing:'-0.01em',
            whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{url}</span>
        </div>
        <div style={{ width:46, height:4, borderRadius:2, background:BRAND.line }} />
      </div>
      <div style={{ flex:1, position:'relative', overflow:'hidden' }}>{children}</div>
    </div>
  );
}
window.BrowserFrame = BrowserFrame;

// ── phone frame ──────────────────────────────────────────────────────────────
function PhoneFrame({ children, x, y = GEO.stageY + 2, w = 360, h = 720, statusColor = '#0B1524', style }) {
  const px = x != null ? x : GEO.stageX + (GEO.stageW - w) / 2;
  const notchW = Math.min(108, Math.round(w * 0.38));
  const sidePad = Math.max(14, Math.min(26, Math.round(w * 0.08)));
  return (
    <div style={{
      position:'absolute', left:px, top:y, width:w, height:h,
      background:'#0B1524', borderRadius:46, padding:11,
      boxShadow:'0 36px 80px rgba(20,40,80,0.22), 0 6px 18px rgba(20,40,80,0.1)', ...style,
    }}>
      <div style={{
        width:'100%', height:'100%', background:'#fff', borderRadius:36, overflow:'hidden',
        position:'relative', display:'flex', flexDirection:'column',
      }}>
        <div style={{ height:40, flexShrink:0, display:'flex', alignItems:'center',
          justifyContent:'space-between', padding:`0 ${sidePad}px`, position:'relative' }}>
          <span style={{ fontFamily:BRAND.font, fontWeight:600, fontSize:14, color:statusColor }}>6:00</span>
          <div style={{ position:'absolute', left:'50%', top:9, transform:'translateX(-50%)',
            width:notchW, height:24, background:'#0B1524', borderRadius:14 }} />
          <div style={{ display:'flex', gap:5, alignItems:'center', color:statusColor }}>
            <Icon name="broadcast" size={14} color={statusColor} sw={2} />
            <div style={{ width:22, height:11, border:`1.5px solid ${statusColor}`, borderRadius:3,
              position:'relative' }}>
              <div style={{ position:'absolute', inset:1.5, width:'72%', background:statusColor, borderRadius:1 }} />
            </div>
          </div>
        </div>
        <div style={{ flex:1, position:'relative', overflow:'hidden' }}>{children}</div>
      </div>
    </div>
  );
}
window.PhoneFrame = PhoneFrame;

// ── header strip (act label + network chip) ──────────────────────────────────
function Header({ beat, lt }) {
  const a = rise(lt, 0, 0.5);
  return (
    <div style={{ position:'absolute', left:GEO.stageX, top:GEO.headY, width:GEO.W - GEO.stageX*2,
      display:'flex', alignItems:'center', justifyContent:'space-between', ...a }}>
      <div style={{ display:'flex', alignItems:'center', gap:14 }}>
        <span style={{ fontFamily:BRAND.font, fontSize:20, fontWeight:600,
          color:BRAND.ink, letterSpacing:'-0.01em' }}>
          {beat.act ? `${beat.act} · ` : ''}Networks for Humanity Demand Response
        </span>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 18px', borderRadius:999,
        background:BRAND.faint, border:`1px solid ${BRAND.line}` }}>
        <span style={{ width:9, height:9, borderRadius:5, background:BRAND.good,
          boxShadow:`0 0 0 5px ${BRAND.good}22`, flexShrink:0 }} />
        <span style={{ fontFamily:BRAND.font, fontSize:16, fontWeight:500, color:BRAND.sub,
          letterSpacing:'0.01em' }}>NFH DEG network · live</span>
      </div>
    </div>
  );
}
window.Header = Header;

// ── caption band (light, colored left border) ────────────────────────────────
function Caption({ text, color = BRAND.tata, lt }) {
  const a = rise(lt, 0.15, 0.55, 12);
  return (
    <div style={{
      position:'absolute', left:GEO.stageX, top:GEO.capY, width:GEO.stageW, minHeight:GEO.capH,
      background:'rgba(255,255,255,0.92)', backdropFilter:'blur(2px)',
      borderRadius:14, border:`1px solid ${BRAND.line}`, borderLeft:`5px solid ${color}`,
      boxShadow:'0 10px 30px rgba(20,40,80,0.08)',
      display:'flex', alignItems:'center', padding:'0 34px', ...a,
    }}>
      <p style={{ margin:0, fontFamily:BRAND.font, fontWeight:400, fontSize:27, lineHeight:1.32,
        color:BRAND.ink, letterSpacing:'-0.01em', textWrap:'pretty' }}>{text}</p>
    </div>
  );
}
window.Caption = Caption;

// ── animated cursor ──────────────────────────────────────────────────────────
function Cursor({ x, y, pressed = false, opacity = 1 }) {
  return (
    <div style={{ position:'absolute', left:x, top:y, opacity, zIndex:50, pointerEvents:'none',
      transform:`scale(${pressed ? 0.86 : 1})`, transition:'transform 90ms', willChange:'left, top' }}>
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
        <path d="M5 3l15 8-6 1.5L11 19 5 3z" fill="#0B1524" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
      {pressed && <div style={{ position:'absolute', left:2, top:2, width:26, height:26, borderRadius:13,
        border:'2px solid rgba(19,102,224,0.5)', transform:'scale(1.4)' }} />}
    </div>
  );
}
window.Cursor = Cursor;

// ── atoms ────────────────────────────────────────────────────────────────────
function StatTile({ label, value, sub, icon, color = BRAND.tata, w }) {
  return (
    <div style={{ flex: w ? `0 0 ${w}px` : 1, background:BRAND.faint, borderRadius:14,
      border:`1px solid ${BRAND.line}`, padding:'16px 18px' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
        <span style={{ fontFamily:BRAND.font, fontSize:12, fontWeight:600, letterSpacing:'0.08em',
          color:BRAND.mut, textTransform:'uppercase' }}>{label}</span>
        {icon && <div style={{ width:30, height:30, borderRadius:9, background:color,
          display:'flex', alignItems:'center', justifyContent:'center' }}>
          <Icon name={icon} size={16} color="#fff" /></div>}
      </div>
      <div style={{ fontFamily:BRAND.font, fontWeight:600, fontSize:30, color:BRAND.ink, marginTop:6,
        lineHeight:1 }}>{value}</div>
      {sub && <div style={{ fontFamily:BRAND.font, fontSize:13, color:BRAND.sub, marginTop:6 }}>{sub}</div>}
    </div>
  );
}
window.StatTile = StatTile;

function Tag({ children, color = BRAND.tata, solid = false }) {
  return (
    <span style={{ fontFamily:BRAND.font, fontSize:13, fontWeight:600, padding:'3px 11px',
      borderRadius:999, letterSpacing:'0.01em',
      color: solid ? '#fff' : color, background: solid ? color : `${color}18`,
      border: solid ? 'none' : `1px solid ${color}33` }}>{children}</span>
  );
}
window.Tag = Tag;

function Btn({ children, color = BRAND.tata, ghost = false, big = false, glow = false }) {
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:8,
      fontFamily:BRAND.font, fontWeight:600, fontSize: big ? 18 : 15.5,
      padding: big ? '13px 26px' : '10px 20px', borderRadius:11,
      color: ghost ? BRAND.ink : '#fff', background: ghost ? '#fff' : color,
      border: ghost ? `1px solid ${BRAND.lineS}` : 'none',
      boxShadow: glow ? `0 10px 26px ${color}55` : 'none' }}>{children}</span>
  );
}
window.Btn = Btn;

function Field({ label, value, ph, w, accent }) {
  return (
    <div style={{ flex: w ? `0 0 ${w}px` : 1 }}>
      <div style={{ fontFamily:BRAND.font, fontSize:13.5, fontWeight:500, color:BRAND.sub, marginBottom:7 }}>{label}</div>
      <div style={{ height:46, borderRadius:10, background:'#fff',
        border:`1.5px solid ${value ? (accent || BRAND.tata) : BRAND.line}`,
        display:'flex', alignItems:'center', padding:'0 14px',
        fontFamily:BRAND.font, fontSize:15.5, fontWeight: value?500:400,
        color: value ? BRAND.ink : BRAND.mut }}>{value || ph}</div>
    </div>
  );
}
window.Field = Field;

function Toggle({ on = true, color = BRAND.tata }) {
  return (
    <div style={{ width:46, height:27, borderRadius:14, background: on ? color : BRAND.lineS,
      position:'relative', flexShrink:0, transition:'background 200ms' }}>
      <div style={{ position:'absolute', top:3, left: on ? 22 : 3, width:21, height:21, borderRadius:11,
        background:'#fff', boxShadow:'0 1px 3px rgba(0,0,0,0.25)', transition:'left 200ms' }} />
    </div>
  );
}
window.Toggle = Toggle;

function CheckDot({ color = BRAND.good, size = 22 }) {
  return (
    <div style={{ width:size, height:size, borderRadius:size/2, background:color, flexShrink:0,
      display:'flex', alignItems:'center', justifyContent:'center' }}>
      <Icon name="check" size={size*0.62} color="#fff" sw={2.6} />
    </div>
  );
}
window.CheckDot = CheckDot;

Object.assign(window, { TrafficLights });
