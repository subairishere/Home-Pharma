const express = require("express");
const { get, create, answer } = require("../controllers/ask");
const { authToken } = require("../middleware/auth");

const upload = require("../storage");
const router = express.Router();

router.get("/", [authToken], get);
router.post("/", [upload.single("file")], create);
router.put("/:id", [authToken], answer);

module.exports = router;
