const { body } = require("express-validator");
const errorHandler = require("./errorHandler");

const contact = [
  body("name").not().isEmpty(),
  body("email"),
  body("subject").optional(),
  body("message"),
  errorHandler,
];

module.exports = contact;
