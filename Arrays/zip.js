/* zip_.zip(*arrays) 
Merges together the values of each of the arrays with the values at the corresponding position. 
Useful when you have separate data sources that are coordinated through matching array indexes. 
Use with apply to pass in an array of arrays. If you're working with a matrix of nested arrays, this can be used to transpose the matrix.*/

var _ = require('underscore');

var value = _.zip(["Canada","USA","France"], ["Apple", "Grape", "Lemon"]);
console.log(value);