const themeButton = document.querySelector('#theme');
function setTheme(light) {
  document.body.classList.toggle('light', light);
  themeButton.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} theme`);
  document.querySelector('meta[name="theme-color"]').content = light ? '#f6f6ef' : '#101715';
}
try { setTheme(localStorage.getItem('portfolio-theme') === 'light'); } catch {}
themeButton.addEventListener('click', () => {
  const light = !document.body.classList.contains('light');
  setTheme(light);
  try { localStorage.setItem('portfolio-theme', light ? 'light' : 'dark'); } catch {}
});
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    });
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();
