// Project data
const projects = {
  codigo: [


    {
      id: "2",
      title: "Organizador Estudiantil",
      description: "Aplicación de gestión de tareas",
      technologies: ["CSS", "TypeScript", "HTML", "JavaScript"],
      preview: "img/Organizador.png",
      link: "https://mar0921.github.io/Organizador_Estudiantil/",
      github: "https://github.com/Mar0921/Organizador_Estudiantil",
      details:
        "Esta plataforma te permite crear tareas, notas, evaluar promedio, cuenta con una Api de Spotify que permite al usuario reproducir musica mientras hace uso de la pagina, y cuenta con la api de Google Calendar para vincular las acciones del usuario en tiempo real.",
    },

    {
      id: "3",
      title: "Planeador turistico Cali",
      description: "Pagina informativa de sitios turisticos de Cali",
      technologies: ["CSS", "TypeScript", "HTML", "JavaScript"],
      preview: "img/cali-turismo.png",
      link: "https://mar0921.github.io/Cali_Tourism/",
      github: "https://github.com/Mar0921/Cali_Tourism",
      details:
        "Pagina con sitios turisticos de cali, que cuenta con una api de youtube para reproducer videos con informacion general del sitio",
    },

    {
      id: "4",
      title: "Royal Pet",
      description: "Videojuego estrategia de marketing ",
      technologies: ["Unity", "C#", "Blender", "Photoshop"],
      preview: "img/royalpet.png",
      github: "https://github.com/YenMur/JuegoAlimentoPremium",
      details:
        "Royal Pet busca conectar de manera divertida con los amantes de las mascotas. Combina mecánicas simples y dinámicas, pero con un toque competitivo.",
    },
    {
      id: "5",
      title: "Carta de Presentación",
      description: "Experiencia AR carta de presentación",
      technologies: ["Unity", "C#", "Blender", "Photoshop"],
      preview: "recursos/Carta-presentación.mp4",
      github: "",
      details:
        "Se busca brindarle una experiencia inmersiva al usuario, donde este pueda interactuar con los items de la carta al momento de scanearla y asi conocer más detalles sobre la información que se brinda en la misma.",
    },

    {
      id: "6",
      title: "Limpieza Hospital",
      description: "Experiencia RV donde se debe limpiar un hospital",
      technologies: ["Unity", "C#", "Blender"],
      preview: "recursos/Limpieza.mp4",
      github: "https://github.com/Danxsh02/PARCIAL-FINAL-VR",
      details:
        "Esta experiencia busca que el usuario aprenda sobre la clasificación de residuos en una experiencia inmersiva donde debera limpiar un hospital por completo",
    },

            {
      id: "7",
      title: "Zylo",
      description: "Zylo, tu mascota virtual",
      technologies: ["Unity", "C#", "Blender", "illustrator"],
      preview: "recursos/zylo.mp4",
      github: "",
      details:
        "Zylo es una mascota que habita un entorno AR mediante el cual el usuario puede interactuar con el ",
    },

  ],
  diseño: [
    {
      id: "8",
      title: "Wall-E",
      description: "Modelo 3D de Wall-E",
      technologies: ["Blender", "Adobe Substance"],
      preview: "img/walle.png",
      embed: "recursos/walle-video.mp4", // Video en el modal
      details: "Desarrollo completo de modelado, UVS, texturas, renderizado.",
    },

    {
      id: "9",
      title: "Diorama",
      description: "Diorama inspirado en BT21",
      preview: "img/diorama.png",
      technologies: ["Blender"],
      details: "Desarrollo completo de modelado, UVS, texturas, renderizado.",
    },

    {
      id: "10",
      title: "Poster",
      description: "Poster practico Alice in Borderland",
      technologies: ["Photoshop"],
      preview: "img/aliceib.png", // Imagen del póster
      details:
        "Ejercicio practico de rediseño de poster publicitario para la serie Alice in Borderland.",
    },
  ],
};

// DOM elements
const sectionButtons = document.querySelectorAll(".section-btn, .personal-btn");
const projectsSection = document.getElementById("projects-section");
const aboutSection = document.getElementById("about-section");
const contactSection = document.getElementById("contact-section");
const projectsGrid = document.getElementById("projects-grid");
const modal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");

// Social media buttons
const socialButtons = document.querySelectorAll(".social-btn");

// Navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Contact form
const contactForm = document.getElementById("contact-form");

let activeSection = "todos"; // Start with "todos" section active

// Smooth scroll function
function smoothScrollTo(targetId) {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Navigation links functionality
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.dataset.target;
    smoothScrollTo(target);
  });
});

// Social media functionality
function initializeSocialButtons() {
  socialButtons.forEach((button) => {
    const buttonText = button.textContent.trim().toLowerCase();

    button.addEventListener("click", (e) => {
      e.preventDefault();

      switch (buttonText) {
        case "github":
          window.open("https://github.com/Mar0921", "_blank");
          break;
        case "linkedin":
          window.open(
            "https://www.linkedin.com/in/mariana-parra-acosta/",
            "_blank"
          );
          break;
        case "resume":
          window.open(
            "https://www.canva.com/design/DAGGWaFMiDE/8Y1G796lidXWR0dBEzC7KQ/edit?utm_content=DAGGWaFMiDE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            "_blank"
          );
      }
    });
  });
}

// Contact form functionality
function initializeContactForm() {
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");

      // Create mailto link with form data
      const subject = encodeURIComponent(`Contacto desde Portfolio - ${name}`);
      const body = encodeURIComponent(`Hola Mariana,

Mi nombre es ${name} y me gustaría ponerme en contacto contigo.

${message}

Saludos,
${name}
${email}`);

      window.location.href = `mailto:mar0921p@gmail.com?subject=${subject}&body=${body}`;

      // Reset form
      contactForm.reset();

      // Show success message (optional)
      alert("¡Gracias por tu mensaje! Se abrirá tu cliente de correo.");
    });
  }
}

// Section navigation
sectionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const section = button.dataset.section;

    if (activeSection === section) {
      // Close section if already active
      closeAllSections();
      activeSection = null;
    } else {
      // Open new section
      openSection(section);
      activeSection = section;
    }

    updateButtonStates();
  });
});

function openSection(section) {
  closeAllSections();

  if (section === "contacto") {
    contactSection.style.display = "block";
  } else {
    projectsSection.style.display = "block";
    renderProjects(section);
  }
}

function closeAllSections() {
  projectsSection.style.display = "none";
  contactSection.style.display = "none";
}

function updateButtonStates() {
  sectionButtons.forEach((button) => {
    if (button.dataset.section === activeSection) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

function renderProjects(section) {
  let sectionProjects = [];

  if (section === "todos") {
    sectionProjects = [...projects.codigo, ...projects.diseño];
  } else {
    sectionProjects = projects[section] || [];
  }

  projectsGrid.innerHTML = sectionProjects
    .map(
      (project) => `
        <div class="project-card" onclick="openModal('${project.id}', '${
        section === "todos"
          ? projects.codigo.find((p) => p.id === project.id)
            ? "codigo"
            : "diseño"
          : section
      }')">
          <div class="project-image" style="background-image: url('${
            project.preview || ""
          }'); background-size: cover; background-position: center;"></div>
          <div class="project-content">
              <h3 class="project-title">${project.title}</h3>
              <p class="project-description">${project.description}</p>
              <div class="project-technologies">
                  ${project.technologies
                    .slice(0, 3)
                    .map((tech) => `<span class="tech-badge">${tech}</span>`)
                    .join("")}
              </div>
          </div>
        </div>
    `
    )
    .join("");
}

// Modal functionality
function openModal(projectId, section) {
  const project = projects[section].find((p) => p.id === projectId);
  if (!project) return;

  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-description").textContent = project.details;

  // Tecnologías
  document.getElementById("modal-technologies").innerHTML = project.technologies
    .map((tech) => `<span class="tech-badge">${tech}</span>`)
    .join("");

  // Contenido visual (imagen o video)
  const modalImage = document.getElementById("modal-image");
  if (project.embed && project.embed.endsWith(".mp4")) {
    modalImage.innerHTML = `
      <video controls style="width: 100%; max-height: 280px; object-fit: cover; border-radius: 0.5rem;">
        <source src="${project.embed}" type="video/mp4">
        Tu navegador no soporta la reproducción de video.
      </video>
    `;
  } else if (project.preview) {
    modalImage.innerHTML = `
      <img src="${project.preview}" alt="${project.title}" style="width: 100%; max-height: 280px; object-fit: cover; border-radius: 0.5rem;">
    `;
  } else {
    modalImage.innerHTML = "";
  }

  // Botones
  const buttons = [];
  if (project.link) {
    buttons.push(`
      <button class="modal-btn modal-btn-primary" onclick="window.open('${project.link}', '_blank')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15,3 21,3 21,9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        Ver Proyecto
      </button>
    `);
  }
  if (project.github) {
    buttons.push(`
      <button class="modal-btn modal-btn-secondary" onclick="window.open('${project.github}', '_blank')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        Ver Código
      </button>
    `);
  }

  document.getElementById("modal-buttons").innerHTML = buttons.join("");
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

// Event listeners
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    closeModal();
  }
});

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeSocialButtons();
  initializeContactForm();

  // Initialize with "todos" section active and displayed
  openSection("todos");
  updateButtonStates();
});

// Make openModal function global
window.openModal = openModal;




