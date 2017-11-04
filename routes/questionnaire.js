const express = require('express');
const router = express.Router();
const Questionnaire = require('../db').Questionnaire;

router.get('/questionnaire', function (req, res) {
    Questionnaire.find(function (err, questions) {
        if(err) throw err;
        res.render('questionnaire', {questions:questions});
    });
});

module.exports = router;