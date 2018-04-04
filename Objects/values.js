/* values_.values(object) 
Return all of the values of the object's own properties. */

var _ = require('underscore');

function Test(fruit, vegetable) {
	this.fruit = fruit;
	this.vegetable = vegetable;
}

var value = _.values(new Test('apple', 'brocoli'));
console.log(value);