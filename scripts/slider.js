const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const totalImages = images.length;
let currentIndex = 0;

function moveSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(moveSlide, 7000);
