'use strict';

var page = require('../common_objects/page');
var assert = require('chai').assert;
var NSGRAElements = require('../../data/nsgra/elements.json');
var NSGRAPaths = require('../../data/nsgra/paths.json');

var NSGRAPage = Object.create(page, {
  // define functions
  open: {
    value: function value() {
      page.open.call(this, NSGRAPaths.appHome);
    }
  },
  assertURL: {
    value: function value() {
      var currentURL = browser.getUrl();
      assert(currentURL === NSGRAPaths.appHome, 'Current URL: ' + currentURL + '\n' + 'Expected URL: ' + NSGRAPaths.appHome);
    }
  },
  decide: {
    value: function value(type) {
      page.press.call(this, NSGRAElements[type].decide.selector);
    }
  },
  openReport: {
    value: function value(step, report) {
      var parentElement = '//h2[text()="' + step + '"]/following-sibling::div/div/a[text()="' + report + '"]';

      page.press.call(this, parentElement);
    }
  },
  confirmExportInformationText: {
    value: function value(userType, step, report) {
      var exportInformationText = void 0;

      switch (step) {
        case 'Step 2: Developmental Word Knowledge Inventory (DWKI)':
          if (report === 'Class Progress Report' | report === 'Group Report' | report === 'Student Progress Report') {
            exportInformationText = 'If a spelling stage is not provided for a student, then consider extending the assessment until he/she makes two or more errors in the same spelling feature column.';
          }
      }

      page.assertTextInElement.call(this, NSGRAElements.student.decide.classProgressReport.reportDetail.exportInformationText.selector, exportInformationText);
    }
  }
});

module.exports = NSGRAPage;
//# sourceMappingURL=nsgra.page.js.map
