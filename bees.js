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
    // Feet on upper "t" stem (~12% from glyph top); −13.5 = alignOrigin (62%) to feet + bounce settle
    const LAND_Y_FRAC = 0.12;
    const LAND_Y_OFF = -13.5;
    const ly = lRect.top - hRect.top + lRect.height * LAND_Y_FRAC + LAND_Y_OFF;

    const cellLeft = cellRect.left - hRect.left;
    const cellTop  = cellRect.top  - hRect.top;
    const clipH = 50;
    const pivot = { transformOrigin: '50% 62%' };

    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:9;';
    canvas.width  = Math.round(hRect.width);
    canvas.height = Math.round(hRect.height);
    hero.appendChild(canvas);

    /* Side-profile bee used once free of the hive (not the face peeker). */
    function sideViewBeeSVG() {
      return (
        '<defs><clipPath id="bee-body-clip"><ellipse cx="26" cy="23" rx="17" ry="9.5"/></clipPath></defs>' +
        '<ellipse cx="26" cy="23" rx="17" ry="9.5" fill="#F6C95C"/>' +
        '<g clip-path="url(#bee-body-clip)">' +
          '<rect x="13" y="13" width="5.5" height="20" fill="#1a1a1a" rx="0.5"/>' +
          '<rect x="25" y="13" width="5.5" height="20" fill="#1a1a1a" rx="0.5"/>' +
        '</g>' +
        '<circle cx="44" cy="22" r="7.5" fill="#F6C95C"/>' +
        '<circle cx="47" cy="19" r="2.2" fill="#1a1a1a"/>' +
        '<circle cx="47.8" cy="18.4" r="0.7" fill="#fff"/>' +
        '<ellipse cx="42" cy="26" rx="3.2" ry="2.1" fill="#E8998D"/>' +
        '<polygon points="9,20 9,26 3,23" fill="#666"/>' +
        '<line x1="41" y1="15" x2="35" y2="4" stroke="#1a1a1a" stroke-width="1.3" stroke-linecap="round"/>' +
        '<circle cx="35" cy="4" r="1.9" fill="#C2932A"/>' +
        '<line x1="45" y1="14" x2="43" y2="3" stroke="#1a1a1a" stroke-width="1.3" stroke-linecap="round"/>' +
        '<circle cx="43" cy="3" r="1.9" fill="#C2932A"/>' +
        '<ellipse id="bw1" cx="17" cy="9" rx="14" ry="8.5" fill="rgba(255,248,228,0.92)" stroke="rgba(194,147,42,0.55)" stroke-width="0.8"/>' +
        '<ellipse id="bw2" cx="21" cy="21" rx="11" ry="6.5" fill="rgba(255,248,228,0.78)" stroke="rgba(194,147,42,0.45)" stroke-width="0.7"/>'
      );
    }
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
        dip = Math.max(-30, Math.min(30, dip)); /* never invert; max ~30° tilt */
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
      /* Swap face-peeker → side profile the moment it leaves the cell */
      bee.innerHTML = sideViewBeeSVG();
      bee.setAttribute('viewBox', '0 0 56 38');
      bee.setAttribute('width', '56');
      bee.setAttribute('height', '38');
      bee.style.zIndex = '10';
      bee.style.overflow = 'visible';
      hero.appendChild(bee);
      gsap.set(bee, { x: cellLeft + bx, y: cellTop + by, rotation: Math.max(-30, Math.min(30, gsap.getProperty(bee, 'rotation') || 0)) });
      cellEl.remove();
      gsap.set(['#bw1', '#bw2'], { transformOrigin: '50% 100%' });
    }

    const peekY = clipH - 14;

    gsap.timeline({ delay: 1.0 })
      .set(bee, { x: 2, y: clipH + 20, opacity: 1, scale: 1, rotation: 0, ...pivot })
      .to(bee, { y: peekY, duration: 0.8, ease: 'power2.out' })
      .to(bee, { rotation: -18, duration: 0.5 })
      .to(bee, { rotation: 18, duration: 0.5 })
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
        gsap.to(canvas, { opacity: 0, duration: 0.35, ease: 'power1.out', onComplete: () => canvas.remove() });
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
            y: lR.top  - hR.top  + lR.height * LAND_Y_FRAC + LAND_Y_OFF + dy
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

    const SHIELD_STROKE_BRIGHT = 'rgba(205,127,50,0.85)';
    const SHIELD_STROKE_REST   = 'rgba(28,20,6,0.5)';

    const ring = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    ring.id = 'stack-shield';
    ring.setAttribute('style',
      'position:absolute;pointer-events:none;z-index:1;overflow:visible;transform-origin:50% 50%;');
    const ringPoly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    ringPoly.setAttribute('fill', 'none');
    ringPoly.setAttribute('stroke', SHIELD_STROKE_BRIGHT);
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
    gsap.set(bb, { xPercent:-50, yPercent:-50, scaleX:1.32, scaleY:1.32, transformOrigin:'50% 50%', x:-9999, y:-9999, opacity:0 });

    const C = { x:0, y:0 };
    let D = 0;
    let shieldLocked = false;
    const BEE_MARGIN = 26;
    const HEX_INSET = 6;
    const EDGE_MARGIN = 90;
    const HEX_VERTEX_BL = 4; // bottom-left corner (hexPoints index)
    const HEX_VERTEX_BR = 2; // bottom-right corner
    let exitLat = 0;

    function hexVertexRad(i) {
      return (Math.PI / 3) * i - Math.PI / 2;
    }
    function hexVertexDeg(i) {
      return hexVertexRad(i) * 180 / Math.PI;
    }
    function hexVertexXY(i, r) {
      const ang = hexVertexRad(i);
      const rad = r != null ? r : D / 2 - HEX_INSET;
      return { x: C.x + rad * Math.cos(ang), y: capY(C.y + rad * Math.sin(ang)) };
    }

    function headingEl() {
      return land.closest('h2') || sec.querySelector('h2');
    }
    function headingYMax() {
      const h = headingEl();
      if (!h) return Infinity;
      return h.getBoundingClientRect().bottom - sec.getBoundingClientRect().top - 6;
    }
    function capY(y) {
      return Math.min(y, headingYMax());
    }
    function radialXY(angDeg, fromKey, toKey, t) {
      const ang = angDeg * Math.PI / 180;
      const r = radius(fromKey) + (radius(toKey) - radius(fromKey)) * t;
      return { x: C.x + r * Math.cos(ang), y: capY(C.y + r * Math.sin(ang)) };
    }
    const BB_BASE = 1.32;
    const FACE_FLIP_DX = 14;
    let bbFaceSign = 1;

    function applyBeeOrient(el, dx, dy, base, opts) {
      opts = opts || {};
      if (opts.forceSign != null) bbFaceSign = opts.forceSign;
      else if (Math.abs(dx) > FACE_FLIP_DX) bbFaceSign = dx < 0 ? -1 : 1;
      const refDx = Math.abs(dx) > 0.001 ? Math.abs(dx) : 0.001;
      let dip = Math.atan2(dy, refDx) * 180 / Math.PI;
      dip = Math.max(-45, Math.min(45, dip));
      gsap.set(el, {
        scaleX: bbFaceSign * base,
        scaleY: base,
        rotation: bbFaceSign < 0 ? -dip : dip
      });
    }

    function orientToward(el, px, py, tx, ty, base) {
      applyBeeOrient(el, tx - px, ty - py, base);
    }

    function flyHeading(vx, vy, opts) {
      applyBeeOrient(bb, vx, vy, BB_BASE, opts);
    }

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
      D = Math.min(sR.height * 0.82, window.innerWidth * 0.60);
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
    const bbFlapFlight = gsap.timeline({ repeat:-1, yoyo:true, paused:true, defaults:{ ease:'sine.inOut' } })
      .to('#sbb-w1', { scaleY:0.10, duration:0.10 }, 0)
      .to('#sbb-w2', { scaleY:0.14, duration:0.11 }, 0.02);
    const bbFlapPerch = gsap.timeline({ repeat:-1, yoyo:true, paused:true, defaults:{ ease:'sine.inOut' } })
      .to('#sbb-w1', { scaleY:0.62, duration:0.42 }, 0)
      .to('#sbb-w2', { scaleY:0.68, duration:0.46 }, 0.05);
    bbFlapFlight.play();

    gsap.to(['#sbb-eye', '#sbb-eyehi'], {
      x:-2.6, duration:0.85, repeat:-1, yoyo:true, ease:'sine.inOut'
    });

    function hexBoundaryDist(angle, R) {
      const a = ((angle + Math.PI / 2) % (Math.PI / 3) + Math.PI / 3) % (Math.PI / 3) - Math.PI / 6;
      return R * Math.cos(Math.PI / 6) / Math.cos(a);
    }

    function clampOutsideShield(x, y) {
      y = capY(y);
      const dx = x - C.x, dy = y - C.y;
      const dist = Math.hypot(dx, dy);
      const R = D / 2 - HEX_INSET;
      if (dist < 0.001) {
        const minDist = hexBoundaryDist(0, R) + BEE_MARGIN;
        return { x: C.x + minDist, y: capY(C.y) };
      }
      const ang = Math.atan2(dy, dx);
      const minDist = hexBoundaryDist(ang, R) + BEE_MARGIN;
      if (dist < minDist) {
        return { x: C.x + minDist * Math.cos(ang), y: capY(C.y + minDist * Math.sin(ang)) };
      }
      return { x, y: capY(y) };
    }

    function setBeePos(x, y) {
      const p = clampOutsideShield(x, y);
      gsap.set(bb, { x: p.x, y: p.y });
      orientToward(bb, p.x, p.y, C.x, C.y, BB_BASE);
    }

    function clampBeeFromTween(vx, vy) {
      const x = gsap.getProperty(bb, 'x');
      const y = gsap.getProperty(bb, 'y');
      const p = clampOutsideShield(x, y);
      const clamped = Math.abs(p.x - x) > 0.5 || Math.abs(p.y - y) > 0.5;
      if (clamped) {
        gsap.set(bb, { x: p.x, y: p.y });
        if (vx != null && vy != null) flyHeading(vx, vy);
        else orientToward(bb, p.x, p.y, C.x, C.y, BB_BASE);
      } else if (Math.abs(y - p.y) > 0.5) {
        gsap.set(bb, { y: p.y });
      }
      if (!clamped && vx != null && vy != null) flyHeading(vx, vy);
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
      setBeePos(C.x + r * Math.cos(a.ang), C.y + r * Math.sin(a.ang));
    }
    function flyBezier(from, to, cp, duration, ease) {
      const prog = { t: 0 };
      return gsap.to(prog, {
        t: 1,
        duration,
        ease,
        onUpdate: () => {
          const t = prog.t, u = 1 - t;
          const x = u * u * from.x + 2 * u * t * cp.x + t * t * to.x;
          const y = capY(u * u * from.y + 2 * u * t * cp.y + t * t * to.y);
          const p = clampOutsideShield(x, y);
          gsap.set(bb, { x: p.x, y: p.y });
          const tx = 2 * u * (cp.x - from.x) + 2 * t * (to.x - cp.x);
          const ty = 2 * u * (cp.y - from.y) + 2 * t * (to.y - cp.y);
          flyHeading(p.x, p.y, p.x + tx, p.y + ty);
        }
      });
    }
    function arcToRadialStart(fromX, fromY, angDeg, duration, ease) {
      const to = radialXY(angDeg, 'start', 'start', 0);
      const cp = {
        x: (fromX + to.x) * 0.52,
        y: capY(Math.max(fromY, to.y) + Math.min(D * 0.06, 28))
      };
      const prog = { t: 0 };
      return gsap.to(prog, {
        t: 1,
        duration,
        ease,
        onUpdate: () => {
          const t = prog.t, u = 1 - t;
          const x = u * u * fromX + 2 * u * t * cp.x + t * t * to.x;
          const y = capY(u * u * fromY + 2 * u * t * cp.y + t * t * to.y);
          const p = clampOutsideShield(x, y);
          gsap.set(bb, { x: p.x, y: p.y });
          const tx = 2 * u * (cp.x - fromX) + 2 * t * (to.x - cp.x);
          const ty = 2 * u * (cp.y - fromY) + 2 * t * (to.y - cp.y);
          flyHeading(p.x, p.y, p.x + tx, p.y + ty);
        }
      });
    }
    function pulseShieldStroke() {
      if (shieldLocked) return;
      ringPoly.setAttribute('stroke', 'rgba(235,180,90,1)');
      gsap.to({}, {
        duration: 0.35, ease: 'power2.out',
        onUpdate: function () {
          if (shieldLocked) return;
          const t = this.progress();
          const a = 1 - t * 0.15;
          ringPoly.setAttribute('stroke', 'rgba(235,180,90,' + a.toFixed(2) + ')');
        },
        onComplete: function () {
          if (!shieldLocked) ringPoly.setAttribute('stroke', SHIELD_STROKE_BRIGHT);
        }
      });
    }
    function lockShieldDark() {
      if (shieldLocked) return;
      shieldLocked = true;
      const fade = { r: 205, g: 127, b: 50, a: 0.85 };
      gsap.to(fade, {
        r: 28, g: 20, b: 6, a: 0.5,
        duration: 2, ease: 'power1.inOut',
        onUpdate: () => ringPoly.setAttribute('stroke',
          'rgba(' + Math.round(fade.r) + ',' + Math.round(fade.g) + ',' +
          Math.round(fade.b) + ',' + fade.a.toFixed(2) + ')'),
        onComplete: () => ringPoly.setAttribute('stroke', SHIELD_STROKE_REST)
      });
    }
    function impact(vertexIndex) {
      const v = hexVertexXY(vertexIndex);
      gsap.set(ripple, {
        left: v.x,
        top:  v.y,
        xPercent:-50, yPercent:-50, scale:0.3, opacity:0.95
      });
      gsap.to(ripple, { scale:1.9, opacity:0, duration:0.6, ease:'power2.out' });
      gsap.fromTo(ring, { scale:1 }, { scale:1.015, duration:0.13, yoyo:true, repeat:1, ease:'sine.inOut' });
      pulseShieldStroke();
    }
    function yellowLook(deg) {
      const left = Math.cos(deg * Math.PI / 180) < 0;
      gsap.to('#stack-bee', { scaleX: left ? -1 : 1, scaleY:1, rotation: left ? 16 : -16,
                              duration:0.8, ease:'sine.inOut' });
    }
    function yellowRest() {
      gsap.to('#stack-bee', { scaleX:1, scaleY:1, rotation:0, duration:0.6, ease:'sine.inOut' });
    }

    function secW() { return sec.getBoundingClientRect().width; }
    function leftOffscreenX() { return -EDGE_MARGIN; }
    function rightOffscreenX() { return secW() + EDGE_MARGIN; }
    function rightShelfX() {
      return C.x + (D / 2 - HEX_INSET) + BEE_MARGIN + 40;
    }
    function brRadialStart() {
      const ang = hexVertexRad(HEX_VERTEX_BR);
      const r = radius('start');
      return { x: C.x + r * Math.cos(ang), y: capY(C.y + r * Math.sin(ang)) };
    }
    const arcT = { t: 0 };
    let arcFrom = null;
    let arcTo = null;
    let arcCp = null;

    gsap.set(ring, { scale:0 });
    const master = gsap.timeline({ paused:true });
    master
      .call(() => ringPoly.setAttribute('stroke', SHIELD_STROKE_BRIGHT))
      .to(ring, { scale:1, duration:0.9, ease:'back.out(1.4)' });

    // Two radial strikes at hex vertices; shield stays bright until both finish.
    master
      // Attack 1 — bottom-left vertex (index 4, ~150°)
      .call(() => { a.ang = hexVertexRad(HEX_VERTEX_BL); a.from='start'; a.to='hit'; a.t=0; place(); })
      .to(bb, { opacity:0.95, duration:0.25 }, '<')
      .call(yellowLook, [hexVertexDeg(HEX_VERTEX_BL)], '<')
      .to(a, { t:1, duration:1.25, ease:'power1.in', onUpdate:place })
      .call(impact, [HEX_VERTEX_BL])
      .call(() => { a.from='hit'; a.to='recoil'; a.t=0; })
      .call(yellowRest, null, '<')
      .to(a, { t:1, duration:0.55, ease:'power2.out', onUpdate:place })
      // Between attacks: exit LEFT (visible), hop RIGHT off-screen, re-enter head-first.
      .call(() => {
        exitLat = capY(gsap.getProperty(bb, 'y'));
        bbFlapFlight.play();
        flyHeading(-140, 0, { forceSign: -1 });
      })
      .to(bb, {
        x: leftOffscreenX(),
        duration: 0.9,
        ease: 'power1.in',
        onUpdate: () => {
          gsap.set(bb, { y: exitLat });
          flyHeading(-140, 0, { forceSign: -1 });
        }
      })
      .call(() => {
        gsap.set(bb, { x: rightOffscreenX(), y: exitLat, opacity: 0 });
      })
      .call(() => {
        gsap.set(bb, { opacity: 0.95, scaleX: -BB_BASE });
        flyHeading(-140, 0, { forceSign: -1 });
      })
      .to(bb, {
        x: () => rightShelfX(),
        duration: 0.8,
        ease: 'power1.out',
        onUpdate: () => {
          gsap.set(bb, { y: exitLat });
          flyHeading(-140, 0, { forceSign: -1 });
        }
      })
      .call(function () {
        arcFrom = { x: gsap.getProperty(bb, 'x'), y: exitLat };
        arcTo = brRadialStart();
        arcCp = {
          x: Math.max(arcFrom.x, arcTo.x) + Math.min(D * 0.08, 52),
          y: capY(Math.max(arcFrom.y, arcTo.y) + Math.min(D * 0.05, 24))
        };
        arcT.t = 0;
      })
      .to(arcT, {
        t: 1,
        duration: 0.9,
        ease: 'power1.inOut',
        onUpdate: function () {
          const t = arcT.t;
          const u = 1 - t;
          const x = u * u * arcFrom.x + 2 * u * t * arcCp.x + t * t * arcTo.x;
          const y = u * u * arcFrom.y + 2 * u * t * arcCp.y + t * t * arcTo.y;
          const p = clampOutsideShield(x, y);
          gsap.set(bb, { x: p.x, y: p.y });
          const tx = 2 * u * (arcCp.x - arcFrom.x) + 2 * t * (arcTo.x - arcCp.x);
          const ty = 2 * u * (arcCp.y - arcFrom.y) + 2 * t * (arcTo.y - arcCp.y);
          flyHeading(tx, ty);
        }
      })
      // Attack 2 — bottom-right vertex (index 2, ~30°)
      .call(() => { a.ang = hexVertexRad(HEX_VERTEX_BR); a.from='start'; a.to='hit'; a.t=0; place(); })
      .call(yellowLook, [hexVertexDeg(HEX_VERTEX_BR)], '<')
      .to(a, { t:1, duration:1.25, ease:'power1.in', onUpdate:place })
      .call(impact, [HEX_VERTEX_BR])
      .call(() => { a.from='hit'; a.to='recoil'; a.t=0; })
      .call(yellowRest, null, '<')
      .to(a, { t:1, duration:0.55, ease:'power2.out', onUpdate:place })
      .call(lockShieldDark)
      // After attack 2: fly off RIGHT, then teleport LEFT for epilogue (never cross hex).
      .call(() => {
        exitLat = capY(gsap.getProperty(bb, 'y'));
        flyHeading(140, 0, { forceSign: 1 });
      })
      .to(bb, {
        x: () => rightOffscreenX(),
        duration: 0.9,
        ease: 'power1.in',
        onUpdate: () => {
          gsap.set(bb, { y: exitLat });
          flyHeading(140, 0, { forceSign: 1 });
        }
      });

    // ── Personality epilogue: sulks off-screen, reappears from left, perches above L5 ──
    let resting = false;
    function l5Rest() {
      const sR = sec.getBoundingClientRect();
      const row = sec.querySelector('[data-grid]'); // L5 row — perch on border-top line above it
      if (!row) return { x: 34, y: sR.height * 0.72 };
      const lR = row.getBoundingClientRect();
      return {
        x: lR.left - sR.left + 34,
        y: lR.top - sR.top - 10 // feet on the horizontal rule above L5, not over L5 text
      };
    }
    function perchOnL5() {
      const r = l5Rest();
      gsap.set(bb, { x: r.x, y: r.y, scaleX: BB_BASE, scaleY: BB_BASE, rotation: 0, opacity: 0.95 });
      orientToward(bb, r.x, r.y, C.x, C.y, BB_BASE);
    }

    master
      .to({}, { duration: 0.7 })
      .call(() => {
        const r = l5Rest();
        gsap.set(bb, {
          x: leftOffscreenX(),
          y: r.y,
          opacity: 0,
          scaleX: BB_BASE,
          scaleY: BB_BASE,
          rotation: 0
        });
      })
      .call(() => {
        gsap.set(bb, { opacity: 0.95 });
        flyHeading(110, 0, { forceSign: 1 });
      })
      .to(bb, {
        x: () => l5Rest().x,
        y: () => l5Rest().y,
        opacity: 0.95,
        duration: 1.0,
        ease: 'power2.out',
        onUpdate: () => clampBeeFromTween(110, 0)
      })
      .to(bb, { scaleX: -BB_BASE, duration: 0.35, ease: 'sine.inOut' }, '+=0.35')
      .to(bb, { scaleX: BB_BASE, duration: 0.35, ease: 'sine.inOut' }, '+=0.4')
      .call(() => {
        bbFlapFlight.pause();
        gsap.set(['#sbb-w1', '#sbb-w2'], { scaleY: 1 });
        bbFlapPerch.play();
        resting = true;
        perchOnL5();
      });

    window.addEventListener('resize', () => {
      if (resting) perchOnL5();
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
      if (window.matchMedia('(max-width: 768px)').matches) return;
      const card = e.target.closest('[data-flip]');
      if (!card) return;
      const wasPinned = card.classList.contains('pinned');
      document.querySelectorAll('[data-flip].pinned').forEach((c) => {
        if (c !== card) c.classList.remove('pinned');
      });
      card.classList.toggle('pinned', !wasPinned);
    });
  }

  function initDotCursor() {
    if (window.__kwhDotCursor) return;
    window.__kwhDotCursor = true;
    const cursor = document.getElementById('dot-cursor');
    if (!cursor) return;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!finePointer.matches) return;
    document.documentElement.classList.add('dot-cursor-on');

    let cx = 0;
    let cy = 0;
    let pressed = false;
    const parseCtx = document.createElement('canvas').getContext('2d');

    function parseRgb(str) {
      if (!str || str === 'transparent' || str === 'rgba(0, 0, 0, 0)') return null;
      const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (m) return { r: +m[1], g: +m[2], b: +m[3] };
      try {
        parseCtx.fillStyle = '#000';
        parseCtx.fillStyle = str;
        const hex = parseCtx.fillStyle;
        if (hex.charAt(0) === '#') {
          const h = hex.length === 4
            ? hex.slice(1).split('').map((c) => c + c).join('')
            : hex.slice(1);
          return {
            r: parseInt(h.slice(0, 2), 16),
            g: parseInt(h.slice(2, 4), 16),
            b: parseInt(h.slice(4, 6), 16)
          };
        }
      } catch (_) { /* ignore invalid colors */ }
      return null;
    }

    function luminance(rgb) {
      return (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    }

    function sampleBg(x, y) {
      const prev = cursor.style.display;
      cursor.style.display = 'none';
      const el = document.elementFromPoint(x, y);
      cursor.style.display = prev;
      if (!el) return { r: 255, g: 251, b: 240 };
      let node = el;
      while (node && node !== document.documentElement) {
        const rgb = parseRgb(getComputedStyle(node).backgroundColor);
        if (rgb) return rgb;
        node = node.parentElement;
      }
      return { r: 255, g: 251, b: 240 };
    }

    function contrastingColor(rgb) {
      const isYellowish = rgb.r > 180 && rgb.g > 120 && rgb.b < 120;
      if (isYellowish) return '#0B0B0E';
      return luminance(rgb) > 0.55 ? '#0B0B0E' : '#FFFFFF';
    }

    function updatePressColor() {
      if (!pressed) return;
      cursor.style.backgroundColor = contrastingColor(sampleBg(cx, cy));
    }

    window.addEventListener('mousemove', (e) => {
      cx = e.clientX;
      cy = e.clientY;
      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';
      if (pressed) updatePressColor();
    }, { passive: true });

    window.addEventListener('mousedown', () => {
      pressed = true;
      cursor.classList.add('pressed');
      updatePressColor();
    });
    window.addEventListener('mouseup', () => {
      pressed = false;
      cursor.classList.remove('pressed');
      cursor.style.backgroundColor = '';
    });

    window.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });
    window.addEventListener('mouseenter', () => {
      cursor.style.opacity = '';
    });
  }

  function growSprouts() {
    const sprouts = document.querySelectorAll('.hero-sprout.is-new');
    if (!sprouts.length || !window.gsap) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sprouts.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'scaleY(1)';
      });
      return;
    }
    gsap.to(sprouts, {
      opacity: 1,
      scaleY: 1,
      duration: 0.9,
      stagger: 0.16,
      delay: 0.45,
      ease: 'back.out(1.7)',
      transformOrigin: '50% 100%'
    });
  }

  function boot() {
    initFlipPin();
    initDotCursor();
    growSprouts();
    waitForGsap(() => {
      waitForEl('bee', () => setTimeout(launchBee, 700));
      waitForEl('stack-bee-land', () => mountStackDefense());
    });
  }

  if (document.readyState === 'complete') boot();
  else window.addEventListener('load', boot);
})();
