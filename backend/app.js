const express = require("express");
//const bodyParser = require("body-parser");
const session = require("express-session");
// const routes = require('./routes/routes.js')
const ownerRoutes = require("./Controllers/ownerController");
const userRoutes = require("./Controllers/userController");
const adminRoutes = require("./Controllers/AdminController");
const loginRoutes = require("./Controllers/loginRoutes");
const DbConnection = require("./mongoose");

const path = require("path");
const ___dirname = path.resolve(path.dirname(""));

DbConnection();

const app = express();

// app.set("view engine", "ejs");

// app.use(bodyParser.json());
app.use(
  session({
    secret: "123456789",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 * 24 },
  })
);

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(___dirname + "/../frontend/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(___dirname, "../frontend", "build", "index.html"))
  );
}

// app.use(routes)
app.use("/owner", ownerRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/login", loginRoutes);

app.listen(8000, () => {
  console.log("app is listening at http://localhost:8000");
});
