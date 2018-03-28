var _ = require('underscore');

var testObject = {definedKey: 'alreadyDefinedValue'};

var value = _.defaults(testObject, {definedKey: 'redefinedValue that won\'t show up', undefinedKey: 'defined because it was undefined' });
console.log(value);