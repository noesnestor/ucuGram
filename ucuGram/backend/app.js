var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const { connectToServer } = require('./dbConnection/conn');


var postsRouter = require('./routes/posts');
var usersRouter = require('./routes/users');
var imagesRouter = require('./routes/images');
var profilesRouter = require('./routes/profiles');
var chatPreviewsRouter = require('./routes/chatPreviews');
var chatBetweenUsersRouter = require('./routes/chatBetweenUsers');

var app = express();
connectToServer(console.log);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const API_VERSION = 'v1';

app.use(`/api/${API_VERSION}/posts`, postsRouter);
app.use(`/api/${API_VERSION}/users`, usersRouter);
app.use(`/api/${API_VERSION}/images`, imagesRouter);
app.use(`/api/${API_VERSION}/profiles`, profilesRouter);
app.use(`/api/${API_VERSION}/chatPreviews`, chatPreviewsRouter);
app.use(`/api/${API_VERSION}/chatBetweenUsers`, chatBetweenUsersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
