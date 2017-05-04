'use strict';

var CaloriesPage = function() {
  this.heroEl = element(by.css('.hero-unit'));
  this.h1El = this.heroEl.element(by.css('h1'));

  this.formEl = element(by.css('.foods-form'));
  this.textareaEl = this.formEl.element(by.css('textarea'));
  this.addEl = this.formEl.element(by.css('input[type="submit"]'));

  this.foodLogEl = element(by.css('.food-log'));
  this.foodLogItemsEl =
  this.totalCaloriesEl = this.foodLogEl.element(by.css('.total-calories'));

  this.setFood = function(foodItems) {
    var textareaEl = this.textareaEl;
    textareaEl.clear();
    foodItems.forEach(function(item) {
      textareaEl.sendKeys(item);
      textareaEl.sendKeys(protractor.Key.ENTER);
    });
  };

  this.getFoodLog = function() {
    return element.all(by.repeater('food in $ctrl.foods'));
  };
};

module.exports = new CaloriesPage();

