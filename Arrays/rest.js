/* rest_.rest(array, [index]) Aliases: tail, drop 
Returns the rest of the elements in an array. Pass an index to return the values of the array from that index onward. */

var _ = require('underscore');

var value = _.rest(["Apple", "Banana", "Grapefruit","PineApple"], 2);
console.log(value);