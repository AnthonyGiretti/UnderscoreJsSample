/* flatten_.flatten(array, [shallow]) 
Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will only be flattened a single level. */

var _ = require('underscore');

var value = _.flatten(["Apple", "Banana", "Grapefruit","PineApple", ["Orange", "Blood orange"]]);
console.log(value);

var value2 = _.flatten(["Apple", "Banana", "Grapefruit","PineApple", ["Orange", "Blood orange"]], true);
console.log(value2);