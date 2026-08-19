/**
 * Jose Alvarez - Portfolio DB Studio Engine
 * Interactive Logic & Data Explorer Simulator
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveClock();
  initSidebarToggle();
  initQueryBar();
  initProjectFilter();
  initTriviaGenerator();
  initScrollSpy();
  initContactCopy();
  initContactForm();
});

// 1. Live Uptime Clock & Timestamp
function initLiveClock() {
  const timestampEl = document.getElementById('live-timestamp');
  const uptimeEl = document.getElementById('live-uptime');
  let secondsUptime = 1420;

  function update() {
    const now = new Date();
    if (timestampEl) {
      timestampEl.textContent = now.toLocaleTimeString('es-GT', { hour12: false });
    }
    if (uptimeEl) {
      secondsUptime++;
      const hours = Math.floor(secondsUptime / 3600);
      const minutes = Math.floor((secondsUptime % 3600) / 60);
      const secs = secondsUptime % 60;
      uptimeEl.textContent = `${hours}h ${minutes}m ${secs}s`;
    }
  }

  setInterval(update, 1000);
  update();
}

// 2. Mobile Sidebar Toggle
function initSidebarToggle() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const sidebar = document.querySelector('.db-sidebar');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    // Close when clicking a link on mobile
    const links = sidebar.querySelectorAll('.table-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
          sidebar.classList.remove('open');
        }
      });
    });
  }
}

// 3. Interactive SQL Query Bar
function initQueryBar() {
  const queryInput = document.getElementById('sql-query-input');
  const executeBtn = document.getElementById('btn-execute-query');

  const queryRoutes = {
    'about': '#about',
    'about_me': '#about',
    'projects': '#projects',
    'tech': '#about',
    'skills': '#about',
    'news': '#news',
    'curiosities': '#news',
    'certs': '#certifications',
    'certifications': '#certifications',
    'contact': '#contact',
    'connect': '#contact'
  };

  function handleQuery() {
    const query = queryInput.value.toLowerCase().trim();
    let target = null;

    for (const [key, sectionId] of Object.entries(queryRoutes)) {
      if (query.includes(key)) {
        target = sectionId;
        break;
      }
    }

    if (target) {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        // Flash animation
        el.style.transition = 'outline 0.3s ease';
        el.style.outline = '2px solid #38bdf8';
        setTimeout(() => {
          el.style.outline = 'transparent';
        }, 1500);
      }
    } else {
      // Default: scroll to projects if not recognized
      const projectsEl = document.querySelector('#projects');
      if (projectsEl) projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (executeBtn && queryInput) {
    executeBtn.addEventListener('click', handleQuery);
    queryInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleQuery();
    });
  }
}

// 4. Projects Category Filter
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const techs = card.getAttribute('data-tech') || '';
        if (filter === 'all' || techs.includes(filter)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 5. Tech Curiosities & Trivia Random Generator
const devTrivia = [
  {
    fact: "El término 'Bug' informático se popularizó en 1947 cuando Grace Hopper encontró una polilla real atascada en un relé de la computadora Harvard Mark II.",
    author: "Historia de la Computación (1947)"
  },
  {
    fact: "Los índices en la mayoría de lenguajes empiezan en 0 porque representa el 'desplazamiento' (offset) de memoria desde la dirección base del array.",
    author: "Arquitectura de Memoria & C"
  },
  {
    fact: "El lenguaje Go fue diseñado en Google por Robert Griesemer, Rob Pike y Ken Thompson mientras esperaban a que terminara de compilar un enorme programa en C++.",
    author: "Google Engineering History"
  },
  {
    fact: "TypeScript fue creado por Anders Hejlsberg en Microsoft, quien también fue el diseñador principal de C# y Turbo Pascal.",
    author: "Evolución de Lenguajes Modernos"
  },
  {
    fact: "Git fue creado por Linus Torvalds en solo unas pocas semanas de 2005 porque el software comercial previo que usaban para el kernel Linux (BitKeeper) revocó su licencia gratuita.",
    author: "Control de Versiones & Linux"
  },
  {
    fact: "SQL (Structured Query Language) fue desarrollado originalmente por IBM en los años 70 bajo el nombre 'SEQUEL' (Structured English QUEry Language).",
    author: "Bases de Datos Relacionales"
  },
  {
    fact: "El primer motor de búsqueda web de la historia no fue Google ni Yahoo, sino 'Archie', creado en 1990 en la Universidad McGill de Montreal.",
    author: "Historia de la Web"
  }
];

function initTriviaGenerator() {
  const quoteEl = document.getElementById('trivia-quote');
  const authorEl = document.getElementById('trivia-author');
  const diceBtn = document.getElementById('btn-random-trivia');

  if (!quoteEl || !diceBtn) return;

  let lastIndex = -1;

  function getRandomTrivia() {
    let index;
    do {
      index = Math.floor(Math.random() * devTrivia.length);
    } while (index === lastIndex && devTrivia.length > 1);

    lastIndex = index;
    const item = devTrivia[index];

    quoteEl.style.opacity = '0';
    if (authorEl) authorEl.style.opacity = '0';

    setTimeout(() => {
      quoteEl.textContent = `"${item.fact}"`;
      if (authorEl) authorEl.textContent = `— ${item.author}`;
      quoteEl.style.opacity = '1';
      if (authorEl) authorEl.style.opacity = '1';
    }, 200);
  }

  diceBtn.addEventListener('click', getRandomTrivia);
}

// 6. Active Sidebar Scroll Spy
function initScrollSpy() {
  const sections = document.querySelectorAll('.db-section');
  const navLinks = document.querySelectorAll('.table-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// 7. Contact Copy to Clipboard
function initContactCopy() {
  const copyBtn = document.getElementById('btn-copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'feralvarezmorales9@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
        copyBtn.style.color = '#10b981';
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.style.color = '';
        }, 2000);
      });
    });
  }
}

// 8. Contact Form Simulation
function initContactForm() {
  const form = document.getElementById('contact-db-form');
  const alertBox = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const sender = document.getElementById('input-name').value;
      const message = document.getElementById('input-msg').value;

      // Open user's mail client directly
      const subject = encodeURIComponent(`Contacto desde Portafolio - ${sender}`);
      const body = encodeURIComponent(`Hola Jose,\n\n${message}\n\nDe: ${sender}`);
      window.location.href = `mailto:feralvarezmorales9@gmail.com?subject=${subject}&body=${body}`;

      if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.textContent = '🚀 Conexión establecida. Abriendo tu cliente de correo...';
        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 4000);
      }
      form.reset();
    });
  }
}
