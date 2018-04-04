/* clone_.clone(object) 
Create a shallow-copied clone of the provided plain object. Any nested objects or arrays will be copied by reference, not duplicated. */

var _ = require('underscore');

var testObject = {firstKey: 'firstValue', referenceKey: { first: 'originalValue'} };

var value = _.clone(testObject);
console.log(value);

testObject.referenceKey.first = 'changed value to original reference';
var value2 = _.clone(testObject);
console.log(value2);