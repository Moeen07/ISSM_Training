class Person {
  constructor(name) {
    this.species = "homo sapiens";
    this.name = name;
  }
  walk() {
    console.log("Walking...");
  }
  run() {
    console.log("Running..");
  }
}

class Player extends Person {
  constructor(position, name) {
    super(name); // to invoke parent class constructor
    this.position = position;
  }
  score() {
    console.log("Goal Scored!!!");
  }
}

let rooney = new Player("ST", "Rooney");

console.log(rooney.run());
console.log(rooney.position);
console.log(rooney.name);
