const mongoose = require("mongoose");

const AskScheme = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("ask", AskScheme);
