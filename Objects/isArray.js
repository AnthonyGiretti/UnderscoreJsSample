var _ = require('underscore');

var object1 = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};
var object2 = ['firstValue', 'secondValue'];

console.log(_.isArray(object1));
console.log(_.isArray(object2));
