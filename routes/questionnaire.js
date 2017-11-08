const express = require('express');
const router = express.Router();
const Questionnaire = require('../db').Questionnaire;

router.get('/:username/questionnaire', function (req, res) {
    const username = req.params.username;
    Questionnaire.find(function (err, questionnaire) {
        res.render('questionnaire', {username:username, questionnaire:questionnaire});
    });
});

router.post('/:username/process-questionnaire', function (req, res) {
    // do stuff here.
});

module.exports = router;