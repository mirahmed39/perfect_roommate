// db.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require('bcrypt');
//const SALT_WORK_FACTOR = 10;

// schemas
const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true},
    passwordHash : {type: String, required: true},
    matches: [userSchema]
});
/*
// following block of code upto UserSchema.methods is taken from mongodb website's password's authentication page.
userSchema.pre('save', function(next) {
    const user = this;

// only hash the password if it has been modified (or is new)
    if (!user.isModified('passwordHash')) return next();

// generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.passwordHash, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.passwordHash = hash;
            next();
        });
    });
});

User.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.passwordHash, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
*/
const questionnaireSchema = new Schema({
    questions: [String]
});

const userDetailsScehma = new Schema({
    user: userSchema,
    answers: [Number],
    rank: Number
});

//const User = mongoose.model('User', userSchema);
//connecting to the database.
mongoose.connect('mongodb://localhost/perfectRoommate');


// export the models to use them outside of this file.
module.exports = {
  User: mongoose.model('User', userSchema),
  Questions: mongoose.model('Questions', questionnaireSchema),
  UserDetails: ongoose.model('UserDetails', userDetailsScehma)
};
