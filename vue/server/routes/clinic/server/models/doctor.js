let mongoose = require('mongoose');
let schema = mongoose.Schema;
let bcrypt = require('bcrypt');

// ## Schema
let DoctorSchema = schema({
    username: {type: String, unique: true, required: true, trim: true},
    password: {type: String, required: true},
    name: {type: String},
    photo_url: {type: String},
    _created_by_adminID: {type: schema.Types.ObjectId},
    licenses: {type: Number},
    email: {type: String, unique: true, sparse: true, trim: true},
    specialty: {type: String},
    status: {type: String},

  },
  {timestamps: true});

// ## Methods
// #########################################

// hashing a password before saving it to the database
// DoctorSchema.pre('save', function(next) {
//   let doctor = this;
//   bcrypt.hash(doctor.password, 10, function(err, hash) {
//     if (err) {
//       return next(err);
//     }
//     doctor.password = hash;
//     next();
//   });
// });

// #########################################
// ## Export model
module.exports = mongoose.model('Doctor', DoctorSchema);

