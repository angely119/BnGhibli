// API/RENTALS ROUTES
const router = require('express').Router();
const { User, Rental, Booking, Review } = require('../db');

// GET /api/rentals/
router.get('/', async (req, res, next) => {
  try {
    const rentals = await Rental.findAll({
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
    // can set guest and rental in req.body
    res.send(await newBooking.reload({
      include: ['guest', Rental]
    })); // sends back the new Booking including guest and rental
  } catch (error) {
    next(error);
  }
})

module.exports = router;
