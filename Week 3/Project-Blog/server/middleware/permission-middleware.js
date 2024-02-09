const Post = require("../models/Post");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const editPostAuthorizationMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const userId = decoded.userId;

  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).send("Post not found");
    }
    const user = await User.findById(userId);
    const userRole = user.role;

    if (userRole === "Admin" || userRole === "Editor") {
      return next();
    }

    if (userRole === "Contributor" && post.createdBy.toString() === userId) {
      return next();
    }

    return res.status(403).send("Permission denied");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = editPostAuthorizationMiddleware;
