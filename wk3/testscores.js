// Test scores using comparisons  Allison Hanna
// Computer programs have many occasions where code will only run if the condition are met.

"use strict"

// They are all BOOLEAN data types  
// There are only two boolean values---true and false. 
//JavaScript is case-sensitive, so True and False are not valid boolean values.

// There are 3 types of comparisons 
// Relational  ---  Loose --- Strict

//RELATIONAL 

let Allison = 95;   // assignment operator
let Lori = 62;

let compareAllison = Allison > Lori;  // comparison operator
let compareLori = Allison < Lori;

console.log("Is Allison's score greater than Lori? " + compareAllison);
console.log(`Is Allison's score greater than Lori? ${compareAllison}`);  // backticks example

console.log ("Is Allison Less than Lori? " + compareLori);

console.log ("-------------------------")

 compareAllison = Allison >= Lori;
 compareLori = Allison <= Lori;

console.log("Is Allison greater than or equal to Lori? " + compareAllison);
console.log(`Is Allison greater than or equal to Lori? ${compareAllison}`);  // backticks example

console.log ("Is Allison Less than or equal to Lori? " + compareLori);

let notEqual= Allison != Lori;
console.log("Is Allison's score not equal to Lori's?" + notEqual );
console.log(`Is Allison's score not equal to Lori's score? ${notEqual}`);

console.log ("-------------------------")

// Not equal to !=
console.log(`Is 7 not equal to 5?  ${7 != 5} `);

console.log("Is dog not equal to cat? " + ('dog' != 'cat'));

console.log(7 != 7);

console.log("dog" != "Dog");

console.log ("---------------------------------------")
//The equality operator, ==
//compares two values and returns true or false depending on whether the values are equal.
// Math uses =.  WE are comparing not doing Math!  ==

console.log("Is 5 equal to 5? " + (5 == "5"));
console.log("Is 5 equal to '5'? " + (5 === "5"));

// What about this one? 
console.log(true == "true"); //

//comparing strings
console.log("Is dog not equal to cat? " + ('dog' != 'cat'));

// compareing strings are case sensitive... DONE is not done and not Done
console.log ("---------------------")
let done = "done";
let DONE = "DONE";

let caseSensitive = done == DONE;
// Extra credit deals with this topic


console.log("Is done the same as DONE? " + caseSensitive);

// so try this---Create two words to compare. Console log the result


let englishgrade = 87;
let sciencegrade = 76;

// compare those and console.log the result




