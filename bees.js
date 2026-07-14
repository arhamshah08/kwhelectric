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

  // ── HERO: queen signals → 2 workers exit ───────────────────────────────────
  function paperSideBeeSVG(id) {
    /* Papercraft side-view matching #hero-hoverbee: striped body, white wings + gold stroke, cheeks, gold antenna tips */
    const c = id + '-clip';
    const w1 = id + '-w1';
    const w2 = id + '-w2';
    return (
      '<defs><clipPath id="' + c + '"><ellipse cx="28" cy="24" rx="20" ry="14"/></clipPath></defs>' +
      '<g class="wing back" transform="translate(4,2)">' +
        '<ellipse id="' + w2 + '" cx="10" cy="6" rx="12" ry="18" fill="#FFF8E4" stroke="#C2932A" stroke-width="1.6" opacity=".88"/>' +
      '</g>' +
      '<ellipse cx="10" cy="24" rx="11" ry="10" fill="#F6C95C" stroke="#241f18" stroke-width="1.4"/>' +
      '<ellipse cx="28" cy="24" rx="20" ry="14" fill="#F6C95C" stroke="#241f18" stroke-width="1.5"/>' +
      '<g clip-path="url(#' + c + ')">' +
        '<rect x="16" y="8" width="7" height="32" rx="3.2" fill="#241f18"/>' +
        '<rect x="28" y="8" width="7" height="32" rx="3.2" fill="#241f18"/>' +
      '</g>' +
      '<circle cx="46" cy="22" r="12" fill="#3b2f20" stroke="#241f18" stroke-width="1.2"/>' +
      '<circle cx="50" cy="19" r="4.6" fill="#FFFDF4"/>' +
      '<circle cx="51.6" cy="19.4" r="2.4" fill="#241f18"/>' +
      '<circle cx="52.6" cy="18" r="0.9" fill="#fff"/>' +
      '<ellipse cx="46" cy="28" rx="4" ry="2.6" fill="#E8998D"/>' +
      '<path d="M48 26 q4 3.5 8 0.5" stroke="#1a140e" stroke-width="1.5" fill="none" stroke-linecap="round"/>' +
      '<path d="M42 12 q-2 -10 -8 -13" stroke="#241f18" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<circle cx="33" cy="-2" r="3.2" fill="#C2932A"/>' +
      '<path d="M49 11 q3 -9 9 -11" stroke="#241f18" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<circle cx="59" cy="-1" r="3.2" fill="#C2932A"/>' +
      '<g class="wing" transform="translate(18,0)">' +
        '<ellipse id="' + w1 + '" cx="8" cy="4" rx="14" ry="20" fill="#FFF8E4" stroke="#C2932A" stroke-width="2" opacity=".95"/>' +
        '<path d="M4 -4 q4 6 5 14" stroke="#C2932A" stroke-width="1.2" fill="none" opacity=".45"/>' +
      '</g>'
    );
  }

  function makeFlyer(id) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.id = id;
    svg.setAttribute('viewBox', '0 0 70 44');
    svg.setAttribute('width', '64');
    svg.setAttribute('height', '40');
    svg.setAttribute('aria-hidden', 'true');
    svg.style.cssText = 'position:absolute;top:0;left:0;overflow:visible;pointer-events:none;z-index:12;';
    svg.innerHTML = paperSideBeeSVG(id);
    return svg;
  }

  function hiveToHeroXY(hiveSvg, cx, cy, hero) {
    const pt = hiveSvg.createSVGPoint();
    pt.x = cx; pt.y = cy;
    const ctm = hiveSvg.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    const sp = pt.matrixTransform(ctm);
    const hR = hero.getBoundingClientRect();
    return { x: sp.x - hR.left - 32, y: sp.y - hR.top - 20 };
  }

  function launchBee() {
    const land = document.getElementById('bee-land');
    const hero = document.getElementById('hero');
    const hiveWrap = document.getElementById('hive-wrap');
    const hiveSvg = hiveWrap && hiveWrap.querySelector('svg');
    const queen = document.getElementById('queen-bee');
    const peekerA = document.getElementById('worker-a-peeker');
    const peekerB = document.getElementById('worker-b-peeker');
    if (!land || !hero || !hiveSvg || !queen || !peekerA || !peekerB) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const hRect = hero.getBoundingClientRect();
    const lRect = land.getBoundingClientRect();
    /* Sit on the very top of the "t" stem (not the crossbar) */
    const LAND_Y_FRAC = -0.02;
    const LAND_Y_OFF = -10;
    const lx = lRect.left - hRect.left + lRect.width * 0.5 - 32;
    const ly = lRect.top - hRect.top + lRect.height * LAND_Y_FRAC + LAND_Y_OFF;

    const startA = hiveToHeroXY(hiveSvg, 205.4, 161.2, hero);
    const startB = hiveToHeroXY(hiveSvg, 274.6, 281.2, hero);
    const deposit = hiveToHeroXY(hiveSvg, 205.4, 270, hero);

    const flowers = hero.querySelectorAll('.hero-flower');
    let flowerPt = { x: hRect.width * 0.12, y: hRect.height * 0.62 };
    if (flowers.length) {
      const fR = flowers[Math.min(1, flowers.length - 1)].getBoundingClientRect();
      flowerPt = {
        x: fR.left - hRect.left + fR.width * 0.45 - 32,
        y: fR.top - hRect.top + fR.height * 0.18 - 20
      };
    }

    const canvas = document.createElement('canvas');
    canvas.className = 'bee-flight-overlay';
    canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;z-index:9;';
    canvas.width = Math.round(hRect.width);
    canvas.height = Math.round(hRect.height);
    hero.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let lastDotX = -999, lastDotY = -999;

    function dropNectarDot(beeEl, color) {
      const bx = gsap.getProperty(beeEl, 'x') + 34;
      const by = gsap.getProperty(beeEl, 'y') + 22;
      if (Math.hypot(bx - lastDotX, by - lastDotY) < 14) return;
      ctx.beginPath();
      ctx.arc(bx, by, 2.8, 0, Math.PI * 2);
      ctx.fillStyle = color || 'rgba(245,192,68,0.85)';
      ctx.fill();
      lastDotX = bx; lastDotY = by;
    }

    function orient(beeEl, state) {
      const x = gsap.getProperty(beeEl, 'x');
      const y = gsap.getProperty(beeEl, 'y');
      if (state.lastX != null) {
        const dx = x - state.lastX, dy = y - state.lastY;
        if (Math.abs(dx) > 0.5) state.face = dx < 0 ? -1 : 1;
        let dip = Math.atan2(dy, Math.max(0.0001, Math.abs(dx))) * 180 / Math.PI;
        dip = Math.max(-28, Math.min(28, dip));
        gsap.set(beeEl, {
          scaleX: state.face,
          scaleY: 1,
          rotation: state.face < 0 ? -dip : dip,
          transformOrigin: '50% 55%'
        });
      }
      state.lastX = x; state.lastY = y;
    }

    function flapWings(id, play) {
      const w1 = '#' + id + '-w1';
      const w2 = '#' + id + '-w2';
      gsap.killTweensOf([w1, w2]);
      gsap.set([w1, w2], { transformOrigin: '30% 90%' });
      if (!play) {
        gsap.set([w1, w2], { rotation: 0, scaleY: 1 });
        return null;
      }
      return gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: 'sine.inOut' } })
        .to(w1, { rotation: 26, scaleY: 0.55, duration: 0.09 }, 0)
        .to(w2, { rotation: -18, scaleY: 0.65, duration: 0.10 }, 0.01);
    }

    /* Queen pulse + hex signal packets toward workers */
    function sendQueenSignal(done) {
      const pulse = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      pulse.setAttribute('cx', '240');
      pulse.setAttribute('cy', '210');
      pulse.setAttribute('r', '18');
      pulse.setAttribute('fill', 'none');
      pulse.setAttribute('stroke', '#E4B33C');
      pulse.setAttribute('stroke-width', '3');
      pulse.setAttribute('opacity', '0.9');
      const signalLayer = document.getElementById('queen-signal');
      if (signalLayer) signalLayer.appendChild(pulse);
      gsap.to(pulse, {
        attr: { r: 52 },
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        onComplete: () => pulse.remove()
      });
      gsap.fromTo(queen, { opacity: 1 }, {
        opacity: 0.55, duration: 0.28, yoyo: true, repeat: 5, ease: 'sine.inOut'
      });
      const signal = signalLayer;
      if (!signal) { done(); return; }
      const targets = [
        { x: 205.4, y: 161.2 },
        { x: 274.6, y: 281.2 }
      ];
      targets.forEach((t, i) => {
        for (let k = 0; k < 3; k++) {
          const hex = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
          const s = 5 + k;
          hex.setAttribute('points',
            (0) + ',' + (-s) + ' ' + (s * 0.87) + ',' + (-s * 0.5) + ' ' +
            (s * 0.87) + ',' + (s * 0.5) + ' ' + (0) + ',' + (s) + ' ' +
            (-s * 0.87) + ',' + (s * 0.5) + ' ' + (-s * 0.87) + ',' + (-s * 0.5)
          );
          hex.setAttribute('fill', '#E4B33C');
          hex.setAttribute('opacity', '0');
          hex.setAttribute('transform', 'translate(240,210)');
          signal.appendChild(hex);
          gsap.to(hex, {
            opacity: 0.85,
            duration: 0.2,
            delay: i * 0.12 + k * 0.08,
            onComplete: () => {
              gsap.to(hex, {
                attr: { transform: 'translate(' + t.x + ',' + t.y + ')' },
                opacity: 0,
                duration: 0.7,
                ease: 'power2.out',
                onComplete: () => hex.remove()
              });
            }
          });
        }
      });
      gsap.delayedCall(1.1, done);
    }

    function darkenNectarCell() {
      const depositCell = document.querySelector('#nectar-deposit-cell .hive-cell-poly');
      const nL = document.querySelector('#nectar-neighbor-l .hive-cell-poly');
      const nLL = document.querySelector('#nectar-neighbor-ll .hive-cell-poly');
      if (depositCell) gsap.to(depositCell, { attr: { fill: '#E0B03A' }, duration: 0.8, ease: 'power1.out' });
      if (nL) gsap.to(nL, { attr: { fill: '#E8BC48' }, duration: 0.9, ease: 'power1.out' });
      if (nLL) gsap.to(nLL, { attr: { fill: '#DDB24A' }, duration: 1.0, ease: 'power1.out' });
    }

    function blossomAfterNectar() {
      const sprouts = document.querySelectorAll('.hero-sprout.is-new');
      if (!sprouts.length) return;
      gsap.set(sprouts, { opacity: 0, scaleY: 0, transformOrigin: '50% 100%' });
      sprouts.forEach((el) => {
        const petals = el.querySelector('.blossom-petals');
        if (petals) gsap.set(petals, { scale: 0.15, opacity: 0, transformOrigin: '50% 80%' });
      });
      const tl = gsap.timeline({ delay: 2.4 });
      sprouts.forEach((el, i) => {
        const petals = el.querySelector('.blossom-petals');
        tl.to(el, {
          opacity: 1,
          scaleY: 1,
          duration: 1.6,
          ease: 'power2.out',
          transformOrigin: '50% 100%'
        }, i * 0.35);
        if (petals) {
          tl.to(petals, {
            scale: 1,
            opacity: 1,
            duration: 2.0,
            ease: 'power2.out'
          }, i * 0.35 + 0.55);
        }
      });
    }

    const beeA = makeFlyer('hero-worker-a');
    const beeB = makeFlyer('hero-worker-b');
    hero.appendChild(beeA);
    hero.appendChild(beeB);
    gsap.set([beeA, beeB], { opacity: 0, transformOrigin: '50% 55%' });

    const stateA = { lastX: null, lastY: null, face: 1 };
    const stateB = { lastX: null, lastY: null, face: -1 };
    let flapA = null, flapB = null;
    const R = Math.min(hRect.height * 0.1, 88);

    const master = gsap.timeline({ delay: 0.85 });

    master.call(() => { sendQueenSignal(() => {}); });
    master.to({}, { duration: 1.05 });

    /* Workers emerge: hide peekers, show side-view flyers */
    master.addLabel('emerge');
    master.call(() => {
      gsap.to([peekerA, peekerB], { opacity: 0, duration: 0.25 });
      gsap.set(beeA, { x: startA.x, y: startA.y, opacity: 1, scaleX: 1, scaleY: 1, rotation: 0 });
      gsap.set(beeB, { x: startB.x, y: startB.y, opacity: 1, scaleX: -1, scaleY: 1, rotation: 0 });
      flapA = flapWings('hero-worker-a', true);
      flapB = flapWings('hero-worker-b', true);
    }, 'emerge');

    /* Worker A → top of “t” */
    master.to(beeA, {
      duration: 7.8,
      ease: 'power1.inOut',
      onUpdate: () => orient(beeA, stateA),
      motionPath: {
        path: [
          { x: startA.x, y: startA.y },
          { x: startA.x - 0.4 * R, y: startA.y - 0.8 * R },
          { x: lx - 1.2 * R, y: ly + 0.4 * R },
          { x: lx - 0.3 * R, y: ly - 0.9 * R },
          { x: lx + 0.35 * R, y: ly - 1.55 * R },
          { x: lx - 0.15 * R, y: ly - 0.55 * R },
          { x: lx, y: ly }
        ],
        curviness: 1.15,
        autoRotate: false,
        alignOrigin: [0.5, 0.55]
      }
    }, 'emerge');

    master.call(() => {
      if (flapA) flapA.pause();
      flapWings('hero-worker-a', false);
      gsap.set(beeA, { rotation: -6, scaleX: 1, scaleY: 1 });
      const dx = gsap.getProperty(beeA, 'x') - lx;
      const dy = gsap.getProperty(beeA, 'y') - ly;
      const pin = () => {
        const hR = hero.getBoundingClientRect();
        const lR = land.getBoundingClientRect();
        gsap.set(beeA, {
          x: lR.left - hR.left + lR.width * 0.5 - 32 + dx,
          y: lR.top - hR.top + lR.height * LAND_Y_FRAC + LAND_Y_OFF + dy
        });
      };
      pin();
      window.addEventListener('resize', pin);
      gsap.to('#' + beeA.id + '-w1', {
        scaleY: 0.72, duration: 0.5, yoyo: true, repeat: -1, ease: 'sine.inOut',
        transformOrigin: '30% 90%'
      });
    }, 'emerge+=7.8');

    /* Worker B → flower collect → deposit → peeker (parallel) */
    master.to(beeB, {
      duration: 4.2,
      ease: 'power1.inOut',
      onUpdate: () => { orient(beeB, stateB); dropNectarDot(beeB, 'rgba(232,180,70,0.55)'); },
      motionPath: {
        path: [
          { x: startB.x, y: startB.y },
          { x: (startB.x + flowerPt.x) * 0.5, y: Math.min(startB.y, flowerPt.y) - 0.6 * R },
          { x: flowerPt.x, y: flowerPt.y }
        ],
        curviness: 1.1,
        autoRotate: false,
        alignOrigin: [0.5, 0.55]
      }
    }, 'emerge+=0.15');

    master.to(beeB, {
      y: '+=6', duration: 0.35, yoyo: true, repeat: 3, ease: 'sine.inOut',
      onUpdate: () => dropNectarDot(beeB, 'rgba(245,200,80,0.9)')
    }, 'emerge+=4.4');

    master.to(beeB, {
      duration: 4.6,
      ease: 'power1.inOut',
      onUpdate: () => { orient(beeB, stateB); dropNectarDot(beeB, 'rgba(205,140,40,0.75)'); },
      motionPath: {
        path: [
          { x: flowerPt.x, y: flowerPt.y },
          { x: (flowerPt.x + deposit.x) * 0.45, y: Math.min(flowerPt.y, deposit.y) - 0.7 * R },
          { x: deposit.x + 40, y: deposit.y - 30 },
          { x: deposit.x, y: deposit.y }
        ],
        curviness: 1.05,
        autoRotate: false,
        alignOrigin: [0.5, 0.55]
      }
    }, 'emerge+=5.9');

    master.call(() => {
      darkenNectarCell();
      dropNectarDot(beeB, 'rgba(200,130,30,0.95)');
    }, 'emerge+=10.5');

    master.to(beeB, {
      duration: 1.4,
      ease: 'power2.inOut',
      onUpdate: () => orient(beeB, stateB),
      motionPath: {
        path: [
          { x: deposit.x, y: deposit.y },
          { x: startB.x, y: startB.y }
        ],
        curviness: 0.6,
        autoRotate: false,
        alignOrigin: [0.5, 0.55]
      }
    }, 'emerge+=10.7');

    master.call(() => {
      if (flapB) flapB.pause();
      flapWings('hero-worker-b', false);
      gsap.to(beeB, { opacity: 0, duration: 0.2 });
      /* Sit as peeker in the nectar-filled deposit cell */
      peekerB.setAttribute('transform', 'translate(205.4,281.2) scale(1.05)');
      gsap.set(peekerB, { opacity: 0 });
      gsap.to(peekerB, { opacity: 1, duration: 0.35 });
      gsap.to(canvas, { opacity: 0, duration: 0.5, onComplete: () => canvas.remove() });
      blossomAfterNectar();
    }, 'emerge+=12.2');
  }

  // ── ARCHITECTURE STACK DEFENSE ─────────────────────────────────────────────
  function beeSVGMarkup(idp, bodyFill) {
    var isDark = String(bodyFill).toLowerCase() === '#1a1a1a' || String(bodyFill).toLowerCase() === '#15100b';
    /* Yellow bumblebee gets a black boundary; dark bee gets a light gold boundary so it reads on dark UI */
    var outline = isDark ? '#E8C96A' : '#0B0B0E';
    var sw = isDark ? '2.2' : '1.8';
    return (
      '<svg viewBox="0 0 56 38" width="56" height="38" aria-hidden="true" overflow="visible">' +
        '<defs><clipPath id="' + idp + '-clip"><ellipse cx="26" cy="23" rx="17" ry="9.5"/></clipPath></defs>' +
        '<ellipse cx="26" cy="23" rx="17" ry="9.5" fill="' + bodyFill + '" stroke="' + outline + '" stroke-width="' + sw + '"/>' +
        '<g clip-path="url(#' + idp + '-clip)">' +
          '<rect x="13" y="13" width="5.5" height="20" fill="#1a1a1a" rx="0.5"/>' +
          '<rect x="25" y="13" width="5.5" height="20" fill="#1a1a1a" rx="0.5"/>' +
        '</g>' +
        '<circle cx="44" cy="22" r="7.5" fill="' + bodyFill + '" stroke="' + outline + '" stroke-width="' + sw + '"/>' +
        '<circle id="' + idp + '-eye" cx="47" cy="19" r="2.2" fill="' + (isDark ? '#FFFDF4' : '#1a1a1a') + '"/>' +
        '<circle id="' + idp + '-eyehi" cx="47.8" cy="18.4" r="0.7" fill="' + (isDark ? '#1a1a1a' : '#fff') + '"/>' +
        '<polygon points="9,20 9,26 3,23" fill="' + (isDark ? '#E8C96A' : '#666') + '" stroke="' + outline + '" stroke-width="1"/>' +
        '<line x1="41" y1="15" x2="35" y2="4" stroke="' + outline + '" stroke-width="1.5" stroke-linecap="round"/>' +
        '<circle cx="35" cy="4" r="1.9" fill="' + (isDark ? '#E8C96A' : '#1a1a1a') + '" stroke="' + outline + '" stroke-width="0.8"/>' +
        '<line x1="45" y1="14" x2="43" y2="3" stroke="' + outline + '" stroke-width="1.5" stroke-linecap="round"/>' +
        '<circle cx="43" cy="3" r="1.9" fill="' + (isDark ? '#E8C96A' : '#1a1a1a') + '" stroke="' + outline + '" stroke-width="0.8"/>' +
        '<ellipse id="' + idp + '-w1" cx="17" cy="9" rx="14" ry="8.5" fill="rgba(255,248,228,0.92)" stroke="' + outline + '" stroke-width="1.2"/>' +
        '<ellipse id="' + idp + '-w2" cx="21" cy="21" rx="11" ry="6.5" fill="rgba(255,248,228,0.78)" stroke="' + outline + '" stroke-width="1"/>' +
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

    const SHIELD_STROKE_BRIGHT = 'rgba(232,201,106,0.95)';
    const SHIELD_STROKE_REST   = 'rgba(232,201,106,0.55)';

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
    bb.style.cssText = 'position:absolute;top:0;left:0;width:56px;height:38px;pointer-events:none;z-index:5;';
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

  function boot() {
    initFlipPin();
    initDotCursor();
    /* Sprouts/blossoms stay hidden until Worker B deposits nectar (see blossomAfterNectar). */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.hero-sprout.is-new').forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'scaleY(1)';
        const petals = el.querySelector('.blossom-petals');
        if (petals) { petals.style.opacity = '1'; petals.style.transform = 'scale(1)'; }
      });
    }
    waitForGsap(() => {
      waitForEl('queen-bee', () => setTimeout(launchBee, 700));
      waitForEl('stack-bee-land', () => mountStackDefense());
    });
  }

  if (document.readyState === 'complete') boot();
  else window.addEventListener('load', boot);
})();
