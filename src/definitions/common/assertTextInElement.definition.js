/*global browser*/
const assert = require( 'chai' ).assert;
const assertTextInElement = ( element, value ) => {
  const elementTextValue = browser.getText( element );

  assert(
    elementTextValue === value,
    'Current Value: ' + elementTextValue + '\n' +
    'Expected Value: ' + value
  );
}

module.exports = assertTextInElement;
