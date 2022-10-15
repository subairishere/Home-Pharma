const { body, param } = require("express-validator");
const errorHandler = require("./errorHandler");

const VCreate = [
  body("username").not().isEmpty(),
  body("email").not().isEmpty,
  errorHandler,
];

module.exports = { VCreate };
