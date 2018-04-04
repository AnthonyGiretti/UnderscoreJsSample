/* isError_.isError(object) 
Returns true if object inherits from an Error.*/

var _ = require('underscore');

try {
    throw new TypeError("Error");
  } catch (o_O) {
    console.log(_.isError(o_O));
    console.log(_.isError(o_O.message));
  }