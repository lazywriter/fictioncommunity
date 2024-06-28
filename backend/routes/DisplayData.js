const express = require("express");
const router = express.Router();

router.post("/bookData", (req, res) => {
  try {
    res.send([global.book_data, global.genre_data]);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
