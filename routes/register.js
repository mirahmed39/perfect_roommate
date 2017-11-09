//const mongoose = require('mongoose');
const User = require('../db').User;
const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    res.redirect('/register');
});

router.get('/register', function (req, res) {
    res.render('register', {});
});

router.post('/register', function (req, res) {
    //get all the user credentials from the form.
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.userName;
    const gender = req.body.gender;
    const user = new User({
        firstName: firstName,
        lastName: lastName,
        username: username,
        gender: gender
    });
    user.save(function (err, user) {
        if (err) {
            const errorMessage = "Username is already taken, Try another one";
            res.render('register', {errorMessage: errorMessage});
        } else {
            console.log('User Registered Successfully');
            console.log('User', user);
            const redirectUrlFormat = '/' + user.username + '/questionnaire';
            res.redirect(redirectUrlFormat);
        }
    });
});

module.exports = router;

/*
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        if (err) throw  err;


    });
});
const user = new User({firstName: firstName, lastName: lastName, username: username, email: email,
    salt: salt, password: hash, gender: gender
});
user.save(function (err, user) {
    if(err) throw  err;
    console.log("Successfully added user.", user);
    res.redirect('/login');
}); */