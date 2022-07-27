const express = require("express");
const app = express();
const connDB = require("./config/db");
const products = require("./data/products");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000;
connDB();
app.get("/", (req, res) => {
  res.send("api worked exilent 😉");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const reqProduct = products.find((p) => p._id === req.params.id);
  res.json(reqProduct);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} Port 😍`);
});
