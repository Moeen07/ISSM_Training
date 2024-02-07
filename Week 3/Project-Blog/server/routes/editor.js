const express = require("express");
const router = express.Router();

const { editPostPage, editPost } = require("../controllers/editor-controller");

//---------------Dashboard------------------------------------
router.get("/dashboard", authMiddleware, dashboard);

//------------Edit Post Page Route-----------------------------------------
router.get("/edit-post/:id", authMiddleware, editPostPage);

//------------Edit Post Route-----------------------------------------
router.put("/edit-post/:id", authMiddleware, editPost);
