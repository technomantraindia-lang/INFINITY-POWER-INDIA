(() => {
  "use strict";

  /* ---------- Mobile nav ---------- */
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Active nav on scroll ---------- */
  const sections = [...document.querySelectorAll("section[id]")];
  const navLinks = [...document.querySelectorAll(".main-nav a")];

  const setActiveNav = () => {
    const y = window.scrollY + 120;
    let current = "home";
    for (const section of sections) {
      if (section.offsetTop <= y) current = section.id;
    }
    navLinks.forEach((link) => {
      const href = link.getAttribute("href")?.replace("#", "");
      link.classList.toggle("active", href === current || (current === "home" && href === "top"));
    });
  };

  /* ---------- Scroll reveal ---------- */
  const reveals = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((el) => revealObserver.observe(el));

  /* ---------- Count-up stats ---------- */
  const counters = document.querySelectorAll("[data-count]");

  const animateCount = (el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((el) => counterObserver.observe(el));

  /* ---------- Industry nodes ---------- */
  const nodes = document.querySelectorAll(".industry-node");
  nodes.forEach((node) => {
    node.addEventListener("click", () => {
      nodes.forEach((n) => n.classList.remove("active"));
      node.classList.add("active");
    });
  });

  /* Auto-cycle industry highlight */
  let nodeIndex = 0;
  if (nodes.length) {
    setInterval(() => {
      nodes.forEach((n) => n.classList.remove("active"));
      nodes[nodeIndex].classList.add("active");
      nodeIndex = (nodeIndex + 1) % nodes.length;
    }, 2200);
  }

  /* ---------- Inquiry form ---------- */
  const form = document.getElementById("inquiry-form");
  const note = document.getElementById("form-note");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    note.hidden = false;
    form.reset();
    setTimeout(() => {
      note.hidden = true;
    }, 4000);
  });

  document.getElementById("brochure-btn")?.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Brochure download will be available soon. Please use Quick Inquiry or WhatsApp to request it.");
  });

  /* ---------- Clients carousel ---------- */
  const clientsSlider = document.querySelector(".clients-slider");
  const clientsViewport = document.getElementById("clients-viewport");
  const clientsTrack = document.getElementById("clients-track");
  const clientsPrev = document.getElementById("clients-prev");
  const clientsNext = document.getElementById("clients-next");

  if (clientsSlider && clientsViewport && clientsTrack && clientsPrev && clientsNext) {
    let clientsIndex = 0;
    let autoSlideId = null;
    let isPaused = false;

    const getStep = () => {
      const tile = clientsTrack.querySelector(".client-tile");
      if (!tile) return 160;
      const styles = getComputedStyle(clientsTrack);
      const gap = parseFloat(styles.columnGap || styles.gap) || 16;
      return tile.getBoundingClientRect().width + gap;
    };

    const getVisibleCount = () => {
      const tile = clientsTrack.querySelector(".client-tile");
      if (!tile) return 1;
      const step = getStep();
      return Math.max(1, Math.floor((clientsViewport.clientWidth + 1) / step));
    };

    const maxIndex = () => {
      const total = clientsTrack.querySelectorAll(".client-tile").length;
      return Math.max(0, total - getVisibleCount());
    };

    const updateClients = () => {
      const max = maxIndex();
      if (clientsIndex > max) clientsIndex = 0;
      if (clientsIndex < 0) clientsIndex = max;
      clientsTrack.style.transform = `translateX(-${clientsIndex * getStep()}px)`;
    };

    const nextSlide = () => {
      clientsIndex += 1;
      if (clientsIndex > maxIndex()) clientsIndex = 0;
      updateClients();
    };

    const prevSlide = () => {
      clientsIndex -= 1;
      if (clientsIndex < 0) clientsIndex = maxIndex();
      updateClients();
    };

    const stopAutoSlide = () => {
      if (autoSlideId) {
        clearInterval(autoSlideId);
        autoSlideId = null;
      }
    };

    const startAutoSlide = () => {
      stopAutoSlide();
      if (isPaused) return;
      autoSlideId = setInterval(nextSlide, 3000);
    };

    const pauseAutoSlide = () => {
      isPaused = true;
      stopAutoSlide();
    };

    const resumeAutoSlide = () => {
      isPaused = false;
      startAutoSlide();
    };

    clientsPrev.addEventListener("click", () => {
      prevSlide();
      if (!isPaused) startAutoSlide();
    });

    clientsNext.addEventListener("click", () => {
      nextSlide();
      if (!isPaused) startAutoSlide();
    });

    clientsSlider.addEventListener("mouseenter", pauseAutoSlide);
    clientsSlider.addEventListener("mouseleave", resumeAutoSlide);

    clientsSlider.addEventListener("touchstart", pauseAutoSlide, { passive: true });
    clientsSlider.addEventListener("touchend", resumeAutoSlide, { passive: true });

    window.addEventListener("resize", () => {
      updateClients();
      if (!isPaused) startAutoSlide();
    });

    updateClients();
    startAutoSlide();
  }

  /* ---------- Gallery slider ---------- */
  const gallerySlider = document.getElementById("gallery-slider");
  const gallerySlides = [...document.querySelectorAll(".gallery-slide")];
  const galleryDots = [...document.querySelectorAll(".gallery-dot")];

  if (gallerySlider && gallerySlides.length) {
    let galleryIndex = 0;
    let galleryTimer = null;
    let galleryPaused = false;

    const showGallerySlide = (index) => {
      galleryIndex = (index + gallerySlides.length) % gallerySlides.length;
      gallerySlides.forEach((slide, i) => {
        slide.classList.toggle("is-active", i === galleryIndex);
      });
      galleryDots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === galleryIndex);
      });
    };

    const nextGallerySlide = () => showGallerySlide(galleryIndex + 1);

    const stopGalleryAuto = () => {
      if (galleryTimer) {
        clearInterval(galleryTimer);
        galleryTimer = null;
      }
    };

    const startGalleryAuto = () => {
      stopGalleryAuto();
      if (galleryPaused) return;
      galleryTimer = setInterval(nextGallerySlide, 4500);
    };

    galleryDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        showGallerySlide(Number(dot.dataset.index));
        if (!galleryPaused) startGalleryAuto();
      });
    });

    gallerySlider.addEventListener("mouseenter", () => {
      galleryPaused = true;
      stopGalleryAuto();
    });

    gallerySlider.addEventListener("mouseleave", () => {
      galleryPaused = false;
      startGalleryAuto();
    });

    showGallerySlide(0);
    startGalleryAuto();
  }

  /* ---------- Sticky header shadow ---------- */
  const header = document.querySelector(".site-header");
  const onScroll = () => {
    header?.classList.toggle("scrolled", window.scrollY > 20);
    setActiveNav();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Particle canvas ---------- */
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let particles = [];
  let rafId = 0;
  let mouse = { x: null, y: null };

  const PARTICLE_COUNT = 70;
  const CONNECT_DIST = 120;

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  const createParticles = () => {
    particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.8 + 0.6,
      pulse: Math.random() * Math.PI * 2,
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += 0.02;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      if (mouse.x !== null) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 140) {
          p.x += dx / dist * 0.35;
          p.y += dy / dist * 0.35;
        }
      }

      const alpha = 0.35 + Math.sin(p.pulse) * 0.2;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 229, 255, ${alpha})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < CONNECT_DIST) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(0, 229, 255, ${0.12 * (1 - d / CONNECT_DIST)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    rafId = requestAnimationFrame(draw);
  };

  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });

  window.addEventListener(
    "mousemove",
    (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    },
    { passive: true }
  );

  window.addEventListener(
    "mouseleave",
    () => {
      mouse.x = null;
      mouse.y = null;
    },
    { passive: true }
  );

  const startParticles = () => {
    resize();
    createParticles();
    cancelAnimationFrame(rafId);
    draw();
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    canvas.style.display = "none";
  } else {
    startParticles();
  }
})();
