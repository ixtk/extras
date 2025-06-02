import express from "express";
import products from "./products.json" with { type: "json" }
import mongoose from "mongoose";
import { Product } from "./models.js";

const app = express();

app.use("/assets", express.static("./assets"));

app.set("view engine", "ejs");
// to change view directory: app.set('views', ...)

app.get("/", (req, res) =>{
  res.redirect("/products")
})

app.get("/products", (req, res) => {
  res.render("products", {
    title: "Product List",
    products: products,
  });
});

app.post("/products/new", (req, res) => {
  // TODO...
  console.log("POST form")
})

app.get('/products/new', (req, res) => {
  res.render("addProduct",{
    title: "Add a new product"
  })
})

app.get("/products/:productId", (req, res) => {
  // req.params is an object
  console.log(req.params)

  const productId = Number(req.params.productId)

  let foundProduct = null

  for (let product of products) {
    if (productId === product.id) {
      foundProduct = product
      break
      // console.log(product.title)
    }
  }

  res.render("singleProduct", {
    product: foundProduct
  });
});

const connection = await mongoose.connect('mongodb://localhost:27017/commerce')

console.log("Connected to the DB: commerce")

app.listen(3002, () => {
  console.log("Running!");
});
