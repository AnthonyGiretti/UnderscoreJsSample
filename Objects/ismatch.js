var _ = require('underscore');

var object = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.isMatch(object, {firstKey: 'firstValue'});

console.log(value);