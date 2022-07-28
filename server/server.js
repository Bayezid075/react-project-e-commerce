const express = require("express");
const app = express();
const connDB = require("./config/db");
const products = require("./data/products");
const dotenv = require("dotenv");
const productRoutes = require("./router/productRoute");

dotenv.config();
const PORT = process.env.PORT || 5000;
connDB();
app.get("/", (req, res) => {
  res.send("api worked exilent 😉");
});
app.use("/", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} Port 😍`);
});
