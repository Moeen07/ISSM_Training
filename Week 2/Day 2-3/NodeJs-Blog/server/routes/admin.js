const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const User = require("../models/User");
const adminLayout = "../views/layouts/admin";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

    res.redirect("/admin");
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

module.exports = router;
