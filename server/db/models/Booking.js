// BOOKINGS MODEL
const Sequelize = require('sequelize');
const db = require('../database');

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

module.exports = Booking;
