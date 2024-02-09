const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth-middleware");
const permissionMiddleware = require("../middleware/permission-middleware");
const deleteMiddleware = require("../middleware/delete-permission-middleware");
const {
  allPosts,
  singlePost,
  addPost,
  editPost,
  deletePost,
} = require("../controllers/post-controller");

//------------Get All Posts-----------------------------------------
router.get("/", allPosts);

//-----------Get Single Post----------------------------------------
router.get("/:id", singlePost);

//-------------------------------Search Post------------------------
// router.post("/search", searchPost);

//------------Add a new Post-----------------------------------------
router.post("/add-post", authMiddleware, addPost);

//------------Edit Post-----------------------------------------------
router.put("/:id", permissionMiddleware, authMiddleware, editPost);

//------------Delete Post-----------------------------------------
router.delete("/:id", deleteMiddleware, authMiddleware, deletePost);

module.exports = router;
