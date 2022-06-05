const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({});

// MONGODB_URI=mongodb://localhost:27017/settyl_api

const uri = process.env.DATABASE_URI;
console.log(uri);
mongoose
  .connect(uri, {})
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
