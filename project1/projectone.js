//Model for Project one
//10-27-2024

/*
	4. Add a second script that declares 2 variables:  a constant named myName assigned to your actual name 
	as a string, and a variable named mySalary assigned to any number that you would like as a salary.
	Use console.log and the variable names to log out a phrase similar to the following:  My name is Lisa 
	and my salary is 100000. 

	5. Below the first console.log, reassign the mySalary variable to a 180000.  Add another 
	console.log similar to the following:  My name is Allison and my new salary is 180000.

	6. Create a Boolean variable named morningPerson and assign it to true or false depending 
	on whether you are a morning person or not.

	7. Add three console.log() statements to determine the data type of the myName, mySalary, 
	and morningPerson variables. An example is: console.log(typeof(myName));

	8. console.log each of these expressions --Make sure you understand these!  The + operator 
	is the tricky since it has two jobs.
	
	9. In the script you created in step 4, add the following statements.  After these variable declarations, 
	create statements that will console.log the value of c and d.

	10. In the script you created in step 4, add the following statements. After these variable declarations, 
	create statements that will console.log the value of x and y. This is good and important stuff!
*/
"use strict";

//Step 4
const myName = 'Jennifer';
let mySalary = 100000;

console.log('My name is ' + myName + ' and my salary is ' + mySalary);

//Step 5
mySalary = 180000;
console.log('My name is ' + myName + ' and my new salary is ' + mySalary); 

//Step 6
let morningPerson = true;

//Step 7
console.log( typeof(myName) );
console.log( typeof(mySalary) );
console.log( typeof(morningPerson) );

//Step 8
console.log(' ' + 1 + 0 );
console.log(' ' - 1 + 0 );
console.log(true + false );
console.log('This statement did math since a number is first: ' + 6 / "3" );
console.log('This statement did not do math since a string is first: ' +  "2" * "3" );
console.log('This statement did not do math since a string is first: ' + 4 + 5 + "px" );
console.log('This concatenates the dollar sign to the numbers ' + '$' + 4 + 5 );
console.log( '4' - 2 );
console.log('This gives an NaN since there is text with the minus sign ' + '4px' - 2 );
console.log(7 / 0 );
console.log('This does not do math since the 9 is text. ' + '  -9 '  + 5 );
console.log("  -9  " - 5 );
console.log(null + 1 );
console.log(undefined + 1);

let x = 5;
let y = 1 + (x *= 2);

console.log(x); // x is assigned to 10 because x was reassigned using the short hand  x = 5 * 2
console.log(y); // y is assigned to 11 because 10 + 1 = 11

//Step 9
let a = 5, b = 5; 
let c = ++a;   
let d = b++;

console.log(c);
console.log(d);

//Step 10
x = 5; 
y = 1 + (x *= 2);

console.log(x);
console.log(y);