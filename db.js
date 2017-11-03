// db.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

// schemas
const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true},
    passwordHash : {type: String, required: true},
    matches: [UserSchema]
});

// following block of code upto UserSchema.methods is taken from mongodb website's password's authentication page.
UserSchema.pre(save, function(next) {
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

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const QuestionnaireSchema = new Schema({
    questions: [String]
});

const UserDetailsSchema = new Schema({
    user: UserSchema,
    answers: [Number],
    rank: Number
});


// creating models out of Schemas.
mongoose.model('User', UserSchema);
mongoose.model('Questions', QuestionnaireSchema);
mongoose.model('UserDetails', UserDetailsSchema);

//connecting to the database.
mongoose.connect('mongodb://localhost/perfectRoommate');
