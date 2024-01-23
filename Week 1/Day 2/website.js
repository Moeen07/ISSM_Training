const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1>This is the first response</h1>");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>This is the about response</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>Not Found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
