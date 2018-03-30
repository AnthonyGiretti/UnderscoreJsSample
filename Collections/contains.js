/* contains_.contains(list, value, [fromIndex]) Alias: includes 
Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index. */

var _ = require('underscore');

var results = _.contains(["John", "Jo", "Johnny"], "Johnny");

console.log(results);