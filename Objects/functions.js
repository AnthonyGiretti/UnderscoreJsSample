/* functions_.functions(object) Alias: methods 
Returns a sorted list of the names of every method in an object — that is to say, the name of every function property of the object. */

var _ = require('underscore');

var testObject = {
	fruit: 'apple',
	testFunction: function(){
		console.log('test');
	}
}

var value = _.functions(testObject);
console.log(value);