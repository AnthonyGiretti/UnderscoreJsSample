/* intersection_.intersection(*arrays) 
Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays.*/

var _ = require('underscore');

var value = _.intersection(["Apple", "Banana", "Grapefruit","PineApple", "Orange"],["Orange", "Blood orange"]);
console.log(value);