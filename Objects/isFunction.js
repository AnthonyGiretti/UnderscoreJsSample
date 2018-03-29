var _ = require('underscore');

var func1 = function () { return "hello"; }
var func2 = () => { return "hello"; };

console.log(_.isFunction(func1));
console.log(_.isFunction(func2));