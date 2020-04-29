const Car = require('../models/carModel');
const catchAsync = require('../utils/catchAsync');

module.exports.addCar = catchAsync(async (req, res, next) => {
  const newCar = await Car.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      car: newCar,
    },
  });
});

module.exports.getAll = catchAsync(async (req, res, next) => {
  const cars = await Car.find({ isRented: false });

  res.status(200).json({
    status: 'success',
    results: cars.length,
    data: {
      cars,
    },
  });
});
