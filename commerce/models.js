import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    salePrice: Number,
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: String
  },
  { timestamps: true }
);

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
)

export const Product = mongoose.model("Product", productSchema);

export const User = mongoose.model("User", userSchema)
