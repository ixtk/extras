// commonjs style
// const express = require('express')

import express from 'express'
import path from 'path'

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname)

const app = express()

app.use(express.static("./assets"))

app.get("/products", (req, res) => {
  console.log(req.ip, req.path)

  // res.send("OK");
  // C:\Users\Work\Desktop\extras\commerce\index.html
  res.sendFile('index.html', {
    root: __dirname
  })
})

app.listen(3000, () => {
  console.log("Running!")
})
