/* unzip_.unzip(array) 
The opposite of zip. Given an array of arrays, returns a series of new arrays, the first of which contains all of the first elements in the input arrays, the second of which contains all of the second elements, and so on.*/

var _ = require('underscore');

var value = _.unzip([["Canada", "Apple", "red"], ["USA", "Grape", "yellow"]]);
console.log(value);