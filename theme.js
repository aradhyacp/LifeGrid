document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  // If required DOM elements are missing, abort initialization to avoid errors.
  if (!toggleBtn || !themeIcon) {
    return;
  }
  // FIX: Only store the 'inner' HTML (paths), NOT the full <svg> tag
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

  // 1. Check Local Storage on Load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.innerHTML = sunContent;
  }

  // 2. Toggle Event Listener
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // We swap the innerHTML of the existing SVG, keeping size/classes intact
    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
      themeIcon.innerHTML = sunContent;
    } else {
      localStorage.setItem('theme', 'dark');
      themeIcon.innerHTML = moonContent;
    }
  });
});