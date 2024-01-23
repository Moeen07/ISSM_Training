const fs = require("fs");

fs.readFile("Test.txt", "utf8", (err, data) => {
  console.log(err, data);
});

// const a = fs.readFileSync("Test.txt")
// console.log(a.toString)

console.log("Finished reading file"); // To demonstrate asynchronous nature of Node

fs.writeFile("Test.txt", "New data inserted", () => {
  console.log("Written to the file");
});

//use append file to add to the file
