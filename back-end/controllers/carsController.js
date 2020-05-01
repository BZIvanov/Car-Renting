const Car = require('../models/carModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

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

module.exports.getCar = catchAsync(async (req, res, next) => {
  const car = await Car.find({ _id: req.params.id });

  res.status(200).json({
    status: 'success',
    data: {
      car,
    },
  });
});

module.exports.deleteCar = catchAsync(async (req, res, next) => {
  const car = await Car.findByIdAndDelete(req.params.id);

  if (!car) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
