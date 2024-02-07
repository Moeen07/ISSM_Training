const express = require("express");
const router = express.Router();

const {
  editPostPage,
  editPost,
  dashboard,
} = require("../controllers/editor-controller");
const authMiddleware = require("../middleware/auth-middleware");
//---------------Dashboard------------------------------------
router.get("/", authMiddleware, dashboard);

//------------Edit Post Page Route-----------------------------------------
router.get("/edit-post/:id", authMiddleware, editPostPage);

//------------Edit Post Route-----------------------------------------
router.put("/edit-post/:id", authMiddleware, editPost);

module.exports = router;
