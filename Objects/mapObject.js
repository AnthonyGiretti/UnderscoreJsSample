/* mapObject_.mapObject(object, iteratee, [context]) 
Like map, but for objects. Transform the value of each property in turn.*/

var _ = require('underscore');

value = _.mapObject({one: 10, two : 20, three : 30},  function(element, key) {
    return element * 5;
});

console.log(value);