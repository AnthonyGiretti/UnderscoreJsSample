var _ = require('underscore');

var object1 = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};
var object2 = {};
var object3 = [];

console.log(_.isEmpty(object1));
console.log(_.isEmpty(object2));
console.log(_.isEmpty(object3));