/* every_.every(list, [predicate], [context]) Alias: all 
Returns true if all of the values in the list pass the predicate truth test. 
Short-circuits and stops traversing the list if a false element is found. */

var _ = require('underscore');

var results = _.every([{name: "Doe", firstname: "John"},
          {name: "Deere", firstname: "John"}, 
          {name: "Doe", firstname: "John"}, 
          {name: "Dep", firstname: "John"}], function(item){ return item.firstname == "John"; });

console.log(results);