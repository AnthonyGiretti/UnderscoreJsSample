/* range_.range([start], stop, [step]) 
A function to create flexibly-numbered lists of integers, handy for each and map loops. start, if omitted, defaults to 0; step defaults to 1. 
Returns a list of integers from start (inclusive) to stop (exclusive), incremented (or decremented) by step, exclusive. 
Note that ranges that stop before they start are considered to be zero-length instead of negative — if you'd like a negative range, use a negative step. */

var _ = require('underscore');

var value = _.range(10);
console.log(value);

value = _.range(10, 20);
console.log(value);

value = _.range(0, 20, 5);
console.log(value);