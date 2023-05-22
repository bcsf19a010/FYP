const express = require("express");
const router = express.Router();
const User = require("../models/user");
const GymOwner = require("../models/GymOwner");
const Admin = require("../models/Admin");
const axios = require("axios");

router.post("/", async (req, resp) => {
  const { email, password } = req.body;
  try {
    console.log("In login login route\n\n");
    console.log(email, password);
    const user = await User.findOne({ email });
    const owner = await GymOwner.findOne({ email });
    const admin = await Admin.findOne({ email });
    if (user) {
      console.log("user find");
      // resp.redirect("/user/login");
      const userResponse = await axios.post(
        "http://localhost:8000/user/login",
        { email, password }
      );
      console.log("\n\nresoponse", userResponse.data.username);
      resp.json({
        username: userResponse.data.username,
        token: userResponse.data.token,
      });
    } else if (owner) {
      console.log("owner find");
      const ownerResponse = await axios.post(
        "http://localhost:8000/owner/login",
        {
          email,
          password,
        }
      );
      console.log("\n\nresoponse", ownerResponse.data);
      resp.json({
        username: ownerResponse.data.username,
        token: ownerResponse.data.token,
      });
    } else if (admin) {
      console.log("\nadmin found");
      const adminResponse = await axios.post(
        "http://localhost:8000/admin/login",
        {
          email,
          password,
        }
      );
      console.log("\n\nresoponse", adminResponse.data.username);
      resp.json({
        username: adminResponse.data.username,
        token: adminResponse.data.token,
      });
    }
    // else if (owner) {
    //   console.log("owner find");
    //   // resp.redirect("/owner/login");

    // } else if (admin) {
    //   console.log("\nadmin found");
    //   resp.redirect("/admin/login");
    // }
    else {
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
