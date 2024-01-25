// All items have 10% off, change array to store final price

let price = [250, 645, 300, 900, 50];

for (let i = 0; i < price.length; i++) {
  price[i] = price[i] - (price[i] * 10) / 100;
}
console.log(price);
