let chai = require("chai");
let request = require("supertest");
let options = {
  foo: "foo"
};

exports.request = request;
exports.options = options;
exports.chai = chai;
exports.assert = chai.assert;