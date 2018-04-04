/* isEqual_.isEqual(object, other) 
Performs an optimized deep comparison between the two objects, to determine if they should be considered equal. */

var _ = require('underscore');

var object = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};
var clone = {firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.isEqual(object, clone);
console.log(object == clone);
console.log(value);