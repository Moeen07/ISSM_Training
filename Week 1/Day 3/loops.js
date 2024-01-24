// for (let i = 0; i < 5; i++) {
//   console.log("My name is Moonis");
// }

// let sum = 0;
// // Pre condition(while)
// while (sum <= 20) {
//   sum += 3;
//   console.log("The sum is ", sum);
// }

// let total = 0;
// // Post Condition(do-while)
// do {
//   total += 4;
//   console.log("The total is ", total);
// } while (total < 15);

// // For - of
// let title = "Learn Node";
// for (let val of title) {
//   console.log(val);
// }

// let evenNumbers = [2, 4, 6, 8];
// let oddNumbers = [];
// i = 0;
// for (let val of evenNumbers) {
//   val += 1;
//   oddNumbers[i] = val;
//   i++;
// }
// for (let i = 0; i < oddNumbers.length; i++) {
//   console.log(oddNumbers[i]);
// }

// For - in (Usually used for objects)

const player = {
  name: "Rooney",
  position: "ST",
  age: 40,
  goals: 300,
  isRetire: true,
};

for (let i in player) {
  console.log(player[i]);
}
