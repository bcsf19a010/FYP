const express = require("express");
const session = require("express-session");
const router = express.Router();
const owner = require("../models/GymOwner");
const gym = require("../models/GymModel");
const user = require("../models/user");
const trainer = require("../models/Trainer");
const attendance = require("../models/Attendance");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const employee = require("../models/Employee");

const createToken = (_id) => {
  return jwt.sign({ _id }, "SECRETKey12345678", { expiresIn: "3d" });
};

router.post("/signup", async (req, resp) => {
  try {
    const { username, email, password, phoneNo, address } = req.body;
    const gymOwner = await owner.signup(
      username,
      email,
      password,
      phoneNo,
      address
    );
    const token = createToken(gymOwner._id);
    resp.status(200).json({ username: gymOwner.username, token });
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, resp) => {
  try {
    const { email, password } = req.body;
    const gymOwner = await owner.login(email, password);
    req.session.owner_id = gymOwner._id;
    const token = createToken(gymOwner._id);
    resp.status(200).json({ username: gymOwner.username, token });
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

//User Controllers

router.post("/addUser", async (req, resp) => {
  try {
    const { username, email, password, phoneNo, address } = req.body;
    const Owner = req.session.owner_id;
    let result = await user.signup(
      username,
      email,
      password,
      phoneNo,
      address,
      Owner
    );
    //let User = new user(req.body);
    //User.owner = req.session.owner_id;
    //const result = await User.save();
    resp.status(200).json({ result });
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

router.get("/viewUser", async (req, resp) => {
  try {
    let result = await user.find({
      owner: req.session.owner_id,
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

router.delete("/deleteUser/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    const result = await user.findByIdAndDelete({ _id: id });
    return resp.status(200).json(result);
  } catch (error) {
    return resp.status(400).json({ error: "something went wrong" });
  }
});

router.post("/markAttendance", async (req, resp) => {
  try {
    let atndnc = new attendance(req.body);
    atndnc.owner = req.session.owner_id;
    let result = await atndnc.save();
    resp.status(200).json(result);
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

//Trainer Controllers

router.post("/addTrainer", async (req, resp) => {
  try {
    let Trainer = new trainer(req.body);
    Trainer.owner = req.session.owner_id;
    const result = await Trainer.save();
    resp.status(200).json({ result });
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

router.delete("/deleteTrainer/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    const result = await trainer.findByIdAndDelete({ _id: id });
    return resp.status(200).json(result);
  } catch (error) {
    return resp.status(400).json({ error: "something went wrong" });
  }
});

router.get("/viewTrainer", async (req, resp) => {
  try {
    let result = await trainer.find({
      owner: req.session.owner_id,
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

//Employee Controllers

router.post("/addEmployee", async (req, resp) => {
  try {
    let Employee = new employee(req.body);
    Employee.owner = req.session.owner_id;
    const result = await Employee.save();
    resp.status(200).json({ result });
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

router.delete("/deleteEmployee/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    const result = await employee.findByIdAndDelete({ _id: id });
    return resp.status(200).json(result);
  } catch (error) {
    return resp.status(400).json({ error: "something went wrong" });
  }
});

router.get("/viewEmployee", async (req, resp) => {
  try {
    let result = await employee.find({
      owner: req.session.owner_id,
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

router.post("/addgym", async (req, resp) => {
  try {
    let g = new gym(req.body);
    g.owner = req.session.owner_id;
    let result = await g.save();
    resp.status(200).json({ result });
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

module.exports = router;
