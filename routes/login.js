const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../db').User;

router.get('/login', function (req, res) {
    res.render('login', {});
});


router.post('/process-login', function (req, res) {
    const username = req.body.userName;
    User.findOne({username: username}, function(err, user) {
        if (err) throw err
        else {
            const redirectUrlFormat = '/' + user.username + '/profile';
            res.redirect(redirectUrlFormat);
        }
    });
});
module.exports = router;