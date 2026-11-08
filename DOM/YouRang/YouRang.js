//Allison Hanna YouRang js file

      // Connect to the button on the page

      let ring = document.querySelector("#ringButton");
      let greet = document.querySelector("#greetButton");
      let reset = document.querySelector("#resetButton");

      //Connect to mainText element on the page
      const message = document.querySelector("#mainText");
      const page = document.querySelector("body");
     
      
      
      //Create functions to change the page information
      function youRang() {
        message.textContent = "You rang...";
        message.style.color = "purple";
        message.style.fontFamily = "Arial, sans-serif";
        message.style.fontSize = "32px";
        page.style.backgroundColor = "#AFEEEE";
        console.log("You rang...");
      }
      function greetFriends() {
       message.textContent = "Hello Friends!";
       message.style.color = "orange";
       page.style.backgroundColor = "#5E7380";
       message.style.fontSize = "36px";
       console.log("Hello Friends!");
       //The font size and family were already set for the main-text element so no need to change. 
       // Only add if you want to change the size
      }
      function resetPage() {
        message.textContent = "Welcome!";
        message.style.color = "#000";
        //An empty string removes the inline style JavaScript applied and allows the original CSS stylesheet to control that property.
        message.style.fontSize = "";
        message.style.fontFamily = ""; 
        page.style.backgroundColor = "#fff";
        console.log("Page reset!");
    }
 
      //Event listeners
         ring.addEventListener("click", youRang);
         greet.addEventListener("click", greetFriends); 
         reset.addEventListener("click", resetPage );  
   
 