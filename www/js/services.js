angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('ReadData', function() {
  var text = '';
  var speed = 1;
  var save = function(newText, newSpeed){
    text = newText;
    speed = newSpeed;
  }
  return {text: text, speed: speed};
});
