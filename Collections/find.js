/* find_.find(list, predicate, [context]) Alias: detect 
Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test.
The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list. */

var _ = require('underscore');

var value = _.find(["Apple", "Banana", "Grapefruit"], function(value) {
    return value.indexOf("p") >0;
});
console.log(value);