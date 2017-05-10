/*global browser */
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Page = function Page() {
  _classCallCheck(this, Page);

  this.open = function (path) {
    browser.url('/' + path);
  };
};

module.exports = Page;
//# sourceMappingURL=page.js.map
