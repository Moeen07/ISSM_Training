const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//------------Home Route---------------------------
router.get("/", (req, res) => {
  const locals = {
    title: "NodeJS-Blog",
    description: "Simple blog",
  };
  res.render("index", { locals });

  //------------About Route---------------------------
});
router.get("/about", (req, res) => {
  res.render("about");
});

//------------Contact Route---------------------------
router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;

//-------Sample Dataset------------------------------------------------

//function insertPostData() {
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
// //insertPostData();
