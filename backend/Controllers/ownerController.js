const express = require("express");
const session = require("express-session");
const router = express.Router();
const owner = require("../models/GymOwner");
const gym = require("../models/GymModel");
const User = require("../models/user");
const trainer = require("../models/Trainer");
const attendance = require("../models/Attendance");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const employee = require("../models/Employee");
const multer = require("multer");

const upload = multer({});

const createToken = (_id) => {
  return jwt.sign({ _id }, "SECRETKey12345678", { expiresIn: "3d" });
};

router.post("/signup", async (req, resp) => {
  try {
    const { username, email, password, phoneNo, address } = req.body;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      resp.status(400).json({ error: "Email already exist" });
    } else {
      const gymOwner = await owner.signup(
        username,
        email,
        password,
        phoneNo,
        address
      );
      const token = createToken(gymOwner._id);
      resp
        .status(200)
        .json({ username: gymOwner.username, ownerId: gymOwner._id, token });
    }
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
    resp.status(200).json({
      username: gymOwner.username,
      token,
      accountType: "Owner",
      ownerId: gymOwner._id,
    });
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

//User Controllers

// router.post("/addUser", async (req, resp) => {
//   try {
//     const { username, email, password, phoneNo, address } = req.body;
//     const Owner = req.session.owner_id;
//     let result = await user.signup(
//       username,
//       email,
//       password,
//       phoneNo,
//       address,
//       Owner
//     );
//     resp.status(200).json({ result });
//   } catch (error) {
//     resp.status(400).json({ error: error.message });
//   }
// });

router.post("/addUser", upload.none(), async (req, resp) => {
  try {
    const { username, email, password, phoneNo, address, owner } = req.body;
    const user = await User.signup(
      username,
      email,
      password,
      phoneNo,
      address,
      owner
    );
    // const result = await user.save();
    resp.status(200).json({ user });
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

router.get("/viewUser/:owner", async (req, resp) => {
  try {
    const { owner } = req.params;
    let result = await User.find({
      owner: owner,
    });
    if (result.length > 0) {
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
    const result = await User.findByIdAndDelete({ _id: id });
    return resp.status(200).json({ result });
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

router.post("/addTrainer", upload.none(), async (req, resp) => {
  try {
    let Trainer = new trainer(req.body);
    console.log(Trainer);
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

router.get("/viewTrainer/:owner", async (req, resp) => {
  try {
    const { owner } = req.params;
    console.log("owner is", owner);
    let result = await trainer.find({
      owner: owner,
    });
    console.log("result is", result);
    if (result.length > 0) {
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
    const { gymName, gymAddress, ownerId } = req.body;

    const g = new gym({
      gymName: gymName,
      address: gymAddress,
      owner: ownerId,
    });
    let result = await g.save();
    resp.status(200).json({ result });
  } catch (error) {
    console.log("in error");
    resp.status(400).json({ error: error.message });
  }
});

module.exports = router;
