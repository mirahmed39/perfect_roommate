const mongoose = require('mongoose');
const User = require('../db').User;
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    res.redirect('/register');
});

router.get('/register', function (req, res) {
    res.render('register', {});
});

router.post('/register', function (req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    const gender = req.body.gender;
    // hash the password using bcrypt and salt.
    const passwordHash = bcrypt.hashSync(password, salt);
    const user = new User({firstName: firstName, lastName: lastName, username: username, email: email,
        passwordHash: passwordHash, gender: gender
    });
    user.save(function (err, user) {
        if(err) throw  err;
        res.redirect('/register');
    });
});

module.exports = router;