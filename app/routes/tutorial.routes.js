const tutorials = require('../controllers/tutorial.controller');
const router = require('express').Router();

// Create a new Tutorial
router.post('/', tutorials.create);

module.exports = router;