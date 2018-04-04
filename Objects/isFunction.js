/* isFunction_.isFunction(object) 
Returns true if object is a Function. */

var _ = require('underscore');

var func1 = function () { return "hello"; }
var func2 = () => { return "hello"; };

console.log(_.isFunction(func1));
console.log(_.isFunction(func2));