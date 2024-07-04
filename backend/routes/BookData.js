const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.get("/getbook", async (req, res) => {
  const bookId = req.header("Authorization");
  const book = await Book.findById(bookId);
  res.send(book);
});

module.exports = router;
