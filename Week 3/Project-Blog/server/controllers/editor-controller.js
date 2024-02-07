const Post = require("../models/Post");

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

module.exports = { editPostPage, editPost };
