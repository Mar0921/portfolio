/* ========== Textos (índice 0 = ES, 1 = EN) ========== */
const T = {
  nav_projects: ["Proyectos", "Projects"], nav_tools: ["Herramientas", "Tools"],
  nav_certs: ["Certificados", "Certificates"], nav_contact: ["Contacto", "Contact"],
  role: ["Ingeniera Multimedia", "Multimedia engineer"],
  lead: ["Construyo sitios web, experiencias de realidad aumentada y videojuegos donde el código y el diseño trabajan juntos.",
         "I build websites, augmented reality experiences and games where code and design work together."],
  resume: ["Hoja de vida", "Resume"], hola: ["¡hola!", "hi!"],
  latest_t: ["Lo último", "Latest"],
  projects_t: ["Proyectos", "Projects"],
  projects_s: ["Sitios web, experiencias XR y proyectos de hackatón. Abre cualquiera para ver su descripción y su código.",
               "Websites, XR experiences and hackathon projects. Open any of them for its description and code."],
  f_all: ["Todos", "All"], f_web: ["Web", "Web"], f_xr: ["Juegos y AR", "Games & AR"], f_hack: ["Hackatones", "Hackathons"],
  tools_t: ["Herramientas", "Tools"], certs_t: ["Licencias y certificaciones", "Licenses & certifications"],
  verify: ["Verificar", "Verify"], pdf: ["Ver PDF", "View PDF"], cid: ["ID credencial:", "Credential ID:"],
  about_t: ["Sobre mí", "About me"],
  about_1: ["Ingeniera Multimedia apasionada por la tecnología.", "Multimedia engineer passionate about technology."],
  about_2: ["Tengo experiencia en desarrollo web y diseño. Me gusta crear soluciones digitales que combinen funcionalidad y estética, desde una tienda en línea hasta una experiencia de realidad aumentada.",
            "I have experience in web development and design. I enjoy creating digital solutions that combine functionality and aesthetics, from an online store to an augmented reality experience."],
  contact_t: ["¿Hablamos?", "Let's talk"],
  contact_s: ["Cuéntame qué tienes en mente. Copia mi correo o escríbeme aquí y se abrirá tu cliente de correo con el mensaje listo.",
              "Tell me what you have in mind. Copy my email or write here and your email client will open with the message ready."],
  copy: ["Copiar", "Copy"], copied: ["¡Copiado!", "Copied!"],
  ticker: ["¡Hablemos! ★ Cuéntame tu idea ★ ", "Let's talk! ★ Tell me your idea ★ "],
  f_name: ["Tu nombre", "Your name"], f_email: ["Tu correo", "Your email"], f_msg: ["Tu mensaje", "Your message"],
  send: ["Enviar mensaje", "Send message"],
  view_project: ["Ver proyecto", "View project"], view_code: ["Ver código", "View code"], view_code2: ["Código (C#)", "Code (C#)"],
};

/* ========== Proyectos (incluye los repositorios de GitHub, sin tutoriales ni prácticas) ========== */
// cat: web | xr | hack · dt: última actualización del repo · gh: repo en github.com/Mar0921
const PROJECTS = [
  { id: "bosque", cat: "web", dt: "2026-11-16", t: ["Recetario del Bosque", "Forest Recipe Book"],
    d: ["Recetario web del proyecto Bosque", "Web recipe book for the Forest project"],
    det: ["Aplicación web de recetario del proyecto Bosque, desarrollada en TypeScript: reúne recetas y las presenta de forma clara y fácil de consultar.",
          "Web recipe book app for the Forest project, built with TypeScript: it gathers recipes and presents them in a clear, easy-to-browse way."],
    tech: ["TypeScript", "Web", "Frontend"], gh: "recetario-bosque" },
  { id: "museo", cat: "xr", dt: "2026-11-15", t: ["Museo Ancestral · Visor Ancestral", "Museo Ancestral · Visor Ancestral"],
    d: ["Experiencia transmedia con realidad aumentada", "Transmedia experience with augmented reality"],
    det: ["Experiencia multimedia transmedia que acerca el patrimonio ancestral al público mediante realidad aumentada. El visor permite explorar piezas y relatos del museo desde el celular, combinando contenido 3D, audio e interacción.",
          "Transmedia multimedia experience that brings ancestral heritage to the public through augmented reality. The viewer lets people explore the museum's pieces and stories from their phone, combining 3D content, audio and interaction."],
    tech: ["Unity", "C#", "AR"], gh: "RA---Museo-Ancestral" },
  { id: "logired", cat: "web", dt: "2026-11-09", t: ["LogiRed · Grupo 2", "LogiRed · Group 2"],
    d: ["Proyecto del curso LogiRed", "LogiRed course project"],
    det: ["Proyecto del grupo 2 (diurno) de LogiRed, desarrollado en JavaScript.",
          "LogiRed project for group 2 (daytime), built with JavaScript."],
    tech: ["JavaScript", "Web"], gh: "logired-diurno-g2" },
  { id: "dentcore", cat: "web", dt: "2026-11-02", t: ["DentCore", "DentCore"],
    d: ["Plataforma web para clínica dental", "Web platform for a dental clinic"],
    det: ["Sitio de DentCore enfocado en la presencia digital de una clínica dental: presenta sus servicios, el equipo y los canales para agendar, con un diseño limpio y adaptable a celulares.",
          "DentCore website focused on a dental clinic's digital presence: it presents services, team and ways to book, with a clean, mobile-friendly design."],
    tech: ["TypeScript", "Web", "Frontend"], link: "https://dent-core-rho.vercel.app/", gh: "DentCore", img: "img/dentcore.png" },
  { id: "castrillon", cat: "web", dt: "2026-11-02", t: ["Portafolio J. Castrillón", "J. Castrillón Portfolio"],
    d: ["Portafolio de cineasta, director y guionista", "Portfolio for a filmmaker, director and screenwriter"],
    det: ["Portafolio creativo de Juan Castrillón, cineasta, director y guionista, y estudiante de Cine y Comunicación Audiovisual. Presenta sus habilidades, proyectos y cortometrajes (dirección, guion, fotografía, edición, sonido y producción), una sección de guiones descargables y canales de contacto para colaboración.",
          "Creative web portfolio for Juan Castrillón, filmmaker, director and screenwriter, and Film and Audiovisual Communication student. Showcases his skills, film projects and short films (direction, writing, cinematography, editing, sound and production), a section of downloadable scripts, and contact channels for collaboration."],
    tech: ["TypeScript", "Web", "Frontend"], link: "https://juan-portafolio-six.vercel.app/", gh: "juan_portafolio", img: "img/portafolio.png" },
  { id: "recuerdos", cat: "xr", cats: ["web", "xr"], dt: "2026-11-02", t: ["La Casa de los Recuerdos", "The House of Memories"],
    d: ["Sitio web del proyecto La Casa de los Recuerdos", "The House of Memories project website"],
    det: ["Sitio web con el contenido y la experiencia digital dedicados al proyecto La Casa de los Recuerdos. El repositorio en C# reúne el código complementario del proyecto.",
          "Website with the content and digital experience dedicated to The House of Memories project. The C# repository holds the project's complementary code."],
    tech: ["TypeScript", "C#", "Web"], link: "https://lcdlr-web.vercel.app/", gh: "LCDLR_web", gh2: "Casa_de_los_recuerdos", img: "img/lcdlr.png" },
  { id: "ceramico", cat: "web", dt: "2026-11-02", t: ["Arte Cerámico", "Arte Cerámico"],
    d: ["Sitio web de arte y cerámica", "Art and ceramics website"],
    det: ["Página para exhibir y difundir piezas y propuestas de arte cerámico, con una galería visual que pone la obra en primer plano.",
          "Website to showcase and promote ceramic art pieces and proposals, with a visual gallery that puts the work first."],
    tech: ["TypeScript", "Web", "Frontend"], link: "https://arte-ceramico.vercel.app/", gh: "ArteCeramico", img: "img/arteceramico.png" },
  { id: "dian", cat: "web", dt: "2026-06-23", t: ["El Reto de la Integridad DIAN", "DIAN Integrity Challenge"],
    d: ["Sitio de la iniciativa de integridad DIAN", "DIAN integrity initiative website"],
    det: ["Sitio web desarrollado para la iniciativa El Reto de la Integridad DIAN, que presenta el reto y su contenido de forma clara y accesible.",
          "Website developed for the DIAN Integrity Challenge initiative, presenting the challenge and its content clearly and accessibly."],
    tech: ["TypeScript", "Web", "Frontend"], link: "https://dian-xi.vercel.app/", gh: "dian", img: "img/integridad.png" },
  { id: "purple", cat: "hack", dt: "2026-03-08", t: ["Purple Match", "Purple Match"],
    d: ["Proyecto del hackatón She Ships", "She Ships hackathon project"],
    det: ["Aplicación web interactiva creada durante el hackatón She Ships y publicada en línea, pensada para ofrecer una experiencia dinámica al usuario.",
          "Interactive web application built during the She Ships hackathon and published online, designed to offer a dynamic user experience."],
    tech: ["TypeScript", "Web", "Hackathon"], link: "https://she-ship.onrender.com/", gh: "she_ship", img: "img/purplematch.png" },
  { id: "tripwise", cat: "web", dt: "2026-02-03", t: ["Tripwise", "Tripwise"],
    d: ["Aplicación web para planear viajes", "Web app for planning trips"],
    det: ["Aplicación web para planear viajes, desarrollada en TypeScript.",
          "Web app for planning trips, built with TypeScript."],
    tech: ["TypeScript", "Web", "Frontend"], link: "https://tripwise-f89q.onrender.com/", gh: "tripwise", img: "img/tripwise.png" },
  { id: "yuno", cat: "hack", dt: "2025-12-14", t: ["Yuno NextWave Hackathon", "Yuno NextWave Hackathon"],
    d: ["Proyecto para el hackatón de Yuno", "Yuno hackathon project"],
    det: ["Proyecto desarrollado durante el Yuno NextWave Hackathon (agosto de 2026), con una solución web construida en equipo y en poco tiempo.",
          "Project developed during the Yuno NextWave Hackathon (August 2026): a web solution built as a team under tight time constraints."],
    tech: ["TypeScript", "Hackathon"], link: "https://maizena-nextwave-frontend.onrender.com/", gh: "yuno_hackaton", img: "img/ari.png" },
  { id: "royalpet", cat: "xr", dt: "2025-09-20", t: ["Royal Pet", "Royal Pet"],
    d: ["Videojuego de estrategia de marketing", "Marketing strategy video game"],
    det: ["Videojuego de estrategia desarrollado en Unity para dispositivos móviles, enfocado en el marketing de alimentos premium para mascotas. Implementa mecánicas de juego adictivas con elementos competitivos multijugador, gráficos 3D detallados creados en Blender y una interfaz de usuario intuitiva diseñada en Photoshop.",
          "Strategy video game developed in Unity for mobile devices, focused on premium pet food marketing. Implements addictive gameplay mechanics with competitive multiplayer elements, detailed 3D graphics created in Blender, and an intuitive user interface designed in Photoshop."],
    tech: ["Unity", "C#", "Blender"], img: "img/royalpet.png", gh: "Royalpet" },
  { id: "organizador", cat: "web", dt: "2025-09-19", t: ["Organizador Estudiantil", "Student Organizer"],
    d: ["Aplicación de gestión de tareas", "Task management application"],
    det: ["Plataforma web completa para estudiantes que combina organización de tareas con herramientas académicas avanzadas. Incluye un sistema de gestión de tareas con recordatorios, una calculadora de promedios ponderados, integración nativa con Spotify para reproducir música mientras se estudia, y sincronización bidireccional con Google Calendar para mantener el calendario académico actualizado automáticamente.",
          "Comprehensive web platform for students combining task organization with advanced academic tools. Includes a task management system with reminders, a weighted average calculator, native Spotify integration to play music while studying, and bidirectional sync with Google Calendar to keep the academic calendar automatically updated."],
    tech: ["TypeScript", "Spotify", "Google Calendar"], img: "img/Organizador.png",
    link: "https://mar0921.github.io/Organizador_Estudiantil/", gh: "Organizador_Estudiantil" },
  { id: "cali", cat: "web", dt: "2025-09-19", t: ["Planeador turístico Cali", "Cali Tourism Planner"],
    d: ["Página informativa de sitios turísticos de Cali", "Informative page of tourist sites in Cali"],
    det: ["Sitio web informativo dedicado a los atractivos turísticos de Cali, Colombia. Presenta una interfaz intuitiva con mapas interactivos, descripciones detalladas de cada lugar y una integración completa con la API de YouTube para reproducir videos promocionales y guías turísticas oficiales de cada destino.",
          "Informational website dedicated to the tourist attractions of Cali, Colombia. Features an intuitive interface with interactive maps, detailed descriptions of each place, and full integration with the YouTube API to play promotional videos and official tourist guides for each destination."],
    tech: ["TypeScript", "Maps", "YouTube API"], img: "img/cali-turismo.png",
    link: "https://mar0921.github.io/Cali_Tourism/", gh: "Cali_Tourism" },
  { id: "carta", cat: "xr", t: ["Carta de Presentación AR", "AR Presentation Letter"],
    d: ["Tarjeta de presentación en realidad aumentada", "Augmented reality business card"],
    det: ["Aplicación de realidad aumentada desarrollada en Unity para tarjetas de presentación interactivas. Utiliza reconocimiento de imágenes para activar contenido 3D superpuesto, permitiendo a los usuarios explorar información profesional de manera innovadora mediante interacciones táctiles y visuales.",
          "Augmented reality application developed in Unity for interactive business cards. Uses image recognition to activate overlaid 3D content, allowing users to explore professional information in an innovative way through touch and visual interactions."],
    tech: ["Unity", "C#", "Photoshop"], img: "img/cp.png", video: "recursos/Carta-presentación.mp4" },
  { id: "heden", cat: "web", t: ["Heden", "Heden"],
    d: ["Tienda de maquillaje con WooCommerce", "Makeup store built with WooCommerce"],
    det: ["E-commerce completo desarrollado con WordPress y WooCommerce para una tienda de cosméticos y maquillaje. Incluye catálogo de productos con imágenes de alta calidad, carrito de compras, pasarelas de pago, inventario en tiempo real y un panel de administración intuitivo para la propietaria.",
          "Complete e-commerce built with WordPress and WooCommerce for a cosmetics and makeup store. Includes a high-quality product catalog, shopping cart, payment gateways, real-time inventory and an intuitive admin panel for the owner."],
    tech: ["WordPress", "WooCommerce", "PHP"], img: "img/heden.png", video: "img/heden.mp4" },
];
PROJECTS.sort((a, b) => (b.dt || "").localeCompare(a.dt || ""));

const SKILLS = [
  [["Diseño y creatividad", "Design & creativity"], ["Photoshop", "Illustrator", "InDesign", "After Effects", "Figma", "Adobe XD", "Blender"]],
  [["Programación", "Programming"], ["JavaScript", "TypeScript", "React", "Python", "Java", "C#", "R", "Unity"]],
  [["Bases de datos", "Databases"], ["MongoDB", "MySQL", "Supabase", "Oracle", "PostgreSQL"]],
  [["Herramientas", "Tools"], ["Git", "VS Code", "Node.js", "WordPress", "WooCommerce", "XAMPP", "Linux", "Ubuntu", "Vercel", "Render"]],
];

const SK = "http://verify.skilljar.com/c/";
const CERTS = [
  { t: "Yuno NextWave Hackaton", org: "Yuno", date: "2026-08" },
  { t: ["Certificado EF SET Inglés 71/100 (C2 Proficiente)", "EF SET English Certificate 71/100 (C2 Proficient)"], org: "EF SET", date: "2026-07" },
  { t: "United Hacks V7 Participant", org: "Hack United", date: "2026-07", id: "2cc4c364-af1f-4cef-9c53-590ea40ef1f1" },
  { t: "Google Cloud Computing Foundations Certificate", org: "Google", date: "2026-04" },
  { t: "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud", org: "Google", date: "2026-04", id: "23471013" },
  { t: "Networking and Security in Google Cloud", org: "Google", date: "2026-04", id: "23412394" },
  { t: "Google Cloud Computing Foundations: Infrastructure in Google Cloud", org: "Google", date: "2026-03", id: "23334233" },
  { t: "Google Cloud Computing Foundations: Cloud Computing Fundamentals", org: "Google", date: "2026-03", id: "23281030" },
  { t: "Certificate of completion: Claude 101", org: "Anthropic", date: "2026-03", id: "2iigt8s863ph", v: SK + "2iigt8s863ph", pdf: "recursos/101.pdf" },
  { t: "She Ships Hackathon — Participant Certificate", org: "She Ships", date: "2026-03", id: "2c984c818d1b4ed09335fb300c5a1def", v: "https://app.sheships.org/c/baymax/2c984c818d1b4ed09335fb300c5a1def", pdf: "recursos/sheships.pdf" },
  { t: "Introduction to Model Context Protocol", org: "Anthropic", date: "2026-02", id: "zqz32zo6z2bt", v: SK + "zqz32zo6z2bt", pdf: "recursos/ITMP.pdf" },
  { t: "Claude Code in Action", org: "Anthropic", date: "2026-01", id: "4fr5esbynuwq", v: SK + "4fr5esbynuwq", pdf: "recursos/ClaudeCode.pdf" },
];

/* ========== Utilidades ========== */
let lang = 0, cat = "all";
const $ = (s, r = document) => r.querySelector(s);
const t = (k) => T[k][lang];
const L = (v) => (Array.isArray(v) ? v[lang] : v);
const loc = () => (lang ? "en" : "es");
const GH = "https://github.com/Mar0921/";
const fmt = (d, o) => new Date(d + (d.length === 7 ? "-15" : "") + "T12:00:00").toLocaleDateString(loc(), o);
const initials = (s) => s.replace(/[^\p{L}\s]/gu, "").split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("");
const thumb = (p) => p.img
  ? `<div class="thumb img c-${p.cat}" style="--img:url('${p.img}')"></div>`
  : `<div class="thumb c-${p.cat}">${initials(L(p.t))}</div>`;

/* ========== Render ========== */
function renderStatic() {
  document.documentElement.lang = loc();
  $("#lang-toggle").textContent = lang ? "ES" : "EN";
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
}

function renderLatest() {
  $("#latest").innerHTML = PROJECTS.filter((p) => p.dt).slice(0, 5).map((p) => `
    <li><button data-id="${p.id}"><b><span class="star-bullet" aria-hidden="true">★</span> ${L(p.t)}</b><span>${L(p.d)}</span>
    <span class="dt">${fmt(p.dt, { day: "numeric", month: "short", year: "numeric" })}</span></button></li>`).join("");
}

function renderFilters() {
  const f = [["all", "f_all"], ["web", "f_web"], ["xr", "f_xr"], ["hack", "f_hack"]];
  $("#filters").innerHTML = f.map(([c, k]) =>
    `<button class="chip${c === cat ? " on" : ""}" data-cat="${c}" aria-pressed="${c === cat}">${t(k)}</button>`).join("");
}

function renderProjects() {
  const list = PROJECTS.filter((p) => cat === "all" || (p.cats ? p.cats.includes(cat) : p.cat === cat));
  $("#projects-grid").innerHTML = list.map((p, i) => `
    <button class="card" data-id="${p.id}" style="animation-delay:${i * 45}ms">${thumb(p)}
      <div class="card-b"><h3>${L(p.t)}</h3><p>${L(p.d)}</p>
      <div class="tags">${p.tech.slice(0, 3).map((x) => `<span>${x}</span>`).join("")}</div></div>
    </button>`).join("");
}

function renderSkills() {
  $("#skills-grid").innerHTML = SKILLS.map(([title, items]) =>
    `<div><h3>${title[lang]}</h3><ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul></div>`).join("");
}

function renderCerts() {
  $("#certs-grid").innerHTML = CERTS.map((c) => `
    <article class="cert"><h3>${L(c.t)}</h3>
      <span class="org">${c.org} · ${fmt(c.date, { month: "short", year: "numeric" })}</span>
      ${c.id ? `<span class="cid">${t("cid")} ${c.id}</span>` : ""}
      ${c.v ? `<div class="acts"><a href="${c.v}" target="_blank" rel="noopener">${t("verify")}</a><a href="${c.pdf}" target="_blank" rel="noopener">${t("pdf")}</a></div>` : ""}
    </article>`).join("");
}

function renderContact() {
  $("#copy-label").textContent = t("copy");
  $("#tick").innerHTML = `<span>${t("ticker")}</span>`.repeat(12);
}

function renderAll() {
  renderStatic(); renderContact(); renderLatest(); renderFilters(); renderProjects(); renderSkills(); renderCerts();
  const f = $("#contact-form");
  f.name.placeholder = lang ? "Your name" : "Escribe tu nombre";
  f.email.placeholder = lang ? "you@email.com" : "tucorreo@email.com";
  f.message.placeholder = lang ? "Write your message here" : "Escribe tu mensaje aquí";
}

/* ========== Detalles: nombre con letras, tema, foto ========== */
$("#name").innerHTML = "Mariana Parra".split(" ")
  .map((w) => `<span class="w">${[...w].map((c) => `<span class="l" aria-hidden="true">${c}</span>`).join("")}</span>`).join("");

const setMode = (m) => {
  document.documentElement.dataset.theme = m;
  $("#mode").textContent = m === "dark" ? "☀ Claro" : "☾ Oscuro";
  try { localStorage.setItem("theme", m); } catch (e) {}
};
$("#mode").addEventListener("click", () => setMode(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
setMode(document.documentElement.dataset.theme);

const photo = $("#photo"), img = $("img", photo);
const noPhoto = () => { img.remove(); photo.classList.add("nofoto"); };
img.addEventListener("error", noPhoto);
if (img.complete && img.naturalWidth === 0) noPhoto();

/* ========== Modal ========== */
const modal = $("#modal");
function openModal(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  $("#m-title").textContent = L(p.t);
  $("#m-desc").textContent = L(p.det);
  $("#m-tags").innerHTML = p.tech.map((x) => `<span>${x}</span>`).join("");
  $("#m-media").innerHTML = p.video
    ? `<video controls preload="metadata" poster="${p.img || ""}"><source src="${p.video}" type="video/mp4"></video>`
    : p.img ? `<img src="${p.img}" alt="${L(p.t)}">` : thumb(p);
  $("#m-btns").innerHTML =
    (p.link ? `<a class="pill pri" href="${p.link}" target="_blank" rel="noopener">${t("view_project")}</a>` : "") +
    (p.gh ? `<a class="pill" href="${GH + p.gh}" target="_blank" rel="noopener">${t("view_code")}</a>` : "") +
    (p.gh2 ? `<a class="pill" href="${GH + p.gh2}" target="_blank" rel="noopener">${t("view_code2")}</a>` : "");
  modal.showModal();
}
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
modal.addEventListener("close", () => ($("#m-media").innerHTML = "")); // detiene el video
$("#m-close").addEventListener("click", () => modal.close());

/* ========== Eventos ========== */
const open = (e) => { const c = e.target.closest("[data-id]"); if (c) openModal(c.dataset.id); };
$("#projects-grid").addEventListener("click", open);
$("#latest").addEventListener("click", open);
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest(".chip"); if (!b) return;
  cat = b.dataset.cat; renderFilters(); renderProjects();
});
$("#lang-toggle").addEventListener("click", () => { lang = 1 - lang; renderAll(); });

$("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target, name = f.name.value, email = f.email.value, msg = f.message.value;
  const subject = encodeURIComponent(`Contacto desde Portfolio - ${name}`);
  const body = encodeURIComponent(`Hola Mariana,\n\nMi nombre es ${name} y me gustaría ponerme en contacto contigo.\n\n${msg}\n\nSaludos,\n${name}\n${email}`);
  window.location.href = `mailto:mar0921p@gmail.com?subject=${subject}&body=${body}`;
  f.reset();
});

$("#copy-mail").addEventListener("click", async (e) => {
  const b = e.currentTarget;
  try { await navigator.clipboard.writeText("mar0921p@gmail.com"); }
  catch (err) { window.location.href = "mailto:mar0921p@gmail.com"; return; }
  b.classList.add("ok"); $("#copy-label").textContent = t("copied");
  setTimeout(() => { b.classList.remove("ok"); $("#copy-label").textContent = t("copy"); }, 1600);
});

renderAll();