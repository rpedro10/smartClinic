'use strict';

let bcrypt = require('bcrypt');
let dbURI = 'mongodb://admin:admin@ds151024.mlab.com:51024/medontrack_tests';
require('chai').should();
let mongoose = require('mongoose');
let Admin = require('../../models/admin');
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
describe('Database ADMIN tests', function() {
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
  describe('Admin model', function() {
    let admin = new Admin({username: 'admin',
      password: 'admin',
      birth_date: '01-01-1990',
      email: 'admin@admin',
      status: 'ACTIVE'});
    it('can be saved', function(done) {
      admin.save(done);
    });
    it('can be listed', function(done) {
      new Admin({username: 'admin1',
        password: 'admin1'}).save(function(err, model) {
        if (err) return done(err);
        new Admin({username: 'admin2',
          password: 'admin2'}).save(function(err, model) {
          if (err) return done(err);
          Admin.find({}, function(err, docs) {
            if (err) return done(err);
            docs.length.should.equal(3);
            done();
          });
        });
      });
    });
    it('can found admin', function(done) {
      Admin.find({username: 'admin2'}, function(err, docs) {
        if (err) return done(err);
        docs.length.should.equal(1);
        done();
      });
    });
    it('can update admin', function(done) {
      Admin.findOne({username: 'admin'}, function(err, admin) {
        if (err) return done(err);
        let newPassword = '123';
        bcrypt.hash(newPassword, 10, function(err, hash) {
          if (err) {
            return done(err);
          }
          admin.password = hash;
        });
      });
      admin.save(function(err) {
        if (err) return done(err);
      });
      Admin.find({username: 'admin', password: admin.password},
          function(err, admins) {
            if (err) return done(err);
            admins.length.should.equal(1);
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

