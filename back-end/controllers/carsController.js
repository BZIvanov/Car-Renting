const Car = require('../models/carModel');
const Rent = require('../models/rentModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

exports.addCar = catchAsync(async (req, res, next) => {
  const carData = {
    ...req.body,
    creator: req.user._id,
  };
  const newCar = await Car.create(carData);

  res.status(201).json({
    status: 'success',
    data: {
      car: newCar,
    },
  });
});

exports.getAll = catchAsync(async (req, res, next) => {
  const allCarsCount = await Car.countDocuments({ isRented: false });
  const filters = new APIFeatures(Car.find({ isRented: false }), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const cars = await filters.docs;

  res.status(200).json({
    status: 'success',
    results: allCarsCount,
    data: {
      cars,
    },
  });
});

exports.getCar = catchAsync(async (req, res, next) => {
  const car = await Car.findById(req.params.id);

  if (!car) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      car,
    },
  });
});

exports.updateCar = catchAsync(async (req, res, next) => {
  const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!car) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      car,
    },
  });
});

exports.deleteCar = catchAsync(async (req, res, next) => {
  const car = await Car.findByIdAndDelete(req.params.id);

  if (!car) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.rentCar = catchAsync(async (req, res, next) => {
  const rentData = {
    owner: req.user._id,
    car: req.body.id,
    days: req.body.days,
  };

  const car = await Car.findById(req.body.id);
  if (!car || car.isRented) {
    return next(new AppError('The car is not existing or already rented', 404));
  }

  await Car.findByIdAndUpdate(req.body.id, { isRented: true });

  await Rent.create(rentData);

  res.status(201).json({
    status: 'success',
    data: null,
  });
});
