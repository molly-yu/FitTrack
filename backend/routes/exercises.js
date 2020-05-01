const router = require('express').Router();
let Exercise = require('../models/exercise.model'); // mongoose model

router.route('/').get((req,res) =>{ // http get requests
    Exercise.find()
    .then(exercises => res.json(exercises)) // return exercises in json format
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => { // http post requests
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({username, description, duration, date}); // create new exercise

    newExercise.save()
     .then(() => res.json('Exercise added!'))
     .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;