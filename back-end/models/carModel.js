const mongoose = require('mongoose');
const constants = require('../constants');

const carSchema = new mongoose.Schema({
  model: {
    type: String,
    trim: true,
    required: [true, 'A car must have a model'],
    minlength: [
      constants.SHORT_STRING_MIN_LENGTH,
      `A car model must have ${constants.SHORT_STRING_MIN_LENGTH} or more characters`,
    ],
    maxlength: [
      constants.SHORT_STRING_MAX_LENGTH,
      `A car model must have ${constants.SHORT_STRING_MAX_LENGTH} or less characters`,
    ],
  },
  image: {
    type: String,
    trim: true,
    required: [true, 'A car must have an image'],
    maxlength: [
      constants.LONG_STRING_MAX_LENGTH,
      `A car image must have ${constants.LONG_STRING_MAX_LENGTH} or less characters`,
    ],
  },
  pricePerDay: {
    type: Number,
    required: [true, 'A car must have a rent price'],
    min: [
      constants.MIN_PRICE,
      `Rent price must be above ${constants.MIN_PRICE}`,
    ],
    max: [
      constants.MAX_PRICE,
      `Rent price must be below ${constants.MAX_PRICE}`,
    ],
  },
  isRented: {
    type: Boolean,
    default: false,
  },
  expiresOn: {
    type: Date,
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
