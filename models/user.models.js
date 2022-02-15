
const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;
const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String,  required: true },
    email: { type: String , required: true, unique: true },
    password: { type: String, required: true },
    address: {
      type:ObjectId,
      ref: 'Address',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);