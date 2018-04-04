/* defer_.defer(function, *arguments) 
Defers invoking the function until the current call stack has cleared, similar to using setTimeout with a delay of 0. 
Useful for performing expensive computations or HTML rendering in chunks without blocking the UI thread from updating. 
If you pass the optional arguments, they will be forwarded on to the function when it is invoked. */

var _ = require('underscore');

_.defer(function(){ console.log('deferred !!! because stack is clear'); });
// Returns from the function before the alert runs.
console.log('stack not cleared yet');
console.log('stack cleared! ');