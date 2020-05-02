const router = require('express').Router();
const carsController = require('../controllers/carsController');

router.route('/').get(carsController.getAll).post(carsController.addCar);

router
  .route('/:id')
  .get(carsController.getCar)
  .patch(carsController.updateCar)
  .delete(carsController.deleteCar);

module.exports = router;
