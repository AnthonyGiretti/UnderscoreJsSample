/* isMatch_.isMatch(object, properties) 
Tells you if the keys and values in properties are contained in object. */

var _ = require('underscore');

var object = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.isMatch(object, {firstKey: 'firstValue'});

console.log(value);