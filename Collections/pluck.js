/* pluck_.pluck(list, propertyName) 
A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.*/

var _ = require('underscore');

var value = _.pluck([{name: "Doe", firstname: "John"},
{name: "Deere", firstname: "John"}, 
{name: "Doe", firstname: "Elias"}, 
{name: "Dep", firstname: "Johnny"}], 'firstname');
console.log(value);