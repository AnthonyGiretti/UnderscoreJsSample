/* lastIndexOf_.lastIndexOf(array, value, [fromIndex]) 
Returns the index of the last occurrence of value in the array, or -1 if value is not present. Pass fromIndex to start your search at a given index.*/

var _ = require('underscore');

var value = _.lastIndexOf(["Apple", "Banana", "Grapefruit", "Banana", "PineApple"], "Banana");
console.log(value);