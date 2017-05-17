/*global browser, describe, it, beforeEach*/
const SDMPage = require( '../../dist/common_objects/sdm.page' );
const NSGRAPage = require( '../../dist/page_objects/nsgra.page' );
const appName = 'Next Step Guided Reading: K-2';

describe( 'SDM', () => {
  it( 'navigates to log in', () => {
    SDMPage.open( 'student' );
    browser.pause( 1500 );
  } );
  it( 'fills in and submits log in form with valid credentials', () => {
    SDMPage.login( 'student' );
    browser.pause( 1500 );
  } );
} );

describe( 'NSGRA', () => {
  it( 'opens application', () => {
    SDMPage.selectApplication( appName );
    browser.pause( 1500 );
  } );
  it( 'asserts page url', () => {
    NSGRAPage.assertURL();
  } );
  it( 'navigates to decide', () => {
    NSGRAPage.decide( 'student' );
  } );
  describe( 'Step 2', () => {
    const step = 'Step 2: Developmental Word Knowledge Inventory (DWKI)';
    let report;

    it( 'opens class progress report', () => {
      report = 'Class Progress Report';

      NSGRAPage.openReport( step, report );
      browser.pause( 1500 );
    } );
    it( 'verifies text changes as per GDAIS-1489', () => {
      report = 'Class Progress Report';

      NSGRAPage.confirmExportInformationText( 'student', step, report );
    } );
    it( 'navigates to decide', () => {
      NSGRAPage.open();
      NSGRAPage.decide( 'student' );
    } );
    it( 'opens group report', () => {
      report = 'Group Report';

      browser.pause( 1500 );
      NSGRAPage.openReport( step, report );
    } );
    it( 'verifies text changes as per GDAIS-1489', () => {
      report = 'Group Report';

      NSGRAPage.confirmExportInformationText( 'student', step, report );
    } );
    it( 'navigates to decide', () => {
      NSGRAPage.open();
      NSGRAPage.decide( 'student' );
    } );
    it( 'opens student progress report', () => {
      report = 'Student Progress Report';

      browser.pause( 1500 );
      NSGRAPage.openReport( step, report );
    } );
    it( 'verifies text changes as per GDAIS-1489', () => {
      report = 'Student Progress Report';

      NSGRAPage.confirmExportInformationText( 'student', step, report );
    } );
    // TODO complete test for assess
  } );
} );
