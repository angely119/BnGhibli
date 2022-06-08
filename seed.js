const { db, User } = require('./server/db');

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
  }
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(userSeeds.map(user => User.create(user)));
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
}

