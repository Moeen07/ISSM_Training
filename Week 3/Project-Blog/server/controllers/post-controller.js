const Post = require("../models/Post");

//-------Get All Posts----------------------------------------------------------
const allPosts = async (req, res) => {
  try {
    let perPage = 10;
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
//---------------------------------------------------------------------------

//-------Get Single Post----------------------------------------------------------

const singlePost = async (req, res) => {
  try {
    let slug = req.params.id;
    const data = await Post.findById({ _id: slug });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};
//---------------------------------------------------------------------------

//-------------------------Search Post---------------------------------------

// const searchPost = async (req, res) => {
//   try {
//     let searchTerm = req.body.searchTerm;
//     const searchNoSpecialChar = searchTerm.replace(/[^a-zA-z0-9]/g, "");

//     const data = await Post.find({
//       $or: [
//         { title: { $regex: new RegExp(searchNoSpecialChar, "i") } },
//         { body: { $regex: new RegExp(searchNoSpecialChar, "i") } },
//       ],
//     });
//     res.send(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
//---------------------------------------------------------------------------

//---------------------------Add Post----------------------------------------

const addPost = async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      body: req.body.body,
      createdBy: req.userId,
    });
    await Post.create(newPost);
    res.send("Post added successfully");
  } catch (error) {
    console.log(error);
  }
};
//---------------------------Edit Post----------------------------------------

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
//-----------------------------------------------------------------------

//---------------------------Delete Post----------------------------------------

const deletePost = async (req, res) => {
  try {
    await Post.deleteOne({ _id: req.params.id });
    res.send("Post Deleted");
  } catch (error) {
    console.log(error);
  }
};
//-----------------------------------------------------------------------

module.exports = {
  allPosts,
  singlePost,
  addPost,
  editPost,
  deletePost,
};
