const Post = require("../models/Post");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    res.send("This is login page");
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

const editPostPage = async (req, res) => {
  try {
    const data = await Post.findById(req.params.id);
    res.send("This is edit post page");
  } catch (error) {
    console.log(error);
  }
};

const editPost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      body: req.body.body,
      updatedAt: Date.now(),
    });
    res.send("Post edited successfully");
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id });
    res.send("Post Deleted");
  } catch (error) {
    console.log(error);
  }
};

const dashboard = async (req, res) => {
  try {
    const data = await Post.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
  checkLogin,
  register,
  editPostPage,
  editPost,
  deletePost,
  dashboard,
};
