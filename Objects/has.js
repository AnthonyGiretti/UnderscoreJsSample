var _ = require('underscore');

var testObject = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.has(testObject, "firstKey");
console.log(value);