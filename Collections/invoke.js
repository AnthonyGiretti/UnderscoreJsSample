/* invoke_.invoke(list, methodName, *arguments) 
Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.*/

var _ = require('underscore');

var value = _.invoke([["Banana", "Apple", "Grapefruit"]], 'sort');
console.log(value);

var value2 = _.invoke([[5, 1, 7], [3, 2, 1]], 'pop');
console.log(value2);