/* union_.union(*arrays) 
Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays. */

var _ = require('underscore');

var value = _.union(["Apple", "Banana", "Grapefruit","PineApple", "Orange"],["Orange", "Blood orange"]);
console.log(value);