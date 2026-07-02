/* ====== URARTU — Scripts ====== */

document.addEventListener('DOMContentLoaded', () => {

  // ====== THEME TOGGLE ======
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Load saved theme
  const savedTheme = localStorage.getItem('urartu-theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('urartu-theme', next);
  });

  // ====== NAVBAR SCROLL EFFECT ======
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.style.padding = '6px 0';
    } else {
      nav.style.padding = '12px 0';
    }
  });

  // ====== SCROLL REVEAL (Intersection Observer) ======
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stagger children if any
        const children = entry.target.querySelectorAll('.reveal-child');
        children.forEach((child, i) => {
          setTimeout(() => child.classList.add('visible'), i * 100);
        });
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealEls.forEach(el => revealObserver.observe(el));

  // ====== COUNT-UP ANIMATION ======
  const countEls = document.querySelectorAll('.count-up');

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        animateCount(el, target);
        countObserver.unobserve(el); // Only animate once
      }
    });
  }, { threshold: 0.5 });

  countEls.forEach(el => countObserver.observe(el));

  function animateCount(el, target) {
    const duration = 2000; // ms
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      el.textContent = current;
      if (step >= steps) {
        el.textContent = target;
        clearInterval(timer);
      }
    }, duration / steps);
  }

  // ====== SMOOTH SCROLL FOR NAV LINKS ======
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        // Close mobile menu
        const navCollapse = document.getElementById('navMenu');
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ====== PARALLAX HERO (optional gentle mouse move) ======
  const hero = document.querySelector('.hero-section');
  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const silhouette = hero.querySelector('.ararat-silhouette');
      if (!silhouette) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 6;
      const y = (e.clientY / window.innerHeight - 0.5) * 4;
      silhouette.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // ====== TIMELINE STAGGER DELAYS ======
  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    item.style.setProperty('--delay', `${i * 0.15}s`);
  });

  console.log('🏛️ URARTU — Добро пожаловать в историю древней цивилизации!');
});
