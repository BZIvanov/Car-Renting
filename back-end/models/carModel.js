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
  year: {
    type: Number,
    required: [true, 'A car must have an year, when made'],
    min: [
      constants.MIN_YEAR_MADE,
      `Year must be ${constants.MIN_YEAR_MADE} or above`,
    ],
    max: [
      constants.MAX_YEAR_MADE,
      `Year must be equal or below ${constants.MAX_YEAR_MADE}`,
    ],
  },
  city: {
    type: String,
    trim: true,
    required: [true, 'A car must have a city of registration'],
    minlength: [
      constants.SHORT_STRING_MIN_LENGTH,
      `A car city must have ${constants.SHORT_STRING_MIN_LENGTH} or more characters`,
    ],
    maxlength: [
      constants.SHORT_STRING_MAX_LENGTH,
      `A car city must have ${constants.SHORT_STRING_MAX_LENGTH} or less characters`,
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
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Car must belong to a user'],
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
