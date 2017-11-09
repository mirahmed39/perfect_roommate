const express = require('express');
const router = express.Router();
const User = require('../db').User;
const UserDetails = require('../db').UserDetails;
const Questionnaire = require('../db').Questionnaire;

router.get('/:username/profile', function (req, res) {
    const username = req.params.username;
    User.findOne({username:username}, function (err, user) {
        if (err) throw err;
        else {
            UserDetails.findOne({username: username}, function (err, userDetails) {
                if (err) throw err;
                else{
                    Questionnaire.find(function (err, questionnaire) {
                        res.render('profile', {user: user, questionnaire: questionnaire,
                                                userResponses: userDetails.answers});
                    });
                }
            });
        }
    });
});

module.exports = router;