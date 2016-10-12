var request = require('supertest-as-promised');
var httpStatus = require('http-status');
var chai = require('chai');
var expect = chai.expect;
var app = require('./index');

describe('Router stress test', function() {
    for (var i = 0; i < 20000; ++i) {
        it('should not crash ' + i, function(done) {
            request(app)
            .put(`/mytestroute`)
            .expect(httpStatus.OK)
            .then(function() {
                done();
            });
        });
    }
});
