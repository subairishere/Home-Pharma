const { body, param } = require("express-validator");
const errorHandler = require("./errorHandler");

const Vcreate = [
  body("name").not().isEmpty(),
  body("specialization").not().isEmpty(),
  body("phone").not().isEmpty(),
  body("tags").not().isEmpty(),
  errorHandler,
];

const Vremove = [param("id").not().isEmpty(), errorHandler];

module.exports = { Vcreate, Vremove };
