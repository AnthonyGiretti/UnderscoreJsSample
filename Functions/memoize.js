/* memoize_.memoize(function, [hashFunction]) 
Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations. 
If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based on the arguments to the original function. 
The default hashFunction just uses the first argument to the memoized function as the key. 
The cache of memoized values is available as the cache property on the returned function. */

var _ = require('underscore');

var fibonacci = _.memoize(function(n) {
    console.log(n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2));
});

fibonacci(3);