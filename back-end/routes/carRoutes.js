const router = require('express').Router();
const carsController = require('../controllers/carsController');

router.route('/').get(carsController.getAll).post(carsController.addCar);

module.exports = router;
