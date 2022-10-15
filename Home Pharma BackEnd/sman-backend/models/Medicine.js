const mongoose = require("mongoose");

const MedicineScheme = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  doctorNote: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  packType: {
    type: String,
    required: true,
  },
  unitPerPackType: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  packSize: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  pricePerUnit: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  howToUse: {
    type: String,
    required: true,
  },
  expertAdvice: {
    type: String,
    required: true,
  },
  primaryUses: {
    type: String,
    required: true,
  },
  indications: {
    type: String,
    required: true,
  },
  sideEffects: {
    type: String,
    required: true,
  },
  warnings: {
    type: String,
    required: true,
  },
  precautions: {
    type: String,
    required: true,
  },
  contraindictions: {
    type: String,
    required: true,
  },
  faqs: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("medicine", MedicineScheme);
