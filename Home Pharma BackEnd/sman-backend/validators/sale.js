const { body, param } = require("express-validator");
const errorHandler = require("./errorHandler");

const Vcreate = [
  body("pills"),
  body("address").optional(),
  body("userInfo"),
  errorHandler,
];

const Vupdate = [param("id"), body("status"), errorHandler];

const VgetSingle = [param("id").not().isEmpty(), errorHandler];

module.exports = { Vcreate, VgetSingle, Vupdate };
