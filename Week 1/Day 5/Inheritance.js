class Person {
  constructor() {
    this.species = "homo sapiens";
  }
  walk() {
    console.log("Walking...");
  }
  run() {
    console.log("Running..");
  }
}

class Player extends Person {
  constructor(position) {
    super(); // to invoke parent class constructor
    this.position = position;
  }
  score() {
    console.log("Goal Scored!!!");
  }
}

let rooney = new Player("ST");

console.log(rooney.run());
console.log(rooney.position);
