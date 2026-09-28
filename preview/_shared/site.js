/* Shared preview site behavior — nav scroll, mobile menu, Web3Forms contact */
(function () {
  const WEB3FORMS_ACCESS_KEY = 'e06d54ca-4593-4bf6-b1d4-2b6c9cf99460';

  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.nav-toggle');
  if (nav) {
    const onScroll = () => {
      const solid = window.scrollY > 40 || nav.dataset.forceSolid === 'true';
      nav.classList.toggle('is-scrolled', solid);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('nav-open'));
  }

  const form = document.getElementById('contact-form');
  if (!form) return;

  const statusEl = document.getElementById('form-status');
  const submitBtn = form.querySelector('[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (statusEl) statusEl.textContent = '';
    const fd = new FormData(form);
    if (fd.get('botcheck')) return;

    const first = (fd.get('first_name') || '').toString().trim();
    const last = (fd.get('last_name') || '').toString().trim();
    const email = (fd.get('email') || '').toString().trim();
    const interest = (fd.get('interest') || '').toString().trim();
    const message = (fd.get('message') || '').toString().trim();
    const demo = fd.get('request_demo') === 'on' || fd.get('request_demo') === 'yes';

    const composed = [
      interest ? `Interest: ${interest}` : '',
      demo ? 'Demo requested: yes' : '',
      message,
    ].filter(Boolean).join('\n\n');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: demo ? 'kWh Electric — Demo request (preview)' : 'kWh Electric — Contact (preview)',
          from_name: [first, last].filter(Boolean).join(' ') || 'Website visitor',
          name: [first, last].filter(Boolean).join(' '),
          email,
          message: composed || '(no message)',
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Submit failed');
      form.reset();
      if (statusEl) {
        statusEl.style.color = '#0B0B0E';
        statusEl.textContent = 'Message received. We\'ll be in touch shortly.';
      }
    } catch (err) {
      if (statusEl) {
        statusEl.style.color = '#C8341A';
        statusEl.textContent = err.message || 'Something went wrong. Email arham@kwhelectric.io.';
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = submitBtn.dataset.label || 'Send message';
      }
    }
  });
})();
