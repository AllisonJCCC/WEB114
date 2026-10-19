//Allison Hanna Conditional if/else if end of class activity

"use strict"

//function first
function fallColors() {
  document.querySelectorAll("h3").forEach(function(h3) {
    h3.style.color = "#98101c";
  });
  document.body.style.backgroundColor = "#ba5f14";
  document.body.style.color = "#482419";
  document.body.style.fontWeight = "bold";
  document.body.style.fontSize = "14px";
}

const season = prompt(`What is your favorite season?`);

if (season === null) {
  alert("You cancelled the prompt.");
}
else if 
  (season.trim() === ""){
  alert(`You left the box empty. Please type a season. Hit F5 or refresh the page.`);
}
else {
  const seasonGood = season.toLowerCase().trim();

  if (seasonGood === "fall") {
    fallColors();
  }
  else if (seasonGood === "winter") {
    // Add an alert message here for winter
  }
  else if (seasonGood === "spring") {
    // Add an alert message here for spring
  }
  else if (seasonGood === "summer") {
    // Add an alert message here for summer
  }
  else {
   alert(`Please enter a season. Referesh the page by hitting the F5 key or clicking the refresh button in the browser.`);
  }
}