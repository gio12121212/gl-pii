const track = document.getElementById('sliderTrack');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

let currentIndex = 0;
const totalSlides = slides.length;

function getVisible() {
  return parseInt(getComputedStyle(slider).getPropertyValue('--visible')) || 3;
}

function getMaxIndex() {
  return Math.max(0, totalSlides - getVisible());
}

function updateSlider() {
  if (currentIndex > getMaxIndex()) currentIndex = getMaxIndex();
  track.style.transform = `translateX(-${currentIndex * (100 / getVisible())}%)`;
}

btnNext.addEventListener('click', () => {
  currentIndex = currentIndex < getMaxIndex() ? currentIndex + 1 : 0;
  updateSlider();
});

btnPrev.addEventListener('click', () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : getMaxIndex();
  updateSlider();
});

window.addEventListener('resize', updateSlider);