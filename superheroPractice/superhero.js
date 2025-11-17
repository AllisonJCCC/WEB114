


//Allison Hanna DOM exercise 11/14

// Superhero Theme Switcher – Your Mission!
const buttons = document.getElementById('buttons');
const quote = document.getElementById('quote');

// This object holds all hero themes

// YOUR JOB: Change Superman, Wonderwoman, and the Flash bg color, text color, and quotes below!
const heroes = {
  batman:      { bg: '#000000', text: '#ffffff', quote: 'I am vengeance. I am the night. I AM BATMAN!' },
  superman:    { bg: '#1e90ff', text: '#ffd700', quote: 'Up, up and away!' },
  wonderwoman: { bg: '#c0392b', text: '#f39c12', quote: 'By the power of truth!' },
  flash:       { bg: '#ff8c00', text: '#ffffff', quote: 'Gotta go fast!' }
};

// ONE event listener that works for ALL buttons
buttons.addEventListener('click', function(event) {
    // Only run if a hero button was clicked
  if (event.target.classList.contains('hero-btn')) {
    // Get which hero was clicked
    const hero = event.target.getAttribute('data-hero');
    // Get that hero's theme from the object
    const theme = heroes[hero];
    // Change the webpage
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;
    quote.textContent = theme.quote;
  }
});