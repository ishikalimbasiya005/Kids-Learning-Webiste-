const mongoose = require("mongoose");

const ChapterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  img: String,
  description: String,
  buttonName: String,
});

const SubjectSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  chapters: { type: [ChapterSchema], default: [] },
});

module.exports = mongoose.model("Subject", SubjectSchema);
