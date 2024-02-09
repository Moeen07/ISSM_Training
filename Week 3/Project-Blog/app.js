require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const app = express();

const connectDB = require("./server/config/db");

const userRoutes = require("./server/routes/user");
const postRoutes = require("./server/routes/post");

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = 5000 || process.env.PORT;

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

//app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("THIS IS HOMEPAGE");
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/post", postRoutes);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
