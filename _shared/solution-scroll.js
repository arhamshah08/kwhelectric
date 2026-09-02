(function () {
  document.querySelectorAll('.sol').forEach(function (sol) {
    var steps = Array.prototype.slice.call(sol.querySelectorAll('.sol-steps > .sol-step'));
    var visual = sol.querySelector('.sol-visual');
    if (!steps.length || !visual) return;

    var shell = visual.querySelector('.sol-shell');
    var frames = Array.prototype.slice.call(visual.querySelectorAll('.sol-frame'));
    if (!frames.length) return;

    function activate(idx) {
      frames.forEach(function (f, i) {
        f.classList.toggle('is-active', i === idx);
      });
      var accent = steps[idx].getAttribute('data-accent');
      if (accent && shell) shell.style.setProperty('--accent', accent);
    }

    activate(0);

    var io = new IntersectionObserver(
      function (entries) {
        var best = null;
        entries.forEach(function (e) {
          if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) {
            best = e;
          }
        });
        if (best) {
          var idx = steps.indexOf(best.target);
          if (idx >= 0) activate(idx);
        }
      },
      { root: null, rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    steps.forEach(function (s) { io.observe(s); });
  });
})();
