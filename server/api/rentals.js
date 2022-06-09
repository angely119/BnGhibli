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


module.exports = router;
