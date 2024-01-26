class Person {
  walk() {
    console.log("Walking...");
  }
  run() {
    console.log("Running..");
  }
}

class Player extends Person {}

let rooney = new Player();

console.log(rooney.run());
