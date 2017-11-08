const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../db').User;

router.get('/login', function (req, res) {
    res.render('login', {});
});


router.post('/login', function (req, res) {

});
module.exports = router;