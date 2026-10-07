document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  /* === Theme toggle ===
     Light is the default canvas (design.md Part I, theme: light).
     Dark maps onto the documented canvas-deep / surface-dark-elevated tokens.
     The attribute itself is set pre-paint by the inline script in index.html. */
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  const sunContent = `
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  `;

  const moonContent = `
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  `;

  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  const paintTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    if (themeIcon) {
      // Offer the action, not the current state.
      themeIcon.innerHTML = theme === 'dark' ? sunContent : moonContent;
    }
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', theme === 'dark' ? '#0c0a09' : '#fdfcfc');
    }
  };

  if (toggleBtn && themeIcon) {
    paintTheme(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

    toggleBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      paintTheme(next);
    });
  }

  /* === Nav hairline on scroll ===
     The bar is invisible against the canvas until the page moves (design.md §8). */
  const nav = document.querySelector('.nav');
  if (nav) {
    const syncNav = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
    syncNav();
    window.addEventListener('scroll', syncNav, { passive: true });
  }
});
