'use strict';

/*global browser*/
var assert = require('chai').assert;
var assertTextInElement = function assertTextInElement(element, value) {
  var elementTextValue = browser.getText(element);
  var iteratee = void 0;

  if (!elementTextValue[1]) {
    assert(elementTextValue === value, 'Current Value: ' + elementTextValue + '\n' + 'Expected Value: ' + value);
  } else {
    for (iteratee = 0; iteratee < elementTextValue.length; iteratee += 1) {
      assert(elementTextValue[iteratee] === value[iteratee], 'Current Value: ' + elementTextValue[iteratee] + '\n\n' + 'Expected Value: ' + value[iteratee] + '\n');
    }
  }
};

module.exports = assertTextInElement;
//# sourceMappingURL=assertTextInElement.definition.js.map
