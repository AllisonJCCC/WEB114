"use strict";

/* Array of photo objects-- index 0- beach, index 1-trail, index 2-grand canyon */
const photos = [
  { src: "beach.jpg", alt: `A sunny beach` },
  { src: "trail.jpg", alt: `A forest trail` },
  { src: "grandcanyon.jpg", alt: `The Grand Canyon` }
];

let currentIndex = 0;

/* Function to display the current photo */
function showPhoto(index) {  // parameter that pass which photo to show from the array.
  const photo = photos[index];
  const imgElement = document.querySelector("#gallery");
  const captionElement = document.querySelector("#caption");
  const headingElement = document.querySelector("#gallery-heading");

  imgElement.src = photo.src;
  imgElement.alt = photo.alt;
  captionElement.textContent = photo.alt;
   // Update heading (index + 1 because arrays start at 0)
  headingElement.textContent = `Image ${index + 1} of ${photos.length}`;
}

/* Initial display */
showPhoto(currentIndex);


/* Next and Previous Buttons */
function handleNextClick() {
  currentIndex++;
  if (currentIndex >= photos.length) currentIndex = 0;
  showPhoto(currentIndex);
}

function handlePrevClick() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = photos.length - 1;
  showPhoto(currentIndex);
}

document.querySelector("#next").addEventListener("click", handleNextClick);
document.querySelector("#prev").addEventListener("click", handlePrevClick);

//Extra challenge activity

 //Form to add new photo //
// const form = document.querySelector("#photoForm");

// form.addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent form refresh

//   const newPhoto = {
//     src: document.querySelector("#photoSrc").value,
//     alt: document.querySelector("#photoAlt").value
//   };

//   photos.push(newPhoto);       // Add photo to array
//   currentIndex = photos.length - 1; // Show the new photo
//   showPhoto(currentIndex);     // Update the gallery
//   form.reset();                // Reset form inputs
// });