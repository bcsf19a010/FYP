const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  Attendance: {
    type: String,
    default: "P",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "gymOwner",
    require: true,
  },
});

const Attendance = mongoose.model("attendance", attendanceSchema);
module.exports = Attendance;
