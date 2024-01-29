const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  let fs = require("fs");
  fs.readFile("input.txt", (err, data) => {
    if (err) return console.error(err);
    console.log(data.toString());
  });
});
