// API ROUTES
const router = require('express').Router();

// Matches routes
router.use('/users', require('./users'));

// 404 Error Handler
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
