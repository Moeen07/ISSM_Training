const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const memberRouter = require("./routes/members");
//const logger = require("./middleware/logger");
const app = express();

//app.use(logger);

// Handle-bars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // to handle form submissions

// Set a static folder
app.use(express.static(path.join(__dirname, "public")));

// Members api routes
app.use("/api/members", memberRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}...`);
});
