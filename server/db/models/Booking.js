// BOOKINGS MODEL
const Sequelize = require('sequelize');
const db = require('../database');
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const Booking = db.define('booking', {
  checkInDate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  checkOutDate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  totalGuests: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
});

// Class Methods
Booking.checkAvailability = async function(checkInDate, checkOutDate, rentalId) {
    const bookedDates = await Booking.findAll({
      where: {
        rentalId: rentalId
      },
      attributes: ['checkInDate', 'checkOutDate']
    });
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

module.exports = Booking;
