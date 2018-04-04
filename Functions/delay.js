/* delay_.delay(function, wait, *arguments) 
Much like setTimeout, invokes function after wait milliseconds. 
If you pass the optional arguments, they will be forwarded on to the function when it is invoked. */

var _ = require('underscore');

_.delay(console.log, 1000, 'delayed log');