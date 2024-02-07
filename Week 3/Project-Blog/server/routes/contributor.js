const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth-middleware");

const {
  addPost,
  addPostPage,
  editPostPage,
  editPost,
  deletePost,
  dashboard,
} = require("../controllers/contributor-controller");

//------------Edit Post Page Route-----------------------------------------
router.get("/edit-post/:id", authMiddleware, editPostPage);

//------------Edit Post Route-----------------------------------------
router.put("/edit-post/:id", authMiddleware, editPost);

//------------Delete Post Route-----------------------------------------
router.delete("/delete-post/:id", authMiddleware, deletePost);

//------------Create new Post Page Route-----------------------------------------
router.get("/add-post", authMiddleware, addPostPage);

//------------Add a new Post-----------------------------------------
router.post("/add-post", authMiddleware, addPost);

//---------------Dashboard------------------------------------
router.get("/", authMiddleware, dashboard);

module.exports = router;
