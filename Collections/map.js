/* map_.map(list, iteratee, [context]) Alias: collect 
Produces a new array of values by mapping each value in list through a transformation function (iteratee). 
The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.*/

var _ = require('underscore');


var value = _.map([10, 20, 30], function(element) {
    return element * 10;
});

console.log(value);

var value2 = _.map({one: 10, two : 20, three : 30},  function(element, key) {
    return element * 5;
});

console.log(value2);
