/* some_.some(list, [predicate], [context]) Alias: any 
Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found.*/

var _ = require('underscore');

var results = _.some([{name: "Doe", firstname: "John"},
          {name: "Deere", firstname: "John"}, 
          {name: "Doe", firstname: "Jo"}, 
          {name: "Dep", firstname: "Johnnny"}], function(item){ return item.firstname.length > 4; });

console.log(results);