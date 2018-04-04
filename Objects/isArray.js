/* isArray_.isArray(object) 
Returns true if object is an Array. */

var _ = require('underscore');

var object1 = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};
var object2 = ['firstValue', 'secondValue'];

console.log(_.isArray(object1));
console.log(_.isArray(object2));
