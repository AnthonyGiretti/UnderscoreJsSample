var _ = require('underscore');

var value = _.invert({firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'});
console.log(value);