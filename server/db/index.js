// INDEX FOR DATABASE AND MODELS
const db = require('./database');
const User = require('./models/User');
const Rental = require('./models/Rental');
const Booking = require('./models/Booking');
const Review = require('./models/Review');

// MODEL ASSOCIATIONS

// User/Rentals One-to-Many
User.hasMany(Rental, {
  foreignKey: 'hostId'
});
Rental.belongsTo(User, {
  as: 'host'
});

// User/Bookings One-to-Many
User.hasMany(Booking, {
  foreignKey: 'guestId'
});
Booking.belongsTo(User, {
  as: 'guest'
});

// User/Reviews One-to-Many
User.hasMany(Review);
Review.belongsTo(User);

// Rental/Reviews One-to-Many
Rental.hasMany(Review);
Review.belongsTo(Rental);

// Booking/Rental One-to-One
Rental.hasOne(Booking);
Booking.belongsTo(Rental);
// generates rentalId in Booking model


module.exports = {
  db,
  User,
  Rental,
  Booking,
  Review
}
