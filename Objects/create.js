var _ = require('underscore');

var person = {
	name: 'SomeName'
};

var value = _.create(person.prototype, {name: 'SomeOtherName'});
console.log(value);