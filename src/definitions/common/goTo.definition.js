/*global browser*/
const assert = require( 'chai' ).assert;
const goTo = ( path ) => {
  browser.url( path );
  const currentURL = browser.getUrl();

  assert(
    currentURL === path,
    'Current URL: ' + currentURL + '\n' +
    'Expected URL: ' + path
  );
}

module.exports = goTo;
