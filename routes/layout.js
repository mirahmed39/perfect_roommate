const express = require('express');
const router = express.Router();

router.get('/layout', function (req, res) {
    res.render('layout', {});
});

module.exports = router;