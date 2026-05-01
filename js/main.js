// Hero animated grid background
(function initHeroGrid() {
  const hero   = document.querySelector('.hero');
  const grid   = document.getElementById('heroGrid');
  if (!hero || !grid) return;

  const ROWS          = 22;
  const COLS          = 42;
  const SPACING       = 3;
  const DURATION      = 5;
  const COLOR         = '#E94560';
  const OPACITY_MIN   = 0.08;
  const OPACITY_MAX   = 0.55;
  const ANIM_TYPE     = 'pulse';

  grid.style.gridTemplateColumns = `repeat(${COLS}, 1fr)`;
  grid.style.gridTemplateRows    = `repeat(${ROWS}, 1fr)`;
  grid.style.gap                 = `${SPACING}px`;
  grid.style.setProperty('--mouse-glow-opacity', '1');

  const centerRow = Math.floor(ROWS / 2);
  const centerCol = Math.floor(COLS / 2);

  for (let i = 0; i < ROWS * COLS; i++) {
    const cell = document.createElement('div');
    cell.className = 'grid-cell';
    cell.style.backgroundColor = COLOR;
    cell.style.setProperty('--opacity-min', OPACITY_MIN);
    cell.style.setProperty('--opacity-max', OPACITY_MAX);

    const r  = Math.floor(i / COLS);
    const c  = i % COLS;
    let delay;

    if (ANIM_TYPE === 'wave') {
      delay = (r + c) * 0.1;
    } else if (ANIM_TYPE === 'random') {
      delay = Math.random() * DURATION;
    } else {
      const dr = Math.abs(r - centerRow);
      const dc = Math.abs(c - centerCol);
      delay = Math.sqrt(dr * dr + dc * dc) * 0.18;
    }

    cell.style.animation      = `cell-pulse ${DURATION}s infinite alternate`;
    cell.style.animationDelay = `${delay.toFixed(3)}s`;
    grid.appendChild(cell);
  }

  // Mouse glow follow
  window.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    grid.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    grid.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  });
})();

// Glow / spotlight cards
(function initGlowCards() {
  const cards = document.querySelectorAll('[data-glow]:not([data-glow] [data-glow])');
  if (!cards.length) return;
  document.addEventListener('pointermove', (e) => {
    const xp = (e.clientX / window.innerWidth).toFixed(2);
    const yp = (e.clientY / window.innerHeight).toFixed(2);
    cards.forEach(card => {
      card.style.setProperty('--x',  e.clientX.toFixed(2));
      card.style.setProperty('--y',  e.clientY.toFixed(2));
      card.style.setProperty('--xp', xp);
      card.style.setProperty('--yp', yp);
    });
  });
})();

// Gallery4 carousel
(function initGalleryCarousel() {
  document.querySelectorAll('.g4-wrap').forEach(wrap => {
    const section  = wrap.closest('section');
    const slides   = wrap.querySelectorAll('.g4-slide');
    const dots     = section ? section.querySelectorAll('.g4-dot') : [];
    const prevBtn  = section ? section.querySelector('.g4-btn--prev') : null;
    const nextBtn  = section ? section.querySelector('.g4-btn--next') : null;
    if (!slides.length) return;

    const gap      = () => 20;
    const slideW   = () => slides[0].offsetWidth + gap();

    function sync() {
      const sl  = wrap.scrollLeft;
      const max = wrap.scrollWidth - wrap.clientWidth;
      const idx = Math.min(Math.round(sl / slideW()), slides.length - 1);
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
      if (prevBtn) prevBtn.disabled = sl < 4;
      if (nextBtn) nextBtn.disabled = sl > max - 4;
    }

    if (prevBtn) prevBtn.addEventListener('click', () =>
      wrap.scrollBy({ left: -slideW(), behavior: 'smooth' }));
    if (nextBtn) nextBtn.addEventListener('click', () =>
      wrap.scrollBy({ left:  slideW(), behavior: 'smooth' }));
    dots.forEach((dot, i) => dot.addEventListener('click', () =>
      wrap.scrollTo({ left: i * slideW(), behavior: 'smooth' })));

    wrap.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync, { passive: true });
    sync();
  });
})();

// Glow card expand/collapse
(function initGlowCardExpand() {
  const cards = document.querySelectorAll('.glow-card');
  if (!cards.length) return;
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const wasExpanded = card.classList.contains('expanded');
      cards.forEach(c => c.classList.remove('expanded'));
      if (!wasExpanded) card.classList.add('expanded');
    });
  });
})();

// Particle canvas (servicos.html)
(function initParticleCanvas() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx    = canvas.getContext('2d');
  let particles = [];
  let animId;
  const mouse  = { x: null, y: null, radius: 180 };

  class Particle {
    constructor() {
      this.size  = Math.random() * 2 + 1;
      this.x     = Math.random() * canvas.width;
      this.y     = Math.random() * canvas.height;
      this.dx    = (Math.random() * 0.4) - 0.2;
      this.dy    = (Math.random() * 0.4) - 0.2;
      this.color = `rgba(233,69,96,${(Math.random() * 0.4 + 0.5).toFixed(2)})`;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    update() {
      if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
      if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;
      if (mouse.x !== null) {
        const dx = mouse.x - this.x, dy = mouse.y - this.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < mouse.radius + this.size) {
          const f = (mouse.radius - d) / mouse.radius;
          this.x -= (dx / d) * f * 5;
          this.y -= (dy / d) * f * 5;
        }
      }
      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    }
  }

  function init() {
    particles = [];
    const n = (canvas.width * canvas.height) / 9000;
    for (let i = 0; i < n; i++) particles.push(new Particle());
  }

  function connect() {
    const threshold = (canvas.width / 7) * (canvas.height / 7);
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const d2 = dx * dx + dy * dy;
        if (d2 < threshold) {
          const op  = 1 - d2 / 20000;
          const mdx = particles[a].x - (mouse.x || -9999);
          const mdy = particles[a].y - (mouse.y || -9999);
          const md  = Math.sqrt(mdx * mdx + mdy * mdy);
          ctx.strokeStyle = (mouse.x && md < mouse.radius)
            ? `rgba(254,255,212,${(op * 0.55).toFixed(2)})`
            : `rgba(233,69,96,${(op * 0.35).toFixed(2)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    animId = requestAnimationFrame(animate);
    ctx.fillStyle = '#0A0A0F';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => p.update());
    connect();
  }

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  }

  window.addEventListener('resize',    resize);
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseout',  () => { mouse.x = null; mouse.y = null; });

  resize();
  animate();
})();

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Nav shrink on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.style.padding = window.scrollY > 60 ? '12px 0' : '20px 0';
});

// GSAP hero entrance animations
gsap.from('.hero__tag',   { opacity: 0, y: 30, duration: 0.8, delay: 0.2, ease: 'power3.out' });
gsap.from('.hero__title', { opacity: 0, y: 50, duration: 0.9, delay: 0.4, ease: 'power3.out' });
gsap.from('.hero__sub',   { opacity: 0, y: 30, duration: 0.8, delay: 0.6, ease: 'power3.out' });
gsap.from('.hero__ctas',  { opacity: 0, y: 20, duration: 0.7, delay: 0.8, ease: 'power3.out' });
gsap.from('.hero__stat',  { opacity: 0, y: 20, duration: 0.7, delay: 1.0, ease: 'power3.out' });

// AOS scroll animations init
AOS.init({
  duration: 700,
  once: true,
  offset: 80,
  easing: 'ease-out-cubic',
});
