const express = require("express");
const router = express.Router();
const products = require("../data/products");
const Product = require("../model/productModel");
const asyncHandler = require("express-async-handler");
router.get(
  // get all product
  "/api/products",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);
router.get(
  // get single specific  product
  "/api/products/:id",
  asyncHandler(async (req, res) => {
    const reqProduct = await Product.findById(req.params.id);
    if (reqProduct) {
      res.json(reqProduct);
    } else {
      res.status(404);
      throw new Error("Product Not Found !!");
    }
  })
);

module.exports = router;
