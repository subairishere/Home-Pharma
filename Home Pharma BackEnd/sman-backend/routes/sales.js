const express = require("express");
const sl = require("../controllers/sales");
const { authToken } = require("../middleware/auth");
const { Vcreate, VgetSingle, Vupdate } = require("../validators/sale");

const upload = require("../storage");
const router = express.Router();

router.get("/", [authToken], sl.get);
router.get("/:id", [VgetSingle, authToken], sl.getSingle);
router.post("/", [Vcreate, upload.single("file")], sl.create);
router.put("/:id", [authToken, Vupdate], sl.update);

module.exports = router;
