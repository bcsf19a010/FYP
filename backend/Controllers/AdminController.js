const express = require("express");
const session = require("express-session");
const router = express.Router();
const owner = require("../models/GymOwner");
// const gym = require("../models/GymModel");
// const user = require("../models/user");
// const trainer = require("../models/Trainer");
// const attendance = require("../models/Attendance");
// const validator = require("validator");
const jwt = require("jsonwebtoken");
//const employee = require("../models/Employee");
const admin = require("../models/Admin");

const createToken = (_id) => {
  return jwt.sign({ _id }, "SECRETKey12345678", { expiresIn: "3d" });
};

router.post("/login", async (req, resp) => {
  try {
    const { email, password } = req.body;
    const result = await admin.login(email, password);
    req.session.admin_id = result._id;
    const token = createToken(result._id);
    resp.status(200).json({ email: result.email, token });
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

router.get("/viewOwners", async (req, resp) => {
  try {
    const result = await owner.find();
    resp.status(200).json(result);
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});
module.exports = router;
