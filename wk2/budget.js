"use strict";
let income = 10000;
let rent = 1000;
let groceries = 100;
let utilities = 150;
let totalExpenses;
let remainingMoney;
let percentRent;
let percentGroceries;

totalExpenses = rent + groceries + utilities;
remainingMoney = income - totalExpenses;
percentRent = (rent / income) * 100;
percentGroceries = (groceries / income) * 100;

console.log(
  "The total income was: " +
    income.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
);

console.log(
  "The rent amount was: " +
    rent.toLocaleString("en-US", { style: "currency", currency: "USD" })
);

console.log(
  "The grocery total was: " +
    groceries.toLocaleString("en-US", { style: "currency", currency: "USD" })
);

//
//console.log("The percent spent on rent is: " + percentRent.toFixed(0) + "%");
console.log(`The percent spent on rent is: ${percentRent.toFixed(0)}%`);
//console.log("The percent spent on rent is:", percentRent.toFixed(0), "%");
// this is a comma separated list not a concatenator

//console.log(`------------------`);
/* 
console.log(
  "The percent spent on groceries was: " + percentGroceries.toFixed(0) + "%"
);
*/

console.log(
  `The percent spent on groceries was: ${percentGroceries.toFixed(0)}%`
);
/*
console.log(
  "The percent spent on groceries are:",
  percentGroceries.toFixed(0),
  "%"
);

// this is a comma separated list not a concatenator
*/
