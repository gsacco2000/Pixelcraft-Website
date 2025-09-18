document.addEventListener('DOMContentLoaded', () => {
  const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
  const styleSwitcher = document.querySelector('.style-switcher');
  const colorButtons = document.querySelectorAll('.colors span');
  const dayNight = document.querySelector('.day-night');

  function applyTheme(colorClass) {
    document.body.classList.remove('blue', 'beige', 'lilac', 'green');
    document.body.classList.add(colorClass);
  }

  function applyDarkMode(isDark) {
    const icon = dayNight.querySelector('i');
    if (isDark) {
      document.body.classList.add('dark');
      icon.classList.add('fa-sun');
      icon.classList.remove('fa-moon');
    } else {
      document.body.classList.remove('dark');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }

  const savedTheme = localStorage.getItem('themeColor');
  const savedDarkMode = localStorage.getItem('themeMode');

  if (savedTheme) {
    applyTheme(savedTheme);
  }
  if (savedDarkMode === 'dark') {
    applyDarkMode(true);
  } else {
    applyDarkMode(false);
  }

  // Aggiorna logo iniziale in base ai valori salvati
  updateLogo(savedTheme || 'blue', savedDarkMode === 'dark');

  styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
  });

  colorButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mapClass = {
        'color-1': 'blue',
        'color-2': 'beige',
        'color-3': 'lilac',
        'color-4': 'green',
      };
      const colorClass = mapClass[btn.classList[0]];
      applyTheme(colorClass);
      localStorage.setItem('themeColor', colorClass);
      styleSwitcher.classList.remove('open');
      // Chiama updateLogo dopo cambio colore, passa tema scuro/chiaro attuale
      updateLogo(colorClass, document.body.classList.contains('dark'));
    });
  });

  dayNight.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    const icon = dayNight.querySelector('i');
    if (isDark) {
      icon.classList.add('fa-sun');
      icon.classList.remove('fa-moon');
      localStorage.setItem('themeMode', 'dark');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      localStorage.setItem('themeMode', 'light');
    }
    // Chiama updateLogo dopo toggle dark/light
    const currentColor = localStorage.getItem('themeColor') || 'blue';
    updateLogo(currentColor, isDark);
  });
});

// Funzione updateLogo per mostrare il logo giusto
function updateLogo(colorClass, isDark) {
  const logos = document.querySelectorAll('a.navbar-brand .logo');
  logos.forEach(logo => logo.classList.remove('active'));
  const modeClass = isDark ? 'logo-dark' : 'logo-light';
  logos.forEach(logo => {
    if (logo.classList.contains(modeClass) && logo.classList.contains('logo-' + colorClass)) {
      logo.classList.add('active');
    }
  });
}
