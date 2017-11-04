const express = require('express');
const router = express.Router();

router.get('/likes', function (req, res) {
    res.render('likes', {});
});

module.exports = router;