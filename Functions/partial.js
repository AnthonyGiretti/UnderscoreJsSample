/* partial_.partial(function, *arguments) 
Partially apply a function by filling in any number of its arguments, without changing its dynamic this value. A close cousin of bind. 
You may pass _ in your list of arguments to specify an argument that should not be pre-filled, but left open to supply at call-time. */

var _ = require('underscore');

var addition = function(a, b) { console.log(a + b); };
var func = _.partial(addition, 10);
func(20);

var concat = function(firstname, lastname) { console.log(firstname + ' ' + lastname); };
var func = _.partial(concat, "John");
func("Doe");