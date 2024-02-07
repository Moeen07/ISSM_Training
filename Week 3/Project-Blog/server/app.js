require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const app = express();

const connectDB = require("../server/config/db");

connectDB();

app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
