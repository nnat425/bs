'use strict';
const page = require( '../common_objects/page' );
const assert = require( 'chai' ).assert;
const NSGRAElements = require( '../../data/nsgra/elements.json' );
const NSGRAPaths = require( '../../data/nsgra/paths.json' );

const NSGRAPage = Object.create( page, {
  // define functions
  open: {
    value: function() {
      page.open.call( this, NSGRAPaths.appHome );
    }
  },
  assertURL: {
    value: function() {
      const currentURL = browser.getUrl();
      assert(
        currentURL === NSGRAPaths.appHome,
        'Current URL: ' + currentURL + '\n' +
        'Expected URL: ' + NSGRAPaths.appHome
      );
    }
  },
  decide: {
    value: function( type ) {
      page.press.call( this, NSGRAElements[ type ].decide.selector )
    }
  },
  openReport: {
    value: function( step, report ) {
      const parentElement = '//h2[text()="' + step + '"]/following-sibling::div/div/a[text()="' + report + '"]';

      page.press.call( this, parentElement );
    }
  },
  confirmExportInformationText: {
    value: function( userType, step, report ) {
      let exportInformationText;

      switch( step ) {
        case 'Step 2: Developmental Word Knowledge Inventory (DWKI)':
          if ( report === 'Class Progress Report' | report === 'Group Report' | report === 'Student Progress Report' ) {
            exportInformationText = 'If a spelling stage is not provided for a student, then consider extending the assessment until he/she makes two or more errors in the same spelling feature column.'
          }
      }

      page.assertTextInElement.call( this, NSGRAElements.student.decide.classProgressReport.reportDetail.exportInformationText.selector, exportInformationText );
    }
  }
} );

module.exports = NSGRAPage;
