const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth-middleware");
const permissionMiddleware = require("../middleware/permission-middleware");
const {
  allPosts,
  singlePost,
  searchPost,
  addPost,
  editPost,
  deletePost,
} = require("../controllers/post-controller");

//------------Get All Posts-----------------------------------------
router.get("/", allPosts);

//-----------Get Single Post-------------------------------
router.get("/post/:id", singlePost);

//-------------------------------Search Post--------------------
router.post("/search", searchPost);

//------------Add a new Post-----------------------------------------
router.post("/add-post", authMiddleware, addPost);

//------------Edit Post-----------------------------------------
router.put("/edit-post/:id", permissionMiddleware, authMiddleware, editPost);

//------------Delete Post-----------------------------------------
router.delete(
  "/delete-post/:id",
  permissionMiddleware,
  authMiddleware,
  deletePost
);

module.exports = router;
