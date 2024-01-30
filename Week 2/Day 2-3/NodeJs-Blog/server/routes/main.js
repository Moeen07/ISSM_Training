const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//------------Home Route---------------------------
router.get("/", async (req, res) => {
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
});
//------------About Route---------------------------
router.get("/about", (req, res) => {
  res.render("about");
});

//------------Contact Route---------------------------
router.get("/contact", (req, res) => {
  res.render("contact");
});

//-----------Get Single Post Route-------------------------
router.get("/post/:id", async (req, res) => {
  try {
    const locals = {
      title: "NodeJs Blog",
      description: "Simple Blog created with NodeJs,Express and MongoDB",
    };
    let slug = req.params.id;
    const data = await Post.findById({ _id: slug });
    res.render("post", { locals, data });
  } catch (error) {
    console.log(error);
  }
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
