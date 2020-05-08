const router = require('express').Router();
const carsController = require('../controllers/carsController');
const authController = require('../controllers/authController');

router
  .route('/')
  .get(authController.protect, carsController.getAll)
  .post(authController.protect, carsController.addCar);

router
  .route('/:id')
  .get(carsController.getCar)
  .patch(authController.protect, carsController.updateCar)
  .delete(authController.protect, carsController.deleteCar);

module.exports = router;
