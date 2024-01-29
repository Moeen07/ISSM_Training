const express = require("express");
const path = require("path");
const memberRouter = require("./routes/members");
//const logger = require("./middleware/logger");
const app = express();

//app.use(logger);

// Set a static folder
app.use(express.static(path.join(__dirname, "public")));

// Members api routes
app.use("/api/members", memberRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}...`);
});
