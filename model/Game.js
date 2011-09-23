var Class = require('resig-class');

// represents a game session
var GameClass = Class.extend({
  init: function(name){
    this.name = name;
    this.players = [];
  },
  getName: function(){
    return this.name;
  },
  addPlayer: function(player) {
    this.players.push(player);
  }
});

module.exports = GameClass;
