let mongoose = require('mongoose');
let schema = mongoose.Schema;
let bcrypt = require('bcrypt');

// ## Schema
let PatientSchema = schema({
    username: {type: String, unique: true, required: true, trim: true},
    password: {type: String, required: true},
    name: {type: String},
    birth_date: {type: Date},
    address: {type: String},
    _created_by_doctorID: {type: schema.Types.ObjectId},
    doctor_notes: {type: String},
    _recovery_plan: {type: schema.Types.ObjectId},
    email: {type: String, unique: true, sparse: true, trim: true},
    status: {type: String},
  },
  {timestamps: true});

// ## Methods
// ####################################################

// hashing a password before saving it to the database
// PatientSchema.pre('save', function(next) {
//   let patient = this;
//   bcrypt.hash(patient.password, 10, function(err, hash) {
//     if (err) {
//       return next(err);
//     }
//     patient.password = hash;
//     next();
//   });
// });

// ####################################################
// ## Export model
module.exports = mongoose.model('Patient', PatientSchema);
