'use strict';
const page = require( '../common_objects/page' );
const assert = require( 'chai' ).assert;
const NSGRAElements = require( '../../data/nsgra/elements.json' );
const NSGRAPaths = require( '../../data/nsgra/paths.json' );

const NSGRAPage = Object.create( page, {
  // define functions
  open: {
    value: () => {
      page.open.call( this, NSGRAPaths.appHome );
    }
  },
  assertURL: {
    value: () => {
      const currentURL = browser.getUrl();
      assert(
        currentURL === NSGRAPaths.appHome,
        'Current URL: ' + currentURL + '\n' +
        'Expected URL: ' + NSGRAPaths.appHome
      );
    }
  },
  decide: {
    value: () => {
      page.press.call( this, NSGRAElements.decide.selector )
    }
  },
  assess: {
    value: () => {
      page.press.call( this, NSGRAElements.assess.selector )
    }
  },
  decideReport: {
    value: ( step, report ) => {
      const parentElement = '//h2[text()="' + step + '"]/following-sibling::div/div/a[text()="' + report + '"]';

      page.press.call( this, parentElement );
    }
  },
  assessStep: {
    value: function( step, report ) {
      const parentElement = '//h3/span[text()="' + step + '"]';

      page.press.call( this, parentElement );
    }
  },
  confirmExportInformationText: {
    value: ( step, report ) => {
      let exportInformationText;

      switch( step ) {
        case 'Step 2: Developmental Word Knowledge Inventory (DWKI)':
          if ( report === 'Class Progress Report' | report === 'Group Report' | report === 'Student Progress Report' ) {
            exportInformationText = 'If a spelling stage is not provided for a student, then consider extending the assessment until he/she makes two or more errors in the same spelling feature column.'
          }
          break;
        case 'Step 2':
          exportInformationText =  [
            'A student\'s spelling stage is determined by identifying the column in which the student first makes two or more errors. That spelling feature is a starting point for future instruction.',
            'If a student does not make two or more errors in any spelling feature column and has answered fewer than 30 questions, then a spelling stage will not be provided in the reports. Please consider extending the assessment.',
            'Total words spelled incorrectly may not match the total number of spelling features missed.'
          ];
          break;
      }

      page.assertTextInElement.call( this, NSGRAElements.assess.report.detail.information.selector, exportInformationText );
    }
  }
} );

module.exports = NSGRAPage;
