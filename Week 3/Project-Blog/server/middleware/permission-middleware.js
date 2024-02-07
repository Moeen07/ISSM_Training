const User = require("../models/User");
const Post = require("../models/Post");

const editPostAuthorizationMiddleware = async (req, res, next) => {
  const postId = req.params.id;
  const userId = req.user.id;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).send("Post not found");
    }

    if (req.user.role === "Admin" || req.user.role === "Editor") {
      return next();
    }

    if (
      req.user.role === "Contributor" &&
      post.createdBy.toString() === userId
    ) {
      return next();
    }

    return res.status(403).send("Permission denied");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = editPostAuthorizationMiddleware;
