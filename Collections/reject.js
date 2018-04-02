/* reject_.reject(list, predicate, [context]) 
Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.*/

var _ = require('underscore');

var results = _.reject([{name: "Doe", firstname: "John"},
          {name: "Deere", firstname: "John"}, 
          {name: "Doe", firstname: "Elias"}, 
          {name: "Dep", firstname: "Johnny"}], function(item){ return item.name == "Doe"; });

console.log(results);