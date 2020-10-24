var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sequelize = require('./connection');
const { v4: uuidv4 } = require('uuid');
var UserModel = require('./models/Users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));


const authenDB = async () => {
  await sequelize.authenticate();
}
authenDB().then(() => {
  app.use('/', indexRouter);
  app.use('/users', async (req, res) => {
    await sequelize.sync({ force: true, alter: true });
    const newUser = await sequelize.models.User.create({
      id: uuidv4(),
      password: "123123123",
      userName: "le1tuan",
      firstName: "Le",
      lastName: "Anh",
      email: "lekoi9x@gmail.com",
      phone: "0909000090",
      address: "108 CU Chinh Lan",
    })
    await newUser.save();
    console.log('DONEE', newUser);
    res.send('respond with a resource');
  });

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  app.listen('8080', () => {
    console.log('server is running port 8080')
  })
});




module.exports = app;
