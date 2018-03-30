/* countBy_.countBy(list, iteratee, [context]) 
Sorts a list into groups and returns a count for the number of objects in each group. 
Similar to groupBy, but instead of returning a list of values, returns a count for the number of values in that group. */

var _ = require('underscore');

var listOfProducts = [
    {country : "Canada", fruit : "Apple", color : "red"},
    {country : "Canada", fruit : "Apple", color : "green"},
    {country : "USA", fruit : "Grape", color : "yellow"},
    {country : "USA", fruit : "Apple", color : "red"},
    {country : "USA", fruit : "Lemon", color : "yellow"},
    {country : "USA", fruit : "Lemon", color : "green"},
    {country : "France", fruit : "Grape", color : "black"},
    {country : "France", fruit : "Grape", color : "green"},
    {country : "France", fruit : "Apple", color : "yellow"}
];

var value = _.countBy(listOfProducts, function(item){ return item.country});
console.log(value);