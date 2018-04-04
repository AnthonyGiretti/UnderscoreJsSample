/* defaults_.defaults(object, *defaults) 
Fill in undefined properties in object with the first value present in the following list of defaults objects. */

var _ = require('underscore');

var testObject = {definedKey: 'alreadyDefinedValue'};

var value = _.defaults(testObject, {definedKey: 'redefinedValue that won\'t show up', undefinedKey: 'defined because it was undefined' });
console.log(value);