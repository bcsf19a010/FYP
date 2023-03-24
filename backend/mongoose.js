const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/FYP";
const DbConnection = () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("connection successful");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = DbConnection;
