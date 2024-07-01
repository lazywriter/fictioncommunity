const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.post("/createbook", async (req, res) => {
  try {
    await Book.create({
      imgSource: req.body.imgSource,
      title: req.body.title,
      authorName: req.body.authorName,
      description: req.body.description,
      genreName: req.body.genreName,
      rate: req.body.rate,
    });
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

module.exports = router;
