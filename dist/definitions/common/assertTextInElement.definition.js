'use strict';

/*global browser*/
var assert = require('chai').assert;
var assertTextInElement = function assertTextInElement(element, value) {
  var elementTextValue = browser.getText(element);

  assert(elementTextValue === value, 'Current Value: ' + elementTextValue + '\n' + 'Expected Value: ' + value);
};

module.exports = assertTextInElement;
//# sourceMappingURL=assertTextInElement.definition.js.map
