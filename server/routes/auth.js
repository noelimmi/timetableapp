const bcrypt = require('bcrypt');
const express = require('express');
const mongoose = require('mongoose');
const {
    User
} = require('../models/user');

const router = express.Router();

//Handle Login
router.post('/', async (req, res) => {
    //Checks if user exist
    let user = await User.findOne({
        regno: req.body.regno
    });
    if (!user) return res.status(400).json({
        msg: "Invalid Reg No or Not yet Registered"
    });

    //Checks password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({
        msg: "Invalid Password"
    });

    res.status(200).json({
        msg: "Successfully Logged in"
    });
});

module.exports = router;