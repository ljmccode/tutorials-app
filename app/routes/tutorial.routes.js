const tutorials = require('../controllers/tutorial.controller');
const router = require('express').Router();

// Create a new tutorial
router.post('/', tutorials.create);

// Get all tutorials
router.get('/', tutorials.findAll);

// Get all published tutorials
router.get('/published', tutorials.findAllPublished);

// Get tutorial with id
router.get('/:id', tutorials.findOne);

// Update tutorial with id
router.patch('/:id', tutorials.update);

// Delete tutorial with id
router.delete('/:id', tutorials.delete);

// Delete all tutorials
router.delete('/', tutorials.deleteAll);

module.exports = router;