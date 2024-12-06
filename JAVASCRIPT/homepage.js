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
