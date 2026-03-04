window.addEventListener("DOMContentLoaded", () => {

  document.body.classList.remove("preload");
  document.body.classList.add("loaded");

  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function changeSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  setInterval(changeSlide, 5000);

});
// ===== MOBILE NAV TOGGLE =====

const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
