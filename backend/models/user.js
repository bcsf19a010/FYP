const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
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
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "gymOwner",
  },
});

userSchema.statics.signup = async function (
  username,
  email,
  password,
  phoneNo,
  address,
  owner = null
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

  const user = this.create({
    username,
    email,
    password: hash,
    phoneNo,
    address,
    owner,
  });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw Error("Fill all credentials");

  const checkEmail = await this.findOne({ email });
  if (!checkEmail) throw Error("Incorrect Email");

  //   const findUser = await this.findOne({
  //     $and: [{ email }, { password }],
  //   });

  const findUser = await bcrypt.compare(password, checkEmail.password);
  console.log("\nfind user\n", findUser);
  if (!findUser) throw Error("Incorrect Password");

  return checkEmail;
};

const User = mongoose.model("users", userSchema);
module.exports = User;

// const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcrypt");

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     unique: true,
//     require: true,
//   },
//   email: {
//     type: String,
//     require: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     require: true,
//   },
// });

// userSchema.statics.signup = async function (username, email, password) {
//   if (!username || !email || !password) throw Error("Fill all the credentials");
//   if (username.length < 3)
//     throw Error("username must be atleast 3 digits long");
//   if (!validator.isEmail(email)) throw Error("Enter a valid Email");
//   if (!validator.isStrongPassword(password))
//     throw Error(
//       "Password must contains 1 Capital Letter 1 numeric character and 1 special character."
//     );

//   const userNameExist = await this.findOne({ username });
//   const emailExist = await this.findOne({ email });

//   if (userNameExist) throw Error("username already exist");

//   if (emailExist) throw Error("Email already exist");

//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(password, salt);

//   const user = this.create({ username, email, password: hash });

//   return user;
// };

// userSchema.statics.login = async function (email, password) {
//   if (!email || !password) throw Error("Fill all credentials");

//   const checkEmail = await this.findOne({ email });
//   if (!checkEmail) throw Error("Incorrect Email");

//   //   const findUser = await this.findOne({
//   //     $and: [{ email }, { password }],
//   //   });

//   const findUser = await bcrypt.compare(password, checkEmail.password);
//   if (!findUser) throw Error("Incorrect Password");

//   return checkEmail;
// };

// const User = mongoose.model("users", userSchema);
// module.exports = User;
