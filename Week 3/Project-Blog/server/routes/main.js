const express = require("express");
const router = express.Router();

const {
  homeRoute,
  singlePost,
  searchPost,
  login,
  checkLogin,
  register,
} = require("../controllers/main-controller");

//------------Home Route---------------------------
router.get("/", homeRoute);

//-----------Get Single Post Route--------------------------------------
router.get("/post/:id", singlePost);

//-------------------------------Search Route-----------------------------------------------------
router.post("/search", searchPost);

//-----------Login Page route------------------------------------
router.get("/login", login);

//-----------Check login route------------------------------------
router.post("/login", checkLogin);

//-----------Register route-------------------------------------------
router.post("/register", register);

module.exports = router;
