"use strict"
// Helps catch common JavaScript mistakes

// ==========================
// 1. DATA (ARRAY OF OBJECTS)
// ==========================

const movies = [
  {
    src: "dark.webp",
    alt: "A superhero saving the world",
    title: "Hero Rise"
  },
  {
    src: "martian.webp",
    alt: "A funny animated story",
    title: "Laugh World"
  },
  {
    src: "project.webp",
    alt: "A journey through space",
    title: "Galaxy Trip"
  }
];
// Stores multiple movie objects in one array

/*
🧠 TEACHER PROMPT:
"Why is this better than separate variables?"

⚠️ COMMON CHALLENGES:
- Missing commas
- Confusing [] vs {}

🚀 EXTENSION (early finishers):
- Add a new property: year or rating
- Add a 4th movie to the array
*/


// ==========================
// 2. STATE (TRACK POSITION)
// ==========================

let currentIndex = 0;
// Keeps track of which movie is currently displayed

/*
🧠 TEACHER PROMPT:
"What does 0 represent?"

⚠️ COMMON CHALLENGE:
- Students think arrays start at 1

🚀 EXTENSION:
- Start at a random movie:
  currentIndex = Math.floor(Math.random() * movies.length);
*/


// ==========================
// 3. SELECT DOM ELEMENTS
// ==========================

const imgElement = document.querySelector("#gallery");
const captionElement = document.querySelector("#caption");
const headingElement = document.querySelector("#gallery-heading");

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

/*
🧠 TEACHER PROMPT:
"What happens if this ID doesn't match HTML?"

⚠️ COMMON CHALLENGES:
- Typos
- Missing #
- Script not using defer

🚀 EXTENSION:
- Add a new element in HTML for movie title
  Then select it here:
  const titleElement = document.querySelector("#title");
*/


// ==========================
// 4. DISPLAY FUNCTION
// ==========================

function showMovie(index) {
  const movie = movies[index]; 
  // Get one movie object

  imgElement.src = movie.src; 
  // Update image

  imgElement.alt = movie.alt; 
  // Update alt text

  captionElement.textContent = movie.alt; 
  // Show description

  headingElement.textContent = `Movie ${index + 1} of ${movies.length}`;
  // Show position
}

/*
🧠 TEACHER PROMPT:
"Why store movies[index] in a variable?"

⚠️ COMMON CHALLENGES:
- Using movies.src instead of movies[index].src
- Forgetting parameter

🚀 EXTENSION:
- Display the movie title:
  titleElement.textContent = movie.title;

- Challenge students:
  "Can you show BOTH title and description?"
*/


// ==========================
// 5. INITIAL DISPLAY
// ==========================

showMovie(currentIndex);
// Show first movie on load

/*
🧠 TEACHER PROMPT:
"What happens if we remove this?"

⚠️ COMMON CHALLENGE:
- Nothing shows → confusion
*/

// ==========================
// 6. NEXT BUTTON FUNCTION
// ==========================

function handleNextClick() {
  currentIndex++; 
  // Move forward

  if (currentIndex >= movies.length) {
    currentIndex = 0; 
    // Loop to beginning
  }

  showMovie(currentIndex); 
}

/*
🧠 TEACHER PROMPT:
"What happens at the end?"

⚠️ COMMON CHALLENGES:
- Off-by-one errors
- Forgetting reset

🚀 EXTENSION:
- Add animation (fade effect with CSS class)
- Log to console:
  console.log("Next clicked", currentIndex);
*/


// ==========================
// 7. PREVIOUS BUTTON FUNCTION
// ==========================

function handlePrevClick() {
  currentIndex--; 
  // Move backward

  if (currentIndex < 0) {
    currentIndex = movies.length - 1; 
    // Jump to last movie
  }

  showMovie(currentIndex); 
}

/*
🧠 TEACHER PROMPT:
"Why movies.length - 1?"

⚠️ COMMON CHALLENGES:
- Using movies.length (breaks app)

*/


// ==========================
// 8. EVENT LISTENERS
// ==========================

nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);

/*
🧠 TEACHER PROMPT:
"What does this do in plain English?"

⚠️ COMMON CHALLENGES:
- Writing handleNextClick() instead of passing function-- handleNextClick()- runs immediately no () means when clicked
- Forgetting "click"

🚀 EXTENSION:
- Add keyboard controls:
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") handleNextClick();
    if (e.key === "ArrowLeft") handlePrevClick();
  });
*/


// ==========================
// 🌟 BONUS EXTENSION (ADVANCED)
// ==========================

/*
🚀 SLIDESHOW MODE:
Automatically change movies every 3 seconds

setInterval(() => {
  handleNextClick();
}, 3000);

*/