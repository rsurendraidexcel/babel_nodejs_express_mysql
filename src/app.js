import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// Database connection 
import connection from './config/db';
// const con = require("./config/db")
// import logger from 'morgan';

// set routes path
import indexRouter from './routes/indexRoute';
import usersRouter from './routes/usersRoute';

const  app = express();

// connecting route to database
app.use(function(req, res, next) {
  req.con = connection;
  next();
});

// settng the middleware function callBack
// app.use(logger('dev'));
// app.use(express.json());

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/', indexRouter);

app.use('/users', usersRouter);

export default app;