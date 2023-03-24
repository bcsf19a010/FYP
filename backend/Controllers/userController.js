const express = require("express");
const router = express.Router();
const User = require("../models/user");
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
    resp.status(400).json({ error: error.message });
  }
});

router.get("/getExercise/:bodypart", async (req, resp) => {
  const { bodypart } = req.params;
  try {
    let result = await exercise.find({
      bodyPart: bodypart,
    });
    if (result) {
      resp.status(200).json({ result });
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

router.get("/calculateNutrients", async (req, resp) => {
  //console.log(req.body);
  var data = req.body;
  //console.log(data.length);
  let resultNutrients = new diet();
  resultNutrients.name = "result";
  // let r1 = await diet.find({ name: data[0].name });
  // console.log(r1);
  for (let i = 0; i < data.length; i++) {
    let r1 = await diet.find({ name: data[i].name });
    console.log(r1);
    resultNutrients.calories += r1.calories * data[i].quantity;
    resultNutrients.protein += r1.protein * data[i].quantity;
    resultNutrients.carbohydrates += r1.carbohydrates * data[i].quantity;
    resultNutrients.fiber += r1.fiber * data[i].quantity;
    resultNutrients.vitamins = resultNutrients.vitamins.concat(r1.vitamins);
  }
  console.log(resultNutrients);

  resp.status(200).json(resultNutrients);
});
module.exports = router;
