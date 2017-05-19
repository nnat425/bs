/*global browser*/
const assert = require( 'chai' ).assert;
const assertTextInElement = ( element, value ) => {
  const elementTextValue = browser.getText( element );
  let iteratee;

  if ( !elementTextValue[1] ) {
    assert(
      elementTextValue === value,
      'Current Value: ' + elementTextValue + '\n' +
      'Expected Value: ' + value
    );
  }
  else {
    for ( iteratee = 0; iteratee < elementTextValue.length; iteratee += 1 ) {
      assert(
        elementTextValue[iteratee] === value[iteratee],
        'Current Value: ' + elementTextValue[iteratee] + '\n\n' +
        'Expected Value: ' + value[iteratee] + '\n'
      );
    }
  }
}

module.exports = assertTextInElement;
