const express = require("express");
const router = express.Router();
const Subject = require("../models/Subject");

// View all subjects
router.get("/", async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add Chapter 
router.post("/:subjectId/addChapter", async (req, res) => {
  try {
    const { subjectId } = req.params;
    const { name, link, img, description, buttonName } = req.body;

    if (!name || !link) {
      return res.status(400).json({ message: "Name & Link are required!" });
    }

    const subject = await Subject.findById(subjectId);
    if (!subject) return res.status(404).json({ message: "Subject not found" });

    const exist = subject.chapters.find((c) => c.name === name);
    if (exist)
      return res.status(400).json({ message: "Chapter already exists" });

    subject.chapters.push({ name, link, img, description, buttonName });
    await subject.save();

    res.json({ success: true, message: "Chapter added successfully!",link });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// Update Chapter 
router.put("/:subjectId/chapter/:chapterId", async (req, res) => {
  try {
    const { subjectId, chapterId } = req.params;
    const { name, link, img, description, buttonName, subjectId: newSubjectId } = req.body;

    const subject = await Subject.findById(subjectId);
    if (!subject) return res.status(404).json({ message: "Subject not found" });

    const chapter = subject.chapters.id(chapterId);
    if (!chapter) return res.status(404).json({ message: "Chapter not found" });

    chapter.name = name || chapter.name;
    chapter.link = link || chapter.link;
    chapter.img = img || chapter.img;
    chapter.description = description || chapter.description;
    chapter.buttonName = buttonName || chapter.buttonName;

    if (newSubjectId && newSubjectId !== subjectId) {
      const newSubject = await Subject.findById(newSubjectId);
      if (!newSubject) return res.status(404).json({ message: "New subject not found" });

      subject.chapters.id(chapterId).deleteOne();
      await subject.save();

      newSubject.chapters.push(chapter);
      await newSubject.save();

      return res.json({ success: true, message: "Chapter moved and updated successfully!" });
    } else {
      await subject.save();
      return res.json({ success: true, message: "Chapter updated successfully!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// Delete Chapter
router.delete("/:subjectId/chapter/:chapterId", async (req, res) => {
  try {
    const { subjectId, chapterId } = req.params;

    const subject = await Subject.findById(subjectId);
    if (!subject) return res.status(404).json({ message: "Subject not found" });

    const chapter = subject.chapters.id(chapterId);
    if (!chapter) return res.status(404).json({ message: "Chapter not found" });

    chapter.deleteOne();
    await subject.save();

    res.json({ success: true, message: "Chapter deleted successfully!" });
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

module.exports = router;
