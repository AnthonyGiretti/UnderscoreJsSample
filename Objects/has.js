/* has_.has(object, key) 
Does the object contain the given key? Identical to object.hasOwnProperty(key), but uses a safe reference to the hasOwnProperty function, 
in case it's been overridden accidentally. */

var _ = require('underscore');

var testObject = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.has(testObject, "firstKey");
console.log(value);