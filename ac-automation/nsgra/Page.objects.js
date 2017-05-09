"use strict";

class Page {
  constructor(open){
  	this.open = (path) => {browser.url('/' + path)};
  }


//   open(path) {
//     browser.url('/' + path);
//   }
}

module.exports = Page;

