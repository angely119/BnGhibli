// API ROUTES
const router = require('express').Router();

// Matches routes
router.use('/users', require('./users'));
router.use('/rentals', require('./rentals'));
router.use('/bookings', require('./bookings'));
router.use('/reviews', require('./reviews'));


// 404 Error Handler
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
