const Post = require("../models/Post");

const homeRoute = async (req, res) => {
  try {
    let perPage = 2;
    let page = req.query.page || 1;

    const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    res.send(data);

    const count = await Post.countDocuments();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);
  } catch (error) {
    console.log(error);
  }
};

const singlePost = async (req, res) => {
  try {
    let slug = req.params.id;
    const data = await Post.findById({ _id: slug });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const searchPost = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-z0-9]/g, "");

    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { body: { $regex: new RegExp(searchNoSpecialChar, "i") } },
      ],
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { homeRoute, singlePost, searchPost };
