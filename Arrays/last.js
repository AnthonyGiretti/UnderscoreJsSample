/* last_.last(array, [n]) 
Returns the last element of an array. Passing n will return the last n elements of the array.*/

var _ = require('underscore');

var value = _.last(["Apple", "Banana", "Grapefruit","PineApple"], 3);
console.log(value);