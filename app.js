
/* Hamburger */
const hamBtn = document.getElementById('hamBtn');
const navMenu = document.getElementById('navMenu');
hamBtn.addEventListener('click', () => {
  hamBtn.classList.toggle('open');
  navMenu.classList.toggle('show');
});
document.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => {
    hamBtn.classList.remove('open');
    navMenu.classList.remove('show');
  });
});

/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* Scroll reveal */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

/* Active nav */
const secs = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 90) cur = s.id; });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + cur);
  });
});
