const router = require('express').Router();
let User = require('../models/user.model'); // mongoose model

router.route('/').get((req,res) =>{ // http get requests
    User.find()
    .then(users => res.json(users)) // return users in json format
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => { // http post requests
    const username = req.body.username;

    const newUser = new User({username}); // create new user

    newUser.save()
     .then(() => res.json('User added!'))
     .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;