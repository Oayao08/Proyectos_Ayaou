console.log("Bienvenido al portafolio de Omar.");

const fadeElements = document.querySelectorAll('.fade-in');

const observerOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -60px 0px"
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, observerOptions);

fadeElements.forEach(el => scrollObserver.observe(el));

// --- Esta parte es para animarlo ---
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ---Navbar efecto al subir/bajar pàgina---
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    navbar.style.top = '-100px'; // Ocultar
  } else {
    navbar.style.top = '0'; // Mostrar
  }
  lastScrollY = window.scrollY;
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 3000); // Gif Pagina inicio

