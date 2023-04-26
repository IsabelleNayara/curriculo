const themeToggle = document.querySelector('#theme-toggle');
const body = document.querySelector('body');

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }
});

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
} else {
  body.classList.remove('dark-mode');
}






