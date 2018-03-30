/* filter_.filter(list, predicate, [context]) Alias: select 
Looks through each value in the list, returning an array of all the values that pass a truth test (predicate). */

var _ = require('underscore');

var value = _.filter(["Apple", "Banana", "Grapefruit"], function(value) {
    return value.indexOf("p") >0;
});
console.log(value);