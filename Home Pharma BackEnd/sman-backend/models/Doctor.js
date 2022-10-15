const mongoose = require("mongoose");

const DoctorScheme = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("doctor", DoctorScheme);
