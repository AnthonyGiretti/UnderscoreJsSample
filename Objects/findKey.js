/* findKey_.findKey(object, predicate, [context]) 
Similar to _.findIndex but for keys in objects. Returns the key where the predicate truth test passes or undefined. */

var _ = require('underscore');

var testObject = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.findKey(testObject, function(obj){ return obj === 'secondValue' });
console.log(value);