var _ = require('underscore');

// works only in HTML page
var element = document.createElement("test");

console.log(_.isElement(element));