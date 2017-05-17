'use strict';

var _environment = require('../../config/dev/environment');

var page = require('./page');
var SDMElements = require('../../data/sdm/elements.json');


var SDMPage = Object.create(page, {
  // define functions
  open: {
    value: function value(type) {
      page.open.call(this, _environment.environment.sdm[type]);
    }
  },
  login: {
    value: function value(type) {
      var values = _environment.environment.sdm.credentials[type];
      var form = SDMElements[type].login.form;

      page.fillInWith.call(this, form.username, values.username);
      page.fillInWith.call(this, form.password, values.password);
      page.press.call(this, form.submit);
    }
  },
  selectApplication: {
    value: function value(appName) {
      var applicationSelector = 'img[ng-title="' + appName + '"]';

      page.press.call(this, applicationSelector);
    }
  }
});

module.exports = SDMPage;
//# sourceMappingURL=sdm.page.js.map
