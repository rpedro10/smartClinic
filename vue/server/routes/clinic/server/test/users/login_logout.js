'use strict';

let bcrypt = require('bcrypt');
let dbURI = 'mongodb://admin:admin@ds151024.mlab.com:51024/medontrack_tests';
require('chai').should();
let mongoose = require('mongoose');
let Admin = require('../../models/admin');
let app = require('../../app');

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
describe('Database login_logout tests', function() {
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
    describe('# Get all tasks', function() {
      let admin = new Admin({username: 'admin',
        password: 'admin',
        birth_date: '01-01-1990',
        email: 'admin@admin',
        status: 'ACTIVE'});
      admin.save();

      it('should get all tasks', function(done) {
        request(app) .get('/') .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          //expect(res.body).to.be.an('array');
          //expect(res.body).to.be.empty;
          done();
        });
      });
    });
  // After all tests are finished drop database and close connection
  /*after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      mongoose.connection.close(done);
    });
  });*/
});

