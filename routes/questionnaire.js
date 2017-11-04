const express = require('express');
const router = express.Router();

router.get('/questionnaire', function (req, res) {
    res.render('questionnaire', {});
});

module.exports = router;