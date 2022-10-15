const express = require("express");
const router = express.Router();
const login = require("../controllers/auth");
const Vlogin = require("../validators/auth");

router.post("/login", Vlogin, login);

module.exports = router;
