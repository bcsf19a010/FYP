const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const { request } = require("express");

// router.get("/", (req, resp) => {
//   resp.sendFile(`${__dirname}/home.html`);
// });

router.get("/signup", (req, resp) => {
  resp.render("signup");
});

router.post(
  "/signup",
  [
    body("username", "Username should be atleast 3 digits long").isLength({
      min: 3,
    }),
    body("email", "Entera a valid Email").isEmail(),
    body("password", "Password should be at least 8 digits long").isLength({
      min: 8,
    }),
  ],
  async (req, resp) => {
    const errors = validationResult(req);
    console.log("in errors: ", errors);
    if (!errors.isEmpty()) {
      resp.render("signup", { error: errors.message });
    } else {
      console.log(req.body);
      let user = new User(req.body);
      console.log("\n\n", user);
      let checkIfUserAlreadyExist = await User.find({
        username: req.body.username,
      });
      if (checkIfUserAlreadyExist[0]) {
        resp.render("signup", { msg: "UserName Already Exist" });
      } else {
        let result = await user.save();
        msg = "Sign up successFul";
        if (result) resp.render("login", { msg });
        else resp.end("signup Failed");
      }
    }
  }
);

router.get("/login", (req, resp) => {
  resp.render("login");
});

router.post(
  "/login",
  [
    body("email", "Entera a valid Email").isEmail(),
    body("password", "Password should be at least 5 digits long").isLength({
      min: 5,
    }),
  ],
  async (req, resp) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      resp.render("login", { msg: "Please Enter valid credentials" });
    } else {
      let result = await User.find({
        $and: [{ email: req.body.email }, { password: req.body.password }],
      });
      if (result[0]) {
        req.session.user = result[0];
        resp.redirect("/sucess");
      } else {
        console.log("no data found");
        resp.end("login failed");
      }
    }
  }
);

router.get("/sucess", (req, res) => {
  if (req.session.user)
    res.render("sucess", { user: req.session.user, msg: "" });
  else res.end("no session");
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.send(err);
    } else res.redirect("/login");
  });
});

router.get("/data", async (req, resp) => {
  if (req.session.user) {
    let data = await ToDo.find({ user: req.session.user._id });
    resp.render("data", { data });
  } else resp.end("no session");
});

router.post("/addtask", async (req, resp) => {
  let obj = new ToDo({
    user: req.session.user._id,
    task: req.body.task,
    status: "In Progress",
  });
  await obj.save();
  resp.render("sucess", {
    user: req.session.user,
    msg: "Task Stored Successfully",
  });
});

module.exports = router;
