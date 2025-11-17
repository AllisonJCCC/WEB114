// script.js
// Mood Changer using event delegation 

const moodDisplay = document.getElementById('moodDisplay');

// Mood configurations
const moods = {
  happy:     { bg: '#ff9800', text: '#3e2723', message: 'Pumpkin spice everything!' },
  calm:      { bg: '#d7ccc8', text: '#5d4037', message: 'Crisp leaves, warm tea.' },
  excited:   { bg: '#d32f2f', text: '#ffffff', message: 'Fall is so pretty!' },
  chill:     { bg: '#d2a81eff', text: '#250e07', message: 'Cozy sweater weather.' },
  mysterious:{ bg: '#3e2723', text: '#bed0bd', message: 'Fog rolling through the forest.' }
};

// Add ONE event listener to the entire document (or body)
document.addEventListener('click', function (event) {
  // Check if the clicked element is a mood button
  if (event.target.classList.contains('mood-btn')) {
    const mood = event.target.getAttribute('data-mood');
    const config = moods[mood];

    // Update background and text color
    document.body.style.backgroundColor = config.bg;
    document.body.style.color = config.text;

    // Update message
    moodDisplay.textContent = config.message;
  }
});