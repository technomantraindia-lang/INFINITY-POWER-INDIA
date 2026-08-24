const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    nav?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    history.replaceState(null, '', link.getAttribute('href'));
  });
});

document.querySelectorAll('[data-scroll]').forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.scroll);
    const direction = Number(button.dataset.direction || 1);
    const firstItem = target?.firstElementChild;
    const itemGap = Number.parseFloat(getComputedStyle(target).gap) || 0;
    const productStep = target?.id === 'product-list' && firstItem
      ? firstItem.getBoundingClientRect().width + itemGap
      : Math.max(target?.clientWidth * 0.55 || 0, 160);
    target?.scrollBy({ left: direction * productStep, behavior: 'smooth' });
  });
});

const trustedSlider = document.getElementById('trust-list');

if (trustedSlider) {
  const originalClients = [...trustedSlider.children];
  originalClients.forEach((client) => {
    const duplicate = client.cloneNode(true);
    duplicate.setAttribute('aria-hidden', 'true');
    trustedSlider.appendChild(duplicate);
  });

  const advanceTrustedSlider = () => {
    const firstSetWidth = trustedSlider.scrollWidth / 2;
    const step = trustedSlider.clientWidth / originalClients.length;

    if (trustedSlider.scrollLeft + step >= firstSetWidth - 2) {
      trustedSlider.scrollTo({ left: 0, behavior: 'auto' });
      requestAnimationFrame(() => trustedSlider.scrollBy({ left: step, behavior: 'smooth' }));
      return;
    }

    trustedSlider.scrollBy({ left: step, behavior: 'smooth' });
  };

  let trustedTimer = window.setInterval(advanceTrustedSlider, 3000);
  const pauseTrustedSlider = () => window.clearInterval(trustedTimer);
  const resumeTrustedSlider = () => {
    window.clearInterval(trustedTimer);
    trustedTimer = window.setInterval(advanceTrustedSlider, 3000);
  };

  trustedSlider.addEventListener('mouseenter', pauseTrustedSlider);
  trustedSlider.addEventListener('mouseleave', resumeTrustedSlider);
  trustedSlider.addEventListener('focusin', pauseTrustedSlider);
  trustedSlider.addEventListener('focusout', resumeTrustedSlider);
}

const productSlider = document.getElementById('product-list');

if (productSlider) {
  const originalProducts = [...productSlider.children];
  const productDots = [...document.querySelectorAll('.product-dots i')];

  originalProducts.forEach((product) => {
    const duplicate = product.cloneNode(true);
    duplicate.setAttribute('aria-hidden', 'true');
    productSlider.appendChild(duplicate);
  });

  const getProductStep = () => {
    const firstProduct = productSlider.firstElementChild;
    const gap = Number.parseFloat(getComputedStyle(productSlider).gap) || 0;
    return (firstProduct?.getBoundingClientRect().width || productSlider.clientWidth) + gap;
  };

  const updateProductDots = () => {
    const step = getProductStep();
    const position = Math.round(productSlider.scrollLeft / step) % productDots.length;
    productDots.forEach((dot, index) => dot.classList.toggle('selected', index === position));
  };

  const advanceProductSlider = () => {
    const firstSetWidth = productSlider.scrollWidth / 2;
    const step = getProductStep();

    if (productSlider.scrollLeft + step >= firstSetWidth - 2) {
      productSlider.scrollTo({ left: 0, behavior: 'auto' });
      requestAnimationFrame(() => productSlider.scrollBy({ left: step, behavior: 'smooth' }));
      return;
    }

    productSlider.scrollBy({ left: step, behavior: 'smooth' });
  };

  let productTimer = window.setInterval(advanceProductSlider, 3200);
  const pauseProductSlider = () => window.clearInterval(productTimer);
  const resumeProductSlider = () => {
    window.clearInterval(productTimer);
    productTimer = window.setInterval(advanceProductSlider, 3200);
  };

  productSlider.addEventListener('scroll', updateProductDots, { passive: true });
  productSlider.addEventListener('mouseenter', pauseProductSlider);
  productSlider.addEventListener('mouseleave', resumeProductSlider);
  productSlider.addEventListener('focusin', pauseProductSlider);
  productSlider.addEventListener('focusout', resumeProductSlider);
}

const projectCopy = {
  turnkey: ['Automated Production Line', 'Control Panel Manufacturing', 'Machine Retrofit Solutions', 'On-site Commissioning'],
  panel: ['Custom Panel Assembly', 'PLC Control Cabinet', 'HMI Panel Integration', 'Electrical Testing'],
  retrofit: ['Legacy Machine Upgrade', 'Drive Modernisation', 'Production Line Retrofit', 'Control System Upgrade'],
  commissioning: ['Site Installation', 'System Testing', 'Performance Validation', 'Operator Training']
};

document.querySelectorAll('[data-project]').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('[data-project]').forEach((item) => {
      item.classList.toggle('active', item === tab);
      item.setAttribute('aria-selected', String(item === tab));
    });
    document.querySelectorAll('.project-grid h3').forEach((title, index) => {
      title.textContent = projectCopy[tab.dataset.project][index];
    });
  });
});

// Intersection Observer for Smooth Scroll Reveal Animations
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.addEventListener('DOMContentLoaded', () => {
  const revealSelectors = [
    '.section-title',
    '.reasons-title',
    '.reason-card',
    '.industry-card',
    '.project-card',
    '.service-card',
    '.process-step',
    '.mission-card',
    '.testimonial-card',
    '.faq-accordion details',
    '.cta__inner',
    '.cat-card',
    '.feat-card',
    '.ind-card',
    '.reason-box',
    '.stat-card',
    '.portfolio-left'
  ];

  revealSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, idx) => {
      el.classList.add('reveal');
      if (idx % 4 === 1) el.classList.add('delay-1');
      if (idx % 4 === 2) el.classList.add('delay-2');
      if (idx % 4 === 3) el.classList.add('delay-3');
      revealObserver.observe(el);
    });
  });

  // Filter Pill Buttons Logic for Gallery & Projects pages
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const category = pill.textContent.trim().toLowerCase();
      const items = document.querySelectorAll('.gal-item, .proj-card');
      
      items.forEach((item) => {
        if (category === 'all' || category === 'all projects') {
          item.style.display = '';
        } else {
          const text = item.textContent.toLowerCase();
          if (text.includes(category)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });

  // Fullscreen Lightbox Modal for Gallery Page
  const lightboxModal = document.getElementById('gal-lightbox-modal');
  const lightboxImg = document.getElementById('gal-lightbox-img');
  const lightboxCaption = document.getElementById('gal-lightbox-caption');
  const lightboxClose = document.querySelector('.gal-lightbox-close');
  const lightboxPrev = document.querySelector('.gal-lightbox-prev');
  const lightboxNext = document.querySelector('.gal-lightbox-next');
  const galItems = [...document.querySelectorAll('.gal-item')];

  let currentIndex = 0;

  const showLightboxImage = (index) => {
    if (galItems.length === 0 || !galItems[index]) return;
    currentIndex = index;
    const item = galItems[currentIndex];
    const imgEl = item.querySelector('img');
    const spanEl = item.querySelector('.gal-item-overlay span');

    if (imgEl && lightboxImg) {
      lightboxImg.src = imgEl.src;
      lightboxImg.alt = imgEl.alt || (spanEl ? spanEl.textContent : '');
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = spanEl ? spanEl.textContent : (imgEl ? imgEl.alt : '');
    }
  };

  const openLightbox = (index) => {
    if (!lightboxModal) return;
    showLightboxImage(index);
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  galItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  lightboxClose?.addEventListener('click', closeLightbox);

  lightboxPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + galItems.length) % galItems.length;
    showLightboxImage(prevIndex);
  });

  lightboxNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % galItems.length;
    showLightboxImage(nextIndex);
  });

  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + galItems.length) % galItems.length;
      showLightboxImage(prevIndex);
    }
    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % galItems.length;
      showLightboxImage(nextIndex);
    }
  });

});
