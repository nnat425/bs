/*global describe, expect, it, beforeEach*/
const HomePage = require('../../dist/page_objects/home.page');

describe( 'SDM:login', () => {

  it( 'logs in with valid credentials', () => {
    HomePage.open( '' );
		browser.debug();
  } );

} );
