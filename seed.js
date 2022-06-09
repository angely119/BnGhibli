const { db, User, Rental, Booking, Review } = require('./server/db');

const userSeeds = [
  {
    username: 'chihiro',
    email: 'chihiro.ogino@ghibli.com',
    password: 'chihiro',
    profileImageUrl: 'https://pbs.twimg.com/media/EZKcz5aUEAEWm6R?format=jpg&name=360x360',
    bio: 'I traveled a lot with my family growing up and have had enriching experiences. I am excited to continue this journey with my friends and look forward to meeting new ones along the way!'
  },
  {
    username: 'howl',
    email: 'howl.pendragon@ghibli.com',
    password: 'howl',
    profileImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5ib9j9TdMQrzDOKjuzQrL_T9Z46Qp2ZlWQ&usqp=CAU',
    bio: 'My wife and I are thrilled to welcome guests from around the world to our wonderful bed and breakfast. We\'re huge explorers ourselves, as we\'ve never been able to stay in one place for long. Our goal is to provide a relaxing, and most of all, magical experience to all our guests.'
  },
  {
    username: 'kiki',
    email: 'kikideliveries@ghibli.com',
    password: 'kiki',
    profileImageUrl: 'https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg/revision/latest?cb=20210214125850',
    bio: 'I started travelling by myself at a young age and have grown to love the experience of meeting new people and exploring the local spots. I currently run my own delivery service so I am more than happy to help my guests explore the town.'
  },
  {
    username: 'satsuki',
    email: 'satsukilovestotoro@ghibli.com',
    password: 'satsuki',
    profileImageUrl: 'https://cdn.vox-cdn.com/thumbor/Nj5mi9vjISyj2xlQkHHYnLaaGQs=/68x0:713x484/1400x1400/filters:focal(68x0:713x484):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/36484530/Screen_Shot_2014-08-04_at_1.42.09_PM.0.png',
    bio: 'My little sister Mei and I moved to this beautiful countryhouse in Tokorozawa City several years ago and fell in love with the village ever since. Located in a quiet area by the Tsukamori forest, our guests can take a relaxing nap in the garden or indulge in the endless exciting outdoor activities available during the summertime.'
  },
  {
    username: 'arrietty',
    email: 'arrietty.clock@ghibli.com',
    password: 'arrietty',
    profileImageUrl: 'https://static.wikia.nocookie.net/studio-ghibli/images/c/c7/Arrietty_Berry.jpg/revision/latest?cb=20171115034601',
    bio: 'My family and I have been living in this wonderful house for years. I\'m a huge fan of interior decoration and plant mom so our space aims to bring the outside in. I love to curl up with a book in the chair or take a relaxing soak in the tub by the lush garden leaves while our guests are guaranteed to leave our urban oasis feeling healed and relaxed.'
  }
];

const rentalSeeds = [
  {
    rentalName: 'Howl\'s Moving Castle',
    rentalType: 'castle',
    location: 'Porthaven, Ingary',
    pricePerNight: 200,
    imageUrls: [
      'https://static.wikia.nocookie.net/studio-ghibli/images/8/81/Howl_Castle.png/revision/latest/scale-to-width-down/1000?cb=20200906005430',
      'https://static.wikia.nocookie.net/studio-ghibli/images/8/8a/Howl_Door.jpg/revision/latest?cb=20201107011906',
      'https://pbs.twimg.com/media/EYFwDtcWAAA3qTt.jpg',
      'https://www.dia.org/sites/default/files/styles/events_main/public/howl-2.jpg?itok=cVUip4u1',
      'https://static.wikia.nocookie.net/howlscastle/images/5/51/Secret_Garden.jpg/revision/latest?cb=20120510010045'
    ]
  },
  {
    rentalName: 'Yubaba\'s Traditional Japanese Bathhouse',
    rentalType: 'bathhouse',
    location: 'Spirit Realm',
    pricePerNight: 300,
    imageUrls: [
      'https://static.wikia.nocookie.net/studio-ghibli/images/0/00/Bath_house_%282%29.jpg/revision/latest/scale-to-width-down/1000?cb=20181209051335',
      'https://i.pinimg.com/originals/e4/1c/3d/e41c3d8819a57a84b1c8a4acb49534ee.jpg',
      'https://64.media.tumblr.com/ab4b87110ec0a40b9bea497ab1c0b9ab/tumblr_oyx20gHY8B1wg7crao1_1280.jpg',
      'https://static.wikia.nocookie.net/studio-ghibli/images/9/94/Bathhouse_Top_Floor_Hall.png/revision/latest?cb=20181209051225'
    ]
  },
  {
    rentalName: 'Kiki\'s Renovated Bakery Loft',
    rentalType: 'house',
    location: 'City of Koriko',
    pricePerNight: 125,
    imageUrls: [
      'https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Gutiokipanja.jpg/revision/latest?cb=20181030225337',
      'https://static.wikia.nocookie.net/studio-ghibli/images/2/20/Kikicels_%285%29.jpg/revision/latest?cb=20200617234616',
      'https://static.wikia.nocookie.net/studio-ghibli/images/2/27/Kiki%27s_Delivery_Service_-_Ending.jpg/revision/latest/scale-to-width-down/1000?cb=20200704160447',
      'https://static.wikia.nocookie.net/studio-ghibli/images/b/b2/Kiki%27s_Delivery_Service_-_Busy_street.jpg/revision/latest/scale-to-width-down/1000?cb=20200615220626'
    ]
  },
  {
    rentalName: 'Satsuki and Mei\'s Relaxing Countryhouse',
    rentalType: 'cabin',
    location: ' Tokorozawa City, Saitama Prefecture',
    pricePerNight: 150,
    imageUrls: [
      'https://www.boredpanda.com/blog/wp-content/uploads/2020/03/my-neighbor-totoro-satsuki-mei-house-japan-1-5e7de518d84fd__700.jpg',
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/2144/production/_104761580_273ad8a4009582445333a570bcecb221.jpg',
      'https://i.pinimg.com/originals/5b/2e/ca/5b2eca15fb374690d5726e0c91079e42.jpg',
      'https://static.wikia.nocookie.net/studio-ghibli/images/5/50/Totoro_025.jpg/revision/latest/scale-to-width-down/1000?cb=20201125014954'
    ]
  },
  {
    rentalName: 'Arietty\'s Spacious Underground Doll House',
    rentalType: 'house',
    location: 'Koganei, Tokyo',
    pricePerNight: 10,
    imageUrls: [
      'https://i.pinimg.com/originals/40/c4/7b/40c47bd887cc4ed87b9a6bd01914ee3a.jpg',
      'https://i.pinimg.com/originals/58/1d/2a/581d2a7818538dbb083ab6a77962db75.jpg',
      'https://asianwiki.com/images/f/f7/The_Secret_World_of_Arrietty.jpg',
      'https://i.pinimg.com/originals/f4/0a/25/f40a25ee33108d96cc9a75bc5f43ba11.jpg'
    ]
  }
];

const bookingSeeds = [
  {
    checkInDate: new Date('January 10, 2023'),
    checkOutDate: new Date('January 20, 2023'),
    totalGuests: 3
  },
  {
    checkInDate: new Date('May 10, 2023'),
    checkOutDate: new Date('May 20, 2023'),
    totalGuests: 5
  },
  {
    checkInDate: new Date('August 10, 2022'),
    checkOutDate: new Date('August 20, 2022'),
    totalGuests: 10
  }
];

const reviewSeeds = [
  {
    rating: 5,
    comment: 'I found this place to be very clean, comfortable, and perfectly sized for one to two people. The bathroom and shower was excellent. You could tell that the host made sure that the apartment is very clean. Furthermore, they clearly explained the area, and also arranged a taxi for me from the apartment to the airport after I checked out. For the price, I honestly think this is a bargain. I am looking forward to staying here again one day.'
  },
  {
    rating: 4,
    comment: 'Couldn\'t have been better. Apartment was beautiful and equipped with everything I needed (and lots of lovely touches / local design). The host was very helpful and the location was great.'
  },
  {
    rating: 4,
    comment: 'The house is very nice and comfortable! Location is very convenient, near shops and public transport.'
  },
  {
    rating: 5,
    comment: 'Very clean and stylish place with everything you needed. In a great location, right near heaps of great places to eat! The host was very accommodating and helpful letting us drop our bags off early and checking in on us regularly to make sure we had everything we needed. Would definitely stay here again!'
  },
  {
    rating: 4,
    comment: 'Top-notch AirBnB experience, polite and accurate communication combined with elegant and well located apartment.'
  },
  {
    rating: 4,
    comment: 'I was just crashing for one night before I headed to the airport, but I wish I could have stayed longer. This listing had absolutely everything I needed, down to laundry detergent. I\'d recommend it!'
  },
  {
    rating: 4,
    comment: 'The space was absolutely what was promised. The bed was super comfy and clean.  I will definitely be looking to stay the next time I come to this city.'
  },
  {
    rating: 5,
    comment: 'We loved our stay! We felt very comfortable, safe, and it was very clean. The location was great, too. We just loved every minute of our visit.'
  }
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    // Create Users
    const [ chihiro, howl, kiki, satsuki, arrietty ] = await Promise.all(userSeeds.map(user => User.create(user)));

    // Create Rentals
    const [ howlsCastle, yubabasBathhouse, kikisLoft, satsukisCountryhouse, arriettysDollhouse ] = await Promise.all(rentalSeeds.map(rental => Rental.create(rental)));

    // Create Bookings
    const [booking1, booking2, booking3] = await Promise.all(bookingSeeds.map(booking => Booking.create(booking)));

    // Create Reviews
    const reviews = await Promise.all(reviewSeeds.map(review => Review.create(review)));

    // Rentals belongTo Hosts
    await howlsCastle.setHost(howl);
    await yubabasBathhouse.setHost(chihiro);
    await kikisLoft.setHost(kiki);
    await satsukisCountryhouse.setHost(satsuki);
    await arriettysDollhouse.setHost(arrietty);

    // Bookings belongTo Guests and Rentals
    await booking1.setGuest(howl);
    await booking1.setRental(yubabasBathhouse);

    await booking2.setGuest(kiki);
    await booking2.setRental(howlsCastle);

    await booking3.setGuest(satsuki);
    await booking3.setRental(arriettysDollhouse);

    // Review belongsTo User and Rental
    await reviews[0].setUser(howl);
    await reviews[0].setRental(yubabasBathhouse);

    await reviews[1].setUser(kiki);
    await reviews[1].setRental(howlsCastle);

    await reviews[2].setUser(satsuki);
    await reviews[2].setRental(arriettysDollhouse);

  } catch (error) {
    console.log(error);
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Oh noes! Something went wrong!');
      console.error(err);
      db.close();
    });
};

