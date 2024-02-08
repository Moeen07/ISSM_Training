require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const expressLayout = require("express-ejs-layouts");
const methodOverride = require("method-override");

const app = express();

const connectDB = require("./server/config/db");
const mainRoutes = require("./server/routes/main");
const adminRoutes = require("./server/routes/admin");
const editorRoutes = require("./server/routes/editor");
const contributorRoutes = require("./server/routes/contributor");

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride("_method"));
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

app.use(express.static("public"));

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("THIS IS HOMEPAGE");
});

app.use("/", mainRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/editor", editorRoutes);
app.use("/api/v1/contributor", contributorRoutes);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
