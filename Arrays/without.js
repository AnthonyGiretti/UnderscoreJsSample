/* without_.without(array, *values) 
Returns a copy of the array with all instances of the values removed. */

var _ = require('underscore');

var value = _.without(["Apple", "Banana", "Grapefruit","PineApple", "Orange", "Blood orange"],"Orange", "Blood orange");
console.log(value);