const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

require("./utils/db");

const userModel = require("./model/user");

app.use(cors());

// config dotenv
dotenv.config({});

const port = process.env.PORT || 3000;

// set middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// routing
app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/api", async (req, res) => {
  try {
    const data = await userModel.find().sort({ _id: 1 });
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.post("/api", async (req, res) => {
  try {
    const { image, title, description, author } = req.body;

    const userApi = new userModel({
      author: author,
      title: title,
      description: description,
      image: image,
    });
    const saveData = await userApi.save();
    console.log(saveData);

    res.status(200).json({ message: "successfully api created" });
  } catch (error) {
    res.status(404).json({ message: "something error please try again" });
  }
});

app.patch("/api", async (req, res) => {
  try {
    const { image, title, description, author, id } = req.body;

    const updateOne = await userModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title: title,
          description: description,
          image: image,
          author: author,
        },
      },
      {
        upsert: true,
      }
    );

    res.status(200).json({ message: "successfully updated  api" });
  } catch (error) {
    res.status(404).json({ message: "something error please try again" });
  }
});

// listen app
app.listen(port, () => {
  console.log("listening on port " + port);
});
