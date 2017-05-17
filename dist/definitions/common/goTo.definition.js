'use strict';

/*global browser*/
var assert = require('chai').assert;
var goTo = function goTo(path) {
  browser.url(path);
  var currentURL = browser.getUrl();

  assert(currentURL === path, 'Current URL: ' + currentURL + '\n' + 'Expected URL: ' + path);
};

module.exports = goTo;
//# sourceMappingURL=goTo.definition.js.map
