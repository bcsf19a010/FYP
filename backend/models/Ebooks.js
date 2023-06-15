const mongoose = require("mongoose");

const ebookSchema = new mongoose.Schema({
  ebReference: {
    type: String,
    require: true,
    unique: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const ebook = mongoose.model("Ebook", ebookSchema);
module.exports = ebook;
