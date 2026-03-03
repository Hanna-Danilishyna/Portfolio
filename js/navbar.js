
// const navbarPath = '/navbar.html';

// fetch(navbarPath)
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById('navbar-placeholder').innerHTML = data;

//     initNavbar();
//   });


// function initNavbar() {

  
//   const contactBtn = document.querySelector('.contact-btn');
//   const contactMenu = document.querySelector('.contact-menu');

//   if (contactBtn && contactMenu) {
//     contactBtn.addEventListener('click', (e) => {
//       e.stopPropagation();
//       contactMenu.classList.toggle('show');
//     });

//     window.addEventListener('click', (e) => {
//       if (!contactMenu.contains(e.target) && !contactBtn.contains(e.target)) {
//         contactMenu.classList.remove('show');
//       }
//     });
//   }

  
//   const pdfButton = document.getElementById('pdf-button');
//   const navHome = document.getElementById('nav-home');
//   const navWork = document.getElementById('nav-work');
//   const navAbout = document.getElementById('nav-about');


//   const path = window.location.pathname;
//   const isGerman = path.startsWith('/de/');
//   const homePath = isGerman ? '/de/index.html' : '/index.html';

  
//   if (isGerman) {
//     pdfButton.href = '/de/portfolio_uxui_danilishyna_2026_deutsch.pdf';
//     pdfButton.textContent = 'Portfolio PDF herunterladen';

//     navHome.textContent = 'Startseite';
//     navWork.textContent = 'Projekte';
//     navAbout.textContent = 'Über mich';
//   } else {
//     pdfButton.href = '/portfolio_ux_danilishyna_2026_english.pdf';
//     pdfButton.textContent = 'Download PDF';

//     navHome.textContent = 'Home';
//     navWork.textContent = 'Work';
//     navAbout.textContent = 'About';
//   }

  
//   function scrollOrGo(sectionId) {
//     if (window.location.pathname === homePath) {
//       const section = document.querySelector(sectionId);
//       if (section) section.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       window.location.href = homePath + sectionId;
//     }
//   }

//   navHome.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (window.location.pathname === homePath) {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//       window.location.href = homePath;
//     }
//   });

//   navWork.addEventListener('click', (e) => {
//     e.preventDefault();
//     scrollOrGo('#work');
//   });

//   navAbout.addEventListener('click', (e) => {
//     e.preventDefault();
//     scrollOrGo('#about');
//   });

  
//   window.addEventListener('load', () => {
//     if (window.location.hash) {
//       const section = document.querySelector(window.location.hash);
//       if (section) section.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// }

// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', () => {
//   const scrollTop = window.scrollY;

//   if (scrollTop > 50) { 
//     navbar.classList.add('scrolled');
//   } else {
//     navbar.classList.remove('scrolled');
//   }
// });


// navbar.js
// const navbarPath = '/navbar.html';

// // Загружаем HTML navbar через fetch
// fetch(navbarPath)
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById('navbar-placeholder').innerHTML = data;
//     initNavbar(); // вызываем только после вставки
//   })
//   .catch(err => console.error('Error loading navbar:', err));

// function initNavbar() {
//   const navbar = document.querySelector('.navbar');
//   const contactBtn = document.querySelector('.contact-btn');
//   const contactMenu = document.querySelector('.contact-menu');
//   const pdfButton = document.getElementById('pdf-button');
//   const navHome = document.getElementById('nav-home');
//   const navWork = document.getElementById('nav-work');
//   const navAbout = document.getElementById('nav-about');

//   if (!navbar) {
//     console.warn('Navbar not found!');
//     return;
//   }

//   // ====== SCROLL EFFECT ======
//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//       navbar.classList.add('scrolled');
//     } else {
//       navbar.classList.remove('scrolled');
//     }
//   });

//   // ====== CONTACT DROPDOWN ======
//   if (contactBtn && contactMenu) {
//     contactBtn.addEventListener('click', e => {
//       e.stopPropagation();
//       contactMenu.classList.toggle('show');
//     });

//     window.addEventListener('click', e => {
//       if (!contactMenu.contains(e.target) && !contactBtn.contains(e.target)) {
//         contactMenu.classList.remove('show');
//       }
//     });
//   }

//   // ====== LANGUAGE + PDF ======
//   const path = window.location.pathname;
//   const isGerman = path.startsWith('/de/');
//   const homePath = isGerman ? '/de/index.html' : '/index.html';

//   if (pdfButton) {
//     pdfButton.href = isGerman
//       ? '/de/portfolio_uxui_danilishyna_2026_deutsch.pdf'
//       : '/portfolio_ux_danilishyna_2026_english.pdf';
//     pdfButton.textContent = isGerman
//       ? 'Portfolio PDF herunterladen'
//       : 'Download PDF';
//   }

//   if (navHome) navHome.textContent = isGerman ? 'Startseite' : 'Home';
//   if (navWork) navWork.textContent = isGerman ? 'Projekte' : 'Work';
//   if (navAbout) navAbout.textContent = isGerman ? 'Über mich' : 'About';

//   // ====== SMOOTH SCROLL ======
//   function scrollOrGo(sectionId) {
//     if (window.location.pathname === homePath) {
//       const section = document.querySelector(sectionId);
//       if (section) section.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       window.location.href = homePath + sectionId;
//     }
//   }

//   navHome?.addEventListener('click', e => {
//     e.preventDefault();
//     if (window.location.pathname === homePath) {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//       window.location.href = homePath;
//     }
//   });

//   navWork?.addEventListener('click', e => {
//     e.preventDefault();
//     scrollOrGo('#work');
//   });

//   navAbout?.addEventListener('click', e => {
//     e.preventDefault();
//     scrollOrGo('#about');
//   });

//   // ====== SCROLL TO HASH AFTER LOAD ======
//   window.addEventListener('load', () => {
//     if (window.location.hash) {
//       const section = document.querySelector(window.location.hash);
//       if (section) section.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// }


// navbar.js

const navbarPath = '/navbar.html';

// Загружаем HTML navbar через fetch
fetch(navbarPath)
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
    initNavbar(); // вызываем только после вставки
  })
  .catch(err => console.error('Error loading navbar:', err));

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const contactBtn = document.querySelector('.contact-btn');
  const contactMenu = document.querySelector('.contact-menu');
  const pdfButton = document.getElementById('pdf-button');
  const navHome = document.getElementById('nav-home');
  const navWork = document.getElementById('nav-work');
  const navAbout = document.getElementById('nav-about');

  if (!navbar) {
    console.warn('Navbar not found!');
    return;
  }

  // ====== SCROLL EFFECT ======
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll progress
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrolled + '%';
      scrollProgress.style.opacity = scrolled > 2 ? 1 : 0;
    }
  });

  // ====== CONTACT DROPDOWN ======
  if (contactBtn && contactMenu) {
    contactBtn.addEventListener('click', e => {
      e.stopPropagation();
      contactMenu.classList.toggle('show');
    });

    window.addEventListener('click', e => {
      if (!contactMenu.contains(e.target) && !contactBtn.contains(e.target)) {
        contactMenu.classList.remove('show');
      }
    });
  }

  // ====== LANGUAGE + PDF ======
  const path = window.location.pathname;
  const isGerman = path.startsWith('/de/');
  const homePath = isGerman ? '/de/index.html' : '/index.html';

  if (pdfButton) {
    pdfButton.href = isGerman
      ? '/de/portfolio_uxui_danilishyna_2026_deutsch.pdf'
      : '/portfolio_ux_danilishyna_2026_english.pdf';
    pdfButton.textContent = isGerman
      ? 'Portfolio PDF herunterladen'
      : 'Download PDF';
  }

  if (navHome) navHome.textContent = isGerman ? 'Startseite' : 'Home';
  if (navWork) navWork.textContent = isGerman ? 'Projekte' : 'Work';
  if (navAbout) navAbout.textContent = isGerman ? 'Über mich' : 'About';

  // ====== SMOOTH SCROLL ======
  function scrollOrGo(sectionId) {
    if (window.location.pathname === homePath) {
      const section = document.querySelector(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = homePath + sectionId;
    }
  }

  navHome?.addEventListener('click', e => {
    e.preventDefault();
    if (window.location.pathname === homePath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = homePath;
    }
  });

  navWork?.addEventListener('click', e => {
    e.preventDefault();
    scrollOrGo('#work');
  });

  navAbout?.addEventListener('click', e => {
    e.preventDefault();
    scrollOrGo('#about');
  });

  // ====== SCROLL TO HASH AFTER LOAD ======
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // ====== LIGHTBOX FOR IMAGE CARDS ======
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `<span class="close">&times;</span><img class="lightbox-img">`;
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector('.lightbox-img');
  const lbClose = lightbox.querySelector('.close');

  document.querySelectorAll('.gallery-card img, .ui-card img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  });

  lbClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.style.display = 'none';
  });
}