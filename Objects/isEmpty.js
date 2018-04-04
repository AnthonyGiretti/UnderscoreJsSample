/* isEmpty_.isEmpty(object) 
Returns true if an enumerable object contains no values (no enumerable own-properties). 
For strings and array-like objects _.isEmpty checks if the length property is 0. */

var _ = require('underscore');

var object1 = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};
var object2 = {};
var object3 = [];

console.log(_.isEmpty(object1));
console.log(_.isEmpty(object2));
console.log(_.isEmpty(object3));