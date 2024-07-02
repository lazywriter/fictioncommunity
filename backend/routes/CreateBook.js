const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Book = require("../models/Book");
const User = require("../models/User");

const JWT_SECRET =
  "HHeLiBeBCNOFNeNaMgAlSiPSClArKCaScTiVCrMnFeCoNiCuZnGaGeAsSeBrKr";

router.post("/createbook", async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, JWT_SECRET);
    const user_id = decoded.user.id;
    const user = await User.findById(user_id);

    await Book.create({
      imgSource: req.body.imgSource,
      title: req.body.title,
      authorName: req.body.authorName,
      lenderId: user._id,
      lenderName: user.name,
      lenderEmail: user.email,
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
