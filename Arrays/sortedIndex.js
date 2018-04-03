/* sortedIndex_.sortedIndex(list, value, [iteratee], [context]) 
Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order. 
If an iteratee function is provided, it will be used to compute the sort ranking of each value, including the value you pass. 
The iteratee may also be the string name of the property to sort by (eg. length). */

var _ = require('underscore');

var listOfProducts = [
    {country : "Canada", fruit : "Apple", color : "red", price : 0.75},
    {country : "Canada", fruit : "Apple", color : "green", price : 0.80},
    {country : "USA", fruit : "Grape", color : "yellow", price : 2},
    {country : "USA", fruit : "Apple", color : "red", price : 0.70},
    {country : "USA", fruit : "Lemon", color : "yellow", price : 0.60},
    {country : "USA", fruit : "Lemon", color : "green", price : 0.65},
    {country : "France", fruit : "Grape", color : "black", price : 2.05},
    {country : "France", fruit : "Grape", color : "green", price : 1.95},
    {country : "France", fruit : "Apple", color : "yellow", price : 0.85}
];

var value = _.sortedIndex(listOfProducts, {country : "France", fruit : "Grape", color : "green", price : 1.90}, 'price');
console.log(value);

var value = _.sortedIndex([1,2,3,5,6], 4);
console.log(value);