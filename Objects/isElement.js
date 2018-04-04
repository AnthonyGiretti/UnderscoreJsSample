/* isElement_.isElement(object) 
Returns true if object is a DOM element. */

var _ = require('underscore');

// works only in HTML page
var element = document.createElement("test");

console.log(_.isElement(element));