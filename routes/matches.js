const express = require('express');
const router = express.Router();

router.get('/matches', function (req, res) {
    res.render('matches', {});
});

module.exports = router;