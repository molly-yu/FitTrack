const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String, required: true},
    description: { type: String, required: true},
    duration: { type: Number, required: true},
    date: { type: Date, required: true},
    caloriesBurned: {type: Number, required: false},
    strict: false
    // category : {
    //     type : String,
    //     label : "Select One",
    //     autoform : {
    //           options:[ 
    //               {
    //                   label: "Cardio", 
    //                   value: 1},
    //               {
    //                   label: "Strength", 
    //                   value: 2},
    //               {
    //                   label: "Low-intensity",
    //                   value: 3}
    //           ]
    //     }
    // }
},{
    timestamps: true, // when created, modified
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
