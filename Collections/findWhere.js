/* findWhere_.findWhere(list, properties) 
Looks through the list and returns the first value that matches all of the key-value pairs listed in properties.

If no match is found, or if list is empty, undefined will be returned. */

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

var value = _.findWhere(listOfProducts, {color : "yellow"});
console.log(value);