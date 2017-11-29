const express = require('express');
const router = express.Router();
const User = require('../db').User;
const UserDetails = require('../db').UserDetails;

router.get('/:username/matches', function (req, res) {
    // get all the matches and render the page.
    /*
    first calculate the match rank.
     */
    const username = req.params.username;
    const cutOffRank = 5;
    const maxRank = 50;
    const minRank = 10;
    UserDetails.findOne({username: username}, function (err, user) {
       const rank = user.rank;
       let lowerBoundary = rank - cutOffRank;
       let higherBoundary = rank + cutOffRank;
       if (lowerBoundary < minRank)
           lowerBoundary = minRank;
       else if(higherBoundary > maxRank)
           higherBoundary = maxRank;
       //console.log('lower boundary:', lowerBoundary);
       //console.log('higher boundary:', higherBoundary);
        UserDetails.find({rank: {$gte: lowerBoundary, $lte: higherBoundary}}, function (err, users) {
            if (err) throw err;
            else {
                // exclude the current user from the users list so that it does not get displayed in matches.
                for(let user of users) {
                    if(user.username === username) {
                        const index = users.indexOf(user);
                        users.splice(index,1);
                    }
                }
                res.render('matches', {users: users, thisUser: username});
            }
        });
    });
});


module.exports = router;