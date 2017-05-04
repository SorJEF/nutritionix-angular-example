'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

describe('Foods API:', function() {
  describe('POST /api/foods', function() {
    var response;

    beforeEach(function(done) {
      request(app)
        .post('/api/foods')
        .send({ query: 'cheesburger' })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          response = res.body;
          done();
        });
    });

    it('should respond with foods object', function() {
      response.should.have.property('foods');
      response.foods.should.be.instanceOf(Array);
      response.foods.should.have.lengthOf(1);
      response.foods[0].should.have.property('food_name').with.a('string');
      response.foods[0].should.have.property('nf_calories').with.a('number');
    });
  });
});
