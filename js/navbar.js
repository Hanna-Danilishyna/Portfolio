// const navbarPath = '/navbar.html';


// fetch(navbarPath)
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById('navbar-placeholder').innerHTML = data;
//     initNavbar(); 
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
//   const langDe = document.getElementById('lang-de');
//   const langEn = document.getElementById('lang-en');

//   const isGerman = window.location.pathname.startsWith('/de/');

// if (isGerman) {
//   langDe?.classList.add('active');
// } else {
//   langEn?.classList.add('active');
// }
// }

// function getCurrentPath() {
//   return window.location.pathname;
// }

// function toGerman(path) {
//   if (path.startsWith('/de/')) return path;
//   return '/de' + path;
// }

// function toEnglish(path) {
//   if (path.startsWith('/de/')) {
//     return path.replace('/de', '');
//   }
//   return path;
// }

// langDe?.addEventListener('click', e => {
//   e.preventDefault();
//   window.location.href = toGerman(getCurrentPath());
// });

// langEn?.addEventListener('click', e => {
//   e.preventDefault();
//   window.location.href = toEnglish(getCurrentPath());
// });

//   if (!navbar) {
//     console.warn('Navbar not found!');
//     return;
//   }

  
//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 50) {
//       navbar.classList.add('scrolled');
//     } else {
//       navbar.classList.remove('scrolled');
//     }

    
//     const scrollProgress = document.querySelector('.scroll-progress');
//     if (scrollProgress) {
//       const scrollTop = window.scrollY;
//       const docHeight = document.body.scrollHeight - window.innerHeight;
//       const scrolled = (scrollTop / docHeight) * 100;
//       scrollProgress.style.width = scrolled + '%';
//       scrollProgress.style.opacity = scrolled > 2 ? 1 : 0;
//     }
//   });

 
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

//   window.addEventListener('load', () => {
//     if (window.location.hash) {
//       const section = document.querySelector(window.location.hash);
//       if (section) section.scrollIntoView({ behavior: 'smooth' });
//     }
//   });

  
//   const lightbox = document.createElement('div');
//   lightbox.className = 'lightbox';
//   lightbox.innerHTML = `<span class="close">&times;</span><img class="lightbox-img">`;
//   document.body.appendChild(lightbox);

//   const lbImg = lightbox.querySelector('.lightbox-img');
//   const lbClose = lightbox.querySelector('.close');

//   document.querySelectorAll('.gallery-card img, .ui-card img').forEach(img => {
//     img.style.cursor = 'pointer';
//     img.addEventListener('click', () => {
//       lbImg.src = img.src;
//       lightbox.style.display = 'flex';
//     });
//   });

//   lbClose.addEventListener('click', () => {
//     lightbox.style.display = 'none';
//   });

//   lightbox.addEventListener('click', e => {
//     if (e.target === lightbox) lightbox.style.display = 'none';
//   });
// }

const navbarPath = '/navbar.html';

fetch(navbarPath)
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
    initNavbar(); 
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
  const langDe = document.getElementById('lang-de');
  const langEn = document.getElementById('lang-en');

  if (!navbar) {
    console.warn('Navbar not found!');
    return;
  }

  // Проверка языка страницы
  const isGerman = window.location.pathname.startsWith('/de/');
  if (langDe) langDe.classList.toggle('active', isGerman);
  if (langEn) langEn.classList.toggle('active', !isGerman);

  // Функции переключения языка
  function getCurrentPath() {
    return window.location.pathname;
  }

  function toGerman(path) {
    if (path.startsWith('/de/')) return path;
    return '/de' + path;
  }

  function toEnglish(path) {
    if (path.startsWith('/de/')) return path.replace('/de', '');
    return path;
  }

  langDe?.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = toGerman(getCurrentPath());
  });

  langEn?.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = toEnglish(getCurrentPath());
  });

  // Scroll navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      scrollProgress.style.width = scrolled + '%';
      scrollProgress.style.opacity = scrolled > 2 ? 1 : 0;
    }
  });

  // Contact dropdown
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

  // PDF button
  const homePath = isGerman ? '/de/index.html' : '/index.html';
  if (pdfButton) {
    pdfButton.href = isGerman
      ? '/de/portfolio_uxui_danilishyna_2026_deutsch.pdf'
      : '/portfolio_ux_danilishyna_2026_english.pdf';
    pdfButton.textContent = isGerman
      ? 'Portfolio PDF herunterladen'
      : 'Download PDF';
  }

  // Navbar text
  if (navHome) navHome.textContent = isGerman ? 'Startseite' : 'Home';
  if (navWork) navWork.textContent = isGerman ? 'Projekte' : 'Work';
  if (navAbout) navAbout.textContent = isGerman ? 'Über mich' : 'About';

  // Smooth scroll to sections
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

  window.addEventListener('load', () => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Lightbox
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