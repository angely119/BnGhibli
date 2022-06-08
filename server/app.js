// SETS UP EXPRESS APP/SERVER

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API ROUTES
app.use('/api', require('./api'));

// Serve up index.html
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// 404 Error Handler
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// 500 Error Handler
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
})

module.exports = app;

