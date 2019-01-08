let mongoose = require('mongoose');
let schema = mongoose.Schema;

// ## Schema
let AppointmentSchema = schema({
    _doctorID: {type: Schema.Types.ObjectId},
    day: {type: Date},
    time_start: {type: Date}, // talvez colocar apenas 1
    time_end: {type: Date}, // warning at 17:15. auto-terminates at 17:20
    _patientID: {type: Schema.Types.ObjectId}, // if null, it's still available
    status: {type: String},
  },
  {timestamps: true});

// ## Methods
// ########################################


// ########################################
// ## Export model
module.exports = mongoose.model('Appointment', AppointmentSchema);
