/* invert_.invert(object) 
Returns a copy of the object where the keys have become the values and the values the keys. 
For this to work, all of your object's values should be unique and string serializable. */

var _ = require('underscore');

var value = _.invert({firstKey: 'firstValue', secondKey: 'secondValue', thirdKey: 'thirdValue'});
console.log(value);