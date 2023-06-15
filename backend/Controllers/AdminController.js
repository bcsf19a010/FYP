const express = require("express");
const session = require("express-session");
const router = express.Router();
const owner = require("../models/GymOwner");
const ebook = require("../models/Ebooks");
const nutrients = require("../models/Nutrients");
const exercise = require("../models/Excercise");
// const gym = require("../models/GymModel");
const user = require("../models/user");
// const trainer = require("../models/Trainer");
// const attendance = require("../models/Attendance");
// const validator = require("validator");
const jwt = require("jsonwebtoken");
const path = require("path");
//const employee = require("../models/Employee");
const admin = require("../models/Admin");
const multer = require("multer");

const upload = multer({});

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

router.post("/addExercise", upload.single("file"), async (req, resp) => {
  try {
    var { name, descriptions, category } = req.body;
    const file = req.file;

    // Initialize multer upload
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        // Set the destination folder based on the category
        cb(
          null,
          path.join(__dirname, `../../frontend/public/videos/${category}`)
        );
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    });

    upload.storage = storage;

    const description = descriptions.split(",");

    const ex = new exercise({
      exReferece: file.originalname,
      bodyPart: category,
      name: name,
      description: description,
    });
    const result = await ex.save();
    const filePath = path.join(
      __dirname,
      `../../frontend/public/videos/${category}`,
      file.originalname
    );

    await file.mv(filePath);

    resp.status(200).json({ result });
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
router.delete("/deleteExercise/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    //console.log(id);
    const ex = await exercise.findByIdAndDelete({ _id: id });
    return resp.status(200).json(ex);
  } catch (error) {
    return resp.status(404).json({ error: "something went wrong" });
  }
});

//************************* Nutrients Routes ********************** */

router.get("/getNutrients", async (req, resp) => {
  try {
    const result = await nutrients.find();
    resp.status(200).json(result);
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

router.delete("/deleteNutrient/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    //console.log(id);
    const ex = await nutrients.findByIdAndDelete({ _id: id });
    return resp.status(200).json(ex);
  } catch (error) {
    return resp.status(404).json({ error: "something went wrong" });
  }
});

router.post("/addEbook", upload.single("file"), async (req, resp) => {
  try {
    var { price, description } = req.body;
    const file = req.file;

    // Initialize multer upload
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        // Set the destination folder based on the category
        cb(null, path.join(__dirname, `../../frontend/public/Ebooks`));
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    });

    upload.storage = storage;

    const eb = new ebook({
      price: price,
      description: description,
      ebReference: file.originalname,
    });
    const result = await eb.save();
    const filePath = path.join(
      __dirname,
      `../../frontend/public/Ebooks}`,
      file.originalname
    );

    await file.mv(filePath);

    resp.status(200).json({ result });
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});

router.delete("/deleteEbook/:id", async (req, resp) => {
  const { id } = req.params;
  try {
    //console.log(id);
    const ex = await ebook.findByIdAndDelete({ _id: id });
    return resp.status(200).json(ex);
  } catch (error) {
    return resp.status(404).json({ error: "something went wrong" });
  }
});

module.exports = router;
