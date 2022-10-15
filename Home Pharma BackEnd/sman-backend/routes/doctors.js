const express = require("express");
const dr = require("../controllers/doctors");
const { authToken } = require("../middleware/auth");
const { Vcreate, Vremove } = require("../validators/doctor");

const upload = require("../storage");
const router = express.Router();

router.get("/", dr.get);
router.post("/", [authToken, upload.single("file"), Vcreate], dr.create);
router.delete("/:id", [authToken, Vremove], dr.remove);

module.exports = router;
