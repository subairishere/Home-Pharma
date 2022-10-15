const mongoose = require("mongoose");

const PillSchema = {
  pillId: { type: mongoose.Types.ObjectId, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
};

const AddressSchema = {
  street: { type: String, default: "" },
  city: { type: String, default: "'" },
  house: { type: String, default: "" },
  zip: { type: Number, default: 0 },
};

const UserInfoSchema = {
  username: { type: String, required: true },
  email: { type: String, required: true },
};

const SaleScheme = mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now(),
  },
  pills: [
    {
      type: PillSchema,
      required: true,
    },
  ],
  userInfo: {
    type: UserInfoSchema,
    required: true,
  },
  drNote: {
    type: String,
    default: "",
  },
  address: {
    type: AddressSchema,
    required: true,
  },
  status: {
    type: String,
    default: "ordered",
  },
});

module.exports = mongoose.model("sale", SaleScheme);
