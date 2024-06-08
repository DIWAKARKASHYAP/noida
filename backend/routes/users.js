// routes/users.js
const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Create a new user
router.post("/", async (req, res) => {
    console.log("-----------------request came ---------------------");
    try {
        const user = new User(req.body);
        console.log(await User.find());
        let save = await user.save();
        console.log(save);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
