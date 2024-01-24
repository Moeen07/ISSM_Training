let correctNum = 8;

let guess = prompt("Guess the number");

while (guess !== correctNum) {
  guess = prompt("You guessed it wrong, try again!");
}
console.log("Correct Answer!");
