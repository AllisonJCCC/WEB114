// Allison Hanna movies gallery
//https://allisonjccc.github.io/WEB114/movies/movies.html
//see moviesAnnotated.js for a teacher script

"use strict";

// Step 1: Create an initial person object with some default values
const movies = [
  {
    src: "dark.webp",
    alt: "A superhero saving the world",
    title: "Dark Knight"
  },
  {
    src: "martian.webp",
    alt: "Mark Watney on Mars trying to survive",
    title: "The Martian"
  },
  {
    src: "project.webp",
    alt: "A journey through space",
    title: "Galaxy Quest"
  }
];

// 2. STATE (TRACK POSITION)
let currentIndex = 0;

// 3. SELECT ELEMENTS
// Image gallery placeholders
// // These connect JavaScript to HTML elements
const imgElement = document.querySelector("#gallery");
const captionElement = document.querySelector("#caption");
const headingElement = document.querySelector("#gallery-heading");

//Previous and Next buttons
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

// 4. DISPLAY FUNCTION

function showMovie(index) {
  const movie = movies[index]; 
// Get the movie object at the current index from the movies array

imgElement.src = movie.src; 
// Set the image source (file path) to the movie's src property

imgElement.alt = movie.alt; 
// Set the alt text of the image (for accessibility and description)

captionElement.textContent = movie.alt; 
// Display the movie's description as the caption text on the page

headingElement.textContent = `Movie ${index + 1} of ${movies.length}`;
// Show which movie we are on (add 1 because index starts at 0)
// Also show the total number of movies using movies.length
}

// 5. INITIAL DISPLAY
showMovie(currentIndex);

// 6. NEXT BUTTON FUNCTION

function handleNextClick() {
  currentIndex++;
    // Move forward

  if (currentIndex >= movies.length) {
    currentIndex = 0;
  }
    // Loop to beginning

  showMovie(currentIndex);
}

// 7. PREVIOUS BUTTON FUNCTION
function handlePrevClick() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = movies.length - 1;
  }

  showMovie(currentIndex);
}

// 8. EVENT LISTENERS
nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);

/*
 EXTENSION:
- Add keyboard controls:
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") handleNextClick();
    if (e.key === "ArrowLeft") handlePrevClick();
  });
*/


//  BONUS EXTENSION (ADVANCED)

/*
 SLIDESHOW MODE:
Automatically change movies every 3 seconds

setInterval(() => {
  handleNextClick();
}, 3000);

*/