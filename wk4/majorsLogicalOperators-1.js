//Allison Hanna
//03/15/24
// Practice if else and logical operators

// Prompt user for their major
const major = prompt("What is your major?").toLowerCase();

// Check the major and display a message using if statements with logical operators
if ((major === "computer science" || major === "software development"))
    {
        console.log("Your major involves a lot of problem-solving and technical skills!");
     }
     else if (major.includes("arts") || major === "english") 
     {
      console.log("Your major focuses on creativity, communication, and critical thinking!");
     } 
     else
      {
        console.log("That's an interesting major! I hope you enjoy it.");
      }

let desiredSalary = prompt("What is your desired salary?");

if (desiredSalary > 50000 && major === "computer science"  || major === "software development")
    {
        console.log("You have a technical mind!");
    }