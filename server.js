const express = require('express');
const cors = require('cors');
require('./app/db/mongoose');
const tutorialRouter = require('./app/routes/tutorial.routes');

const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use('/api/tutorials', tutorialRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});