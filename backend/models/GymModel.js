const mongoose = require("mongoose");

const gymSchema = new mongoose.Schema({
  gymName: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "gymOwner",
    require: true,
  },
});

const gym = mongoose.model("gym", gymSchema);
module.exports = gym;
