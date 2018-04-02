/* max_.max(list, [iteratee], [context]) 
Returns the maximum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. 
-Infinity is returned if list is empty, so an isEmpty guard may be required. Non-numerical values in list will be ignored.*/

var _ = require('underscore');

var results = _.max([{name: "Doe", firstname: "John", age: 40},
          {name: "Deere", firstname: "John", age: 74}, 
          {name: "Doe", firstname: "Jo", age: 45}, 
          {name: "Dep", firstname: "Johnnny", age: 54}], function(item){ return item.age; });

console.log(results);