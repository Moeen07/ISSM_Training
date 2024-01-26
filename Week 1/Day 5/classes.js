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

let prius = new ToyotaCar();
let corolla = new ToyotaCar();

prius.setType("Hybrid");
console.log(prius.typeName);
