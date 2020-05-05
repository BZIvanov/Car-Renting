const router = require('express').Router();
const carsController = require('../controllers/carsController');
const authController = require('../controllers/authController');

router.route('/').get(carsController.getAll).post(carsController.addCar);

router
  .route('/:id')
  .get(carsController.getCar)
  .patch(authController.protect, carsController.updateCar)
  .delete(carsController.deleteCar);

module.exports = router;
