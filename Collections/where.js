/* where_.where(list, properties) 
Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.*/

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

var value = _.where(listOfProducts, {country : "USA", fruit : "Lemon"});
console.log(value);