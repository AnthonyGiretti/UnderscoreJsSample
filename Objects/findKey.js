var _ = require('underscore');

var testObject = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.findKey(testObject, function(obj){ return obj === 'secondValue' });
console.log(value);