/* compact_.compact(array) 
Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "", undefined and NaN are all falsy. */

var _ = require('underscore');

var value = _.compact([0, "Banana", false, 100]);
console.log(value);