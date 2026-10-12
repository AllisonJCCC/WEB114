// Get the hourly wage from the user
let hourlyWage = prompt("Enter your hourly wage:");
let confirmWage = confirm(`You get paid $${hourlyWage} an hour. Is that correct? `)
let hoursWorked = prompt(`How many hours did you work this week?`)
let confirmHours = confirm(`You worked ${hoursWorked} hours this week. Is that correct? `)

// Convert the input to a number
hourlyWage = Number(hourlyWage);

// Calculate the weekly earnings 
let weeklyEarnings = hourlyWage * hoursWorked;

//Subtract taxes
let taxes = .1 * weeklyEarnings;
let finalWeeklyEarnings = weeklyEarnings - taxes;

//Display the result

let myAnswer = alert(`Your weekly earnings are: $${finalWeeklyEarnings.toFixed(2)}`);


console.log(`The hours worked were:${hoursWorked}`);
console.log(`The hourly wage was: ${hourlyWage}`);


