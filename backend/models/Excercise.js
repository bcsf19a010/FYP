const mongoose = require("mongoose");

const excerciseSchema = new mongoose.Schema({
  exReferece: {
    type: String,
    require: true,
    unique: true,
  },
  bodyPart: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: [String],
  },
});

const excercise = mongoose.model("Excercise", excerciseSchema);
module.exports = excercise;
