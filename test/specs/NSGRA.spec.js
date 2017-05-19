/*global browser, describe, it, beforeEach*/
const SDMPage = require( '../../dist/common_objects/sdm.page' );
const NSGRAPage = require( '../../dist/page_objects/nsgra.page' );
const appName = 'Next Step Guided Reading: K-2';

// SDM Log In
require( './SDMLogin.spec.js' )

describe( 'NSGRA', () => {
  let report;

  it( 'opens application', () => {
    SDMPage.selectApplication( appName );
    browser.pause( 500 );
  } );
  it( 'asserts page url', () => {
    NSGRAPage.assertURL();
  } );
  describe( 'Decide', () => {
    const step = 'Step 2: Developmental Word Knowledge Inventory (DWKI)';

    it( 'navigates to decide', () => {
      NSGRAPage.decide();
      browser.pause( 500 );
    } );

    it( 'opens class progress report and verifies text changes as per GDAIS-1489', () => {
      report = 'Class Progress Report';

      NSGRAPage.decideReport( step, report );
      browser.pause( 500 );
      NSGRAPage.confirmExportInformationText( step, report );
      browser.pause( 500 );
    } );
    it( 'navigates to decide', () => {
      NSGRAPage.open();
      browser.pause( 500 );
      NSGRAPage.decide();
      browser.pause( 500 );
    } );
    it( 'opens group report and verifies text changes as per GDAIS-1489', () => {
      report = 'Group Report';

      NSGRAPage.decideReport( step, report );
      browser.pause( 500 );
      NSGRAPage.confirmExportInformationText( step, report );
      browser.pause( 500 );
    } );
    it( 'navigates to decide', () => {
      NSGRAPage.open();
      browser.pause( 500 );
      NSGRAPage.decide();
      browser.pause( 500 );
    } );
    it( 'opens student progress report and verifies text changes as per GDAIS-1489', () => {
      report = 'Student Progress Report';

      NSGRAPage.decideReport( step, report );
      browser.pause( 500 );
      NSGRAPage.confirmExportInformationText( step, report );
      browser.pause( 500 );
    } );
  } );
  describe( 'Assess', () => {
    const step = 'Step 2';

    it( 'navigates to assess', () => {
      NSGRAPage.open();
      browser.pause( 500 );
      NSGRAPage.assess();
      browser.pause( 500 );
    } );
    it( 'open step 2 and verifies text changes as per GDAIS-1489', () => {
      NSGRAPage.assessStep( step );
      browser.pause( 500 );
      NSGRAPage.confirmExportInformationText( step );
      browser.pause( 500 );
    } );
  } );
} );
