const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // to connect to mongoDB database

require('dotenv').config();

const app = express(); // create express server
const port = process.env.PORT || 5000;

app.use(cors()); // middleware
app.use(express.json()); 

const uri = process.env.ATLAS_URI; // database uri from mongoDB
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => { // start the server: nodemon server
    console.log('Server is running on port: ${port}');
});
