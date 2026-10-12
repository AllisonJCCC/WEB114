//Allison Hanna

//Create some variables that you can subtotal (4 items)
//Create that subtotal
// Add the tax
// Calculate a total
// Display the items, the subtotal, the tax added, and the total. 

 //Create variables for 4 items
let shirt = 19.99;
let pants = 28.50;
let shoes = 15.00;
let socks = 6.00;

// Create the subtotal
let subtotal = shirt + pants + shoes + socks;

// Add the tax (10%)
let tax = subtotal * 0.1;

// Calculate the total
let total = subtotal + tax;

// Display the items, subtotal, tax, and total
console.log("Allison Hanna");
console.log("Purchase Receipt");

console.log("Shirt: $" + shirt.toFixed(2));
console.log("Pants: $" + pants.toFixed(2));
console.log("Shoes: $" + shoes.toFixed(2));
console.log("Socks: $" + socks.toFixed(2));

console.log("--------------------");
console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("Tax (10%): $" + tax.toFixed(2));
console.log("Total: $" + total.toFixed(2));