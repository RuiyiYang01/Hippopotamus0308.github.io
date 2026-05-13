// Theme toggle: persists across sessions; respects system preference on first visit.
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle.querySelector('i');
  const STORAGE_KEY = 'site-theme';

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      root.removeAttribute('data-theme');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  });
})();

// Show more / show less toggling per section.
document.querySelectorAll('.show-more').forEach((btn) => {
  btn.addEventListener('click', () => {
    const block = btn.closest('.block');
    block.classList.toggle('expanded');
  });
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
