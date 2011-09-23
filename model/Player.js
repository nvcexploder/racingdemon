var Class = require('resig-class');

// represents an individual player
var PlayerClass = Class.extend({
  init: function(name, socket) {
    this.name = name;
    this.socket = socket;
  },
  getName: function() {
    return this.name;
  }
});

module.exports = PlayerClass;
