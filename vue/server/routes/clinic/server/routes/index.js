let express = require('express');
let router = express.Router();
let Admin = require('../models/admin');
let Doctor = require('../models/doctor');
let Patient = require('../models/patient');
let bcrypt = require('bcrypt');

// POST route for login
router.route('/login')
.post(function(req, res) {
  if (! req.session.hasOwnProperty('type')){
    Admin.findOne({username: req.body.username}, function(err, admin) {
      if (err) {
        return res.json({status: 'ERROR', message: 'Username not of admin!'});
      } else if (admin && admin.status === 'ACTIVE') {
        bcrypt.compare(req.body.password, admin.password,
          function(err, result) {
            if (result === true) {
              req.session.type = 'admin';
              req.session.user = admin;
              res.json({
                status: 'SUCCESS',
                message: 'correct password for ' + admin.username,
                user: admin,
                type: req.session.type,
              });
            } else {
              res.json({
                status: 'ERROR',
                message: 'Wrong password for username ' + admin.username});
            }
          });
      } else {
        Patient.findOne({username: req.body.username}, function(err, patient) {
          if (err) {
            return res.json({status: 'ERROR', message: 'Username not of patient!'});
          } else if (patient && patient.status === 'ACTIVE') {
            bcrypt.compare(req.body.password, patient.password,
              function(err, result) {
                if (result === true) {
                  req.session.type = 'patient';
                  req.session.user = patient;
                  res.json({
                    status: 'SUCCESS',
                    message: 'Correct password for ' + patient.username,
                    user: patient,
                    type: req.session.type,
                  });
                } else {
                  res.json({
                    status: 'ERROR',
                    message: 'Wrong password for username ' + patient.username});
                }
              });
          } else {
            Doctor.findOne({username: req.body.username},
              function(err, doctor) {
                if (err) {
                  return res.json({status: 'ERROR', message: 'Username not of doctor!'});
                } else if (doctor && doctor.status === 'ACTIVE') {
                  bcrypt.compare(req.body.password, doctor.password,
                    function(err, result) {
                      if (result === true) {
                        req.session.type = 'doctor';
                        req.session.user = doctor;
                        res.json({
                          status: 'SUCCESS',
                          message: 'Correct password for ' + doctor.username,
                          user: doctor,
                          type: req.session.type,
                        });
                      } else {
                        res.json({
                          status: 'ERROR',
                          message: 'Wrong password for doctor ' + doctor.username});
                      }
                    });
                } else {
                  return res.json({status: 'ERROR', message: 'Username ' + req.body.username + ' not exist!'});
                }
              });
          }
        });
      }
    });
  } else {
    res.json({status: 'ERROR', message: 'Logout first!'});
  }
});

// GET for logout
router.route('/logout')
.get(function(req, res) {
  req.session.destroy(function(err) {
    if (err) {
      return res.json({status: 'ERROR', message: 'Error in destroying session!'});
    } else {
      return res.json({status: 'SUCCESS'});
    }
  });
});

module.exports = router;