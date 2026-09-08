import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Header state ---------- */
const header = document.querySelector<HTMLElement>('[data-header]');
const hero = document.querySelector<HTMLElement>('[data-hero]');

const updateHeader = () => {
  if (!header) return;
  const threshold = hero ? hero.offsetHeight - 120 : 80;
  header.classList.toggle('is-solid', window.scrollY > threshold);
  header.classList.toggle('is-scrolled', window.scrollY > 24);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', updateHeader);

/* ---------- Hero slideshow ---------- */
const slides = Array.from(document.querySelectorAll<HTMLElement>('[data-hero-slide]'));
const dots = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-hero-dot]'));
let current = 0;
let timer: number | undefined;

const showSlide = (index: number) => {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
  dots.forEach((dot, i) => {
    dot.classList.toggle('is-active', i === current);
    if (i === current) {
      dot.setAttribute('aria-current', 'true');
    } else {
      dot.removeAttribute('aria-current');
    }
  });
};

const startSlideshow = () => {
  if (reduceMotion || slides.length < 2) return;
  window.clearInterval(timer);
  timer = window.setInterval(() => showSlide(current + 1), 6000);
};

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    showSlide(Number(dot.dataset.heroDot));
    startSlideshow();
  });
});

startSlideshow();

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    window.clearInterval(timer);
  } else {
    startSlideshow();
  }
});

/* ---------- Gallery scroller ---------- */
const track = document.querySelector<HTMLElement>('[data-gallery-track]');
const prev = document.querySelector<HTMLButtonElement>('[data-gallery-prev]');
const next = document.querySelector<HTMLButtonElement>('[data-gallery-next]');

const scrollGallery = (direction: 1 | -1) => {
  if (!track) return;
  const item = track.querySelector<HTMLElement>('.gallery__item');
  const step = item ? item.offsetWidth + 24 : track.clientWidth * 0.6;
  track.scrollBy({ left: step * direction, behavior: reduceMotion ? 'auto' : 'smooth' });
};

prev?.addEventListener('click', () => scrollGallery(-1));
next?.addEventListener('click', () => scrollGallery(1));

/* ---------- Smooth scroll & reveal ---------- */
if (!reduceMotion) {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.1,
    prevent: (node) => Boolean((node as HTMLElement).closest?.('[data-lenis-prevent]')),
  });

  lenis.on('scroll', () => {
    ScrollTrigger.update();
    updateHeader();
  });
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  new MutationObserver(() => {
    if (document.documentElement.classList.contains('menu-open')) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector<HTMLElement>(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: id === '#top' ? 0 : -72 });
      history.replaceState(null, '', id);
    });
  });

  gsap.from('[data-hero-copy]', { y: 30, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 });

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
    gsap.from(element, {
      y: 36,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
        once: true,
      },
    });
  });
}
