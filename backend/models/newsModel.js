const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  id: String,
  rank: String,
  title: String,
  url: String,
  hacker_url: String,
  score: String,
  age: String,
  time: Number,
  commentsCount: String
});

const NewsModel = mongoose.model('news', newsSchema);

module.exports = NewsModel;
