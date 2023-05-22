const express = require("express");
const router = express.Router();
const User = require("../models/user");
const GymOwner = require("../models/GymOwner");

router.post("/", async (req, resp) => {
  const { email, password } = req.body;
  try {
    console.log("In login login route\n\n");
    console.log(email, password);
    const user = await User.findOne({ email });
    const owner = await GymOwner.findOne({ email });
    if (user) {
      console.log("user find");
      resp.redirect("/user/login");
    } else if (owner) {
      console.log("owner find");
      resp.redirect("/owner/login");
    } else {
      throw Error("Incorrect Email");
    }

    //   const user = await User.login(email, password);
    //   req.session.user_id = user._id;
    //   const token = createToken(user._id);
    //   resp.status(200).json({ username: user.username, token });
  } catch (error) {
    resp.status(400).json({ error: error.message });
  }
});
module.exports = router;
