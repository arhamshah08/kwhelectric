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
    let lastDotX = -999, lastDotY = -999;

    function dropDot() {
      const bx = gsap.getProperty(bee, 'x') + 28;
      const by = gsap.getProperty(bee, 'y') + 23;
      if (Math.hypot(bx - lastDotX, by - lastDotY) >= 18) {
        ctx.beginPath();
        ctx.arc(bx, by, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(205,127,50,0.8)';
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
        '<circle cx="47" cy="19" r="2.2" fill="#1a1a1a"/>' +
        '<circle cx="47.8" cy="18.4" r="0.7" fill="#fff"/>' +
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

    const ring = document.createElement('div');
    ring.id = 'stack-shield';
    ring.style.cssText =
      'position:absolute;border-radius:50%;pointer-events:none;z-index:1;' +
      'box-sizing:border-box;transform-origin:50% 50%;' +
      'border:4px dashed rgba(28,20,6,0.5);' +
      'box-shadow:0 0 30px rgba(205,127,50,0.16), inset 0 0 30px rgba(205,127,50,0.07);';
    sec.appendChild(ring);

    const ripple = document.createElement('div');
    ripple.style.cssText =
      'position:absolute;width:46px;height:46px;border-radius:50%;pointer-events:none;' +
      'z-index:1;box-sizing:border-box;opacity:0;border:2px solid rgba(205,127,50,0.9);';
    sec.appendChild(ripple);

    const bb = document.createElement('div');
    bb.id = 'stack-bee2';
    bb.style.cssText = 'position:absolute;top:0;left:0;width:56px;height:38px;pointer-events:none;z-index:1;';
    bb.innerHTML = beeSVGMarkup('sbb', '#1a1a1a');
    sec.appendChild(bb);
    gsap.set(bb, { xPercent:-50, yPercent:-50, scale:1.32, transformOrigin:'50% 50%', x:-9999, y:-9999, opacity:0 });

    const C = { x:0, y:0 };
    let D = 0;

    function layout() {
      const sR = sec.getBoundingClientRect();
      const lR = land.getBoundingClientRect();
      gsap.set(yb, { x: lR.left - sR.left + lR.width * 0.5 - 28,
                     y: lR.top  - sR.top  - 22,
                     transformOrigin: '50% 62%' });
      C.x = lR.left - sR.left + lR.width * 0.5;
      C.y = lR.top  - sR.top  + lR.height * 0.5;
      D = Math.min(sR.height * 1.08, window.innerWidth * 0.8);
      ring.style.width  = D + 'px';
      ring.style.height = D + 'px';
      ring.style.left = (C.x - D / 2) + 'px';
      ring.style.top  = (C.y - D / 2) + 'px';
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

    [150, 30, 90].forEach(deg => {
      master
        .call(() => { a.ang = deg * Math.PI / 180; a.from='start'; a.to='hit'; a.t=0; place(); })
        .to(bb, { opacity:0.95, duration:0.25 }, '<')
        .call(yellowLook, [deg], '<')
        .to(a, { t:1, duration:1.25, ease:'power1.in', onUpdate:place })
        .call(impact)
        .call(() => { a.from='hit'; a.to='recoil'; a.t=0; })
        .call(yellowRest, null, '<')
        .to(a, { t:1, duration:0.55, ease:'power2.out', onUpdate:place })
        .to(bb, { opacity:0, duration:0.3 })
        .to({}, { duration:0.2 });
    });

    master
      .call(yellowRest)
      .to(ring, { scale:1.05, opacity:0, duration:0.7, ease:'power2.in' }, '<')
      .call(() => {
        if (ring.parentNode) ring.remove();
        if (ripple.parentNode) ripple.remove();
        const rr = D / 2 + 110, ang = 158 * Math.PI / 180;
        const x = C.x + rr * Math.cos(ang), y = C.y + rr * Math.sin(ang);
        gsap.set(bb, { x, y });
        orientToward(bb, x, y, C.x, C.y, 1.32);
      })
      .to(bb, { opacity:0.95, duration:0.5 });

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

  function boot() {
    waitForGsap(() => {
      waitForEl('bee', () => setTimeout(launchBee, 700));
      waitForEl('stack-bee-land', () => mountStackDefense());
    });
  }

  if (document.readyState === 'complete') boot();
  else window.addEventListener('load', boot);
})();
