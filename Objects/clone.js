var _ = require('underscore');

var testObject = {firstKey: 'firstValue', referenceKey: { first: 'originalValue'} };

var value = _.clone(testObject);
console.log(value);

testObject.referenceKey.first = 'changed value to original reference';
console.log(value);