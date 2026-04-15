//Allison Hanna youRang js file

      // Connect to the button on the page

      let ring = document.querySelector("#ring-button");
      let greet = document.querySelector("#greet-button");

      //Connect to main-text element on the page
      const message = document.querySelector("#main-text");
      
      
      //Create functions to change the page information
      function youRang() {
        message.textContent = "You rang...";
        message.style.color = "purple";
        message.style.fontFamily = "Arial, sans-serif";
        message.style.fontSize = "32px";
        console.log("You rang...");
      }
      function greetFriends() {
       message.textContent = "Hello Friends!";
       message.style.color = "orange";
       console.log("Hello Friends!");
       //The font size and family were already set for the main-text element so no need to change. 
       // Only add if you want to change the size or family. 
      }
 
      //Event listeners
         ring.addEventListener("click", youRang);
         greet.addEventListener("click", greetFriends);    // Set named function youRang as the click event handler
   
 