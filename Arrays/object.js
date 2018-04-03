/* object_.object(list, [values]) 
Converts arrays into objects. Pass either a single list of [key, value] pairs, or a list of keys, and a list of values. If duplicate keys exist, the last value wins. */

var _ = require('underscore');

var value = _.object(["Canada","USA","France"], ["Apple", "Grape", "Lemon"]);
console.log(value);