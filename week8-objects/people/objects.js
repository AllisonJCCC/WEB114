 //Allison Hanna objects 

 "use strict"
  
 // Step 1: Create an initial person object with some default values
 let person = {
    fname: "Andrew",
    lname: "Gregor",
    age: 26,
    city: "Kansas City",
    favoriteColor: "Green"
  };

// ==========================
// 2. SELECT ELEMENTS
// ==========================

// These connect JavaScript to HTML elements

// Form input fields (what the user types into)
const fnameForm = document.querySelector("#fnameInput");
const lnameForm = document.querySelector("#lnameInput");
const ageInput = document.querySelector("#ageInput");
const cityInput = document.querySelector("#cityInput");
const favcolor =document.querySelector("#colorInput");

// These are DISPLAY elements (where data shows on the page)
const ageForm = document.querySelector("#age");
const cityForm = document.querySelector("#city");
const colorForm = document.querySelector("#color");
const nameDisplay = document.querySelector("#name");

// Message area (for feedback to user)
const message = document.querySelector("#message");
const greeting = document.querySelector("#greeting");

// The form element itself
const form = document.querySelector("#personForm");


// ==========================
// 3. DISPLAY FUNCTION
// ==========================

// This function takes a person object and displays it on the page at the top
function showPersonInfo(personObject){
  // Combine first and last name into one line 
  nameDisplay.textContent = `${personObject.fname} ${personObject.lname}`;
  age.textContent = personObject.age;
  city.textContent = personObject.city;
  color.textContent = personObject.favoriteColor;
}

  // ======== Step 4: Call the function to display the default person when the page loads
// Runs the function when the page loads
// This displays the original "Andrew Gregor" info
  showPersonInfo(person);

  // ========= Step 5: Add an event listener to the form to handle user input
 
  form.addEventListener("submit", function(submitForm) {
  submitForm.preventDefault(); // stop page from refreshing so the info can be kept
  

  // ========= Step 6: Create a new person object using values from the form

  // Create a new object using the user's input
  const newPerson = {
    fname: fnameForm.value,           // Get first name from input
    lname: lnameForm.value,           // Get last name from input
    age: Number(ageInput.value), // Get age
    city: cityInput.value, // Get city
    favoriteColor: colorInput.value // Get color
  };

   // ===== Step 7: Update the info on the page by calling the display function
    showPersonInfo(newPerson);
    
    // ==========================
  // 8. MESSAGE + GREETING
  // ==========================

    // Display confirmation message
  message.textContent = "A new person has been added!";
  message.style.backgroundColor = "#94eb9b";

  // Display a personalized greeting
 greeting.textContent = `Hello! My name is ${newPerson.fname} ${newPerson.lname} and I live in ${newPerson.city}. My favorite color is ${newPerson.favoriteColor}`;
  greeting.style.backgroundColor = "#e5e5b5";


  
   // ==========================
  // 9. AGE CHECK
  // ==========================
  if (newPerson.age < 18) {
    alert("This person is a minor.");
  } else {
    alert("This person is an adult.");
  }

    // Step 10: Reset the form so it's ready for a new entry
     /* Reset the form */
    form.reset();
  })