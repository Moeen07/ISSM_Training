require("dotenv").config();
const mainRoutes = require("./server/routes/main");
const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.static("public"));

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use("/", mainRoutes);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});