'use strict';

let bcrypt = require('bcrypt');
let dbURI = 'mongodb://admin:admin@ds151024.mlab.com:51024/medontrack_tests';
require('chai').should();
let mongoose = require('mongoose');
let Patient = require('../../models/patient');
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
describe('Database PATIENT tests', function() {
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
  describe('Patient model', function() {
    let patient = new Patient({username: 'patient',
      password: 'patient',
      birth_date: '01-01-1990',
      email: 'patient@patient',
      status: 'ACTIVE'});
    it('can be saved', function(done) {
      patient.save(done);
    });
    it('can be listed', function(done) {
      new Patient({username: 'patient1',
        password: 'patient1'}).save(function(err, model) {
        if (err) return done(err);
        new Patient({username: 'patient2',
          password: 'patient2'}).save(function(err, model) {
          if (err) return done(err);
          Patient.find({}, function(err, docs) {
            if (err) return done(err);
            docs.length.should.equal(3);
            done();
          });
        });
      });
    });
    it('can found patient', function(done) {
      Patient.find({username: 'patient2'}, function(err, docs) {
        if (err) return done(err);
        docs.length.should.equal(1);
        done();
      });
    });
    it('can update patient', function(done) {
      Patient.findOne({username: 'patient'}, function(err, patient) {
        if (err) return done(err);
        let newPassword = '123';
        bcrypt.hash(newPassword, 10, function(err, hash) {
          if (err) {
            return done(err);
          }
          patient.password = hash;
        });
      });
      patient.save(function(err) {
        if (err) return done(err);
      });
      Patient.find({username: 'patient', password: patient.password},
          function(err, patients) {
            if (err) return done(err);
            patients.length.should.equal(1);
            done();
          });
    });
  });

// After all tests are finished drop database and close connection
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      mongoose.connection.close(done);
    });
  });
});

