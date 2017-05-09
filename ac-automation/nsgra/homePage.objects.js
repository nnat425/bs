"use strict";

var Page = require('./Page.objects');

class HomePage extends Page {

    open() {
		super.open();
    }
    
}

module.exports = new HomePage();