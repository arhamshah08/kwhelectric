/* ══════════════════════════════════════════════════════════════
   kWh Electric — bee scenes (bee-story theme)
   Scene 1: hero flight — bee peeks from a hive cell, flies a dotted
            bronze trail, and lands on the "t" in "asset".
   Scene 2: architecture defense — bumblebee strikes the hex shield
            three times, bounces, and tumbles away.
   Respects prefers-reduced-motion and skips flights on mobile.
   ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  if (typeof gsap === 'undefined') return;
  if (gsap.registerPlugin && typeof MotionPathPlugin !== 'undefined') {
    gsap.registerPlugin(MotionPathPlugin);
  }

  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var MOBILE = window.matchMedia('(max-width: 768px)').matches;

  var INK = '#241f18', GOLDD = '#C2932A', BODY = '#F6C95C',
      WING = '#FFF8E4', CHEEK = '#E8998D';

  /* The DC runtime (support.js) replaces the raw <x-dc> template with the
     mounted DOM. Don't touch anything until that mount has happened —
     otherwise we latch onto orphaned template nodes. The template nav
     carries a literal style="{{ navStyle }}" attribute; once mounted,
     the placeholder is gone. */
  function mounted() {
    var nav = document.querySelector('nav');
    if (!nav) return false;
    var st = nav.getAttribute('style');
    if (st && st.indexOf('{{') !== -1) return false;
    return true;
  }

  function ready(sels, cb, tries) {
    tries = tries || 0;
    if (tries > 200) return; /* ~30s then give up */
    if (!mounted()) {
      setTimeout(function () { ready(sels, cb, tries + 1); }, 150);
      return;
    }
    var els = sels.map(function (s) { return document.querySelector(s); });
    if (els.every(function (el) { return el && el.isConnected; })) {
      /* confirm same references survive one more tick (mount settled) */
      setTimeout(function () {
        var again = sels.map(function (s) { return document.querySelector(s); });
        var stable = els.every(function (el, i) { return again[i] === el && el.isConnected; });
        if (stable) { cb.apply(null, els); }
        else { ready(sels, cb, tries + 1); }
      }, 200);
      return;
    }
    setTimeout(function () { ready(sels, cb, tries + 1); }, 150);
  }

  /* small flat-vector bee (bee-story style), drawn around origin, ~100px wide at s=1 */
  function beeMarkup(s, flip) {
    var f = flip ? -1 : 1;
    return '' +
      '<g transform="scale(' + (s * f) + ',' + s + ')">' +
      '<g class="wing back" transform="translate(-14,-26)">' +
      '<ellipse cx="14" cy="-16" rx="15" ry="24" fill="' + WING + '" stroke="' + GOLDD + '" stroke-width="2" opacity=".9"/></g>' +
      '<ellipse cx="-30" cy="0" rx="20" ry="17" fill="' + BODY + '"/>' +
      '<ellipse cx="0" cy="0" rx="34" ry="26" fill="' + BODY + '"/>' +
      '<clipPath id="fbc' + (++beeMarkup._n) + '"><ellipse cx="0" cy="0" rx="34" ry="26"/></clipPath>' +
      '<g clip-path="url(#fbc' + beeMarkup._n + ')">' +
      '<rect x="-22" y="-30" width="13" height="60" rx="6" fill="' + INK + '"/>' +
      '<rect x="1" y="-30" width="13" height="60" rx="6" fill="' + INK + '"/></g>' +
      '<circle cx="30" cy="-4" r="22" fill="#3b2f20"/>' +
      '<circle cx="38" cy="-8" r="8.5" fill="#FFFDF4"/>' +
      '<circle cx="41" cy="-7" r="4.6" fill="' + INK + '"/>' +
      '<circle cx="43" cy="-10" r="1.8" fill="#fff"/>' +
      '<ellipse cx="30" cy="6" rx="5.5" ry="3.6" fill="' + CHEEK + '"/>' +
      '<path d="M36 4 q5 5 11 1" stroke="#1a140e" stroke-width="2.4" fill="none" stroke-linecap="round"/>' +
      '<path d="M22 -24 q-2 -14 -12 -18" stroke="' + INK + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<circle cx="10" cy="-44" r="5" fill="' + GOLDD + '"/>' +
      '<path d="M34 -22 q4 -13 14 -15" stroke="' + INK + '" stroke-width="3" fill="none" stroke-linecap="round"/>' +
      '<circle cx="49" cy="-39" r="5" fill="' + GOLDD + '"/>' +
      '<g class="wing" transform="translate(-2,-24)">' +
      '<ellipse cx="12" cy="-18" rx="17" ry="27" fill="' + WING + '" stroke="' + GOLDD + '" stroke-width="2.5" opacity=".95"/>' +
      '<path d="M6 -30 q6 8 8 20" stroke="' + GOLDD + '" stroke-width="1.6" fill="none" opacity=".5"/></g>' +
      '</g>';
  }
  beeMarkup._n = 0;

  /* landed bee pinned to the "t" in "asset" */
  function landBee(land) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    el.setAttribute('viewBox', '-70 -75 140 110');
    el.setAttribute('aria-hidden', 'true');
    el.style.cssText = 'position:absolute;left:50%;top:-0.52em;width:0.72em;height:0.57em;transform:translateX(-50%);pointer-events:none;z-index:5;overflow:visible;';
    el.innerHTML = beeMarkup(1, false);
    land.appendChild(el);
    return el;
  }

  /* ── SCENE 1 — hero flight ─────────────────────────────────── */
  ready(['#hero', '#bee-cell', '#bee', '#bee-land'], function (hero, cell, bee, land) {
    if (REDUCED || MOBILE || typeof MotionPathPlugin === 'undefined') {
      /* static: bee peeks from its cell, twin sits on the "t" */
      gsap.set(bee, { x: 2, y: 16 });
      landBee(land);
      return;
    }

    var tl = gsap.timeline({ delay: 1.1 });

    /* 1 — peek out of the cell */
    tl.to(bee, { x: 2, y: 16, duration: 0.7, ease: 'back.out(1.6)' })
      .to(bee, { x: -2, duration: 0.25, ease: 'sine.inOut' }, '+=0.25')
      .to(bee, { x: 6, duration: 0.3, ease: 'sine.inOut' })
      .to(bee, { x: 2, duration: 0.25, ease: 'sine.inOut' })
      .add('launch', '+=0.35');

    /* 2 — flight overlay across the hero */
    tl.call(function () {
      var hr = hero.getBoundingClientRect();
      var cr = cell.getBoundingClientRect();
      var lr = land.getBoundingClientRect();
      var p0 = { x: cr.left - hr.left + cr.width / 2, y: cr.top - hr.top + cr.height / 2 };
      var p3 = { x: lr.left - hr.left + lr.width / 2, y: lr.top - hr.top - 8 };
      var c1 = { x: p0.x - Math.max(180, (p0.x - p3.x) * 0.2), y: p0.y - 120 };
      var c2 = { x: p3.x + 220, y: p3.y + (p0.y - p3.y) * 0.55 };
      var d = 'M' + p0.x + ' ' + p0.y +
              ' C ' + c1.x + ' ' + c1.y + ' ' + c2.x + ' ' + c2.y + ' ' + p3.x + ' ' + p3.y;

      var overlay = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      overlay.setAttribute('aria-hidden', 'true');
      overlay.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:4;overflow:visible;';
      overlay.innerHTML =
        '<path class="bee-trail" d="' + d + '" fill="none" stroke="' + GOLDD +
        '" stroke-width="2.5" stroke-dasharray="1 13" stroke-linecap="round" opacity="0"/>' +
        '<g class="bee-flyer" opacity="0">' + beeMarkup(0.5, true) + '</g>';
      hero.appendChild(overlay);

      var flyer = overlay.querySelector('.bee-flyer');
      var trail = overlay.querySelector('.bee-trail');

      gsap.set(bee, { y: 70 }); /* duck back into the cell */
      gsap.set(flyer, { x: p0.x, y: p0.y, opacity: 1 });
      gsap.to(trail, { opacity: 0.75, duration: 1.4, ease: 'sine.in' });
      gsap.to(flyer, {
        motionPath: { path: d, autoRotate: false },
        duration: 2.6,
        ease: 'sine.inOut',
        onComplete: function () {
          gsap.to(flyer, { opacity: 0, duration: 0.2 });
          var sat = landBee(land);
          gsap.from(sat, { y: -14, opacity: 0, duration: 0.4, ease: 'back.out(2.5)' });
          gsap.fromTo(land, { y: 0 }, { y: 3, duration: 0.14, yoyo: true, repeat: 1, ease: 'sine.inOut' });
          gsap.to(trail, { opacity: 0.28, duration: 1.6, delay: 0.8 });
        }
      });
    }, null, 'launch');
  });

  /* ── SCENE 2 — architecture defense (3-strike sequence) ────── */
  ready(['#arch-scene'], function (scene) {
    var wasp = scene.querySelector('.waspW');
    var shield = scene.querySelector('.shieldHex');
    var impact = scene.querySelector('.impact');
    if (!wasp || !shield || !impact) return;

    if (REDUCED || MOBILE) return; /* shield + hive stay static */

    var played = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting || played) return;
        played = true;
        io.disconnect();
        run();
      });
    }, { threshold: 0.45 });
    io.observe(scene);

    /* strike points on the shield ring (svg viewBox coords) */
    var strikes = [
      { x: 580, y: 115, from: { x: 990, y: -80 },  back: { x: 780, y: -40 } },
      { x: 600, y: 190, from: { x: 780, y: -40 },  back: { x: 820, y: 330 } },
      { x: 560, y: 268, back: { x: 760, y: 420 } }
    ];

    function run() {
      gsap.set(wasp, { opacity: 1, x: 990, y: -80 });
      var tl = gsap.timeline();
      strikes.forEach(function (s, i) {
        var edge = { x: s.x + 46, y: s.y - 10 };
        tl.to(wasp, { x: edge.x, y: edge.y, rotation: -12, duration: 0.7, ease: 'power2.in' })
          .call(function () {
            gsap.set(impact, { attr: { transform: 'translate(' + s.x + ',' + s.y + ')' } });
          })
          .fromTo(impact, { opacity: 1, scale: 0.5, transformOrigin: 'center' },
                          { scale: 1, opacity: 0, duration: 0.5, ease: 'power1.out' })
          .fromTo(shield, { scale: 1.035, transformOrigin: 'center' },
                          { scale: 1, duration: 0.45, ease: 'elastic.out(1.6,0.4)' }, '<')
          .to(wasp, {
            x: s.back.x, y: s.back.y,
            rotation: i === 2 ? 24 : 14,
            duration: 0.55, ease: 'power2.out'
          }, '<0.02');
      });
      tl.to(wasp, { x: 1080, y: 460, rotation: 150, scale: 0.5, opacity: 0, duration: 0.9, ease: 'sine.in' }, '-=0.1');
    }
  });
})();
