/*global browser*/
const assert = require( 'chai' ).assert;
const fillInWith = ( element, value ) => {
  browser.setValue( element, value )
  const currentValue = browser.getValue( element );

  assert(
    currentValue === value,
    'Current Value: ' + currentValue + '\n' +
    'Expected Value: ' + value
  );
}

module.exports = fillInWith;
