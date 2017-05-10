/*global describe, expect, it, beforeEach*/
const SDMLoginPage = require( '../../dist/common_objects/sdm.page' );
const environment = require( '../../config/dev/environment' );

describe( 'SDM:login', () => {

  it( 'logs in with valid credentials', () => {
    SDMLoginPage.open( environment.sdm.student );
	browser.debug();
  } );

} );
