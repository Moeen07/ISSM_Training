function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

console.log(calculator(4, 5, sum));
