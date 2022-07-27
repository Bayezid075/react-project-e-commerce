const bycrypt = require("bcryptjs");
const user = [
  {
    name: "admin",
    email: "admin@gmail.com",
    password: bycrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "user",
    email: "user@gmail.com",
    password: bycrypt.hashSync("1234", 10),
  },
];

module.exports = user;
