/* partition_.partition(array, predicate) 
Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.*/

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

var value = _.partition(listOfProducts, function(item){ return item.country == "France"});
console.log(value);