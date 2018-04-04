/* wrap_.wrap(function, wrapper) 
Wraps the first function inside of the wrapper function, passing it as the first argument. 
This allows the wrapper to execute code before and after the function runs, adjust the arguments, and execute it conditionally.*/ 
var _ = require('underscore');

var hello = function(name) { return "hello " + name; };
hello = _.wrap(hello, function(func) {
  return "before, " + func("world") + ", after";
});
hello();