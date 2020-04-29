const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const constants = require('../constants');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide your username'],
    minlength: [
      constants.SHORT_STRING_MIN_LENGTH,
      `An username must have ${constants.SHORT_STRING_MIN_LENGTH} or more characters`,
    ],
    maxlength: [
      constants.SHORT_STRING_MAX_LENGTH,
      `An username must have ${constants.SHORT_STRING_MAX_LENGTH} or less characters`,
    ],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.isPasswordCorrect = async (
  incomingPassword,
  actualPassword
) => await bcrypt.compare(incomingPassword, actualPassword);

const User = mongoose.model('User', userSchema);

module.exports = User;
