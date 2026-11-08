const track = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slide');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

let currentIndex = 0;
const totalSlides = slides.length;

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

btnNext.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
});

btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1;
  }
  updateSlider();
});

window.addEventListener('resize', updateSlider);
