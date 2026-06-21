const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

menuToggle?.setAttribute('aria-expanded', 'false');
menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle?.setAttribute('aria-expanded', String(isOpen));
});

const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function updateThemeButton(theme) {
  if (!themeToggle) return;
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function applyTheme(theme) {
  if (theme === 'light') {
    root.classList.remove('dark');
    root.classList.add('light');
  } else {
    root.classList.remove('light');
    root.classList.add('dark');
  }
  localStorage.setItem('theme', theme);
  updateThemeButton(theme);
}

function toggleTheme() {
  const active = root.classList.contains('dark') ? 'dark' : 'light';
  applyTheme(active === 'dark' ? 'light' : 'dark');
}

themeToggle?.addEventListener('click', toggleTheme);

const scrollTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (!scrollTopButton) return;
  if (window.scrollY > 320) {
    scrollTopButton.classList.add('visible');
  } else {
    scrollTopButton.classList.remove('visible');
  }
});

// move to top of page when button is clicked
scrollTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

if (storedTheme) {
  applyTheme(storedTheme);
} else if (prefersDark) {
  applyTheme('dark');
} else {
  applyTheme('light');
}
