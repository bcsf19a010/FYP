const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
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
  employeeType: {
    type: String,
    require: true,
  },
  salary: {
    type: Number,
    require: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "gymOwner",
  },
});

const Employee = mongoose.model("employee", employeeSchema);
module.exports = Employee;
