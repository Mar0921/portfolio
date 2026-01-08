// Project data
const projects = {
  codigo: [
    {
      id: "2",
      title: { es: "Organizador Estudiantil", en: "Student Organizer" },
      description: { es: "Aplicación de gestión de tareas", en: "Task management application" },
      technologies: ["CSS", "TypeScript", "HTML", "JavaScript"],
      preview: "img/Organizador.png",
      link: "https://mar0921.github.io/Organizador_Estudiantil/",
      github: "https://github.com/Mar0921/Organizador_Estudiantil",
      details: {
        es: "Plataforma web completa para estudiantes que combina organización de tareas con herramientas académicas avanzadas. Incluye un sistema de gestión de tareas con recordatorios, una calculadora de promedios ponderados, integración nativa con Spotify para reproducir música mientras se estudia, y sincronización bidireccional con Google Calendar para mantener el calendario académico actualizado automáticamente.",
        en: "Comprehensive web platform for students combining task organization with advanced academic tools. Includes a task management system with reminders, a weighted average calculator, native Spotify integration to play music while studying, and bidirectional sync with Google Calendar to keep the academic calendar automatically updated."
      },
    },
    {
      id: "3",
      title: { es: "Planeador turistico Cali", en: "Cali Tourism Planner" },
      description: { es: "Pagina informativa de sitios turisticos de Cali", en: "Informative page of tourist sites in Cali" },
      technologies: ["CSS", "TypeScript", "HTML", "JavaScript"],
      preview: "img/cali-turismo.png",
      link: "https://mar0921.github.io/Cali_Tourism/",
      github: "https://github.com/Mar0921/Cali_Tourism",
      details: {
        es: "Sitio web informativo dedicado a los atractivos turísticos de Cali, Colombia. Presenta una interfaz intuitiva con mapas interactivos, descripciones detalladas de cada lugar y una integración completa con la API de YouTube para reproducir videos promocionales y guías turísticas oficiales de cada destino.",
        en: "Informational website dedicated to the tourist attractions of Cali, Colombia. Features an intuitive interface with interactive maps, detailed descriptions of each place, and full integration with the YouTube API to play promotional videos and official tourist guides for each destination."
      },
    },
    {
      id: "4",
      title: { es: "Royal Pet", en: "Royal Pet" },
      description: { es: "Videojuego estrategia de marketing", en: "Marketing strategy video game" },
      technologies: ["Unity", "C#", "Blender", "Photoshop"],
      preview: "img/royalpet.png",
      github: "https://github.com/YenMur/JuegoAlimentoPremium",
      details: {
        es: "Videojuego de estrategia desarrollado en Unity para dispositivos móviles, enfocado en el marketing de alimentos premium para mascotas. Implementa mecánicas de juego adictivas con elementos competitivos multijugador, gráficos 3D detallados creados en Blender y una interfaz de usuario intuitiva diseñada en Photoshop.",
        en: "Strategy video game developed in Unity for mobile devices, focused on premium pet food marketing. Implements addictive gameplay mechanics with competitive multiplayer elements, detailed 3D graphics created in Blender, and an intuitive user interface designed in Photoshop."
      },
    },
    {
      id: "5",
      title: { es: "Carta de Presentación", en: "Presentation Letter" },
      description: { es: "Experiencia AR carta de presentación", en: "AR presentation letter experience" },
      technologies: ["Unity", "C#", "Blender", "Photoshop"],
      preview: "img/cp.png",
      embed: "recursos/Carta-presentación.mp4",
      github: "",
      details: {
        es: "Aplicación de realidad aumentada desarrollada en Unity para tarjetas de presentación interactivas. Utiliza reconocimiento de imágenes para activar contenido 3D superpuesto, permitiendo a los usuarios explorar información profesional de manera innovadora mediante interacciones táctiles y visuales.",
        en: "Augmented reality application developed in Unity for interactive business cards. Uses image recognition to activate overlaid 3D content, allowing users to explore professional information in an innovative way through touch and visual interactions."
      },
    },
    {
      id: "6",
      title: { es: "Limpieza Hospital", en: "Hospital Cleaning" },
      description: { es: "Experiencia RV donde se debe limpiar un hospital", en: "VR experience where you have to clean a hospital" },
      technologies: ["Unity", "C#", "Blender"],
      preview: "recursos/Limpieza.mp4",
      github: "https://github.com/Danxsh02/PARCIAL-FINAL-VR",
      details: {
        es: "Experiencia de realidad virtual educativa desarrollada en Unity para enseñar clasificación de residuos hospitalarios. Los usuarios navegan por un entorno 3D de hospital interactuando con diferentes tipos de residuos, aprendiendo protocolos de manejo seguro mientras completan objetivos de limpieza en un escenario gamificado.",
        en: "Educational virtual reality experience developed in Unity to teach hospital waste classification. Users navigate a 3D hospital environment interacting with different types of waste, learning safe handling protocols while completing cleaning objectives in a gamified scenario."
      },
    },
    {
      id: "7",
      title: { es: "Zylo", en: "Zylo" },
      description: { es: "Zylo, tu mascota virtual", en: "Zylo, your virtual pet" },
      technologies: ["Unity", "C#", "Blender", "illustrator"],
      preview: "recursos/zylo.mp4",
      github: "",
      details: {
        es: "Aplicación móvil de realidad aumentada que presenta una mascota virtual interactiva. Desarrollada en Unity con gráficos 3D modelados en Blender, permite a los usuarios alimentar, jugar y cuidar de su mascota digital en el mundo real mediante el reconocimiento de superficies y gestos táctiles.",
        en: "Augmented reality mobile application featuring an interactive virtual pet. Developed in Unity with 3D graphics modeled in Blender, it allows users to feed, play with, and care for their digital pet in the real world through surface recognition and touch gestures."
      },
    },
    {
      id: "9",
      title: { es: "Heden", en: "Heden" },
      description: { es: "Tienda de maquillaje desarrollada con WooCommerce y WordPress", en: "Makeup store developed with WooCommerce and WordPress" },
      technologies: ["WordPress", "WooCommerce", "PHP", "CSS"],
      preview: "",
      link: "",
      github: "",
      details: {
        es: "E-commerce completo desarrollado con WordPress y WooCommerce para una tienda especializada en cosméticos y maquillaje. Incluye catálogo de productos con imágenes de alta calidad, sistema de carrito de compras avanzado, integración de pasarelas de pago, gestión de inventario en tiempo real y panel de administración intuitivo para el propietario.",
        en: "Complete e-commerce developed with WordPress and WooCommerce for a store specialized in cosmetics and makeup. Includes high-quality product catalog with images, advanced shopping cart system, payment gateway integration, real-time inventory management, and intuitive admin panel for the owner."
      },
    },
  ],
  diseño: [
    {
      id: "8",
      title: { es: "Wall-E", en: "Wall-E" },
      description: { es: "Modelo 3D de Wall-E", en: "Wall-E 3D model" },
      technologies: ["Blender", "Adobe Substance"],
      preview: "img/walle.png",
      embed: "recursos/walle-video.mp4",
      details: {
        es: "Escena 3D inspirada en los personajes de BT21, el universo de Line Friends. Creada en Blender con atención meticulosa a los detalles característicos de cada personaje, incluyendo modelado orgánico, texturizado personalizado y composición de iluminación para resaltar la personalidad única de cada elemento en la escena.",
        en: "3D scene inspired by BT21 characters, the Line Friends universe. Created in Blender with meticulous attention to the characteristic details of each character, including organic modeling, custom texturing, and lighting composition to highlight the unique personality of each element in the scene."
      },
    },
    {
      id: "11",
      title: { es: "Diorama", en: "Diorama" },
      description: { es: "Diorama inspirado en BT21", en: "Diorama inspired by BT21" },
      preview: "img/diorama.png",
      technologies: ["Blender"],
      details: {
        es: "Modelo 3D hiperrealista del robot Wall-E de Pixar, creado completamente en Blender. Incluye modelado poligonal detallado, mapeo UV preciso, texturizado fotorealista utilizando Adobe Substance Painter, iluminación avanzada y renderizado final con Cycles para lograr un resultado cinematográfico.",
        en: "Hyperrealistic 3D model of Pixar's robot Wall-E, created entirely in Blender. Includes detailed polygonal modeling, precise UV mapping, photorealistic texturing using Adobe Substance Painter, advanced lighting, and final rendering with Cycles to achieve a cinematic result."
      },
    },
    {
      id: "12",
      title: { es: "Poster", en: "Poster" },
      description: { es: "Poster practico Alice in Borderland", en: "Practical poster Alice in Borderland" },
      technologies: ["Photoshop"],
      preview: "img/aliceib.png",
      details: {
        es: "Rediseño creativo del póster promocional para la serie de Netflix 'Alice in Borderland'. Utilizando técnicas avanzadas de Photoshop para manipulación de imágenes, composición tipográfica innovadora y efectos visuales que capturan la esencia oscura y psicológica de la serie, manteniendo la identidad visual reconocible mientras se añade un toque personal y moderno.",
        en: "Creative redesign of the promotional poster for the Netflix series 'Alice in Borderland'. Using advanced Photoshop techniques for image manipulation, innovative typographic composition, and visual effects that capture the dark and psychological essence of the series, maintaining the recognizable visual identity while adding a personal and modern touch."
      },
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
               <h3 class="project-title">${project.title[currentLang]}</h3>
               <p class="project-description">${project.description[currentLang]}</p>
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

  document.getElementById("modal-title").textContent = project.title[currentLang];
  document.getElementById("modal-description").textContent = project.details[currentLang];

  // Tecnologías
  document.getElementById("modal-technologies").innerHTML = project.technologies
    .map((tech) => `<span class="tech-badge">${tech}</span>`)
    .join("");

  // Contenido visual (imagen o video)
  const modalImage = document.getElementById("modal-image");
  const mediaSrc = project.embed || project.preview;
  if (mediaSrc && mediaSrc.endsWith(".mp4")) {
    modalImage.innerHTML = `
      <video controls style="width: 100%; height: auto; max-height: 400px; border-radius: 0.5rem;">
        <source src="${mediaSrc}" type="video/mp4">
        Tu navegador no soporta la reproducción de video.
      </video>
    `;
  } else if (project.preview) {
    modalImage.innerHTML = `
      <img src="${project.preview}" alt="${project.title[currentLang]}" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 0.5rem;">
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
        <span data-lang="es">Ver Proyecto</span><span data-lang="en" style="display: none;">View Project</span>
      </button>
    `);
  }
  if (project.github) {
    buttons.push(`
      <button class="modal-btn modal-btn-secondary" onclick="window.open('${project.github}', '_blank')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        <span data-lang="es">Ver Código</span><span data-lang="en" style="display: none;">View Code</span>
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

// Language toggle functionality
let currentLang = 'es';

function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  const langToggle = document.getElementById('lang-toggle');
  const langText = document.getElementById('lang-text');

  if (currentLang === 'es') {
    langText.textContent = 'EN';
  } else {
    langText.textContent = 'ES';
  }

  // Hide/show language-specific elements
  document.querySelectorAll('[data-lang]').forEach(element => {
    if (element.getAttribute('data-lang') === currentLang) {
      element.style.display = '';
    } else {
      element.style.display = 'none';
    }
  });

  // Re-render projects if needed
  if (activeSection) {
    renderProjects(activeSection);
  }
}

// Initialize language toggle
function initializeLanguageToggle() {
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeSocialButtons();
  initializeContactForm();
  initializeLanguageToggle();

  // Initialize with "todos" section active and displayed
  openSection("todos");
  updateButtonStates();
});

// Make openModal function global
window.openModal = openModal;
