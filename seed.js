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
      'https://www.ghibli.jp/gallery/howl049.jpg',

      'https://i.pinimg.com/originals/a5/5b/af/a55baff7488a16d5e1b77112386ad6d4.jpg',

      'https://www.ghibli.jp/gallery/howl020.jpg',

      'https://i.pinimg.com/originals/12/b5/b7/12b5b7725fc5b3b092a3a7d4e5768205.jpg',

      'https://i.pinimg.com/originals/62/0a/8c/620a8cfec40dd9abfc8b008a0b87895b.png'
    ]
  },
  {
    rentalName: 'Yubaba\'s Traditional Japanese Bathhouse',
    rentalType: 'bathhouse',
    location: 'Spirit Realm',
    pricePerNight: 300,
    imageUrls: [
      'https://images.adsttc.com/media/images/6246/e768/3e4b/3186/c600/0004/slideshow/d4epnpx-9cb848c3-9d6b-48b0-beb9-fe9dce8f9460.jpg?1648813921',

      'https://www.ghibli.jp/gallery/chihiro011.jpg',

      'https://i.pinimg.com/originals/e4/1c/3d/e41c3d8819a57a84b1c8a4acb49534ee.jpg',

      'https://www.ghibli.jp/gallery/chihiro031.jpg',

      'https://www.ghibli.jp/gallery/chihiro003.jpg'
    ]
  },
  {
    rentalName: 'Kiki\'s Newly Renovated Bakery Loft',
    rentalType: 'house',
    location: 'City of Koriko',
    pricePerNight: 125,
    imageUrls: [
      'https://i.pinimg.com/originals/4e/db/3a/4edb3ac53c586f9f8044eaacf2f20d09.jpg',

      'https://i.imgur.com/aRmmhZf.png',

      'https://i.pinimg.com/originals/08/5d/1b/085d1bd42b2fb193d4f8c50a5cd7cac5.jpg',

      'https://i.pinimg.com/originals/ba/09/fa/ba09fa142f3918296fa38ba88ac2a418.png',

      'https://m.media-amazon.com/images/M/MV5BZGY4NmQwNTYtODhmNS00NDRjLTgwNTQtYzE4YzVjYzIwNzE3XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg',

      'https://pbs.twimg.com/media/DjbxgLoXcAAFtDo.jpg'
    ]
  },
  {
    rentalName: 'Satsuki and Mei\'s Relaxing Countryhouse',
    rentalType: 'house',
    location: ' Tokorozawa City, Saitama Prefecture',
    pricePerNight: 150,
    imageUrls: [
      'https://www.boredpanda.com/blog/wp-content/uploads/2020/03/my-neighbor-totoro-satsuki-mei-house-japan-1-5e7de518d84fd__700.jpg',

      'https://ichef.bbci.co.uk/news/976/cpsprodpb/2144/production/_104761580_273ad8a4009582445333a570bcecb221.jpg',

      'https://i.pinimg.com/originals/5b/2e/ca/5b2eca15fb374690d5726e0c91079e42.jpg',

      'https://www.ghibli.jp/gallery/totoro025.jpg',

      'https://www.ghibli.jp/gallery/totoro041.jpg'
    ]
  },
  {
    rentalName: 'Arrietty\'s Spacious Underground Doll House',
    rentalType: 'house',
    location: 'Below Sho\'s House',
    pricePerNight: 50,
    imageUrls: [
      'https://i.pinimg.com/originals/40/c4/7b/40c47bd887cc4ed87b9a6bd01914ee3a.jpg',

      'https://i.pinimg.com/originals/58/1d/2a/581d2a7818538dbb083ab6a77962db75.jpg',

      'https://www.ghibli.jp/gallery/karigurashi002.jpg',

      'https://www.ghibli.jp/gallery/karigurashi028.jpg',

      'https://www.ghibli.jp/gallery/karigurashi001.jpg'

    ]
  },
  {
    rentalName: 'Ponyo\'s Underwater Harbor',
    rentalType: 'harbor',
    location: 'Tomonoura, Hiroshima Prefecture',
    pricePerNight: 500,
    imageUrls: [
      'https://www.ghibli.jp/gallery/ponyo050.jpg',
      'https://www.ghibli.jp/gallery/ponyo023.jpg',
      'https://www.ghibli.jp/gallery/ponyo001.jpg',
      'https://www.ghibli.jp/gallery/ponyo005.jpg',
      'https://www.ghibli.jp/gallery/ponyo013.jpg'
    ]
  },
  {
    rentalName: 'Princess Mononoke\'s Minimalist Cabin',
    rentalType: 'cabin',
    location: 'Cedar Forest',
    pricePerNight: 10,
    imageUrls: [
      'https://data.whicdn.com/images/317557760/original.jpg',

      'https://www.ghibli.jp/gallery/mononoke023.jpg',

      'https://64.media.tumblr.com/58139b7e80bf4793b65a3a8f2e14c335/tumblr_ojrv9zlGEF1qa9gmgo9_1280.jpg',

      'https://64.media.tumblr.com/1bf3daade9ec1e30313efce133dd4595/tumblr_odce5dohW91uer6cyo2_1280.png',

      'https://www.ghibli.jp/gallery/mononoke010.jpg'
    ]
  },
  {
    rentalName: 'Hotel Kusakaru',
    rentalType: 'hotel',
    location: 'Karuizawa, Nagano Prefecture',
    pricePerNight: 800,
    imageUrls: [
      'https://images.lifestyleasia.com/wp-content/uploads/sites/3/2020/02/10011812/Hassan-Rashid-on-Youtube-e1579674659229-1024x545.jpg',

      'https://www.ghibli.jp/gallery/kazetachinu050.jpg',

      'https://i.pinimg.com/originals/d7/ba/1c/d7ba1c73c817108fdb8e9532b4934337.jpg',

      'https://www.ghibli.jp/gallery/kazetachinu009.jpg',

      'https://i.imgur.com/9D0Wqbp.jpeg'
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
    const [
      howlsCastle,
      yubabasBathhouse,
      kikisLoft,
      satsukisCountryhouse,
      arriettysDollhouse,
      ponyosHarbor,
      mononokesCabin,
      hotelKusakaru
    ] = await Promise.all(rentalSeeds.map(rental => Rental.create(rental)));

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

