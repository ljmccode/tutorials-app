const Tutorial = require('../models/tutorial.model');

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: 'Content can not be empty!'})
        return;
    }

    // Create tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });

    // Save tutorial
    tutorial
        // inserts new document in database
        .save(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while creating the tutorial'
            });
        });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    // if no title query, return all titles
    // new RegExp(title) returns /<title>/
    const condition = title ? { title: { $regex: new RegExp(title), $options: 'i' }} : {};

    Tutorial.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured while creating the tutorial'
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `No tutorial found with id ${id}`})
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving tutorial with id ${id}`
            })
        })
}