import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    salePrice: Number,
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
