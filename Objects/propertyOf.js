var _ = require('underscore');

var testObject = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.propertyOf(testObject)("firstKey");
console.log(value);