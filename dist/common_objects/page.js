'use strict';

var goTo = require('../definitions/common/goTo.definition');
var fillInWith = require('../definitions/common/fillInWith.definition');
var press = require('../definitions/common/press.definition');
var assertTextInElement = require('../definitions/common/assertTextInElement.definition');

function Page() {}

Page.prototype.open = function open(path) {
  goTo(path);
};

Page.prototype.fillInWith = function fillIn(element, value) {
  fillInWith(element, value);
};

Page.prototype.press = function pressButton(element) {
  press(element);
};

Page.prototype.assertTextInElement = function textInElement(element, value) {
  assertTextInElement(element, value);
};

module.exports = new Page();
//# sourceMappingURL=page.js.map
