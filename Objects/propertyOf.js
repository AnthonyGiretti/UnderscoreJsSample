/* propertyOf_.propertyOf(object) 
Inverse of _.property. Takes an object and returns a function which will return the value of a provided property.*/

var _ = require('underscore');

var testObject = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.propertyOf(testObject)("firstKey");
console.log(value);