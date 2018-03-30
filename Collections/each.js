/* each_.each(list, iteratee, [context]) Alias: forEach 
Iterates over a list of elements, yielding each in turn to an iteratee function. 
The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: (element, index, list). 
If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining. */

var _ = require('underscore');

var myFunction = function(element, index, list)
{
    console.log(`Element : ${element}, Index : ${index}, Element found by index : ${list[index]}`);
}
_.each(["Apple", "Banana", "Grapefruit"], myFunction);

_.each({one: "Apple", two : "Banana", three : "Grapefruit"}, myFunction);