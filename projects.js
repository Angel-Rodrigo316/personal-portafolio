const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (track) {
  const cards = track.querySelectorAll(".project-card");
  let index = 0;
  const total = cards.length;
  const radius = 320;
  const angleStep = 360 / total;

  function updateCarousel() {
    cards.forEach((card, i) => {
      const angle = angleStep * (i - index);
      card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
      card.style.opacity = i === index ? "1" : "0.6";
    });
  }

  nextBtn?.addEventListener("click", () => {
    index++;
    updateCarousel();
  });

  prevBtn?.addEventListener("click", () => {
    index--;
    updateCarousel();
  });

  updateCarousel();
}
