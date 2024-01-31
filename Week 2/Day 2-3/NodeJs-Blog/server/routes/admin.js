const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const adminLayout = "../views/layouts/admin";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//----------Auth Middleware--------------------------
const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
};

//------------------------------------------------------

//-----------Admin login route------------------------------------
router.get("/admin", async (req, res) => {
  try {
    const locals = {
      title: "Admin",
      description: "Pages for admin",
    };
    res.render("admin/index", { locals, layout: adminLayout });
  } catch (error) {
    console.log(error);
  }
});
//---------------------------------------------------------------------

//-----------Admin Check login route------------------------------------
router.post("/admin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ msg: "Invalid Username" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ msg: "Invalid Password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
});
//---------------------------------------------------------------------

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({ msg: "User already exists" });
    }
    res.status(500).json({ msg: "Internal server error" });
  }
});

//---------------Admin Dashboard------------------------------------
router.get("/dashboard", authMiddleware, async (req, res) => {
  try {
    const data = await Post.find();
    res.render("admin/dashboard", { data, layout: adminLayout });
  } catch (error) {
    console.log(error);
  }
});
//------------------------------------------------------------------

//------------Create new Post Page Route-----------------------------------------
router.get("/add-post", authMiddleware, async (req, res) => {
  try {
    const locals = {
      title: "Add a Post",
      description: "Page to add a new post",
    };
    //const data = await Post.find();
    res.render("admin/add-post", { locals, layout: adminLayout });
  } catch (error) {
    console.log(error);
  }
});
//--------------------------------------------------------------------------

//------------Add a new Post-----------------------------------------
router.post("/add-post", authMiddleware, async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      body: req.body.body,
    });
    await Post.create(newPost);
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
});
//--------------------------------------------------------------------------

module.exports = router;
