/* pick_.pick(object, *keys) 
Return a copy of the object, filtered to only have values for the whitelisted keys (or array of valid keys). 
Alternatively accepts a predicate indicating which keys to pick. */

var _ = require('underscore');

var testObject = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.pick(testObject, 'firstKey', 'secondKey');
console.log(value);