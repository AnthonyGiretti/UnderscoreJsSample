/* indexBy_.indexBy(list, iteratee, [context]) 
Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item.
Just like groupBy, but for when you know your keys are unique.*/

var _ = require('underscore');

var listOfProducts = [
    {country : "Canada", fruit : "Apple", color : "red"},
    {country : "USA", fruit : "Grape", color : "yellow"},
    {country : "France", fruit : "Grape", color : "black"},
];

var value = _.indexBy(listOfProducts, function(item){ return item.country});
console.log(value);