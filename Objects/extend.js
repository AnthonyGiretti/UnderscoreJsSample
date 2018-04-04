/* extend_.extend(destination, *sources) 
Shallowly copy all of the properties in the source objects over to the destination object, and return the destination object. 
Any nested objects or arrays will be copied by reference, not duplicated. 
It's in-order, so the last source will override properties of the same name in previous arguments.*/

var _ = require('underscore');

var testObject = {firstKey: 'firstValue', seccondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.extend(testObject, { fourthKey: 'fourthValue' });
console.log(value);