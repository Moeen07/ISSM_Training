const Post = require("../models/Post");

const addPostPage = async (req, res) => {
  try {
    //const data = await Post.find();
  } catch (error) {
    console.log(error);
  }
};

const addPost = async (req, res) => {
  try {
    await Post.create(newPost);
  } catch (error) {
    console.log(error);
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
  editPostPage,
  editPost,
  deletePost,
  dashboard,
  addPost,
  addPostPage,
};
