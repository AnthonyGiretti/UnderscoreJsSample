/* isArguments_.isArguments(object) 
Returns true if object is an Arguments object. */

var _ = require('underscore');


console.log((function(){ return _.isArguments(arguments); })("test"));
