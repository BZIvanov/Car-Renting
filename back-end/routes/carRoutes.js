const router = require('express').Router();
const carsController = require('../controllers/carsController');
const authController = require('../controllers/authController');

router
  .route('/')
  .get(carsController.getAll)
  .post(authController.protect, carsController.addCar);

router
  .route('/:id')
  .get(carsController.getCar)
  .patch(authController.protect, carsController.updateCar)
  .delete(authController.protect, carsController.deleteCar);

router.route('/rent').post(authController.protect, carsController.rentCar);

module.exports = router;
