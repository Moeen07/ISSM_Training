class ToyotaCar {
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }

  setType(type) {
    // this means the object for which this function will be called
    this.typeName = type;
  }
}

let prius = new ToyotaCar(); // new invokes the constructor
let corolla = new ToyotaCar();

prius.setType("Hybrid");
console.log(prius.typeName);

class HondaCar {
  constructor(type) {
    console.log("Creating new Honda vehicle");
    this.type = type;
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
}
// if we want to do something with our object at the time of its creation/intialization then we can use constructor
let civic = new HondaCar("Civic");
