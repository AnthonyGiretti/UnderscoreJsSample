var _ = require('underscore');

var test1 = true;
var test2 = false;
var test3 = null;
var test4 = 5;
var test5 = undefined;

console.log(_.isBoolean(test1));
console.log(_.isBoolean(test2));
console.log(_.isBoolean(test3));
console.log(_.isBoolean(test4));
console.log(_.isBoolean(test5));