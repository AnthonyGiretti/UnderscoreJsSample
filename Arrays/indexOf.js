/* indexOf_.indexOf(array, value, [isSorted]) 
Returns the index at which value can be found in the array, or -1 if value is not present in the array. 
If you're working with a large array, and you know that the array is already sorted, pass true for isSorted to use a faster binary search ... or, 
pass a number as the third argument in order to look for the first matching value in the array after the given index. */

var _ = require('underscore');

var value = _.indexOf(["Apple", "Banana", "Grapefruit","PineApple"], "Banana");
console.log(value);

var value2 = _.indexOf(["Apple", "Banana", "Grapefruit","PineApple"], "Banana", true);
console.log(value2);