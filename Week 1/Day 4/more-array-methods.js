let arr = [1, 2, 3, 4, 5];

// map...creates new array with result of some operation..doesn't change the original array...the value its callback returns are used
// to form new array

// arr.map((val) => {
//   console.log(val);
// });

// let newArr = arr.map((val) => {
//   return val * 2;
// });
// console.log(newArr);

// Filter...creates a new array for elements that give true for a condition/filter

// let newArr = arr.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(newArr);

// Reduce...perform some operations on elements and return a single value
// return is stored in prev, curr is the current element of the array, initially prev is the first element and curr is seconc
let sum = arr.reduce((prev, curr) => {
  return prev + curr;
});
console.log(sum);
