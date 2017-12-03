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
    /*
        create a user details object, add the responses to the
        answers array, add the user slug and then calculate the rank
        and add it
    */
    const userDetail = new UserDetails({username: req.params.username});
    let userResponses = Object.keys(req.body).map(function (ele) {
        return parseInt(req.body[ele]);
    });
    Object.keys(req.body).forEach(function (ele) {
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

// after you get a rank from a user then use it to find all other user details documents
// and store it into an array. then set the array into the user's property called matches.



module.exports = router;