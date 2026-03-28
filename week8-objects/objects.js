 // Step 1: Create an initial person object with some default values
 let person = {
    name: "Tom",
    age: 26,
    city: "New York",
    favoriteColor: "Green"
  };

  // Step 2: Define a function to update the page with data from a person object
  function showPersonInfo(personObject) {
    // Use querySelector to select the element by ID and update its text content
    document.querySelector("#name").textContent = personObject.name;
    document.querySelector("#age").textContent = personObject.age;
    document.querySelector("#city").textContent = personObject.city;
    document.querySelector("#color").textContent = personObject.favoriteColor;
  }

  // Step 3: Call the function to display the default person when the page loads
  showPersonInfo(person);

  // Step 4: Add an event listener to the form to handle user input
  document.querySelector("#personForm").addEventListener("submit", function (e) {
    // Prevent the form from refreshing the page
    e.preventDefault();

    // Step 5: Create a new person object using values from the form
    const newPerson = {
      name: document.querySelector("#nameInput").value,
      age: document.querySelector("#ageInput").value,
      city: document.querySelector("#cityInput").value,
      favoriteColor: document.querySelector("#colorInput").value
    };

    // Step 6: Show the new person on the page by calling the display function
    showPersonInfo(newPerson);

    // Step 7: Reset the form so it's ready for a new entry
    document.querySelector("#personForm").reset();
  });