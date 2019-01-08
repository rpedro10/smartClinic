let mongoose = require('mongoose');
let schema = mongoose.Schema;

// ## Schema
let ExerciseSchema = schema({
  description: {type: String},
  media_location: {type: String},
  status: {type: String},
});

// ## Methods
// ####################################


// ####################################
// ## Export model
module.exports = mongoose.model('Exercise', ExerciseSchema);