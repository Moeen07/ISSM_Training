require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo"); // Store for session
const cors = require("cors"); // Cross origin Resource sharing
const app = express();

const connectDB = require("./server/config/db");

const userRoutes = require("./server/routes/user");
const postRoutes = require("./server/routes/post");

connectDB();

app.use(express.json());
app.use(cookieParser()); // To access request.cookies (for authentication middleware)
app.use(cors()); // Allows front-end to call backend even if it is hosted on a different domain

const PORT = process.env.PORT || 5000;

app.use(
  session({
    secret: process.env.SESSION_SECRET || "keyboard cat", // Used to sign session ID
    resave: false, // set to false: will not save session again unless modified
    saveUninitialized: true, // will create store even if there is no data at first
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
