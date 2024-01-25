let num = 5;
let arr = [];
for (let i = 0; i < num; i++) {
  arr[i] = i + 1;
}
console.log(arr);

const sum = arr.reduce((prev, curr) => {
  return prev + curr;
});

const product = arr.reduce((prev, curr) => {
  return prev * curr;
});

console.log(`Sum is ${sum}`);
console.log(`Product is ${product}`);
