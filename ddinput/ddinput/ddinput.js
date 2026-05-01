//Allison Hanna WEB 114 Final project 

"use strict";

// 1. PAGE SET UP
// Possible character names
const names = ["Arin", "Kael", "Lora", "Doran", "Mira"];

// Possible character classes
const classes = ["Fighter", "Wizard", "Rogue", "Cleric", "Ranger"];

// Possible character races
const races = ["Human", "fieldf", "Dwarf", "Halfling", "Tiefling"];

//Point to image files
const categoryImages = {
  Fighter: "fighter.jpg",
  Wizard: "wizard.jpg",
  Rogue: "rogue.png",
  Cleric: "cleric.webp",
  Ranger: "ranger.jpg"
};

// 2. Start game from beginning -- everything reset
// Current character being created
let character = {};

// Saved character (only one)
let savedCharacter = null;

// 3. Connect HTML elements

// Character image container (background image version)
const img = document.querySelector("#characterImage");

// Text fields
const namefield = document.querySelector("#name");
const classfield = document.querySelector("#class");
const racefield = document.querySelector("#race");

// Stat fields
const strfield = document.querySelector("#strength");
const intfield = document.querySelector("#intelligence");
const dexfield = document.querySelector("#dexterity");

// Saved character display
const savedfield = document.querySelector("#saved");

// 4. HELPER FUNCTIONS
// Returns a random item from an array
function randomItem(options) {
  let randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// Rolls a stat between 3 and 18 (D&D style)
function rollStat() {
  let stat = Math.floor(Math.random() * 16) + 3;
  return stat;
}

// 5. INITIAL Image when page loads
// Sets default image when page loads
function setDefaultCharacterImage() {
  img.style.backgroundImage = "url(default.webp)";
  img.alt = "Default character image";
}

// 6. GAME LOGIC
// Creates a character from user input + random stats
function generateCharacter() {

  // Get user inputs from form
  const nameInput = document.querySelector("#nameInput").value;
  const classInput = document.querySelector("#classSelect").value;
  const raceInput = document.querySelector("#raceSelect").value;

  // Build character object
  character = {
    // If name is empty, fallback to default name
    name: nameInput || "Unknown Hero",
    class: classInput,
    race: raceInput,

    // Random stats
    strength: rollStat(),
    intelligence: rollStat(),
    dexterity: rollStat()
  };

  // Update page
  renderCharacter();
}

// Saves current character (only one at a time)
function saveCharacter() {
  savedCharacter = character;

  // Display saved character on page
  savedfield.textContent = `${savedCharacter.name} | ${savedCharacter.class} | ${savedCharacter.race}`;
}

// 7. RENDER FUNCTION (update the page with new character info)
// Updates all visual elements on screen
function renderCharacter() {

  // Update text fields
  namefield.textContent = "Name: " + character.name;
  classfield.textContent = "Class: " + character.class;
  racefield.textContent = "Race: " + character.race;

  strfield.textContent = character.strength;
  intfield.textContent = character.intelligence;
  dexfield.textContent = character.dexterity;

  // Update character image based on class
  if (categoryImages[character.class]) {
    img.style.backgroundImage =
      `url(${categoryImages[character.class]})`;
  } else {
    // fallback image if class is missing
    img.style.backgroundImage =
      "url(default.webp)";
  }

  // Accessibility label
  img.alt = character.class + " character image";
}
// 8. EVENT LISTENERS
// Create character button
document.querySelector("#generateBtn")
  .addEventListener("click", generateCharacter);

// Save character button
document.querySelector("#saveBtn")
  .addEventListener("click", saveCharacter);

// 9. INITIALIZATION
// Run when page loads
setDefaultCharacterImage();