 //Allison Hanna objects 

 "use strict"
  
 // Step 1: Create an initial person object with some default values
 let person = {
    fname: 
    lname: 
    age: 
    city: 
    favoriteColor:
  };

// ==========================
// 2. SELECT ELEMENTS
// ==========================

// These connect JavaScript to HTML elements

// Form input fields (what the user types into)
const fnameForm = document.querySelector("#fnameInput");


// These are DISPLAY elements (where data shows on the page)
const ageForm = document.querySelector("#age");

// Message and greeting area (for feedback to user)


// The form element itself
const form = document.querySelector("#personForm");


// ==========================
// 3. DISPLAY FUNCTION
// ==========================

// This function takes a person object and displays it on the page at the top
function showPersonInfo(personObject){
  // Combine first and last name into one line 
  nameDisplay.textContent = `${personObject.fname} ${personObject.lname}`;

}

  // ======== Step 4: Call the function to display the default person when the page loads
// Runs the function when the page loads
// This displays the original "Andrew Gregor" info
  showPersonInfo(person);

  // ========= Step 5: Add an event listener to the form to handle user input
 
 
  submitForm.preventDefault(); // stop page from refreshing so the info can be kept
  

  // ========= Step 6: Create a new person object using values from the form

  // Create a new object using the user's input
  const newPerson = {
    fname: fnameForm.value,           // Get first name from input
    
  };

   // ===== Step 7: Update the info on the page by calling the display function
  
    
    // ==========================
  // 8. MESSAGE + GREETING
  // ==========================

    // Display confirmation message

  message.style.backgroundColor = "#94eb9b";

  // Display a personalized greeting
 


  
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
  });