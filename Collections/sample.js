/* sample_.sample(list, [n]) 
Produce a random sample from the list. Pass a number to return n random elements from the list. Otherwise a single random item will be returned.*/

var _ = require('underscore');

var value = _.sample(["Apple", "Banana", "Grapefruit","PineApple"]);
console.log(value);