//Allison Hanna 

// If practice activity together


// Ask the user for their age
let age = parseInt(prompt("Enter your age: "));

// Get the current year
let currentYear = new Date().getFullYear();

// Check if the user is old enough to vote (18+)
if (age >= 18) {
  alert("You are eligible to vote!");
} else {
  let yearsToVote = 18 - age;
  let eligibleYear = currentYear + yearsToVote;

  // Use singular or plural form correctly  //ternary operator
  //compare to if
  let yearText = yearsToVote === 1 ? "year" : "years";

  alert(`You will be eligible to vote in ${yearsToVote} ${yearText}, in the year ${eligibleYear}.`);
}
