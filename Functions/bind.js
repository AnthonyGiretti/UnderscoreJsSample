/* bind_.bind(function, object, *arguments) 
Bind a function to an object, meaning that whenever the function is called, the value of this will be the object. 
Optionally, pass arguments to the function to pre-fill them, also known as partial application. 
For partial application without context binding, use partial. */

var _ = require('underscore');

var func = function(title){ console.log(title + ' ' + this.fruits) };
func = _.bind(func, {fruits: 'Apple and Banana'}, 'My favorite fruits are');
func();