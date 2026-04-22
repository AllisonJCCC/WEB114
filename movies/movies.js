// Allison Hanna movies gallery

"use strict";

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

let currentIndex = 0;

const imgElement = document.querySelector("#gallery");
const captionElement = document.querySelector("#caption");
const headingElement = document.querySelector("#gallery-heading");

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");



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

showMovie(currentIndex);

function handleNextClick() {
  currentIndex++;

  if (currentIndex >= movies.length) {
    currentIndex = 0;
  }

  showMovie(currentIndex);
}

function handlePrevClick() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = movies.length - 1;
  }

  showMovie(currentIndex);
}

nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);