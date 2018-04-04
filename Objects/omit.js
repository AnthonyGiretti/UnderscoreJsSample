/* omit_.omit(object, *keys) 
Return a copy of the object, filtered to omit the blacklisted keys (or array of keys). Alternatively accepts a predicate indicating which keys to omit. */

var _ = require('underscore');

var testObject = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.omit(testObject, 'firstKey', 'secondKey');
console.log(value);