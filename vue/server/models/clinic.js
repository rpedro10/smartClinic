let mongoose = require('mongoose');
mongoose.Promise = Promise;
let bcrypt = require('bcrypt');
let schema = mongoose.Schema;

// ## Schema
let ClinicSchema = schema({
      username: {type: String, unique: true, required: true, trim: true},
      password: {type: String, required: true},
      email: {type: String, unique: true, sparse: true, trim: true},
      status: {type: String},
      contact: {type: String},
      doctor: {type: String},
      location: {type: String},
      instagram: {type: String},
      facebook: {type: String},
      website: {type: String},
    },
    {timestamps: true});

// ## Methods
// ##################################################

// hashing a password before saving it to the database
// AdminSchema.pre('save', function(next) {
//   let admin = this;
//   bcrypt.hash(admin.password, 10, function(err, hash) {
//     if (err) {
//       return next(err);
//     }
//     admin.password = hash;
//     next();
//   });
// });

// ##################################################
// ## Export model
module.exports = mongoose.model('Clinic', ClinicSchema);
