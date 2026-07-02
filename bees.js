// kWh Electric — hero flight bee + architecture defense bee
(function () {
  if (window.__kwhBeesInit) return;
  window.__kwhBeesInit = true;

  function waitForGsap(cb, n) {
    if (window.gsap && window.MotionPathPlugin) {
      gsap.registerPlugin(MotionPathPlugin);
      cb();
    } else if ((n || 0) < 80) {
      setTimeout(() => waitForGsap(cb, (n || 0) + 1), 100);
    }
  }

  function waitForEl(id, cb, n) {
    const el = document.getElementById(id);
    if (el) cb(el);
    else if ((n || 0) < 80) setTimeout(() => waitForEl(id, cb, (n || 0) + 1), 100);
  }

  // ── HERO BEE ───────────────────────────────────────────────────────────────
  function launchBee() {
    const bee    = document.getElementById('bee');
    const land   = document.getElementById('bee-land');
    const hero   = document.getElementById('hero');
    const cellEl = document.getElementById('bee-cell');
    if (!bee || !land || !hero || !cellEl) return;

    const hRect    = hero.getBoundingClientRect();
    const lRect    = land.getBoundingClientRect();
    const cellRect = cellEl.getBoundingClientRect();

    const lx = lRect.left - hRect.left + lRect.width * 0.5 - 28;
    // Feet on "t" crossbar (~22% from glyph top); −13.5 = alignOrigin (62%) to feet + bounce settle
    const ly = lRect.top - hRect.top + lRect.height * 0.22 - 13.5;

    const cellLeft = cellRect.left - hRect.left;
    const cellTop  = cellRect.top  - hRect.top;
    const clipH = 50;
    const pivot = { transformOrigin: '50% 62%' };

    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:2;';
    canvas.width  = Math.round(hRect.width);
    canvas.height = Math.round(hRect.height);
    hero.insertBefore(canvas, hero.firstChild);
    const ctx = canvas.getContext('2d');
    const heroTitle = hero.querySelector('.hero-title') || hero.querySelector('h1');
    const DOT_OPACITY_HONEYCOMB = 0.8;
    const DOT_OPACITY_OVER_TITLE = 0.3;
    let lastDotX = -999, lastDotY = -999;

    function dotOverTitle(bx, by) {
      if (!heroTitle) return false;
      const hR = hero.getBoundingClientRect();
      const tR = heroTitle.getBoundingClientRect();
      const pad = 3.5;
      const left = tR.left - hR.left - pad;
      const top = tR.top - hR.top - pad;
      const right = tR.right - hR.left + pad;
      const bottom = tR.bottom - hR.top + pad;
      return bx >= left && bx <= right && by >= top && by <= bottom;
    }

    function dropDot() {
      const bx = gsap.getProperty(bee, 'x') + 28;
      const by = gsap.getProperty(bee, 'y') + 23;
      if (Math.hypot(bx - lastDotX, by - lastDotY) >= 18) {
        const opacity = dotOverTitle(bx, by) ? DOT_OPACITY_OVER_TITLE : DOT_OPACITY_HONEYCOMB;
        ctx.beginPath();
        ctx.arc(bx, by, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(205,127,50,' + opacity + ')';
        ctx.fill();
        lastDotX = bx;
        lastDotY = by;
      }
    }

    let lastFX = null, lastFY = null, faceSign = 1;
    function flightOrient() {
      const x = gsap.getProperty(bee, 'x');
      const y = gsap.getProperty(bee, 'y');
      if (lastFX !== null) {
        const dx = x - lastFX, dy = y - lastFY;
        if (Math.abs(dx) > 0.6) faceSign = dx < 0 ? -1 : 1;
        let dip = Math.atan2(dy, Math.max(0.0001, Math.abs(dx))) * 180 / Math.PI;
        dip = Math.max(-45, Math.min(45, dip));
        gsap.set(bee, { scaleX: faceSign, scaleY: 1, rotation: faceSign < 0 ? -dip : dip });
      }
      lastFX = x; lastFY = y;
    }

    gsap.set(['#bw1', '#bw2'], { transformOrigin: '50% 100%' });
    const flap = gsap.timeline({ repeat: -1, yoyo: true, paused: true, defaults: { ease: 'sine.inOut' } })
      .to('#bw1', { scaleY: 0.08, duration: 0.10 }, 0)
      .to('#bw2', { scaleY: 0.12, duration: 0.11 }, 0.02);

    const R = Math.min(hRect.height * 0.11, 95);
    const emergeX = cellLeft + 2;
    const emergeY = cellTop;

    function mountBeeOnHero() {
      const bx = gsap.getProperty(bee, 'x');
      const by = gsap.getProperty(bee, 'y');
      hero.appendChild(bee);
      gsap.set(bee, { x: cellLeft + bx, y: cellTop + by });
      cellEl.remove();
    }

    const peekY = clipH - 14;

    gsap.timeline({ delay: 1.0 })
      .set(bee, { x: 2, y: clipH + 20, opacity: 1, scale: 1, rotation: 0, ...pivot })
      .to(bee, { y: peekY, duration: 0.8, ease: 'power2.out' })
      .to(bee, { rotation: -25, duration: 0.5 })
      .to(bee, { rotation: 25, duration: 0.5 })
      .to(bee, { rotation: 0, duration: 0.4 })
      .call(() => flap.play())
      .to(bee, { y: 0, duration: 0.6, ease: 'back.out(1.7)' })
      .call(mountBeeOnHero)
      .to(bee, {
        duration: 9.6,
        ease: 'power1.inOut',
        onUpdate: () => { dropDot(); flightOrient(); },
        motionPath: {
          path: [
            { x: emergeX,       y: emergeY       },
            { x: lx - 1.7 * R,  y: ly - 0.10 * R },
            { x: lx - 0.65 * R, y: ly - 0.55 * R },
            { x: lx + 0.25 * R, y: ly - 1.20 * R },
            { x: lx + 0.60 * R, y: ly - 1.85 * R },
            { x: lx - 0.20 * R, y: ly - 2.35 * R },
            { x: lx - 1.00 * R, y: ly - 1.75 * R },
            { x: lx - 0.65 * R, y: ly - 1.05 * R },
            { x: lx + 0.30 * R, y: ly - 0.45 * R },
            { x: lx,            y: ly           }
          ],
          curviness: 1.1,
          autoRotate: false,
          alignOrigin: [0.5, 0.62]
        }
      })
      .call(() => flap.pause())
      .to(bee, { rotation: -8, scaleX: 1, scaleY: 1, y: '+=4', duration: 0.22, ease: 'bounce.out' })
      .call(() => {
        gsap.set(['#bw1', '#bw2'], { scaleY: 1, transformOrigin: '50% 100%' });
        gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: 'sine.inOut' } })
          .to('#bw1', { scaleY: 0.62, duration: 0.42 }, 0)
          .to('#bw2', { scaleY: 0.68, duration: 0.46 }, 0.05);
        // Pin the bee to the "t" and keep it there through zoom/resize.
        // Delta captures motionPath align offsets + bounce settle empirically.
        const dx = gsap.getProperty(bee, 'x') - lx;
        const dy = gsap.getProperty(bee, 'y') - ly;
        const pin = () => {
          const hR = hero.getBoundingClientRect();
          const lR = land.getBoundingClientRect();
          gsap.set(bee, {
            x: lR.left - hR.left + lR.width * 0.5 - 28 + dx,
            y: lR.top  - hR.top  + lR.height * 0.22 - 13.5 + dy
          });
        };
        pin();
        window.addEventListener('resize', pin);
      });
  }

  // ── ARCHITECTURE STACK DEFENSE ─────────────────────────────────────────────
  function beeSVGMarkup(idp, bodyFill) {
    return (
      '<svg viewBox="0 0 56 38" width="56" height="38" aria-hidden="true">' +
        '<defs><clipPath id="' + idp + '-clip"><ellipse cx="26" cy="23" rx="17" ry="9.5"/></clipPath></defs>' +
        '<ellipse cx="26" cy="23" rx="17" ry="9.5" fill="' + bodyFill + '"/>' +
        '<g clip-path="url(#' + idp + '-clip)">' +
          '<rect x="13" y="13" width="5.5" height="20" fill="#1a1a1a" rx="0.5"/>' +
          '<rect x="25" y="13" width="5.5" height="20" fill="#1a1a1a" rx="0.5"/>' +
        '</g>' +
        '<circle cx="44" cy="22" r="7.5" fill="' + bodyFill + '"/>' +
        '<circle id="' + idp + '-eye" cx="47" cy="19" r="2.2" fill="#1a1a1a"/>' +
        '<circle id="' + idp + '-eyehi" cx="47.8" cy="18.4" r="0.7" fill="#fff"/>' +
        '<polygon points="9,20 9,26 3,23" fill="#666"/>' +
        '<line x1="41" y1="15" x2="35" y2="4" stroke="#1a1a1a" stroke-width="1.3" stroke-linecap="round"/>' +
        '<circle cx="35" cy="4" r="1.9" fill="#1a1a1a"/>' +
        '<line x1="45" y1="14" x2="43" y2="3" stroke="#1a1a1a" stroke-width="1.3" stroke-linecap="round"/>' +
        '<circle cx="43" cy="3" r="1.9" fill="#1a1a1a"/>' +
        '<ellipse id="' + idp + '-w1" cx="17" cy="9" rx="14" ry="8.5" fill="rgba(210,235,255,0.88)" stroke="rgba(140,180,230,0.6)" stroke-width="0.8"/>' +
        '<ellipse id="' + idp + '-w2" cx="21" cy="21" rx="11" ry="6.5" fill="rgba(210,235,255,0.75)" stroke="rgba(140,180,230,0.5)" stroke-width="0.7"/>' +
      '</svg>'
    );
  }

  function mountStackDefense() {
    if (window.__kwhStackDefense) return;
    window.__kwhStackDefense = true;
    const sec  = document.getElementById('architecture');
    const land = document.getElementById('stack-bee-land');
    if (!sec || !land) return;
    if (getComputedStyle(sec).position === 'static') sec.style.position = 'relative';

    const yb = document.createElement('div');
    yb.id = 'stack-bee';
    yb.style.cssText = 'position:absolute;top:0;left:0;width:56px;height:38px;pointer-events:none;z-index:6;';
    yb.innerHTML = beeSVGMarkup('sb', '#FBCF2E');
    sec.appendChild(yb);

    const ring = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    ring.id = 'stack-shield';
    ring.setAttribute('style',
      'position:absolute;pointer-events:none;z-index:1;overflow:visible;transform-origin:50% 50%;');
    const ringPoly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    ringPoly.setAttribute('fill', 'none');
    ringPoly.setAttribute('stroke', 'rgba(28,20,6,0.5)');
    ringPoly.setAttribute('stroke-width', '4');
    ringPoly.setAttribute('stroke-dasharray', '12 8');
    ring.appendChild(ringPoly);
    sec.appendChild(ring);

    const ripple = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    ripple.setAttribute('style',
      'position:absolute;width:46px;height:46px;pointer-events:none;z-index:1;opacity:0;overflow:visible;');
    const ripplePoly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    ripplePoly.setAttribute('fill', 'none');
    ripplePoly.setAttribute('stroke', 'rgba(205,127,50,0.9)');
    ripplePoly.setAttribute('stroke-width', '2');
    ripple.appendChild(ripplePoly);
    sec.appendChild(ripple);

    const bb = document.createElement('div');
    bb.id = 'stack-bee2';
    bb.style.cssText = 'position:absolute;top:0;left:0;width:56px;height:38px;pointer-events:none;z-index:1;';
    bb.innerHTML = beeSVGMarkup('sbb', '#1a1a1a');
    sec.appendChild(bb);
    gsap.set(bb, { xPercent:-50, yPercent:-50, scale:1.32, transformOrigin:'50% 50%', x:-9999, y:-9999, opacity:0 });

    const C = { x:0, y:0 };
    let D = 0;

    function hexPoints(cx, cy, r) {
      const pts = [];
      for (let i = 0; i < 6; i++) {
        const ang = (Math.PI / 3) * i - Math.PI / 2;
        pts.push((cx + r * Math.cos(ang)).toFixed(1) + ',' + (cy + r * Math.sin(ang)).toFixed(1));
      }
      return pts.join(' ');
    }

    function layout() {
      const sR = sec.getBoundingClientRect();
      const lR = land.getBoundingClientRect();
      gsap.set(yb, { x: lR.left - sR.left + lR.width * 0.5 - 28,
                     y: lR.top  - sR.top  - 22,
                     transformOrigin: '50% 62%' });
      C.x = lR.left - sR.left + lR.width * 0.5;
      C.y = lR.top  - sR.top  + lR.height * 0.5;
      D = Math.min(sR.height * 1.08, window.innerWidth * 0.8);
      ring.setAttribute('width', D);
      ring.setAttribute('height', D);
      ring.style.left = (C.x - D / 2) + 'px';
      ring.style.top  = (C.y - D / 2) + 'px';
      ringPoly.setAttribute('points', hexPoints(D / 2, D / 2, D / 2 - 6));
      ripplePoly.setAttribute('points', hexPoints(23, 23, 20));
    }
    layout();
    window.addEventListener('resize', layout);

    gsap.set(['#sb-w1', '#sb-w2'], { transformOrigin:'50% 100%' });
    gsap.timeline({ repeat:-1, yoyo:true, defaults:{ ease:'sine.inOut' } })
      .to('#sb-w1', { scaleY:0.62, duration:0.42 }, 0)
      .to('#sb-w2', { scaleY:0.68, duration:0.46 }, 0.05);

    gsap.set(['#sbb-w1', '#sbb-w2'], { transformOrigin:'50% 100%' });
    gsap.timeline({ repeat:-1, yoyo:true, defaults:{ ease:'sine.inOut' } })
      .to('#sbb-w1', { scaleY:0.10, duration:0.10 }, 0)
      .to('#sbb-w2', { scaleY:0.14, duration:0.11 }, 0.02);

    // Eyes glance left and right, forever — gives the bee a curious personality.
    gsap.to(['#sbb-eye', '#sbb-eyehi'], {
      x:-2.6, duration:0.85, repeat:-1, yoyo:true, ease:'sine.inOut'
    });

    function orientToward(el, px, py, tx, ty, base) {
      const dx = tx - px, dy = ty - py;
      const faceLeft = dx < 0;
      let dip = Math.atan2(dy, Math.abs(dx)) * 180 / Math.PI;
      dip = Math.max(-45, Math.min(45, dip));
      gsap.set(el, { scaleX: faceLeft ? -base : base, scaleY: base, rotation: faceLeft ? -dip : dip });
    }

    function radius(name) {
      const Rr = D / 2;
      if (name === 'start')  return Rr + 150;
      if (name === 'hit')    return Rr + 22;
      if (name === 'recoil') return Rr + 120;
      return Rr;
    }
    const a = { ang:0, from:'start', to:'hit', t:0 };
    function place() {
      const r = radius(a.from) + (radius(a.to) - radius(a.from)) * a.t;
      const x = C.x + r * Math.cos(a.ang);
      const y = C.y + r * Math.sin(a.ang);
      gsap.set(bb, { x, y });
      orientToward(bb, x, y, C.x, C.y, 1.32);
    }
    function impact() {
      const Rr = D / 2;
      gsap.set(ripple, {
        left: C.x + Rr * Math.cos(a.ang),
        top:  C.y + Rr * Math.sin(a.ang),
        xPercent:-50, yPercent:-50, scale:0.3, opacity:0.95
      });
      gsap.to(ripple, { scale:1.9, opacity:0, duration:0.6, ease:'power2.out' });
      gsap.fromTo(ring, { scale:1 }, { scale:1.015, duration:0.13, yoyo:true, repeat:1, ease:'sine.inOut' });
    }
    function yellowLook(deg) {
      const left = Math.cos(deg * Math.PI / 180) < 0;
      gsap.to('#stack-bee', { scaleX: left ? -1 : 1, scaleY:1, rotation: left ? 16 : -16,
                              duration:0.8, ease:'sine.inOut' });
    }
    function yellowRest() {
      gsap.to('#stack-bee', { scaleX:1, scaleY:1, rotation:0, duration:0.6, ease:'sine.inOut' });
    }

    gsap.set(ring, { scale:0 });
    const master = gsap.timeline({ paused:true });
    master.to(ring, { scale:1, duration:0.9, ease:'back.out(1.4)' });

    // One attempt only — the strike fails, and the bee gives up on attacking.
    master
      .call(() => { a.ang = 150 * Math.PI / 180; a.from='start'; a.to='hit'; a.t=0; place(); })
      .to(bb, { opacity:0.95, duration:0.25 }, '<')
      .call(yellowLook, [150], '<')
      .to(a, { t:1, duration:1.25, ease:'power1.in', onUpdate:place })
      .call(impact)
      .call(() => { a.from='hit'; a.to='recoil'; a.t=0; })
      .call(yellowRest, null, '<')
      .to(a, { t:1, duration:0.55, ease:'power2.out', onUpdate:place });

    // ── Personality: one failed strike, then it sulks, spies, and settles ──
    let resting = false;
    function l5Rest() {
      const sR = sec.getBoundingClientRect();
      const row = sec.querySelector('[data-grid]');     // first row = L5
      const lR = (row || sec).getBoundingClientRect();
      // Feet on the L5 top border line, at its left edge
      return { x: lR.left - sR.left + 30, y: lR.top - sR.top - 18 };
    }
    function secW() { return sec.getBoundingClientRect().width; }

    master
      // backs away to the L5 line, still watching the barrier
      .to(bb, { x:() => l5Rest().x, y:() => l5Rest().y, duration:0.9, ease:'power2.inOut' })
      .set(bb, { scaleX:1.32, scaleY:1.32, rotation:0 })     // perch level, facing the stack
      // sits for a moment, glancing both ways
      .to(bb, { scaleX:-1.32, duration:0.4, ease:'sine.inOut' }, '+=0.6')
      .to(bb, { scaleX: 1.32, duration:0.4, ease:'sine.inOut' }, '+=0.45')
      .to({}, { duration:0.5 })
      // then flies out of the screen to the left
      .set(bb, { scaleX:-1.32 })
      .to(bb, { x:-130, y:'-=40', opacity:0, duration:0.85, ease:'power2.in' })
      .to({}, { duration:1.0 })
      // peek #1 — edges in from the right, eyes showing, looks one way then the other
      .call(() => {
        gsap.set(bb, { x:secW() + 90, y:sec.getBoundingClientRect().height * 0.38, scaleX:-1.32, scaleY:1.32, rotation:0 });
      })
      .to(bb, { x:() => secW() - 44, opacity:0.95, duration:0.7, ease:'power2.out' })
      .to(bb, { scaleX: 1.32, duration:0.4, ease:'sine.inOut' }, '+=0.7')
      .to(bb, { scaleX:-1.32, duration:0.4, ease:'sine.inOut' }, '+=0.45')
      .to(bb, { x:() => secW() + 90, opacity:0, duration:0.6, ease:'power2.in' }, '+=0.5')
      .to({}, { duration:0.9 })
      // peek #2 — drops in from the top, same routine
      .call(() => {
        gsap.set(bb, { x:secW() * 0.30, y:-90, scaleX:1.32, scaleY:1.32, rotation:0 });
      })
      .to(bb, { y:52, opacity:0.95, duration:0.7, ease:'power2.out' })
      .to(bb, { scaleX:-1.32, duration:0.4, ease:'sine.inOut' }, '+=0.6')
      .to(bb, { scaleX: 1.32, duration:0.4, ease:'sine.inOut' }, '+=0.45')
      .to(bb, { y:-90, opacity:0, duration:0.6, ease:'power2.in' }, '+=0.5')
      .to({}, { duration:0.9 })
      // returns to its original perch by L5 — and never attacks again
      .call(() => {
        const r = l5Rest();
        gsap.set(bb, { x:-90, y:r.y - 30, scaleX:1.32, scaleY:1.32, rotation:0 });
      })
      .to(bb, { x:() => l5Rest().x, y:() => l5Rest().y, opacity:0.95, duration:0.9, ease:'power2.out' })
      .call(() => { resting = true; });

    // Keep the perched bee glued to the L5 line through zoom/resize.
    window.addEventListener('resize', () => {
      if (resting) { const r = l5Rest(); gsap.set(bb, { x:r.x, y:r.y }); }
    });

    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !started) {
          started = true;
          layout();
          place();
          master.play(0);
          io.disconnect();
        }
      });
    }, { threshold: 0.45 });
    io.observe(sec);
  }

  function initFlipPin() {
    if (window.__kwhFlipPin) return;
    window.__kwhFlipPin = true;
    document.addEventListener('click', function (e) {
      const card = e.target.closest('[data-flip]');
      if (card) card.classList.toggle('pinned');
    });
  }

  function boot() {
    initFlipPin();
    waitForGsap(() => {
      waitForEl('bee', () => setTimeout(launchBee, 700));
      waitForEl('stack-bee-land', () => mountStackDefense());
    });
  }

  if (document.readyState === 'complete') boot();
  else window.addEventListener('load', boot);
})();
