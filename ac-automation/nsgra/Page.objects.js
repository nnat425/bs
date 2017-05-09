
"use strict";
class Page {
  constructor(){}
  open(path) {
    browser.url('/' + path);
  }
}

module.exports = new Page();

