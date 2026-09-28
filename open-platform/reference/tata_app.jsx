// app.jsx — composition: cross-dissolving beat layers + header/rail/caption, in a Stage.
const { useTimeline: useTL, clamp: clampS } = window;
const LEAD = 0;

function actorColor(actor) {
  const map = { tata:BRAND.tata, kazam:BRAND.kazam, pulse:BRAND.pulse, sundae:BRAND.sundae,
    customer:BRAND.teal, all:BRAND.tata };
  return map[actor] || BRAND.tata;
}

function BeatLayer({ index }) {
  const { time: ctxTime } = useTL();
  const time = (window.__FORCE_T != null) ? window.__FORCE_T : ctxTime;
  const beat = BEATS[index];
  const next = BEATS[index + 1];
  if (!beat || !next || !beat.page) return null;
  const tStart = beat.t, tEnd = next.t, span = tEnd - tStart;

  const winStart = tStart - LEAD;
  if (time < winStart || time >= tEnd) return null;

  const Page = (window.PAGES || {})[beat.page];
  if (!Page) return null;

  const opacity = clampS((time - winStart) / LEAD, 0, 1);
  const lt = time - tStart;            // local time (slightly negative during lead-in)
  const progress = clampS((time - tStart) / span, 0, 1);

  return (
    <div style={{ position:'absolute', inset:0, opacity, zIndex: index + 1, willChange:'opacity' }}>
      <Page lt={Math.max(0, lt)} progress={progress} beat={beat} />
    </div>
  );
}

function Scene() {
  const tl = useTL();
  const [, force] = React.useState(0);
  window.__tl = tl;
  window.__seek = (t) => { window.__FORCE_T = t; force(n => n + 1); };
  const time = (window.__FORCE_T != null) ? window.__FORCE_T : tl.time;
  const { beat, index } = getBeatAt(time);
  const isEnd = beat.type === 'end';
  const lt = Math.max(0, time - beat.t);
  const cap = actorColor(beat.actor);

  return (
    <div style={{ position:'absolute', inset:0, background:'#fff', fontFamily:BRAND.font }}>
      {/* page layers */}
      {BEATS.map((b, i) => <BeatLayer key={i} index={i} />)}

      {/* persistent overlays (hidden on the end card) */}
      {!isEnd && (
        <div style={{ position:'absolute', inset:0, zIndex:200, pointerEvents:'none' }}>
          <Header key={'h'+index} beat={beat} lt={lt} />
        </div>
      )}
    </div>
  );
}

if (!window.__NO_AUTOMOUNT) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <Stage width={1920} height={1080} duration={88} background="#fff" persistKey="bdr-demo">
      <Scene />
    </Stage>
  );
}
