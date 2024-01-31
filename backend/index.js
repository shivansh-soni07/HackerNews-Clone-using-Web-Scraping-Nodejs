const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const scrapeNews = require("./scraper");
const connectDB = require("./db");
const UserModel = require("./models/User");
const port = 8000;
var app = express();

app.use(cors());
app.use(express.json());
connectDB();
scrapeNews();

app.use("/", require("./routes/news"));

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Password Incorrect");
      }
    } else {
      res.json("User Not Registered");
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
