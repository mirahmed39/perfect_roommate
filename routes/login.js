const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../db').User;

router.get('/login', function (req, res) {
    res.render('login', {});
});


router.post('/process-login', function (req, res) {
    const username = req.body.userName;
    console.log('username', username);
    User.findOne({username: username}, function(err, user) {
        if (err) {
            console.log('could not find user');
            const errorMessage = "Could not find username!";
            res.render('login', {errorMessage: errorMessage});
        }
        else {
            const redirectUrlFormat = '/' + user.username + '/profile';
            res.redirect(redirectUrlFormat);
        }
    });
});
module.exports = router;