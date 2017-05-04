'use strict';

import calories from './calories.component';
import {
  CaloriesController
} from './calories.component';

describe('Component: CaloriesComponent', function() {
  beforeEach(angular.mock.module(calories));

  var scope;
  var caloriesComponent;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectPOST('/api/foods')
      .respond({foods: [{ food_name: 'test1', nf_calories: 120 }, { food_name: 'test2', nf_calories: 200 }] });

    scope = $rootScope.$new();
    caloriesComponent = $componentController('calories', {
      $http,
      $scope: scope
    });
  }));

  it('should attach a list of things to the controller', function() {
    caloriesComponent.add('test');
    $httpBackend.flush();
    caloriesComponent.foods.length.should.equal(2);
  });
});
