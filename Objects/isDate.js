/* isDate_.isDate(object) 
Returns true if object is a Date. */

var _ = require('underscore');

var test1 = new Date();
var test2 = false;
var test3 = null;
var test4 = 5;
var test5 = undefined;

console.log(_.isDate(test1));
console.log(_.isDate(test2));
console.log(_.isDate(test3));
console.log(_.isDate(test4));
console.log(_.isDate(test5));