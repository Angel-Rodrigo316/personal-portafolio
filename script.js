/* =========================
   DARK MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  // Cargar preferencia guardada
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.checked = true;
  }

  // Cambiar tema
  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
}

/* =========================
   MODAL DE PROYECTOS
========================= */

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalLink = document.getElementById("modalLink");

const projectData = {
  portafolio: {
    title: "Mi página personal",
    description:
      "Aplicación web estática desarrollada con HTML5, CSS3 y JavaScript, implementando estructura semántica, estilos personalizados y manipulación básica del DOM.",
    link: null,
  },
  bluefin: {
    title: "Bluefin",
    description:
      "Aplicación web educativa enfocada en la vida marina y la concientización ambiental.",
    link: "https://bluefinmx.com/",
  },
  beyond: {
    title: "BEYOND",
    description:
      "Prototipo de aplicación web educativa para niños con síndrome de Down.",
    link: null,
  },
};

// Abrir modal
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    if (!modal) return;

    const projectKey = card.dataset.project;
    const project = projectData[projectKey];
    if (!project) return;

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
if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}

// Cerrar al dar click fuera
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
}
