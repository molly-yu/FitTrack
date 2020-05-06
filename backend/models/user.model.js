const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, // trim white space
        minlength: 3
    },
    height: {
        type: Number, required: true
    },
    weight: {
        type: Number, required: true
    },
    targetWeight: {
        type: Number, required: false
    },
    bmi: {
        type: Number,
        default: function() {
          return (this.weight/(this.height * this.height))
        }
      }
},{
    timestamps: true, // when created, modified
});
 

const User = mongoose.model('User', userSchema);

module.exports = User;
