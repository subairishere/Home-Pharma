const { body, param } = require("express-validator");
const errorHandler = require("./errorHandler");

const Vcreate = [
  body("name").not().isEmpty(),
  body("doctorNote").not().isEmpty(),
  body("type").not().isEmpty(),
  body("packType").not().isEmpty(),
  body("unitPerPackType").not().isEmpty(),
  body("size").not().isEmpty(),
  body("packSize").not().isEmpty(),
  body("price").not().isEmpty(),
  body("pricePerUnit").not().isEmpty(),
  body("discount").not().isEmpty(),
  body("brand").not().isEmpty(),
  body("tags").not().isEmpty(),
  body("category").not().isEmpty(),
  body("purpose").not().isEmpty(),
  body("howToUse").not().isEmpty(),
  body("expertAdvice").not().isEmpty(),
  body("primaryUses").not().isEmpty(),
  body("indications").not().isEmpty(),
  body("sideEffects").not().isEmpty(),
  body("warnings").not().isEmpty(),
  body("precautions").not().isEmpty(),
  body("contraindictions").not().isEmpty(),
  body("faqs").not().isEmpty(),
  errorHandler,
];

const Vremove = [param("id").not().isEmpty(), errorHandler];

module.exports = { Vcreate, Vremove };
