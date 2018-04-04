/* before_.before(count, function) 
Creates a version of the function that can be called no more than count times. 
The result of the last function call is memoized and returned when count has been reached.*/
var _ = require('underscore');

var doWork = _.before(3, () => {console.log("work done")});
doWork();
doWork();
doWork();
doWork();
