'use strict';

let bcrypt = require('bcrypt');
let dbURI = 'mongodb://admin:admin@ds151024.mlab.com:51024/medontrack_tests';
require('chai').should();
let mongoose = require('mongoose');
let Doctor = require('../../models/doctor');
let options = {
  useMongoClient: true,
  /*  autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately
    rather than waiting for reconnect
    bufferMaxEntries: 0*/
};
describe('Database DOCTOR tests', function() {
  // Before starting the test, create a sandboxed database connection
  // Once a connection is established invoke done()
  before(function(done) {
    mongoose.connect(dbURI, options);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      //console.log('   We are connected to test database!');
      done();
    });
  });

  describe('Doctor model', function() {
    let doctor = new Doctor({username: 'doctor',
      password: 'doctor',
      birth_date: '01-01-1990',
      email: 'doctor@doctor',
      status: 'ACTIVE'});

    it('can be saved', function(done) {
      doctor.save(done);
    });
    it('can be listed', function(done) {
      new Doctor({username: 'doctor1',
        password: 'doctor1',
        email: 'doctor1@doctor1'}).save(function(err, model) {
        if (err) return done(err);
        new Doctor({username: 'doctor2',
          password: 'doctor2',
          email: 'doctor2@doctor2'}).save(function(err, model) {
          if (err) return done(err);
          Doctor.find({}, function(err, doctors) {
            if (err) return done(err);
            doctors.length.should.equal(3);
            done();
          });
        });
      });
    });
    it('can found doctor', function(done) {
      Doctor.find({username: 'doctor2'}, function(err, doctor) {
        if (err) return done(err);
        doctor.length.should.equal(1);
        done();
      });
    });
    it('can update doctor', function(done) {
      Doctor.findOne({username: 'doctor'}, function(err, doctor) {
        if (err) return done(err);
        let newPassword = '123';
        bcrypt.hash(newPassword, 10, function(err, hash) {
          if (err) {
            return done(err);
          }
          doctor.password = hash;
        });
      });
      doctor.save(function(err) {
        if (err) return done(err);
      });
      Doctor.find({username: 'doctor', password: doctor.password},
          function(err, doctors) {
            if (err) return done(err);
            doctors.length.should.equal(1);
            done();
          });
    });
  });
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      mongoose.connection.close(done);
    });
  });
});
