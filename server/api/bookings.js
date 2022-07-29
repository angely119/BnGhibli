// API/BOOKINGS ROUTES
const router = require('express').Router();
const verifyToken = require('../auth/verifyToken');
const { User, Rental, Booking, Review } = require('../db');
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')


// GET /api/bookings/ - returns bookings for the logged-in user
router.get('/', verifyToken, async (req, res, next) => {
  try {
    const bookings = await Booking.findAll({
      where: {
        guestId: req.user.id
      },
      include: [Rental]
    });
    res.send(bookings);
  } catch (error) {
    next(error);
  }
});

const checkAvailability = async (checkInDate, checkOutDate, rentalId) => {
  // First find all the booked reservaations for this reservation
  const bookedDates = await Booking.findAll({
    where: {
      rentalId: rentalId
    },
    attributes: ['checkInDate', 'checkOutDate']
  });
  // loop through all the bookedDates objects and see if the newBookingInterval overlaps with any of the bookedDates
  // if overlap return false
  let isAvailable = true;
  if (bookedDates.length) {
      bookedDates.forEach((bookedDate) => {
      const isOverlap = areIntervalsOverlapping(
        { start: new Date(checkInDate), end: new Date(checkOutDate) },
        { start: new Date(bookedDate.checkInDate), end: new Date(bookedDate.checkOutDate)},
        { inclusive: true }
      );
      if (isOverlap) isAvailable = false;
    })
  }
  return isAvailable;
};

// POST /api/bookings - Creates a booking for a rental for the logged in user
router.post('/', verifyToken, async (req, res, next) => {
  try {
    const isAvailable = await checkAvailability(req.body.checkInDate, req.body.checkOutDate, req.body.rentalId)
    if (isAvailable) {
      const newBooking = await Booking.create(req.body);
      await newBooking.setGuest(req.user);
      // req.body includes rentalId
      res.send(await newBooking.reload({
        include: ['guest', Rental]
      })); // sends back the new Booking including guest and rental
    } else {
      throw new Error("Cannot place booking. Date is booked.")
    }
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
