const express = require('express');
const router = express.Router();

router.get('/settings', function (req, res) {
    res.render('settings', {});
});

module.exports = router;