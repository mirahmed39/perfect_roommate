// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const db = require('./db');
const path = require('path');
const publicPath = path.resolve(__dirname, 'public');

// getting the routes
const changequestion = require('./routes/changequestion');
const  layout= require('./routes/layout');
const like = require('./routes/like');
const login = require('./routes/login');
const matches = require('./routes/matches');
const profile = require('./routes/profile');
const questionnaire = require('./routes/questionnaire');
const register = require('./routes/register');
const settings = require('./routes/settings');

// setting session options (code used from online slides)
const sessionOptions = {
    secret: 'secret for signing session id',
    saveUninitialized: false,
    resave: false
};
app.use(session(sessionOptions));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(publicPath));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// route middleware goes here.
app.use('/', register);
app.use('/changequestion', changequestion);
app.use('/like', like);
app.use('/login', login);
app.use('/matches', matches);
app.use('/profile', profile);
app.use('/questionnaire', questionnaire);
app.use('/settings', register);

app.listen(3000);