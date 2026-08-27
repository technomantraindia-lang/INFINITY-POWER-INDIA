/* ==========================================================================
   Infinity Power India — cinematic motion layer
   Slideshow heroes, filmstrip, counters, machine photos, dock, parallax.
   ========================================================================== */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var PAGE_SLIDES = {
    'index.html': [
      'assets/hero-automation.png',
      'assets/hero-banner-reference.png',
      'assets/about-control-panel.png',
      'assets/rikin/sectional-drive-panel-system.jpg',
      'assets/rikin/hot-milling.jpg',
      'assets/rikin/cnc-laser-cutting.jpg',
      'assets/rikin/textile-stenter-automation.webp'
    ],
    'about.html': [
      'assets/about-control-panel.png',
      'assets/rikin/sectional-drive-panel-system.jpg',
      'assets/rikin/paper-mill-automation.jpg',
      'assets/hero-automation.png'
    ],
    'products.html': [
      'assets/cat-plc-hd.png',
      'assets/cat-hmi-hd.png',
      'assets/cat-vfd-hd.png',
      'assets/rikin/sectional-drive-panel-system.jpg'
    ],
    'services.html': [
      'assets/rikin/sectional-drive-panel-system.jpg',
      'assets/about-control-panel.png',
      'assets/rikin/cnc-laser-cutting.jpg',
      'assets/hero-automation.png'
    ],
    'industries.html': [
      'assets/rikin/textile-stenter-automation.webp',
      'assets/rikin/hot-milling.jpg',
      'assets/rikin/injection-moulding.webp',
      'assets/rikin/dairy-equipment.webp',
      'assets/rikin/corrugated-plant.jpg'
    ],
    'projects.html': [
      'assets/rikin/cnc-laser-cutting.jpg',
      'assets/rikin/cut-to-length-machine.webp',
      'assets/rikin/sheet-metal-straightener.jpg',
      'assets/rikin/sectional-drive-panel-system.jpg'
    ],
    'gallery.html': [
      'assets/gal-1.png',
      'assets/rikin/auto-head.webp',
      'assets/rikin/stenter-machine.webp',
      'assets/rikin/pvc-pipe-plant.jpg'
    ],
    'downloads.html': [
      'assets/dl-hero.png',
      'assets/about-control-panel.png',
      'assets/rikin/sectional-drive-panel-system.jpg'
    ],
    'blog.html': [
      'assets/blog-hero.jpg',
      'assets/blog-plc.jpg',
      'assets/blog-hmi.jpg',
      'assets/blog-vfd.jpg'
    ],
    'career.html': [
      'assets/dl-hero.png',
      'assets/about-control-panel.png',
      'assets/hero-automation.png'
    ],
    'contact.html': [
      'assets/about-control-panel.png',
      'assets/rikin/sectional-drive-panel-system.jpg',
      'assets/hero-banner-reference.png'
    ]
  };

  var MARQUEE = [
    ['assets/rikin/stenter-machine.webp', 'Stenter Machine'],
    ['assets/rikin/hot-milling.jpg', 'Hot Rolling Mill'],
    ['assets/rikin/cnc-laser-cutting.jpg', 'CNC Laser Cutting'],
    ['assets/rikin/sectional-drive-panel-system.jpg', 'Drive Panel System'],
    ['assets/rikin/injection-moulding.webp', 'Injection Moulding'],
    ['assets/rikin/pvc-pipe-plant.jpg', 'PVC Pipe Plant'],
    ['assets/rikin/dairy-equipment.webp', 'Dairy Automation'],
    ['assets/rikin/embroidery-machine.webp', 'Embroidery Machine'],
    ['assets/rikin/paper-mill-automation.jpg', 'Paper Mill'],
    ['assets/rikin/slitter-rewinder.webp', 'Slitter Rewinder'],
    ['assets/rikin/turret-punching.jpg', 'Turret Punching'],
    ['assets/rikin/steam-boiler.webp', 'Boiler Plant']
  ];

  var SERVICE_PHOTOS = [
    'assets/rikin/sectional-drive-panel-system.jpg',
    'assets/rikin/cnc-laser-cutting.jpg',
    'assets/about-control-panel.png',
    'assets/rikin/benninger-sectional-warper.jpg',
    'assets/cat-hmi-hd.png',
    'assets/cat-scada-hd.png',
    'assets/cat-vfd-hd.png',
    'assets/cat-servo-hd.png',
    'assets/rikin/paper-mill-automation.jpg',
    'assets/rikin/tape-plant-cheese-winder.jpg',
    'assets/rikin/sheet-metal-straightener.jpg',
    'assets/rikin/steam-boiler.webp'
  ];

  var MACHINE_PHOTOS = [
    ['merceriz', 'assets/rikin/fabric-mercerizing-machine.jpg'],
    ['stenter', 'assets/rikin/stenter-machine.webp'],
    ['straighten', 'assets/rikin/sheet-metal-straightener.jpg'],
    ['folding', 'assets/rikin/fabric-folding-machine.avif'],
    ['warp', 'assets/rikin/benninger-sectional-warper.jpg'],
    ['loom', 'assets/rikin/plastic-looms-machine.avif'],
    ['digital print', 'assets/rikin/digital-textile-printing.webp'],
    ['flatbed', 'assets/rikin/digital-textile-printing.webp'],
    ['ring frame', 'assets/rikin/ring-frame-machine.jpeg'],
    ['winding', 'assets/rikin/winding-rewinding.avif'],
    ['embroidery', 'assets/rikin/embroidery-machine.webp'],
    ['auto head', 'assets/rikin/auto-head.webp'],
    ['boiler', 'assets/rikin/steam-boiler.webp'],
    ['hot rolling', 'assets/rikin/hot-milling.jpg'],
    ['tmt', 'assets/rikin/hot-milling.jpg'],
    ['main mill', 'assets/rikin/hot-milling.jpg'],
    ['stand mill', 'assets/rikin/hot-milling.jpg'],
    ['cold mill', 'assets/rikin/hot-milling.jpg'],
    ['decoil', 'assets/rikin/hydraulic-decoiler.jpg'],
    ['coiler', 'assets/rikin/hydraulic-decoiler.jpg'],
    ['pinch', 'assets/rikin/hot-milling.jpg'],
    ['cut-to-length', 'assets/rikin/cut-to-length-machine.webp'],
    ['cut to length', 'assets/rikin/cut-to-length-machine.webp'],
    ['punching', 'assets/rikin/sheet-metal-punching.webp'],
    ['back gauge', 'assets/rikin/nc-back-gauge.jpg'],
    ['spm', 'assets/rikin/spm-packing-machine.jpg'],
    ['cnc', 'assets/rikin/cnc-laser-cutting.jpg'],
    ['turret', 'assets/rikin/turret-punching.jpg'],
    ['laser', 'assets/rikin/cnc-laser-cutting.jpg'],
    ['sectional', 'assets/rikin/sectional-drive-panel-system.jpg'],
    ['line shaft', 'assets/rikin/line-shaft.jpg'],
    ['twin drum', 'assets/rikin/twin-drum-rewinder.jpg'],
    ['rewinder', 'assets/rikin/simple-rewinder.jpg'],
    ['paper cutting', 'assets/rikin/paper-cutting-machine.avif'],
    ['core pipe', 'assets/rikin/core-pipe-machine.webp'],
    ['paper mill', 'assets/rikin/paper-mill-automation.jpg'],
    ['corrugated', 'assets/rikin/corrugated-plant.jpg'],
    ['packaging', 'assets/rikin/automatic-pouch-packing-machine.jpg'],
    ['extruder', 'assets/rikin/screw-extruder-machine.webp'],
    ['lamination', 'assets/rikin/lamination-plant.jpg'],
    ['tape plant', 'assets/rikin/tape-plant-cheese-winder.jpg'],
    ['cheese winder', 'assets/rikin/tape-plant-cheese-winder.jpg'],
    ['pvc', 'assets/rikin/pvc-pipe-plant.jpg'],
    ['bag cutting', 'assets/rikin/bag-cutting-sewing-machine.webp'],
    ['blow', 'assets/rikin/blow-moulding.png'],
    ['globe mould', 'assets/rikin/blow-moulding.png'],
    ['injection', 'assets/rikin/injection-moulding.webp'],
    ['film', 'assets/rikin/blown-film.jpg'],
    ['rotogravure', 'assets/rikin/rotogravure-printing.webp'],
    ['slitter', 'assets/rikin/slitter-rewinder.webp'],
    ['pouch', 'assets/rikin/automatic-pouch-packing-machine.jpg'],
    ['trim winder', 'assets/rikin/trim-winder.webp'],
    ['winder', 'assets/rikin/winder-unwinder-plastic.webp'],
    ['irrigation', 'assets/rikin/pvc-pipe-plant.jpg'],
    ['forming board', 'assets/rikin/particleboard-plant.jpg'],
    ['particle', 'assets/rikin/particleboard-plant.jpg'],
    ['router', 'assets/rikin/cnc-router.avif'],
    ['sunmica', 'assets/rikin/sunmica-lamination-machine.avif'],
    ['wood sheet', 'assets/rikin/wood-sheet-cutting.webp'],
    ['finger joint', 'assets/rikin/finger-joint-machine.webp'],
    ['wooden', 'assets/rikin/wood-sheet-cutting.webp'],
    ['dairy', 'assets/rikin/dairy-equipment.webp'],
    ['butter', 'assets/rikin/dairy-equipment.webp'],
    ['paneer', 'assets/rikin/dairy-equipment.webp'],
    ['powder', 'assets/rikin/dairy-equipment.webp'],
    ['milk', 'assets/rikin/dairy-equipment.webp'],
    ['cold storage', 'assets/rikin/dairy-equipment.webp'],
    ['bottle', 'assets/rikin/automatic-pouch-packing-machine.jpg']
  ];

  function pageKey() {
    var file = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
    if (!file || file.indexOf('.html') === -1) return 'index.html';
    return file;
  }

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }

  function $$(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function heroEl() {
    return $(
      '.hero, .au-hero, .prod-hero, .srv-hero, .ind-hero, .proj-hero, .gal-hero, .dl-hero, .blog-hero, .career-hero, .contact-hero'
    );
  }

  function buildSlides(list) {
    var wrap = document.createElement('div');
    wrap.className = 'cine-slides';
    wrap.setAttribute('aria-hidden', 'true');
    list.forEach(function (src, i) {
      var slide = document.createElement('div');
      slide.className = 'cine-slide' + (i === 0 ? ' is-active' : '');
      var img = document.createElement('img');
      img.src = src;
      img.alt = '';
      if (i === 0) img.setAttribute('fetchpriority', 'high');
      else img.loading = 'lazy';
      slide.appendChild(img);
      wrap.appendChild(slide);
    });
    return wrap;
  }

  function startSlideshow(hero) {
    var slides = $$('.cine-slide', hero);
    var dots = $$('.cine-dots button', hero);
    if (slides.length < 2 || reduceMotion) return;
    var index = 0;
    var timer;

    function go(next) {
      slides[index].classList.remove('is-active');
      if (dots[index]) dots[index].classList.remove('is-active');
      index = (next + slides.length) % slides.length;
      slides[index].classList.add('is-active');
      if (dots[index]) dots[index].classList.add('is-active');
    }

    function play() {
      timer = window.setInterval(function () { go(index + 1); }, 5500);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        window.clearInterval(timer);
        go(i);
        play();
      });
    });

    hero.addEventListener('mouseenter', function () { window.clearInterval(timer); });
    hero.addEventListener('mouseleave', function () {
      window.clearInterval(timer);
      play();
    });
    play();
  }

  function injectCinematic() {
    var hero = heroEl();
    if (!hero) return;
    var slides = PAGE_SLIDES[pageKey()] || PAGE_SLIDES['index.html'];
    hero.classList.add('cinematic-hero');

    if (!$('.cine-slides', hero)) {
      hero.insertBefore(buildSlides(slides), hero.firstChild);
    }
    if (!$('.cine-overlay', hero)) {
      var overlay = document.createElement('div');
      overlay.className = 'cine-overlay';
      hero.insertBefore(overlay, hero.children[1] || null);
    }
    if (!$('.cine-grid', hero) && hero.classList.contains('hero')) {
      var grid = document.createElement('div');
      grid.className = 'cine-grid';
      var scan = document.createElement('div');
      scan.className = 'cine-scan';
      hero.appendChild(grid);
      hero.appendChild(scan);
    }
    if (!$('.cine-dots', hero) && slides.length > 1) {
      var dots = document.createElement('div');
      dots.className = 'cine-dots';
      dots.setAttribute('aria-label', 'Hero slides');
      slides.forEach(function (_, i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Show slide ' + (i + 1));
        if (i === 0) b.className = 'is-active';
        dots.appendChild(b);
      });
      hero.appendChild(dots);
    }
    startSlideshow(hero);
  }

  function injectMarquee() {
    if ($('.cine-marquee')) return;
    var hero = heroEl();
    if (!hero) return;
    var section = document.createElement('section');
    section.className = 'cine-marquee';
    section.setAttribute('aria-label', 'Automation machinery');
    var track = document.createElement('div');
    track.className = 'cine-marquee__track';
    MARQUEE.forEach(function (item) {
      var fig = document.createElement('figure');
      var img = document.createElement('img');
      img.src = item[0];
      img.alt = item[1];
      img.loading = 'lazy';
      var cap = document.createElement('figcaption');
      cap.textContent = item[1];
      fig.appendChild(img);
      fig.appendChild(cap);
      track.appendChild(fig);
    });
    section.appendChild(track);
    hero.insertAdjacentElement('afterend', section);
    if (!reduceMotion) {
      track.innerHTML += track.innerHTML;
    }
  }

  function injectDock() {
    if ($('.cine-dock')) return;
    var dock = document.createElement('div');
    dock.className = 'cine-dock';
    dock.innerHTML =
      '<a class="cine-dock__wa" href="https://wa.me/919978973722" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l6-1.6A11 11 0 1 0 20.5 3.5zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-3.5.9.9-3.4-.2-.3A9 9 0 1 1 12 20.5zm5-6.7c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8 8 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.3-.4c.1-.2 0-.3 0-.5l-.9-2.1c-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3s-1 1-1 2.4 1 2.8 1.2 3a12.5 12.5 0 0 0 4.8 4.2c.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3s.3-1.2.2-1.3-.3-.2-.6-.3z"/></svg>' +
      '<span>WhatsApp</span></a>' +
      '<button type="button" class="cine-dock__inq" data-inquiry-open aria-label="Open inquiry form">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v12H7l-3 4V4z"/></svg>' +
      '<span>Inquiry</span></button>';
    document.body.appendChild(dock);
  }

  function injectProgress() {
    if ($('.cine-progress-bar')) return;
    var bar = document.createElement('div');
    bar.className = 'cine-progress-bar';
    document.body.appendChild(bar);
    window.addEventListener('scroll', function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? (window.scrollY / max) * 100 : 0;
      bar.style.width = p + '%';
    }, { passive: true });
  }

  function headerScroll() {
    var header = $('.site-header');
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 18);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function animateCounters() {
    var nodes = $$('[data-count]');
    if (!nodes.length) return;
    var run = function (el) {
      var target = Number(el.getAttribute('data-count')) || 0;
      if (reduceMotion) {
        el.textContent = String(target);
        return;
      }
      var start = 0;
      var dur = 1400;
      var t0 = null;
      var tick = function (now) {
        if (!t0) t0 = now;
        var p = Math.min((now - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(start + (target - start) * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(run);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          run(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    nodes.forEach(function (el) { io.observe(el); });
  }

  function productStatCounts() {
    $$('.stat-card-number').forEach(function (el) {
      if (el.hasAttribute('data-count')) return;
      var n = parseInt(String(el.textContent).replace(/\D/g, ''), 10);
      if (!n) return;
      el.setAttribute('data-count', String(n));
      el.textContent = '0';
    });
  }

  function servicePhotos() {
    $$('.service-art').forEach(function (el, i) {
      el.classList.add('is-photo');
      el.style.backgroundImage = 'url("' + SERVICE_PHOTOS[i % SERVICE_PHOTOS.length] + '")';
    });
  }

  function machinePhotos() {
    $$('.indmach-list li').forEach(function (li) {
      if (li.querySelector('.cine-mach-thumb')) return;
      var label = (li.textContent || '').trim();
      var src = 'assets/rikin/sectional-drive-panel-system.jpg';
      var key = label.toLowerCase();
      for (var i = 0; i < MACHINE_PHOTOS.length; i++) {
        if (key.indexOf(MACHINE_PHOTOS[i][0]) !== -1) {
          src = MACHINE_PHOTOS[i][1];
          break;
        }
      }
      li.classList.add('cine-mach');
      var img = document.createElement('img');
      img.className = 'cine-mach-thumb';
      img.src = src;
      img.alt = label;
      img.loading = 'lazy';
      var name = document.createElement('span');
      name.className = 'cine-mach-name';
      name.textContent = label;
      li.textContent = '';
      li.appendChild(img);
      li.appendChild(name);
    });
  }

  function parallax() {
    if (reduceMotion) return;
    var nodes = $$('[data-parallax], .cinematic-hero .cine-slides');
    if (!nodes.length) return;
    window.addEventListener('scroll', function () {
      var y = window.scrollY;
      nodes.forEach(function (el) {
        var hero = el.closest('.cinematic-hero');
        if (hero && y > hero.offsetHeight) return;
        el.style.transform = 'translate3d(0,' + Math.round(y * 0.18) + 'px,0)';
      });
    }, { passive: true });
  }

  function init() {
    injectProgress();
    injectCinematic();
    injectMarquee();
    injectDock();
    headerScroll();
    servicePhotos();
    machinePhotos();
    productStatCounts();
    animateCounters();
    parallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
