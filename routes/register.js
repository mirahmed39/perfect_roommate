//const mongoose = require('mongoose');
const User = require('../db').User;
const bcrypt = require('bcryptjs');
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

    // generate password hash with salt, create the user object and save it to the database.
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            if (err) throw  err;
            const user = new User({firstName: firstName, lastName: lastName, username: username, email: email,
                passwordHash: hash, gender: gender
            });
            user.save(function (err, user) {
                if(err) throw  err;
                console.log("Successfully added user.");
                res.redirect('/register');
            });
        });
    });
});

module.exports = router;