/* property_.property(key) 
Returns a function that will itself return the key property of any passed-in object. */

var _ = require('underscore');

var testObject = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.property("firstKey")(testObject);
console.log(value);