const buttons = document.getElementById('buttons');
const quote = document.getElementById('quote');

const heroes = {
  batman:      { bg: '#000000', text: '#ffffff', quote: 'I am vengeance. I am the night. I AM BATMAN!' },
  superman:    { bg: '#1e90ff', text: '#ffd700', quote: 'Up, up and away!' },
  wonderwoman: { bg: '#c0392b', text: '#f39c12', quote: 'By the power of truth!' },
  flash:       { bg: '#ff8c00', text: '#ffffff', quote: 'Gotta go fast!' }
};

buttons.addEventListener('click', function(event) {
  if (event.target.classList.contains('hero-btn')) {
    const hero = event.target.getAttribute('data-hero');
    const theme = heroes[hero];
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;
    quote.textContent = theme.quote;
  }
});