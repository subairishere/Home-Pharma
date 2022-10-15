const { body } = require("express-validator");
const errorHandler = require("./errorHandler");

const login = [
  body("username").not().isEmpty(),
  body("password").isLength({ min: 8 }),
  errorHandler,
];

module.exports = login;
