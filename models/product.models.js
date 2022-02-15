const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    category: {
      type:ObjectId,
      ref: 'Category',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
