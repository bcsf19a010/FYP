const mongoose = require("mongoose");

const dietSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  calories: {
    type: Number,
    default: 0,
  },
  protein: {
    type: Number,
    default: 0,
  },
  carbohydrates: {
    type: Number,
    default: 0,
  },
  sugar: {
    type: Number,
    default: 0,
  },
  fiber: {
    type: Number,
    default: 0,
  },
  vitamins: {
    type: [String],
    default: 0,
  },
});

const diet = mongoose.model("Diet", dietSchema);
module.exports = diet;
