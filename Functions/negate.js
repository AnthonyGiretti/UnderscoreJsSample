/* negate_.negate(predicate) 
Returns a new negated version of the predicate function.*/

var _ = require('underscore');

var isFalsy = _.negate(Boolean);
console.log(_.find([-2, -1, 0, 1, 2], isFalsy));