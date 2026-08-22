/* ==========================================================================
   Site-wide Scroll Reveal
   - Adds .js-anim to <html> (enables reveal styles only when JS runs)
   - Auto-tags common blocks (section heads, cards, tiles, figures) with
     data-reveal + staggered delays, then reveals them on scroll.
   - Elements already carrying data-reveal are respected as-is.
   ========================================================================== */

(function () {
  'use strict';

  document.documentElement.classList.add('js-anim');

  var AUTO_SELECTORS = [
    '.section-center-head',
    '.section-head',
    '[class*="card"]',
    '[class*="tile"]',
    '[class*="-item"]',
    'figure'
  ].join(',');

  function tagAuto() {
    var seen = new WeakSet();
    document.querySelectorAll(AUTO_SELECTORS).forEach(function (el) {
      if (seen.has(el) || el.hasAttribute('data-reveal')) return;
      seen.add(el);
      el.setAttribute('data-reveal', '');
      // Stagger siblings inside the same parent
      var parent = el.parentElement;
      if (parent) {
        var sibs = Array.prototype.filter.call(parent.children, function (c) {
          return c.hasAttribute('data-reveal');
        });
        var idx = sibs.indexOf(el);
        if (idx > 0) el.style.setProperty('--reveal-delay', Math.min(idx * 90, 540) + 'ms');
      }
    });
  }

  function observe() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in-view'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  function init() {
    tagAuto();
    observe();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();