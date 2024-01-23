const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("EggsBoiled", () => {
  console.log("Turn off the stove");
  setTimeout(() => {
    console.log("Reminder to turn off the stove");
  }, 3000);
});

console.log("Script is running");

myEmitter.emit("EggsBoiled");
