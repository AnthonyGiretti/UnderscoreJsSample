var _ = require('underscore');

var object = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};
var clone = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.isEqual(object, clone);
console.log(object == clone);
console.log(value);