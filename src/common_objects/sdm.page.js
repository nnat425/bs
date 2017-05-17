'use strict';
const page = require( './page' );
const SDMElements = require( '../../data/sdm/elements.json' );
import { environment } from '../../config/dev/environment';

const SDMPage = Object.create( page, {
  // define functions
  open: {
    value: function( type ) {
      page.open.call( this, environment.sdm[ type ] );
    }
  },
  login: {
    value: function( type ) {
      const values = environment.sdm.credentials[ type ];
      const form = SDMElements[ type ].login.form;

      page.fillInWith.call( this, form.username, values.username );
      page.fillInWith.call( this, form.password, values.password );
      page.press.call( this, form.submit );
    }
  },
  selectApplication: {
    value: function( appName ) {
      const applicationSelector = 'img[ng-title="' + appName + '"]';

      page.press.call( this, applicationSelector );
    }
  }
} );

module.exports = SDMPage;
