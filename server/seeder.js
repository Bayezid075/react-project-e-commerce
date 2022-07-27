const User = require("./model/userModel");
const Product = require("./model/productModel");
const Order = require("./model/orderModel");
const dotenv = require("dotenv");
const connDB = require("./config/db");
const productData = require("./data/products");
const userData = require("./data/users");
dotenv.config();
connDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();
    const userCreation = await User.insertMany(userData);
    const adminUser = userCreation[0]._id;
    const sampleProducts = productData.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("--Data inserted-00-");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();
    console.log("--Data Destroyed--");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
