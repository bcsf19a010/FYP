const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Owner = require("../models/GymOwner");
const exercise = require("../models/Excercise");
const ebook = require("../models/Ebooks");
const diet = require("../models/Nutrients");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, "SECRETKey12345678", { expiresIn: "3d" });
};

router.post("/signup", async (req, resp) => {
  try {
    const { email } = req.body;
    const owner = await Owner.findOne({ email });
    if (owner) {
      resp.status(400).json({ error: "Email already exist" });
    } else {
      var user;
      if (req.body.owner) {
        const { username, email, password, phoneNo, address, owner } = req.body;
        user = await User.signup(
          username,
          email,
          password,
          phoneNo,
          address,
          owner
        );
      } else {
        const { username, email, password, phoneNo, address } = req.body;
        user = await User.signup(username, email, password, phoneNo, address);
      }
      const token = createToken(user._id);
      resp.status(200).json({ username: user.username, token });
    }
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, resp) => {
  const { email, password } = req.body;
  try {
    console.log("In login\n\n\n");
    console.log(email, password);
    const user = await User.login(email, password);
    req.session.user_id = user._id;
    const token = createToken(user._id);
    resp.status(200).json({ username: user.username, token });
  } catch (error) {
    console.log("\nin catch\n", error.message);
    resp.status(200).json({ error: error.message });
  }
});

router.get("/getExercise/:bodypart", async (req, resp) => {
  const { bodypart } = req.params;
  try {
    let exercises = await exercise.find({
      bodyPart: bodypart,
    });
    if (exercises) {
      resp.status(200).json({ exercises });
    } else {
      resp.status(500).json({ error: "Error retrieving data" });
    }
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

router.get("/getEbooks", async (req, resp) => {
  try {
    let result = await ebook.find();
    resp.status(200).json({ result });
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

router.post("/calculateNutrients", async (req, resp) => {
  //console.log(req.body);
  //console.log(req.body.nutrients[0]);
  const data = req.body.nutrients;
  let calories = 0,
    protien = 0,
    carbohydrates = 0,
    sugar = 0,
    fiber = 0,
    vitamins = [];
  for (let i of data) {
    let food = await diet.find({ name: i.name });
    calories += food[0].calories * i.quantity;
    protien += food[0].protein * i.quantity;
    carbohydrates += food[0].carbohydrates * i.quantity;
    sugar += food[0].sugar * i.quantity;
    fiber += food[0].fiber * i.quantity;
    vitamins = food[0].vitamins.concat(vitamins);
  }
  // const result = new diet({
  //   calories,
  //   protien,
  //   carbohydrates,
  //   sugar,
  //   fiber,
  //   vitamins,
  // });

  resp
    .status(200)
    .json({ calories, protien, carbohydrates, sugar, fiber, vitamins });
});
module.exports = router;
