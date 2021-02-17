const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    published: {
        type: Boolean
    }
}, {
    timestamps: true
});

// removes underscore from id and returns object
tutorialSchema.method('toJSON', function() {
    const { __var, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

const Tutorial = mongoose.model('Tutorial', tutorialSchema);

module.exports = Tutorial;