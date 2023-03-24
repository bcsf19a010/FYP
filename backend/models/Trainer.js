const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phoneNo: {
    type: String,
    require: true,
  },
  address: {
    type: String,
  },
  fee: {
    type: Number,
    require: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "gymOwner",
  },
});

const trainer = mongoose.model("trainer", trainerSchema);
module.exports = trainer;
