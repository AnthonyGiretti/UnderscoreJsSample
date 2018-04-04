/* isObject_.isObject(value) 
Returns true if value is an Object. Note that JavaScript arrays and functions are objects, while (normal) strings and numbers are not. */

var _ = require('underscore');

var object1 = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};
var object2 = ['firstValue', 'secondValue']; // Javascript arrays are object

console.log(_.isObject(object1));
console.log(_.isObject(object2));