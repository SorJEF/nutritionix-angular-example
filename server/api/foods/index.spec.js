'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var foodsCtrlStub = {
  index: 'foodsCtrl.index'
};

var routerStub = {
  post: sinon.spy()
};

// require the index with our stubbed out modules
var foodsIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './foods.controller': foodsCtrlStub
});

describe('Foods API Router:', function() {
  it('should return an express router instance', function() {
    foodsIndex.should.equal(routerStub);
  });

  describe('POST /api/foods', function() {
    it('should route to foods.controller.index', function() {
      routerStub.post
        .withArgs('/', 'foodsCtrl.index')
        .should.have.been.calledOnce;
    });
  });
});
