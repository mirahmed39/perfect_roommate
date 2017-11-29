const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const fileExists = require('file-exists');
const User = require('../db').User;
const UserDetails = require('../db').UserDetails;
const Questionnaire = require('../db').Questionnaire;

// multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '.jpg');
    }
});

router.get('/:username/profile', function (req, res) {
    const username = req.params.username;
    let pictureName;
    User.findOne({username:username}, function (err, user) {
        if (err) throw err;
        else {
            //check if the user uploaded a picture
            const imagePath = path.resolve(__dirname, '../public/images/'+username+'.jpg');
            if(fileExists.sync(imagePath))
                pictureName = username+'.jpg';
            else
                pictureName = 'dummy-profile-picture.png';
            UserDetails.findOne({username: username}, function (err, userDetails) {
                if (err) throw err;
                else{
                    Questionnaire.find(function (err, questionnaire) {
                        res.render('profile', {user: user, questionnaire: questionnaire,
                            userResponses: userDetails.answers,
                            pictureSrc: pictureName, userDescription: userDetails.description});
                    });
                }
            });
        }
    });
});

router.post('/:username/upload-picture', function (req, res) {
    const username = req.params.username;
    const redirectUrlFormat = '/' + username + '/profile';
    const upload = multer({
        storage: storage
    }).single(username);
    upload(req, res, function(err) {
        console.log(req.body);
        res.redirect(redirectUrlFormat);
    });
});

router.post('/:username/add-description', function (req, res) {
    const username = req.params.username;
    const description = req.body.description;
    UserDetails.update({username: username}, {$set :{description: description}}, function (err, user) {
        const redirectUrlFormat = '/' + username + '/profile';
        res.redirect(redirectUrlFormat);
    })
});

module.exports = router;