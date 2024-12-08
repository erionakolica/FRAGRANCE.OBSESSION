const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
  moveSlide(-1);
});

document.querySelector('.next').addEventListener('click', () => {
  moveSlide(1);
});

function moveSlide(direction) {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  hamburger.addEventListener("click", function () {
      navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
  });

  document.addEventListener("click", function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
          navMenu.style.display = "none";
      }
  });
});
