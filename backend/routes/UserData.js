const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET =
  "HHeLiBeBCNOFNeNaMgAlSiPSClArKCaScTiVCrMnFeCoNiCuZnGaGeAsSeBrKr";

// Route to fetch user data
router.get("/me", async (req, res) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, JWT_SECRET);
    const user_id = decoded.user.id;
    const user = await User.findById(user_id);
    res.send(user);
  } catch (err) {
    res.status(401).send({ error: "Please authenticate." });
  }
});

module.exports = router;
