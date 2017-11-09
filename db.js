// db.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URLSlugs = require('mongoose-url-slugs');

// schemas
const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    gender: {type: String, required:true},
    matches: [String] // stores array of slugs of other users.
});

/* hashing password mechanism.
UserSchema.pre('save', function(next) {
    const user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('passwordHash')) return next();
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        // hash the password using new salt
        bcrypt.hash(user.passwordHash, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.passwordHash = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.passwordHash, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
}; */

const QuestionnaireSchema = new Schema({
    question: {type: String, required:true}
});

const UserDetailsSchema = new Schema({
    username: {type: String, required:true},
    answers: [Number],
    rank: Number
});
// url slug plugin.
UserSchema.plugin(URLSlugs('username'));

// register the models
const User = mongoose.model('User', UserSchema);
const Questionnaire = mongoose.model('Questionnaire', QuestionnaireSchema);
const UserDetails = mongoose.model('UserDetails', UserDetailsSchema);

//connecting to the database.
mongoose.connect('mongodb://localhost/perfectRoommate');

// export the models to use them outside of this file.
module.exports = {
  User: User,
  Questionnaire: Questionnaire,
  UserDetails: UserDetails
};
