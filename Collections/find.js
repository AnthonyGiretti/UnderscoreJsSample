/* where_.where(list, properties) 
Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties. */

var _ = require('underscore');

var value = _.find(["Apple", "Banana", "Grapefruit"], function(value) {
    return value.indexOf("p") >0;
});
console.log(value);