/* pairs_.pairs(object) 
Convert an object into a list of [key, value] pairs. */

var _ = require('underscore');

var value = _.pairs({firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'});
console.log(value);