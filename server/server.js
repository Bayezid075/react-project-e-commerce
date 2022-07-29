const express = require("express");
const app = express();
const connDB = require("./config/db");
const dotenv = require("dotenv");
const productRoutes = require("./router/productRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
dotenv.config();
const PORT = process.env.PORT || 5000;
connDB();

// app.use(errorMiddleware);
app.get("/", (req, res) => {
  res.send("api worked exilent 😉");
});
app.use("/", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} Port 😍`);
});
