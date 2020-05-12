const mongoose = require('mongoose');

const rentSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Rent must belong to a user'],
  },
  car: {
    type: mongoose.Schema.ObjectId,
    ref: 'Car',
    required: [true, 'Rent must belong to a car'],
  },
  days: {
    type: Number,
    required: [true, 'A car must have a days for which is rented'],
    min: [1, 'Days must be minimum 1'],
    max: [7, 'Renting car is allowed for maximum 1 week'],
  },
  rentedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Rent = mongoose.model('Rent', rentSchema);

module.exports = Rent;
