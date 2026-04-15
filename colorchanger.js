//Allison Hanna color changing script 

//connect the button in the html page to a variable using the DOM
const changeColorButton = document.querySelector("#changeColorButton");
const title = document.querySelector("#title");

//function to do something on the page
function changeBackground() {
let randomColor = "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
    document.body.style.backgroundColor = randomColor;

    //change the title when the color changes
    title.textContent = "The color changed when I clicked the button";
  }

  //Event Listener
changeColorButton.addEventListener("click", changeBackground); //could go above function since the function is hoisted.



 // 1.What do I want to change?  --Select something
// Background color? Text? Image?

// 2.What code makes the change?-- Run a function (or two)to change the page
// Inside a function

// 3.How do I connect them?-- Listen for event
// addEventListener