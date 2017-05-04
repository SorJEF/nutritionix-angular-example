import angular from 'angular';
const ngRoute = require('angular-route');
import routing from './calories.routes';

export class CaloriesController {

  foods = [];
  error = null;
  query = 'cheesburger\n16oz coke'

  /*@ngInject*/
  constructor($http, $scope) {
    this.$http = $http;
    this.$scope = $scope;
  }

  clean() {
    this.error = null;
  }

  add(query) {
    this.$http.post('/api/foods', { query })
      .then(result => {
        this.foods = this.foods.concat(result.data.foods);
        this.clean();
      })
      .catch(err => {
        this.error = err.message || err.data && err.data.message;
      });
  }

  getTotal() {
    return this.foods.reduce((result, food) => result + food.nf_calories, 0);
  }
}

export default angular.module('nutritionixAngularExampleApp.calories', [ngRoute])
  .config(routing)
  .component('calories', {
    template: require('./calories.html'),
    controller: CaloriesController
  })
  .name;
