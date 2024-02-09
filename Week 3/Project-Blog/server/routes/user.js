const express = require("express");
const router = express.Router();

const { login, register, logout } = require("../controllers/user-controller");

//--------------------------Login------------------------------------
router.post("/login", login);

//--------------------------Register---------------------------------
router.post("/register", register);

//--------------------------Logout-----------------------------------
router.get("/logout", logout);

module.exports = router;
