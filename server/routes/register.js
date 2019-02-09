const bcrypt = require('bcrypt');
const express = require('express');
const mongoose = require('mongoose');
const {
    User
} = require('../models/user');

const router = express.Router();

router.post('/', async (req, res) => {
    let user = await User.findOne({
        regno: req.body.regno
    });
    if (user) return res.status(400).json({
        msg: "User already exist"
    });
    user = new User({
        regno: req.body.regno,
        password: req.body.password,
        department: req.body.department,
        year: req.body.year,
        section: req.body.section
    });

    //generating salt and hashing password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    res.status(200).json({
        msg: "Successfully Registered"
    });
});

module.exports = router;