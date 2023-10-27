const jwt = require("jsonwebtoken");
require("dotenv").config();
const generateToken = (id) => {
  return jwt.sign({ id }, `${process.env.JTW_KEY}`, {
    expiresIn: "30d",
  });
};
// console.log(`${process.env.JTW_KEY}`)
module.exports = generateToken;
