var _ = require('underscore');

var testObject = {firstKey: 'firstValue', seccondKey: 'secondValue', thirdKey: 'thirdValue'};

var value = _.extend(testObject, { fourthKey: 'fourthValue' });
console.log(value);