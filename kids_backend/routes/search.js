const express = require("express");
const router = express.Router();
const Subject = require("../models/Subject");

router.get("/", async (req, res) => {
  const query = req.query.q ? req.query.q.trim() : "";

  if (!query) return res.json([]);

  try {
    const results = await Subject.find({
      $or: [
        { subject: { $regex: query, $options: "i" } },
        { "chapters.name": { $regex: query, $options: "i" } },
      ],
    }).lean();

    const flattened = results.flatMap((subj) =>
      subj.chapters
        .filter((ch) =>
          ch.name.toLowerCase().includes(query.toLowerCase()) ||
          subj.subject.toLowerCase().includes(query.toLowerCase())
        )
        .map((ch) => ({
          subject: subj.subject,
          name: ch.name,
          link: ch.link || `/${subj.subject}/${ch.name}`
        }))
    );

    res.json(flattened);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error while searching" });
  }
});

module.exports = router;
