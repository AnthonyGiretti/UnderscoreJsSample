/* throttle_.throttle(function, wait, [options]) 
Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly, will only actually call the original function at most once per every wait milliseconds. Useful for rate-limiting events that occur faster than you can keep up with.

By default, throttle will execute the function as soon as you call it for the first time, and, if you call it again any number of times during the wait period, as soon as that period is over. If you'd like to disable the leading-edge call, pass {leading: false}, and if you'd like to disable the execution on the trailing-edge, pass 
{trailing: false}. */

var _ = require('underscore');

var func = () => {console.log(Date.now);};
var log = _.throttle(func, 5);
log();
log();
log();
log();
log();
log();
log();