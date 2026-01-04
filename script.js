const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const cards = document.querySelectorAll(".project-card");
const modalLink = document.getElementById("modalLink");
const themeToggle = document.getElementById("themeToggle");


const projectData = {
  portafolio: {
    title: "Mi página personal",
    description: "Aplicación web estática desarrollada con HTML5, CSS3 y JavaScript, implementando estructura semántica, estilos personalizados y manipulación básica del DOM para mejorar la experiencia del usuario.",
    link: null
  },
  bluefin: {
    title: "Bluefin",
    description: "Aplicación web educativa enfocada en la vida marina y la concientización ambiental.",
    link: "https://bluefinmx.com/"
  },
  beyond: {
    title: "BEYOND",
    description: "Prototipo de aplicación web educativa para niños con síndrome de Down.",
    link: null
  }
};


// Modo oscuro (cargar preferencia)
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.checked = true;
}

// Cambiar tema con toggle
themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});




// Abrir modal
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const projectKey = card.dataset.project;
    if (!projectKey) return;

    const project = projectData[projectKey];

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;

    if (project.link) {
      modalLink.href = project.link;
      modalLink.classList.remove("hidden");
    } else {
      modalLink.classList.add("hidden");
    }

    modal.classList.remove("hidden");
  });
});


// Cerrar modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Cerrar al dar click fuera
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

/* =========================
   CARRUSEL 3D PROYECTOS
========================= */

const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (track) {
  const cards3D = track.querySelectorAll(".project-card");
  let index = 0;
  const total = cards3D.length;
  const radius = 320;
  const angleStep = 360 / total;

  function updateCarousel() {
  cards3D.forEach((card, i) => {
    const angle = angleStep * (i - index);
    card.style.transform = `
      rotateY(${angle}deg)
      translateZ(${radius}px)
    `;

    // índice normalizado solo para destacar
    const normalizedIndex = ((index % total) + total) % total;
    card.style.opacity = i === normalizedIndex ? "1" : "0.6";
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

