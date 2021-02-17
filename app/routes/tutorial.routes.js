const tutorials = require('../controllers/tutorial.controller');
const router = require('express').Router();

// Create a new tutorial
router.post('/', tutorials.create);

// Get all tutorials
router.get('/', tutorials.findAll);

// Get tutorial with id
router.get('/:id', tutorials.findOne);

module.exports = router;