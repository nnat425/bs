/*global browser, describe, it, beforeEach*/
const SDMPage = require( '../../dist/common_objects/sdm.page' );

describe( 'SDM', () => {
  it( 'navigates to log in', () => {
    SDMPage.open( 'student' );
    browser.pause( 1500 )
  } );
  it( 'fills in and submits log in form with valid credentials', () => {
    SDMPage.login( 'student' );
    browser.pause( 1500 )
  } );
} );
