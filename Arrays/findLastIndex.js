/* findLastIndex_.findLastIndex(array, predicate, [context]) 
Like _.findIndex but iterates the array in reverse, returning the index closest to the end where the predicate truth test passes.*/

var _ = require('underscore');

const isPrime = num => {
    for (var i = 2; i < num; i++) if (num % i == 0) return false;
    return num >= 2; 
  }
  
var value = _.findLastIndex([4, 6, 7, 11, 12, 17], isPrime);
console.log(value);