'use strict';

var config = browser.params;

describe('Calories View', function() {
  var page;

  beforeEach(function() {
    let promise = browser.get(config.baseUrl + '/');
    page = require('./calories.po');
    return promise;
  });

  it('should include jumbotron with correct data', function() {
    page.h1El.getText().should.eventually.contain('Calories Calculator');
  });

  it('should add food with calories to the food log', function() {
    page.setFood(['2 slices pizza', '20oz sprite']);
    page.addEl.click();

    const foodLog = page.getFoodLog();

    foodLog.count().should.eventually.equal(2);
    foodLog.get(1).getText().should.eventually.match(/20 oz Sprite \d+?(.\d+)? Calories/);

    page.totalCaloriesEl.getText().should.eventually.match(/Total calories today: \d+?(.\d+)? Calories/);
  });
});
