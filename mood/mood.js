// script.js
// Mood Changer using event delegation 

const moodDisplay = document.getElementById('moodDisplay');

// Mood configurations
const moods = {
  happy: {
    bg: '#fff3b0',
    text: '#b84700',
    message: 'You are glowing with joy!'
  },
  calm: {
    bg: '#a8e6cf',
    text: '#2d6a4f',
    message: 'Peaceful and serene.'
  },
  excited: {
    bg: '#ff6b6b',
    text: '#fff',
    message: 'Energy levels: MAX!'
  },
  chill: {
    bg: '#4ecdc4',
    text: '#fff',
    message: 'Just vibing.'
  },
  mysterious: {
    bg: '#2c3e50',
    text: '#ecf0f1',
    message: 'Something’s brewing...'
  }
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