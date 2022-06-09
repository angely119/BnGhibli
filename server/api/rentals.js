// API/RENTALS ROUTES
const router = require('express').Router();
const { User, Rental, Booking, Review } = require('../db');

// GET /api/rentals/
router.get('/', async (req, res, next) => {
  try {
    const rentals = await Rental.findAll({
      where: req.query,
      include: ['host', Booking, Review]
    });
    res.send(rentals);
  } catch (error) {
    next(error);
  }
});

// GET /api/rentals/:id
router.get('/:id', async (req, res, next) => {
  try {
    const rental = await Rental.findByPk(req.params.id, {
      include: ['host', Booking, Review]
    });
    res.send(rental);
  } catch (error) {
    next(error);
  }
});

// POST /api/rentals/:rentalId/bookings - Creates a booking for a rental
router.post('/:rentalId/bookings', async (req, res, next) => {
  try {
    const newBooking = await Booking.create(req.body);
    // req.body includes rentalId
    // can set guest in req.body
    res.send(await newBooking.reload({
      include: ['guest', Rental]
    })); // sends back the new Booking including guest and rental
  } catch (error) {
    next(error);
  }
});

// POST /api//rentals/:rental_id/reviews - Creates a review for a rental
router.post('/:rentalId/reviews', async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    // req.body includes rentalId
    // can also set user in req.body
    res.send(await newReview.reload({
      include: [User, Rental]
    })); // sends back the new Booking including guest and rental
  } catch (error) {
    next(error);
  }
});

module.exports = router;
