var _ = require('underscore');

var testObject = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.omit(testObject, 'firstKey', 'secondKey');
console.log(value);