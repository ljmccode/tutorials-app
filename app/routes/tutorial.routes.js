const tutorials = require('../controllers/tutorial.controller');
const router = require('express').Router();

// Create a new Tutorial
router.post('/', tutorials.create);

router.get('/', tutorials.findAll);

module.exports = router;