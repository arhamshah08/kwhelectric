(function () {
  const nav = document.querySelector('.kwh-nav');
  if (!nav) return;

  const toggle = nav.querySelector('.kwh-nav-toggle');
  const overlay = document.querySelector('.kwh-nav-overlay');
  const dropdownBtn = nav.querySelector('[data-solutions-toggle]');
  const dropdownItem = dropdownBtn?.closest('.kwh-nav-item');

  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 70);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function closeNav() {
    nav.classList.remove('is-open');
    dropdownItem?.classList.remove('is-open');
    overlay?.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    overlay?.classList.toggle('is-visible', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  overlay?.addEventListener('click', closeNav);

  dropdownBtn?.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      dropdownItem?.classList.toggle('is-open');
    }
  });

  // Desktop hover-intent: open on enter, close after a short grace period so
  // the pointer can travel from the button down to the panel without it closing.
  let closeTimer;
  if (dropdownItem) {
    const openMenu = () => {
      if (window.innerWidth <= 900) return;
      clearTimeout(closeTimer);
      dropdownItem.classList.add('is-open');
    };
    const scheduleClose = () => {
      if (window.innerWidth <= 900) return;
      clearTimeout(closeTimer);
      closeTimer = setTimeout(() => dropdownItem.classList.remove('is-open'), 220);
    };
    dropdownItem.addEventListener('mouseenter', openMenu);
    dropdownItem.addEventListener('mouseleave', scheduleClose);
    dropdownItem.addEventListener('focusin', openMenu);
    dropdownItem.addEventListener('focusout', scheduleClose);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  document.addEventListener('click', (e) => {
    if (!dropdownItem?.contains(e.target)) {
      dropdownItem?.classList.remove('is-open');
    }
  });
})();
