/* findIndex_.findIndex(array, predicate, [context]) 
Similar to _.indexOf, returns the first index where the predicate truth test passes; otherwise returns -1.*/

var _ = require('underscore');

const isPrime = num => {
    for (var i = 2; i < num; i++) if (num % i == 0) return false;
    return num >= 2; 
  }
  
var value = _.findIndex([4, 6, 8, 12], isPrime);
console.log(value);

value = _.findIndex([4, 6, 7, 12], isPrime);
console.log(value);