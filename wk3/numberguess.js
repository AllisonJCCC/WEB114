// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user for their guess
let guess = prompt("Guess a number between 1 and 10:");

// Convert the guess to a number
guess = parseInt(guess);

// Check if the guess is correct
if (guess === randomNumber) {
  alert("You guessed it!");
} 
else if (guess > randomNumber) {
 alert("Too high! Try a smaller number.");
}
else if (guess < randomNumber) {
 alert("Too low! Try a bigger number.");
}
else {
  alert(`Wrong guess. Try again. 
    The number was ${randomNumber}`);
}
