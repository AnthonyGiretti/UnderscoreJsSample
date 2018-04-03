/* difference_.difference(array, *others) 
Similar to without, but returns the values from array that are not present in the other arrays.*/

var _ = require('underscore');

var value = _.difference(["Apple", "Banana", "Grapefruit","PineApple", "Orange"],["Orange", "Blood orange"]);
console.log(value);