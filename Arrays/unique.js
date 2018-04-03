/* uniq_.uniq(array, [isSorted], [iteratee]) Alias: unique 
Produces a duplicate-free version of the array, using === to test object equality. 
In particular only the first occurence of each value is kept. If you know in advance that the array is sorted, passing true for isSorted will run a much faster algorithm. 
If you want to compute unique items based on a transformation, pass an iteratee function. */

var _ = require('underscore');

var value = _.uniq(["Apple", "Banana", "Grapefruit","PineApple", "Orange", "Apple", "Banana"]);
console.log(value);