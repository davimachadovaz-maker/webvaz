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
