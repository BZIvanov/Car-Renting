const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Car = require('../models/carModel');

mongoose
  .connect(process.env.DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((connection) => {
    console.log(
      `DB connection successful and ready for ${connection.connections[0].host}`
    );
  });

mongoose.connection.once('connected', async (err) => {
  if (err) {
    return console.log(err);
  }

  const carCount = await Car.countDocuments();
  if (carCount > 0) {
    return;
  }

  const seedDataPath = path.join(__dirname, 'seedData.json');
  const cars = fs.readFileSync(seedDataPath, 'utf8');
  await Car.collection.insertMany(JSON.parse(cars));
});
