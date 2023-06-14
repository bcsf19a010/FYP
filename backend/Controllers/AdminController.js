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
const path = require("path");
//const employee = require("../models/Employee");
const admin = require("../models/Admin");
const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Set the destination folder based on the category
//     cb(null, path.join(__dirname, `../../frontend/public/videos/`));
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
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

// router.post("/addExercise", upload.single("file"), async (req, resp) => {
//   try {
//     const { name, descriptions, category } = req.body;
//     const file = req.file;

//     //const { file, name, descriptions, category } = req.body;
//     console.log("\n\n", req.body);
//     console.log("Received form data:");
//     console.log("File:", file);
//     console.log("Name:", name);
//     console.log("Descriptions:", descriptions);
//     console.log("Category:", category);

//     // Save the file to the desired folder
//     const filePath = path.join(
//       __dirname,
//       `../../frontend/public/videos/${category}`
//     );
//     console.log(filePath);
//     await file.mv(filePath);
//     // console.log("\nadd exercise\n", req.body);
//     // let ex = new exercise(req.body);
//     // console.log("\n\nexercise", ex);
//     // let result = await ex.save();
//     resp.status(200).json({ result: "result" });
//     //const {exReferece,bodyPart,name,description} = req.body;
//   } catch (error) {
//     resp.status(400).json({ error: error.message });
//   }
// });

router.post("/addExercise", upload.single("file"), async (req, resp) => {
  try {
    var { name, descriptions, category } = req.body;
    const file = req.file;

    // storage.destination = (req, file, cb) => {
    //   // Set the destination folder based on the category
    //   cb(
    //     null,
    //     path.join(__dirname, `../../frontend/public/videos/${category}`)
    //   );
    // };
    // const ex = new exercise(file.originalname, category, name, descriptions);
    // console.log(ex);

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

    // console.log("\n\n", req.body);
    // console.log("Received form data:");
    // console.log("File:", file);
    // console.log("Name:", name);
    // console.log("Descriptions:", descriptions);
    // console.log("Category:", category);
    const description = descriptions.split(",");

    const ex = new exercise({
      exReferece: file.originalname,
      bodyPart: category,
      name: name,
      description: description,
    });
    const result = await ex.save();

    // Save the file to the desired folder
    // const filePath = path.join(
    //   __dirname,
    //   `../../frontend/public/videos/${category}`,
    //   file.originalname
    // );
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

module.exports = router;
