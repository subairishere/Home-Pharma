const express = require("express");
const md = require("../controllers/medicine");
const { authToken } = require("../middleware/auth");
const { Vcreate, Vremove } = require("../validators/medicine");

const upload = require("../storage");
const router = express.Router();

router.get("/", md.get);
router.get("/:id", md.getSingle);
router.post("/", [authToken, upload.single("file"), Vcreate], md.create);
router.delete("/:id", [authToken, Vremove], md.remove);

module.exports = router;
