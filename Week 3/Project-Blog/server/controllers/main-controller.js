const Post = require("../models/Post");
const User = require("../models/User");
const adminLayout = "../views/layouts/admin";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const homeRoute = async (req, res) => {
  try {
    const locals = {
      title: "NodeJS-Blog",
      description: "Simple blog",
    };
    let perPage = 2;
    let page = req.query.page || 1;

    const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await Post.countDocuments();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render("index", {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
    });
  } catch (error) {
    console.log(error);
  }
};

const singlePost = async (req, res) => {
  try {
    let slug = req.params.id;
    const data = await Post.findById({ _id: slug });
    const locals = {
      title: data.title,
      description: data.body,
    };
    res.render("post", { locals, data });
  } catch (error) {
    console.log(error);
  }
};

const searchPost = async (req, res) => {
  try {
    const locals = {
      title: "Search",
      description: "...",
    };
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-z0-9]/g, "");

    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { body: { $regex: new RegExp(searchNoSpecialChar, "i") } },
      ],
    });
    res.render("search", { locals, data });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    res.render("admin/index", { layout: adminLayout });
  } catch (error) {
    console.log(error);
  }
};

const checkLogin = async (req, res) => {
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
    res.send("Login Confirmed");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      password: hashedPassword,
      role,
    });
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({ msg: "User already exists" });
    }
    res.status(500).json({ msg: "Internal server error" });
  }
};

// function insertPostData() {
//   Post.insertMany([
//     {
//       title: "Building a Blog",
//       body: "This is the body text",
//     },
//     {
//       title: "Second Blog",
//       body: "Text of second blog",
//     },
//     {
//       title: "Third Blog",
//       body: "Here is the body for third blog",
//     },
//     {
//       title: "Fourth Blog",
//       body: "This is the body for the fourth blog",
//     },
//     {
//       title: "Fifth Blog",
//       body: "Body text for fifth blog",
//     },
//   ]);
// }
// insertPostData();

module.exports = {
  homeRoute,
  singlePost,
  searchPost,
  login,
  checkLogin,
  register,
};