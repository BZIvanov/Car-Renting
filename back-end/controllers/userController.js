const catchAsync = require('../utils/catchAsync');
const Rent = require('../models/rentModel');

exports.getMyRents = catchAsync(async (req, res, next) => {
  const rents = await Rent.find({ owner: req.user._id });
  console.log(rents);

  res.status(200).json({
    status: 'success',
    data: {
      rents,
    },
  });
});
