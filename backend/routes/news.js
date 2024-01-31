const express = require("express");

const router = express.Router();

const NewsModel = require("../models/newsModel");
const UserModel = require("../models/User");

router.get("", async (req, res) => {
  res.send("Server Is Running");
});

router.get("/news", async (req, res) => {
  try {
    const newsData = await NewsModel.find().sort({ time: 1 });
    res.json(newsData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

 
module.exports = router;
