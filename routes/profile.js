const express = require('express');
const router = express.Router();

router.get('/profile', function (req, res) {
    res.render('profile', {});
});

module.exports = router;