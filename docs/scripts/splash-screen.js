document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth < 768;
    const splash = document.getElementById('splash-screen');
    const hero = document.querySelector('.hero');
    const phone = document.querySelector('.splash-phone');
    const text = document.querySelector('.splash-text');

    if (!isMobile) {
      if (phone) phone.classList.add('hidden');
      if (text) text.classList.add('hidden');
    }

    setTimeout(() => {
      splash.classList.add('hidden');
      hero.classList.remove('hidden');

      const heroRow = document.querySelector('.hero-row');
      if (heroRow) {
        setTimeout(() => heroRow.classList.remove('hidden'), 500);
      }
    }, 3000);
  });
