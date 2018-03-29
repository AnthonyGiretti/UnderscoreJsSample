var _ = require('underscore');

var object1 = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};
var object2 = ['firstValue', 'secondValue']; // Javascript arrays are object

console.log(_.isObject(object1));
console.log(_.isObject(object2));