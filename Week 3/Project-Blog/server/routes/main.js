const express = require("express");
const router = express.Router();

const {
  homeRoute,
  singlePost,
  searchPost,
} = require("../controllers/main-controller");

//------------Home Route---------------------------
router.get("/", homeRoute);

//-----------Get Single Post Route--------------------------------------
router.get("/post/:id", singlePost);

//-------------------------------Search Route-----------------------------------------------------
router.post("/search", searchPost);

//------------------------------------------------------------------------------------------------

module.exports = router;
