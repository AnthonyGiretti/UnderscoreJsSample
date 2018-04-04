/* isNaN_.isNaN(object) 
Returns true if object is NaN.
Note: this is not the same as the native isNaN function, which will also return true for many other not-number values, such as undefined. */

var _ = require('underscore');

console.log(_.isNaN(NaN));

console.log(_.isNaN(undefined));

console.log(isNaN(undefined));
