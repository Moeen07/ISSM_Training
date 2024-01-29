const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return console.error(err);
  //     res.end(data.toString());
  //   });
  const rStream = fs.createReadStream("input.txt");
  rStream.on("data", (chunkData) => {
    res.write(chunkData);
  });
  rStream.on("end", () => {
    res.end();
  });
  rStream.on("error", () => {
    res.end("file not found");
  });
});

server.listen(3000);
