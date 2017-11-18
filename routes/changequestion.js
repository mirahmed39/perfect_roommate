const express = require('express');
const router = express.Router();
const User = require('../db').User;
const UserDetails = require('../db').UserDetails;
const Questionnaire = require('../db').Questionnaire;

/*
when the user the wants to change answers to questionnaires,
show all the questions with the the radio buttons which should
be selected to the user's answers. Validation: if the user does not
make any changes and presses the submit button, the program should
not update the database and let the user know that he/she did not make
any changes.
 */

router.get('/:username/changequestion', function (req, res) {
    //get the user from the username passed in the url.
    const username = req.params.username;
    User.findOne({username:username}, function (err, user) {
        if (err) throw err;
        else {
            UserDetails.findOne({username: username}, function (err, userDetails) {
                if (err) throw err;
                else{
                    Questionnaire.find(function (err, questionnaire) {
                        res.render('changequestion', {user: user, questionnaire: questionnaire,
                            userResponses: userDetails.answers});
                    });
                }
            });
        }
    });
});

/*
this one gets executed when the user changes answers to questionnaires.
it first finds the user in the database and simply updates the property
on the UserDetails document called answers.
 */
router.post('/:username/process-changequestion',function (req, res) {
    const userResponses = []; // this will hold the updated answers so we can do operations on it.
    const username = req.params.username;
    Object.keys(req.body).forEach(function (ele) {
        userResponses.push(parseInt(req.body[ele]));
    });
    const rank = userResponses.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
    UserDetails.update({username:username}, {$set: {answers:userResponses, rank:rank}}, function (err, userDetail) {
        if(err) throw err;
        else {
            const redirectUrlFormat = '/' + username + '/profile';
            res.redirect(redirectUrlFormat);
        }
    });
});

module.exports = router;
