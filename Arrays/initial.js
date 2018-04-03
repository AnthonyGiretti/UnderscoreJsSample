/* initial_.initial(array, [n]) 
Returns everything but the last entry of the array. Especially useful on the arguments object. Pass n to exclude the last n elements from the result.*/

var _ = require('underscore');

var value = _.initial(["Apple", "Banana", "Grapefruit","PineApple"], 3);
console.log(value);