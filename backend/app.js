const express = require("express");
//const bodyParser = require("body-parser");
const session = require("express-session");
// const routes = require('./routes/routes.js')
const ownerRoutes = require("./Controllers/ownerController");
const userRoutes = require("./Controllers/userController");
const adminRoutes = require("./Controllers/AdminController");
const DbConnection = require("./mongoose");

DbConnection();

const app = express();

// app.set("view engine", "ejs");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "123456789",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 * 24 },
  })
);

app.use(express.json());

// app.use(routes)
app.use("/owner", ownerRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.listen(8000, () => {
  console.log("app is listening at http://localhost:8000");
});
