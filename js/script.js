//   HAMBURGER MENU - home

document.addEventListener('DOMContentLoaded', () => {
  const toggler = document.querySelector('.navbar-toggler');
  const collapseElem = document.querySelector('#mainNavbar');
  collapseElem.addEventListener('show.bs.collapse', () => {
    toggler.classList.add('is-active');
  });
  collapseElem.addEventListener('hide.bs.collapse', () => {
    toggler.classList.remove('is-active');
  });
  collapseElem.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = bootstrap.Collapse.getInstance(collapseElem);
      if (bsCollapse) bsCollapse.hide();
    });
  });
});











//   SLIDESHOW HOMEPAGE - home

const slides = document.querySelectorAll(".slide");
let current = 0;

function showNextSlide() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}

setInterval(showNextSlide, 3000); // Cambia immagine ogni 5 secondi







//    ANIMAZIONE FADE-IN DEI PROGETTI  - portfolio

document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll('.project');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = Array.from(projects).indexOf(entry.target);
        const delay = (index % 3) * 100 + Math.floor(index / 3) * 150;

        entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  projects.forEach(project => observer.observe(project));
});







//    ANIMAZIONE TABELLA KPI CASE STUDY - Isi Foundation

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".kpi-value");
  let hasAnimated = false;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;

      const increment = () => {
        const step = Math.ceil(target / 500); // Rallenta l'incremento (puoi aumentare il divisore per rallentare ulteriormente)
        count += step;

        if (count < target) {
          counter.textContent = `+${count}%`;
          setTimeout(increment, 100); // Delay più lungo = più lento (puoi aumentare il valore)
        } else {
          counter.textContent = `+${target}%`;
        }
      };

      increment();
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        animateCounters();
        hasAnimated = true;
        observer.disconnect(); // Rimuovi se vuoi che l'animazione si ripeta
      }
    });
  }, { threshold: 0.3 });

  const kpiSection = document.querySelector('.kpi-section');
  if (kpiSection) {
    observer.observe(kpiSection);
  }
});




//    ANIMAZIONE ICONA APPROFONDIMENTO - Open Sound Festival
window.addEventListener("scroll", function () {
  const infoIcon = document.querySelector(".info-icon");
  const targetSection = document.querySelector(".full-screen3");
  const targetBottom = targetSection.offsetTop + targetSection.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > targetBottom) {
    infoIcon.style.display = "none"; // Nasconde
  } else {
    infoIcon.style.display = "block"; // Mostra
  }
});






//    FILTRO GENERI ARTICOLI - journal

document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");
  const articles = document.querySelectorAll(".articolo");

  categories.forEach(category => {
      category.addEventListener("click", () => {
          const selectedFilter = category.getAttribute("data-filter");

          articles.forEach(article => {
              const articleCategories = article.getAttribute("data-category");

              if (selectedFilter === "tutti") {
                  article.style.display = "block";
              } else {
                  if (articleCategories && articleCategories.includes(selectedFilter)) {
                      article.style.display = "block";
                  } else {
                      article.style.display = "none";
                  }
              }
          });

          categories.forEach(cat => cat.classList.remove("selezionata"));
          category.classList.add("selezionata");
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const immagineAside = document.getElementById("immagineAside");
  const testoAside = document.getElementById("testoAside");

  [immagineAside, testoAside].forEach(element => {
      element.addEventListener("click", () => {
          window.location.href = "articoli/articolo_1.html";
      });
  });
});







//    VALIDAZIONE FORM - contatti
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const messaggio = document.getElementById("messaggio");
    const privacy = document.getElementById("privacy");
    const oggetto = document.getElementById("oggetto");
    const telefono = document.getElementById("telefono");

    let valid = true;
    let errorMsg = "";

    if (!nome.value.trim()) {
      valid = false;
      errorMsg += "- Il campo Nome è obbligatorio.\n";
    }

    if (!oggetto.value) {
      valid = false;
      errorMsg += "- Seleziona un'opzione su cosa ti porta qui.\n";
    }

    if (!messaggio.value.trim()) {
      valid = false;
      errorMsg += "- Il campo Messaggio è obbligatorio.\n";
    }

    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      valid = false;
      errorMsg += "- Inserisci un indirizzo email valido.\n";
    }

    if (telefono.value && !/^[0-9+\s-]{7,15}$/.test(telefono.value)) {
      valid = false;
      errorMsg += "- Il numero di telefono non è valido.\n";
    }

    if (!privacy.checked) {
      valid = false;
      errorMsg += "- Devi accettare l'informativa sulla privacy.\n";
    }

    if (!valid) {
      event.preventDefault();
      alert("Per favore correggi i seguenti errori:\n" + errorMsg);
    } else {
      alert("Messaggio inviato con successo! Grazie per averci contattato.");
    }
  });
});








//    TOGGLE DI APERTURA PER SPECIFICHE - Open Sound Festival

function toggleInfoPanel() {
  document.getElementById('infoPanel').classList.toggle('open');
}


