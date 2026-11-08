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

      //1. Create a greetFriends function here and set properties for the message and page.


       //The font family was already set in the YouRang function so no need to change. 
       // Only add if you want to change the font family
      
      
    //2. Create a reset function that resets the colors back to the default settings

 
   //3. Event listeners -- uncomment each event listener when you complete the functions
   
         ring.addEventListener("click", youRang);
        //  greet.addEventListener("click", greetFriends); 
        //  reset.addEventListener("click", resetPage );  
   
 