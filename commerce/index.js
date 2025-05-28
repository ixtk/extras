import express from "express";
import products from "./products.json" with { type: "json" }

const app = express();

app.use("/assets", express.static("./assets"));

app.set("view engine", "ejs");
// to change view directory: app.set('views', ...)

app.get("/products", (req, res) => {
  res.render("products", {
    title: "Product List",
    products: products,
  });
});

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

app.listen(3001, () => {
  console.log("Running!");
});
