/* shuffle_.shuffle(list) 
Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle. */

var _ = require('underscore');

var value = _.shuffle(["Apple", "Banana", "Grapefruit","PineApple"]);
console.log(value);