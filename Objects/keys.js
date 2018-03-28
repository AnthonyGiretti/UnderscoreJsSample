var _ = require('underscore');

function Test(fruit, vegetable) {
	this.fruit = fruit;
	this.vegetable = vegetable;
}

Test.prototype.number = 'one';

var value = _.keys(new Test('apple', 'brocoli'));
console.log(value);