const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const jwtSecret =
  "HHeLiBeBCNOFNeNaMgAlSiPSClArKCaScTiVCrMnFeCoNiCuZnGaGeAsSeBrKr";

router.post("/createuser", [body("email").isEmail()], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location,
    });
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

router.post("/loginuser", [body("email").isEmail()], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let email = req.body.email;
  try {
    let userData = await User.findOne({ email });
    if (!userData) {
      return res
        .status(400)
        .json({ errors: "Try logging in with correct credentials" });
    }

    if (req.body.password !== userData.password) {
      return res
        .status(400)
        .json({ errors: "Try logging in with correct credentials" });
    }

    const data = {
      user: {
        id: userData.id,
      },
    };
    const authToken = jwt.sign(data, jwtSecret);

    return res.json({ success: true, authToken: authToken });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

module.exports = router;
