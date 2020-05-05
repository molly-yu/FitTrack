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
    const caloriesBurned = Number(req.body.caloriesBurned);

    const newExercise = new Exercise({username, description, duration, date, caloriesBurned}); // create new exercise

    newExercise.save()
     .then(() => res.json('Exercise added!'))
     .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => { // route to exercise id
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').delete((req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err)); 
});

router.route('/update/:id').post((req,res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);
        exercise.caloriesBurned = Number(req.body.caloriesBurned);

        exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: '+ err));

    })
    .catch(err => res.status(400).json('Error: ' + err));
    
});

module.exports = router;