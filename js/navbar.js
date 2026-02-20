// ======================
// LOAD NAVBAR
// ======================
const navbarPath = '/navbar.html';

fetch(navbarPath)
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;

    initNavbar();
  });


// ======================
// INIT NAVBAR LOGIC
// ======================
function initNavbar() {

  // ---------- Dropdown ----------
  const contactBtn = document.querySelector('.contact-btn');
  const contactMenu = document.querySelector('.contact-menu');

  if (contactBtn && contactMenu) {
    contactBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      contactMenu.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
      if (!contactMenu.contains(e.target) && !contactBtn.contains(e.target)) {
        contactMenu.classList.remove('show');
      }
    });
  }

  // ---------- Elements ----------
  const pdfButton = document.getElementById('pdf-button');
  const navHome = document.getElementById('nav-home');
  const navWork = document.getElementById('nav-work');
  const navAbout = document.getElementById('nav-about');

  const path = window.location.pathname;
  const isGerman = path.startsWith('/de/');
  const homePath = isGerman ? '/de/index.html' : '/index.html';

  // ---------- Language + PDF ----------
  if (isGerman) {
    pdfButton.href = '/de/portfolio_uxui_danilishyna_2026_deutsch.pdf';
    pdfButton.textContent = 'Portfolio PDF herunterladen';

    navHome.textContent = 'Startseite';
    navWork.textContent = 'Projekte';
    navAbout.textContent = 'Über mich';
  } else {
    pdfButton.href = '/portfolio_ux_danilishyna_2026_english.pdf';
    pdfButton.textContent = 'Download PDF';

    navHome.textContent = 'Home';
    navWork.textContent = 'Work';
    navAbout.textContent = 'About';
  }

  // ---------- Navigation Logic ----------
  function scrollOrGo(sectionId) {
    if (window.location.pathname === homePath) {
      const section = document.querySelector(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = homePath + sectionId;
    }
  }

  navHome.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.location.pathname === homePath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = homePath;
    }
  });

  navWork.addEventListener('click', (e) => {
    e.preventDefault();
    scrollOrGo('#work');
  });

  navAbout.addEventListener('click', (e) => {
    e.preventDefault();
    scrollOrGo('#about');
  });

  // ---------- Scroll after load ----------
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  if (scrollTop > 50) { // когда проскроллено больше 50px
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});