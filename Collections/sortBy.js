/* sortBy_.sortBy(list, iteratee, [context]) 
Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee. 
iteratee may also be the string name of the property to sort by (eg. length).*/

var _ = require('underscore');

var value = _.sortBy([{name: "stallone", firstname: "Sylvester"},
{name: "lundgren", firstname: "Dolf"}, 
{name: "Schwartzenegger", firstname: "Arnold"}, 
{name: "Statham", firstname: "Jason"}], 'firstname');
console.log(value);