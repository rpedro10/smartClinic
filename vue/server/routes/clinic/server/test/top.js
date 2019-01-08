function importTest(name, path) {
  describe(name, function() {
    require(path);
  });
}

let common = require('./common');

describe('############### Init ####################', function() {
  beforeEach(function() {
    //console.log('running something before each test');
  });
  importTest('## admin test file', './users/admin');
  importTest('## patient test file', './users/patient');
  importTest('## doctor test file', './users/doctor');
  importTest('## login/logout', './users/login_logout');
  after(function() {
    //console.log('after all tests');
  });
});
