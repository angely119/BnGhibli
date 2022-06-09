// API/BOOKINGS ROUTES
const router = require('express').Router();
const { User, Rental, Booking, Review } = require('../db');

// GET /api/bookings/
router.get('/', async (req, res, next) => {
  try {
    const bookings = await Booking.findAll({
      where: req.query,
      include: ['guest', Rental]
    });
    res.send(bookings);
  } catch (error) {
    next(error);
  }
});

// POST /api/bookings - Creates a booking for a rental
router.post('/', async (req, res, next) => {
  try {
    const newBooking = await Booking.create(req.body);
    // req.body includes rentalId
    // can also set guest in req.body
    res.send(await newBooking.reload({
      include: ['guest', Rental]
    })); // sends back the new Booking including guest and rental
  } catch (error) {
    next(error);
  }
});


// GET /api/bookings/:id
router.get('/:id', async (req, res, next) => {
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: ['guest', Rental]
    });
    res.send(booking);
  } catch (error) {
    next(error);
  }
});

// PUT /api/bookings/:id - Edits a booking
router.put('/:id', async (req, res, next) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    await booking.set(req.body);
    await booking.save();
    // Can update guest/rental too by changing guestId/ rentalId in req.body
    res.send(await booking.reload({
      include: ['guest', Rental]
    }));
    //sends back booking including the guest and rental
  } catch (error) {
    next(error);
  }
});

// DELETE /api/bookings/:id - Removes a booking
router.delete('/:id', async (req, res, next) => {
  try {
    await Booking.destroy({where: {id: req.params.id}});
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
