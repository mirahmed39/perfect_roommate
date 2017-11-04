const express = require('express');
const router = express.Router();

router.get('/changequestion', function (req, res) {
    res.render('changequestion', {});
});

module.exports = router;