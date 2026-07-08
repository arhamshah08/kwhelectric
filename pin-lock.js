(function () {
  var KEY = 'kwh_pin_ok';
  if (sessionStorage.getItem(KEY)) return;

  var pin = '';

  function dots() {
    return '●'.repeat(pin.length) + '·'.repeat(4 - pin.length);
  }

  function buildOverlay() {
    var style = document.createElement('style');
    style.textContent = [
      '#kwh-gate{position:fixed;inset:0;z-index:99999;background:#070707;',
      'display:flex;align-items:center;justify-content:center;flex-direction:column;',
      'font-family:"Plus Jakarta Sans",ui-sans-serif,sans-serif;}',
      '#kwh-gate button{width:68px;height:68px;border-radius:50%;',
      'border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.04);',
      'color:#fff;font-size:18px;cursor:pointer;font-family:inherit;',
      'transition:background 0.15s;}',
      '#kwh-gate button:hover{background:rgba(77,179,136,0.18);}',
      '#kwh-gate button:active{background:rgba(77,179,136,0.32);}',
    ].join('');
    document.head.appendChild(style);

    var g = document.createElement('div');
    g.id = 'kwh-gate';

    var label = document.createElement('div');
    label.textContent = 'KWH Electric';
    label.style.cssText = 'color:#4db388;font-size:12px;letter-spacing:4px;text-transform:uppercase;margin-bottom:40px;';

    var display = document.createElement('div');
    display.id = 'kwh-dots';
    display.textContent = dots();
    display.style.cssText = 'font-size:32px;letter-spacing:16px;color:#fff;margin-bottom:8px;min-width:120px;text-align:center;';

    var err = document.createElement('div');
    err.id = 'kwh-err';
    err.style.cssText = 'color:#f87171;font-size:12px;height:20px;margin-bottom:24px;';

    var grid = document.createElement('div');
    grid.style.cssText = 'display:grid;grid-template-columns:repeat(3,68px);gap:10px;';

    [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, '⌫'].forEach(function (n) {
      if (n === null) {
        grid.appendChild(document.createElement('div'));
        return;
      }
      var btn = document.createElement('button');
      btn.textContent = n;
      btn.setAttribute('type', 'button');
      btn.addEventListener('click', function () { handle(String(n)); });
      grid.appendChild(btn);
    });

    g.appendChild(label);
    g.appendChild(display);
    g.appendChild(err);
    g.appendChild(grid);
    document.body.prepend(g);
  }

  function handle(k) {
    var gate = document.getElementById('kwh-gate');
    if (!gate) return;
    if (k === '⌫') {
      pin = pin.slice(0, -1);
    } else if (pin.length < 4) {
      pin += k;
    }
    document.getElementById('kwh-dots').textContent = dots();
    if (pin.length === 4) {
      if (pin === '9889') {
        sessionStorage.setItem(KEY, '1');
        gate.remove();
      } else {
        document.getElementById('kwh-err').textContent = 'Incorrect PIN';
        pin = '';
        setTimeout(function () {
          var d = document.getElementById('kwh-dots');
          var e = document.getElementById('kwh-err');
          if (d) d.textContent = dots();
          if (e) e.textContent = '';
        }, 700);
      }
    }
  }

  document.addEventListener('DOMContentLoaded', buildOverlay);

  document.addEventListener('keydown', function (e) {
    if (!document.getElementById('kwh-gate')) return;
    if (e.key >= '0' && e.key <= '9') handle(e.key);
    else if (e.key === 'Backspace') handle('⌫');
  });
})();
