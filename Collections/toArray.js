/* toArray_.toArray(list) 
Creates a real Array from the list (anything that can be iterated over). Useful for transmuting the arguments object. */

var _ = require('underscore');

var value = (function(){ return _.toArray(arguments); })("Apple", "Banana", "Grapefruit","PineApple");
console.log(value);