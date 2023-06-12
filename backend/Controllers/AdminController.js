const express = require("express");
const session = require("express-session");
const router = express.Router();
const owner = require("../models/GymOwner");
const exercise = require("../models/Excercise");
// const gym = require("../models/GymModel");
const user = require("../models/user");
// const trainer = require("../models/Trainer");
// const attendance = require("../models/Attendance");
// const validator = require("validator");
const jwt = require("jsonwebtoken");
//const employee = require("../models/Employee");
const admin = require("../models/Admin");

const createToken = (_id) => {
  return jwt.sign({ _id }, "SECRETKey12345678", { expiresIn: "3d" });
};

//*******************admin login****************
router.post("/login", async (req, resp) => {
  try {
    console.log("\nin admin\n");
    const { email, password } = req.body;
    console.log(email, password);
    const result = await admin.login(email, password);
    console.log(result);
    req.session.admin_id = result._id;
    const token = createToken(result._id);
    resp.status(200).json({ email: result.email, token });
  } catch (error) {
    resp.status(200).json({ error: error.message });
  }
});

//****************** owner Routes ***************************
router.get("/viewOwners", async (req, resp) => {
  try {
    const result = await owner.find();
    resp.status(200).json(result);
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

//*********************** user Routes ****************
router.get("/viewUsers", async (req, resp) => {
  try {
    const result = await user.find();
    resp.status(200).json(result);
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

// **************************** Exercise Routes **********************

router.post("/addExercise", async (req, resp) => {
  try {
    const { file, name, descriptions, category } = req.body;
    console.log("\n\n", req.body);
    console.log("Received form data:");
    console.log("File:", file);
    console.log("Name:", name);
    console.log("Descriptions:", descriptions);
    console.log("Category:", category);
    // console.log("\nadd exercise\n", req.body);
    // let ex = new exercise(req.body);
    // console.log("\n\nexercise", ex);
    // let result = await ex.save();
    resp.status(200).json({ result: "result" });
    //const {exReferece,bodyPart,name,description} = req.body;
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

router.get("/getExercises", async (req, resp) => {
  try {
    const result = await exercise.find();
    resp.status(200).json(result);
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

//delete Exercise
router.delete("deleteExercise/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    const ex = await exercise.findByIdAndDelete({ _id: id });
    return resp.status(200).json(ex);
  } catch (error) {
    return resp.status(404).json({ error: "something went wrong" });
  }
});

module.exports = router;
