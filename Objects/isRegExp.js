/* isRegExp_.isRegExp(object) 
Returns true if object is a RegExp.*/

var _ = require('underscore');

var regex1 = /\w+/;
var regex2 = new RegExp('\\w+');

console.log(_.isRegExp(regex1));
console.log(_.isRegExp(regex2));