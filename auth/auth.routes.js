const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.models");

//Register

router.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(401).json("email already exist");
    }
  } catch (err) {
    return res.status(500).json(err);
  }

  try {
    const salt = await bcrypt.genSalt(16);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      address: req.body.address,

      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(401).json("Wrong Email/Password");
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json("Wrong Email/Password");
    }
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.TOKENKEY,
      { expiresIn: "2days" }
    );

    return res.status(200).json({ user: user, token: token });
    res.status(201).json("connected");
  } catch (error) {
    return res.status(500).json(err);
  }
});

module.exports = router;
