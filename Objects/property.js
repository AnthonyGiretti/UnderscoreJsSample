var _ = require('underscore');

var testObject = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = 'firstValue' === _.property("firstKey")(testObject);
console.log(value);