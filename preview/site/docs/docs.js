(function () {
  'use strict';

  // Mobile sidebar toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const sidebar = document.querySelector('.docs-sidebar');
  const overlay = document.querySelector('.sidebar-overlay');

  function closeSidebar() {
    sidebar?.classList.remove('is-open');
    overlay?.classList.remove('is-visible');
  }

  menuBtn?.addEventListener('click', () => {
    sidebar?.classList.toggle('is-open');
    overlay?.classList.toggle('is-visible');
  });
  overlay?.addEventListener('click', closeSidebar);

  // Scroll spy for TOC
  const tocLinks = document.querySelectorAll('.docs-toc a[data-section]');
  const sections = [];
  tocLinks.forEach((link) => {
    const id = link.getAttribute('data-section');
    const el = document.getElementById(id);
    if (el) sections.push({ id, el, link });
  });

  function updateToc() {
    const offset = 100;
    let current = sections[0]?.id;
    for (const s of sections) {
      if (s.el.getBoundingClientRect().top <= offset) current = s.id;
    }
    tocLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('data-section') === current);
    });
  }

  window.addEventListener('scroll', updateToc, { passive: true });
  updateToc();

  // Search (sidebar filter + Cmd+K)
  const searchInput = document.getElementById('docs-search');
  const parentNavItem = document.querySelector('.docs-sidebar > .docs-nav-item');
  const childNavItems = document.querySelectorAll('.docs-nav-sub .docs-nav-item[data-search]');
  const navSub = document.querySelector('.docs-nav-sub');
  let searchEmptyEl = document.getElementById('docs-search-empty');

  if (!searchEmptyEl && navSub) {
    searchEmptyEl = document.createElement('div');
    searchEmptyEl.id = 'docs-search-empty';
    searchEmptyEl.className = 'docs-search-empty search-hidden';
    searchEmptyEl.textContent = 'No matching sections';
    navSub.after(searchEmptyEl);
  }

  function navItemText(item) {
    return (item.getAttribute('data-search') || item.textContent || '').toLowerCase();
  }

  function filterSidebarNav() {
    const q = (searchInput?.value || '').toLowerCase().trim();

    if (!q) {
      if (parentNavItem) {
        parentNavItem.classList.remove('search-hidden', 'search-match');
      }
      childNavItems.forEach((item) => {
        item.classList.remove('search-hidden', 'search-match');
      });
      navSub?.classList.remove('search-hidden');
      searchEmptyEl?.classList.add('search-hidden');
      return;
    }

    let anyChildMatch = false;

    childNavItems.forEach((item) => {
      const match = navItemText(item).includes(q);
      item.classList.toggle('search-hidden', !match);
      item.classList.toggle('search-match', match);
      if (match) anyChildMatch = true;
    });

    if (parentNavItem) {
      const parentMatch = navItemText(parentNavItem).includes(q) || anyChildMatch;
      parentNavItem.classList.toggle('search-hidden', !parentMatch);
      parentNavItem.classList.toggle('search-match', navItemText(parentNavItem).includes(q));
    }

    navSub?.classList.toggle('search-hidden', !anyChildMatch);
    const noResults = !anyChildMatch && parentNavItem?.classList.contains('search-hidden');
    searchEmptyEl?.classList.toggle('search-hidden', !noResults);
  }

  searchInput?.addEventListener('input', filterSidebarNav);
  searchInput?.addEventListener('search', filterSidebarNav);

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchInput?.focus();
      searchInput?.select();
    }
    if (e.key === 'Escape') {
      if (document.activeElement === searchInput && searchInput.value) {
        searchInput.value = '';
        filterSidebarNav();
        return;
      }
      closeSidebar();
    }
  });

  // Mermaid init (if loaded)
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'neutral',
      flowchart: { curve: 'basis', padding: 16 },
      themeVariables: {
        primaryColor: '#FFF7E6',
        primaryTextColor: '#0B0B0E',
        primaryBorderColor: '#E3D2B0',
        lineColor: '#6B5A3F',
        secondaryColor: '#FFFBF0',
        tertiaryColor: '#CD7F32'
      }
    });
    mermaid.run({ querySelector: '.mermaid' });
  }
})();
