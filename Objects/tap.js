/* tap_.tap(object, interceptor) 
Invokes interceptor with the object, and then returns object. 
The primary purpose of this method is to "tap into" a method chain, in order to perform operations on intermediate results within the chain.*/

var _ = require('underscore');

var value = _.chain([1,2,3])
		.map(function(num) { return num + 1})
		.tap(function(arr) { console.log(arr) })
		.map(function(num) { return num * 2})
		.value();
console.log(value);