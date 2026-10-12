// Allison Hanna data types work

// declare 5 variables - 2 strings (name, favColor, hobby), 2 numbers(age, favoriteNumber, salary)
// 1 boolean (are you a morning person?)

//Create a console.log of 3 sentences about yourself. 

"use strict";

let myName = "Allison";
let favColor = "purple";
let salary = 80000;
let formattedSalary = salary.toLocaleString();
let myAge = 36;
let morningPerson = true;

console.log(`My name is ${myName} and my favorite color is ${favColor}.`)

console.log(`I am ${myAge} years old and I would love to make $${salary}. Am I a morning person? ${morningPerson}- I am.`);


//Data type conversions
console.log(myAge + 10); //46
console.log(5 + "five"); //5five
console.log( 2 + "3"); //23
console.log("3" + 2);//32

//Implicit coercion can convert a string into a number when you use operators other than +, such as subtraction:
let result = '10' - 5;//5
console.log(result);        // 5
console.log(typeof result); // "number"

//Here, JavaScript automatically converts the string '10' into the number 10 
// because subtraction is a numeric operation.

/*Remember this rule:

10 + '5' → '105' (string concatenation)

'10' - 5 → 5 (implicit conversion to a number)

10 + Number('5') → 15 (explicit conversion to a number)
console.log(parseFloat("abc123"));       // Output: NaN (starts with a)
console.log (Number(myAge) + 10); // explicit conversion to a number
*/

let weirdNumber = '123.45';
weirdNumber = parseInt(weirdNumber);
console.log(weirdNumber);

//Floats use decimals
weirdNumber = 3.141516;
weirdNumber =parseFloat(weirdNumber);
console.log(weirdNumber.toFixed(2));


