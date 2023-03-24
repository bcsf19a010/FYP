const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const gymOwnerSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  phoneNo: {
    type: String,
  },
  address: {
    type: String,
  },
});

gymOwnerSchema.statics.signup = async function (
  username,
  email,
  password,
  phoneNo,
  address
) {
  if (!username || !email || !password || !phoneNo || !address)
    throw Error("Fill all the credentials");
  if (username.length < 3)
    throw Error("username must be atleast 3 digits long");
  if (!validator.isEmail(email)) throw Error("Enter a valid Email");
  if (!validator.isStrongPassword(password))
    throw Error(
      "Password must contains 1 Capital Letter 1 numeric character and 1 special character."
    );

  const userNameExist = await this.findOne({ username });
  const emailExist = await this.findOne({ email });

  if (userNameExist) throw Error("username already exist");

  if (emailExist) throw Error("Email already exist");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const owner = this.create({
    username,
    email,
    password: hash,
    phoneNo,
    address,
  });

  return owner;
};

gymOwnerSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error("Fill all credentials");

  const checkEmail = await this.findOne({ email });
  if (!checkEmail) throw Error("Incorrect Email");

  //   const findUser = await this.findOne({
  //     $and: [{ email }, { password }],
  //   });

  const findUser = await bcrypt.compare(password, checkEmail.password);
  if (!findUser) throw Error("Incorrect Password");

  return checkEmail;
};

const gymOwner = mongoose.model("gymOwner", gymOwnerSchema);
module.exports = gymOwner;
