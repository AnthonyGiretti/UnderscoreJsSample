/*groupBy_.groupBy(list, iteratee, [context]) 
Splits a collection into sets, grouped by the result of running each value through iteratee. If iteratee is a string instead of a function, groups by the property named by iteratee on each of the values.

_.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
=> {1: [1.3], 2: [2.1, 2.4]}

_.groupBy(['one', 'two', 'three'], 'length');
=> {3: ["one", "two"], 5: ["three"]}*/

var _ = require('underscore');

var listOfProducts = [
    {country : "Canada", fruit : "Apple", color : "red", price: 1.2},
    {country : "Canada", fruit : "Apple", color : "green", price: 1.1},
    {country : "USA", fruit : "Grape", color : "yellow", price: 1.1},
    {country : "USA", fruit : "Apple", color : "red", price: 1},
    {country : "USA", fruit : "Lemon", color : "yellow", price: 0.5},
    {country : "USA", fruit : "Lemon", color : "green", price: 0.5},
    {country : "France", fruit : "Grape", color : "black", price: 1.1},
    {country : "France", fruit : "Grape", color : "green", price: 1.1},
    {country : "France", fruit : "Apple", color : "yellow", price: 1.2}
];

var value = _.groupBy(listOfProducts, function(item){ return item.country});
console.log(value);

var value2 = _.groupBy(listOfProducts, function(item){ return item.price});
console.log(value2);