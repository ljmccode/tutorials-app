const mongoose = require('mongoose');
const mongo_URL = require('../config/db.config');

mongoose.connect(mongo_URL.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to the database!');
})
    .catch(err => {
        console.log('Cannot connect to the database!', err);
        process.exit();
    });