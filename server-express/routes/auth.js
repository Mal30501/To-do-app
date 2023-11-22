const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");
require('dotenv').config();
const privateKey = process.env.JWT_PRIVATE_KEY;
const saltRounds = 10;

router.use(async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.hashedPassword = hashedPassword;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/register", async (req, res) => {
  try {
    if (req.body.username && req.body.email && req.body.password) {
      if (req.body.password === req.body.password) {
        const user = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.hashedPassword,
        });

        const savedUser = await user.save();
        res.status(201).json({
          id: savedUser._id,
          username: savedUser.username,
          email: savedUser.email
        });
      } else {
        res.status(400).json({ error: "Passwords not matching" });
      }
    } else {
      res.status(400).json({ error: "Username, Email, or Password Missing" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    if (req.body.email && req.body.password) {
      const user = await User.findOne({ email: req.body.email });

      if (user) {
        const result = await bcrypt.compare(req.body.password, user.password);

        if (result === true) {
          const token = jwt.sign({ id: user._id }, privateKey, { algorithm: "RS256" });
          res.status(200).json({ access_token: token });
        } else {
          res.status(401).json({ error: "Invalid credentials." });
        }
      } else {
        res.status(401).json({ error: "Invalid credentials." });
      }
    } else {
      res.status(400).json({ error: "Email or Password Missing" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
