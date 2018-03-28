var _ = require('underscore');

var testObject = {
	fruit: 'apple',
	testFunction: function(){
		console.log('test');
	}
}

var value = _.functions(testObject);
console.log(value);