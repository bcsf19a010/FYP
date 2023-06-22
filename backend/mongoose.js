const mongoose = require("mongoose");
// const url = "mongodb://localhost:27017/FYP";
const url = "mongodb+srv://admin:Hum-2977@fyp.efrk4k3.mongodb.net/FYP";
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
