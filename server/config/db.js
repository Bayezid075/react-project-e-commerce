const mongoose = require("mongoose");

const connDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
    });
    console.log("! <>-----Database connected succesfully-----<> !");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connDB;
