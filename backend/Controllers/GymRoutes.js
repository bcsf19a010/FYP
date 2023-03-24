const express = require("express");
const router = express.Router();
const gym = require("../models/GymModel");

router.post("/addGym", async (req, resp) => {
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
