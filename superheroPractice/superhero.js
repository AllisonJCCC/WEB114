// script.js - Superhero Theme Switcher

// Step 1: Select elements to update
const buttons = document.querySelector('#buttons');
const heroquote = document.querySelector('#quote');  

// Step 2: Hero theme configurations
// Each hero has background color, text color, and a quote
const heroes = {
  batman: {
    bg: '#1a1a1a',
    text: '#f0f0f0',
    quote: 'I am vengeance. I am the night. I AM BATMAN!'
  },
  superman: {
    bg: '#3498db',
    text: '#f1c40f',
    quote: 'Truth, Justice, and a Better Tomorrow!'
  },
  wonderwoman: {
    bg: '#e74c3c',
    text: '#f39c12',
    quote: 'Peace through strength. Love through courage.'
  },
  flash: {
    bg: '#e67e22',
    text: '#fff',
    quote: 'Gotta go fast!'
  }
};

// Step 3: Add event listener with a named function
buttons.addEventListener('click', handleHeroClick);

// Step 4: Define the named function for clicks
// HeroChoice = the event object representing the user's click
function handleHeroClick(HeroChoice) {

  // Check if a hero button was clicked
  if (HeroChoice.target.classList.contains('hero-btn')) {

    // Get the hero name from the button's data-hero attribute
    const hero = HeroChoice.target.getAttribute('data-hero');

    // Get the hero's settings from the heroes object
    const heroSettings = heroes[hero];

    // Debugging / Testing
    console.log("Hero selected:", hero);
    console.log("Hero settings:", heroSettings);

    // Update page background and text color
    document.body.style.backgroundColor = heroSettings.bg;
    document.body.style.color = heroSettings.text;

    // Update the hero quote
    quote.textContent = heroSettings.quote;
  }
}
