"use strict";

let totalCrates = prompt("How many crates need to be scanned today?");

if (totalCrates === null) {
  console.log("Cargo scan canceled.");
} else 
    totalCrates = Number(totalCrates);
  if (isNaN(totalCrates) || totalCrates <= 0) {
    console.log("Invalid number of crates. Scan canceled. Please enter a positive number.");
  } else {

  for (let crate = 1; crate <= totalCrates; crate++) {

    if (crate % 5 === 0) {
      console.log("Crate " + crate + ": Handle with care");

    } else if (crate % 2 === 0) {
      console.log("Crate " + crate + ": Load crate");

    } else {
      console.log("Crate " + crate + ": Inspect crate");
    }

  }

}