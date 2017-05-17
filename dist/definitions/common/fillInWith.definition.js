'use strict';

/*global browser*/
var assert = require('chai').assert;
var fillInWith = function fillInWith(element, value) {
  browser.setValue(element, value);
  var currentValue = browser.getValue(element);

  assert(currentValue === value, 'Current Value: ' + currentValue + '\n' + 'Expected Value: ' + value);
};

module.exports = fillInWith;
//# sourceMappingURL=fillInWith.definition.js.map
