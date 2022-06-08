// RENTALS MODEL
const Sequelize = require('sequelize');
const db = require('../database');

const Rental = db.define('rental', {
  rentalName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rentalType: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['cabin', 'hotel', 'castle', 'house', 'bathhouse' ]]
    },
    defaultValue: 'house'
  },
  location: {
    type: Sequelize.STRING,
    defaultValue: 'Mitaka, Tokyo'
  },
  imageUrls: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    // Marsh house
    defaultValue: ['https://static.wikia.nocookie.net/studio-ghibli/images/8/8c/Marsh_house.jpg/revision/latest?cb=20181030032817','https://i.pinimg.com/originals/73/ad/37/73ad37887612de792d01b66e0d9d7942.jpg','https://64.media.tumblr.com/c918bde29e58d4d53100704c4e1a6472/tumblr_orwp1xCKCJ1qefgdko5_540.jpg' ]
  },
  pricePerNight: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1
    },
    defaultValue: 100
  }
});

module.exports = Rental;
