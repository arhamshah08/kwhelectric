/* Story overlay — opens bee-story in a fullscreen iframe from the main site. */
(function () {
  'use strict';

  var overlay, frame, closeBtn, open = false;

  function qs(sel) { return document.querySelector(sel); }

  function storyUrl() {
    return '/bee-story/?embed=1&start=1';
  }

  function setOpen(next) {
    open = next;
    if (!overlay) return;
    overlay.hidden = !open;
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open && frame && (!frame.src || frame.src === 'about:blank')) {
      frame.src = storyUrl();
    }
  }

  function pushStoryUrl() {
    var url = new URL(window.location.href);
    url.searchParams.set('story', '1');
    history.pushState({ story: true }, '', url.pathname + url.search + url.hash);
  }

  function clearStoryUrl() {
    var url = new URL(window.location.href);
    url.searchParams.delete('story');
    history.replaceState({}, '', url.pathname + url.search + url.hash);
  }

  function openStory(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setOpen(true);
    pushStoryUrl();
  }

  function closeStory() {
    setOpen(false);
    clearStoryUrl();
    if (frame) frame.src = 'about:blank';
  }

  function shouldAutoOpen() {
    return new URLSearchParams(window.location.search).get('story') === '1';
  }

  function bind() {
    overlay = qs('#story-overlay');
    frame = qs('#story-frame');
    closeBtn = qs('#story-close');
    if (!overlay || !frame) return;

    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-story-trigger]')) openStory(e);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeStory);

    window.addEventListener('keydown', function (e) {
      if (open && e.key === 'Escape') closeStory();
    });

    window.addEventListener('popstate', function () {
      if (open && !shouldAutoOpen()) closeStory();
    });

    if (shouldAutoOpen()) setOpen(true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
