const mongoose = require("mongoose");
const { uuid } = require("uuidv4");

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
      maxLength: 50,
    },
    image: {
      type: String,
    },
    author: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = new mongoose.model("userModel", userSchema);
module.exports = userModel;
