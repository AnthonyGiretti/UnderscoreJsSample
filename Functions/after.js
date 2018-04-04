/* after_.after(count, function) 
Creates a version of the function that will only be run after being called count times. 
Useful for grouping asynchronous responses, where you want to be sure that all the async calls have finished, before proceeding. */

var _ = require('underscore');

var doWork = _.after(3, () => {console.log("do work")});

doWork();
doWork();
doWork();
doWork();
doWork();