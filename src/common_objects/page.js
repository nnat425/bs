/*global browser */
'use strict';

class Page {
  constructor( ) {
    this.open = ( path ) => { browser.url( '/' + path ) };
  }
}

module.exports = Page;
