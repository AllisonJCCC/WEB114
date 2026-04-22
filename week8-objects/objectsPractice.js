/* Allison Hanna  Movie Gallery */

"use strict";

//  Car object (default data)
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Silver"
};

// Access data
car.make; //Toyota
car.year; //2022

// Update data
car.year = 2023;

// Show in console
console.log(`My car is a ${car.year} ${car.make} ${car.model}`);

// Function using object
function showCar(car) {
  console.log(`This car is a ${car.color} ${car.make} ${car.model}.`);
  console.log(`Year: ${car.year}`);
}

showCar(car);

// Display on page
document.querySelector("#carName").textContent = `${car.make} ${car.model}`;
document.querySelector("#year").textContent = car.year;
document.querySelector("#color").textContent = car.color;

// ==========================
// FORM FUNCTIONALITY
// ==========================

const form = document.querySelector("#carForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  const makeInput = document.querySelector("#makeInput").value;
  const modelInput = document.querySelector("#modelInput").value;
  const yearInput = Number(document.querySelector("#yearInput").value);
  const colorInput = document.querySelector("#colorInput").value;

  // Create new object from form input
  const newCar = {
    make: makeInput,
    model: modelInput,
    year: yearInput,
    color: colorInput
  };

  // Update display on top with new info
  document.querySelector("#carName").textContent =  `${newCar.make} ${newCar.model}`;
  document.querySelector("#year").textContent = newCar.year;
  document.querySelector("#color").textContent = newCar.color;

  console.log("New Car:", newCar);
});