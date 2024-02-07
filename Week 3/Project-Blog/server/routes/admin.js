const express = require("express");
const router = express.Router();

const {
  login,
  checkLogin,
  register,
  editPostPage,
  editPost,
  deletePost,
  dashboard,
} = require("../controllers/admin-controller");

const { authMiddleware } = require("../middleware/auth-middleware");

//-----------Admin login route------------------------------------
router.get("/admin", login);

//-----------Admin Check login route------------------------------------
router.post("/admin", checkLogin);

//-----------Register route-------------------------------------------
router.post("/register", register);

//---------------Admin Dashboard------------------------------------
router.get("/dashboard", authMiddleware, dashboard);

//------------Edit Post Page Route-----------------------------------------
router.get("/edit-post/:id", authMiddleware, editPostPage);

//------------Edit Post Route-----------------------------------------
router.put("/edit-post/:id", authMiddleware, editPost);

//------------Delete Post Route-----------------------------------------
router.delete("/delete-post/:id", authMiddleware, deletePost);

//-------------Logout route-------------------------------------------------
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ msg: "Logout Successful" });
});

//--------------------------------------------------------------------------
module.exports = router;
