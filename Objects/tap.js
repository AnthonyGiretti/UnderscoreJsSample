var _ = require('underscore');

var value = _.chain([1,2,3])
		.map(function(num) { return num + 1})
		.tap(function(arr) { console.log(arr) })
		.map(function(num) { return num * 2})
		.value();
console.log(value);