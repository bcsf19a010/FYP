const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

adminSchema.statics.login = async function (email, password) {
  console.log("\nin schema\n");
  if (!email || !password) throw Error("Fill all credentials");

  const checkEmail = await this.findOne({ email });
  if (!checkEmail) throw Error("Incorrect Email");

  const findAdmin = await bcrypt.compare(password, checkEmail.password);
  if (!findAdmin) throw Error("Incorrect Password");
  console.log("out schema\n", checkEmail);
  return checkEmail;
};

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
