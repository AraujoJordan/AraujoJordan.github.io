const industries = ['Fintech', 'Retail', 'Trades'];
const el = document.getElementById('industry-focus');
let i = 0;
setInterval(() => {
  el.classList.add('fading');
  setTimeout(() => {
    i = (i + 1) % industries.length;
    el.textContent = industries[i];
    el.classList.remove('fading');
  }, 400);
}, 2500);
