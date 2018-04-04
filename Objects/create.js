/* create_.create(prototype, props) 
Creates a new object with the given prototype, optionally attaching props as own properties. 
Basically, Object.create, but without all of the property descriptor jazz. */

var _ = require('underscore');

var person = {
	name: 'SomeName'
};

var value = _.create(person.prototype, {otherName: 'SomeOtherName'});
console.log(value);