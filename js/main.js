/* ============================================================
   AMBALA MARBLE & GRANITE HOUSE — Shared JavaScript
   ============================================================ */

/* ── Navbar ─────────────────────────────────────────────────── */
(function () {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  // Sticky scroll
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile menu on link click
  if (navLinks) {
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // Active page highlight
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ── Animated Counters ──────────────────────────────────────── */
function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const step     = 16;
  const increment= target / (duration / step);
  let current    = 0;
  const timer    = setInterval(() => {
    current += increment;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString('en-IN');
  }, step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter-num[data-target]').forEach(el => {
  counterObserver.observe(el);
});

/* ── Testimonials Carousel ──────────────────────────────────── */
(function () {
  const track  = document.querySelector('.testimonial-track');
  if (!track) return;
  const slides = track.querySelectorAll('.testimonial-slide');
  const dots   = document.querySelectorAll('.carousel-dot');
  let current  = 0;
  let timer;

  function goTo(idx) {
    current = (idx + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() { timer = setInterval(next, 5000); }
  function stopAuto()  { clearInterval(timer); }

  const btnNext = document.querySelector('.carousel-btn.next');
  const btnPrev = document.querySelector('.carousel-btn.prev');
  if (btnNext) btnNext.addEventListener('click', () => { stopAuto(); next(); startAuto(); });
  if (btnPrev) btnPrev.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); });
  });

  goTo(0);
  startAuto();
})();

/* ── Smooth Scroll for # links ──────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Scroll Reveal ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.why-card, .category-card, .value-card, .cert-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});
