import express from "express";
import mongoose from "mongoose";
import { Product } from "./models.js";

const app = express();

app.use("/assets", express.static("./assets"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
// to change view directory: app.set('views', ...)

app.get("/", (req, res) => {
  res.redirect("/products");
});

app.get("/products", async (req, res) => {
  const products = await Product.find();

  res.render("products", {
    title: "Product List",
    products: products,
  });
});

app.post("/products/new", async (req, res) => {
  const newProductValues = req.body;

  const newProduct = await Product.create(newProductValues);

  res.redirect(`/products/${newProduct.id}`);
});

app.get("/products/new", (req, res) => {
  res.render("addProduct", {
    title: "Add a new product",
  });
});

app.get("/products/:productId", async (req, res) => {
  // req.params is an object
  console.log(req.params);

  const productId = req.params.productId;

  const foundProduct = await Product.findById(productId);

  res.render("singleProduct", {
    product: foundProduct,
  });
});

app.post("/products/:productId", async (req, res) => {
  const productId = req.params.productId;

  await Product.findByIdAndDelete(productId);

  res.redirect("/products")
});

const connection = await mongoose.connect("mongodb://localhost:27017/commerce");

console.log("Connected to the DB: commerce");

app.listen(3002, () => {
  console.log("Running!");
});
