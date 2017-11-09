const express = require('express');
const router = express.Router();
const Questionnaire = require('../db').Questionnaire;
const UserDetails = require('../db').UserDetails;

router.get('/:username/questionnaire', function (req, res) {
    const username = req.params.username;
    Questionnaire.find(function (err, questionnaire) {
        res.render('questionnaire', {username:username, questionnaire:questionnaire, radioButtonTracker: 0});
    });
});

router.post('/:username/process-questionnaire', function (req, res) {
    const userResponses = [];
    /*
        create a user details object, add the responses to the
        answers array, add the user slug and then calculate the rank
        and add it
    */
    const userDetail = new UserDetails({username: req.params.username});
    Object.keys(req.body).forEach(function (ele) {
        userResponses.push(parseInt(req.body[ele]));
        userDetail.answers.push(parseInt(req.body[ele]));
    });
    userDetail.rank = userResponses.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    userDetail.save(function (err, userDetail) {
        if(err) throw err;
        const redirectUrlFormat = '/' + userDetail.username + '/profile';
        res.redirect(redirectUrlFormat);
    });
});

module.exports = router;